"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ClipboardList } from "lucide-react";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { AdminShell } from "@/components/admin/AdminShell";
import { supabase } from "@/lib/supabaseClient";

type RecentEnquiry = {
  created_at: string;
  id: string;
  name: string | null;
  selected_check: string | null;
  source_page: string | null;
  status: string | null;
};

type EnquiryCheckRow = {
  check_label: string | null;
  enquiry_id?: string;
  status: string | null;
};

const cards = [
  {
    href: "/admin/enquiries",
    label: "Enquiries",
    note: "View, filter and update lead enquiries.",
    live: true,
  },
  {
    href: "/admin/updates",
    label: "Updates",
    note: "View Home Money Check update signups.",
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
];

export function AdminDashboard() {
  const [summary, setSummary] = useState({
    campaignLive: null as boolean | null,
    checksByType: [] as { label: string; count: number }[],
    checksNeedingAction: null as number | null,
    convertedChecks: null as number | null,
    openChecks: null as number | null,
    liveNoticeboardItems: null as number | null,
    newEnquiries: null as number | null,
    recentActivity: [] as (RecentEnquiry & { requestedChecks: string[] })[],
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
        openChecks,
        convertedChecks,
        checksNeedingAction,
        checkRows,
        latestEnquiries,
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
          .from("enquiry_checks")
          .select("id", { count: "exact", head: true })
          .in("status", ["New", "Contacted", "Quoted", "In progress"]),
        supabase
          .from("enquiry_checks")
          .select("id", { count: "exact", head: true })
          .eq("status", "Converted"),
        supabase
          .from("enquiry_checks")
          .select("id", { count: "exact", head: true })
          .in("status", ["New", "In progress"]),
        supabase.from("enquiry_checks").select("check_label,status"),
        supabase
          .from("enquiries")
          .select("id,created_at,name,selected_check,source_page,status")
          .order("created_at", { ascending: false })
          .limit(5),
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

      const latestIds = ((latestEnquiries.data || []) as RecentEnquiry[]).map(
        (enquiry) => enquiry.id,
      );
      const latestChecks =
        latestIds.length > 0
          ? await supabase
              .from("enquiry_checks")
              .select("enquiry_id,check_label,status")
              .in("enquiry_id", latestIds)
          : { data: [] };
      const checksByEnquiry = new Map<string, string[]>();

      ((latestChecks.data || []) as EnquiryCheckRow[]).forEach((check) => {
        if (!check.enquiry_id || !check.check_label) {
          return;
        }

        checksByEnquiry.set(check.enquiry_id, [
          ...(checksByEnquiry.get(check.enquiry_id) || []),
          check.check_label,
        ]);
      });

      const checkTypeCounts = new Map<string, number>();

      ((checkRows.data || []) as EnquiryCheckRow[]).forEach((check) => {
        const label = check.check_label?.trim();

        if (!label) {
          return;
        }

        checkTypeCounts.set(label, (checkTypeCounts.get(label) || 0) + 1);
      });

      setSummary({
        campaignLive: campaign.data?.is_live ?? null,
        checksByType: Array.from(checkTypeCounts.entries())
          .map(([label, count]) => ({ label, count }))
          .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label)),
        checksNeedingAction: checksNeedingAction.count,
        convertedChecks: convertedChecks.count,
        openChecks: openChecks.count,
        liveNoticeboardItems: liveNoticeboardItems.count,
        newEnquiries: newEnquiries.count,
        recentActivity: ((latestEnquiries.data || []) as RecentEnquiry[]).map((enquiry) => ({
          ...enquiry,
          requestedChecks:
            checksByEnquiry.get(enquiry.id) ||
            (enquiry.selected_check ? [enquiry.selected_check] : []),
        })),
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

            <div className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
              {[
                ["Total enquiries", summary.totalEnquiries],
                ["New enquiries", summary.newEnquiries],
                ["Open checks", summary.openChecks],
                ["Converted checks", summary.convertedChecks],
                ["Checks needing action", summary.checksNeedingAction],
                ["Recent enquiries", summary.recentEnquiries],
              ].map(([label, value]) => (
                <div
                  className="rounded-[1.5rem] bg-[#F7F0E8] p-5 shadow-[0_12px_34px_rgba(44,31,61,0.07)]"
                  key={label}
                >
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-[#5F2D8C]/70">
                    {label}
                  </p>
                  <p className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#2C1F3D]">
                    {value ?? "-"}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
              {cards.map((card) => {
                const inner = (
                  <div className="flex h-full flex-col justify-between rounded-[2rem] bg-[#F7F0E8] p-6 shadow-[0_16px_45px_rgba(44,31,61,0.08)] transition-all duration-300 hover:-translate-y-1">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FDCA55] text-[#4F247D]">
                      <ClipboardList className="h-5 w-5" />
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
                    className="h-full"
                    href={card.href}
                    key={card.label}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={card.label}>{inner}</div>
                );
              })}
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <section className="rounded-[2rem] bg-[#F7F0E8] p-6 shadow-[0_16px_45px_rgba(44,31,61,0.08)]">
                <h2 className="text-2xl font-black tracking-[-0.05em]">Checks by type</h2>
                {summary.checksByType.length > 0 ? (
                  <dl className="mt-5 grid gap-2">
                    {summary.checksByType.map((item) => (
                      <div
                        className="flex items-center justify-between gap-3 rounded-full bg-white px-4 py-2 text-sm font-black text-[#5F2D8C]"
                        key={item.label}
                      >
                        <dt>{item.label}</dt>
                        <dd>{item.count}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="mt-5 rounded-[1.5rem] bg-white p-4 text-sm font-bold leading-6 text-[#5F2D8C]">
                    No requested checks yet.
                  </p>
                )}
              </section>

              <section className="rounded-[2rem] bg-[#F7F0E8] p-6 shadow-[0_16px_45px_rgba(44,31,61,0.08)]">
                <h2 className="text-2xl font-black tracking-[-0.05em]">Recent activity</h2>
                {summary.recentActivity.length > 0 ? (
                  <div className="mt-5 grid gap-3">
                    {summary.recentActivity.map((enquiry) => (
                      <article className="rounded-[1.5rem] bg-white p-4" key={enquiry.id}>
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-lg font-black tracking-[-0.035em]">
                              {enquiry.name || "Unnamed enquiry"}
                            </h3>
                            <p className="mt-1 text-xs font-black uppercase tracking-[0.1em] text-[#5F2D8C]/65">
                              {new Date(enquiry.created_at).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                          <span className="w-fit rounded-full bg-[#EADFFD] px-3 py-1 text-xs font-black text-[#5F2D8C]">
                            {enquiry.status || "New"}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {enquiry.requestedChecks.length > 0 ? (
                            enquiry.requestedChecks.map((check) => (
                              <span
                                className="rounded-full bg-[#F7F0E8] px-3 py-1 text-xs font-black text-[#5F2D8C]"
                                key={check}
                              >
                                {check}
                              </span>
                            ))
                          ) : (
                            <span className="text-xs font-black text-[#5F2D8C]/65">
                              No check supplied
                            </span>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 rounded-[1.5rem] bg-white p-4 text-sm font-bold leading-6 text-[#5F2D8C]">
                    No recent enquiries yet.
                  </p>
                )}
              </section>
            </div>
          </section>
        </AdminShell>
      )}
    </AdminGuard>
  );
}
