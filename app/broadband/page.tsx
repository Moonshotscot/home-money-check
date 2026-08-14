import type { Metadata } from "next";
import { BillsServicePage } from "@/components/home/BillsServicePage";

export const metadata: Metadata = {
  title: "Broadband Check | Home Money Check",
  description:
    "Check the broadband available at your address, the speed your household needs and whether a new quote could save you money.",
};

export default function BroadbandPage() {
  return <BillsServicePage kind="broadband" />;
}
