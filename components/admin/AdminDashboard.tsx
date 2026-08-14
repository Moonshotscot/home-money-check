"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Inbox, Mail, Network, Users } from "lucide-react";
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
    sources: [] as { count: number; label: string }[],
    totalEnquiries: null as number | null,
  });

  useEffect(() => {
    async function loadSummary() {
      const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      const [enquiryRows, newEnquiries, recentEnquiries, mailingList] = await Promise.all([
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
      ]);

      const enquiries = (enquiryRows.data || []) as RecentEnquiry[];
      const sourceCounts = new Map<string, number>();

      enquiries.forEach((enquiry) => {
        const source = getLeadSourceDetails(enquiry.source_page);
        const context = source.context[0];
        const label = context ? `${source.label} · ${context}` : source.label;
        sourceCounts.set(label, (sourceCounts.get(label) || 0) + 1);
      });

      setSummary({
        mailingList: mailingList.count,
        newEnquiries: newEnquiries.count,
        recentActivity: enquiries.slice(0, 5),
        recentEnquiries: recentEnquiries.count,
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
          <section className="overflow-hidden rounded-[2.25rem] bg-[#3D145F] text-white shadow-[0_24px_70px_rgba(61,20,95,0.16)]">
            <div className="grid gap-8 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F0C646]">
                  Home Money Check back office
                </p>
                <h1 className="display-font mt-4 max-w-3xl text-4xl leading-[0.98] md:text-6xl">
                  New leads arrive here.
                </h1>
                <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/78">
                  Check where each enquiry came from, make the first contact and pass the lead into
                  CPH when it is ready for ongoing CRM work.
                </p>
              </div>
              <Link
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#22C86B] px-6 py-4 text-sm font-black text-[#143526] transition-transform hover:-translate-y-0.5"
                href="/admin/enquiries"
              >
                Open lead inbox
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </section>

          <section aria-label="Lead summary" className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-[2rem] border border-[#3D145F]/10 bg-white p-6 shadow-[0_18px_50px_rgba(61,20,95,0.07)] md:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7A2E9A]">
                    Latest leads
                  </p>
                  <h2 className="display-font mt-3 text-3xl text-[#3D145F]">Recent activity</h2>
                </div>
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
                  New customer enquiries will appear here.
                </p>
              )}
            </section>

            <section className="rounded-[2rem] bg-[#273468] p-6 text-white shadow-[0_18px_50px_rgba(39,52,104,0.15)] md:p-8">
              <Network className="h-9 w-9 text-[#22C86B]" />
              <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-[#F0C646]">
                Lead sources
              </p>
              <h2 className="display-font mt-3 text-3xl">See what is working.</h2>
              <p className="mt-4 text-sm font-semibold leading-6 text-white/72">
                Every form records its page. Company, partner and campaign details are also kept
                when they are included in the link.
              </p>
              {summary.sources.length > 0 ? (
                <dl className="mt-6 grid gap-2">
                  {summary.sources.map((source) => (
                    <div className="flex items-center justify-between gap-4 rounded-xl bg-white/10 px-4 py-3 text-sm font-black" key={source.label}>
                      <dt>{source.label}</dt>
                      <dd className="text-[#F0C646]">{source.count}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-6 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/75">
                  Source totals will appear when leads arrive.
                </p>
              )}
            </section>
          </div>

          <section className="mt-6 rounded-[2rem] border border-[#F0C646]/55 bg-[#FFF8E8] p-6 md:p-8">
            <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7A2E9A]">
                  Customer page links
                </p>
                <h2 className="display-font mt-3 text-3xl text-[#3D145F]">Direct links, clearly tracked.</h2>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#35104F]/72">
                  For a company-specific link, add the company name to the end, for example
                  <span className="mt-2 block break-all rounded-lg bg-white px-3 py-2 font-black text-[#3D145F]">
                    /staff-bills-check/employee?company=CompanyName
                  </span>
                  Leads from that link will show the page and company in the inbox.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {customerPageLinks.map((item) => (
                  <Link
                    className="group flex items-center justify-between gap-3 rounded-[1.1rem] bg-white px-4 py-3 text-sm font-black text-[#3D145F] shadow-[0_10px_28px_rgba(61,20,95,0.05)] transition-transform hover:-translate-y-0.5"
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
            </div>
          </section>
        </AdminShell>
      )}
    </AdminGuard>
  );
}
