import Link from "next/link";
import { ArrowRight, Check, Gift, Handshake, HeartHandshake, LineChart, QrCode, ShieldCheck, Sparkles, Users, type LucideIcon } from "lucide-react";
import { DistributionEnquiryForm } from "@/components/home/DistributionEnquiryForm";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

type DistributionKind = "staff" | "introducer" | "partner";

type Card = { title: string; body: string; icon: LucideIcon };

type DistributionConfig = {
  kind: DistributionKind;
  eyebrow: string;
  title: string;
  introduction: string;
  promise: string;
  heroPanelLabel: string;
  heroPanelTitle: string;
  heroPanelItems: string[];
  heroPanelStyle: string;
  heroPanelText: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionIntroduction: string;
  cards: Card[];
  steps: Array<{ title: string; body: string }>;
  formEyebrow: string;
  formTitle: string;
  formCopy: string;
  customerHref: string;
  customerLabel: string;
};

const configs: Record<DistributionKind, DistributionConfig> = {
  staff: {
    kind: "staff",
    eyebrow: "Your Staff’s Bills Check",
    title: "Give your staff a benefit that can save them money.",
    introduction: "Home Money Check gives every member of your team a direct route to a free gas, electricity and broadband bills check.",
    promise: "Free for your workplace. Free for your staff.",
    heroPanelLabel: "What your staff get",
    heroPanelTitle: "A free check of the bills they pay every month.",
    heroPanelItems: ["Gas, electricity and broadband checked", "A direct conversation with Home Money Check", "Their household details stay private", "Every saving explained"],
    heroPanelStyle: "bg-[#F0C646] text-[#33210A]",
    heroPanelText: "text-[#3D145F]",
    sectionEyebrow: "Help your staff save",
    sectionTitle: "Give your team expert help with household bills.",
    sectionIntroduction: "Home Money Check speaks with each person about their gas, electricity and broadband, builds their quote and explains every saving. We run the service and give you everything you need to share it with your staff.",
    cards: [
      { title: "Free to offer", body: "There is no charge to give your staff access to Home Money Check.", icon: Gift },
      { title: "Personal help for every employee", body: "Each member of staff speaks directly with Home Money Check and their household details stay private.", icon: ShieldCheck },
      { title: "Everything ready to share", body: "We give you a dedicated link, QR code and wording for email, your intranet or staff messages.", icon: QrCode },
      { title: "See how many people use it", body: "We record visits and enquiries so you can see how many staff members start a check.", icon: LineChart },
    ],
    steps: [
      { title: "Tell us about your team", body: "Let us know how many people you employ and how you normally communicate with them." },
      { title: "We prepare everything", body: "We give you the employee page, link, QR code and wording to share." },
      { title: "Your staff start their checks", body: "Each employee chooses what they want checked and speaks directly with Home Money Check." },
    ],
    formEyebrow: "Bring it to your workplace",
    formTitle: "Help your staff save money.",
    formCopy: "Tell us about your organisation and we’ll show you how to give your team access to Home Money Check.",
    customerHref: "/staff-bills-check/employee",
    customerLabel: "View the employee page",
  },
  introducer: {
    kind: "introducer",
    eyebrow: "For Your Clients",
    title: "Help your clients save money on household bills.",
    introduction: "Give your clients a direct route to a free gas, electricity and broadband check. Home Money Check speaks with them, builds their quote and explains every saving.",
    promise: "You make the introduction. Home Money Check does the bills check.",
    heroPanelLabel: "What your clients get",
    heroPanelTitle: "A free check of gas, electricity and broadband.",
    heroPanelItems: ["A page you can send directly to clients", "A conversation about what they pay now", "A new household bills quote", "Every saving explained"],
    heroPanelStyle: "bg-[#273468] text-white",
    heroPanelText: "text-white",
    sectionEyebrow: "Another way to help",
    sectionTitle: "Give your clients another way to save money.",
    sectionIntroduction: "Your clients already pay for gas, electricity and broadband. You can introduce them to Home Money Check and give them expert help to see whether those bills could cost less.",
    cards: [
      { title: "Help with bills they already pay", body: "Your clients can check gas, electricity and broadband and see where they could save.", icon: HeartHandshake },
      { title: "We do the bills check", body: "Home Money Check contacts the client, builds the quote and talks through the result.", icon: Sparkles },
      { title: "Use your own client link", body: "You receive a dedicated link that records every introduction from your business.", icon: LineChart },
      { title: "Know what happened", body: "Each enquiry keeps your introduction attached so the source is clear from the start.", icon: Handshake },
    ],
    steps: [
      { title: "Tell us about your clients", body: "Let us know what you do and when you want to introduce Home Money Check." },
      { title: "We set up your client page", body: "You receive a dedicated page and link to send directly to clients." },
      { title: "Your clients start their check", body: "They choose the bills they want checked and Home Money Check contacts them directly." },
    ],
    formEyebrow: "Offer Home Money Check to your clients",
    formTitle: "Help your clients save money.",
    formCopy: "Tell us about your business and the clients you help. We’ll show you how the introductions work.",
    customerHref: "/for-your-clients/client",
    customerLabel: "View the client page",
  },
  partner: {
    kind: "partner",
    eyebrow: "Partner-specific HMC pages",
    title: "Give your audience their own way to start a Home Money Check.",
    introduction: "We build a page you can share with your customers, contacts or followers. It explains the household bills check and records every enquiry from your link.",
    promise: "You share the page. We check the bills and record every enquiry.",
    heroPanelLabel: "What your page includes",
    heroPanelTitle: "A clear page for gas, electricity and broadband.",
    heroPanelItems: ["Your name and introduction", "Home Money Check explained clearly", "Your own link and QR code", "Every enquiry recorded against your page"],
    heroPanelStyle: "bg-[#3D145F] text-white",
    heroPanelText: "text-white",
    sectionEyebrow: "Your Home Money Check page",
    sectionTitle: "Give people one clear place to start their check.",
    sectionIntroduction: "Your page tells people what Home Money Check will do, lets them choose gas, electricity or broadband and sends each enquiry to us with your introduction recorded.",
    cards: [
      { title: "Introduce it in your own words", body: "Use your name, an approved image and a short message for the people you want to reach.", icon: Users },
      { title: "Lead with saving money", body: "The page explains the bills check and keeps the next step clear from start to finish.", icon: Check },
      { title: "Share your link anywhere", body: "Use your link or QR code on social media, in messages, by email or in printed material.", icon: QrCode },
      { title: "Record every enquiry", body: "Every enquiry from your page is recorded against your partner link.", icon: LineChart },
    ],
    steps: [
      { title: "Tell us who you want to reach", body: "We agree who the page is for and what you want to say to them." },
      { title: "We build your page", body: "Home Money Check creates the page, your tracking link and a QR code to share." },
      { title: "Start sending people to it", body: "They choose what they want checked and we record each enquiry against your page." },
    ],
    formEyebrow: "Ask about your own HMC page",
    formTitle: "Give your audience a way to save money.",
    formCopy: "Tell us what you do and who you want to reach. We’ll show you what your Home Money Check page could include.",
    customerHref: "/partner-bills-check/start",
    customerLabel: "View the customer page",
  },
};

