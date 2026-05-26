import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type DisclaimerSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: DisclaimerSection[] = [
  {
    title: "General information",
    paragraphs: [
      "The information on Home Money Check is general information only.",
      "It is designed to help you understand what we do, choose what you want checked and send an enquiry if you would like us to contact you.",
      "Website information should not be treated as personal advice unless we have spoken with you, understood your circumstances and confirmed what applies to you.",
    ],
  },
  {
    title: "How Home Money Check works",
    paragraphs: [
      "Home Money Check is a check, enquiry and advice-led service.",
      "When you send your details, we will get back to you personally, ask the right questions and explain the next step clearly.",
      "Submitting a form does not commit you to anything.",
    ],
  },
  {
    title: "No guaranteed result",
    paragraphs: [
      "We will always aim to be clear, helpful and honest, but we cannot guarantee a particular result.",
      "This includes:",
    ],
    bullets: [
      "Any saving.",
      "Any quote.",
      "Any provider acceptance.",
      "Any service availability.",
      "Any offer or promotion outcome.",
      "Any income from an extra income opportunity.",
    ],
  },
  {
    title: "Quotes, checks and availability",
    paragraphs: [
      "Quotes, prices, deals, offers and services can change.",
      "If we provide or arrange a quote, we will explain what it is based on and what the next step is.",
      "A quote or option is not guaranteed to stay available unless this has been clearly confirmed.",
    ],
  },
  {
    title: "Advice-led and professional services",
    paragraphs: [
      "Some services need proper advice, fact-finding or a separate professional process.",
      "Where that applies, we will explain what information is needed and what happens next before anything proceeds.",
      "Website information alone should not be relied on as personal advice.",
    ],
  },
  {
    title: "Partners and providers",
    paragraphs: [
      "Some enquiries may be handled by, or introduced to, a suitable provider, professional or partner.",
      "Where this is needed, we will explain the process clearly and only share the information needed to deal with your enquiry.",
    ],
  },
  {
    title: "Promotions and offers",
    paragraphs: [
      "From time to time, Home Money Check may mention offers, campaigns or promotions.",
      "Any promotion will depend on the terms, availability and process that apply at the time.",
      "If a promotion matters to your decision, please ask us to confirm the details before relying on it.",
    ],
  },
  {
    title: "Partner opportunities",
    paragraphs: [
      "Any partner opportunity should be considered carefully.",
      "Income is not guaranteed. Results depend on the opportunity, your own activity, suitability, compliance with the relevant rules and other factors.",
      "We will explain what is involved so you can decide whether it is right for you.",
    ],
  },
  {
    title: "Website accuracy",
    paragraphs: [
      "We try to keep Home Money Check accurate and up to date, but website information can change.",
      "If something is important to your decision, please ask us to confirm it before relying on it.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "If you have a question about anything on this page, contact:",
      "hello@homemoneycheck.co.uk",
    ],
  },
];

export const metadata: Metadata = {
  title: "Disclaimers | Home Money Check",
  description: "Important points about how Home Money Check works and what to expect.",
};

export default function DisclaimersPage() {
  return (
    <div className="min-h-screen bg-[#F7F0E8] text-[#2C1F3D]">
      <SiteHeader />
      <main>
        <section className="bg-[#5F2D8C] px-5 pb-14 pt-12 text-[#F7F0E8] md:px-8 md:pb-20 md:pt-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 w-fit rounded-full bg-[#FDCA55] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
              Disclaimers
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
              Disclaimers
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#F7F0E8]/78 md:text-xl">
              This page explains a few important points about how Home Money Check works and what you
              should expect when using the website.
            </p>
          </div>
        </section>

        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            <aside className="relative overflow-hidden rounded-[2.75rem] bg-white p-8 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-10">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-[2rem] bg-[#EADFFD]" />
              <p className="relative mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
                Important information
              </p>
              <h2 className="relative text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-5xl">
                Disclaimers
              </h2>
              <p className="relative mt-6 max-w-3xl text-lg font-bold leading-8 text-[#2C1F3D]/72">
                This page explains a few important points about how Home Money Check works and what
                you should expect when using the website.
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
                      {section.title === "No guaranteed result" ? (
                        <p>
                          Any result will depend on your circumstances, the service involved and what
                          is available at the time.
                        </p>
                      ) : null}
                    </div>
                  </section>
                ))}
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
