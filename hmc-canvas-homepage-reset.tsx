import React from "react";
import {
  ArrowUpRight,
  Check,
  Gift,
  Home,
  Landmark,
  ShieldCheck,
  FileText,
  BriefcaseBusiness,
  Sparkles,
  Wifi,
  Menu,
  Zap,
  Smartphone,
  UsersRound,
  HeartPulse,
} from "lucide-react";

const heroTiles = [
  {
    title: "Household Bills",
    note: "Your main home services check",
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
    icon: Wifi,
    bg: "#BFE3FF",
    colour: "#245984",
    mobileClass: "mt-1 rotate-[-0.75deg]",
    className:
      "lg:absolute lg:right-[7%] lg:top-[12%] lg:mt-0 lg:h-[174px] lg:w-[226px] lg:rotate-[-1deg]",
  },
  {
    title: "Mobile",
    note: "SIMs and phones",
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
    icon: ShieldCheck,
    bg: "#F5D28A",
    colour: "#6B4611",
    mobileClass: "mt-1 rotate-[-1.25deg]",
    className:
      "lg:absolute lg:left-[30%] lg:bottom-[31%] lg:mt-0 lg:h-[160px] lg:w-[228px] lg:rotate-[-2deg]",
  },
  {
    title: "Medical",
    note: "Private medical cover",
    icon: HeartPulse,
    bg: "#BFD9C8",
    colour: "#173E29",
    mobileClass: "mt-5 rotate-[1.75deg]",
    className:
      "lg:absolute lg:right-[19%] lg:bottom-[20%] lg:mt-0 lg:h-[176px] lg:w-[216px] lg:rotate-[2deg]",
  },
  {
    title: "Estate Planning",
    note: "Wills and POAs",
    icon: FileText,
    bg: "#CFE6D5",
    colour: "#173E29",
    mobileClass: "mt-2 rotate-[-0.75deg]",
    className:
      "lg:absolute lg:left-[21%] lg:bottom-[0%] lg:mt-0 lg:h-[182px] lg:w-[260px] lg:rotate-[3deg]",
  },
  {
    title: "Extra Income",
    note: "Become a Partner",
    icon: UsersRound,
    bg: "#D9C2F4",
    colour: "#4F247D",
    mobileClass: "mt-4 rotate-[-1.25deg]",
    className:
      "lg:absolute lg:right-[2%] lg:bottom-[2%] lg:mt-0 lg:h-[178px] lg:w-[236px] lg:rotate-[-2deg]",
  },
];

const routeGroups = [
  {
    label: "Home services",
    bg: "#F7F0E8",
    colour: "#622C91",
    items: ["Energy", "Broadband", "Mobile", "£20K Giveaway"],
  },
  {
    label: "Home and future checks",
    bg: "#EADFFD",
    colour: "#5F2D8C",
    items: ["Mortgage", "Protection", "Private Medical", "Estate Planning"],
  },
  {
    label: "Income and business",
    bg: "#D9E1E8",
    colour: "#263646",
    items: ["Extra Income", "Business Utilities", "Finance Services", "Local Home Partners"],
  },
];

const updates = [
  { label: "Featured", text: "£20K Giveaway", tone: "#EADFFD" },
  { label: "Home", text: "Bills worth checking", tone: "#F7F0E8" },
  { label: "Business", text: "Commercial utilities", tone: "#D9E1E8" },
];

const enquiryOptions = [
  "Household bills",
  "Energy",
  "Broadband",
  "Mobile",
  "£20K Giveaway",
  "Mortgage",
  "First-time buyer mortgage",
  "Remortgage",
  "Moving home mortgage",
  "Protection insurance",
  "Private medical insurance",
  "Estate planning",
  "Extra income",
  "Business utilities",
  "Finance services",
];

