import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Banknote,
  Check,
  CreditCard,
  Gauge,
  House,
  Layers,
  PoundSterling,
  ReceiptText,
  Router,
  ShieldCheck,
  Sparkles,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FocusedBillsForm } from "@/components/home/FocusedBillsForm";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

type BillsServiceKind = "household" | "energy" | "broadband";

type Feature = {
  title: string;
  body: string;
  icon: LucideIcon;
};

type BillsServicePageConfig = {
  kind: BillsServiceKind;
  sourcePage: string;
  eyebrow: string;
  title: string;
  introduction: string;
  promise: string;
  heroLabel: string;
  heroHeading: string;
  heroItems: string[];
  heroStyle: string;
  iconStyle: string;
  heroIcon: LucideIcon;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionIntroduction: string;
  features: Feature[];
  detailEyebrow: string;
  detailTitle: string;
  detailCopy: string[];
  detailPoints: string[];
  detailStyle: string;
  questions: Array<{ question: string; answer: string }>;
};

const sharedQuestions = [
  {
    question: "Is the check free?",
    answer:
      "Yes. There is no charge for your Home Money Check and there is no obligation. We show you the quote and explain the potential savings before you decide.",
  },
  {
    question: "Will I definitely save money?",
    answer:
      "Every household starts from a different place. We cannot promise a saving every time. We will check the available quote carefully and tell you clearly what we find.",
  },
  {
    question: "Who provides the household services?",
    answer:
      "The household services in your quote are provided by Utility Warehouse. We explain the services, prices and offers so you can decide whether the quote works for you.",
  },
];

