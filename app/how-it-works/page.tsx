import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, ReceiptText, Search, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "How Home Money Check Works",
  description: "See how Home Money Check reviews your gas, electricity and broadband bills, builds your quote and explains every potential saving.",
};

const steps = [
  { number: "01", title: "Choose what you want checked", body: "Select gas, electricity, broadband or any combination, then leave your contact details.", icon: Check },
  { number: "02", title: "We get in touch for a chat", body: "We ask what you pay now, how your household uses each service and what matters to you.", icon: MessageCircle },
  { number: "03", title: "We build your quote", body: "We check the available Utility Warehouse services, prices and offers for your household.", icon: Search },
  { number: "04", title: "We maximise the savings", body: "We include the value of combining services, cashback and available switching support.", icon: Sparkles },
  { number: "05", title: "You see the result", body: "We talk through the new costs and every potential saving, then answer your questions.", icon: ReceiptText },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFDF8] text-[#261B2E]">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-[#35104F] px-5 py-16 text-white sm:px-8 lg:py-24">
          <div className="pointer-events-none absolute -right-36 -top-44 -z-10 h-[42rem] w-[42rem] rounded-full border-[125px] border-white/[0.04]" />
          <div className="mx-auto max-w-[86rem]">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">How it works</p>
            <h1 className="display-font mt-5 max-w-[15ch] text-6xl leading-[0.9] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.6rem]">We check your bills to save you money.</h1>
            <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-white/74 sm:text-xl sm:leading-9">We start with what you pay and what your household needs. Then we build your quote, maximise your savings and talk through the result.</p>
            <Link className="mt-9 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#22C86B] px-7 py-4 text-base font-extrabold text-[#12371F] transition hover:-translate-y-0.5 hover:bg-[#2DD977]" href="/#arrange-check">Check how much I could save<ArrowRight className="h-5 w-5" /></Link>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-[86rem]">
            <div className="grid gap-5 lg:grid-cols-5">
              {steps.map(({ number, title, body, icon: Icon }, index) => <article className={`rounded-[1.8rem] p-6 shadow-[0_20px_55px_rgba(61,20,95,0.08)] ${index === 1 || index === 4 ? "bg-[#273468] text-white" : index === 2 ? "bg-[#F0C646] text-[#33210A]" : "bg-[#F5EEF8] text-[#34273B]"}`} key={number}><div className="flex items-center justify-between"><span className={`flex h-12 w-12 items-center justify-center rounded-[1rem] ${index === 1 || index === 4 ? "bg-[#22C86B] text-[#12371F]" : "bg-white text-[#6A2C93]"}`}><Icon className="h-6 w-6" strokeWidth={2.1} /></span><span className="display-font text-3xl opacity-25">{number}</span></div><h2 className="mt-7 text-xl font-extrabold leading-tight tracking-[-0.03em]">{title}</h2><p className={`mt-4 text-sm font-semibold leading-6 ${index === 1 || index === 4 ? "text-white/70" : "opacity-75"}`}>{body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="border-y border-[#E8DFC9] bg-[#FFFDF8] px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[76rem] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">The conversation</p>
              <h2 className="display-font mt-5 max-w-[13ch] text-5xl leading-[0.94] tracking-[-0.05em] text-[#3D145F] sm:text-6xl">We talk through your bills and what your household needs.</h2>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-[#625667]">The form gets us started. Then we speak with you about your current services, build the quote and explain the costs and savings.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">{["What you pay now", "Current providers and contracts", "How your household uses each service", "What you want from a new quote"].map((item) => <p className="flex items-center gap-3 rounded-[1rem] bg-white p-4 text-sm font-extrabold text-[#47384D] ring-1 ring-inset ring-[#D8CCBD]" key={item}><Check className="h-5 w-5 shrink-0 text-[#20A95C]" strokeWidth={3} />{item}</p>)}</div>
            </div>
            <div className="rounded-[2.4rem] bg-[#F0C646] p-8 text-[#33210A] shadow-[0_28px_70px_rgba(95,69,10,0.16)] sm:p-11">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">What you get</p>
              <h2 className="display-font mt-5 max-w-[10ch] text-5xl leading-[0.94] tracking-[-0.05em] text-[#3D145F]">A quote you can understand.</h2>
              <div className="mt-8 grid gap-4">{["The services included", "Your new monthly costs", "Cashback and switching support", "Where every saving comes from"].map((item) => <p className="flex items-center gap-3 border-b border-[#6A2C93]/18 pb-4 text-base font-extrabold" key={item}><Check className="h-5 w-5 text-[#20A95C]" strokeWidth={3} />{item}</p>)}</div>
              <p className="mt-7 text-base font-semibold leading-7 text-[#523B0C]">We answer your questions. You decide whether the quote is right for you.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#273468] px-5 py-14 text-white sm:px-8"><div className="mx-auto flex max-w-[76rem] flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">Start your check</p><h2 className="display-font mt-3 text-4xl leading-[0.96] tracking-[-0.045em] sm:text-5xl">Let’s see how much you could save.</h2></div><Link className="inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-[#22C86B] px-7 py-4 text-base font-extrabold text-[#12371F]" href="/#arrange-check">Check how much I could save<ArrowRight className="h-5 w-5" /></Link></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
