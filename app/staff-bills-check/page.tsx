import type { Metadata } from "next";
import { DistributionPage } from "@/components/home/DistributionPage";

export const metadata: Metadata = {
  title: "Staff Bills Check | Home Money Check",
  description: "Give your staff a free gas, electricity and broadband bills check through Home Money Check.",
  robots: { index: false, follow: true },
};

export default function StaffBillsCheckPage() {
  return <DistributionPage kind="staff" />;
}
