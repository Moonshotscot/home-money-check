"use client";

import { FormEvent, useEffect, useState } from "react";
import { Edit, Plus, Save, Trash2 } from "lucide-react";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { AdminShell } from "@/components/admin/AdminShell";
import { supabase } from "@/lib/supabaseClient";

type NoticeboardRow = {
  id?: string;
  title: string | null;
  label: string | null;
  body: string | null;
  button_label: string | null;
  button_url: string | null;
  category: string | null;
  accent_colour: string | null;
  is_live: boolean;
  display_order: number | null;
  starts_at: string | null;
  ends_at: string | null;
  created_at?: string | null;
};

const emptyItem: NoticeboardRow = {
  title: "",
  label: "",
  body: "",
  button_label: "",
  button_url: "",
  category: "",
  accent_colour: "#EADFFD",
  is_live: true,
  display_order: 10,
  starts_at: null,
  ends_at: null,
};

const fieldClass =
  "w-full rounded-[1.25rem] border-0 bg-white px-4 py-3 text-base font-bold text-[#2C1F3D] outline-none ring-2 ring-transparent focus:ring-[#FDCA55]";

function toDateInput(value: string | null) {
  return value ? value.slice(0, 16) : "";
}

function fromDateInput(value: string) {
  return value ? new Date(value).toISOString() : null;
}

