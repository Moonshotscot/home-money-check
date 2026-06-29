import type { Metadata } from "next";
import { CampaignLandingPage } from "@/components/CampaignLandingPage";
import { campaignPages } from "@/lib/campaign-pages";

const page = campaignPages["staff-bills-check"];

export const metadata: Metadata = {
  title: page.metadataTitle,
  description: page.metadataDescription,
};

export default function StaffBillsCheckPage() {
  return <CampaignLandingPage page={page} />;
}
