"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ClipboardList, ExternalLink } from "lucide-react";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { AdminShell } from "@/components/admin/AdminShell";
import { supabase } from "@/lib/supabaseClient";

const cards = [
  {
    href: "/admin/enquiries",
    label: "Enquiries",
    note: "View, filter and update lead enquiries.",
    live: true,
  },
  {
    href: "/admin/campaign",
    label: "Campaign panel",
    note: "Edit the homepage featured campaign panel.",
    live: true,
  },
  {
    href: "/admin/noticeboard",
    label: "Noticeboard",
    note: "Manage homepage noticeboard items.",
    live: true,
  },
  {
    href: "/",
    label: "View site",
    note: "Open the public Home Money Check site.",
    live: true,
    external: true,
  },
];

export function AdminDashboard() {
  const [summary, setSummary] = useState({
    campaignLive: null as boolean | null,
    liveNoticeboardItems: null as number | null,
    newEnquiries: null as number | null,
    recentEnquiries: null as number | null,
    totalEnquiries: null as number | null,
  });

  useEffect(() => {
    async function loadSummary() {
      const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

      const [
        totalEnquiries,
        newEnquiries,
        recentEnquiries,
        campaign,
        liveNoticeboardItems,
      ] = await Promise.all([
        supabase.from("enquiries").select("id", { count: "exact", head: true }),
        supabase.from("enquiries").select("id", { count: "exact", head: true }).eq("status", "New"),
        supabase
          .from("enquiries")
          .select("id", { count: "exact", head: true })
          .gte("created_at", sevenDaysAgo),
        supabase
          .from("campaign_panel")
          .select("is_live")
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle(),
        supabase
          .from("noticeboard_items")
          .select("id", { count: "exact", head: true })
          .eq("is_live", true),
      ]);

      setSummary({
        campaignLive: campaign.data?.is_live ?? null,
        liveNoticeboardItems: liveNoticeboardItems.count,
        newEnquiries: newEnquiries.count,
        recentEnquiries: recentEnquiries.count,
        totalEnquiries: totalEnquiries.count,
      });
    }

    loadSummary();
  }, []);

  return (
    <AdminGuard>
      {() => (
        <AdminShell>
          <section className="rounded-[2.75rem] bg-white p-8 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-10">
            <p className="mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
              Admin
            </p>
            <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-6xl">
              Home Money Check admin
            </h1>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {cards.map((card) => {
                const inner = (
                  <div className="flex h-full flex-col justify-between rounded-[2rem] bg-[#F7F0E8] p-6 shadow-[0_16px_45px_rgba(44,31,61,0.08)] transition-all duration-300 hover:-translate-y-1">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FDCA55] text-[#4F247D]">
                      {card.external ? <ExternalLink className="h-5 w-5" /> : <ClipboardList className="h-5 w-5" />}
                    </span>
                    <div className="mt-10">
                      <h2 className="text-2xl font-black tracking-[-0.05em]">{card.label}</h2>
                      <p className="mt-3 text-sm font-bold leading-6 text-[#2C1F3D]/70">{card.note}</p>
                      {card.label === "Enquiries" ? (
                        <dl className="mt-5 grid gap-2 text-xs font-black text-[#5F2D8C]">
                          <div className="flex justify-between gap-3 rounded-full bg-white px-3 py-2">
                            <dt>New</dt>
                            <dd>{summary.newEnquiries ?? "-"}</dd>
                          </div>
                          <div className="flex justify-between gap-3 rounded-full bg-white px-3 py-2">
                            <dt>Last 7 days</dt>
                            <dd>{summary.recentEnquiries ?? "-"}</dd>
                          </div>
                          <div className="flex justify-between gap-3 rounded-full bg-white px-3 py-2">
                            <dt>Total</dt>
                            <dd>{summary.totalEnquiries ?? "-"}</dd>
                          </div>
                        </dl>
                      ) : null}
                      {card.label === "Campaign panel" ? (
                        <p className="mt-5 w-fit rounded-full bg-white px-3 py-2 text-xs font-black text-[#5F2D8C]">
                          {summary.campaignLive === null
                            ? "Status unavailable"
                            : summary.campaignLive
                              ? "Currently live"
                              : "Currently hidden"}
                        </p>
                      ) : null}
                      {card.label === "Noticeboard" ? (
                        <p className="mt-5 w-fit rounded-full bg-white px-3 py-2 text-xs font-black text-[#5F2D8C]">
                          {summary.liveNoticeboardItems ?? "-"} live item
                          {summary.liveNoticeboardItems === 1 ? "" : "s"}
                        </p>
                      ) : null}
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
                  <Link
                    href={card.href}
                    key={card.label}
                    rel={card.external ? "noreferrer" : undefined}
                    target={card.external ? "_blank" : undefined}
                  >
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