function CheckBoxMark({ className = "" }) {
  return (
    <img
      src="/brand/hmc-tick-icon-transparent.png"
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}

function BrandMark() {
  return (
    <div className="flex items-center">
      <img
        src="/brand/hmc-logo-full-transparent.png"
        alt="Home Money Check"
        className="h-14 w-auto object-contain md:h-16"
      />
    </div>
  );
}

function HeroTile({ item }) {
  const Icon = item.icon;
  const titleSize = item.big
    ? "text-4xl md:text-[2.7rem]"
    : item.title.length > 11
      ? "text-[1.55rem]"
      : "text-2xl";

  return (
    <div
      className={`group relative h-[185px] min-w-[230px] snap-start overflow-hidden rounded-[2rem] p-5 shadow-[0_22px_60px_rgba(44,31,61,0.24)] ring-1 ring-white/40 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-4 hover:rotate-0 hover:scale-[1.045] hover:shadow-[0_38px_95px_rgba(44,31,61,0.34)] ${item.big ? "h-[220px] min-w-[285px]" : ""} ${item.mobileClass} lg:min-w-0 ${item.className}`}
      style={{ backgroundColor: item.bg, color: item.colour }}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/38 transition duration-300 group-hover:scale-125" />
      <div className="absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-white/22 transition duration-300 group-hover:scale-125" />
      <div className="relative flex h-full flex-col justify-between gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:bg-white/80">
            <Icon className="h-6 w-6" strokeWidth={2.45} />
          </div>
          <ArrowUpRight
            className="h-5 w-5 opacity-45 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-85"
            strokeWidth={2.6}
          />
        </div>
        <div>
          <h3 className={`${titleSize} font-black leading-[0.96] tracking-[-0.055em]`}>
            {item.title}
          </h3>
          <p className={`${item.big ? "mt-3 text-base" : "mt-2 text-sm"} max-w-[16rem] font-extrabold leading-5 opacity-72`}>
            {item.note}
          </p>
        </div>
      </div>
    </div>
  );
}

function RouteGroup({ group }) {
  return (
    <div
      className="group relative overflow-hidden rounded-[2rem] p-5 shadow-[0_18px_55px_rgba(44,31,61,0.12)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_28px_78px_rgba(44,31,61,0.18)]"
      style={{ backgroundColor: group.bg, color: group.colour }}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/35" />
      <div className="relative">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.14em] opacity-70">
          {group.label}
        </p>
        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <button
              key={item}
              className="inline-flex items-center gap-2 rounded-full bg-white/62 px-4 py-2.5 text-sm font-black shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:bg-white/85 hover:shadow-[0_10px_24px_rgba(44,31,61,0.10)]"
              type="button"
            >
              {item}
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.7} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomeMoneyCheckHomepage() {
  return (
    <div
      className="min-h-screen bg-[#6A35A0] text-[#F7F0E8]"
      style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,900,100,1&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap");
        .display-font {
          font-family: "Fraunces", ui-serif, Georgia, serif;
          font-variation-settings: "SOFT" 100, "WONK" 1;
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-28 top-12 h-96 w-96 rounded-full bg-[#8E52C4]/35 blur-3xl" />
        <div className="absolute right-0 top-64 h-[30rem] w-[30rem] rounded-full bg-[#4F247D]/45 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-[#F4CF7A]/18 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-64 w-64 rotate-[18deg] rounded-[4rem] bg-[#EADFFD]/12 blur-2xl" />
      </div>

      <header className="relative z-20 px-4 pt-5 md:px-7">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.75rem] border border-white/12 bg-white/10 px-4 py-3 shadow-[0_18px_70px_rgba(44,31,61,0.22)] backdrop-blur-xl md:px-5">
          <BrandMark />
          <nav className="hidden items-center gap-1 lg:flex">
            {["Bills", "£20K", "Mortgage", "Protection", "Extra income", "Business"].map((item) => (
              <a
                key={item}
                className="rounded-full px-3.5 py-2 text-sm font-extrabold text-[#F7F0E8]/78 transition hover:bg-white/12 hover:text-white"
                href="#"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              className="hidden rounded-full bg-[#F4CF7A] px-5 py-3 text-sm font-black text-[#4F247D] shadow-[0_12px_32px_rgba(44,31,61,0.22)] transition hover:-translate-y-0.5 hover:bg-[#F7D987] md:block"
              type="button"
            >
              Start my check
            </button>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-[#F7F0E8] lg:hidden"
              type="button"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-12 pt-12 md:px-8 md:pb-16 md:pt-16 lg:min-h-[820px] lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full bg-[#F7F0E8] px-5 py-3 text-sm font-black text-[#5F2D8C] shadow-[0_14px_45px_rgba(44,31,61,0.22)]">
              <Sparkles className="h-4 w-4 shrink-0 text-[#D89B2B]" strokeWidth={2.7} />
              <span>Useful checks for your home, your money and what comes next</span>
            </div>

            <h1 className="max-w-4xl">
              <span className="display-font block text-[4.7rem] leading-[0.76] tracking-[-0.045em] text-[#F4CF7A] drop-shadow-[0_10px_24px_rgba(44,31,61,0.18)] md:text-[7.05rem] md:leading-[0.74] lg:text-[7.35rem]">
                Home
              </span>
              <span className="display-font block text-[4.7rem] leading-[0.72] tracking-[-0.045em] text-[#F4CF7A] drop-shadow-[0_10px_24px_rgba(44,31,61,0.18)] md:text-[7.05rem] md:leading-[0.70] lg:text-[7.35rem]">
                Money
              </span>
              <span className="relative mt-5 block w-fit md:mt-7">
                <span className="block pr-20 text-[3.45rem] font-black leading-[0.88] tracking-[-0.075em] text-[#F7F0E8] md:pr-32 md:text-[5.25rem] lg:text-[5.65rem]">
                  Checked
                </span>
                <CheckBoxMark className="absolute left-[69%] top-[-27%] h-[7.1rem] w-[9.2rem] drop-shadow-[0_10px_16px_rgba(79,36,125,0.22)] md:left-[72%] md:top-[-25%] md:h-[9.7rem] md:w-[12.2rem]" />
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-[#F7F0E8]/78 md:text-2xl md:leading-9">
              A bolder, simpler front door for the checks that sit around home life, bills, planning and practical money decisions.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm font-extrabold text-[#F7F0E8]/70 lg:hidden">
              <span className="h-2 w-8 rounded-full bg-[#F4CF7A]" />
              Swipe the cards to choose a route
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F7F0E8] px-7 py-4 text-base font-black text-[#5F2D8C] shadow-[0_18px_50px_rgba(44,31,61,0.24)] transition hover:-translate-y-1 hover:scale-[1.02]"
                type="button"
              >
                Start a free check
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-black text-[#F7F0E8] backdrop-blur transition hover:-translate-y-1 hover:bg-white/16"
                type="button"
              >
                Explore checks
              </button>
            </div>
          </div>

          <div className="relative -mx-5 min-h-[300px] md:-mx-8 md:min-h-[320px] lg:mx-0 lg:min-h-[770px]">
            <div className="absolute left-[2%] top-[4%] hidden h-24 w-24 rounded-full bg-[#BFE3FF] opacity-80 shadow-[0_24px_60px_rgba(44,31,61,0.18)] lg:block" />
            <div className="absolute right-[16%] top-[2%] hidden h-20 w-20 rotate-[12deg] rounded-[1.5rem] bg-[#F4CF7A] opacity-95 shadow-[0_24px_60px_rgba(44,31,61,0.2)] lg:block" />
            <div className="absolute bottom-[7%] right-[28%] hidden h-24 w-24 rounded-full bg-[#BFD9C8] opacity-90 shadow-[0_24px_60px_rgba(44,31,61,0.18)] lg:block" />
            <div className="absolute bottom-[12%] left-[46%] hidden h-14 w-14 rotate-[-8deg] rounded-[1rem] bg-[#F4D9DE] opacity-90 shadow-[0_16px_45px_rgba(44,31,61,0.18)] lg:block" />
            <div className="absolute right-[2%] top-[64%] hidden h-16 w-16 rounded-full bg-[#F7F0E8] opacity-70 shadow-[0_16px_45px_rgba(44,31,61,0.18)] lg:block" />
            <div className="absolute left-[0%] top-[49%] hidden h-28 w-28 rotate-[10deg] rounded-[2rem] bg-[#EADFFD] opacity-55 shadow-[0_18px_50px_rgba(44,31,61,0.16)] lg:block" />
            <div className="absolute left-[51%] top-[24%] hidden h-16 w-16 rotate-[-12deg] rounded-[1.25rem] bg-[#F7F0E8] opacity-45 shadow-[0_16px_45px_rgba(44,31,61,0.14)] lg:block" />
            <div className="absolute bottom-[28%] right-[10%] hidden h-20 w-20 rotate-[14deg] rounded-[1.6rem] bg-[#F4CF7A] opacity-50 shadow-[0_16px_45px_rgba(44,31,61,0.14)] lg:block" />

            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-10 pt-2 md:px-8 lg:block lg:h-full lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0">
              {heroTiles.map((tile) => (
                <HeroTile key={tile.title} item={tile} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-t-[3rem] bg-[#F7F0E8] px-5 py-12 text-[#2C1F3D] md:px-8 md:py-16">
          <div className="absolute -right-20 top-8 h-56 w-56 rounded-full bg-[#EADFFD] blur-3xl" />
          <div className="absolute -left-20 bottom-8 h-56 w-56 rounded-[3rem] bg-[#F4CF7A]/35 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2.3rem] bg-[#6A35A0] p-7 text-[#F7F0E8] shadow-[0_24px_70px_rgba(44,31,61,0.18)] md:p-9">
              <div className="absolute -bottom-12 -right-10 h-28 w-28 rotate-[14deg] rounded-[2rem] bg-[#F4CF7A]/35" />
              <p className="mb-4 w-fit rounded-full bg-[#F4CF7A] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
                Check routes
              </p>
              <h2 className="relative text-5xl font-black leading-[0.95] tracking-[-0.075em] md:text-6xl">
                Choose your check and get moving.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {routeGroups.map((group) => (
                <RouteGroup key={group.label} group={group} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F0E8] px-5 pb-12 text-[#2C1F3D] md:px-8 md:pb-16">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden rounded-[2.75rem] bg-[#5F2D8C] p-8 text-[#F7F0E8] shadow-[0_30px_90px_rgba(44,31,61,0.22)] md:min-h-[430px] md:p-12">
              <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#EADFFD]/20 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between gap-12">
                <div>
                  <p className="mb-5 w-fit rounded-full bg-[#F4CF7A] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]">
                    Current campaign
                  </p>
                  <h2 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.075em] md:text-7xl">
                    <span className="display-font text-[#F4CF7A]">£20K</span> Giveaway
                  </h2>
                </div>
                <div className="max-w-2xl rounded-[2rem] bg-white/10 p-6 backdrop-blur ring-1 ring-white/12">
                  <p className="text-lg font-bold leading-8 text-[#F7F0E8]/82">
                    A premium campaign panel that can be changed or hidden from the back office when the featured push changes.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.75rem] bg-[#F7F0E8] p-7 shadow-[0_24px_70px_rgba(44,31,61,0.13)] ring-1 ring-[#EADFFD] md:p-9">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#EADFFD]/55" />
              <p className="relative mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
                Leave your details
              </p>
              <h2 className="relative text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-5xl">
                Tell us what you want to check.
              </h2>
              <div className="relative mt-7 grid gap-4">
                <input
                  className="rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] outline-none ring-2 ring-transparent placeholder:text-[#8A7D96] focus:ring-[#6A35A0]"
                  placeholder="Name"
                />
                <input
                  className="rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] outline-none ring-2 ring-transparent placeholder:text-[#8A7D96] focus:ring-[#6A35A0]"
                  placeholder="Mobile"
                />
                <input
                  className="rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] outline-none ring-2 ring-transparent placeholder:text-[#8A7D96] focus:ring-[#6A35A0]"
                  placeholder="Email"
                />
                <select className="rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] outline-none ring-2 ring-transparent focus:ring-[#6A35A0]">
                  <option>Choose your check</option>
                  {enquiryOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <button
                  className="flex items-center justify-center gap-2 rounded-full bg-[#6A35A0] px-7 py-4 text-base font-black text-[#F7F0E8] shadow-[0_18px_45px_rgba(106,53,160,0.25)] transition hover:-translate-y-1 hover:scale-[1.02]"
                  type="button"
                >
                  Start my check
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
                </button>
              </div>
            </div>
          </div>
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
              {updates.map((item) => (
                <div
                  key={item.text}
                  className="group flex min-h-[180px] flex-col justify-between rounded-[2.25rem] p-6 shadow-[0_22px_70px_rgba(44,31,61,0.10)] transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_30px_85px_rgba(44,31,61,0.17)]"
                  style={{ backgroundColor: item.tone }}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/55 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#5F2D8C]">
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-[#5F2D8C] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="text-2xl font-black leading-[1.05] tracking-[-0.05em] text-[#2C1F3D]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#5F2D8C] px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2.75rem] bg-[#F7F0E8] p-8 text-[#2C1F3D] shadow-[0_30px_90px_rgba(44,31,61,0.25)] md:p-12">
              <p className="mb-5 w-fit rounded-full bg-[#BFD9C8] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#173E29]">
                Trust point
              </p>
              <h2 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-6xl">
                Helpful first. Sales only when it fits.
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-[2.75rem] bg-[#F4CF7A] p-8 text-[#2C1F3D] shadow-[0_30px_90px_rgba(44,31,61,0.22)] md:p-10">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/35" />
              <div className="relative flex h-full min-h-[220px] flex-col justify-between gap-10">
                <p className="w-fit rounded-full bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#6B4611]">
                  About block
                </p>
                <div className="flex items-end justify-between gap-6">
                  <h3 className="max-w-sm text-3xl font-black leading-[1] tracking-[-0.055em] md:text-4xl">
                    Photo or brand mark can sit here later.
                  </h3>
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.75rem] bg-white/45">
                    <Home className="h-12 w-12 text-[#6B4611]" strokeWidth={1.8} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-[#5F2D8C] px-5 pb-8 text-[#F7F0E8]/70 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-white/12 pt-8 md:flex-row md:items-center">
          <BrandMark />
          <p className="text-sm font-bold">© Home Money Check. Design prototype.</p>
        </div>
      </footer>
    </div>
  );
}
