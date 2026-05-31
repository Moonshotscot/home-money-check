import { createClient } from "@supabase/supabase-js";

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
  const { error } = await supabase.rpc("create_enquiry_with_checks", {
    p_consent_contact: payload.consent_contact,
    p_consent_updates: payload.consent_updates,
    p_email: payload.email,
    p_message: payload.message || null,
    p_mobile: payload.mobile,
    p_name: payload.name,
    p_postcode: payload.postcode || null,
    p_requested_checks: payload.requested_checks,
    p_source_page: payload.source_page,
  });

  if (error) {
    throw error;
  }
}

export async function insertUpdateSubscriber(payload: UpdateSignupPayload) {
  const { error } = await supabase.rpc("upsert_update_subscriber", {
    p_consent_updates: payload.consent_updates,
    p_email: payload.email,
    p_first_name: payload.first_name,
    p_interests: payload.interests,
    p_postcode: payload.postcode || null,
    p_source_page: payload.source_page,
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
