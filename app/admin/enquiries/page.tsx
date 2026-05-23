import type { Metadata } from "next";
import { EnquiriesAdmin } from "@/components/admin/EnquiriesAdmin";

export const metadata: Metadata = {
  title: "Admin | Home Money Check",
  description: "View and update Home Money Check enquiries.",
};

export default function AdminEnquiriesPage() {
  return <EnquiriesAdmin />;
}
