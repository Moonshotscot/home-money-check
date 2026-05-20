import type { Metadata } from "next";
import { EnquiriesAdmin } from "@/components/admin/EnquiriesAdmin";

export const metadata: Metadata = {
  title: "Enquiries | Home Money Check admin",
  description: "View and update Home Money Check enquiries.",
};

export default function AdminEnquiriesPage() {
  return <EnquiriesAdmin />;
}
