"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, House, Inbox, LogOut, Mail } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type AdminShellProps = {
  children: React.ReactNode;
};

const links = [
  { href: "/admin", icon: House, label: "Overview" },
  { href: "/admin/enquiries", icon: Inbox, label: "Lead inbox" },
  { href: "/admin/updates", icon: Mail, label: "Mailing list" },
];

export function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#35104F]">
      <header className="border-b border-[#F0C646]/35 bg-[#3D145F] px-4 py-4 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link aria-label="Home Money Check admin overview" href="/admin">
              <Image
                alt="Home Money Check"
                className="h-14 w-auto object-contain md:h-16"
                height={112}
                priority
                src="/brand/hmc-logo-full-transparent.png"
                width={316}
              />
            </Link>
            <span className="rounded-full border border-[#F0C646]/45 px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#F0C646] lg:hidden">
              Back office
            </span>
          </div>

          <nav aria-label="Admin navigation" className="flex flex-wrap items-center gap-2">
            {links.map((link) => {
              const Icon = link.icon;
              const active =
                link.href === "/admin" ? pathname === link.href : pathname.startsWith(link.href);

              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-black transition-colors ${
                    active
                      ? "bg-[#F0C646] text-[#35104F]"
                      : "text-white/82 hover:bg-white/10 hover:text-white"
                  }`}
                  href={link.href}
                  key={link.href}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-black text-white transition-colors hover:bg-white/10"
              href="/"
              rel="noreferrer"
              target="_blank"
            >
              <ExternalLink className="h-4 w-4" />
              View website
            </Link>
            <button
              className="inline-flex items-center gap-2 rounded-full bg-[#22C86B] px-4 py-2.5 text-sm font-black text-[#143526] transition-transform hover:-translate-y-0.5"
              onClick={handleLogout}
              type="button"
            >
              <LogOut className="h-4 w-4" />
              Log out
            </button>
          </nav>
        </div>
      </header>
      <main className="px-4 py-7 md:px-8 md:py-10">
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
