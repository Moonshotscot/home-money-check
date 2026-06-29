import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ReceiptText, Smartphone, Tag, Users, Wifi, Zap } from "lucide-react";
import { CampaignLeadForm } from "@/components/CampaignLeadForm";
import { CampaignScrollButton } from "@/components/CampaignScrollButton";
import type { CampaignPageConfig } from "@/lib/campaign-pages";
import { socialLinks } from "@/lib/social-links";

const howItWorks = [
  {
    title: "Send your details",
    body: "Tell us the best way to contact you and what you want checked.",
  },
  {
    title: "We check the options",
    body: "We'll talk through what you use now and what may be available.",
  },
  {
    title: "You decide",
    body: "If there is a better fit, we'll show you. If you want to leave things as they are, that is your choice.",
  },
];

const brandCards = [
  { label: "Energy", icon: Zap, className: "left-6 top-7 rotate-[-6deg] bg-[#FDCA55]" },
  { label: "Broadband", icon: Wifi, className: "right-5 top-24 rotate-[5deg] bg-[#B7DDF2]" },
  { label: "Mobile SIMs", icon: Smartphone, className: "bottom-10 left-10 rotate-[4deg] bg-[#CFE6D5]" },
];

const householdSteps = [
  {
    title: "Pop in your details",
    body: "Let us know who you are and how to say hello.",
  },
  {
    title: "We’ll get in touch",
    body: "We’ll talk through your options and a quote.",
  },
  {
    title: "You decide",
    body: "We’ll let you know if we can save you money. You decide what to do.",
  },
];

const staffCheckItems = ["Gas", "Electricity", "Broadband", "Mobile SIMs", "Wider home money checks"];

const staffBillItems = [
  "Gas and electricity",
  "Broadband",
  "Mobile SIMs",
  "Current offers",
  "Bundle options",
  "Cashback promotions",
];

const staffValueCards = [
  {
    title: "Lower household costs",
    body: "We check the bills they already pay and see if there is a better option.",
  },
  {
    title: "Clear human help",
    body: "They speak to a real person who explains things clearly.",
  },
  {
    title: "Free for staff",
    body: "There is no charge for staff to ask us to check their options.",
  },
  {
    title: "More than just bills",
    body: "Where relevant, we can also point them towards other Home Money Check areas including mortgages, protection, wills, POA and estate planning.",
  },
];

const workplaceCards = [
  {
    title: "A benefit staff understand",
    body: "Everyone has household bills. This gives staff help with costs they already recognise.",
  },
  {
    title: "Easy to offer",
    body: "You introduce the staff check. Home Money Check handles the conversations.",
  },
  {
    title: "No cost to arrange",
    body: "There is no charge to the workplace for arranging a staff bills check.",
  },
  {
    title: "Shows practical support",
    body: "It gives your team access to clear, relevant help with household money matters.",
  },
];

const staffSteps = [
  {
    title: "We agree the simple setup",
    body: "We explain how the staff check works and agree the best way to share it with your team.",
  },
  {
    title: "Staff get in touch directly",
    body: "Staff contact Home Money Check if they want a free check. They choose whether to use it.",
  },
  {
    title: "We handle the check",
    body: "We speak to them, check their options and let them decide what they want to do.",
  },
];

