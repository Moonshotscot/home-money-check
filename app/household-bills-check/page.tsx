import type { Metadata } from "next";
import { BillsServicePage } from "@/components/home/BillsServicePage";

export const metadata: Metadata = {
  title: "Household Bills Check | Home Money Check",
  description:
    "Check your gas, electricity and broadband bills, combine services and include available cashback and switching support.",
};

export default function HouseholdBillsCheckPage() {
  return <BillsServicePage kind="household" />;
}
