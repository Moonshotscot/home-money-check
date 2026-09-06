import "server-only";

import { createClient } from "@supabase/supabase-js";

function supabaseUrl() {
  const value = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!value) throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL.");
  return value;
}

function publicKey() {
  const value = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!value) throw new Error("Missing the Supabase public key.");
  return value;
}

export function createRequestSupabase(authorization: string) {
  return createClient(supabaseUrl(), publicKey(), {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { Authorization: authorization } },
  });
}
