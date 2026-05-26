import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Gift,
  Home,
  Landmark,
  ShieldCheck,
  FileText,
  Sparkles,
  Wifi,
  Zap,
  Smartphone,
  UsersRound,
  HeartPulse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DesktopNavigation, MobileNavigation } from "@/components/SiteNavigation";
import { LeadFormPreview } from "@/components/LeadFormPreview";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatHappensNext } from "@/components/WhatHappensNext";
import { getHomepageContent } from "@/lib/homepageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Home Money Check | Check deals for your home, money and future",
  description:
    "Check household bills, planning, protection and selected business services in one place. Tell us what you want checked and we’ll help you take the next step.",
  openGraph: {
    title: "Home Money Check | Check deals for your home, money and future",
    description:
      "Check household bills, planning, protection and selected business services in one place. Tell us what you want checked and we’ll help you take the next step.",
    type: "website",
  },
};

type HeroTileItem = {
  title: string;
  note: string;
  href: string;
  icon: LucideIcon;
  bg: string;
  colour: string;
  mobileClass: string;
  className: string;
  big?: boolean;
};

type RouteGroupItem = {
  label: string;
  bg: string;
  colour: string;
  items: {
    label: string;
    href: string;
  }[];
};

const heroTiles: HeroTileItem[] = [
  {
    title: "Household Bills",
    note: "Your main home services check",
    href: "/energy",
    icon: Home,
    bg: "#F7F0E8",
    colour: "#622C91",
    mobileClass: "rotate-[-1.25deg]",
    className:
      "lg:absolute lg:left-[5%] lg:top-[17%] lg:h-[255px] lg:w-[310px] lg:rotate-[-2deg]",
    big: true,
  },
  {
    title: "Energy",
    note: "Gas and electricity",
    href: "/energy",
    icon: Zap,
    bg: "#F4CF7A",
    colour: "#6B4611",
    mobileClass: "mt-4 rotate-[1.75deg]",
    className:
      "lg:absolute lg:left-[42%] lg:top-[4%] lg:mt-0 lg:h-[178px] lg:w-[215px] lg:rotate-[4deg]",
  },
  {
    title: "Broadband",
    note: "Home internet",
    href: "/broadband",
    icon: Wifi,
    bg: "#BFE3FF",
    colour: "#245984",
    mobileClass: "mt-1 rotate-[-0.75deg]",
    className:
      "lg:absolute lg:right-[7%] lg:top-[12%] lg:mt-0 lg:h-[174px] lg:w-[226px] lg:rotate-[-1deg]",
  },
  {
    title: "Mobile SIMs",
    note: "Mobile SIM deals",
    href: "/mobile",
    icon: Smartphone,
    bg: "#F4D9DE",
    colour: "#7C3845",
    mobileClass: "mt-5 rotate-[-1.75deg]",
    className:
      "lg:absolute lg:left-[38%] lg:top-[31%] lg:mt-0 lg:h-[174px] lg:w-[210px] lg:rotate-[-3deg]",
  },
  {
    title: "Prize draw",
    note: "£20K Giveaway",
    href: "/20k-giveaway",
    icon: Gift,
    bg: "#EADFFD",
    colour: "#5F2D8C",
    mobileClass: "mt-2 rotate-[1.25deg]",
    className:
      "lg:absolute lg:right-[2%] lg:top-[37%] lg:mt-0 lg:h-[184px] lg:w-[232px] lg:rotate-[3deg]",
  },
  {
    title: "Mortgage",
    note: "Buying or remortgage",
    href: "/mortgage",
    icon: Landmark,
    bg: "#D8EEFF",
    colour: "#245984",
    mobileClass: "mt-4 rotate-[0.75deg]",
    className:
      "lg:absolute lg:left-[7%] lg:bottom-[17%] lg:mt-0 lg:h-[170px] lg:w-[228px] lg:rotate-[1deg]",
  },
  {
    title: "Protection",
    note: "Life and family cover",
    href: "/protection",
    icon: ShieldCheck,
    bg: "#F5D28A",
    colour: "#6B4611",
    mobileClass: "mt-1 rotate-[-1.25deg]",
    className:
      "lg:absolute lg:left-[26%] lg:bottom-[31%] lg:mt-0 lg:h-[160px] lg:w-[228px] lg:rotate-[3deg]",
  },
  {
    title: "Medical",
    note: "Private medical cover",
    href: "/private-medical-insurance",
    icon: HeartPulse,
    bg: "#BFD9C8",
    colour: "#173E29",
    mobileClass: "mt-5 rotate-[1.75deg]",
    className:
      "lg:absolute lg:right-[19%] lg:bottom-[20%] lg:mt-0 lg:h-[176px] lg:w-[216px] lg:rotate-[2deg]",
  },
  {
    title: "Wills and POAs",
    note: "Wills and POAs",
    href: "/estate-planning",
    icon: FileText,
    bg: "#F7D5C8",
    colour: "#5F2D8C",
    mobileClass: "mt-2 rotate-[-0.75deg]",
    className:
      "lg:absolute lg:left-[21%] lg:bottom-[0%] lg:mt-0 lg:h-[182px] lg:w-[260px] lg:rotate-[3deg]",
  },
  {
    title: "Partner with us",
    note: "Make extra money",
    href: "/partner-with-us",
    icon: UsersRound,
    bg: "#D9C2F4",
    colour: "#4F247D",
    mobileClass: "mt-4 rotate-[-1.25deg]",
    className:
      "lg:absolute lg:right-[2%] lg:bottom-[2%] lg:mt-0 lg:h-[178px] lg:w-[236px] lg:rotate-[-2deg]",
  },
];

