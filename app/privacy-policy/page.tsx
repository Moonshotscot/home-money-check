import type { Metadata } from "next";
import { LegalPlaceholderPage } from "@/components/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Home Money Check",
  description: "Home Money Check privacy policy placeholder for pre-launch review.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPlaceholderPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      description="This page will explain how Home Money Check collects, uses and protects personal information."
      points={[
        "How enquiries and contact details are handled.",
        "How consent and updates preferences are recorded.",
        "How people can ask for their information to be updated or removed.",
      ]}
    />
  );
}
