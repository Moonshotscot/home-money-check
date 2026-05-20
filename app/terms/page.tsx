import type { Metadata } from "next";
import { LegalPlaceholderPage } from "@/components/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Terms | Home Money Check",
  description: "Home Money Check terms placeholder for pre-launch review.",
};

export default function TermsPage() {
  return (
    <LegalPlaceholderPage
      eyebrow="Terms"
      title="Terms"
      description="This page will set out the terms for using Home Money Check and submitting an enquiry."
      points={[
        "Home Money Check information is provided as a practical enquiry route.",
        "Final service terms will depend on the relevant provider, adviser or process.",
        "This placeholder will be replaced with reviewed terms before launch.",
      ]}
    />
  );
}
