import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getRoutePath, type SitePage } from "@/lib/site-pages";
import { LeadFormPreview } from "@/components/LeadFormPreview";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatHappensNext } from "@/components/WhatHappensNext";

function UtilityWarehouseNote() {
  return (
    <div className="rounded-[1.75rem] bg-white/70 p-5 text-sm font-bold leading-6 text-[#4F247D] shadow-[0_16px_45px_rgba(44,31,61,0.08)]">
      Home Money Check is independent and is not operated by Utility Warehouse. If your enquiry
      relates to Utility Warehouse services or the Partner opportunity, the correct UW process will
      be explained before anything proceeds.
    </div>
  );
}

const comparisonExplainer =
  "Home Money Check is not an instant comparison site. It is a friendly check and advice service. You send a few basic details, we get in touch, then we help you understand the best route for what you need.";

export function ServicePage({ page }: { page: SitePage }) {
  return (
    <div className="min-h-screen bg-[#F7F0E8] text-[#2C1F3D]">
      <SiteHeader />
      <PageHero
        accentColour={page.accentColour}
        description={page.description}
        eyebrow={page.eyebrow}
        status={page.status}
        title={page.title}
      />
      <main className="bg-[#F7F0E8] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="relative overflow-hidden rounded-[2.75rem] bg-white p-8 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-10">
            <div
              className="absolute -right-12 -top-12 h-32 w-32 rotate-[12deg] rounded-[2rem]"
              style={{ backgroundColor: page.accentColour }}
            />
            <p className="relative mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
              What this check is
            </p>
            <h2 className="relative text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-5xl">
              A simple route for a clearer next step.
            </h2>
            <div className="relative mt-6 grid gap-4">
              {(page.mainCopy || [page.intro]).map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-lg font-bold leading-8 text-[#2C1F3D]/72"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {!page.mainCopy?.includes(comparisonExplainer) ? (
              <p className="relative mt-6 rounded-[1.5rem] bg-[#F7F0E8] p-5 text-base font-black leading-7 text-[#5F2D8C]">
                {comparisonExplainer}
              </p>
            ) : null}
            {page.extraNote ? (
              <p className="relative mt-5 rounded-[1.5rem] bg-[#FFF1C8] p-5 text-sm font-black leading-6 text-[#6B4611]">
                {page.extraNote}
              </p>
            ) : null}
            {page.uwRelated ? <div className="relative mt-5"><UtilityWarehouseNote /></div> : null}
          </section>

          <LeadFormPreview
            defaultSelectedCheck={page.selectedCheck}
            sourcePage={getRoutePath(page)}
            uwRelated={page.uwRelated}
          />
        </div>

        <WhatHappensNext />

        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-3">
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-[#6A35A0] px-6 py-3 text-sm font-black text-[#F7F0E8]"
            href="/"
          >
            Back to homepage
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-[#FDCA55] px-6 py-3 text-sm font-black text-[#4F247D]"
            href="/start-my-check"
          >
            Start my check
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.7} />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
