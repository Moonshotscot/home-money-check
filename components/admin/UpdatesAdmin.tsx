"use client";

import { useEffect, useMemo, useState } from "react";
import { Download } from "lucide-react";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { AdminShell } from "@/components/admin/AdminShell";
import { formatDate, type UpdateSubscriber } from "@/lib/admin";
import { supabase } from "@/lib/supabaseClient";

function csvEscape(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

function exportSubscribersCsv(subscribers: UpdateSubscriber[]) {
  const headers = ["Created", "First name", "Email", "Postcode", "Interests", "Status", "Source"];
  const rows = subscribers.map((subscriber) => [
    formatDate(subscriber.created_at),
    subscriber.first_name || "",
    subscriber.email || "",
    subscriber.postcode || "",
    (subscriber.interests || []).join(", "),
    subscriber.status || "",
    subscriber.source_page || "",
  ]);

  const csv = [headers, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `home-money-check-updates-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function UpdatesContent() {
  const [subscribers, setSubscribers] = useState<UpdateSubscriber[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadSubscribers() {
      setStatus("loading");

      const { data, error } = await supabase
        .from("update_subscribers")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Update subscribers fetch failed", error);
        setStatus("error");
        return;
      }

      setSubscribers((data || []) as UpdateSubscriber[]);
      setStatus("ready");
    }

    loadSubscribers();
  }, []);

  const filteredSubscribers = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
      return subscribers;
    }

    return subscribers.filter((subscriber) => {
      const searchable = [
        subscriber.first_name,
        subscriber.email,
        subscriber.postcode,
        subscriber.source_page,
        subscriber.status,
        ...(subscriber.interests || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchable.includes(term);
    });
  }, [searchTerm, subscribers]);

  async function handleDeleteSubscriber(subscriber: UpdateSubscriber) {
    if (!subscriber.id) {
      return;
    }

    const confirmed = window.confirm(
      "This will permanently delete this update signup. This cannot be undone. Delete it now?",
    );

    if (!confirmed) {
      return;
    }

    setDeleteMessage("");
    setDeletingId(subscriber.id);

    const { error } = await supabase.from("update_subscribers").delete().eq("id", subscriber.id);

    setDeletingId(null);

    if (error) {
      console.error("Update subscriber delete failed", error);
      setDeleteMessage(
        `Could not delete the update signup. ${error.message}${
          error.code ? ` (${error.code})` : ""
        }`,
      );
      return;
    }

    setSubscribers((current) => current.filter((item) => item.id !== subscriber.id));
    setDeleteMessage("Update signup deleted.");
  }

  return (
    <AdminShell>
      <section className="rounded-[2.75rem] bg-white p-8 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
              Updates
            </p>
            <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-6xl">
              Update signups
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-bold leading-6 text-[#2C1F3D]/68">
              People who have asked to receive occasional Home Money Check updates.
            </p>
          </div>
          <button
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#5F2D8C] px-5 py-3 text-sm font-black text-[#F7F0E8] transition-all duration-300 hover:-translate-y-0.5"
            onClick={() => exportSubscribersCsv(filteredSubscribers)}
            type="button"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>

        <div className="mt-8">
          <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
            Search updates
            <input
              className="w-full rounded-[1.25rem] border-0 bg-[#F7F0E8] px-5 py-4 text-base font-bold text-[#2C1F3D] outline-none ring-2 ring-transparent focus:ring-[#FDCA55]"
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name, email, postcode or interest"
              value={searchTerm}
            />
          </label>
        </div>

        {status === "error" ? (
          <p className="mt-6 rounded-[1.5rem] bg-[#F4D9DE] p-5 text-sm font-black leading-6 text-[#7A2130]">
            Update signups could not be loaded. Check the update_subscribers table and policies.
          </p>
        ) : null}
        {deleteMessage ? (
          <p className="mt-6 rounded-[1.5rem] bg-[#F7F0E8] p-5 text-sm font-black leading-6 text-[#5F2D8C]">
            {deleteMessage}
          </p>
        ) : null}

        <div className="mt-8 overflow-hidden rounded-[1.75rem] ring-1 ring-[#EADFFD]">
          <div className="grid grid-cols-[1fr_1.25fr_1fr_1.25fr_0.8fr_0.55fr] gap-3 bg-[#5F2D8C] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#F7F0E8] max-lg:hidden">
            <span>Name</span>
            <span>Email</span>
            <span>Postcode</span>
            <span>Interests</span>
            <span>Status</span>
            <span>Action</span>
          </div>
          <div className="divide-y divide-[#EADFFD] bg-[#F7F0E8]">
            {status === "loading" ? (
              <p className="p-5 text-sm font-black text-[#5F2D8C]">Loading updates...</p>
            ) : null}
            {status === "ready" && filteredSubscribers.length === 0 ? (
              <p className="p-5 text-sm font-black text-[#5F2D8C]">No update signups found.</p>
            ) : null}
            {filteredSubscribers.map((subscriber) => (
              <div
                className="grid gap-3 p-5 text-sm font-bold text-[#2C1F3D] lg:grid-cols-[1fr_1.25fr_1fr_1.25fr_0.8fr_0.55fr]"
                key={subscriber.id}
              >
                <div>
                  <p className="font-black">{subscriber.first_name || "Not set"}</p>
                  <p className="mt-1 text-xs text-[#2C1F3D]/58">{formatDate(subscriber.created_at)}</p>
                </div>
                <p className="break-words">{subscriber.email}</p>
                <p>{subscriber.postcode || "-"}</p>
                <div className="flex flex-wrap gap-2">
                  {(subscriber.interests || []).length > 0 ? (
                    subscriber.interests?.map((interest) => (
                      <span
                        className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#5F2D8C]"
                        key={interest}
                      >
                        {interest}
                      </span>
                    ))
                  ) : (
                    <span className="text-[#2C1F3D]/58">General</span>
                  )}
                </div>
                <span className="h-fit w-fit rounded-full bg-[#CFE6D5] px-3 py-1 text-xs font-black text-[#173E29]">
                  {subscriber.status || "Active"}
                </span>
                <button
                  className="h-fit w-fit rounded-full bg-white px-3 py-1 text-xs font-black text-[#7A2130] shadow-[inset_0_0_0_1px_rgba(122,33,48,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4D9DE] disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={deletingId === subscriber.id}
                  onClick={() => handleDeleteSubscriber(subscriber)}
                  type="button"
                >
                  {deletingId === subscriber.id ? "Deleting..." : "Delete"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AdminShell>
  );
}

export function UpdatesAdmin() {
  return <AdminGuard>{() => <UpdatesContent />}</AdminGuard>;
}
