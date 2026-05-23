import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type TermsSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: TermsSection[] = [
  {
    title: "About Home Money Check",
    paragraphs: [
      "Home Money Check is run by Neill Connolly.",
      "The website helps people ask about checks, quotes, advice-led services and related home, money and business services.",
    ],
  },
  {
    title: "Using this website",
    paragraphs: [
      "You can browse the website and send an enquiry if you want us to contact you about a service.",
      "Please only send information that is accurate and that you are happy for us to use to deal with your enquiry.",
    ],
  },
  {
    title: "Sending an enquiry",
    paragraphs: [
      "Submitting a form is an enquiry. It is not a contract, application, acceptance or commitment to buy anything.",
      "After you send your details, we will get back to you personally. We may ask a few more questions so we can understand what you need and explain the right next step.",
    ],
  },
  {
    title: "Quotes, checks and recommendations",
    paragraphs: [
      "Depending on the service, we may provide a quote, a recommendation, a clear next step or an introduction to a suitable provider or partner.",
      "Any quote, recommendation or next step will depend on the details you give us, the service involved and what is available at the time.",
    ],
  },
  {
    title: "No guarantees",
    paragraphs: ["We will always aim to be clear and helpful, but we do not guarantee:"],
    bullets: [
      "That you will save money.",
      "That a service will be available to you.",
      "That you will be accepted by a provider.",
      "That a quote or offer will stay available.",
      "That any extra income opportunity will produce income.",
      "That a particular outcome will be achieved.",
    ],
  },
  {
    title: "Advice-led services",
    paragraphs: [
      "Some services may need more detailed advice, information gathering or a separate professional process.",
      "Where that applies, we will explain the next step before anything proceeds.",
      "The information on this website is general information only. It is not a substitute for personal advice based on your own circumstances.",
    ],
  },
  {
    title: "Partners and providers",
    paragraphs: [
      "Some enquiries may be handled with the help of a provider, partner or professional service.",
      "Where that is needed, we will only share the information needed to deal with your enquiry or provide the service you asked about.",
    ],
  },
  {
    title: "Website information",
    paragraphs: [
      "We try to keep the website accurate and up to date, but information can change.",
      "We may update, remove or change pages, wording, services or offers at any time.",
    ],
  },
  {
    title: "Website availability",
    paragraphs: [
      "We aim to keep the website available, but we cannot guarantee that it will always be online or error-free.",
      "We may pause, update or change the website when needed.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "The Home Money Check name, logo, design, wording and website content belong to Home Money Check or are used with permission.",
      "You should not copy, reuse or reproduce website content without permission.",
    ],
  },
  {
    title: "Limitation of responsibility",
    paragraphs: [
      "We are responsible for providing the website with reasonable care.",
      "We are not responsible for losses caused by information you provide being incorrect, by services or providers outside our control, or by your use of the website in a way that was not intended.",
      "Nothing in these terms limits any legal rights you have as a consumer.",
    ],
  },
  {
    title: "Contact",
    paragraphs: ["To contact Home Money Check about these terms, email:", "hello@homemoneycheck.co.uk"],
  },
  {
    title: "Updates to these terms",
    paragraphs: [
      "We may update these terms from time to time. The latest version will always be shown on this page.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Terms | Home Money Check",
  description: "Website terms for Home Money Check.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F7F0E8] text-[#2C1F3D]">
      <SiteHeader />
      <main>
        <section className="bg-[#5F2D8C] px-5 pb-14 pt-12 text-[#F7F0E8] md:px-8 md:pb-20 md:pt-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 w-fit rounded-full bg-[#FDCA55] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
              Terms
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
              Terms
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#F7F0E8]/78 md:text-xl">
              These terms explain how this website works, what happens when you send an enquiry and
              what you should expect from Home Money Check.
            </p>
          </div>
        </section>

        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            <aside className="relative overflow-hidden rounded-[2.75rem] bg-white p-8 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-10">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-[2rem] bg-[#EADFFD]" />
              <p className="relative mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
                Terms
              </p>
              <h2 className="relative text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-5xl">
                What to expect when using this website.
              </h2>
              <p className="relative mt-6 max-w-3xl text-lg font-bold leading-8 text-[#2C1F3D]/72">
                These terms explain how this website works, what happens when you send an enquiry and
                what you should expect from Home Money Check.
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
