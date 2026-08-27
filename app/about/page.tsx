import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Eye, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "About Neill Connolly | Home Money Check",
  description: "Meet Neill Connolly and learn why he created Home Money Check to help households understand their bills and save money.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFDF8] text-[#261B2E]">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden px-5 py-14 sm:px-8 lg:py-24">
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_34%,rgba(106,44,147,0.16),transparent_30%),linear-gradient(115deg,#FFF9E9_0%,#FFFDF8_53%,#F3EAF8_100%)]" />
          <div className="mx-auto grid max-w-[86rem] items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
            <div className="relative mx-auto w-full max-w-[34rem] lg:mx-0">
              <div className="relative aspect-[4/4.55] overflow-hidden rounded-[2.5rem] border border-[#D9A914]/60 bg-[#D9C7E7] shadow-[0_32px_80px_rgba(61,20,95,0.18)]">
                <Image alt="Neill Connolly, founder of Home Money Check" className="object-cover object-top" fill priority sizes="(max-width: 1024px) 90vw, 42vw" src="/images/neill-connolly-profile.webp" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2F0D48]/90 via-[#2F0D48]/32 to-transparent px-7 pb-7 pt-28 text-white"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F0C646]">Founder</p><p className="mt-1 text-2xl font-extrabold">Neill Connolly</p></div>
              </div>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">Meet Neill</p>
              <h1 className="display-font mt-5 max-w-[13ch] text-6xl leading-[0.9] tracking-[-0.055em] text-[#3D145F] sm:text-7xl lg:text-[5.35rem]">I created Home Money Check to help people save money.</h1>
              <div className="mt-8 max-w-2xl space-y-5 text-lg font-medium leading-8 text-[#5F5265]">
                <p>For more than 25 years, I&rsquo;ve helped clients save money across a range of industries. I believe in doing the right thing for every customer, finding the most suitable option and getting the best price I can.</p>
                <p>Too many households are paying more than they need to for gas, electricity and broadband. Price changes and complicated offers make it harder to see what you are really paying and whether a better option is available.</p>
                <p>I want to make that a whole lot clearer and help people keep more of their money.</p>
              </div>
              <Link className="mt-9 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#22C86B] px-7 py-4 text-base font-extrabold text-[#12371F] transition hover:-translate-y-0.5 hover:bg-[#2DD977]" href="/#arrange-check">Check how much I could save<ArrowRight className="h-5 w-5" /></Link>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E8DFC9] bg-white px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            <div className="rounded-[2.4rem] bg-[#35104F] p-8 text-white shadow-[0_28px_70px_rgba(61,20,95,0.2)] sm:p-11">
              <ShieldCheck className="h-11 w-11 text-[#22C86B]" strokeWidth={2} />
              <h2 className="display-font mt-7 max-w-[11ch] text-5xl leading-[0.94] tracking-[-0.05em]">You should understand every part of your quote.</h2>
              <p className="mt-6 text-base font-semibold leading-8 text-white/70">Home Money Check gives you one clear household-services quote, explains where the savings come from and gives you the information to decide what works for you.</p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">What matters to me</p>
              <h2 className="display-font mt-5 max-w-[13ch] text-5xl leading-[0.94] tracking-[-0.05em] text-[#3D145F] sm:text-6xl">I want you to know what you would pay and how much you could save.</h2>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Check what you pay now", body: "We start with your bills, the services you use and what your home needs.", icon: Eye },
                  { title: "Add up every saving", body: "We include the price, discounts, cashback and available switching support.", icon: MessageCircle },
                  { title: "Explain the quote", body: "We talk through the costs and show you where each saving comes from.", icon: HeartHandshake },
                  { title: "Let you decide", body: "We answer your questions and you decide whether the quote is right for you.", icon: Check },
                ].map(({ title, body, icon: Icon }, index) => <article className={`rounded-[1.6rem] p-6 ${index === 1 ? "bg-[#F0C646] text-[#33210A]" : index === 2 ? "bg-[#273468] text-white" : "bg-[#F5EEF8] text-[#34273B]"}`} key={title}><Icon className={`h-7 w-7 ${index === 2 ? "text-[#22C86B]" : "text-[#6A2C93]"}`} strokeWidth={2} /><h3 className="mt-5 text-lg font-extrabold">{title}</h3><p className={`mt-3 text-sm font-semibold leading-6 ${index === 2 ? "text-white/70" : "opacity-75"}`}>{body}</p></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F0C646] px-5 py-12 sm:px-8">
          <div className="mx-auto flex max-w-[76rem] flex-col gap-7 rounded-[2rem] bg-[#FFFDF8] p-8 shadow-[0_20px_55px_rgba(95,69,10,0.12)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">Ready when you are</p><h2 className="display-font mt-3 text-4xl leading-[0.96] tracking-[-0.045em] text-[#3D145F] sm:text-5xl">Let’s see how much you could save.</h2></div>
            <Link className="inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-[#3D145F] px-7 py-4 text-base font-extrabold text-white" href="/#arrange-check">Check how much I could save<ArrowRight className="h-5 w-5" /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
