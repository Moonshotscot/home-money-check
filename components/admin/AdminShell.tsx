"use client";

import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type AdminShellProps = {
  children: React.ReactNode;
};

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/enquiries", label: "Enquiries" },
];

export function AdminShell({ children }: AdminShellProps) {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#F7F0E8] text-[#2C1F3D]">
      <header className="bg-[#5F2D8C] px-5 py-5 text-[#F7F0E8] md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[1.75rem] border border-white/12 bg-white/10 p-4 shadow-[0_18px_70px_rgba(44,31,61,0.22)] md:flex-row md:items-center md:justify-between">
          <Link href="/admin" className="flex items-center">
            <Image
              alt="Home Money Check"
              className="h-14 w-auto object-contain"
              height={88}
              priority
              src="/brand/hmc-logo-full-transparent.png"
              width={248}
            />
          </Link>
          <nav className="flex flex-wrap items-center gap-2">
            {links.map((link) => (
              <Link
                className="rounded-full px-4 py-2 text-sm font-black text-[#F7F0E8]/80 transition-all duration-300 hover:bg-white/12 hover:text-white"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="inline-flex items-center gap-2 rounded-full bg-[#FDCA55] px-4 py-2 text-sm font-black text-[#4F247D] transition-all duration-300 hover:-translate-y-0.5"
              onClick={handleLogout}
              type="button"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main className="px-5 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
