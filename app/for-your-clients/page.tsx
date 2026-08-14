import type { Metadata } from "next";
import { DistributionPage } from "@/components/home/DistributionPage";

export const metadata: Metadata = {
  title: "For Your Clients | Home Money Check",
  description: "Give your clients a direct route to a free gas, electricity and broadband bills check.",
  robots: { index: false, follow: true },
};

export default function ForYourClientsPage() {
  return <DistributionPage kind="introducer" />;
}
