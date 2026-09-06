import { NextResponse } from "next/server";
import { requireHmcAdmin } from "@/lib/integrationAuth";
import type { Enquiry, EnquiryCheck } from "@/lib/admin";

const enquiryColumns = "id,created_at,name,email,mobile,postcode,selected_check,source_page,message,consent_contact,consent_updates,status,admin_notes,last_contacted_at,converted_at,updated_at";
const checkColumns = "id,enquiry_id,check_key,check_label,status,assigned_to,source_page,notes,created_at";

function splitName(value: string | null) {
  const parts = (value || "").trim().replace(/\s+/g, " ").split(" ").filter(Boolean);
  return { firstName: parts.shift() || "", lastName: parts.join(" ") };
}

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await requireHmcAdmin(request);
  if (!auth.client) return NextResponse.json({ error: auth.error }, { status: auth.status });

  const secret = process.env.CPH_HMC_INTEGRATION_SECRET;
  const webhookUrl = process.env.CPH_HMC_WEBHOOK_URL || "https://cph-portal.vercel.app/api/hmc-leads";
  if (!secret) return NextResponse.json({ error: "The CPH connection is not configured." }, { status: 503 });

  const { id } = await context.params;
  const [{ data: enquiryData, error: enquiryError }, { data: checkData }] = await Promise.all([
    auth.client.from("enquiries").select(enquiryColumns).eq("id", id).single(),
    auth.client.from("enquiry_checks").select(checkColumns).eq("enquiry_id", id).order("created_at"),
  ]);
  if (enquiryError || !enquiryData) return NextResponse.json({ error: "The enquiry could not be found." }, { status: 404 });

  const enquiry = enquiryData as Enquiry;
  const checks = (checkData || []) as EnquiryCheck[];
  if (enquiry.status === "Sent to CPH") return NextResponse.json({ error: "This enquiry has already been sent to CPH." }, { status: 409 });
  if (!enquiry.consent_contact) return NextResponse.json({ error: "Contact consent is required before sending this enquiry." }, { status: 400 });
  if (!enquiry.email || !enquiry.mobile) return NextResponse.json({ error: "Email and mobile are required before sending this enquiry." }, { status: 400 });

  const { firstName, lastName } = splitName(enquiry.name);
  if (!firstName || !lastName) return NextResponse.json({ error: "A first name and surname are required before sending this enquiry." }, { status: 400 });

  const requestedChecks = checks.length ? checks.map((check) => check.check_label) : [enquiry.selected_check].filter(Boolean);
  const detail = [
    requestedChecks.length ? `Requested checks: ${requestedChecks.join(", ")}` : "",
    enquiry.message ? `Message: ${enquiry.message}` : "",
    enquiry.source_page ? `HMC source: ${enquiry.source_page}` : "",
  ].filter(Boolean).join("\n\n");

  let cphResponse: Response;
  try {
    cphResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        submissionId: `hmc-${enquiry.id}`,
        firstName,
        lastName,
        email: enquiry.email,
        phone: enquiry.mobile,
        postcode: enquiry.postcode || "",
        message: detail,
        consent: true,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    return NextResponse.json({ error: "CPH could not be reached. Nothing was changed in HMC." }, { status: 502 });
  }

  const cphPayload = (await cphResponse.json().catch(() => ({}))) as { error?: string; caseReference?: string; duplicate?: boolean };
  if (!cphResponse.ok || !cphPayload.caseReference) {
    return NextResponse.json({ error: cphPayload.error || "CPH did not accept this enquiry." }, { status: 502 });
  }

  const sentNote = `Sent to CPH as ${cphPayload.caseReference} on ${new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/London" }).format(new Date())}.`;
  const adminNotes = [enquiry.admin_notes?.trim(), sentNote].filter(Boolean).join("\n\n");
  const { data: updated, error: updateError } = await auth.client
    .from("enquiries")
    .update({ status: "Sent to CPH", admin_notes: adminNotes })
    .eq("id", enquiry.id)
    .select(enquiryColumns)
    .single();
  if (updateError || !updated) {
    return NextResponse.json({ error: `CPH created ${cphPayload.caseReference}, but HMC could not mark it as sent. Retrying is safe.` }, { status: 500 });
  }

  if (checks.length) {
    const { error: checkUpdateError } = await auth.client.from("enquiry_checks").update({ status: "Sent to CPH" }).eq("enquiry_id", enquiry.id);
    if (checkUpdateError) console.error("Could not update HMC child check statuses", checkUpdateError);
  }

  return NextResponse.json({
    ok: true,
    duplicate: Boolean(cphPayload.duplicate),
    caseReference: cphPayload.caseReference,
    enquiry: { ...(updated as Enquiry), enquiry_checks: checks.map((check) => ({ ...check, status: "Sent to CPH" })) },
  });
}
