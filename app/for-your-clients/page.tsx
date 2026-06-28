import type { Metadata } from "next";
import { CampaignLandingPage } from "@/components/CampaignLandingPage";
import { campaignPages } from "@/lib/campaign-pages";

const page = campaignPages["for-your-clients"];

export const metadata: Metadata = { title: page.metadataTitle };

export default function ForYourClientsPage() {
  return <CampaignLandingPage page={page} />;
}
