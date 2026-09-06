import { NextResponse } from "next/server";
import { integrationSecretMatches } from "@/lib/integrationAuth";
import { createAdminSupabase } from "@/lib/serverSupabase";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secret = process.env.CPH_HMC_INTEGRATION_SECRET;
  if (!secret) return NextResponse.json({ error: "Integration is not configured." }, { status: 503 });
  if (!integrationSecretMatches(request.headers.get("authorization"), secret)) {
    return NextResponse.json({ error: "Authentication failed." }, { status: 401 });
  }

  try {
    const { count, error } = await createAdminSupabase()
      .from("enquiries")
      .select("id", { count: "exact", head: true })
      .eq("status", "New");
    if (error) throw error;
    return NextResponse.json({ count: count ?? 0 }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Could not count pending HMC enquiries", error);
    return NextResponse.json({ error: "Pending enquiries could not be counted." }, { status: 500 });
  }
}
