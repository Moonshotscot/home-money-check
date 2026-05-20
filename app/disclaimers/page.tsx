import type { Metadata } from "next";
import { LegalPlaceholderPage } from "@/components/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Disclaimers | Home Money Check",
  description: "Home Money Check disclaimers placeholder for pre-launch review.",
};

export default function DisclaimersPage() {
  return (
    <LegalPlaceholderPage
      eyebrow="Disclaimers"
      title="Disclaimers"
      description="This page will include the final disclaimers for services, referrals and regulated areas."
      points={[
        "Utility Warehouse-related enquiries will need clear independence wording.",
        "Prize draw handling, mortgages, protection and insurance will need final compliance checks.",
        "No guaranteed savings or income claims should be implied.",
      ]}
    />
  );
}
