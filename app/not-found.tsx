import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, House } from "lucide-react";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "Page not found | Home Money Check",
  description: "Choose a current Home Money Check page.",
};

const usefulLinks = [
  { href: "/household-bills-check", label: "Household bills" },
  { href: "/energy", label: "Energy" },
  { href: "/broadband", label: "Broadband" },
  { href: "/20k-giveaway", label: "£20K Giveaway" },
  { href: "/build-a-second-income", label: "Build a second income" },
] as const;

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#2C2033]">
      <SiteHeader />
      <main className="overflow-hidden px-5 py-14 sm:px-8 lg:py-20">
        <section className="mx-auto grid max-w-[76rem] overflow-hidden rounded-[2.5rem] bg-[#35104F] text-white shadow-[0_30px_90px_rgba(44,31,61,0.2)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative isolate p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-36 -top-44 -z-10 h-[32rem] w-[32rem] rounded-full border-[95px] border-white/[0.04]" />
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">Page not found</p>
            <h1 className="display-font mt-5 max-w-[10ch] text-6xl leading-[0.9] tracking-[-0.055em] sm:text-7xl">
              Let&rsquo;s get you back on track.
            </h1>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-white/72">
              Choose a current page or return to the homepage to start your household bills check.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#22C86B] px-7 py-4 text-base font-extrabold text-[#12371F]" href="/#arrange-check">
                Check how much I could save
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 px-7 py-4 text-base font-extrabold text-white" href="/">
                Homepage
              </Link>
            </div>
          </div>

          <div className="bg-[#F0C646] p-8 text-[#33210A] sm:p-12 lg:p-16">
            <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-white text-[#6A2C93]">
              <House className="h-7 w-7" strokeWidth={2.2} />
            </div>
            <h2 className="display-font mt-7 text-4xl leading-[0.95] tracking-[-0.045em] text-[#3D145F] sm:text-5xl">Where would you like to go?</h2>
            <nav aria-label="Useful pages" className="mt-7 grid gap-3">
              {usefulLinks.map((item) => (
                <Link className="flex items-center justify-between gap-4 rounded-[1.1rem] bg-white/55 px-5 py-4 text-sm font-extrabold ring-1 ring-inset ring-[#6A2C93]/12 transition hover:bg-white/80" href={item.href} key={item.href}>
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-[#6A2C93]" />
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
