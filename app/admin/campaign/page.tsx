import type { Metadata } from "next";
import { CampaignAdmin } from "@/components/admin/CampaignAdmin";

export const metadata: Metadata = {
  title: "Admin | Home Money Check",
  description: "Manage the Home Money Check campaign panel.",
};

export default function AdminCampaignPage() {
  return <CampaignAdmin />;
}
