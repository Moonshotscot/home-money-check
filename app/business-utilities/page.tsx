import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "Business utilities | Home Money Check",
  description: "Business utilities from Neill Connolly. This page will be available soon.",
};

export default function BusinessUtilitiesPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#261B2E]">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-[#3D145F] px-5 py-20 text-white sm:px-8 lg:py-28">
          <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border-[70px] border-white/[0.05]" />
          <div className="relative mx-auto max-w-[76rem]">
            <span className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-[#F0C646] text-[#3D145F]">
              <Building2 className="h-8 w-8" strokeWidth={2.1} />
            </span>
            <p className="mt-9 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">Business utilities</p>
            <h1 className="display-font mt-5 max-w-[12ch] text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              This page will be available soon.
            </h1>
            <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-white/72">
              Neill will also help businesses check their utility costs. Full details will be added here soon.
            </p>
            <Link
              className="mt-9 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#22C86B] px-7 py-4 text-base font-extrabold text-[#12371F] transition hover:-translate-y-0.5 hover:bg-[#2DD977]"
              href="/"
            >
              <ArrowLeft className="h-5 w-5" />
              Return to Home Money Check
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}