const routeGroups: RouteGroupItem[] = [
  {
    label: "Household bill checks",
    bg: "#F7F0E8",
    colour: "#622C91",
    items: [
      { label: "Energy", href: "/energy" },
      { label: "Broadband", href: "/broadband" },
      { label: "Mobile SIM deals", href: "/mobile" },
      { label: "£20K Giveaway", href: "/20k-giveaway" },
    ],
  },
  {
    label: "Mortgage, insurance & planning",
    bg: "#EADFFD",
    colour: "#5F2D8C",
    items: [
      { label: "Mortgages", href: "/mortgage" },
      { label: "Protection", href: "/protection" },
      { label: "Private medical insurance", href: "/private-medical-insurance" },
      { label: "Wills and POAs", href: "/estate-planning" },
    ],
  },
  {
    label: "Business & income checks",
    bg: "#D9E1E8",
    colour: "#263646",
    items: [
      { label: "Partner with us", href: "/partner-with-us" },
      { label: "Business utilities", href: "/business-utilities" },
      { label: "Finance/bookkeeping", href: "/finance-services" },
      { label: "Business protection", href: "/business-protection" },
      { label: "Business continuity", href: "/business-continuity" },
    ],
  },
];

const fallbackUpdates = [
  { label: "Featured", text: "£20K Giveaway", tone: "#EADFFD" },
  { label: "Home", text: "Household bills worth checking", tone: "#F7F0E8" },
  { label: "Business", text: "Business utilities", tone: "#D9E1E8" },
];

// Admin editable later: campaign visibility on/off, pill label, title,
// middle/central content area, lower box text, and an optional button/link.
const fallbackCampaign = {
  isVisible: true,
  label: "Current campaign",
  title: "£20K Giveaway",
  titleAccent: "£20K",
  titleMain: "Giveaway",
  // Admin field later: central campaign content area.
  body:
    "A premium campaign panel that can be changed or hidden when the featured push changes.",
  // Admin field later: middle/central campaign content area.
  middleContent:
    "A premium campaign panel that can be changed or hidden when the featured push changes.",
  // Admin field later: lower pill/box text.
  lowerBoxText:
    "A premium campaign panel that can be changed or hidden when the featured push changes.",
};

const enquiryOptions = [
  "Household bills",
  "Energy",
  "Broadband",
  "Mobile SIM deals",
  "£20K Giveaway",
  "Mortgages",
  "First-time buyers",
  "Remortgages",
  "Moving home",
  "Protection",
  "Private medical insurance",
  "Wills and POAs",
  "Partner with us",
  "Business utilities",
  "Finance/bookkeeping",
  "Business protection",
  "Business continuity",
];