function HouseholdBillsCampaignPage({ page }: { page: CampaignPageConfig }) {
  return (
    <div className="min-h-screen bg-[#F7F0E8] text-[#2C1F3D]">
      <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center" aria-label="Home Money Check">
            <Image
              alt="Home Money Check"
              className="h-14 w-auto object-contain md:h-16"
              height={88}
              priority
              src="/brand/hmc-logo-full-transparent.png"
              width={248}
            />
          </div>
          <CampaignScrollButton
            className="hidden items-center gap-2 rounded-full bg-[#22C55E] px-4 py-3 text-sm font-black text-[#2C1F3D] shadow-[0_12px_30px_rgba(34,197,94,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#32D86A] sm:inline-flex"
            targetId="campaign-lead-form"
          >
            {page.ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </CampaignScrollButton>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#5F2D8C] px-5 pb-10 pt-28 text-[#F7F0E8] md:px-8 md:pb-16 md:pt-32">
          <div className="relative mx-auto grid max-w-6xl gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
            <div className="relative z-10">
              <p className="w-fit rounded-full bg-[#FDCA55] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
                {page.eyebrow}
              </p>
              <h1 className="display-font mt-7 max-w-3xl text-5xl font-black leading-[1] tracking-normal text-[#FDCA55] md:text-7xl">
                {page.title}
              </h1>
              <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-[#F7F0E8]/88 md:text-2xl md:leading-9">
                {page.subtitle}
              </p>
              <p className="mt-4 w-fit rounded-[1.2rem] bg-white/10 px-4 py-3 text-sm font-black leading-6 text-[#F7F0E8] ring-1 ring-white/14 md:text-base">
                Speak with an expert. No AI. No Call Centres.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CampaignScrollButton
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#22C55E] px-6 py-4 text-base font-black text-[#2C1F3D] shadow-[0_18px_45px_rgba(34,197,94,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#32D86A]"
                  targetId="campaign-lead-form"
                >
                  {page.ctaLabel}
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
                </CampaignScrollButton>
                <p className="w-fit rounded-full bg-[#FDCA55] px-4 py-3 text-sm font-black text-[#4F247D] shadow-[0_14px_32px_rgba(253,202,85,0.2)]">
                  {page.reassurance}
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F7F0E8] p-7 text-[#2C1F3D] shadow-[0_34px_90px_rgba(44,31,61,0.28)] md:p-9">
                <div className="relative">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]/70">
                        Household bills
                      </p>
                      <h2 className="display-font mt-2 text-3xl font-black leading-[1.05] tracking-normal text-[#4F247D] md:text-4xl">
                        {page.checklistHeading || "Your personal bills check includes:"}
                      </h2>
                    </div>
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#22C55E] text-[#2C1F3D]">
                      <Check className="h-8 w-8" strokeWidth={3.2} />
                    </span>
                  </div>
                  <div className="grid gap-3">
                    {["Gas", "Electricity", "Broadband", "Mobile SIMs"].map((item) => (
                      <div
                        className="flex items-center justify-between gap-4 rounded-[1.35rem] bg-white px-5 py-4 shadow-[0_14px_32px_rgba(44,31,61,0.08)]"
                        key={item}
                      >
                        <span className="text-base font-black text-[#2C1F3D]">{item}</span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E] text-[#2C1F3D]">
                          <Check className="h-5 w-5" strokeWidth={3.4} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 rounded-[1.7rem] border border-[#FDCA55]/55 bg-[#FDCA55] p-5 text-[#2C1F3D] shadow-[0_20px_50px_rgba(44,31,61,0.18)]">
                <p className="text-lg font-black leading-6 text-[#4F247D]">Tied into a contract?</p>
                <p className="mt-2 text-base font-black leading-7">
                  UW can cover up to £400 of early termination fees when you switch services so even if you're tied into a contract, you could still save.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-9 md:px-8 md:py-12">
          <div className="mx-auto grid max-w-6xl gap-5 xl:grid-cols-[1.08fr_0.92fr]">
            <article className="rounded-[2.2rem] bg-white p-7 shadow-[0_20px_60px_rgba(44,31,61,0.1)] md:p-9">
              <h2 className="display-font text-4xl font-black leading-[1.04] tracking-normal text-[#4F247D] md:text-5xl">
                {page.introHeading || "Are your bills too expensive?"}
              </h2>
              <div className="mt-6 grid gap-4 text-lg font-bold leading-8 text-[#2C1F3D]/78">
                {page.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
            <article className="rounded-[2.2rem] bg-[#FDCA55] p-7 shadow-[0_20px_60px_rgba(44,31,61,0.1)] md:p-9">
              <h2 className="display-font text-4xl font-black leading-[1.04] tracking-normal text-[#4F247D]">
                {page.coversHeading}
              </h2>
              <ul className="mt-6 grid gap-3">
                {page.covers.map((item) => (
                  <li className="flex items-center gap-3 text-sm font-black leading-6 text-[#2C1F3D]" key={item}>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-[#2C1F3D]">
                      <Check className="h-4 w-4" strokeWidth={3.2} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[1.65rem] bg-[#5F2D8C] p-6 text-[#F7F0E8] shadow-[0_18px_42px_rgba(44,31,61,0.18)]">
                <p className="w-fit rounded-full bg-[#FDCA55] px-3 py-1.5 text-[0.7rem] font-black uppercase tracking-[0.14em] text-[#4F247D]">
                  Up to £400
                </p>
                <h3 className="mt-4 text-xl font-black leading-7 text-[#FDCA55]">
                  Tied into a contract?
                </h3>
                <p className="mt-3 text-sm font-black leading-6 text-[#F7F0E8]/86">
                  UW can cover up to £400 of early termination fees when you switch services so even if you're tied into a contract, you could still save.
                </p>
              </div>
            </article>
          </div>
          <div className="mx-auto mt-6 max-w-6xl">
            <CampaignScrollButton
              className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-6 py-4 text-base font-black text-[#2C1F3D] shadow-[0_18px_45px_rgba(34,197,94,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#32D86A]"
              targetId="campaign-lead-form"
            >
              {page.ctaLabel}
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
            </CampaignScrollButton>
          </div>
        </section>

        <section className="bg-[#5F2D8C] px-5 py-8 text-[#F7F0E8] md:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="display-font text-4xl font-black leading-[1.04] tracking-normal text-[#FDCA55] md:text-5xl">
              {page.audienceHeading}
            </h2>
            <div className="mt-5 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {page.audience.map((item) => (
                <div
                  className="flex h-full items-center rounded-[1.35rem] bg-[#FDCA55] p-4 text-sm font-black leading-6 text-[#2C1F3D]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-9 md:px-8 md:py-12">
          <div className="mx-auto grid max-w-6xl gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[2.2rem] bg-[#CFE6D5] p-7 text-[#173E29] shadow-[0_20px_60px_rgba(23,62,41,0.12)] md:p-9">
              <h2 className="display-font text-4xl font-black leading-[1.04] tracking-normal md:text-5xl">
                Check now. Save now!
              </h2>
              <p className="mt-5 text-lg font-bold leading-8 text-[#173E29]/80">{page.noPressure}</p>
              <CampaignScrollButton
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-6 py-4 text-base font-black text-[#2C1F3D] shadow-[0_18px_45px_rgba(34,197,94,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#32D86A]"
                targetId="campaign-lead-form"
              >
                {page.ctaLabel}
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
              </CampaignScrollButton>
            </article>
            <article className="rounded-[2.2rem] bg-white p-7 shadow-[0_20px_60px_rgba(44,31,61,0.1)] md:p-9">
              <h2 className="display-font text-4xl font-black leading-[1.04] tracking-normal text-[#4F247D] md:text-5xl">
                How it works
              </h2>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {householdSteps.map((step, index) => (
                  <div className="rounded-[1.35rem] bg-[#F7F0E8] p-5" key={step.title}>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FDCA55] text-sm font-black text-[#4F247D]">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 text-lg font-black leading-6 text-[#2C1F3D]">{step.title}</h3>
                    <p className="mt-2 text-sm font-bold leading-6 text-[#2C1F3D]/72">{step.body}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="bg-[#5F2D8C] px-5 py-9 text-[#F7F0E8] md:px-8 md:py-12">
          <div className="mx-auto grid max-w-6xl gap-7 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
            <div className="rounded-[2.2rem] bg-[#FDCA55] p-7 text-[#2C1F3D] md:p-9">
              <ReceiptText className="h-12 w-12 text-[#5F2D8C]" strokeWidth={2.6} />
              <h2 className="display-font mt-6 text-4xl font-black leading-[1.04] tracking-normal text-[#4F247D] md:text-5xl">
                Ready to check?
              </h2>
              <div className="mt-6 flex items-start gap-4 rounded-[1.5rem] border border-[#22C55E]/45 bg-[#F7F0E8]/86 p-5 shadow-[0_14px_30px_rgba(44,31,61,0.08)]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-[#2C1F3D]">
                  <Check className="h-5 w-5" strokeWidth={3.2} />
                </span>
                <p className="text-xl font-black leading-7 text-[#4F247D] md:text-2xl md:leading-8">
                  We’ll do all we can to help save you money.
                </p>
              </div>
            </div>
            <div id="campaign-lead-form">
              <CampaignLeadForm
                choiceLabel={page.formChoiceLabel}
                choices={page.formChoices}
                contextField={page.contextField}
                defaultCheck={page.defaultCheck}
                intro={page.formIntro}
                sourcePage={page.slug}
                showUpdatesConsent
                submitLabel={page.ctaLabel}
                title={page.formTitle}
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-10 text-center md:px-8 md:py-12">
          <p className="mx-auto max-w-3xl rounded-[1.5rem] bg-white p-5 text-base font-black leading-7 text-[#2C1F3D]/80 shadow-[0_16px_42px_rgba(44,31,61,0.08)] md:text-lg">
            Want to see everything Home Money Check covers?{" "}
            <Link className="font-black text-[#5F2D8C] underline decoration-[#22C55E] decoration-2 underline-offset-4" href="/">
              Visit the full site
            </Link>
            .
          </p>
        </section>
      </main>

      <footer className="bg-[#5F2D8C] px-5 pb-8 pt-9 text-[#F7F0E8]/70 md:px-8">
        <div className="mx-auto max-w-6xl border-t border-white/12 pt-8">
          <div className="grid gap-8 text-sm font-bold lg:grid-cols-[1fr_auto_1fr] lg:items-start">
            <div className="grid gap-4">
              <div className="w-fit" aria-label="Home Money Check">
                <Image
                  alt="Home Money Check"
                  className="h-14 w-auto object-contain md:h-16"
                  height={88}
                  src="/brand/hmc-logo-full-transparent.png"
                  width={248}
                />
              </div>
              <p className="max-w-md text-sm font-bold leading-6 text-[#F7F0E8]/70">
                Home Money Check is run by Neill Connolly. Some services are provided directly, and some may be introduced to suitable providers, professional partners or regulated advice services where required.
              </p>
              <p className="text-[#F7F0E8]/62">© Home Money Check.</p>
            </div>

            <div className="text-left lg:min-w-[31rem] lg:text-center">
              <p className="mx-auto max-w-[34rem] text-sm font-black leading-6 text-[#FDCA55] md:whitespace-nowrap">
                We’d love for you to follow us on our socials.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 lg:justify-center">
                {socialLinks.map((item) => (
                  <a
                    aria-label={`Follow Home Money Check on ${item.label}`}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#F7F0E8] text-[#4F247D] shadow-[0_10px_28px_rgba(44,31,61,0.14)] ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#FDCA55] hover:text-[#173E29]"
                    href={item.href}
                    key={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <SocialIcon label={item.label} />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <nav
                aria-label="Campaign footer links"
                className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-black uppercase tracking-[0.14em] text-[#F7F0E8]/48 lg:justify-end"
              >
                <Link className="transition-colors hover:text-[#F7F0E8]/75" href="/privacy-policy">Privacy Policy</Link>
                <Link className="transition-colors hover:text-[#F7F0E8]/75" href="/terms">Terms</Link>
                <Link className="transition-colors hover:text-[#F7F0E8]/75" href="/disclaimers">Disclaimers</Link>
              </nav>
              <Link
                className="w-fit text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#F7F0E8]/28 transition-colors hover:text-[#F7F0E8]/55"
                href="/admin/login"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StaffBillsCampaignPage({ page }: { page: CampaignPageConfig }) {
  return (
    <div className="min-h-screen bg-[#F7F0E8] text-[#2C1F3D]">
      <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center" aria-label="Home Money Check">
            <Image
              alt="Home Money Check"
              className="h-14 w-auto object-contain md:h-16"
              height={88}
              priority
              src="/brand/hmc-logo-full-transparent.png"
              width={248}
            />
          </div>
          <CampaignScrollButton
            className="hidden items-center gap-2 rounded-full bg-[#22C55E] px-4 py-3 text-sm font-black text-[#2C1F3D] shadow-[0_12px_30px_rgba(34,197,94,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#32D86A] sm:inline-flex"
            targetId="campaign-lead-form"
          >
            {page.ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </CampaignScrollButton>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#5F2D8C] px-5 pb-10 pt-28 text-[#F7F0E8] md:px-8 md:pb-16 md:pt-32">
          <div className="relative mx-auto grid max-w-6xl gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
            <div className="relative z-10">
              <p className="w-fit rounded-full bg-[#FDCA55] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
                {page.eyebrow}
              </p>
              <h1 className="display-font mt-7 max-w-3xl text-5xl font-black leading-[1] tracking-normal text-[#FDCA55] md:text-7xl">
                {page.title}
              </h1>
              <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-[#F7F0E8]/88 md:text-2xl md:leading-9">
                {page.subtitle}
              </p>
              <p className="mt-4 w-fit rounded-[1.2rem] bg-white/10 px-4 py-3 text-sm font-black leading-6 text-[#F7F0E8] ring-1 ring-white/14 md:text-base">
                Speak with an expert. No AI. No call centres. Free for your staff.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CampaignScrollButton
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#22C55E] px-6 py-4 text-base font-black text-[#2C1F3D] shadow-[0_18px_45px_rgba(34,197,94,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#32D86A]"
                  targetId="campaign-lead-form"
                >
                  {page.ctaLabel}
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
                </CampaignScrollButton>
                <p className="w-fit rounded-full bg-[#FDCA55] px-4 py-3 text-sm font-black text-[#4F247D] shadow-[0_14px_32px_rgba(253,202,85,0.2)]">
                  {page.reassurance}
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F7F0E8] p-7 text-[#2C1F3D] shadow-[0_34px_90px_rgba(44,31,61,0.28)] md:p-9">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]/70">
                      Workplace benefit
                    </p>
                    <h2 className="display-font mt-2 text-3xl font-black leading-[1.05] tracking-normal text-[#4F247D] md:text-4xl">
                      Your staff check can include:
                    </h2>
                  </div>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#22C55E] text-[#2C1F3D]">
                    <Users className="h-8 w-8" strokeWidth={3} />
                  </span>
                </div>
                <div className="grid gap-3">
                  {staffCheckItems.map((item) => (
                    <div
                      className="flex items-center justify-between gap-4 rounded-[1.35rem] bg-white px-5 py-4 shadow-[0_14px_32px_rgba(44,31,61,0.08)]"
                      key={item}
                    >
                      <span className="text-base font-black text-[#2C1F3D]">{item}</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E] text-[#2C1F3D]">
                        <Check className="h-5 w-5" strokeWidth={3.4} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 rounded-[1.7rem] bg-[#FDCA55] p-5 text-[#2C1F3D] shadow-[0_20px_50px_rgba(44,31,61,0.18)]">
                <p className="text-lg font-black leading-6 text-[#4F247D]">
                  A simple benefit your staff can actually use
                </p>
                <p className="mt-2 text-base font-black leading-7">
                  Household bills affect almost everyone. This gives your team a practical way to check what they pay, ask questions, and see whether there is a better deal available.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-9 md:px-8 md:py-12">
          <div className="mx-auto grid max-w-6xl gap-5 xl:grid-cols-[1.08fr_0.92fr]">
            <article className="rounded-[2.2rem] bg-white p-7 shadow-[0_20px_60px_rgba(44,31,61,0.1)] md:p-9">
              <h2 className="display-font text-4xl font-black leading-[1.04] tracking-normal text-[#4F247D] md:text-5xl">
                Help your staff with the bills they already pay
              </h2>
              <div className="mt-6 grid gap-4 text-lg font-bold leading-8 text-[#2C1F3D]/78">
                <p>
                  Most people have household bills that could be checked. Gas, electricity, broadband and mobile costs can change quickly, and many people stay on deals that no longer suit them.
                </p>
                <p>
                  Home Money Check gives your staff a simple way to check their options, ask questions and see if we can help them save money.
                </p>
                <p>If we can help, great. If we can’t, we’ll tell them straight.</p>
              </div>
            </article>
            <article className="rounded-[2.2rem] bg-[#FDCA55] p-7 shadow-[0_20px_60px_rgba(44,31,61,0.1)] md:p-9">
              <h2 className="display-font text-4xl font-black leading-[1.04] tracking-normal text-[#4F247D]">
                What we can check
              </h2>
              <ul className="mt-6 grid gap-3">
                {staffBillItems.map((item) => (
                  <li className="flex items-center gap-3 text-sm font-black leading-6 text-[#2C1F3D]" key={item}>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-[#2C1F3D]">
                      <Check className="h-4 w-4" strokeWidth={3.2} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[1.65rem] bg-[#5F2D8C] p-6 text-[#F7F0E8] shadow-[0_18px_42px_rgba(44,31,61,0.18)]">
                <p className="w-fit rounded-full bg-[#FDCA55] px-3 py-1.5 text-[0.7rem] font-black uppercase tracking-[0.14em] text-[#4F247D]">
                  Up to £400
                </p>
                <h3 className="mt-4 text-xl font-black leading-7 text-[#FDCA55]">
                  Tied into a contract?
                </h3>
                <p className="mt-3 text-sm font-black leading-6 text-[#F7F0E8]/86">
                  UW can cover up to £400 of early termination fees when you switch services so even if you're tied into a contract, you could still save.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-[#5F2D8C] px-5 py-9 text-[#F7F0E8] md:px-8 md:py-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="display-font text-4xl font-black leading-[1.04] tracking-normal text-[#FDCA55] md:text-5xl">
              Why staff value it
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {staffValueCards.map((card) => (
                <article className="rounded-[1.6rem] bg-[#FDCA55] p-5 text-[#2C1F3D]" key={card.title}>
                  <h3 className="text-xl font-black leading-7 text-[#4F247D]">{card.title}</h3>
                  <p className="mt-3 text-sm font-bold leading-6 text-[#2C1F3D]/78">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-9 md:px-8 md:py-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="display-font text-4xl font-black leading-[1.04] tracking-normal text-[#4F247D] md:text-5xl">
              Why it works for your workplace
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {workplaceCards.map((card) => (
                <article className="rounded-[1.6rem] bg-white p-5 shadow-[0_16px_45px_rgba(44,31,61,0.08)]" key={card.title}>
                  <h3 className="text-xl font-black leading-7 text-[#4F247D]">{card.title}</h3>
                  <p className="mt-3 text-sm font-bold leading-6 text-[#2C1F3D]/72">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#CFE6D5] px-5 py-9 text-[#173E29] md:px-8 md:py-12">
          <div className="mx-auto grid max-w-6xl gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[2.2rem] bg-[#5F2D8C] p-7 text-[#F7F0E8] shadow-[0_20px_60px_rgba(44,31,61,0.16)] md:p-9">
              <h2 className="display-font text-4xl font-black leading-[1.04] tracking-normal text-[#FDCA55] md:text-5xl">
                Want to offer this to your staff?
              </h2>
              <p className="mt-5 text-lg font-bold leading-8 text-[#F7F0E8]/82">
                Tell us a little about your workplace and we’ll get in touch to discuss how a staff bills check could work.
              </p>
              <CampaignScrollButton
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-6 py-4 text-base font-black text-[#2C1F3D] shadow-[0_18px_45px_rgba(34,197,94,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#32D86A]"
                targetId="campaign-lead-form"
              >
                {page.ctaLabel}
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
              </CampaignScrollButton>
            </article>
            <article className="rounded-[2.2rem] bg-white p-7 shadow-[0_20px_60px_rgba(44,31,61,0.1)] md:p-9">
              <h2 className="display-font text-4xl font-black leading-[1.04] tracking-normal text-[#4F247D] md:text-5xl">
                How the staff check works
              </h2>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {staffSteps.map((step, index) => (
                  <div className="rounded-[1.35rem] bg-[#F7F0E8] p-5" key={step.title}>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FDCA55] text-sm font-black text-[#4F247D]">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 text-lg font-black leading-6 text-[#2C1F3D]">{step.title}</h3>
                    <p className="mt-2 text-sm font-bold leading-6 text-[#2C1F3D]/72">{step.body}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="bg-[#5F2D8C] px-5 py-9 text-[#F7F0E8] md:px-8 md:py-12">
          <div className="mx-auto grid max-w-6xl gap-7 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
            <div className="rounded-[2.2rem] bg-[#FDCA55] p-7 text-[#2C1F3D] md:p-9">
              <ReceiptText className="h-12 w-12 text-[#5F2D8C]" strokeWidth={2.6} />
              <h2 className="display-font mt-6 text-4xl font-black leading-[1.04] tracking-normal text-[#4F247D] md:text-5xl">
                Ready to offer this?
              </h2>
              <p className="mt-5 text-xl font-black leading-8 text-[#4F247D]">
                We’ll explain how this could work for your workplace.
              </p>
            </div>
            <div id="campaign-lead-form">
              <CampaignLeadForm
                contextField={page.contextField}
                defaultCheck={page.defaultCheck}
                intro={page.formIntro}
                sourcePage={page.slug}
                showUpdatesConsent
                submitLabel={page.ctaLabel}
                title={page.formTitle}
                workplaceMode
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-10 text-center md:px-8 md:py-12">
          <p className="mx-auto max-w-3xl rounded-[1.5rem] bg-white p-5 text-base font-black leading-7 text-[#2C1F3D]/80 shadow-[0_16px_42px_rgba(44,31,61,0.08)] md:text-lg">
            Want to see everything Home Money Check covers?{" "}
            <Link className="font-black text-[#5F2D8C] underline decoration-[#22C55E] decoration-2 underline-offset-4" href="/">
              Visit the full site
            </Link>
            .
          </p>
        </section>
      </main>

      <footer className="bg-[#5F2D8C] px-5 pb-8 pt-9 text-[#F7F0E8]/70 md:px-8">
        <div className="mx-auto max-w-6xl border-t border-white/12 pt-8">
          <div className="grid gap-8 text-sm font-bold lg:grid-cols-[1fr_auto_1fr] lg:items-start">
            <div className="grid gap-4">
              <div className="w-fit" aria-label="Home Money Check">
                <Image
                  alt="Home Money Check"
                  className="h-14 w-auto object-contain md:h-16"
                  height={88}
                  src="/brand/hmc-logo-full-transparent.png"
                  width={248}
                />
              </div>
              <p className="max-w-md text-sm font-bold leading-6 text-[#F7F0E8]/70">
                Home Money Check is run by Neill Connolly. Some services are provided directly, and some may be introduced to suitable providers, professional partners or regulated advice services where required. Where mortgage, protection or estate planning advice is required, this will be handled through the appropriate advice process and not through this page.
              </p>
              <p className="text-[#F7F0E8]/62">© Home Money Check.</p>
            </div>

            <div className="text-left lg:min-w-[31rem] lg:text-center">
              <p className="mx-auto max-w-[34rem] text-sm font-black leading-6 text-[#FDCA55] md:whitespace-nowrap">
                We’d love for you to follow us on our socials.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 lg:justify-center">
                {socialLinks.map((item) => (
                  <a
                    aria-label={`Follow Home Money Check on ${item.label}`}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#F7F0E8] text-[#4F247D] shadow-[0_10px_28px_rgba(44,31,61,0.14)] ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#FDCA55] hover:text-[#173E29]"
                    href={item.href}
                    key={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <SocialIcon label={item.label} />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <nav
                aria-label="Campaign footer links"
                className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-black uppercase tracking-[0.14em] text-[#F7F0E8]/48 lg:justify-end"
              >
                <Link className="transition-colors hover:text-[#F7F0E8]/75" href="/privacy-policy">Privacy Policy</Link>
                <Link className="transition-colors hover:text-[#F7F0E8]/75" href="/terms">Terms</Link>
                <Link className="transition-colors hover:text-[#F7F0E8]/75" href="/disclaimers">Disclaimers</Link>
              </nav>
              <Link
                className="w-fit text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#F7F0E8]/28 transition-colors hover:text-[#F7F0E8]/55"
                href="/admin/login"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function CampaignLandingPage({ page }: { page: CampaignPageConfig }) {
  if (page.slug === "staff-bills-check") {
    return <StaffBillsCampaignPage page={page} />;
  }

  if (
    page.slug === "household-bills-check" ||
    page.slug === "perthshire-bills-check" ||
    page.slug === "dundee-bills-check"
  ) {
    return <HouseholdBillsCampaignPage page={page} />;
  }

  return (
    <div className="min-h-screen bg-[#F7F0E8] text-[#2C1F3D]">
      <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center" aria-label="Home Money Check">
            <Image
              alt="Home Money Check"
              className="h-12 w-auto object-contain md:h-14"
              height={88}
              priority
              src="/brand/hmc-logo-full-transparent.png"
              width={248}
            />
          </div>
          <a
            className="hidden items-center gap-2 rounded-full bg-[#22C55E] px-4 py-3 text-sm font-black text-[#2C1F3D] shadow-[0_12px_30px_rgba(34,197,94,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#32D86A] sm:inline-flex"
            href="#campaign-lead-form"
          >
            {page.ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#5F2D8C] px-5 pb-14 pt-28 text-[#F7F0E8] md:px-8 md:pb-20 md:pt-32">
          <div className="absolute left-[6%] top-28 h-24 w-24 rotate-12 rounded-[2rem] bg-[#B7DDF2]/55" />
          <div className="absolute bottom-14 right-[8%] h-36 w-36 rounded-full bg-[#FDCA55]/55" />
          <div className="absolute right-[34%] top-16 h-20 w-20 rounded-[1.5rem] bg-[#CFE6D5]/55" />
          <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[26rem] overflow-hidden rounded-[2.7rem] bg-[#F7F0E8] p-7 text-[#2C1F3D] shadow-[0_34px_90px_rgba(44,31,61,0.28)] md:min-h-[32rem] md:p-9">
              <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[#EADFFD]" />
              <div className="absolute -bottom-10 left-12 h-28 w-28 rotate-[11deg] rounded-[2rem] bg-[#FDCA55]" />
              <div className="absolute bottom-16 right-10 h-24 w-24 rounded-full bg-[#CFE6D5]" />

              <div className="relative z-10">
                <div className="inline-flex rounded-[2rem] bg-[#5F2D8C] p-5 shadow-[0_22px_54px_rgba(44,31,61,0.18)]">
                  <Image
                    alt="Home Money Check"
                    className="h-28 w-auto object-contain md:h-36"
                    height={190}
                    priority
                    src="/brand/hmc-logo-full-transparent.png"
                    width={410}
                  />
                </div>

                <div className="mt-10 max-w-[18rem] rounded-[1.7rem] bg-white p-5 shadow-[0_18px_44px_rgba(44,31,61,0.12)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22C55E] text-[#2C1F3D]">
                      <Check className="h-7 w-7" strokeWidth={3.2} />
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
                        Bills check
                      </p>
                      <p className="mt-1 text-lg font-black leading-6">
                        One enquiry. Clear next step.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {brandCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    className={`absolute z-10 flex items-center gap-2 rounded-[1.2rem] px-4 py-3 text-sm font-black text-[#2C1F3D] shadow-[0_16px_36px_rgba(44,31,61,0.16)] ${card.className}`}
                    key={card.label}
                  >
                    <Icon className="h-4 w-4" strokeWidth={3} />
                    {card.label}
                  </div>
                );
              })}

              <div className="absolute bottom-24 right-20 hidden rotate-[-8deg] items-center gap-2 rounded-full bg-[#FDCA55] px-5 py-3 text-sm font-black text-[#4F247D] shadow-[0_16px_36px_rgba(44,31,61,0.14)] md:flex">
                <Tag className="h-4 w-4" strokeWidth={3} />
                Current offers
              </div>
            </div>

            <div className="relative z-10">
              <p className="w-fit rounded-full bg-[#FDCA55] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
                {page.eyebrow}
              </p>
              <h1 className="display-font mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.018em] text-[#FDCA55] md:text-7xl">
                {page.title}
              </h1>
              <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-[#F7F0E8]/86 md:text-2xl md:leading-9">
                {page.subtitle}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#22C55E] px-6 py-4 text-base font-black text-[#2C1F3D] shadow-[0_18px_45px_rgba(34,197,94,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#32D86A]"
                  href="#campaign-lead-form"
                >
                  {page.ctaLabel}
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
                </a>
                <p className="rounded-full bg-white/10 px-4 py-3 text-sm font-black text-[#F7F0E8] ring-1 ring-white/14">
                  {page.reassurance}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="relative overflow-hidden rounded-[2.5rem] bg-white p-7 shadow-[0_20px_60px_rgba(44,31,61,0.1)] md:p-10">
              <div className="absolute -right-10 top-12 h-24 w-24 rotate-12 rounded-[1.7rem] bg-[#FDCA55]/55" />
              <p className="relative w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
                Start here
              </p>
              <h2 className="display-font relative mt-6 text-4xl font-black leading-[1.02] tracking-[-0.015em] text-[#4F247D] md:text-5xl">
                Your bills are worth checking
              </h2>
              <div className="relative mt-6 grid gap-5 text-lg font-bold leading-8 text-[#2C1F3D]/78">
                {page.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[2.5rem] bg-[#FDCA55] p-7 shadow-[0_20px_60px_rgba(44,31,61,0.1)] md:p-10">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/35" />
              <div className="absolute bottom-7 right-8 hidden rotate-[-9deg] rounded-full bg-[#22C55E] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#173E29] md:block">
                Check list
              </div>
              <h2 className="display-font relative text-4xl font-black leading-[1.02] tracking-[-0.015em] text-[#4F247D]">
                {page.coversHeading}
              </h2>
              <ul className="relative mt-7 grid gap-3">
                {page.covers.map((item) => (
                  <li className="flex items-start gap-3 text-sm font-black leading-6 text-[#2C1F3D]" key={item}>
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5F2D8C] text-[#FDCA55]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="bg-[#5F2D8C] px-5 py-12 text-[#F7F0E8] md:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">
            <p className="w-fit rounded-full bg-[#CFE6D5] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#173E29]">
              Who this helps
            </p>
            <h2 className="display-font mt-6 max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.015em] text-[#FDCA55] md:text-5xl">
              {page.audienceHeading}
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {page.audience.map((item) => (
                <div
                  className="rounded-[1.5rem] bg-[#FDCA55] p-5 text-sm font-black leading-6 text-[#2C1F3D] shadow-[0_14px_36px_rgba(44,31,61,0.14)]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {page.sections?.length ? (
          <section className="px-5 py-12 md:px-8 md:py-16">
            <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
              {page.sections.map((section) => (
                <article className="rounded-[2.25rem] bg-white p-7 shadow-[0_18px_52px_rgba(44,31,61,0.08)] md:p-8" key={section.heading}>
                  <h2 className="display-font text-3xl font-black leading-[1.04] tracking-[-0.01em] text-[#5F2D8C]">
                    {section.heading}
                  </h2>
                  {section.body ? (
                    <div className="mt-5 grid gap-4 text-base font-bold leading-7 text-[#2C1F3D]/74">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                  {section.items ? (
                    <ul className="mt-5 grid gap-3">
                      {section.items.map((item) => (
                        <li className="flex gap-3 text-sm font-black leading-6 text-[#2C1F3D]/78" key={item}>
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#22C55E]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <article className="relative overflow-hidden rounded-[2.5rem] bg-[#CFE6D5] p-8 text-[#173E29] shadow-[0_20px_60px_rgba(23,62,41,0.12)] md:p-11">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#FDCA55]/70" />
              <div className="absolute bottom-8 right-10 hidden h-20 w-20 rotate-12 rounded-[1.5rem] bg-[#B7DDF2]/80 md:block" />
              <p className="relative w-fit rounded-full bg-[#F7F0E8] px-4 py-2 text-xs font-black uppercase tracking-[0.14em]">
                You stay in control
              </p>
              <h2 className="display-font relative mt-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.015em] md:text-5xl">
                Check first. Decide after.
              </h2>
              <p className="relative mt-6 max-w-3xl text-lg font-bold leading-8 text-[#173E29]/80">{page.noPressure}</p>
            </article>

            <article className="rounded-[2.5rem] bg-white p-7 shadow-[0_20px_60px_rgba(44,31,61,0.1)] md:p-10">
              <p className="w-fit rounded-full bg-[#FDCA55] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
                How it works
              </p>
              <h2 className="display-font mt-6 text-4xl font-black leading-[1.02] tracking-[-0.015em] text-[#4F247D] md:text-5xl">
                Three simple steps
              </h2>
              <div className="mt-8 grid gap-3">
                {howItWorks.map((step, index) => (
                  <div className="grid gap-3 rounded-[1.4rem] bg-[#F7F0E8] p-5 sm:grid-cols-[auto_1fr] sm:items-start" key={step.title}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDCA55] text-sm font-black text-[#4F247D]">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-black leading-6 text-[#2C1F3D]">{step.title}</h3>
                      <p className="mt-1 text-sm font-bold leading-6 text-[#2C1F3D]/72">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="bg-[#5F2D8C] px-5 py-12 text-[#F7F0E8] md:px-8 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FDCA55] p-7 text-[#2C1F3D] md:p-9">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/40" />
              <ReceiptText className="relative h-12 w-12 text-[#5F2D8C]" strokeWidth={2.6} />
              <h2 className="display-font relative mt-7 text-4xl font-black leading-[1.02] tracking-[-0.015em] text-[#4F247D] md:text-5xl">
                Ready to check?
              </h2>
              <p className="relative mt-5 text-base font-bold leading-7 text-[#2C1F3D]/76">
                Send the details once and we'll come back to you with the next step.
              </p>
            </div>
            <div id="campaign-lead-form">
              <CampaignLeadForm
                choiceLabel={page.formChoiceLabel}
                choices={page.formChoices}
                contextField={page.contextField}
                defaultCheck={page.defaultCheck}
                intro={page.formIntro}
                sourcePage={page.slug}
                submitLabel={page.ctaLabel}
                title={page.formTitle}
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-10 text-center md:px-8 md:py-12">
          <p className="text-sm font-bold leading-6 text-[#2C1F3D]/72">
            Want to see everything Home Money Check covers?{" "}
            <Link className="font-black text-[#5F2D8C] underline decoration-[#22C55E] decoration-2 underline-offset-4" href="/">
              Visit the full site
            </Link>
            .
          </p>
        </section>
      </main>

      <footer className="bg-[#5F2D8C] px-5 py-7 text-[#F7F0E8]/62 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs font-black uppercase tracking-[0.12em] sm:flex-row sm:items-center sm:justify-between">
          <span>© Home Money Check</span>
          <nav aria-label="Campaign landing page footer" className="flex flex-wrap gap-x-4 gap-y-2">
            <Link className="transition-colors hover:text-[#F7F0E8]" href="/privacy-policy">Privacy Policy</Link>
            <Link className="transition-colors hover:text-[#F7F0E8]" href="/terms">Terms</Link>
            <Link className="transition-colors hover:text-[#F7F0E8]" href="/disclaimers">Disclaimers</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <svg aria-hidden="true" className="block h-7 w-7" fill="none" viewBox="0 0 24 24">
        <path
          d="M14.45 8.42V6.67c0-.74.49-.91.85-.91h2.19V2.1h-3.03c-3.35 0-4.11 2.51-4.11 4.12v2.2H7.7v3.74h2.65V22h4.1v-9.84h2.91l.47-3.74h-3.38Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg aria-hidden="true" className="block h-7 w-7" fill="none" viewBox="0 0 24 24">
        <rect
          height="16.4"
          rx="4.9"
          stroke="currentColor"
          strokeWidth="2.2"
          width="16.4"
          x="3.8"
          y="3.8"
        />
        <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="17" cy="7" fill="currentColor" r="1.2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="block h-7 w-7" fill="none" viewBox="0 0 24 24">
      <path
        d="M15.75 2.35c.22 1.82 1.24 3.42 2.77 4.39.62.39 1.31.68 2.08.86v3.82a9.38 9.38 0 0 1-4.63-1.23v5.33c0 3.65-2.92 6.55-6.57 6.55a6.29 6.29 0 0 1-3.67-1.17 6.44 6.44 0 0 1-2.48-5.07c0-3.61 2.9-6.51 6.51-6.51.37 0 .72.03 1.08.1v3.95a2.69 2.69 0 0 0-1.08-.22 2.66 2.66 0 0 0-2.68 2.68 2.7 2.7 0 0 0 2.74 2.7 2.69 2.69 0 0 0 2.68-2.69V2.35h3.25Z"
        fill="currentColor"
      />
    </svg>
  );
}
