import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Mail } from "lucide-react";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { UpdateSignupForm } from "@/components/UpdateSignupForm";

export const metadata: Metadata = {
  title: "Offers and updates | Home Money Check",
  description:
    "Join the Home Money Check list for household bill updates, money-saving offers, giveaways and useful ideas.",
};

const updateBenefits = [
  "Money-saving offers",
  "Household bill updates",
  "Giveaways and special campaigns",
  "Useful ways to keep more of your money",
] as const;

export default function UpdatesPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFDF8] text-[#261B2E]">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-[#35104F] px-5 py-16 text-white sm:px-8 lg:py-24">
          <div className="pointer-events-none absolute -right-32 -top-40 h-[36rem] w-[36rem] rounded-full border-[110px] border-white/[0.035]" />
          <div className="mx-auto grid max-w-[86rem] items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-[#22C86B] text-[#12371F]">
                <Mail className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">
                Home Money Check offers & updates
              </p>
              <h1 className="display-font mt-5 max-w-[10ch] text-6xl leading-[0.88] tracking-[-0.055em] text-[#F0C646] sm:text-7xl lg:text-8xl">
                Join Home Money Check.
              </h1>
              <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-white/76 sm:text-xl sm:leading-9">
                Leave your email and we&rsquo;ll send you Home Money Check offers, household bill updates, giveaways and useful ways to save money.
              </p>
              <div className="mt-9 grid gap-4 border-t border-white/15 pt-7 text-sm font-bold text-white/82 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {updateBenefits.map((benefit) => (
                  <p className="flex items-start gap-3" key={benefit}>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22C86B] text-[#12371F]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3.2} />
                    </span>
                    {benefit}
                  </p>
                ))}
              </div>
              <p className="mt-8 text-sm font-semibold text-white/58">
                Occasional emails. Unsubscribe at any time.
              </p>
            </div>

            <UpdateSignupForm />
          </div>
        </section>

        <section className="bg-[#FFFDF8] px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto flex max-w-[86rem] flex-col gap-6 rounded-[2rem] bg-[#F0C646] p-7 text-[#2B1535] shadow-[0_18px_45px_rgba(234,185,41,0.18)] sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6A2C93]">
                Check your household bills now
              </p>
              <p className="display-font mt-2 text-3xl leading-tight tracking-[-0.035em] text-[#3D145F] sm:text-4xl">
                See how much you could save.
              </p>
            </div>
            <Link
              className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#3D145F] px-7 py-4 text-base font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#512078]"
              href="/#arrange-check"
            >
              Check how much I could save
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
