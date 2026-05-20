import { createClient } from "@supabase/supabase-js";

export type EnquiryPayload = {
  name: string;
  email: string;
  mobile: string;
  postcode?: string;
  selected_check: string;
  source_page: string;
  message?: string;
  consent_contact: boolean;
  consent_updates: boolean;
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
  const { error } = await supabase.from("enquiries").insert(payload);

  if (error) {
    throw error;
  }
}
