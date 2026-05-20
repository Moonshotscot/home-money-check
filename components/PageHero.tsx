import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  accentColour: string;
  status?: "live" | "comingSoon";
};

export function PageHero({ eyebrow, title, description, accentColour, status = "live" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#5F2D8C] px-5 pb-16 pt-12 text-[#F7F0E8] md:px-8 md:pb-20 md:pt-16">
      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#8E52C4]/40 blur-3xl" />
      <div className="absolute bottom-4 left-[18%] h-44 w-44 rotate-[14deg] rounded-[3rem] bg-[#FDCA55]/20 blur-2xl" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_0.6fr] lg:items-end">
        <div>
          <p
            className="mb-5 w-fit rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]"
            style={{ backgroundColor: accentColour }}
          >
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.075em] md:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-[#F7F0E8]/78 md:text-2xl md:leading-9">
            {description}
          </p>
        </div>
        <div className="relative min-h-[220px] overflow-hidden rounded-[2.5rem] bg-[#F7F0E8] p-7 text-[#2C1F3D] shadow-[0_28px_80px_rgba(44,31,61,0.25)]">
          <div
            className="absolute -right-8 -top-8 h-24 w-24 rotate-[12deg] rounded-[1.5rem]"
            style={{ backgroundColor: accentColour }}
          />
          <p className="relative text-sm font-black uppercase tracking-[0.14em] text-[#5F2D8C]/70">
            {status === "comingSoon" ? "Almost ready" : "Next step"}
          </p>
          <p className="relative mt-10 text-3xl font-black leading-[1] tracking-[-0.055em]">
            {status === "comingSoon"
              ? "Leave your details and we can keep this route warm for later."
              : "Start with a few details and a clear check route."}
          </p>
          <Link
            className="relative mt-8 inline-flex transform-gpu items-center gap-2 rounded-full bg-[#6A35A0] px-6 py-3 text-sm font-black text-[#F7F0E8] shadow-[0_18px_45px_rgba(106,53,160,0.25)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
            href="/start-my-check"
          >
            Start my check
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.7} />
          </Link>
        </div>
      </div>
    </section>
  );
}
