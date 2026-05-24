import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getRoutePath, type SitePage } from "@/lib/site-pages";
import { LeadFormPreview } from "@/components/LeadFormPreview";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatHappensNext, type WhatHappensNextStep } from "@/components/WhatHappensNext";

const comparisonExplainer =
  "Home Money Check is a friendly check and advice service. You send a few basic details, we get in touch, then we help you understand the best option for what you need.";

export function ServicePage({ page }: { page: SitePage }) {
  const isHouseholdBillPage = Boolean(page.householdSections?.length);
  const householdNextSteps: WhatHappensNextStep[] = [
    {
      title: "Send your details",
      body: "Tell us what you want to look at and the best way to contact you.",
    },
    {
      title: "We’ll call you",
      body: "Neill will call you and go through a detailed online Utility Warehouse quote with you.",
    },
    {
      title: "We’ll look at the full package",
      body: "We can look at energy, broadband, Mobile SIM deals, EV tariffs, the UW Cashback Card and help towards existing cancellation fees.",
    },
    {
      title: "You decide",
      body: "You are not committing to anything by sending your details. We’ll talk through the quote, answer your questions and you decide what happens next.",
    },
  ];
  const processSteps = isHouseholdBillPage ? householdNextSteps : page.processSteps;

  const renderParagraph = (paragraph: string) => {
    if (isHouseholdBillPage && paragraph.startsWith("Through Home Money Check,")) {
      return (
        <>
          Through{" "}
          <span className="brand-wordmark-text text-xl tracking-[-0.035em]">
            Home Money Check
          </span>
          {paragraph.replace("Through Home Money Check", "")}
        </>
      );
    }

    if (page.slug === "estate-planning" && paragraph.startsWith("Home Money Check works")) {
      return (
        <>
          <span className="brand-wordmark-text text-xl tracking-[-0.035em]">
            Home Money Check
          </span>
          {paragraph.replace("Home Money Check", "")}
        </>
      );
    }

    if (page.slug === "business-utilities" && paragraph.startsWith("Home Money Check can help")) {
      return (
        <>
          <span className="brand-wordmark-text text-xl tracking-[-0.035em]">
            Home Money Check
          </span>
          {paragraph.replace("Home Money Check", "")}
        </>
      );
    }

    if (page.slug === "business-continuity" && paragraph.startsWith("Home Money Check can help")) {
      return (
        <>
          <span className="brand-wordmark-text text-xl tracking-[-0.035em]">
            Home Money Check
          </span>
          {paragraph.replace("Home Money Check", "")}
        </>
      );
    }

    if (
      page.slug === "partner-with-us" &&
      (paragraph.startsWith("Home Money Check is built") ||
        paragraph.startsWith("Home Money Check can give"))
    ) {
      return (
        <>
          <span className="brand-wordmark-text text-xl tracking-[-0.035em]">
            Home Money Check
          </span>
          {paragraph.replace("Home Money Check", "")}
        </>
      );
    }

    return paragraph;
  };

  return (
    <div className="min-h-screen bg-[#F7F0E8] text-[#2C1F3D]">
      <SiteHeader />
      <PageHero
        accentColour={page.accentColour}
        description={page.description}
        eyebrow={page.eyebrow}
        howItWorksHeading={page.heroCard?.heading}
        howItWorksPill={page.heroCard?.pill}
        howItWorksBody={
          isHouseholdBillPage
            ? "Send your details and we'll talk you through your options and costs to help you save money."
            : page.heroCard?.body
        }
        status={page.status}
        title={page.title}
      />
      <main className="bg-[#F7F0E8] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.9fr)]">
          <section className="relative overflow-hidden rounded-[2.75rem] bg-[#5F2D8C] p-8 text-[#F7F0E8] shadow-[0_30px_90px_rgba(44,31,61,0.22)] md:p-12">
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#EADFFD]/20 blur-3xl" />
            <div
              className="absolute -bottom-12 right-8 h-28 w-28 rotate-[12deg] rounded-[2rem] opacity-70"
              style={{ backgroundColor: page.accentColour }}
            />
            <h2 className="display-font relative text-4xl font-black leading-[0.98] tracking-[-0.065em] text-[#FDCA55] md:text-6xl">
              {isHouseholdBillPage ? "What we’ll check" : page.contentTitle || page.title}
            </h2>
            {!isHouseholdBillPage && page.intro ? (
              <p className="relative mt-6 max-w-3xl text-xl font-bold leading-8 text-[#F7F0E8]/82">
                {page.intro}
              </p>
            ) : null}
            <div className="relative mt-7 grid gap-4">
              {(page.mainCopy || [page.intro]).filter(Boolean).map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-lg font-bold leading-8 text-[#F7F0E8]/76"
                >
                  {renderParagraph(paragraph)}
                </p>
              ))}
            </div>
            {page.householdSections ? (
              <div className="relative mt-8 grid gap-4">
                {page.householdSections.map((section) => (
                  <section
                    key={section.title}
                    className="rounded-[1.75rem] bg-[#8E52C4]/45 p-5 ring-1 ring-white/14"
                  >
                    <h3 className="display-font text-3xl font-black leading-[0.95] tracking-[-0.055em] text-[#FDCA55] md:text-4xl">
                      {section.title}
                    </h3>
                    <div className="mt-4 grid gap-3">
                      {section.body.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base font-bold leading-7 text-[#F7F0E8]/78"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.support ? (
                      <p className="mt-4 rounded-[1.25rem] bg-[#FDCA55] p-4 text-sm font-black leading-6 text-[#4F247D]">
                        {section.support}
                      </p>
                    ) : null}
                  </section>
                ))}
              </div>
            ) : null}
            {page.contentSections ? (
              <div className="relative mt-8 grid gap-4">
                {page.contentSections.map((section) => (
                  <section
                    key={section.title}
                    className="rounded-[1.75rem] bg-[#8E52C4]/45 p-5 ring-1 ring-white/14"
                  >
                    <h3 className="display-font text-3xl font-black leading-[0.95] tracking-[-0.055em] text-[#FDCA55] md:text-4xl">
                      {section.title}
                    </h3>
                    <div className="mt-4 grid gap-3">
                      {section.body.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base font-bold leading-7 text-[#F7F0E8]/78"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : null}
            {page.why.length > 0 ? (
              <div className="relative mt-7 grid gap-3">
                {page.why.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.35rem] bg-white/10 p-4 text-sm font-black leading-6 text-[#F7F0E8]/80 ring-1 ring-white/12"
                  >
                    {point}
                  </div>
                ))}
              </div>
            ) : null}
            {!isHouseholdBillPage &&
            page.slug !== "20k-giveaway" &&
            page.slug !== "estate-planning" &&
            page.slug !== "business-utilities" &&
            page.slug !== "business-continuity" &&
            page.slug !== "partner-with-us" &&
            !page.mainCopy?.includes(comparisonExplainer) ? (
              <p className="relative mt-6 rounded-[1.5rem] bg-[#FDCA55] p-5 text-base font-black leading-7 text-[#4F247D]">
                <span className="brand-wordmark-text text-lg tracking-[-0.035em]">
                  Home Money Check
                </span>{" "}
                is a friendly check and advice service. You send a few basic details, we get in
                touch, then we help you understand the best option for what you need.
              </p>
            ) : null}
            {page.extraNote ? (
              <p className="relative mt-5 rounded-[1.5rem] bg-[#FFF1C8] p-5 text-sm font-black leading-6 text-[#6B4611]">
                {page.extraNote}
              </p>
            ) : null}
          </section>

          <div id="lead-form">
            <LeadFormPreview
              defaultSelectedCheck={page.selectedCheck}
              helperText={
                page.formHelperText ||
                (isHouseholdBillPage
                  ? "Pop in your details and we’ll get back to you quickly. No obligation at all."
                  : undefined)
              }
              submitLabel={page.submitLabel}
              sourcePage={getRoutePath(page)}
              title={
                page.slug === "20k-giveaway"
                  ? "Let’s get you in the draw..."
                  : page.slug === "partner-with-us"
                    ? "Let’s talk about partnering..."
                  : "Let’s get your check started..."
              }
            />
          </div>
        </div>

        <WhatHappensNext customSteps={processSteps} />

        {page.noteSection ? (
          <aside className="mx-auto mt-5 max-w-7xl rounded-[2rem] bg-white p-6 text-[#2C1F3D] shadow-[0_18px_50px_rgba(44,31,61,0.08)] ring-1 ring-[#EADFFD] md:p-7">
            <p className="mb-4 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
              {page.noteSection.title}
            </p>
            <div className="grid gap-3 text-sm font-bold leading-6 text-[#2C1F3D]/72">
              {page.noteSection.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </aside>
        ) : null}

        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-3">
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-[#6A35A0] px-6 py-3 text-sm font-black text-[#F7F0E8]"
            href="/"
          >
            Back to homepage
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-[#FDCA55] px-6 py-3 text-sm font-black text-[#4F247D]"
            href="#lead-form"
          >
            {page.primaryCta || "Start my check"}
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.7} />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
