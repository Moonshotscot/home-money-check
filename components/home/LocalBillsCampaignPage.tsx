import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Banknote, Check, House, Layers, MapPin } from "lucide-react";
import { FocusedBillsForm } from "@/components/home/FocusedBillsForm";
import { SiteBrand } from "@/components/home/SiteBrand";

type LocalBillsCampaignPageProps = {
  location: string;
  sourcePage: string;
};

const servicePoints = [
  "Gas",
  "Electricity",
  "Broadband",
  "Available cashback and switching support",
] as const;

export function LocalBillsCampaignPage({ location, sourcePage }: LocalBillsCampaignPageProps) {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFDF8] text-[#261B2E]">
      <header className="border-b border-[#E8DFC9] bg-[#FFFDF8] px-5 py-2 sm:px-8">
        <div className="mx-auto flex max-w-[76rem] items-center justify-between gap-5">
          <Link aria-label="Home Money Check homepage" href="/"><SiteBrand compact /></Link>
          <Link className="hidden min-h-12 items-center gap-2 rounded-full bg-[#3D145F] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#512078] sm:inline-flex" href="#start-check">Check how much I could save<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-[#35104F] px-5 py-14 text-white sm:px-8 lg:py-20">
          <div className="pointer-events-none absolute -right-36 -top-40 -z-10 h-[38rem] w-[38rem] rounded-full border-[110px] border-white/[0.035]" />
          <div className="mx-auto grid max-w-[76rem] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="flex w-fit items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]"><MapPin className="h-4 w-4" strokeWidth={2.5} />{location} household bills check</p>
              <h1 className="display-font mt-6 max-w-[11ch] text-6xl leading-[0.89] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.5rem]">{location}, let&rsquo;s see how much you could save.</h1>
              <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-white/76 sm:text-xl sm:leading-9">We check your gas, electricity and broadband bills, then talk you through a new quote tailored to your home and designed to save you money.</p>
              <Link className="mt-9 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#22C86B] px-7 py-4 text-base font-extrabold text-[#12371F] transition hover:-translate-y-0.5 hover:bg-[#2DD977]" href="#start-check">Check how much I could save<ArrowRight className="h-5 w-5" /></Link>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/72">
                {["Free. No cost to you.", "Speak with an expert.", "You decide."].map((item) => <span className="flex items-center gap-2" key={item}><Check className="h-4 w-4 text-[#28D679]" strokeWidth={3} />{item}</span>)}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.4rem] bg-[#F0C646] p-8 text-[#33210A] shadow-[0_34px_85px_rgba(15,5,23,0.28)] sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[48px] border-white/22" />
              <div className="relative flex items-start justify-between gap-5 border-b border-[#6A2C93]/18 pb-6">
                <div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">Your local check</p><h2 className="display-font mt-3 max-w-[11ch] text-4xl leading-[0.95] tracking-[-0.045em] text-[#3D145F] sm:text-5xl">Every saving counts.</h2></div>
                <Image alt="" className="h-16 w-16 shrink-0 rounded-[1rem] object-cover" height={128} src="/brand/hmc-tick-icon-purple.png" width={128} />
              </div>
              <div className="relative mt-6 grid gap-3">
                {servicePoints.map((item) => <p className="flex items-center gap-3 rounded-[1.1rem] bg-white/38 p-4 text-sm font-extrabold leading-6 ring-1 ring-inset ring-[#6A2C93]/12" key={item}><Check className="h-5 w-5 shrink-0 text-[#20A95C]" strokeWidth={3} />{item}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-[76rem] gap-5 lg:grid-cols-3">
            {[
              { title: "Check what you pay", body: "We start with your current household bills and the services you use.", icon: Banknote, style: "bg-[#F5EEF8] text-[#3D145F]" },
              { title: "Build your quote", body: "We check the available services and combine them where this could save you more.", icon: Layers, style: "bg-[#273468] text-white" },
              { title: "See every saving", body: "We talk through the new cost, offers and potential savings before you decide.", icon: House, style: "bg-[#F0C646] text-[#33210A]" },
            ].map(({ title, body, icon: Icon, style }, index) => <article className={`min-h-[15rem] rounded-[2rem] p-7 shadow-[0_20px_50px_rgba(61,20,95,0.09)] ${style}`} key={title}><div className="flex items-start justify-between"><span className={`flex h-12 w-12 items-center justify-center rounded-[1rem] ${index === 1 ? "bg-[#22C86B] text-[#12371F]" : "bg-white text-[#6A2C93]"}`}><Icon className="h-6 w-6" strokeWidth={2} /></span><span className="display-font text-4xl opacity-18">0{index + 1}</span></div><h2 className="mt-7 text-2xl font-extrabold tracking-[-0.035em]">{title}</h2><p className={`mt-4 text-sm font-semibold leading-6 ${index === 1 ? "text-white/68" : "opacity-75"}`}>{body}</p></article>)}
          </div>
        </section>

        <section className="bg-[#273468] px-5 py-16 text-white sm:px-8 lg:py-20" id="start-check">
          <div className="mx-auto grid max-w-[76rem] items-start gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <div className="lg:sticky lg:top-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">Start your {location} bills check</p>
              <h2 className="display-font mt-5 max-w-[10ch] text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl">Check how much you could save.</h2>
              <p className="mt-7 max-w-md text-lg font-medium leading-8 text-white/72">Choose the services you want checked and let us know how to reach you. We’ll get in touch for a chat and start searching for savings.</p>
            </div>
            <FocusedBillsForm sourcePage={sourcePage} />
          </div>
        </section>

        <section className="bg-[#FFFDF8] px-5 py-8 text-center sm:px-8">
          <p className="text-sm font-semibold leading-6 text-[#625667]">Want to learn more first? <Link className="font-extrabold text-[#3D145F] underline decoration-[#22C86B] decoration-2 underline-offset-4" href="/">Visit Home Money Check</Link>.</p>
        </section>
      </main>
      <footer className="bg-[#35104F] px-5 py-7 text-white/62 sm:px-8">
        <div className="mx-auto flex max-w-[76rem] flex-col gap-4 text-xs font-bold sm:flex-row sm:items-center sm:justify-between"><span>© Home Money Check.</span><nav aria-label="Landing page legal links" className="flex flex-wrap gap-5"><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/disclaimers">Disclaimers</Link></nav></div>
      </footer>
    </div>
  );
}
