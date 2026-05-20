import type { Metadata } from "next";
import { LegalPlaceholderPage } from "@/components/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Home Money Check",
  description: "Working draft privacy policy for Home Money Check.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPlaceholderPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      description="A plain-English working draft explaining how Home Money Check handles enquiry information."
      sections={[
        {
          title: "Who we are",
          body: "Home Money Check is run by Neill Connolly.",
        },
        {
          title: "What information we collect",
          body: [
            "Name.",
            "Email address.",
            "Mobile number.",
            "Postcode, if provided.",
            "Chosen check or service interest.",
            "Message and enquiry details.",
            "Consent choices.",
            "Source page.",
            "Admin notes and status updates added internally after an enquiry.",
          ],
        },
        {
          title: "Why we use your information",
          body: [
            "To respond to enquiries.",
            "To understand what check or service you are asking about.",
            "To arrange follow-up where appropriate.",
            "To keep basic enquiry records.",
            "To send occasional updates only where you have actively opted in.",
          ],
        },
        {
          title: "Lawful basis",
          body: "We usually rely on consent when you submit an enquiry and agree to be contacted. We may also rely on legitimate interests for basic enquiry handling and business record keeping. Marketing updates are only sent where you have opted in or where another lawful basis clearly applies.",
        },
        {
          title: "Sharing information",
          body: "Information may be shared only where needed to deal with your enquiry. Utility Warehouse-related enquiries may be handled through the correct UW process. Mortgage, protection, insurance or estate planning enquiries may be handled through the relevant regulated or professional route. Technical providers such as website hosting, database and email tools may process data for the site.",
        },
        {
          title: "Utility Warehouse note",
          body: "Home Money Check is not operated by Utility Warehouse. If an enquiry relates to Utility Warehouse, the correct UW process will be explained before anything proceeds.",
        },
        {
          title: "How long information is kept",
          body: "Enquiry records are normally kept for up to 24 months from the last meaningful contact, unless a longer period is needed for legal, regulatory, complaint-handling or legitimate business reasons.",
        },
        {
          title: "Your rights",
          body: "You may have rights to access, correct, delete or restrict use of your information, object to some uses, withdraw consent where consent is used, and complain to the ICO.",
        },
        {
          title: "Contact",
          body: "Contact email to be added before public launch.",
        },
        {
          title: "Cookies and analytics",
          body: "At this stage, Home Money Check does not intentionally use non-essential analytics or advertising cookies. If analytics, advertising pixels or similar tools are added later, this policy and any cookie controls will be updated.",
        },
      ]}
    />
  );
}
