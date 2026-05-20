"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, Eye, RefreshCw, Save } from "lucide-react";
import {
  Enquiry,
  enquiryStatuses,
  formatDate,
  selectedCheckFilters,
} from "@/lib/admin";
import { supabase } from "@/lib/supabaseClient";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { AdminShell } from "@/components/admin/AdminShell";

const enquiryColumns =
  "id,created_at,name,email,mobile,postcode,selected_check,source_page,message,consent_contact,consent_updates,status,admin_notes,last_contacted_at,converted_at,updated_at";

function csvEscape(value: unknown) {
  const text = value === null || value === undefined ? "" : String(value);
  return `"${text.replace(/"/g, '""')}"`;
}

function exportCsv(enquiries: Enquiry[]) {
  const columns = [
    "created_at",
    "name",
    "email",
    "mobile",
    "postcode",
    "selected_check",
    "source_page",
    "message",
    "consent_contact",
    "consent_updates",
    "status",
    "admin_notes",
    "last_contacted_at",
    "converted_at",
  ] as const;

  const rows = [
    columns.join(","),
    ...enquiries.map((enquiry) => columns.map((column) => csvEscape(enquiry[column])).join(",")),
  ];
  const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "home-money-check-enquiries.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function statusBadge(status: string | null) {
  return status || "New";
}

function EnquiryDetail({
  enquiry,
  onClose,
  onSaved,
}: {
  enquiry: Enquiry;
  onClose: () => void;
  onSaved: (enquiry: Enquiry) => void;
}) {
  const [status, setStatus] = useState(statusBadge(enquiry.status));
  const [adminNotes, setAdminNotes] = useState(enquiry.admin_notes || "");
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function saveChanges() {
    setSaveState("saving");
    const now = new Date().toISOString();
    const updatePayload: Partial<Enquiry> = {
      admin_notes: adminNotes,
      status,
    };

    if (status === "Converted" && !enquiry.converted_at) {
      updatePayload.converted_at = now;
    }

    if (status === "Contacted" && !enquiry.last_contacted_at) {
      updatePayload.last_contacted_at = now;
    }

    const { data, error } = await supabase
      .from("enquiries")
      .update(updatePayload)
      .eq("id", enquiry.id)
      .select(enquiryColumns)
      .single();

    if (error) {
      console.error("Could not update enquiry", error);
      setSaveState("error");
      return;
    }

    onSaved(data as Enquiry);
    setSaveState("saved");
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2C1F3D]/55 px-4 py-6 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl rounded-[2.25rem] bg-[#F7F0E8] p-6 shadow-[0_30px_90px_rgba(30,9,55,0.35)] md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
              Enquiry detail
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.065em]">
              {enquiry.name || "Unnamed enquiry"}
            </h2>
          </div>
          <button
            className="rounded-full bg-white px-5 py-3 text-sm font-black text-[#5F2D8C]"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </div>

        <div className="mt-6 grid gap-4 rounded-[1.75rem] bg-white p-5 text-sm font-bold leading-6 md:grid-cols-2">
          <p><span className="text-[#5F2D8C]">Email:</span> {enquiry.email || "Not supplied"}</p>
          <p><span className="text-[#5F2D8C]">Mobile:</span> {enquiry.mobile || "Not supplied"}</p>
          <p><span className="text-[#5F2D8C]">Postcode:</span> {enquiry.postcode || "Not supplied"}</p>
          <p><span className="text-[#5F2D8C]">Selected check:</span> {enquiry.selected_check || "Not supplied"}</p>
          <p><span className="text-[#5F2D8C]">Source page:</span> {enquiry.source_page || "Not supplied"}</p>
          <p><span className="text-[#5F2D8C]">Created:</span> {formatDate(enquiry.created_at)}</p>
          <p><span className="text-[#5F2D8C]">Updated:</span> {formatDate(enquiry.updated_at)}</p>
          <p>
            <span className="text-[#5F2D8C]">Consent:</span>{" "}
            Contact {enquiry.consent_contact ? "yes" : "no"}, updates{" "}
            {enquiry.consent_updates ? "yes" : "no"}
          </p>
          <p className="md:col-span-2">
            <span className="text-[#5F2D8C]">Message:</span> {enquiry.message || "No message"}
          </p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-[18rem_1fr]">
          <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
            Status
            <select
              className="rounded-[1.25rem] border-0 bg-white px-4 py-3 text-base font-bold text-[#2C1F3D] outline-none ring-2 ring-transparent focus:ring-[#FDCA55]"
              onChange={(event) => setStatus(event.target.value)}
              value={status}
            >
              {enquiryStatuses.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
            Admin notes
            <textarea
              className="min-h-32 rounded-[1.25rem] border-0 bg-white px-4 py-3 text-base font-bold text-[#2C1F3D] outline-none ring-2 ring-transparent focus:ring-[#FDCA55]"
              onChange={(event) => setAdminNotes(event.target.value)}
              value={adminNotes}
            />
          </label>
        </div>

        {saveState === "saved" ? (
          <p className="mt-4 rounded-[1.25rem] bg-white p-4 text-sm font-black text-[#5F2D8C]">
            Changes saved.
          </p>
        ) : null}
        {saveState === "error" ? (
          <p className="mt-4 rounded-[1.25rem] bg-[#FFF1C8] p-4 text-sm font-black text-[#6B4611]">
            Could not save changes. Please try again.
          </p>
        ) : null}

        <button
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#5F2D8C] px-6 py-3 text-sm font-black text-[#F7F0E8] disabled:opacity-70"
          disabled={saveState === "saving"}
          onClick={saveChanges}
          type="button"
        >
          <Save className="h-4 w-4" />
          {saveState === "saving" ? "Saving..." : "Save changes"}
        </button>
      </div>
    </div>
  );
}

