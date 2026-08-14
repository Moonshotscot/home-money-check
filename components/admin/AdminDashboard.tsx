"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Inbox, Mail, Users } from "lucide-react";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { AdminShell } from "@/components/admin/AdminShell";
import { getLeadSourceDetails } from "@/lib/leadSource";
import { supabase } from "@/lib/supabaseClient";

type RecentEnquiry = {
  created_at: string;
  id: string;
  name: string | null;
  selected_check: string | null;
  source_page: string | null;
  status: string | null;
};

type RequestedCheck = {
  check_label: string;
};

const customerPageLinks = [
  { href: "/household-bills-check", label: "Household Bills Check" },
  { href: "/energy", label: "Energy" },
  { href: "/broadband", label: "Broadband" },
  { href: "/20k-giveaway", label: "£20K Giveaway" },
  { href: "/build-a-second-income", label: "Build a Second Income" },
  { href: "/staff-bills-check/employee", label: "Employee bills page" },
  { href: "/for-your-clients/client", label: "Introduced client page" },
  { href: "/partner-bills-check/start", label: "Partner customer page" },
  { href: "/updates", label: "Offers and updates" },
];

export function AdminDashboard() {
  const [summary, setSummary] = useState({
    mailingList: null as number | null,
    newEnquiries: null as number | null,
    recentActivity: [] as RecentEnquiry[],
    recentEnquiries: null as number | null,
    requestedChecks: [] as { count: number; label: string }[],
    sources: [] as { count: number; label: string }[],
    totalEnquiries: null as number | null,
  });

  useEffect(() => {
    async function loadSummary() {
      const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      const [enquiryRows, newEnquiries, recentEnquiries, mailingList, requestedCheckRows] =
        await Promise.all([
        supabase
          .from("enquiries")
          .select("id,created_at,name,selected_check,source_page,status")
          .order("created_at", { ascending: false }),
        supabase.from("enquiries").select("id", { count: "exact", head: true }).eq("status", "New"),
        supabase
          .from("enquiries")
          .select("id", { count: "exact", head: true })
          .gte("created_at", sevenDaysAgo),
        supabase
          .from("update_subscribers")
          .select("id", { count: "exact", head: true }),
        supabase.from("enquiry_checks").select("check_label"),
      ]);

      const enquiries = (enquiryRows.data || []) as RecentEnquiry[];
      const sourceCounts = new Map<string, number>();
      const requestedCheckCounts = new Map<string, number>();

      enquiries.forEach((enquiry) => {
        const source = getLeadSourceDetails(enquiry.source_page);
        const context = source.context[0];
        const label = context ? `${source.label} · ${context}` : source.label;
        sourceCounts.set(label, (sourceCounts.get(label) || 0) + 1);
      });

      ((requestedCheckRows.data || []) as RequestedCheck[]).forEach((check) => {
        if (!check.check_label) {
          return;
        }

        requestedCheckCounts.set(
          check.check_label,
          (requestedCheckCounts.get(check.check_label) || 0) + 1,
        );
      });

      if (requestedCheckCounts.size === 0) {
        enquiries.forEach((enquiry) => {
          if (!enquiry.selected_check) {
            return;
          }

          requestedCheckCounts.set(
            enquiry.selected_check,
            (requestedCheckCounts.get(enquiry.selected_check) || 0) + 1,
          );
        });
      }

      setSummary({
        mailingList: mailingList.count,
        newEnquiries: newEnquiries.count,
        recentActivity: enquiries.slice(0, 5),
        recentEnquiries: recentEnquiries.count,
        requestedChecks: Array.from(requestedCheckCounts.entries())
          .map(([label, count]) => ({ count, label }))
          .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label)),
        sources: Array.from(sourceCounts.entries())
          .map(([label, count]) => ({ count, label }))
          .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
          .slice(0, 8),
        totalEnquiries: enquiries.length,
      });
    }

    loadSummary();
  }, []);

  return (
    <AdminGuard>
      {() => (
        <AdminShell>
          <h1 className="text-3xl font-black tracking-[-0.04em] text-[#3D145F] md:text-4xl">
            Overview
          </h1>

          <section aria-label="Lead summary" className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: Inbox, label: "New leads", value: summary.newEnquiries },
              { icon: ArrowUpRight, label: "Last 7 days", value: summary.recentEnquiries },
              { icon: Users, label: "All HMC leads", value: summary.totalEnquiries },
              { icon: Mail, label: "Mailing list", value: summary.mailingList },
            ].map(({ icon: MetricIcon, label, value }) => {

              return (
                <article
                  className="rounded-[1.75rem] border border-[#3D145F]/10 bg-white p-5 shadow-[0_14px_38px_rgba(61,20,95,0.07)]"
                  key={label}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#3D145F]/65">
                      {label}
                    </p>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0C646] text-[#35104F]">
                      <MetricIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-5 text-4xl font-black tracking-[-0.055em] text-[#35104F]">
                    {value ?? "–"}
                  </p>
                </article>
              );
            })}
          </section>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <section className="rounded-[2rem] border border-[#3D145F]/10 bg-white p-6 shadow-[0_18px_50px_rgba(61,20,95,0.07)] md:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-2xl font-black tracking-[-0.035em] text-[#3D145F]">
                  Recent activity
                </h2>
                <Link className="text-sm font-black text-[#3D145F] underline decoration-[#F0C646] decoration-2 underline-offset-4" href="/admin/enquiries">
                  View all leads
                </Link>
              </div>
              {summary.recentActivity.length > 0 ? (
                <div className="mt-6 grid gap-3">
                  {summary.recentActivity.map((enquiry) => {
                    const source = getLeadSourceDetails(enquiry.source_page);

                    return (
                      <article className="grid gap-3 rounded-[1.4rem] bg-[#FFF8E8] p-4 sm:grid-cols-[1fr_auto] sm:items-center" key={enquiry.id}>
                        <div>
                          <h3 className="font-black text-[#35104F]">{enquiry.name || "Unnamed enquiry"}</h3>
                          <p className="mt-1 text-sm font-semibold text-[#35104F]/65">
                            {enquiry.selected_check || "No check supplied"} · {source.label}
                          </p>
                          {source.context.length > 0 ? (
                            <p className="mt-1 text-xs font-black text-[#7A2E9A]">{source.context.join(" · ")}</p>
                          ) : null}
                        </div>
                        <span className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#3D145F]">
                          {enquiry.status || "New"}
                        </span>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <p className="mt-6 rounded-[1.5rem] bg-[#FFF8E8] p-5 text-sm font-bold text-[#3D145F]">
                  No leads yet.
                </p>
              )}
            </section>

            <div className="grid gap-6">
              <SummaryList heading="Checks requested" items={summary.requestedChecks} />
              <SummaryList heading="Lead sources" items={summary.sources} />
            </div>
          </div>

          <section className="mt-6 rounded-[2rem] border border-[#3D145F]/10 bg-white p-6 shadow-[0_18px_50px_rgba(61,20,95,0.07)] md:p-8">
            <h2 className="text-2xl font-black tracking-[-0.035em] text-[#3D145F]">
              Customer pages
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {customerPageLinks.map((item) => (
                  <Link
                    className="group flex items-center justify-between gap-3 rounded-[1.1rem] bg-[#FFF8E8] px-4 py-3 text-sm font-black text-[#3D145F] transition-transform hover:-translate-y-0.5"
                    href={item.href}
                    key={item.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#22C86B]" />
                  </Link>
                ))}
            </div>
          </section>
        </AdminShell>
      )}
    </AdminGuard>
  );
}

function SummaryList({
  heading,
  items,
}: {
  heading: string;
  items: { count: number; label: string }[];
}) {
  return (
    <section className="rounded-[2rem] border border-[#3D145F]/10 bg-white p-6 shadow-[0_18px_50px_rgba(61,20,95,0.07)]">
      <h2 className="text-xl font-black tracking-[-0.025em] text-[#3D145F]">{heading}</h2>
      {items.length > 0 ? (
        <dl className="mt-4 grid gap-2">
          {items.map((item) => (
            <div
              className="flex items-center justify-between gap-4 rounded-xl bg-[#FFF8E8] px-4 py-3 text-sm font-bold text-[#35104F]"
              key={item.label}
            >
              <dt>{item.label}</dt>
              <dd className="font-black text-[#3D145F]">{item.count}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="mt-4 text-sm font-bold text-[#35104F]/55">No data yet.</p>
      )}
    </section>
  );
}