function BrandMark({ priority = false }: { priority?: boolean }) {
  return (
    <div className="flex items-center">
      <Image
        alt="Home Money Check"
        className="h-14 w-auto object-contain md:h-16"
        height={88}
        priority={priority}
        sizes="(min-width: 768px) 248px, 216px"
        src="/brand/hmc-logo-full-transparent.png"
        width={248}
      />
    </div>
  );
}

function HeroTile({ item }: { item: HeroTileItem }) {
  const Icon = item.icon;
  const titleSize = item.big
    ? "text-4xl md:text-[2.7rem]"
    : item.title.length > 11
      ? "text-[1.55rem]"
      : "text-2xl";

  return (
    <Link
      aria-label={`Open ${item.title} check`}
      className={`group relative block h-[185px] min-w-[230px] snap-start transform-gpu cursor-pointer overflow-hidden rounded-[2rem] p-5 no-underline shadow-[0_22px_60px_rgba(44,31,61,0.24)] ring-1 ring-white/40 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-3 hover:rotate-0 hover:scale-[1.025] hover:shadow-[0_34px_86px_rgba(44,31,61,0.31)] focus-visible:z-20 focus-visible:ring-4 focus-visible:ring-[#FDCA55] md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)] ${item.big ? "h-[220px] min-w-[285px]" : ""} ${item.mobileClass} lg:min-w-0 ${item.className}`}
      href={item.href}
      style={{ backgroundColor: item.bg, color: item.colour }}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/38 transition-all duration-300 ease-out group-hover:scale-110 md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]" />
      <div className="absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-white/22 transition-all duration-300 ease-out group-hover:scale-110 md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]" />
      <div className="relative flex h-full flex-col justify-between gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:bg-white/80 md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]">
            <Icon className="h-6 w-6" strokeWidth={2.45} />
          </div>
          <ArrowUpRight
            className="h-5 w-5 opacity-45 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-85 md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]"
            strokeWidth={2.6}
          />
        </div>
        <div>
          <h3 className={`display-font ${titleSize} font-black leading-[0.96] tracking-[-0.055em]`}>
            {item.title}
          </h3>
          <p className={`${item.big ? "mt-3 text-base" : "mt-2 text-sm"} max-w-[16rem] font-extrabold leading-5 opacity-72`}>
            {item.note}
          </p>
        </div>
      </div>
    </Link>
  );
}

