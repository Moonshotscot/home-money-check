import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type LegalPlaceholderPageProps = {
  title: string;
  eyebrow: string;
  description: string;
  sections: {
    title: string;
    body: string | string[];
  }[];
};

export function LegalPlaceholderPage({
  title,
  eyebrow,
  description,
  sections,
}: LegalPlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-[#F7F0E8] text-[#2C1F3D]">
      <SiteHeader />
      <main>
        <section className="bg-[#5F2D8C] px-5 pb-14 pt-12 text-[#F7F0E8] md:px-8 md:pb-20 md:pt-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 w-fit rounded-full bg-[#FDCA55] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
              {eyebrow}
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#F7F0E8]/78 md:text-xl">
              {description}
            </p>
          </div>
        </section>

        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            <aside className="relative overflow-hidden rounded-[2.75rem] bg-white p-8 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-10">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-[2rem] bg-[#EADFFD]" />
              <p className="relative mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
                Working draft
              </p>
              <h2 className="relative text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-5xl">
                Prepared before public launch.
              </h2>
              <p className="relative mt-6 max-w-3xl text-lg font-bold leading-8 text-[#2C1F3D]/72">
                This page is being prepared before public launch and may be updated.
              </p>
            </aside>

            <article className="rounded-[2.75rem] bg-white p-6 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-8">
              <div className="grid gap-4">
                {sections.map((section) => (
                  <section key={section.title} className="rounded-[2rem] bg-[#F7F0E8] p-6">
                    <h2 className="text-2xl font-black tracking-[-0.045em] text-[#5F2D8C]">
                      {section.title}
                    </h2>
                    {Array.isArray(section.body) ? (
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-base font-bold leading-7 text-[#2C1F3D]/78">
                        {section.body.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-4 text-base font-bold leading-7 text-[#2C1F3D]/78">
                        {section.body}
                      </p>
                    )}
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
