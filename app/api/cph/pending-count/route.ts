import { NextResponse } from "next/server";
import { integrationSecretMatches } from "@/lib/integrationAuth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secret = process.env.CPH_HMC_INTEGRATION_SECRET;
  if (!secret) return NextResponse.json({ error: "Integration is not configured." }, { status: 503 });
  if (!integrationSecretMatches(request.headers.get("authorization"), secret)) {
    return NextResponse.json({ error: "Authentication failed." }, { status: 401 });
  }

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serverKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serverKey) throw new Error("HMC database configuration is missing.");

    const databaseResponse = await fetch(
      `${supabaseUrl.replace(/\/$/, "")}/rest/v1/enquiries?select=id&status=eq.New`,
      {
        method: "HEAD",
        headers: { apikey: serverKey, Prefer: "count=exact" },
        cache: "no-store",
      },
    );
    const contentRange = databaseResponse.headers.get("content-range");
    const total = contentRange?.split("/").at(-1);
    if (!databaseResponse.ok || !total || total === "*") {
      console.error("HMC pending-count database error", {
        status: databaseResponse.status,
        hasContentRange: Boolean(contentRange),
      });
      throw new Error("The HMC database count failed.");
    }

    return NextResponse.json({ count: Number(total) }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Could not count pending HMC enquiries", error);
    return NextResponse.json({ error: "Pending enquiries could not be counted." }, { status: 500 });
  }
}