function nullableText(value: string) {
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

function NoticeboardContent() {
  const [items, setItems] = useState<NoticeboardRow[]>([]);
  const [current, setCurrent] = useState<NoticeboardRow>(emptyItem);
  const [loadState, setLoadState] = useState<"loading" | "loaded" | "error">("loading");
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function loadItems() {
    setLoadState("loading");
    const { data, error } = await supabase
      .from("noticeboard_items")
      .select("id,title,label,body,button_label,button_url,category,accent_colour,is_live,display_order,starts_at,ends_at,created_at")
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Could not load noticeboard items", error);
      setLoadState("error");
      return;
    }

    setItems((data || []) as NoticeboardRow[]);
    setLoadState("loaded");
  }

  useEffect(() => {
    loadItems();
  }, []);

  function updateField<K extends keyof NoticeboardRow>(field: K, value: NoticeboardRow[K]) {
    setCurrent((item) => ({ ...item, [field]: value }));
  }

  async function saveItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaveState("saving");

    const payload = {
      accent_colour: nullableText(current.accent_colour ?? "") || "#EADFFD",
      body: nullableText(current.body ?? ""),
      button_label: nullableText(current.button_label ?? ""),
      button_url: nullableText(current.button_url ?? ""),
      category: nullableText(current.category ?? ""),
      display_order: Number(current.display_order) || 0,
      ends_at: current.ends_at,
      is_live: current.is_live,
      label: nullableText(current.label ?? ""),
      starts_at: current.starts_at,
      title: nullableText(current.title ?? ""),
    };

    const request = current.id
      ? supabase.from("noticeboard_items").update(payload).eq("id", current.id).select().single()
      : supabase.from("noticeboard_items").insert(payload).select().single();

    const { data, error } = await request;

    if (error) {
      console.error("Could not save noticeboard item", error);
      setSaveState("error");
      return;
    }

    const saved = data as NoticeboardRow;
    setItems((existing) => {
      const withoutSaved = existing.filter((item) => item.id !== saved.id);
      return [...withoutSaved, saved].sort(
        (a, b) => (a.display_order ?? 0) - (b.display_order ?? 0),
      );
    });
    setCurrent(saved);
    setSaveState("saved");
  }

  async function deleteItem() {
    if (!current.id) {
      setCurrent(emptyItem);
      return;
    }

    const { error } = await supabase.from("noticeboard_items").delete().eq("id", current.id);

    if (error) {
      console.error("Could not delete noticeboard item", error);
      setSaveState("error");
      return;
    }

    setItems((existing) => existing.filter((item) => item.id !== current.id));
    setCurrent(emptyItem);
  }

  return (
    <AdminShell>
      <section className="rounded-[2.75rem] bg-white p-6 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
              Homepage updates
            </p>
            <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-6xl">
              Noticeboard
            </h1>
          </div>
          <button
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FDCA55] px-5 py-3 text-sm font-black text-[#4F247D]"
            onClick={() => {
              setCurrent(emptyItem);
              setSaveState("idle");
            }}
            type="button"
          >
            <Plus className="h-4 w-4" />
            Add new item
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#F7F0E8] p-5">
            <p className="mb-4 rounded-[1.25rem] bg-white p-4 text-sm font-black leading-6 text-[#5F2D8C]">
              The homepage shows up to the first 3 live noticeboard items, ordered by display
              order.
            </p>
            {loadState === "loading" ? (
              <p className="text-sm font-black text-[#5F2D8C]">Loading noticeboard items...</p>
            ) : null}
            {loadState === "error" ? (
              <p className="rounded-[1.25rem] bg-[#FFF1C8] p-4 text-sm font-black text-[#6B4611]">
                Could not load noticeboard items. Please try again.
              </p>
            ) : null}
            {loadState === "loaded" && items.length === 0 ? (
              <p className="text-sm font-black text-[#5F2D8C]">No noticeboard items yet.</p>
            ) : null}
            <div className="grid gap-3">
              {items.map((item) => (
                <button
                  className="rounded-[1.35rem] bg-white p-4 text-left shadow-[0_12px_30px_rgba(44,31,61,0.08)]"
                  key={item.id}
                  onClick={() => {
                    setCurrent(item);
                    setSaveState("idle");
                  }}
                  type="button"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.12em] text-[#5F2D8C]/70">
                        {item.label || item.category || "Notice"}
                      </p>
                      <h2 className="mt-2 text-xl font-black tracking-[-0.045em]">{item.title}</h2>
                    </div>
                    <span className="rounded-full px-3 py-1 text-xs font-black text-[#5F2D8C]" style={{ backgroundColor: item.accent_colour || "#EADFFD" }}>
                      {item.is_live ? "Live" : "Hidden"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-[#2C1F3D]/65">
                    Order {item.display_order ?? 0}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <form className="grid gap-5 rounded-[2rem] bg-[#F7F0E8] p-5" onSubmit={saveItem}>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-black tracking-[-0.05em]">
                {current.id ? "Edit noticeboard item" : "Add noticeboard item"}
              </h2>
              <Edit className="h-5 w-5 text-[#5F2D8C]" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                Label
                <input className={fieldClass} onChange={(event) => updateField("label", event.target.value)} value={current.label ?? ""} />
              </label>
              <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                Category
                <input className={fieldClass} onChange={(event) => updateField("category", event.target.value)} value={current.category ?? ""} />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Title
              <input className={fieldClass} onChange={(event) => updateField("title", event.target.value)} required value={current.title ?? ""} />
            </label>
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Body
              <textarea className={`${fieldClass} min-h-24`} onChange={(event) => updateField("body", event.target.value)} value={current.body ?? ""} />
            </label>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                Button label
                <input className={fieldClass} onChange={(event) => updateField("button_label", event.target.value)} value={current.button_label ?? ""} />
              </label>
              <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                Button URL
                <input className={fieldClass} onChange={(event) => updateField("button_url", event.target.value)} value={current.button_url ?? ""} />
              </label>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                Accent colour
                <input className={fieldClass} onChange={(event) => updateField("accent_colour", event.target.value)} value={current.accent_colour ?? ""} />
              </label>
              <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                Display order
                <input className={fieldClass} onChange={(event) => updateField("display_order", Number(event.target.value))} type="number" value={current.display_order ?? 0} />
              </label>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                Starts at
                <input className={fieldClass} onChange={(event) => updateField("starts_at", fromDateInput(event.target.value))} type="datetime-local" value={toDateInput(current.starts_at)} />
              </label>
              <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                Ends at
                <input className={fieldClass} onChange={(event) => updateField("ends_at", fromDateInput(event.target.value))} type="datetime-local" value={toDateInput(current.ends_at)} />
              </label>
            </div>
            <label className="flex items-center gap-3 rounded-[1.35rem] bg-white p-4 text-sm font-black text-[#2C1F3D]">
              <input
                checked={current.is_live}
                className="h-4 w-4 accent-[#5F2D8C]"
                onChange={(event) => updateField("is_live", event.target.checked)}
                type="checkbox"
              />
              Item is live
            </label>
            {saveState === "saved" ? (
              <p className="rounded-[1.35rem] bg-white p-4 text-sm font-black text-[#5F2D8C]">
                Noticeboard item saved.
              </p>
            ) : null}
            {saveState === "error" ? (
              <p className="rounded-[1.35rem] bg-[#FFF1C8] p-4 text-sm font-black text-[#6B4611]">
                Could not save this noticeboard item. Please try again.
              </p>
            ) : null}
            <div className="flex flex-wrap gap-3">
              <button
                className="inline-flex items-center gap-2 rounded-full bg-[#5F2D8C] px-6 py-3 text-sm font-black text-[#F7F0E8] disabled:opacity-70"
                disabled={saveState === "saving"}
                type="submit"
              >
                <Save className="h-4 w-4" />
                {saveState === "saving" ? "Saving..." : current.id ? "Update item" : "Add item"}
              </button>
              <button
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[#5F2D8C]"
                onClick={deleteItem}
                type="button"
              >
                <Trash2 className="h-4 w-4" />
                {current.id ? "Delete item" : "Clear form"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </AdminShell>
  );
}

export function NoticeboardAdmin() {
  return <AdminGuard>{() => <NoticeboardContent />}</AdminGuard>;
}
