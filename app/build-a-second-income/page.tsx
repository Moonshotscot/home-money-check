import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Clock3,
  GraduationCap,
  Handshake,
  HeartHandshake,
  MessageCircle,
  PoundSterling,
  TrendingUp,
  Users,
} from "lucide-react";
import { SecondIncomeForm } from "@/components/home/SecondIncomeForm";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "Build a Second Income | Home Money Check",
  description:
    "Find out how to earn a second income by introducing households to Utility Warehouse services and helping people save money.",
};

const reasons = [
  {
    title: "Help people save money",
    body: "Talk to people about the household bills they already pay and help them see whether Utility Warehouse could cost them less.",
    icon: HeartHandshake,
  },
  {
    title: "Fit it around your current work",
    body: "Start alongside your existing work and decide how much time you want to put into it.",
    icon: Clock3,
  },
  {
    title: "Training and support",
    body: "Get the training, tools and support you need to speak with customers and build your business.",
    icon: GraduationCap,
  },
] as const;

const steps = [
  { number: "01", title: "Leave your details", body: "We’ll get in touch for a conversation." },
  { number: "02", title: "See exactly how it works", body: "We explain the role, the costs, the support and how you are paid." },
  { number: "03", title: "Decide if it is right for you", body: "Ask your questions and decide whether you want to take the next step." },
] as const;

