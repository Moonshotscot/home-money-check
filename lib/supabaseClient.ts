type EnquiryPayload = {
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
    supabaseUrl: supabaseUrl.replace(/\/$/, ""),
  };
}

export async function insertEnquiry(payload: EnquiryPayload) {
  const { supabaseKey, supabaseUrl } = getSupabaseConfig();

  const response = await fetch(`${supabaseUrl}/rest/v1/enquiries`, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Supabase insert failed with status ${response.status}.`);
  }
}
