import type { Metadata } from "next";
import { DistributionPage } from "@/components/home/DistributionPage";

export const metadata: Metadata = {
  title: "Partner Bills Pages | Home Money Check",
  description: "Create a Home Money Check page for your customers, contacts or followers and see every enquiry it generates.",
  robots: { index: false, follow: true },
};

export default function PartnerBillsCheckPage() {
  return <DistributionPage kind="partner" />;
}
