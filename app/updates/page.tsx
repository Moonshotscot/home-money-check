import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { UpdateSignupForm } from "@/components/UpdateSignupForm";

export const metadata: Metadata = {
  title: "Get Home Money Check updates | Home Money Check",
  description:
    "Sign up for simple money-saving checks, useful reminders and current offers from Home Money Check.",
};

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-[#F7F0E8] text-[#2C1F3D]">
      <SiteHeader />
      <main>
        <section className="bg-[#5F2D8C] px-5 pb-14 pt-12 text-[#F7F0E8] md:px-8 md:pb-20 md:pt-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="mb-5 w-fit rounded-full bg-[#FDCA55] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
                Home Money Check updates
              </p>
              <h1 className="display-font max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.015em] text-[#FDCA55] md:text-7xl">
                <span className="block">Get</span>
                <span className="block whitespace-nowrap">Home Money Check</span>
                <span className="block">Updates</span>
              </h1>
              <p className="mt-7 max-w-3xl text-xl font-bold leading-8 text-[#F7F0E8]/82 md:text-2xl md:leading-9">
                Simple money-saving checks, useful reminders and current offers for your home,
                money and household.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F7F0E8] p-7 text-[#2C1F3D] shadow-[0_28px_80px_rgba(44,31,61,0.25)]">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#EADFFD]" />
              <p className="relative text-sm font-black uppercase tracking-[0.14em] text-[#5F2D8C]/70">
                Join us
              </p>
              <p className="display-font relative mt-10 text-3xl font-black leading-[1] tracking-[-0.015em]">
                Deals, offers, useful advice
              </p>
              <Link
                className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-5 py-3 text-sm font-black text-[#2C1F3D]"
                href="#updates-signup"
              >
                Sign up
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_0.85fr]">
            <div className="relative overflow-hidden rounded-[2.75rem] bg-[#5F2D8C] p-8 text-[#F7F0E8] shadow-[0_30px_90px_rgba(44,31,61,0.22)] md:p-12">
              <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#EADFFD]/20 blur-3xl" />
              <h2 className="display-font relative text-4xl font-black leading-[0.98] tracking-[-0.015em] text-[#FDCA55] md:text-6xl">
                Simple updates that are worth reading.
              </h2>
              <div className="relative mt-7 grid gap-4 text-lg font-bold leading-8 text-[#F7F0E8]/78">
                <p>
                  Sign up for our Home Money Check updates. We’ll send useful offers, simple checks,
                  and relevant articles that could help you save money or get a better deal.
                </p>
                <p>We promise to keep them interesting!</p>
                <p>No spam, and only emails when there's something worth talking about.</p>
                <p className="display-font text-3xl font-black leading-[1] tracking-[-0.015em] text-[#FDCA55] md:text-4xl">
                  We'd love you to join us!!
                </p>
              </div>
            </div>

            <div id="updates-signup">
              <UpdateSignupForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
