"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { SiteBrand } from "@/components/home/SiteBrand";

const navigation = [
  { href: "/household-bills-check", label: "Household bills" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/build-a-second-income", label: "Build a second income" },
  { href: "/20k-giveaway", label: "£20K Giveaway" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DFC9] bg-[#FFFDF8]/95 px-5 py-2 backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex max-w-[86rem] items-center justify-between gap-6">
        <Link aria-label="Home Money Check homepage" className="shrink-0" href="/">
          <SiteBrand compact />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center xl:flex">
          {navigation.map((item) => (
            <Link
              className="rounded-full px-3 py-3 text-[0.82rem] font-bold text-[#4C3B54] transition hover:bg-[#FFF4CE] hover:text-[#3D145F] xl:px-4 xl:text-sm"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            className="hidden min-h-12 items-center gap-2 whitespace-nowrap rounded-full bg-[#3D145F] px-5 py-3 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#512078] sm:inline-flex"
            href="/#arrange-check"
          >
            Check how much I could save
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3D145F]/18 text-[#3D145F] xl:hidden"
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-5 top-[calc(100%+0.5rem)] rounded-[1.6rem] bg-[#3D145F] p-3 text-white shadow-[0_28px_70px_rgba(61,20,95,0.28)] sm:inset-x-8 xl:hidden"
        >
          {navigation.map((item) => (
            <Link
              className="block rounded-[1rem] px-4 py-3 text-base font-extrabold transition hover:bg-white/10"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="mt-2 flex items-center justify-between rounded-[1rem] bg-[#22C86B] px-4 py-3 text-base font-extrabold text-[#173421]"
            href="/#arrange-check"
            onClick={() => setOpen(false)}
          >
            Check how much I could save
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