function RouteGroup({ group }: { group: RouteGroupItem }) {
  return (
    <div
      className="group relative transform-gpu overflow-hidden rounded-[2rem] p-5 shadow-[0_18px_55px_rgba(44,31,61,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_72px_rgba(44,31,61,0.16)] md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ backgroundColor: group.bg, color: group.colour }}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/35" />
      <div className="relative">
        <p className="display-font mb-4 text-lg font-black leading-5 tracking-[-0.035em] opacity-85">
          {group.label}
        </p>
        <div className="grid gap-2">
          {group.items.map((item) => (
            <Link
              key={item.href}
              className="inline-flex min-h-12 w-full transform-gpu items-center justify-between gap-3 rounded-[1.15rem] bg-white/62 px-4 py-3 text-sm font-black leading-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/85 hover:shadow-[0_10px_24px_rgba(44,31,61,0.10)] md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]"
              href={item.href}
            >
              <span className="min-w-0">{item.label}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.7} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function CampaignTitle({
  title,
  titleAccent,
  titleMain,
}: {
  title: string;
  titleAccent?: string | null;
  titleMain?: string | null;
}) {
  const [first, ...rest] = title.split(" ");
  const accent = titleAccent || first;
  const main = titleMain || (rest.length > 0 ? rest.join(" ") : "");

  return (
    <>
      <span className="text-[#F4CF7A]">{accent}</span>{" "}
      {main}
    </>
  );
}

export default async function HomeMoneyCheckHomepage() {
  const homepageContent = await getHomepageContent();
  const featuredCampaign =
    homepageContent.campaignError
      ? fallbackCampaign
      : homepageContent.campaign
        ? {
            isVisible: homepageContent.campaign.is_live,
            label: homepageContent.campaign.label || fallbackCampaign.label,
            middleContent:
              homepageContent.campaign.middle_content ||
              fallbackCampaign.middleContent,
            lowerBoxText: homepageContent.campaign.lower_text || fallbackCampaign.lowerBoxText,
            title: homepageContent.campaign.title || fallbackCampaign.title,
            titleAccent: homepageContent.campaign.title_accent,
            titleMain: homepageContent.campaign.title_main,
          }
        : null;
  const updates =
    homepageContent.noticeboardError || homepageContent.noticeboardItems === undefined
      ? fallbackUpdates
      : homepageContent.noticeboardItems.map((item) => ({
          label: item.label || item.category || "Update",
          text: item.title || item.body || "Worth checking",
          tone: item.accent_colour || "#EADFFD",
        }));

  return (
    <div
      className="min-h-screen max-w-full overflow-x-hidden bg-[#6A35A0] text-[#F7F0E8]"
      style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="pointer-events-none fixed inset-0 hidden overflow-hidden md:block">
        <div className="absolute -left-28 top-12 h-96 w-96 rounded-full bg-[#8E52C4]/20" />
        <div className="absolute right-0 top-64 h-[30rem] w-[30rem] rounded-full bg-[#4F247D]/24" />
        <div className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-[#F4CF7A]/14" />
        <div className="absolute -bottom-24 right-1/4 h-64 w-64 rotate-[18deg] rounded-[4rem] bg-[#EADFFD]/12" />
      </div>

      <header className="relative z-20 px-4 pt-5 md:px-7">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.75rem] border border-white/12 bg-white/10 px-4 py-3 shadow-[0_18px_70px_rgba(44,31,61,0.22)] backdrop-blur-xl md:px-5">
          <BrandMark priority />
          <DesktopNavigation />
          <div className="flex items-center gap-2">
            <a
              className="hidden transform-gpu rounded-full bg-[#22C55E] px-5 py-3 text-sm font-black text-[#2C1F3D] shadow-[0_12px_32px_rgba(34,197,94,0.24)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#32D86A] hover:shadow-[0_18px_42px_rgba(34,197,94,0.28)] md:block"
              href="#lead-form"
            >
              Start my check
            </a>
            <MobileNavigation />
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-full overflow-x-hidden">
        <section className="relative mx-auto grid max-w-7xl gap-6 overflow-hidden px-5 pb-12 pt-12 md:px-8 md:pb-16 md:pt-16 lg:min-h-[820px] lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:overflow-visible">
          <div className="pointer-events-none absolute left-[2%] top-[18%] hidden h-24 w-24 rounded-full bg-[#BFE3FF]/42 md:block" />
          <div className="pointer-events-none absolute right-[9%] top-[8%] hidden h-32 w-32 rounded-bl-[6rem] bg-[#F4CF7A]/38 lg:block" />
          <div className="pointer-events-none absolute bottom-[12%] left-[32%] hidden h-20 w-20 rotate-[12deg] rounded-[1.5rem] bg-[#CFE6D5]/34 lg:block" />
          <div className="pointer-events-none absolute bottom-[24%] right-[1%] hidden h-28 w-28 rounded-full bg-[#F7F0E8]/16 lg:block" />
          <div className="pointer-events-none absolute left-[45%] top-[8%] hidden h-14 w-14 rotate-[-10deg] rounded-[1.1rem] bg-[#F4D9DE]/35 lg:block" />
          <div className="relative z-10 min-w-0 max-w-full">
            <div className="mb-7 inline-flex max-w-full items-start gap-3 rounded-full bg-[#F7F0E8] px-5 py-3 text-sm font-black text-[#5F2D8C] shadow-[0_14px_45px_rgba(44,31,61,0.22)] sm:items-center">
              <Sparkles className="h-4 w-4 shrink-0 text-[#D89B2B]" strokeWidth={2.7} />
              <span className="min-w-0">Getting better deals for you and your home</span>
            </div>

            <h1 className="max-w-4xl">
              <span className="display-font block text-[4.7rem] leading-[0.86] tracking-[-0.045em] text-[#F4CF7A] drop-shadow-[0_10px_24px_rgba(44,31,61,0.18)] md:text-[7.05rem] md:leading-[0.83] lg:text-[7.35rem]">
                Home
              </span>
              <span className="display-font block text-[4.7rem] leading-[0.84] tracking-[-0.045em] text-[#F4CF7A] drop-shadow-[0_10px_24px_rgba(44,31,61,0.18)] md:text-[7.05rem] md:leading-[0.81] lg:text-[7.35rem]">
                Money
              </span>
              <span className="mt-1 flex w-fit max-w-full items-center md:mt-2">
                <span className="block text-[3.45rem] font-black leading-[0.88] tracking-[-0.075em] text-[#F7F0E8] md:text-[5.25rem] lg:text-[5.65rem]">
                  Checked
                </span>
                <Image
                  src="/brand/hmc-tick-icon-transparent.png"
                  alt=""
                  width={220}
                  height={180}
                  priority
                  sizes="(min-width: 1024px) 182px, (min-width: 768px) 182px, 118px"
                  className="-ml-3 -mt-4 h-[5.9rem] w-[7.4rem] shrink-0 object-contain drop-shadow-[0_10px_16px_rgba(79,36,125,0.22)] md:-ml-5 md:-mt-7 md:h-[9.2rem] md:w-[11.4rem] lg:-ml-6 lg:-mt-5"
                />
              </span>
            </h1>

            <p className="mt-7 max-w-full text-xl font-semibold leading-8 text-[#F7F0E8]/78 md:max-w-2xl md:text-2xl md:leading-9">
              Better deals for your home, money and future.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="group inline-flex w-full transform-gpu items-center justify-center gap-2 rounded-full bg-[#22C55E] px-7 py-4 text-base font-black text-[#2C1F3D] shadow-[0_18px_50px_rgba(34,197,94,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-[#32D86A] hover:shadow-[0_22px_54px_rgba(34,197,94,0.28)] sm:w-auto md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]"
                href="#lead-form"
              >
                Start a free check
                <ArrowUpRight className="h-5 w-5 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]" strokeWidth={2.6} />
              </a>
              <a
                className="inline-flex w-full transform-gpu items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-black text-[#F7F0E8] backdrop-blur transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/16 sm:w-auto md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]"
                href="#checks"
              >
                Explore checks
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm font-extrabold text-[#F7F0E8]/70 lg:hidden">
              <span className="h-2 w-8 rounded-full bg-[#F4CF7A]" />
              Swipe the cards to choose a check
            </div>
          </div>

          <div className="relative z-10 min-h-[300px] max-w-full overflow-hidden md:min-h-[320px] lg:mx-0 lg:min-h-[770px] lg:overflow-visible">
            <div className="absolute left-[2%] top-[4%] hidden h-24 w-24 rounded-full bg-[#BFE3FF] opacity-80 shadow-[0_24px_60px_rgba(44,31,61,0.18)] lg:block" />
            <div className="absolute right-[16%] top-[2%] hidden h-20 w-20 rotate-[12deg] rounded-[1.5rem] bg-[#F4CF7A] opacity-95 shadow-[0_24px_60px_rgba(44,31,61,0.2)] lg:block" />
            <div className="absolute bottom-[7%] right-[28%] hidden h-24 w-24 rounded-full bg-[#BFD9C8] opacity-90 shadow-[0_24px_60px_rgba(44,31,61,0.18)] lg:block" />
            <div className="absolute bottom-[12%] left-[46%] hidden h-14 w-14 rotate-[-8deg] rounded-[1rem] bg-[#F4D9DE] opacity-90 shadow-[0_16px_45px_rgba(44,31,61,0.18)] lg:block" />
            <div className="absolute right-[2%] top-[64%] hidden h-16 w-16 rounded-full bg-[#F7F0E8] opacity-70 shadow-[0_16px_45px_rgba(44,31,61,0.18)] lg:block" />
            <div className="absolute left-[0%] top-[49%] hidden h-28 w-28 rotate-[10deg] rounded-[2rem] bg-[#EADFFD] opacity-55 shadow-[0_18px_50px_rgba(44,31,61,0.16)] lg:block" />
            <div className="absolute left-[51%] top-[24%] hidden h-16 w-16 rotate-[-12deg] rounded-[1.25rem] bg-[#F7F0E8] opacity-45 shadow-[0_16px_45px_rgba(44,31,61,0.14)] lg:block" />
            <div className="absolute bottom-[28%] right-[10%] hidden h-20 w-20 rotate-[14deg] rounded-[1.6rem] bg-[#F4CF7A] opacity-50 shadow-[0_16px_45px_rgba(44,31,61,0.14)] lg:block" />

            <div className="flex max-w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-10 pt-2 scroll-px-0 md:px-0 lg:block lg:h-full lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0">
              {heroTiles.map((tile) => (
                <HeroTile key={tile.title} item={tile} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-t-[3rem] bg-[#F7F0E8] px-5 py-12 text-[#2C1F3D] md:px-8 md:py-16">
          <div className="absolute -right-20 top-8 hidden h-56 w-56 rounded-full bg-[#EADFFD] blur-3xl md:block" />
          <div className="absolute -left-20 bottom-8 hidden h-56 w-56 rounded-[3rem] bg-[#F4CF7A]/35 blur-3xl md:block" />
          <div id="checks" className="relative mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2.3rem] bg-[#6A35A0] p-7 text-[#F7F0E8] shadow-[0_24px_70px_rgba(44,31,61,0.18)] md:p-9">
              <div className="absolute -bottom-12 -right-10 h-28 w-28 rotate-[14deg] rounded-[2rem] bg-[#F4CF7A]/35" />
              <p className="mb-4 w-fit rounded-full bg-[#F4CF7A] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
                Check services
              </p>
              <h2 className="display-font relative z-10 max-w-[12ch] text-5xl font-black leading-[0.95] tracking-[-0.075em] md:text-6xl">
                Choose your check
              </h2>
              <Image
                src="/brand/hmc-tick-icon-transparent.png"
                alt=""
                width={220}
                height={180}
                sizes="(min-width: 768px) 160px, 128px"
                className="pointer-events-none absolute bottom-1 right-12 h-24 w-32 object-contain drop-shadow-[0_10px_16px_rgba(79,36,125,0.2)] md:bottom-2 md:right-14 md:h-32 md:w-40"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {routeGroups.map((group) => (
                <RouteGroup key={group.label} group={group} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F0E8] px-5 pb-12 text-[#2C1F3D] md:px-8 md:pb-16">
          <div className="mx-auto grid max-w-7xl items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.9fr)]">
            <div className="flex flex-col gap-5 self-stretch">
              <div className="relative overflow-hidden rounded-[2.75rem] bg-[#5F2D8C] p-9 text-[#F7F0E8] shadow-[0_30px_90px_rgba(44,31,61,0.22)] md:p-12">
                <div className="absolute -right-20 -top-28 hidden h-80 w-80 rounded-full bg-[#EADFFD]/20 blur-3xl md:block" />
                <div className="absolute bottom-8 right-10 hidden h-24 w-24 rounded-full bg-[#BFE3FF]/18 md:block" />
                <div className="absolute right-24 top-20 hidden h-14 w-14 rotate-[14deg] rounded-[1.1rem] bg-[#F4D9DE]/22 md:block" />
                <div className="absolute bottom-28 left-8 hidden h-16 w-16 rotate-[-9deg] rounded-[1.35rem] bg-[#F7F0E8]/10 md:block" />
                <div className="absolute left-[58%] top-[48%] hidden h-8 w-8 rounded-full bg-[#CFE6D5]/24 lg:block" />
                <div className="relative flex min-h-full flex-col gap-8 md:gap-9">
                  {featuredCampaign ? (
                    <>
                      <div>
                        <p className="mb-5 w-fit rounded-full bg-[#F4CF7A] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
                          {featuredCampaign.label}
                        </p>
                        <h2 className="display-font max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.075em] md:text-7xl">
                          <CampaignTitle
                            title={featuredCampaign.title}
                            titleAccent={featuredCampaign.titleAccent}
                            titleMain={featuredCampaign.titleMain}
                          />
                        </h2>
                      </div>
                      <div className="relative max-w-2xl overflow-hidden rounded-[2.25rem] bg-[#F4CF7A] p-8 text-[#4F247D] shadow-[0_24px_64px_rgba(44,31,61,0.23)] ring-1 ring-white/20 md:p-9">
                        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/22" />
                        <div className="absolute -bottom-5 left-8 h-12 w-12 rotate-[12deg] rounded-[1rem] bg-[#EADFFD]/40" />
                        <p className="relative text-2xl font-black leading-9 tracking-[-0.035em] md:text-[1.75rem] md:leading-10">
                          {featuredCampaign.middleContent}
                        </p>
                      </div>
                      <div className="max-w-2xl rounded-[1.6rem] bg-white/10 p-6 backdrop-blur ring-1 ring-white/14">
                        <p className="text-base font-bold leading-7 text-[#F7F0E8]/76">
                          {featuredCampaign.lowerBoxText}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="mb-5 w-fit rounded-full bg-[#F4CF7A] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
                          Current campaign
                        </p>
                        <h2 className="display-font max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.075em] md:text-7xl">
                          No current campaign
                        </h2>
                      </div>
                      <div className="max-w-2xl rounded-[1.5rem] bg-white/10 p-5 backdrop-blur ring-1 ring-white/12">
                        <p className="text-base font-bold leading-7 text-[#F7F0E8]/76">
                          Check back soon for the next featured Home Money Check update.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="relative hidden min-h-[220px] flex-1 overflow-visible rounded-[2.25rem] lg:block">
                <div className="absolute left-[11%] top-[4%] z-0 h-48 w-48 rotate-[13deg] rounded-[2.8rem] bg-[#EADFFD]/75" />
                <div className="absolute bottom-[14%] right-[16%] z-0 h-36 w-36 rounded-full bg-[#CFE6D5]/70" />
              </div>

              <div className="relative hidden min-h-[360px] overflow-hidden rounded-[2.5rem] bg-[#5F2D8C] p-10 text-[#F7F0E8] shadow-[0_18px_54px_rgba(44,31,61,0.14)] ring-1 ring-[#EADFFD]/35 lg:block xl:min-h-[400px]">
                <div className="absolute right-8 top-10 z-0 h-28 w-28 rounded-full bg-[#BFE3FF]/75" />
                <div className="absolute bottom-24 right-36 z-0 h-36 w-36 rotate-[12deg] rounded-[2.35rem] bg-[#F4CF7A]/70" />
                <div className="relative z-10 flex min-h-[280px] flex-col justify-between gap-8 xl:min-h-[320px]">
                  <p className="w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
                    Why use Home Money Check
                  </p>
                  <div className="grid gap-7">
                    <div className="w-fit overflow-hidden rounded-[1.75rem] bg-[#4F247D] p-5">
                      <Image
                        src="/brand/hmc-logo-full-transparent.png"
                        alt="Home Money Check"
                        width={328}
                        height={118}
                        sizes="292px"
                        className="h-24 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black leading-[1.02] tracking-[-0.055em] text-[#F7F0E8]">
                        Friendly help. Quick contact. No obligation.
                      </h3>
                      <p className="mt-4 max-w-2xl text-base font-bold leading-7 text-[#F7F0E8]/78">
                        Tell us what you want checked and we’ll get back to you quickly to help you
                        understand your options.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Friendly help", "Quick contact", "No obligation"].map((point) => (
                      <span
                        className="rounded-full bg-[#F7F0E8] px-4 py-2 text-xs font-black text-[#5F2D8C]"
                        key={point}
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form" className="self-start">
              <LeadFormPreview
                helperText={
                  <>
                    <span className="brand-wordmark-text text-lg tracking-[-0.035em]">
                      Home Money Check
                    </span>{" "}
                    is a friendly check and advice service. Pop in some details here and we'll get
                    back to you to discuss how we can help. No obligation at all.
                  </>
                }
                messagePlaceholder="Tell us what you’d like help with."
                requirePostcode
                sourcePage="/"
                title="What would you like to check?"
              />
            </div>
          </div>
          <WhatHappensNext />
        </section>

        <section className="bg-[#F7F0E8] px-5 pb-14 text-[#2C1F3D] md:px-8 md:pb-20">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#EADFFD] p-8 shadow-[0_22px_70px_rgba(44,31,61,0.10)] md:p-10">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/35" />
              <p className="mb-4 w-fit rounded-full bg-white/65 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
                Noticeboard
              </p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-5xl">
                Worth checking this month.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {updates.length > 0 ? updates.map((item) => (
                <div
                  key={item.text}
                  className="group flex min-h-[180px] transform-gpu flex-col justify-between rounded-[2.25rem] p-6 shadow-[0_22px_70px_rgba(44,31,61,0.10)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_28px_78px_rgba(44,31,61,0.16)] md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ backgroundColor: item.tone }}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/55 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#5F2D8C]">
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-[#5F2D8C] transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  </div>
                  <p className="text-2xl font-black leading-[1.05] tracking-[-0.05em] text-[#2C1F3D]">
                    {item.text}
                  </p>
                </div>
              )) : (
                <div className="rounded-[2.25rem] bg-[#F7F0E8] p-6 text-lg font-black leading-7 text-[#5F2D8C] shadow-[0_22px_70px_rgba(44,31,61,0.10)] md:col-span-3">
                  No noticeboard items right now.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#5F2D8C] px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[360px] transform-gpu overflow-hidden rounded-[2.75rem] bg-[#F7F0E8] p-8 text-[#2C1F3D] shadow-[0_30px_90px_rgba(44,31,61,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(44,31,61,0.26)] md:p-12 md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]">
              <div className="absolute -right-5 top-6 h-20 w-28 rotate-[10deg] rounded-[1.5rem] bg-[#EADFFD]/55" />
              <div className="relative z-10 grid h-full min-h-[296px] gap-8 md:grid-cols-[minmax(0,1fr)_14rem]">
                <div>
                  <p className="mb-5 w-fit rounded-full bg-[#BFD9C8] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#173E29]">
                    Trusted advice
                  </p>
                  <h2 className="display-font flex max-w-3xl flex-col gap-4 text-4xl font-black leading-[0.98] tracking-[-0.065em] md:gap-5 md:text-6xl">
                    <span>Check your deals.</span>
                    <span>Straight answers.</span>
                    <span>Super easy.</span>
                  </h2>
                </div>
                <div className="flex items-end justify-end pb-2 pr-2 md:pb-8 md:pr-8">
                  <Image
                    src="/brand/hmc-tick-icon-transparent.png"
                    alt=""
                    width={220}
                    height={180}
                    sizes="(min-width: 768px) 208px, 128px"
                    className="h-auto w-32 object-contain drop-shadow-[0_12px_18px_rgba(79,36,125,0.18)] md:w-52"
                  />
                </div>
              </div>
            </div>

            <div className="relative transform-gpu overflow-hidden rounded-[2.75rem] bg-[#F4CF7A] p-8 text-[#2C1F3D] shadow-[0_30px_90px_rgba(44,31,61,0.22)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(44,31,61,0.24)] md:p-10 md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/35" />
              <div className="relative z-10 grid h-full min-h-[320px] gap-10 md:grid-cols-[minmax(0,28rem)_12rem]">
                <div>
                  <p className="mb-7 w-fit rounded-full bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#6B4611]">
                    About home money check
                  </p>
                  <h3 className="text-xl font-black leading-[1.12] tracking-[-0.04em] md:text-2xl">
                    <span className="brand-wordmark-text">Home Money Check</span> is run by Neill
                    Connolly and is dedicated to helping you get better deals tailored to your own
                    specific needs and circumstances. We always put our customers first. We&apos;d
                    love to help you!
                  </h3>
                </div>
                <div className="flex items-end justify-end pb-2 pr-2 md:pb-8 md:pr-8">
                  {/* TODO admin: make this portrait/photo placeholder editable later. */}
                  <div className="flex h-40 w-28 shrink-0 items-center justify-center rounded-[2rem] bg-white/45 shadow-[inset_0_0_0_1px_rgba(107,70,17,0.08)] md:h-48 md:w-[10.5rem]">
                    <Home className="h-16 w-16 text-[#6B4611]" strokeWidth={1.8} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

