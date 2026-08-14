import type { Metadata } from "next";
import { ReferralBillsPage } from "@/components/home/ReferralBillsPage";

export const metadata: Metadata = {
  title: "Your Staff Bills Check | Home Money Check",
  description: "Start your free gas, electricity and broadband bills check.",
  robots: { index: false, follow: false },
};

export default function EmployeeBillsCheckPage() {
  return <ReferralBillsPage kind="employee" />;
}
