import type { Metadata } from "next";
import { LegalPlaceholderPage } from "@/components/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Terms | Home Money Check",
  description: "Working draft website terms for Home Money Check.",
};

export default function TermsPage() {
  return (
    <LegalPlaceholderPage
      eyebrow="Terms"
      title="Terms"
      description="Simple working draft terms for using the Home Money Check website and enquiry routes."
      sections={[
        {
          title: "About this website",
          body: "Home Money Check helps people make enquiries about household bills, services, home-money checks and related opportunities.",
        },
        {
          title: "No guarantee of savings or outcome",
          body: "The site does not guarantee savings, acceptance, eligibility, availability, approval, entry, income or any particular outcome.",
        },
        {
          title: "Enquiries only",
          body: "Submitting a form is an enquiry, not a contract or application.",
        },
        {
          title: "Accuracy",
          body: "Users should provide accurate information when submitting an enquiry.",
        },
        {
          title: "Utility Warehouse",
          body: "Home Money Check is independent and is not operated by Utility Warehouse. UW-related enquiries will be handled through the correct UW route or process where relevant.",
        },
        {
          title: "£20K Giveaway",
          body: "This website does not pretend to be the official entry form. The page lets users ask about the route. If they continue, entry must be handled through the correct Utility Warehouse process.",
        },
        {
          title: "Mortgages, protection, private medical insurance and estate planning",
          body: "These areas may involve regulated or specialist advice. Website content is general information only and does not replace personalised advice. These pages may be coming soon until final wording is approved.",
        },
        {
          title: "Partner and extra income opportunity",
          body: "No income is guaranteed. Results depend on effort, suitability, activity, compliance, customer circumstances and other factors.",
        },
        {
          title: "Website availability",
          body: "The site may change, be updated or be unavailable from time to time.",
        },
        {
          title: "Contact",
          body: "Contact email to be added before public launch.",
        },
      ]}
    />
  );
}