function EnquiriesContent() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [checkFilter, setCheckFilter] = useState("All");
  const [loadState, setLoadState] = useState<"loading" | "loaded" | "error">("loading");

  async function loadEnquiries() {
    setLoadState("loading");
    let query = supabase.from("enquiries").select(enquiryColumns).order("created_at", {
      ascending: false,
    });

    if (statusFilter !== "All") {
      query = query.eq("status", statusFilter);
    }

    if (checkFilter !== "All") {
      query = query.eq("selected_check", checkFilter);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Could not load enquiries", error);
      setLoadState("error");
      return;
    }

    setEnquiries((data || []) as Enquiry[]);
    setLoadState("loaded");
  }

  useEffect(() => {
    loadEnquiries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter, checkFilter]);

  const statusOptions = useMemo(() => ["All", ...enquiryStatuses], []);
  const checkOptions = useMemo(() => ["All", ...selectedCheckFilters], []);

  function handleSaved(updated: Enquiry) {
    setEnquiries((current) =>
      current.map((enquiry) => (enquiry.id === updated.id ? updated : enquiry)),
    );
    setSelectedEnquiry(updated);
  }

  return (
    <AdminShell>
      <section className="rounded-[2.75rem] bg-white p-6 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
              Lead capture
            </p>
            <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-6xl">
              Enquiries
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-[#F7F0E8] px-5 py-3 text-sm font-black text-[#5F2D8C]"
              onClick={loadEnquiries}
              type="button"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-full bg-[#FDCA55] px-5 py-3 text-sm font-black text-[#4F247D]"
              onClick={() => exportCsv(enquiries)}
              type="button"
            >
              <Download className="h-4 w-4" />
              Export CSV
            </button>
          </div>
        </div>

        <div className="mt-7 grid gap-4 rounded-[2rem] bg-[#F7F0E8] p-5 md:grid-cols-[1fr_1fr_auto] md:items-end">
          <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
            Status
            <select
              className="rounded-[1.25rem] border-0 bg-white px-4 py-3 text-base font-bold outline-none"
              onChange={(event) => setStatusFilter(event.target.value)}
              value={statusFilter}
            >
              {statusOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
            Selected check
            <select
              className="rounded-[1.25rem] border-0 bg-white px-4 py-3 text-base font-bold outline-none"
              onChange={(event) => setCheckFilter(event.target.value)}
              value={checkFilter}
            >
              {checkOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <button
            className="rounded-full bg-[#5F2D8C] px-5 py-3 text-sm font-black text-[#F7F0E8]"
            onClick={() => {
              setStatusFilter("All");
              setCheckFilter("All");
            }}
            type="button"
          >
            Clear filters
          </button>
        </div>

        {loadState === "loading" ? (
          <p className="mt-6 rounded-[1.5rem] bg-[#F7F0E8] p-5 text-sm font-black text-[#5F2D8C]">
            Loading enquiries...
          </p>
        ) : null}
        {loadState === "error" ? (
          <p className="mt-6 rounded-[1.5rem] bg-[#FFF1C8] p-5 text-sm font-black text-[#6B4611]">
            Could not load enquiries. Please try again.
          </p>
        ) : null}
        {loadState === "loaded" && enquiries.length === 0 ? (
          <p className="mt-6 rounded-[1.5rem] bg-[#F7F0E8] p-5 text-sm font-black text-[#5F2D8C]">
            No enquiries yet.
          </p>
        ) : null}

        {enquiries.length > 0 ? (
          <>
            <div className="mt-6 hidden overflow-hidden rounded-[1.75rem] border border-[#EADFFD] md:block">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-[#5F2D8C] text-[#F7F0E8]">
                  <tr>
                    <th className="p-4 font-black">Created</th>
                    <th className="p-4 font-black">Name</th>
                    <th className="p-4 font-black">Check</th>
                    <th className="p-4 font-black">Status</th>
                    <th className="p-4 font-black">Email</th>
                    <th className="p-4 font-black">Mobile</th>
                    <th className="p-4 font-black">Source</th>
                    <th className="p-4 font-black">Open</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enquiry) => (
                    <tr className="border-t border-[#EADFFD] bg-white" key={enquiry.id}>
                      <td className="p-4 font-bold">{formatDate(enquiry.created_at)}</td>
                      <td className="p-4 font-black">{enquiry.name}</td>
                      <td className="p-4 font-bold">{enquiry.selected_check}</td>
                      <td className="p-4 font-bold">{statusBadge(enquiry.status)}</td>
                      <td className="p-4 font-bold">{enquiry.email}</td>
                      <td className="p-4 font-bold">{enquiry.mobile}</td>
                      <td className="p-4 font-bold">{enquiry.source_page}</td>
                      <td className="p-4">
                        <button
                          className="inline-flex items-center gap-2 rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black text-[#5F2D8C]"
                          onClick={() => setSelectedEnquiry(enquiry)}
                          type="button"
                        >
                          <Eye className="h-4 w-4" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid gap-4 md:hidden">
              {enquiries.map((enquiry) => (
                <article className="rounded-[1.75rem] bg-[#F7F0E8] p-5 shadow-[0_14px_40px_rgba(44,31,61,0.08)]" key={enquiry.id}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.12em] text-[#5F2D8C]/70">
                        {formatDate(enquiry.created_at)}
                      </p>
                      <h2 className="mt-2 text-2xl font-black tracking-[-0.05em]">{enquiry.name}</h2>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#5F2D8C]">
                      {statusBadge(enquiry.status)}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-bold leading-6">{enquiry.selected_check}</p>
                  <p className="text-sm font-bold leading-6">{enquiry.email}</p>
                  <p className="text-sm font-bold leading-6">{enquiry.mobile}</p>
                  <p className="text-sm font-bold leading-6">{enquiry.source_page}</p>
                  <button
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#5F2D8C] px-4 py-2 text-xs font-black text-[#F7F0E8]"
                    onClick={() => setSelectedEnquiry(enquiry)}
                    type="button"
                  >
                    <Eye className="h-4 w-4" />
                    View enquiry
                  </button>
                </article>
              ))}
            </div>
          </>
        ) : null}
      </section>

      {selectedEnquiry ? (
        <EnquiryDetail
          enquiry={selectedEnquiry}
          onClose={() => setSelectedEnquiry(null)}
          onSaved={handleSaved}
        />
      ) : null}
    </AdminShell>
  );
}

export function EnquiriesAdmin() {
  return <AdminGuard>{() => <EnquiriesContent />}</AdminGuard>;
}