const pageConfigs: Record<BillsServiceKind, BillsServicePageConfig> = {
  household: {
    kind: "household",
    sourcePage: "/household-bills-check",
    eyebrow: "Your free household bills check",
    title: "See how much you could save on your household bills.",
    introduction:
      "We check your gas, electricity and broadband bills, then build one clear quote around your home and the services you need.",
    promise: "We do everything we can to help you save money each month.",
    heroLabel: "Your savings check",
    heroHeading: "One quote. Every saving.",
    heroItems: [
      "Check each monthly price",
      "Combine services to secure larger savings",
      "Add available cashback and switching support",
    ],
    heroStyle: "bg-[#3D145F] text-white",
    iconStyle: "bg-[#22C86B] text-[#12371F]",
    heroIcon: Layers,
    sectionEyebrow: "Where the savings come from",
    sectionTitle: "We look for savings across your whole quote.",
    sectionIntroduction:
      "This includes lower prices, discounts for combining services, cashback and help with switching costs. We add it all together and compare the result with what you pay now.",
    features: [
      {
        title: "Cheaper monthly services",
        body: "We check the available gas, electricity and broadband prices for your address.",
        icon: Banknote,
      },
      {
        title: "Save more by combining services",
        body: "Combining the right services can reduce your total household bill.",
        icon: Layers,
      },
      {
        title: "Cashback and switching support",
        body: "Available offers can reduce your bill and help with eligible costs from an existing contract.",
        icon: CreditCard,
      },
    ],
    detailEyebrow: "Your household",
    detailTitle: "Get the services you need at the best price we can find.",
    detailCopy: [
      "A cheaper quote only works when the services work for your household. We ask what you use, what matters to you and what you pay now.",
      "Then we talk through the new quote, the monthly cost and where each saving comes from.",
    ],
    detailPoints: ["Gas and electricity", "Broadband", "Mobile SIMs", "Cashback and current offers"],
    detailStyle: "bg-[#F0C646] text-[#33210A]",
    questions: sharedQuestions,
  },
  energy: {
    kind: "energy",
    sourcePage: "/energy",
    eyebrow: "Your free energy check",
    title: "Check if your gas and electricity could cost less.",
    introduction:
      "We check what you currently pay for gas and electricity, then talk you through a new quote built for your home.",
    promise: "See your new energy cost and every saving we can include.",
    heroLabel: "Your energy check",
    heroHeading: "See the full energy cost.",
    heroItems: [
      "Start with what you pay now",
      "Check gas and electricity for your home",
      "Include available offers and switching support",
    ],
    heroStyle: "bg-[#EAB929] text-[#33210A]",
    iconStyle: "bg-[#3D145F] text-[#F0C646]",
    heroIcon: Zap,
    sectionEyebrow: "Your energy quote",
    sectionTitle: "See exactly what your new energy could cost.",
    sectionIntroduction:
      "We compare your current gas and electricity bills with the new quote, include every available saving and talk you through the result.",
    features: [
      {
        title: "Your current cost",
        body: "We begin with your present gas and electricity bills so the comparison starts from the right number.",
        icon: ReceiptText,
      },
      {
        title: "The available quote",
        body: "We check the gas and electricity options available for your address and household.",
        icon: PoundSterling,
      },
      {
        title: "The total saving",
        body: "We include relevant offers, savings from combining services and help with eligible exit fees.",
        icon: Sparkles,
      },
    ],
    detailEyebrow: "Combine and save",
    detailTitle: "Combining energy and broadband could save you more.",
    detailCopy: [
      "We can check energy on its own, but combining gas and electricity with broadband may reduce your total monthly bill.",
      "We show you the services, the cost and the potential saving together. You decide if it is right for you.",
    ],
    detailPoints: ["Gas", "Electricity", "EV tariff options", "Available switching support"],
    detailStyle: "bg-[#35104F] text-white",
    questions: [
      {
        question: "Can you check gas and electricity separately?",
        answer:
          "Yes. Tell us whether you want gas, electricity or both checked. We will build the quote around the services you choose.",
      },
      ...sharedQuestions,
    ],
  },
  broadband: {
    kind: "broadband",
    sourcePage: "/broadband",
    eyebrow: "Your free broadband check",
    title: "Check if your broadband could cost less.",
    introduction:
      "We check the broadband available at your address, what speed your household needs and whether a new quote could save you money.",
    promise: "Get the speed your household needs at the best price we can find.",
    heroLabel: "Your broadband check",
    heroHeading: "Speed, service and price.",
    heroItems: [
      "Check availability at your address",
      "Match the speed to how your home uses broadband",
      "Include available switching support",
    ],
    heroStyle: "bg-[#273468] text-white",
    iconStyle: "bg-[#22C86B] text-[#12371F]",
    heroIcon: Wifi,
    sectionEyebrow: "Your broadband check",
    sectionTitle: "Get the speed you need at the right price.",
    sectionIntroduction:
      "Working from home, streaming, gaming and a house full of connected devices all affect what you need. We focus on the right fit and the total cost.",
    features: [
      {
        title: "Availability",
        body: "We use your postcode to check the broadband services available at your address.",
        icon: Router,
      },
      {
        title: "The speed you need",
        body: "We talk about how your household uses broadband so you do not pay for speed you will not use.",
        icon: Gauge,
      },
      {
        title: "The price you pay",
        body: "We show you the monthly cost and any available help with leaving your existing contract.",
        icon: Banknote,
      },
    ],
    detailEyebrow: "What your household needs",
    detailTitle: "Choose broadband that works for everyone in your home.",
    detailCopy: [
      "A household making video calls all day needs something different from one that mainly browses and streams television in the evening.",
      "We talk through your current service, what you need next and how broadband could fit with the rest of your household quote.",
    ],
    detailPoints: ["Working from home", "Streaming and gaming", "Family devices", "Full-fibre availability"],
    detailStyle: "bg-[#DCE8FF] text-[#202B58]",
    questions: [
      {
        question: "How do you know what broadband is available?",
        answer:
          "We use your postcode to check the services available at your address, then talk through speed, usage and price with you.",
      },
      ...sharedQuestions,
    ],
  },
};

const steps = [
  { number: "01", title: "Choose what to check", body: "Tell us which household services you want us to look at." },
  { number: "02", title: "We build your quote", body: "We check the available services, prices and offers for your home." },
  { number: "03", title: "See the result", body: "We talk through the new cost and every potential saving with you." },
] as const;

