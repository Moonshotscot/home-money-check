import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Banknote,
  Check,
  CreditCard,
  Gift,
  HeartHandshake,
  House,
  Layers,
  ReceiptText,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { FocusedBillsForm } from "@/components/home/FocusedBillsForm";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "Home Money Check | See how much you could save",
  description:
    "Get a free Home Money Check for your gas, electricity and broadband. We check the available deals, savings, cashback and switching support for your household.",
  openGraph: {
    title: "Home Money Check | See how much you could save",
    description:
      "A free household bills check that does everything it can to help you save money.",
    type: "website",
  },
};

const savingRoutes = [
  {
    number: "01",
    title: "Cheaper household services",
    body: "We check available gas, electricity and broadband prices and search for services that cost your household less.",
    icon: Banknote,
    style: "bg-[#3D145F] text-white",
    iconStyle: "bg-[#22C86B] text-[#12371F]",
    bodyStyle: "text-white/72",
  },
  {
    number: "02",
    title: "Stack savings by combining services",
    body: "Combining the right services can reduce your bill and add extra offers.",
    icon: Layers,
    style: "bg-white text-[#2C2033] ring-1 ring-inset ring-[#D9A914]/40",
    iconStyle: "bg-[#FFF1B8] text-[#3D145F]",
    bodyStyle: "text-[#625667]",
  },
  {
    number: "03",
    title: "The right services for you and your household",
    body: "We check the speed, data and features you need, so you only pay for what you will use.",
    icon: House,
    style: "bg-[#2B1535] text-white",
    iconStyle: "bg-[#22C86B] text-[#12371F]",
    bodyStyle: "text-white/70",
  },
  {
    number: "04",
    title: "Cashback and help with switching costs",
    body: "Cashback can reduce your ongoing bill, while switching support can help with current contract costs.",
    icon: CreditCard,
    style: "bg-[#EAB929] text-[#312006]",
    iconStyle: "bg-[#FFF7D9] text-[#3D145F]",
    bodyStyle: "text-[#4D350A]",
  },
];

const process = [
  {
    number: "01",
    title: "Tell us what you want checked",
    body: "Choose the bills you want checked and let us know how to contact you. We’ll get in touch for a chat.",
  },
  {
    number: "02",
    title: "We review your bills and build your quote",
    body: "We review what you pay, check what your household needs and build a quote for your chosen services and offers.",
  },
  {
    number: "03",
    title: "See your new costs and savings",
    body: "We’ll talk through your new quote and all the potential savings.",
  },
];

