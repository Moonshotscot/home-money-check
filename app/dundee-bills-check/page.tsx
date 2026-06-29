import type { Metadata } from "next";
import { CampaignLandingPage } from "@/components/CampaignLandingPage";
import { campaignPages } from "@/lib/campaign-pages";

const page = campaignPages["dundee-bills-check"];

export const metadata: Metadata = {
  title: page.metadataTitle,
  description: page.metadataDescription,
};

export default function DundeeBillsCheckPage() {
  return <CampaignLandingPage page={page} />;
}
