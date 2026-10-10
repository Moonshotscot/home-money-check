import { createClient } from "@supabase/supabase-js";
import { captureLeadSource } from "@/lib/leadSource";

export type EnquiryPayload = {
  name: string;
  email: string;
  mobile: string;
  postcode?: string;
  selected_check: string;
  requested_checks: RequestedCheck[];
  source_page: string;
  message?: string;
  consent_contact: boolean;
  consent_updates: boolean;
};

export type RequestedCheck = {
  key: string;
  label: string;
};

export type UpdateSignupPayload = {
  first_name: string;
  email: string;
  postcode?: string;
  interests: string[];
  consent_updates: boolean;
  source_page: string;
};

function getSupabaseConfig() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL.");
  }

  if (!supabaseKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  }

  return {
    supabaseKey,
    supabaseUrl,
  };
}

const { supabaseKey, supabaseUrl } = getSupabaseConfig();

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function insertEnquiry(payload: EnquiryPayload) {
  const response = await fetch("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, source_page: captureLeadSource(payload.source_page) }),
  });
  const result = await response.json().catch(() => ({})) as { ok?: boolean; error?: string };
  if (!response.ok || result.ok !== true) {
    throw new Error(result.error || "Your enquiry could not be saved. Please try again.");
  }
}

export async function insertUpdateSubscriber(payload: UpdateSignupPayload) {
  const { error } = await supabase.rpc("upsert_update_subscriber", {
    p_consent_updates: payload.consent_updates,
    p_email: payload.email,
    p_first_name: payload.first_name,
    p_interests: payload.interests,
    p_postcode: payload.postcode || null,
    p_source_page: captureLeadSource(payload.source_page),
  });

  if (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Supabase updates signup failed", {
        code: error.code,
        details: error.details,
        hint: error.hint,
        message: error.message,
      });
    }

    throw error;
  }
}