const faqs = [
  {
    question: "How could a Home Money Check save me money?",
    answer:
      "We look at your current bills, then build a household services quote around what you use. Savings may come from a cheaper price, choosing a better-fit package, combining services, cashback or eligible switching support.",
  },
  {
    question: "Is the check free and is there any obligation?",
    answer:
      "There is no charge for your Home Money Check and there is no obligation. We explain the quote, costs and potential savings before you decide if it is right for you.",
  },
  {
    question: "Will every household save money?",
    answer:
      "Every household starts with different prices, contracts and needs. We calculate your quote using your own information and do everything we can to find a saving. We can’t promise to find a saving every time, and if that’s the case, we’ll be upfront and tell you.",
  },
  {
    question: "What can you check?",
    answer:
      "We focus on gas, electricity and broadband. We can also include Mobile SIMs, EV tariffs, the Cashback Card and eligible help with existing termination fees when we build your quote.",
  },
  {
    question: "What cashback and switching support is available?",
    answer:
      "Eligible customers may receive up to £400 towards early termination fees and up to £150 in Cashback Card bonus credit when switching qualifying services. The Cashback Card can also earn cashback from everyday spending to reduce the monthly household bill. Eligibility and terms apply.",
  },
  {
    question: "Which company provides the household services?",
    answer:
      "Household utility quotes use Utility Warehouse services. We check the available services and offers against what your household needs, then talk through the quote with you and highlight any savings that can be made.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFDF8] text-[#261B2E]">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden px-5 pb-16 pt-10 sm:px-8 lg:pb-20 lg:pt-14">
          <div className="pointer-events-none absolute -right-48 bottom-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#E8D7F6]/55 blur-3xl" />

          <div className="mx-auto grid max-w-[86rem] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 border-b-2 border-[#EAB929] pb-3 text-xs font-extrabold uppercase tracking-[0.19em] text-[#5B2388]">
                <Image
                  alt=""
                  className="h-7 w-7 rounded-[0.45rem] object-cover"
                  height={64}
                  src="/brand/hmc-tick-icon-purple.png"
                  width={64}
                />
                Your free household bills check
              </p>
              <h1 className="display-font mt-8 max-w-[11ch] text-[clamp(4rem,7.7vw,8rem)] font-black leading-[0.84] tracking-[-0.065em] text-[#3D145F]">
                Let&rsquo;s see how much you could <span className="relative inline-block text-[#D89F00]">save.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-[#3F3347] sm:text-xl sm:leading-9">
                We check your gas, electricity and broadband bills then talk you through a new quote tailored specifically for you and designed to save you money.
              </p>
              <p className="mt-4 max-w-xl text-base font-extrabold leading-7 text-[#3D145F] sm:text-lg">
                We&rsquo;ll do everything we can to help you save money.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#22C86B] px-7 py-4 text-base font-extrabold text-[#12371F] shadow-[0_18px_50px_rgba(34,200,107,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2DD977] focus-visible:outline-[#3D145F]"
                  href="#arrange-check"
                >
                  Check how much I could save
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#F0C646] bg-[#F0C646] px-7 py-4 text-base font-extrabold text-[#35240B] shadow-[0_14px_34px_rgba(234,185,41,0.2)] transition duration-300 hover:-translate-y-0.5 hover:border-[#FFD75F] hover:bg-[#FFD75F]"
                  href="#how-it-works"
                >
                  See how it works
                </Link>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#E8DFC9] pt-5 text-sm font-bold text-[#5C4E63]">
                {["Free. No cost to you.", "Speak with an expert. No AI. No Call Centres.", "You decide"].map(
                  (item) => (
                    <span className="inline-flex items-center gap-2" key={item}>
                      <Check className="h-4 w-4 text-[#18A957]" strokeWidth={3} />
                      {item}
                    </span>
                  ),
                )}
              </div>
              <p className="mt-5 text-sm font-bold text-[#5C4E63]">
                Home Money Check is led by founder{" "}
                <Link className="text-[#3D145F] underline decoration-[#EAB929] decoration-2 underline-offset-4" href="#about">
                  Neill Connolly
                </Link>
                .
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[47rem] lg:mx-0 lg:ml-auto">
              <div className="relative overflow-hidden rounded-[2.2rem] bg-[#3D145F] px-6 pb-7 pt-6 text-white shadow-[0_42px_100px_rgba(61,20,95,0.3)] sm:rounded-[3rem] sm:px-10 sm:pb-10 sm:pt-9">
                <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full border-[55px] border-white/[0.055]" />
                <div className="relative flex items-start justify-between gap-6 border-b border-white/15 pb-7">
                  <div>
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">
                      Your savings check
                    </p>
                    <p className="display-font mt-3 max-w-[10ch] text-4xl leading-[0.95] tracking-[-0.04em] sm:text-5xl">
                      Every saving counts.
                    </p>
                  </div>
                  <Image
                    alt=""
                    className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-[1.25rem] object-cover sm:h-20 sm:w-20 sm:rounded-[1.4rem]"
                    height={160}
                    src="/brand/hmc-tick-icon-purple.png"
                    width={160}
                  />
                </div>

                <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-white/[0.09] p-5 ring-1 ring-inset ring-white/10">
                    <p className="display-font text-5xl leading-none tracking-[-0.055em] text-[#F0C646]">£400</p>
                    <p className="mt-3 text-sm font-bold leading-6 text-white/76">
                      Up to £400 towards early termination fees.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] bg-[#F0C646] p-5 text-[#33210A]">
                    <p className="display-font text-5xl leading-none tracking-[-0.055em]">£150</p>
                    <p className="mt-3 text-sm font-extrabold leading-6">
                      Up to £150 Cashback Card bonus credit.
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 space-y-3">
                  {["Find a cheaper monthly price", "Secure larger savings by combining services", "Add cashback & help with switching costs"].map(
                    (item) => (
                      <p className="flex items-center gap-3 text-sm font-bold text-white/82" key={item}>
                        <Image
                          alt=""
                          className="h-7 w-7 shrink-0 rounded-[0.45rem] object-cover"
                          height={56}
                          src="/brand/hmc-tick-icon-purple.png"
                          width={56}
                        />
                        {item}
                      </p>
                    ),
                  )}
                </div>
                <Link
                  className="group relative mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#F0C646] transition hover:text-[#FFD75F]"
                  href="#arrange-check"
                >
                  Check how much I could save
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#EEE5D0] bg-white px-5 py-12 sm:px-8 sm:py-14 lg:py-20">
          <div className="mx-auto grid max-w-[86rem] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">Where savings come from</p>
              <h2 className="display-font mt-4 max-w-[10ch] text-5xl leading-[0.92] tracking-[-0.05em] text-[#3D145F] sm:text-6xl">
                There&rsquo;s more than one way to save.
              </h2>
              <p className="mt-5 max-w-lg text-lg font-semibold leading-8 text-[#514558]">
                We look for savings across your whole quote: lower prices, services that fit your household, extra value from combining them and every available offer.
              </p>
              <div className="mt-7 rounded-[1.65rem] bg-[#F0C646] p-5 text-[#2B1535] shadow-[0_18px_45px_rgba(234,185,41,0.2)] sm:p-7 lg:pb-11">
                <ReceiptText className="h-7 w-7 text-[#6A2C93]" strokeWidth={2} />
                <p className="display-font mt-4 text-3xl leading-[1.02] tracking-[-0.035em]">
                  You stack the savings.
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#49330A] sm:text-base">
                  Including lower prices, discounts for combining services, cashback and help with switching costs.
                </p>
              </div>
              <Link
                className="group mt-5 inline-flex min-h-13 items-center gap-3 rounded-full bg-[#22C86B] px-6 py-3 text-sm font-extrabold text-[#12371F] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2DD977]"
                href="#arrange-check"
              >
                Check how much I could save
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {savingRoutes.map(({ number, title, body, icon: Icon, style, iconStyle, bodyStyle }) => (
                <article
                  className={`relative grid grid-cols-[1fr_auto] items-start gap-4 overflow-hidden rounded-[1.65rem] px-5 py-5 shadow-[0_16px_45px_rgba(61,20,95,0.09)] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-5 sm:rounded-[2rem] sm:px-8 sm:py-7 ${style}`}
                  key={title}
                >
                  <div className={`row-start-1 flex h-12 w-12 items-center justify-center rounded-[1rem] ${iconStyle}`}>
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div className="col-span-2 row-start-2 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                    <h3 className="text-xl font-extrabold tracking-[-0.03em] sm:text-2xl">{title}</h3>
                    <p className={`mt-2 max-w-2xl text-sm font-semibold leading-6 sm:text-base ${bodyStyle}`}>{body}</p>
                  </div>
                  <span className="display-font col-start-2 row-start-1 text-4xl leading-none opacity-30 sm:col-start-3 sm:text-5xl">{number}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#35104F] px-5 py-16 text-white sm:px-8 lg:py-24" id="how-it-works">
          <div className="pointer-events-none absolute -right-32 -top-40 h-[36rem] w-[36rem] rounded-full border-[110px] border-white/[0.035]" />
          <div className="mx-auto max-w-[86rem]">
            <div className="max-w-4xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">How it works</p>
              <h2 className="display-font mt-5 max-w-[16ch] text-5xl leading-[0.92] tracking-[-0.05em] text-[#F0C646] sm:text-6xl">
                We check your bills to <span className="whitespace-nowrap">save you money.</span>
              </h2>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/72">
                We start with what you pay and what your household needs. Then we can build your quote, maximise your savings and talk through the result.
              </p>
            </div>

            <ol className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
              {process.map((step, index) => (
                <li className="contents" key={step.number}>
                  <article className="flex h-full flex-col">
                    <span className={`flex h-16 w-16 items-center justify-center rounded-[1.35rem] text-sm font-extrabold ${index === 1 ? "bg-[#22C86B] text-[#12371F]" : "bg-[#F0C646] text-[#35240B]"}`}>
                      {step.number}
                    </span>
                    <h3 className="mt-7 max-w-[13ch] text-2xl font-extrabold leading-tight tracking-[-0.035em] sm:text-3xl lg:min-h-[6.75rem]">{step.title}</h3>
                    <p className="mt-4 max-w-sm text-base font-medium leading-7 text-white/67 lg:min-h-[7rem]">{step.body}</p>
                  </article>
                  {index < process.length - 1 ? (
                    <>
                      <div aria-hidden="true" className="flex justify-center lg:hidden">
                        <ArrowDown
                          className="h-12 w-12 text-[#F0C646] drop-shadow-[0_0_14px_rgba(240,198,70,0.24)]"
                          strokeWidth={3}
                        />
                      </div>
                      <ArrowRight
                        aria-hidden="true"
                        className="hidden h-16 w-16 self-start text-[#F0C646] drop-shadow-[0_0_14px_rgba(240,198,70,0.24)] lg:block"
                        strokeWidth={3}
                      />
                    </>
                  ) : null}
                </li>
              ))}
            </ol>

            <div className="mt-14 flex justify-start">
              <Link
                className="inline-flex min-h-14 items-center gap-3 rounded-full bg-[#22C86B] px-7 py-4 text-base font-extrabold text-[#12371F] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2DD977]"
                href="#arrange-check"
              >
                Check how much I could save
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFDF8] px-5 py-16 sm:px-8 lg:py-20" id="about">
          <div className="mx-auto grid max-w-[86rem] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative mx-auto w-full max-w-[33rem] lg:mx-0">
              <div className="relative aspect-[4/4.55] overflow-hidden rounded-[2.35rem] border border-[#D9A914]/60 bg-[#D9C7E7] shadow-[0_30px_72px_rgba(61,20,95,0.16)]">
                <Image
                  alt="Neill Connolly, founder of Home Money Check"
                  className="object-cover object-top"
                  fill
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  src="/images/neill-connolly-profile.webp"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2F0D48]/88 via-[#2F0D48]/30 to-transparent px-7 pb-7 pt-24 text-white">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F0C646]">Founder</p>
                  <p className="mt-1 text-xl font-extrabold">Neill Connolly</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">Meet Neill</p>
              <h2 className="display-font mt-5 max-w-[13ch] text-5xl leading-[0.94] tracking-[-0.05em] text-[#3D145F] sm:text-6xl">
                &ldquo;I created Home Money Check to help people save money.&rdquo;
              </h2>
              <div className="mt-8 max-w-2xl space-y-5 text-base font-medium leading-8 text-[#5F5265]">
                <p>
                  Too many households are paying more than they need to for gas, electricity and broadband. Price changes and complicated offers seem designed to confuse us, and it&rsquo;s getting worse. I want to make things clearer and help people keep more of their money.
                </p>
                <p>
                  Home Money Check gives you one simple quote for gas, electricity and broadband, then maximises your savings by bundling services and checking for cashback or help with exit fees. I want every customer to understand their quote and feel confident choosing what is right for them.
                </p>
              </div>
              <div className="mt-9 flex items-center gap-4 border-l-4 border-[#EAB929] pl-5">
                <ShieldCheck className="h-6 w-6 shrink-0 text-[#20A95C]" strokeWidth={2.1} />
                <p className="display-font text-2xl tracking-[-0.03em] text-[#3D145F]">
                  We do everything we can to help you save money.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#2E0D45] px-5 py-16 text-white sm:px-8 lg:py-20" id="arrange-check">
          <div className="mx-auto grid max-w-[86rem] items-start gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
            <div className="lg:sticky lg:top-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">Your free bills check</p>
              <h2 className="display-font mt-5 max-w-[10ch] text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Start your free bills check.
              </h2>
              <p className="mt-7 max-w-md text-lg font-medium leading-8 text-white/72">
                Choose what you want checked and let us know how to reach you. We&rsquo;ll get in touch for a chat and start searching for savings.
              </p>
              <div className="mt-9 space-y-4 border-t border-white/15 pt-6 text-sm font-bold text-white/80">
                {["Find cheaper deals", "Check savings from combining services", "Add available switching support and cashback offers"].map((item) => (
                  <p className="flex items-center gap-3" key={item}>
                    <Check className="h-4 w-4 text-[#28D679]" strokeWidth={3} />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <FocusedBillsForm sourcePage="/" />
          </div>
        </section>

        <section className="bg-[#FFFDF8] px-5 pb-10 pt-20 sm:px-8 lg:pb-12 lg:pt-24" id="questions">
          <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div className="border-l-4 border-[#EAB929] pl-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">Questions</p>
              <h2 className="display-font mt-5 max-w-[9ch] text-5xl leading-[0.94] tracking-[-0.05em] text-[#3D145F] sm:text-6xl">
                Your questions answered.
              </h2>
            </div>
            <div className="border-t border-[#DDD1B8]">
              {faqs.map((faq) => (
                <details className="group border-b border-[#DDD1B8] py-6" key={faq.question}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-extrabold text-[#34273B] marker:hidden sm:text-xl">
                    {faq.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#EAB929]/55 bg-[#FFF4CE] text-[#5A247F] transition group-open:rotate-45 group-open:bg-[#F0C646]">
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-2 pt-5 text-base font-medium leading-8 text-[#625667]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-14 flex max-w-[86rem] flex-col gap-6 rounded-[2rem] bg-[#F0C646] p-7 text-[#2B1535] shadow-[0_18px_45px_rgba(234,185,41,0.18)] sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6A2C93]">Ready when you are</p>
              <p className="display-font mt-2 text-3xl leading-tight tracking-[-0.035em] text-[#3D145F] sm:text-4xl">
                See how much you could save.
              </p>
            </div>
            <Link
              className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#3D145F] px-7 py-4 text-base font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#512078]"
              href="#arrange-check"
            >
              Check how much I could save
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <section id="more-from-home-money-check" className="bg-[#F4EDDF] px-5 py-14 sm:px-8 lg:py-16">
          <div className="mx-auto max-w-[86rem]">
            <p className="mb-7 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">
              More from Home Money Check
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="relative flex min-h-[23rem] flex-col overflow-hidden rounded-[2.3rem] bg-[#F0C646] p-7 text-[#2B1535] shadow-[0_24px_60px_rgba(91,63,6,0.14)] sm:p-9">
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[48px] border-white/20" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-[#FFF7D9] text-[#3D145F]">
                  <Gift className="h-7 w-7" strokeWidth={1.9} />
                </div>
                <p className="relative mt-7 text-xs font-extrabold uppercase tracking-[0.19em] text-[#6A2C93]">£20K Giveaway</p>
                <h3 className="display-font relative mt-3 text-4xl leading-[0.98] tracking-[-0.045em] sm:text-5xl">Enter to win £20,000.</h3>
                <p className="relative mt-4 max-w-md text-sm font-semibold leading-6 text-[#4D370B] sm:text-base">
                  Enter the £20K Giveaway through Home Money Check.
                </p>
                <div className="relative mt-auto pt-5">
                  <Link
                    className="inline-flex min-h-13 w-fit items-center justify-center gap-2 rounded-full bg-[#3D145F] px-6 py-3 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#512078]"
                    href="/20k-giveaway"
                  >
                    Enter the giveaway
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>

              <article className="flex min-h-[23rem] flex-col rounded-[2.3rem] bg-[#273468] p-7 text-white shadow-[0_24px_60px_rgba(39,52,104,0.2)] sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-[#22C86B] text-[#12371F]">
                  <TrendingUp className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.19em] text-[#F0C646]">Build something of your own</p>
                <h3 className="display-font mt-3 text-4xl leading-[0.98] tracking-[-0.045em] sm:text-5xl">Earn a second income.</h3>
                <p className="mt-4 max-w-md text-sm font-semibold leading-6 text-white/72 sm:text-base">
                  Help people save money on household services and build an additional income of your own.
                </p>
                <div className="mt-auto pt-5">
                  <Link
                    className="inline-flex min-h-13 w-fit items-center justify-center gap-2 rounded-full bg-[#F0C646] px-6 py-3 text-sm font-extrabold text-[#35240B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFD75F]"
                    href="/build-a-second-income"
                  >
                    Explore the opportunity
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2D7C3] bg-[#FFFDF8] px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch lg:gap-10">
            <div className="flex flex-col justify-center rounded-[2.2rem] bg-[#35104F] p-8 text-white sm:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">For your staff and clients</p>
              <h2 className="display-font mt-4 max-w-[10ch] text-5xl leading-[0.93] tracking-[-0.05em] sm:text-6xl">Help the people you work with save money.</h2>
              <p className="mt-6 max-w-md text-base font-semibold leading-7 text-white/70">Give your staff or clients their own route to a free gas, electricity and broadband check.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="flex min-h-[22rem] flex-col rounded-[2.2rem] bg-[#F0C646] p-8 text-[#33210A] shadow-[0_22px_55px_rgba(95,69,10,0.13)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-[#FFF7D9] text-[#3D145F]"><Users className="h-7 w-7" strokeWidth={2} /></div>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-[#6A2C93]">For employers</p>
                <h3 className="display-font mt-3 text-4xl leading-[0.98] tracking-[-0.045em] text-[#3D145F]">Help your staff save money.</h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#513B0D]">Give your team direct access to a free gas, electricity and broadband check.</p>
                <Link className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-extrabold text-[#3D145F]" href="/staff-bills-check">Explore Staff Bills Check<ArrowRight className="h-4 w-4" /></Link>
              </article>
              <article className="flex min-h-[22rem] flex-col rounded-[2.2rem] bg-[#273468] p-8 text-white shadow-[0_22px_55px_rgba(39,52,104,0.18)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-[#22C86B] text-[#12371F]"><HeartHandshake className="h-7 w-7" strokeWidth={2} /></div>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F0C646]">For professionals</p>
                <h3 className="display-font mt-3 text-4xl leading-[0.98] tracking-[-0.045em]">Help your clients save money.</h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/72">Introduce your clients to a free check of their gas, electricity and broadband bills.</p>
                <Link className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-extrabold text-[#F0C646]" href="/for-your-clients">Explore client introductions<ArrowRight className="h-4 w-4" /></Link>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
