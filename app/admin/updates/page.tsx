import type { Metadata } from "next";
import { UpdatesAdmin } from "@/components/admin/UpdatesAdmin";

export const metadata: Metadata = {
  title: "Updates | Home Money Check Admin",
  description: "View Home Money Check update signups.",
};

export default function AdminUpdatesPage() {
  return <UpdatesAdmin />;
}
