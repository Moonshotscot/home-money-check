import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Gift, PartyPopper, PoundSterling, Sparkles } from "lucide-react";
import { GiveawayForm } from "@/components/home/GiveawayForm";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "£20K Giveaway | Home Money Check",
  description: "Enter the current £20,000 giveaway through Home Money Check. Free to enter and no purchase necessary.",
};

const steps = [
  { number: "01", title: "Leave your details", body: "Tell us who you are and how to reach you." },
  { number: "02", title: "We get in touch", body: "We help you complete the current giveaway entry." },
  { number: "03", title: "Your entry is submitted", body: "We confirm the next step and answer any questions." },
] as const;

export default function GiveawayPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFDF8] text-[#261B2E]">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-[#F0C646] px-5 py-16 text-[#33210A] sm:px-8 lg:py-24">
          <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[42rem] w-[42rem] rounded-full border-[115px] border-white/20" />
          <div className="mx-auto grid max-w-[86rem] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">Current giveaway</p>
              <h1 className="display-font mt-6 max-w-[9ch] text-7xl leading-[0.86] tracking-[-0.06em] text-[#3D145F] sm:text-8xl lg:text-[7rem]">Enter to win £20,000.</h1>
              <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-[#51390A] sm:text-xl sm:leading-9">Start your free entry through Home Money Check. No purchase is necessary.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link className="inline-flex min-h-14 items-center gap-3 rounded-full bg-[#3D145F] px-7 py-4 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#512078]" href="#giveaway-form">Enter the giveaway<ArrowRight className="h-5 w-5" /></Link>
                <Link className="inline-flex min-h-14 items-center gap-3 rounded-full bg-white/55 px-7 py-4 text-base font-extrabold text-[#3D145F] ring-1 ring-[#3D145F]/15 transition hover:bg-white/75" href="#how-it-works">See how it works<ArrowDown className="h-5 w-5" /></Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.6rem] bg-[#35104F] p-8 text-white shadow-[0_38px_90px_rgba(61,20,95,0.27)] sm:p-11">
              <Sparkles className="absolute right-8 top-8 h-10 w-10 text-[#F0C646]" strokeWidth={1.7} />
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-[#22C86B] text-[#12371F]"><Gift className="h-8 w-8" strokeWidth={2.1} /></div>
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">One prize</p>
              <p className="display-font mt-3 text-7xl leading-none tracking-[-0.06em]">£20,000</p>
              <div className="mt-7 grid gap-3 border-t border-white/15 pt-7">
                {["Free to enter", "No purchase necessary", "Help to complete your entry"].map((item) => <p className="flex items-center gap-3 text-sm font-extrabold text-white/82" key={item}><Check className="h-5 w-5 text-[#28D679]" strokeWidth={3} />{item}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFDF8] px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[86rem] gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="relative overflow-hidden rounded-[2.4rem] bg-[#273468] p-8 text-white shadow-[0_24px_60px_rgba(39,52,104,0.2)] sm:p-11">
              <PartyPopper className="h-12 w-12 text-[#22C86B]" strokeWidth={1.9} />
              <h2 className="display-font mt-7 max-w-[12ch] text-5xl leading-[0.94] tracking-[-0.05em]">What could £20,000 change for you?</h2>
              <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/72">Pay bills, clear debt, improve your home, build savings or give your family more breathing room. The choice would be yours.</p>
            </article>
            <article className="rounded-[2.4rem] bg-[#F5EEF8] p-8 shadow-[0_20px_55px_rgba(61,20,95,0.09)] sm:p-11">
              <PoundSterling className="h-12 w-12 text-[#6A2C93]" strokeWidth={1.9} />
              <h2 className="display-font mt-7 text-4xl leading-[0.97] tracking-[-0.045em] text-[#3D145F]">Free to enter. No purchase needed.</h2>
              <p className="mt-5 text-base font-semibold leading-8 text-[#625667]">Leave your details and we’ll get in touch to help you complete the entry.</p>
            </article>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#35104F] px-5 py-16 text-white sm:px-8 lg:py-20" id="how-it-works">
          <div className="mx-auto max-w-[86rem]">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">How to enter</p>
            <h2 className="display-font mt-5 max-w-[13ch] text-5xl leading-[0.93] tracking-[-0.05em] text-[#F0C646] sm:text-6xl">Enter the giveaway in three steps.</h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => <article className="border-t border-white/18 pt-6" key={step.number}><span className={`flex h-14 w-14 items-center justify-center rounded-[1.1rem] text-sm font-extrabold ${index === 1 ? "bg-[#22C86B] text-[#12371F]" : "bg-[#F0C646] text-[#35240B]"}`}>{step.number}</span><h3 className="mt-7 text-2xl font-extrabold tracking-[-0.035em]">{step.title}</h3><p className="mt-4 max-w-sm text-base font-medium leading-7 text-white/67">{step.body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-[#273468] px-5 py-16 text-white sm:px-8 lg:py-20" id="giveaway-form">
          <div className="mx-auto grid max-w-[86rem] items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">Enter now</p>
              <h2 className="display-font mt-5 max-w-[10ch] text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl">Start your £20K Giveaway entry.</h2>
              <p className="mt-7 max-w-md text-lg font-medium leading-8 text-white/72">The giveaway is run by Utility Warehouse. Current eligibility rules and prize draw terms apply.</p>
            </div>
            <GiveawayForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
