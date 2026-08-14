import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, HeartHandshake, ReceiptText, ShieldCheck } from "lucide-react";
import { FocusedBillsForm } from "@/components/home/FocusedBillsForm";
import { SiteBrand } from "@/components/home/SiteBrand";

type ReferralBillsKind = "employee" | "client" | "partner";

const configs = {
  employee: {
    sourcePage: "/staff-bills-check/employee",
    eyebrow: "Your employee bills check",
    title: "Check how much you could save on gas, electricity and broadband.",
    introduction: "Your workplace has given you access to a free Home Money Check. Choose the bills you want checked and we’ll talk you through a new quote.",
    noteTitle: "Your household information stays private.",
    noteBody: "You deal directly with Home Money Check. Your bills, quote and household details stay between you and Home Money Check.",
    backHref: "/staff-bills-check",
    backLabel: "About the workplace benefit",
  },
  client: {
    sourcePage: "/for-your-clients/client",
    eyebrow: "Your client bills check",
    title: "Check how much you could save on your household bills.",
    introduction: "The person who sent you here has introduced you to Home Money Check. We check your gas, electricity and broadband, build a new quote and explain every saving.",
    noteTitle: "Home Money Check handles your bills check.",
    noteBody: "We contact you directly, build your quote and talk through the costs and savings with you.",
    backHref: "/for-your-clients",
    backLabel: "About client introductions",
  },
  partner: {
    sourcePage: "/partner-bills-check/start",
    eyebrow: "Your partner household bills check",
    title: "Check how much you could save on your household bills.",
    introduction: "Choose gas, electricity or broadband and Home Money Check will build a new quote for your home and explain every saving.",
    noteTitle: "You speak directly with Home Money Check.",
    noteBody: "We contact you, check your bills, build your quote and talk through the result.",
    backHref: "/partner-bills-check",
    backLabel: "About partner HMC pages",
  },
} as const;

export function ReferralBillsPage({ kind }: { kind: ReferralBillsKind }) {
  const page = configs[kind];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFDF8] text-[#261B2E]">
      <header className="border-b border-[#E8DFC9] bg-[#FFFDF8] px-5 py-2 sm:px-8">
        <div className="mx-auto flex max-w-[76rem] items-center justify-between gap-5">
          <Link aria-label="Home Money Check homepage" href="/"><SiteBrand compact /></Link>
          <Link className="hidden min-h-12 items-center gap-2 rounded-full bg-[#3D145F] px-5 py-3 text-sm font-extrabold text-white sm:inline-flex" href="#start-check">Check how much I could save<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-[#35104F] px-5 py-14 text-white sm:px-8 lg:py-20">
          <div className="pointer-events-none absolute -right-36 -top-40 -z-10 h-[38rem] w-[38rem] rounded-full border-[110px] border-white/[0.035]" />
          <div className="mx-auto grid max-w-[76rem] items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">{page.eyebrow}</p>
              <h1 className="display-font mt-6 max-w-[12ch] text-6xl leading-[0.89] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.35rem]">{page.title}</h1>
              <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-white/76 sm:text-xl sm:leading-9">{page.introduction}</p>
              <Link className="mt-9 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#22C86B] px-7 py-4 text-base font-extrabold text-[#12371F]" href="#start-check">Check how much I could save<ArrowRight className="h-5 w-5" /></Link>
            </div>

            <div className="relative overflow-hidden rounded-[2.4rem] bg-[#F0C646] p-8 text-[#33210A] shadow-[0_34px_85px_rgba(15,5,23,0.28)] sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[48px] border-white/25" />
              <div className="relative flex items-start justify-between gap-5 border-b border-[#6A2C93]/18 pb-6">
                <div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">Your savings check</p><h2 className="display-font mt-3 max-w-[11ch] text-4xl leading-[0.95] tracking-[-0.045em] text-[#3D145F] sm:text-5xl">Every saving counts.</h2></div>
                <Image alt="" className="h-16 w-16 shrink-0 rounded-[1rem] object-cover" height={128} src="/brand/hmc-tick-icon-purple.png" width={128} />
              </div>
              <div className="relative mt-6 grid gap-3">
                {["Gas", "Electricity", "Broadband", "Available cashback and switching support"].map((item) => <p className="flex items-center gap-3 rounded-[1.1rem] bg-white/42 p-4 text-sm font-extrabold leading-6 ring-1 ring-inset ring-[#6A2C93]/12" key={item}><Check className="h-5 w-5 shrink-0 text-[#20A95C]" strokeWidth={3} />{item}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-[76rem] gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-[#F5EEF8] p-8 text-[#3D145F] shadow-[0_20px_50px_rgba(61,20,95,0.08)]">
              <ShieldCheck className="h-9 w-9 text-[#20A95C]" strokeWidth={2} />
              <h2 className="display-font mt-6 max-w-[12ch] text-4xl leading-[0.96] tracking-[-0.045em]">{page.noteTitle}</h2>
              <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-[#625667]">{page.noteBody}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-[2rem] bg-[#273468] p-7 text-white"><ReceiptText className="h-8 w-8 text-[#22C86B]" /><h2 className="mt-6 text-2xl font-extrabold">Start with what you pay</h2><p className="mt-4 text-sm font-semibold leading-6 text-white/70">We compare the new quote with your current household costs.</p></article>
              <article className="rounded-[2rem] bg-[#F0C646] p-7 text-[#33210A]"><HeartHandshake className="h-8 w-8 text-[#6A2C93]" /><h2 className="mt-6 text-2xl font-extrabold">Talk through every saving</h2><p className="mt-4 text-sm font-semibold leading-6 opacity-75">You see the new cost and decide whether it works for you.</p></article>
            </div>
          </div>
        </section>

        <section className="bg-[#273468] px-5 py-16 text-white sm:px-8 lg:py-20" id="start-check">
          <div className="mx-auto grid max-w-[76rem] items-start gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">Start your free bills check</p>
              <h2 className="display-font mt-5 max-w-[10ch] text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl">Check how much you could save.</h2>
              <p className="mt-7 max-w-md text-lg font-medium leading-8 text-white/72">Choose the services you want checked and let us know how to reach you. We’ll get in touch for a chat and start searching for savings.</p>
            </div>
            <FocusedBillsForm sourcePage={page.sourcePage} />
          </div>
        </section>

        <section className="bg-[#FFFDF8] px-5 py-8 text-center sm:px-8"><p className="text-sm font-semibold leading-6 text-[#625667]"><Link className="font-extrabold text-[#3D145F] underline decoration-[#22C86B] decoration-2 underline-offset-4" href={page.backHref}>{page.backLabel}</Link> or <Link className="font-extrabold text-[#3D145F] underline decoration-[#F0C646] decoration-2 underline-offset-4" href="/">visit Home Money Check</Link>.</p></section>
      </main>

      <footer className="bg-[#35104F] px-5 py-7 text-white/62 sm:px-8"><div className="mx-auto flex max-w-[76rem] flex-col gap-4 text-xs font-bold sm:flex-row sm:items-center sm:justify-between"><span>&copy; Home Money Check.</span><nav aria-label="Campaign legal links" className="flex flex-wrap gap-5"><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/disclaimers">Disclaimers</Link></nav></div></footer>
    </div>
  );
}