export default function BuildASecondIncomePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFDF8] text-[#261B2E]">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-[#273468] px-5 py-16 text-white sm:px-8 lg:py-24">
          <div className="pointer-events-none absolute -right-40 -top-44 -z-10 h-[42rem] w-[42rem] rounded-full border-[125px] border-white/[0.04]" />
          <div className="mx-auto grid max-w-[86rem] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
            <div className="min-w-0">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">Build something of your own</p>
              <h1 className="display-font mt-6 max-w-[12ch] text-5xl leading-[0.89] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.8rem]">Earn a second income helping people save money on household bills.</h1>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/76 sm:text-xl sm:leading-9">Introduce people to Utility Warehouse services, help them check what they could save and earn when customers take services.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link className="inline-flex min-h-14 items-center gap-3 rounded-full bg-[#F0C646] px-7 py-4 text-base font-extrabold text-[#35240B] transition hover:-translate-y-0.5 hover:bg-[#FFD75F]" href="#start-conversation">Tell me more<ArrowRight className="h-5 w-5" /></Link>
                <Link className="inline-flex min-h-14 items-center gap-3 rounded-full border border-white/25 bg-white/8 px-7 py-4 text-base font-extrabold text-white transition hover:bg-white/14" href="#how-it-works">See how it works<ArrowDown className="h-5 w-5" /></Link>
              </div>
            </div>

            <div className="relative min-w-0 rounded-[2.5rem] bg-[#35104F] p-8 shadow-[0_35px_90px_rgba(9,13,38,0.35)] ring-1 ring-white/10 sm:p-10">
              <div className="flex items-start justify-between gap-6 border-b border-white/12 pb-7">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">What you would do</p>
                  <h2 className="display-font mt-4 max-w-[10ch] text-4xl leading-[0.95] tracking-[-0.045em] sm:text-5xl">Start conversations. Help people save.</h2>
                </div>
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.2rem] bg-[#22C86B] text-[#12371F]"><TrendingUp className="h-8 w-8" strokeWidth={2.2} /></span>
              </div>
              <div className="mt-7 grid gap-3">
                {["Talk to people about household bills", "Help customers see what they could save", "Build a customer base and earn income"].map((item) => (
                  <p className="flex items-start gap-3 rounded-[1.2rem] bg-white/[0.07] p-4 text-sm font-extrabold leading-6 text-white/82 ring-1 ring-inset ring-white/10" key={item}><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#28D679]" strokeWidth={3} />{item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFDF8] px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-[86rem]">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">Why people do it</p>
            <h2 className="display-font mt-5 max-w-[15ch] text-5xl leading-[0.93] tracking-[-0.05em] text-[#3D145F] sm:text-6xl">Build extra income around conversations about household bills.</h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {reasons.map(({ title, body, icon: Icon }, index) => (
                <article className={`min-h-[20rem] rounded-[2.2rem] p-8 shadow-[0_22px_58px_rgba(39,52,104,0.12)] ${index === 1 ? "bg-[#F0C646] text-[#33210A]" : index === 2 ? "bg-[#35104F] text-white" : "bg-[#DCE8FF] text-[#202B58]"}`} key={title}>
                  <span className={`flex h-14 w-14 items-center justify-center rounded-[1.1rem] ${index === 2 ? "bg-[#22C86B] text-[#12371F]" : "bg-white text-[#6A2C93]"}`}><Icon className="h-7 w-7" strokeWidth={2.1} /></span>
                  <h3 className="mt-8 text-2xl font-extrabold leading-tight tracking-[-0.035em]">{title}</h3>
                  <p className={`mt-4 text-base font-semibold leading-7 ${index === 2 ? "text-white/68" : "opacity-75"}`}>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#E8DFC9] bg-white px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[86rem] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
            <div className="relative overflow-hidden rounded-[2.4rem] bg-[#F0C646] p-8 text-[#33210A] shadow-[0_26px_65px_rgba(91,63,6,0.16)] sm:p-11">
              <PoundSterling className="h-12 w-12 text-[#6A2C93]" strokeWidth={1.9} />
              <h2 className="display-font mt-7 max-w-[11ch] text-5xl leading-[0.94] tracking-[-0.05em]">How the income works.</h2>
              <p className="mt-6 text-base font-semibold leading-8 text-[#523B0C]">You can earn when customers take Utility Warehouse services and as you build a customer base. We explain the payment structure and costs before you decide.</p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">What you will do</p>
              <h2 className="display-font mt-5 max-w-[13ch] text-5xl leading-[0.94] tracking-[-0.05em] text-[#3D145F] sm:text-6xl">Speak to people. Help them start a household bills quote.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Find people to help", body: "Speak with people you know, meet new customers and use social media in a way that suits you.", icon: Users },
                  { title: "Start their quote", body: "Help customers start their household bills check and understand the next step.", icon: MessageCircle },
                  { title: "Learn the process", body: "Use the training, tools and support available to build your knowledge and confidence.", icon: GraduationCap },
                  { title: "Build relationships", body: "Look after customers well and grow through recommendations and repeat conversations.", icon: Handshake },
                ].map(({ title, body, icon: Icon }) => (
                  <article className="rounded-[1.6rem] bg-[#F5EEF8] p-6" key={title}><Icon className="h-7 w-7 text-[#20A95C]" strokeWidth={2} /><h3 className="mt-5 text-lg font-extrabold text-[#34273B]">{title}</h3><p className="mt-3 text-sm font-semibold leading-6 text-[#625667]">{body}</p></article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#35104F] px-5 py-16 text-white sm:px-8 lg:py-20" id="how-it-works">
          <div className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full border-[105px] border-white/[0.035]" />
          <div className="relative mx-auto max-w-[86rem]">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">How it works</p>
            <h2 className="display-font mt-5 max-w-[14ch] text-5xl leading-[0.93] tracking-[-0.05em] text-[#F0C646] sm:text-6xl">We explain the role, the costs and how you are paid.</h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => (
                <article className="border-t border-white/18 pt-6" key={step.number}><span className={`flex h-14 w-14 items-center justify-center rounded-[1.1rem] text-sm font-extrabold ${index === 1 ? "bg-[#22C86B] text-[#12371F]" : "bg-[#F0C646] text-[#35240B]"}`}>{step.number}</span><h3 className="mt-7 text-2xl font-extrabold tracking-[-0.035em]">{step.title}</h3><p className="mt-4 max-w-sm text-base font-medium leading-7 text-white/67">{step.body}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#273468] px-5 py-16 text-white sm:px-8 lg:py-20" id="start-conversation">
          <div className="mx-auto grid max-w-[86rem] items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">Your next step</p>
              <h2 className="display-font mt-5 max-w-[10ch] text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl">Find out how it works.</h2>
              <p className="mt-7 max-w-md text-lg font-medium leading-8 text-white/72">The opportunity is provided through Utility Warehouse. We will explain the role, support, costs and income structure clearly, then answer your questions.</p>
              <p className="mt-6 max-w-md border-l-4 border-[#F0C646] pl-5 text-sm font-semibold leading-6 text-white/60">Earnings vary and depend on your activity and results. We will give you the information you need to make an informed decision.</p>
            </div>
            <SecondIncomeForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
