import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 16_000) return NextResponse.json({ error: "The enquiry is too long." }, { status: 413 });
    body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("Invalid enquiry.");
  } catch {
    return NextResponse.json({ error: "Invalid enquiry." }, { status: 400 });
  }
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return NextResponse.json({ error: "The enquiry service is unavailable." }, { status: 503 });
  // Preserve the public RPC and its validation; never use privileged database access.
  const database = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await database.rpc("create_enquiry_with_checks", {
    p_consent_contact: body.consent_contact,
    p_consent_updates: body.consent_updates,
    p_email: body.email,
    p_message: body.message || null,
    p_mobile: body.mobile,
    p_name: body.name,
    p_postcode: body.postcode || null,
    p_requested_checks: body.requested_checks,
    p_source_page: body.source_page,
  });
  if (error || typeof data !== "string") {
    console.error("HMC enquiry save failed", { code: error?.code });
    return NextResponse.json({ error: "Your enquiry could not be saved. Please try again." }, { status: 400 });
  }
  // Never make a visitor resubmit an already-saved enquiry because email failed.
  try {
    const secret = process.env.CPH_HMC_INTEGRATION_SECRET;
    if (!secret) throw new Error("HMC alert connection is not configured.");
    const alert = await fetch("https://cph-portal.vercel.app/api/hmc-notification", {
      method: "POST",
      headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
      body: JSON.stringify({ enquiryId: data }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (!alert.ok) throw new Error("The HMC alert was not accepted.");
  } catch {
    console.error("HMC enquiry saved but email alert failed", { enquiryId: data });
  }
  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
