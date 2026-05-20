import type { Metadata } from "next";
import { LegalPlaceholderPage } from "@/components/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Disclaimers | Home Money Check",
  description: "Working draft disclaimers for Home Money Check.",
};

export default function DisclaimersPage() {
  return (
    <LegalPlaceholderPage
      eyebrow="Disclaimers"
      title="Disclaimers"
      description="Clear working draft disclaimers for Home Money Check routes and related enquiries."
      sections={[
        {
          title: "General disclaimer",
          body: "Home Money Check is designed to help people ask for checks and conversations. It is not a comparison site, official UW site, financial advice site or legal advice service.",
        },
        {
          title: "Utility Warehouse disclaimer",
          body: "Home Money Check is not operated by Utility Warehouse and does not use UW branding as an official UW site. Where relevant, UW services or the Partner opportunity will be explained through the correct process.",
        },
        {
          title: "No guaranteed savings",
          body: "A check may identify options worth considering, but savings are not guaranteed.",
        },
        {
          title: "£20K Giveaway disclaimer",
          body: "Home Money Check is not the official prize draw entry form unless later confirmed through an approved process. Enquiries about the giveaway must be handled through the correct Utility Warehouse route.",
        },
        {
          title: "Mortgage disclaimer",
          body: "Mortgage advice will only be provided through the appropriate regulated mortgage advice route.",
        },
        {
          title: "Insurance and protection disclaimer",
          body: "Protection insurance and private medical insurance are separate from Utility Warehouse-related pages and must be handled through the appropriate regulated route. Do not imply they are sold through UW.",
        },
        {
          title: "Estate planning disclaimer",
          body: "General estate planning information is not legal advice. Formal advice or documents depend on the correct professional process.",
        },
        {
          title: "Extra income disclaimer",
          body: "No income is guaranteed. The opportunity may not be suitable for everyone.",
        },
        {
          title: "Business utilities and finance services disclaimer",
          body: "Business utilities and finance services may depend on final provider and scope checks. Do not imply services are available where not yet confirmed.",
        },
      ]}
    />
  );
}
