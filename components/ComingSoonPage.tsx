import Link from "next/link";
import { getRoutePath, type SitePage } from "@/lib/site-pages";
import { LeadFormPreview } from "@/components/LeadFormPreview";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function ComingSoonPage({ page }: { page: SitePage }) {
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
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_0.9fr]">
          <section className="relative overflow-hidden rounded-[2.75rem] bg-[#5F2D8C] p-8 text-[#F7F0E8] shadow-[0_30px_90px_rgba(44,31,61,0.22)] md:p-12">
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#EADFFD]/20 blur-3xl" />
            <p className="relative mb-5 w-fit rounded-full bg-[#FDCA55] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
              {page.category}
            </p>
            <h2 className="display-font relative text-6xl font-black leading-[0.9] tracking-[-0.075em] text-[#FDCA55] md:text-8xl">
              Coming soon
            </h2>
            <p className="relative mt-7 max-w-2xl text-xl font-bold leading-8 text-[#F7F0E8]/80">
              {(page.mainCopy || [page.intro])[0]}
            </p>
            {page.mainCopy?.slice(1).map((paragraph) => (
              <p
                key={paragraph}
                className="relative mt-5 max-w-2xl text-lg font-bold leading-8 text-[#F7F0E8]/78"
              >
                {paragraph}
              </p>
            ))}
            <Link
              className="relative mt-8 inline-flex rounded-full bg-[#F7F0E8] px-6 py-3 text-sm font-black text-[#5F2D8C]"
              href="#lead-form"
            >
              Tell me when this is ready
            </Link>
          </section>
          <div id="lead-form">
            <LeadFormPreview
              defaultSelectedCheck={page.selectedCheck}
              sourcePage={getRoutePath(page)}
              submitLabel="Tell me when this is ready"
              title="Tell me when this is ready"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
