"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { desktopNavigation, mobileMenuGroups } from "@/lib/site-pages";

function isActivePath(pathname: string, href: string, match?: string[]) {
  if (pathname === href) {
    return true;
  }

  return Boolean(match?.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)));
}

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
      {desktopNavigation.map((item) => {
        const active = isActivePath(pathname, item.href, item.active);
        const hasChildren = Boolean(item.children?.length);

        return (
          <div className="group relative" key={item.label}>
            {hasChildren ? (
              <button
                className={`block rounded-full px-2.5 py-2 text-left text-xs font-extrabold transition-all duration-300 ease-out xl:px-3 xl:text-[0.8rem] ${
                  active
                    ? "bg-[#F7F0E8]/18 text-white"
                    : "text-[#F7F0E8]/78 hover:bg-white/12 hover:text-white focus-visible:bg-white/12 focus-visible:text-white"
                }`}
                type="button"
              >
                {item.label}
              </button>
            ) : (
              <Link
                className={`block rounded-full px-2.5 py-2 text-xs font-extrabold transition-all duration-300 ease-out xl:px-3 xl:text-[0.8rem] ${
                active
                  ? "bg-[#F7F0E8]/18 text-white"
                  : "text-[#F7F0E8]/78 hover:bg-white/12 hover:text-white focus-visible:bg-white/12 focus-visible:text-white"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            )}
            {hasChildren ? (
              <div className="invisible absolute left-0 top-full z-40 min-w-64 translate-y-2 pt-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="rounded-[1.5rem] bg-[#F7F0E8] p-3 text-[#2C1F3D] shadow-[0_24px_70px_rgba(44,31,61,0.25)] ring-1 ring-white/60">
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      className="block rounded-full px-4 py-2.5 text-sm font-black transition-colors duration-300 ease-out hover:bg-[#EADFFD] focus-visible:bg-[#EADFFD]"
                      href={child.href}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-[#F7F0E8] transition-colors duration-300 ease-out hover:bg-white/18"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open ? (
        <div className="absolute right-0 top-14 z-50 max-h-[min(34rem,calc(100vh-7rem))] w-[min(21rem,calc(100vw-2rem))] overflow-y-auto rounded-[1.5rem] bg-[#F7F0E8] p-3 text-[#2C1F3D] shadow-[0_24px_70px_rgba(44,31,61,0.25)] ring-1 ring-white/60">
          {mobileMenuGroups.map((group) => (
            <div className="border-b border-[#EADFFD] py-3 last:border-b-0" key={group.label}>
              {group.children?.length ? (
                <p className="block rounded-full px-4 py-2 text-sm font-black text-[#5F2D8C]">
                  {group.label}
                </p>
              ) : (
                <Link
                  className="block rounded-full px-4 py-2 text-sm font-black text-[#5F2D8C] transition-colors duration-300 ease-out hover:bg-[#EADFFD]"
                  href={group.href}
                  onClick={() => setOpen(false)}
                >
                  {group.label}
                </Link>
              )}
              {group.children?.length ? (
                <div className="mt-1 grid gap-1 pl-3">
                  {group.children.map((child) => (
                    <Link
                      className="block rounded-full px-4 py-2 text-sm font-extrabold text-[#2C1F3D]/78 transition-colors duration-300 ease-out hover:bg-white"
                      href={child.href}
                      key={child.href}
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
