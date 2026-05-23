import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type PrivacySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PrivacySection[] = [
  {
    title: "Who we are",
    paragraphs: [
      "Home Money Check is run by Neill Connolly.",
      "You can contact us about this Privacy Policy at:",
      "hello@homemoneycheck.co.uk",
    ],
  },
  {
    title: "What information we collect",
    paragraphs: ["When you send an enquiry through Home Money Check, we may collect:"],
    bullets: [
      "Your name.",
      "Your email address.",
      "Your mobile number.",
      "Your postcode, if you provide it.",
      "The check or service you are asking about.",
      "Your message or enquiry details.",
      "Your consent choices.",
      "The page you used to send the enquiry.",
    ],
  },
  {
    title: "Why we use your information",
    paragraphs: ["We use your information to:"],
    bullets: [
      "Respond to your enquiry.",
      "Understand what you want checked.",
      "Contact you about the service you asked about.",
      "Keep a basic record of your enquiry.",
      "Send occasional updates only if you have chosen to receive them.",
    ],
  },
  {
    title: "Our lawful basis",
    paragraphs: [
      "When you send us your details, we usually rely on your consent to contact you about your enquiry.",
      "We may also rely on legitimate interests where we need to keep basic enquiry records, manage follow-up, improve the service or deal with normal business administration.",
      "If you choose to receive updates, we will only send them where we have a proper lawful basis to do so. You can ask us to stop sending updates at any time.",
    ],
  },
  {
    title: "Who we share information with",
    paragraphs: [
      "We only share information where it is needed to respond to your enquiry, provide the service you asked about, run the website or meet legal requirements.",
      "This may include:",
    ],
    bullets: [
      "Website, hosting, database and email service providers.",
      "Professional or service partners where your enquiry needs to be handled by them.",
      "Regulatory, legal or professional bodies where required.",
    ],
  },
  {
    title: "How long we keep information",
    paragraphs: [
      "We normally keep enquiry records for up to 24 months from the last meaningful contact.",
      "We may keep information for longer if we need to for legal, regulatory, complaint-handling, tax, accounting or legitimate business reasons.",
    ],
  },
  {
    title: "Marketing and updates",
    paragraphs: [
      "If you choose to receive updates, we may send occasional emails about Home Money Check services, offers or useful information.",
      "You can ask us to stop sending updates at any time.",
    ],
  },
  {
    title: "Cookies and analytics",
    paragraphs: [
      "At this stage, Home Money Check does not intentionally use non-essential analytics or advertising cookies.",
      "If analytics, advertising pixels or similar tools are added later, this Privacy Policy and any cookie controls will be updated.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: ["You have rights over your personal information. These may include the right to:"],
    bullets: [
      "Ask for a copy of the personal information we hold about you.",
      "Ask us to correct information that is wrong.",
      "Ask us to delete information where appropriate.",
      "Ask us to restrict or object to how we use your information.",
      "Withdraw consent where we rely on consent.",
      "Complain to the Information Commissioner's Office if you are unhappy with how your information is handled.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "To ask about your information or this Privacy Policy, contact:",
      "hello@homemoneycheck.co.uk",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy | Home Money Check",
  description: "How Home Money Check collects, uses and protects enquiry information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F7F0E8] text-[#2C1F3D]">
      <SiteHeader />
      <main>
        <section className="bg-[#5F2D8C] px-5 pb-14 pt-12 text-[#F7F0E8] md:px-8 md:pb-20 md:pt-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 w-fit rounded-full bg-[#FDCA55] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
              Privacy Policy
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
              Privacy Policy
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#F7F0E8]/78 md:text-xl">
              This page explains what information Home Money Check collects, why we use it and how you
              can contact us about your information.
            </p>
          </div>
        </section>

        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            <aside className="relative overflow-hidden rounded-[2.75rem] bg-white p-8 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-10">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-[2rem] bg-[#EADFFD]" />
              <p className="relative mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
                Privacy Policy
              </p>
              <h2 className="relative text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-5xl">
                Clear information about your details.
              </h2>
              <p className="relative mt-6 max-w-3xl text-lg font-bold leading-8 text-[#2C1F3D]/72">
                This page explains what information Home Money Check collects, why we use it and how
                you can contact us about your information.
              </p>
            </aside>

            <article className="rounded-[2.75rem] bg-white p-6 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-8">
              <div className="grid gap-4">
                {sections.map((section) => (
                  <section key={section.title} className="rounded-[2rem] bg-[#F7F0E8] p-6">
                    <h2 className="text-2xl font-black tracking-[-0.045em] text-[#5F2D8C]">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-3 text-base font-bold leading-7 text-[#2C1F3D]/78">
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.bullets ? (
                        <ul className="list-disc space-y-2 pl-5">
                          {section.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                      {section.title === "What information we collect" ? (
                        <p>
                          We may also add basic internal notes after you contact us, such as enquiry
                          status, follow-up notes and whether we have replied.
                        </p>
                      ) : null}
                      {section.title === "Why we use your information" ? (
                        <p>We do not sell your personal information.</p>
                      ) : null}
                      {section.title === "Who we share information with" ? (
                        <p>We only share what is needed for the relevant purpose.</p>
                      ) : null}
                    </div>
                  </section>
                ))}

                <section className="rounded-[2rem] bg-[#EADFFD] p-6">
                  <p className="text-base font-black leading-7 text-[#4F247D]">
                    We may update this Privacy Policy from time to time. The latest version will
                    always be shown on this page.
                  </p>
                </section>
              </div>
            </article>
          </div>

          <div className="mx-auto mt-10 flex max-w-7xl">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-[#6A35A0] px-6 py-3 text-sm font-black text-[#F7F0E8]"
              href="/"
            >
              Back to homepage
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.7} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
