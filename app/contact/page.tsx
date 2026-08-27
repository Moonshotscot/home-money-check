import type { Metadata } from "next";
import { Check, MessageCircle, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/home/ContactForm";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Home Money Check",
  description: "Contact Home Money Check about your household bills, the £20K Giveaway or building a second income.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFDF8] text-[#261B2E]">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[#35104F] px-5 pb-14 pt-9 text-white sm:px-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-11">
          <div className="pointer-events-none absolute -right-36 -top-40 h-[38rem] w-[38rem] rounded-full border-[115px] border-white/[0.035]" />
          <div className="relative mx-auto grid max-w-[86rem] items-start gap-11 lg:grid-cols-[0.76fr_1.24fr] lg:gap-14">
            <div className="min-w-0 lg:sticky lg:top-28">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-[#22C86B] text-[#12371F]"><MessageCircle className="h-7 w-7" strokeWidth={2.2} /></div>
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">Contact Home Money Check</p>
              <h1 className="display-font mt-6 max-w-[11ch] text-[clamp(3.6rem,5.5vw,6.1rem)] leading-[0.88] tracking-[-0.06em]">Let&rsquo;s start the <span className="text-[#F0C646]">conversation.</span></h1>
              <p className="mt-6 max-w-md text-lg font-medium leading-8 text-white/72">Tell us what you would like help with and the best way to reach you.</p>
              <div className="mt-9 space-y-4 border-t border-white/15 pt-6 text-sm font-bold text-white/80">
                {["Household bills", "£20K Giveaway", "Build a Second Income", "General questions"].map((item) => <p className="flex items-center gap-3" key={item}><Check className="h-4 w-4 text-[#28D679]" strokeWidth={3} />{item}</p>)}
              </div>
              <div className="mt-8 flex items-start gap-4 rounded-[1.4rem] bg-white/[0.07] p-5 ring-1 ring-inset ring-white/10"><ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#F0C646]" strokeWidth={2} /><p className="text-sm font-semibold leading-6 text-white/70">We only use your details to respond to your message unless you separately choose to receive updates.</p></div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
