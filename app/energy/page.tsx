import type { Metadata } from "next";
import { BillsServicePage } from "@/components/home/BillsServicePage";

export const metadata: Metadata = {
  title: "Energy Check | Home Money Check",
  description:
    "Check your gas and electricity costs, available household energy quote, combined-service savings and switching support with Home Money Check.",
};

export default function EnergyPage() {
  return <BillsServicePage kind="energy" />;
}
