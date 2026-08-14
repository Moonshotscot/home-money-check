import type { Metadata } from "next";
import { ReferralBillsPage } from "@/components/home/ReferralBillsPage";

export const metadata: Metadata = {
  title: "Your Partner Bills Check | Home Money Check",
  description: "Start a free gas, electricity and broadband bills check through a Home Money Check partner.",
  robots: { index: false, follow: false },
};

export default function PartnerCustomerBillsCheckPage() {
  return <ReferralBillsPage kind="partner" />;
}
