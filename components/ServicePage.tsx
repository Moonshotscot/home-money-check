import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getRoutePath, type SitePage } from "@/lib/site-pages";
import { LeadFormPreview } from "@/components/LeadFormPreview";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatHappensNext } from "@/components/WhatHappensNext";

const comparisonExplainer =
  "Home Money Check is a friendly check and advice service. You send a few basic details, we get in touch, then we help you understand the best route for what you need.";

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
        <div className="mx-auto grid max-w-7xl items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.9fr)]">
          <section className="relative overflow-hidden rounded-[2.75rem] bg-[#5F2D8C] p-8 text-[#F7F0E8] shadow-[0_30px_90px_rgba(44,31,61,0.22)] md:p-12">
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#EADFFD]/20 blur-3xl" />
            <div
              className="absolute -bottom-12 right-8 h-28 w-28 rotate-[12deg] rounded-[2rem] opacity-70"
              style={{ backgroundColor: page.accentColour }}
            />
            <p className="relative mb-5 w-fit rounded-full bg-[#FDCA55] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
              {page.eyebrow}
            </p>
            <h2 className="relative text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-6xl">
              {page.title}
            </h2>
            <p className="relative mt-6 max-w-3xl text-xl font-bold leading-8 text-[#F7F0E8]/82">
              {page.intro}
            </p>
            <div className="relative mt-7 grid gap-4">
              {(page.mainCopy || [page.intro]).map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-lg font-bold leading-8 text-[#F7F0E8]/76"
                >
                  {paragraph}
                </p>
              ))}
            </div>
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
            {!page.mainCopy?.includes(comparisonExplainer) ? (
              <p className="relative mt-6 rounded-[1.5rem] bg-[#FDCA55] p-5 text-base font-black leading-7 text-[#4F247D]">
                {comparisonExplainer}
              </p>
            ) : null}
            {page.extraNote ? (
              <p className="relative mt-5 rounded-[1.5rem] bg-[#FFF1C8] p-5 text-sm font-black leading-6 text-[#6B4611]">
                {page.extraNote}
              </p>
            ) : null}
          </section>

          <LeadFormPreview
            defaultSelectedCheck={page.selectedCheck}
            sourcePage={getRoutePath(page)}
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
