import type { Metadata } from "next";
import { CampaignLandingPage } from "@/components/CampaignLandingPage";
import { campaignPages } from "@/lib/campaign-pages";

const page = campaignPages["perthshire-bills-check"];

export const metadata: Metadata = { title: page.metadataTitle };

export default function PerthshireBillsCheckPage() {
  return <CampaignLandingPage page={page} />;
}
