"use client";

import Link from "next/link";
import { ArrowUpRight, ClipboardList } from "lucide-react";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { AdminShell } from "@/components/admin/AdminShell";

const cards = [
  {
    href: "/admin/enquiries",
    label: "Enquiries",
    note: "View, filter and update lead enquiries.",
    live: true,
  },
  {
    href: "/admin",
    label: "Campaign panel",
    note: "Coming in the next build stage.",
    live: false,
  },
  {
    href: "/admin",
    label: "Noticeboard",
    note: "Coming in the next build stage.",
    live: false,
  },
];

export function AdminDashboard() {
  return (
    <AdminGuard>
      {() => (
        <AdminShell>
          <section className="rounded-[2.75rem] bg-white p-8 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-10">
            <p className="mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
              Back office
            </p>
            <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-6xl">
              Home Money Check admin
            </h1>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {cards.map((card) => {
                const inner = (
                  <div className="flex h-full flex-col justify-between rounded-[2rem] bg-[#F7F0E8] p-6 shadow-[0_16px_45px_rgba(44,31,61,0.08)] transition-all duration-300 hover:-translate-y-1">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FDCA55] text-[#4F247D]">
                      <ClipboardList className="h-5 w-5" />
                    </span>
                    <div className="mt-10">
                      <h2 className="text-2xl font-black tracking-[-0.05em]">{card.label}</h2>
                      <p className="mt-3 text-sm font-bold leading-6 text-[#2C1F3D]/70">{card.note}</p>
                    </div>
                    {card.live ? (
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#5F2D8C]">
                        Open
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    ) : null}
                  </div>
                );

                return card.live ? (
                  <Link href={card.href} key={card.label}>
                    {inner}
                  </Link>
                ) : (
                  <div key={card.label}>{inner}</div>
                );
              })}
            </div>
          </section>
        </AdminShell>
      )}
    </AdminGuard>
  );
}
