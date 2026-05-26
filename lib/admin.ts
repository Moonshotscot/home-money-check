import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";

export const enquiryStatuses = [
  "New",
  "Contacted",
  "Quoted",
  "In progress",
  "Converted",
  "Not suitable",
  "Closed",
  "Archived",
  "No response",
  "Booked",
] as const;

export const selectedCheckFilters = [
  "Energy",
  "Broadband",
  "Mobile SIMs",
  "£20K Giveaway",
  "Mortgages",
  "Wills and POAs",
  "Protection",
  "Private Medical Insurance",
  "Business protection",
  "Business utilities",
  "Business continuity",
  "Finance / bookkeeping",
  "Partner with us",
] as const;

export type EnquiryStatus = (typeof enquiryStatuses)[number];

export type EnquiryCheck = {
  id: string;
  enquiry_id: string;
  check_key: string;
  check_label: string;
  status: string | null;
  assigned_to: string | null;
  source_page: string | null;
  notes: string | null;
  created_at: string | null;
};

export type Enquiry = {
  id: string;
  created_at: string | null;
  name: string | null;
  email: string | null;
  mobile: string | null;
  postcode: string | null;
  selected_check: string | null;
  source_page: string | null;
  message: string | null;
  consent_contact: boolean | null;
  consent_updates: boolean | null;
  status: string | null;
  admin_notes: string | null;
  last_contacted_at: string | null;
  converted_at: string | null;
  updated_at: string | null;
  enquiry_checks?: EnquiryCheck[];
};

export async function isAdminUser(user: User) {
  const checks = [
    { column: "id", value: user.id },
    { column: "email", value: user.email },
  ].filter((check) => check.value);

  for (const check of checks) {
    const { data, error } = await supabase
      .from("admin_users")
      .select("*")
      .eq(check.column, check.value)
      .maybeSingle();

    if (data && !error) {
      return true;
    }
  }

  return false;
}

export function formatDate(value: string | null) {
  if (!value) {
    return "Not set";
  }

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}