export function BillsServicePage({ kind }: { kind: BillsServiceKind }) {
  const page = pageConfigs[kind];
  const titleAccent = {
    household: "household bills.",
    energy: "gas and electricity could cost less.",
    broadband: "broadband could cost less.",
  }[kind];
  const [titleStart, titleEnd = ""] = page.title.split(titleAccent);
  const HeroIcon = page.heroIcon;

  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFDF8] text-[#261B2E]">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden px-5 pb-14 pt-9 sm:px-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-11">
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_88%_38%,rgba(106,44,147,0.15),transparent_31%),linear-gradient(115deg,#FFF9E9_0%,#FFFDF8_52%,#F3EAF8_100%)]" />
          <div className="mx-auto grid max-w-[86rem] items-center gap-11 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            <div>
              <p className="flex w-fit items-center gap-2 border-b-2 border-[#EAB929] pb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">
                <Image alt="" className="h-6 w-6 rounded-[0.35rem] object-cover" height={48} src="/brand/hmc-tick-icon-purple.png" width={48} />
                {page.eyebrow}
              </p>
              <h1 className="display-font mt-6 max-w-[12ch] text-[3.2rem] leading-[0.88] tracking-[-0.06em] text-[#3D145F] min-[480px]:max-w-[14ch] sm:max-w-[12ch] sm:text-[clamp(3.6rem,5.5vw,6.15rem)]">
                {titleStart}<span className="text-[#D89F00]">{titleAccent}</span>{titleEnd}
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#514558] sm:text-[1.15rem]">
                {page.introduction}
              </p>
              <p className="mt-5 max-w-xl text-base font-extrabold leading-7 text-[#3D145F]">{page.promise}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="inline-flex min-h-14 items-center gap-3 rounded-full bg-[#22C86B] px-7 py-4 text-base font-extrabold text-[#12371F] transition hover:-translate-y-0.5 hover:bg-[#2DD977]" href="#start-check">
                  Check how much I could save
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link className="inline-flex min-h-14 items-center gap-3 rounded-full bg-[#F0C646] px-7 py-4 text-base font-extrabold text-[#35240B] transition hover:-translate-y-0.5 hover:bg-[#FFD75F]" href="#how-it-works">
                  See how it works
                  <ArrowDown className="h-5 w-5" />
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#DED3BE] pt-6 text-sm font-bold text-[#625667]">
                {["Free. No cost to you.", "Speak with an expert.", "You decide."].map((item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <Check className="h-4 w-4 text-[#20A95C]" strokeWidth={3} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className={`relative overflow-hidden rounded-[2.5rem] p-7 shadow-[0_32px_80px_rgba(61,20,95,0.2)] sm:p-10 ${page.heroStyle}`}>
              <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[70px] border-white/[0.07]" />
              <div className="relative flex items-start justify-between gap-6 border-b border-current/15 pb-7">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] opacity-72">{page.heroLabel}</p>
                  <h2 className="display-font mt-4 max-w-[11ch] text-4xl leading-[0.95] tracking-[-0.045em] sm:text-5xl">{page.heroHeading}</h2>
                </div>
                <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] ${page.iconStyle}`}>
                  <HeroIcon className="h-8 w-8" strokeWidth={2.2} />
                </span>
              </div>
              <div className="relative mt-7 grid gap-3">
                {page.heroItems.map((item) => (
                  <p className="flex items-start gap-3 rounded-[1.2rem] bg-white/[0.09] p-4 text-sm font-extrabold leading-6 ring-1 ring-inset ring-current/10" key={item}>
                    <Image alt="" className="mt-0.5 h-6 w-6 shrink-0 rounded-[0.35rem] object-cover" height={48} src="/brand/hmc-tick-icon-purple.png" width={48} />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#EEE5D0] bg-white px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[86rem]">
            <div className="max-w-4xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">{page.sectionEyebrow}</p>
              <h2 className="display-font mt-5 max-w-[15ch] text-5xl leading-[0.94] tracking-[-0.05em] text-[#3D145F] sm:text-6xl">{page.sectionTitle}</h2>
              <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-[#625667]">{page.sectionIntroduction}</p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {page.features.map(({ title, body, icon: Icon }, index) => (
                <article className={`relative min-h-[18rem] overflow-hidden rounded-[2rem] p-7 shadow-[0_20px_55px_rgba(61,20,95,0.09)] ${index === 1 ? "bg-[#35104F] text-white" : index === 2 ? "bg-[#F0C646] text-[#33210A]" : "bg-[#F5EEF8] text-[#2C2033]"}`} key={title}>
                  <span className={`flex h-13 w-13 items-center justify-center rounded-[1rem] ${index === 1 ? "bg-[#22C86B] text-[#12371F]" : "bg-white text-[#6A2C93]"}`}>
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
                  </span>
                  <p className="display-font absolute right-6 top-5 text-5xl leading-none opacity-15">0{index + 1}</p>
                  <h3 className="mt-8 text-2xl font-extrabold leading-tight tracking-[-0.035em]">{title}</h3>
                  <p className={`mt-4 text-base font-semibold leading-7 ${index === 1 ? "text-white/68" : "opacity-75"}`}>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FFFDF8] px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-[86rem] gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <article className={`relative overflow-hidden rounded-[2.4rem] p-8 shadow-[0_24px_60px_rgba(61,20,95,0.13)] sm:p-11 ${page.detailStyle}`}>
              <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full border-[55px] border-current opacity-[0.055]" />
              <p className="relative text-xs font-extrabold uppercase tracking-[0.2em] opacity-72">{page.detailEyebrow}</p>
              <h2 className="display-font relative mt-5 max-w-[14ch] text-4xl leading-[0.96] tracking-[-0.045em] sm:text-5xl">{page.detailTitle}</h2>
              <div className="relative mt-7 max-w-3xl space-y-5 text-base font-semibold leading-8 opacity-78">
                {page.detailCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
            <article className="rounded-[2.4rem] bg-white p-8 shadow-[0_20px_55px_rgba(61,20,95,0.09)] ring-1 ring-[#E8DFC9] sm:p-11">
              <House className="h-10 w-10 text-[#20A95C]" strokeWidth={1.9} />
              <h2 className="display-font mt-7 text-4xl leading-[0.97] tracking-[-0.04em] text-[#3D145F]">What we can include</h2>
              <div className="mt-7 grid gap-3">
                {page.detailPoints.map((point) => (
                  <p className="flex items-center gap-3 border-b border-[#E8DFC9] pb-3 text-base font-extrabold text-[#514558]" key={point}>
                    <Image alt="" className="h-7 w-7 shrink-0 rounded-[0.4rem] object-cover" height={56} src="/brand/hmc-tick-icon-purple.png" width={56} />
                    {point}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#35104F] px-5 py-16 text-white sm:px-8 lg:py-20" id="how-it-works">
          <div className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full border-[105px] border-white/[0.035]" />
          <div className="relative mx-auto max-w-[86rem]">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">How it works</p>
            <h2 className="display-font mt-5 max-w-[14ch] text-5xl leading-[0.93] tracking-[-0.05em] text-[#F0C646] sm:text-6xl">We check your bills and talk through the savings.</h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => (
                <article className="relative border-t border-white/18 pt-6" key={step.number}>
                  <span className={`flex h-14 w-14 items-center justify-center rounded-[1.1rem] text-sm font-extrabold ${index === 1 ? "bg-[#22C86B] text-[#12371F]" : "bg-[#F0C646] text-[#35240B]"}`}>{step.number}</span>
                  <h3 className="mt-7 text-2xl font-extrabold tracking-[-0.035em]">{step.title}</h3>
                  <p className="mt-4 max-w-sm text-base font-medium leading-7 text-white/67">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2E0D45] px-5 py-16 text-white sm:px-8 lg:py-20" id="start-check">
          <div className="mx-auto grid max-w-[86rem] items-start gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">Start your check</p>
              <h2 className="display-font mt-5 max-w-[10ch] text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl">Check how much you could save.</h2>
              <p className="mt-7 max-w-md text-lg font-medium leading-8 text-white/72">Choose the services you want checked and let us know how to reach you. We’ll get in touch for a chat and start searching for savings.</p>
              <div className="mt-9 space-y-4 border-t border-white/15 pt-6 text-sm font-bold text-white/80">
                {["Free. No cost to you.", "Speak with an expert. No AI. No Call Centres.", "You decide."].map((item) => (
                  <p className="flex items-start gap-3" key={item}><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#28D679]" strokeWidth={3} />{item}</p>
                ))}
              </div>
            </div>
            <FocusedBillsForm sourcePage={page.sourcePage} />
          </div>
        </section>

        <section className="bg-[#FFFDF8] px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div className="border-l-4 border-[#EAB929] pl-6">
              <ShieldCheck className="h-8 w-8 text-[#20A95C]" strokeWidth={1.9} />
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">Questions</p>
              <h2 className="display-font mt-4 max-w-[9ch] text-5xl leading-[0.94] tracking-[-0.05em] text-[#3D145F] sm:text-6xl">Your questions answered.</h2>
            </div>
            <div className="border-t border-[#DDD1B8]">
              {page.questions.map((item) => (
                <details className="group border-b border-[#DDD1B8] py-6" key={item.question}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-extrabold text-[#34273B] marker:hidden sm:text-xl">
                    {item.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#EAB929]/55 bg-[#FFF4CE] text-[#5A247F] transition group-open:rotate-45 group-open:bg-[#F0C646]">+</span>
                  </summary>
                  <p className="max-w-3xl pb-2 pt-5 text-base font-medium leading-8 text-[#625667]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