export function DistributionPage({ kind }: { kind: DistributionKind }) {
  const page = configs[kind];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFDF8] text-[#261B2E]">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden px-5 py-14 sm:px-8 lg:py-24">
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_85%_30%,rgba(106,44,147,0.15),transparent_30%),linear-gradient(115deg,#FFF9E9_0%,#FFFDF8_52%,#F1E8F6_100%)]" />
          <div className="mx-auto grid max-w-[86rem] items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">{page.eyebrow}</p>
              <h1 className="display-font mt-6 max-w-[12ch] text-6xl leading-[0.9] tracking-[-0.055em] text-[#3D145F] sm:text-7xl lg:text-[5.35rem]">{page.title}</h1>
              <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-[#5D5062] sm:text-xl sm:leading-9">{page.introduction}</p>
              <p className="mt-6 max-w-xl border-l-4 border-[#F0C646] pl-5 text-lg font-extrabold leading-7 text-[#3D145F]">{page.promise}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#22C86B] px-7 py-4 text-base font-extrabold text-[#12371F] transition hover:-translate-y-0.5 hover:bg-[#2DD977]" href="#start-conversation">Start the conversation<ArrowRight className="h-5 w-5" /></Link>
                <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#F0C646] px-7 py-4 text-base font-extrabold text-[#3D145F]" href={page.customerHref}>{page.customerLabel}<ArrowRight className="h-5 w-5" /></Link>
              </div>
            </div>
            <div className={`relative overflow-hidden rounded-[2.5rem] p-8 shadow-[0_34px_85px_rgba(15,5,23,0.22)] sm:p-11 ${page.heroPanelStyle}`}>
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[55px] border-white/10" />
              <p className="relative text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">{page.heroPanelLabel}</p>
              <h2 className={`display-font relative mt-5 max-w-[11ch] text-5xl leading-[0.94] tracking-[-0.05em] ${page.heroPanelText}`}>{page.heroPanelTitle}</h2>
              <div className="relative mt-8 grid gap-3">
                {page.heroPanelItems.map((item) => <p className="flex items-center gap-3 rounded-[1.1rem] bg-white/12 p-4 text-sm font-extrabold leading-6 ring-1 ring-inset ring-white/14" key={item}><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22C86B] text-[#12371F]"><Check className="h-4 w-4" strokeWidth={3} /></span>{item}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E8DFC9] bg-white px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-[86rem]">
            <div className="max-w-4xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6A2C93]">{page.sectionEyebrow}</p>
              <h2 className="display-font mt-5 max-w-[13ch] text-5xl leading-[0.94] tracking-[-0.05em] text-[#3D145F] sm:text-6xl">{page.sectionTitle}</h2>
              <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-[#625667]">{page.sectionIntroduction}</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {page.cards.map(({ title, body, icon: Icon }, index) => <article className={`rounded-[1.8rem] p-7 shadow-[0_20px_55px_rgba(61,20,95,0.08)] ${index === 1 ? "bg-[#F0C646] text-[#33210A]" : index === 2 ? "bg-[#273468] text-white" : "bg-[#F5EEF8] text-[#34273B]"}`} key={title}><span className={`flex h-12 w-12 items-center justify-center rounded-[1rem] ${index === 2 ? "bg-[#22C86B] text-[#12371F]" : "bg-white text-[#6A2C93]"}`}><Icon className="h-6 w-6" strokeWidth={2.1} /></span><h3 className="mt-7 text-xl font-extrabold tracking-[-0.03em]">{title}</h3><p className={`mt-4 text-sm font-semibold leading-6 ${index === 2 ? "text-white/70" : "opacity-75"}`}>{body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#35104F] px-5 py-16 text-white sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[86rem]">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">How it works</p>
            <h2 className="display-font mt-5 max-w-[13ch] text-5xl leading-[0.94] tracking-[-0.05em] text-white sm:text-6xl">Three steps to get started.</h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {page.steps.map((step, index) => <article className="border-t border-white/18 pt-6" key={step.title}><span className={`flex h-14 w-14 items-center justify-center rounded-[1rem] text-sm font-extrabold ${index === 1 ? "bg-[#22C86B] text-[#12371F]" : "bg-[#F0C646] text-[#33210A]"}`}>0{index + 1}</span><h3 className="mt-7 text-2xl font-extrabold tracking-[-0.035em]">{step.title}</h3><p className="mt-4 max-w-sm text-base font-medium leading-7 text-white/68">{step.body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-[#273468] px-5 py-16 text-white sm:px-8 lg:py-20" id="start-conversation">
          <div className="mx-auto grid max-w-[76rem] items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F0C646]">{page.formEyebrow}</p>
              <h2 className="display-font mt-5 max-w-[11ch] text-5xl leading-[0.93] tracking-[-0.05em] sm:text-6xl">{page.formTitle}</h2>
              <p className="mt-7 max-w-md text-lg font-medium leading-8 text-white/72">{page.formCopy}</p>
            </div>
            <DistributionEnquiryForm kind={kind} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
