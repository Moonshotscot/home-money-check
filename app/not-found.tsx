import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Page not found | Home Money Check",
  description: "This Home Money Check page could not be found.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F0E8] text-[#2C1F3D]">
      <SiteHeader />
      <main className="bg-[#F7F0E8] px-5 py-12 md:px-8 md:py-16">
        <section className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_0.75fr]">
          <div className="relative overflow-hidden rounded-[2.75rem] bg-[#5F2D8C] p-8 text-[#F7F0E8] shadow-[0_30px_90px_rgba(44,31,61,0.22)] md:p-12">
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#EADFFD]/20 blur-3xl" />
            <p className="relative mb-5 w-fit rounded-full bg-[#FDCA55] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
              Page not found
            </p>
            <h1 className="display-font relative text-6xl font-black leading-[0.9] tracking-[-0.075em] text-[#FDCA55] md:text-8xl">
              Page not found
            </h1>
            <p className="relative mt-7 max-w-2xl text-xl font-bold leading-8 text-[#F7F0E8]/82">
              We can’t find that page, but you can head back to Home Money Check and choose what
              you want checked.
            </p>
            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[#F7F0E8] px-6 py-3 text-sm font-black text-[#5F2D8C]"
                href="/"
              >
                Back to homepage
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FDCA55] px-6 py-3 text-sm font-black text-[#4F247D]"
                href="/start-my-check"
              >
                Start a free check
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.7} />
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2.75rem] bg-white p-8 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-10">
            <div className="absolute -right-12 -top-12 h-32 w-32 rotate-[12deg] rounded-[2rem] bg-[#EADFFD]" />
            <p className="relative mb-5 w-fit rounded-full bg-[#F7F0E8] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
              Useful links
            </p>
            <div className="relative grid gap-3">
              {[
                { href: "/bills", label: "Household bills" },
                { href: "/20k-giveaway", label: "£20K Giveaway" },
                { href: "/estate-planning", label: "Wills & POAs" },
                { href: "/business-utilities", label: "Business utilities" },
              ].map((item) => (
                <Link
                  className="rounded-[1.25rem] bg-[#F7F0E8] px-5 py-4 text-sm font-black text-[#5F2D8C]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
