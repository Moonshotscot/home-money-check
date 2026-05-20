import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { mainNavigation, mobileNavigation } from "@/lib/site-pages";

export function SiteHeader() {
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
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              className="rounded-full px-2.5 py-2 text-xs font-extrabold text-[#F7F0E8]/78 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/12 hover:text-white xl:px-3 xl:text-[0.8rem]"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            className="hidden transform-gpu rounded-full bg-[#FDCA55] px-5 py-3 text-sm font-black text-[#4F247D] shadow-[0_12px_32px_rgba(44,31,61,0.22)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#FFD978] hover:shadow-[0_18px_42px_rgba(44,31,61,0.24)] md:block"
            href="/start-my-check"
          >
            Start my check
          </Link>
          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full bg-white/12 text-[#F7F0E8] [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </summary>
            <div className="absolute right-0 top-14 w-[min(18rem,calc(100vw-2rem))] rounded-[1.5rem] bg-[#F7F0E8] p-3 text-[#2C1F3D] shadow-[0_24px_70px_rgba(44,31,61,0.25)]">
              {mobileNavigation.map((item) => (
                <Link
                  key={item.href}
                  className="block rounded-full px-4 py-2.5 text-sm font-black transition hover:bg-[#EADFFD]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
