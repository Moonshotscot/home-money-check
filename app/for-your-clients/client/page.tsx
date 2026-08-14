import type { Metadata } from "next";
import { ReferralBillsPage } from "@/components/home/ReferralBillsPage";

export const metadata: Metadata = {
  title: "Your Introduced Bills Check | Home Money Check",
  description: "Start your introduced gas, electricity and broadband bills check.",
  robots: { index: false, follow: false },
};

export default function IntroducedClientBillsCheckPage() {
  return <ReferralBillsPage kind="client" />;
}
