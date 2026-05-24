"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DesktopNavigation, MobileNavigation } from "@/components/SiteNavigation";

export function SiteHeader() {
  const pathname = usePathname();
  const pagesWithoutForms = ["/privacy-policy", "/terms", "/disclaimers"];
  const startHref = pagesWithoutForms.includes(pathname) ? "/#lead-form" : "#lead-form";

  return (
    <header className="relative z-20 bg-[#5F2D8C] px-4 pt-5 md:px-7">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.75rem] border border-white/12 bg-white/10 px-4 py-3 shadow-[0_18px_70px_rgba(44,31,61,0.22)] backdrop-blur-xl md:px-5">
        <Link className="flex items-center" href="/">
          <Image
            src="/brand/hmc-logo-full-transparent.png"
            alt="Home Money Check"
            width={248}
            height={88}
            className="h-14 w-auto object-contain md:h-16"
            priority
          />
        </Link>
        <DesktopNavigation />
        <div className="flex items-center gap-2">
          <Link
            className="hidden transform-gpu rounded-full bg-[#FDCA55] px-5 py-3 text-sm font-black text-[#4F247D] shadow-[0_12px_32px_rgba(44,31,61,0.22)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#FFD978] hover:shadow-[0_18px_42px_rgba(44,31,61,0.24)] md:block"
            href={startHref}
          >
            Start my check
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
