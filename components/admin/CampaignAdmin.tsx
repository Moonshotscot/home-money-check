"use client";

import { FormEvent, useEffect, useState } from "react";
import { ExternalLink, Save } from "lucide-react";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { AdminShell } from "@/components/admin/AdminShell";
import { supabase } from "@/lib/supabaseClient";

type CampaignPanelRow = {
  id?: string;
  label: string | null;
  title: string | null;
  title_accent: string | null;
  title_main: string | null;
  body: string | null;
  middle_content: string | null;
  lower_text: string | null;
  button_label: string | null;
  button_url: string | null;
  is_live: boolean;
  starts_at: string | null;
  ends_at: string | null;
};

const emptyCampaign: CampaignPanelRow = {
  label: "Current campaign",
  title: "£20K Giveaway",
  title_accent: "£20K",
  title_main: "Giveaway",
  body: "",
  middle_content: "",
  lower_text: "",
  button_label: "",
  button_url: "",
  is_live: true,
  starts_at: null,
  ends_at: null,
};

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

const fieldClass =
  "w-full rounded-[1.25rem] border-0 bg-white px-4 py-3 text-base font-bold text-[#2C1F3D] outline-none ring-2 ring-transparent focus:ring-[#FDCA55]";

function CampaignContent() {
  const [campaign, setCampaign] = useState<CampaignPanelRow>(emptyCampaign);
  const [loadState, setLoadState] = useState<"loading" | "loaded" | "error">("loading");
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  useEffect(() => {
    async function loadCampaign() {
      const { data, error } = await supabase
        .from("campaign_panel")
        .select("id,label,title,title_accent,title_main,body,middle_content,lower_text,button_label,button_url,is_live,starts_at,ends_at")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error("Could not load campaign panel", error);
        setLoadState("error");
        return;
      }

      if (data) {
        setCampaign(data as CampaignPanelRow);
      }

      setLoadState("loaded");
    }

    loadCampaign();
  }, []);

  function updateField<K extends keyof CampaignPanelRow>(field: K, value: CampaignPanelRow[K]) {
    setCampaign((current) => ({ ...current, [field]: value }));
  }

  async function saveCampaign(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaveState("saving");

    const payload = {
      label: nullableText(campaign.label ?? ""),
      title:
        nullableText(campaign.title ?? "") ||
        nullableText(`${campaign.title_accent ?? ""} ${campaign.title_main ?? ""}`),
      title_accent: nullableText(campaign.title_accent ?? ""),
      title_main: nullableText(campaign.title_main ?? ""),
      body: nullableText(campaign.body ?? ""),
      middle_content: nullableText(campaign.middle_content ?? ""),
      lower_text: nullableText(campaign.lower_text ?? ""),
      button_label: nullableText(campaign.button_label ?? ""),
      button_url: nullableText(campaign.button_url ?? ""),
      is_live: campaign.is_live,
      starts_at: campaign.starts_at,
      ends_at: campaign.ends_at,
    };

    const request = campaign.id
      ? supabase.from("campaign_panel").update(payload).eq("id", campaign.id).select().single()
      : supabase.from("campaign_panel").insert(payload).select().single();

    const { data, error } = await request;

    if (error) {
      console.error("Could not save campaign panel", error);
      setSaveState("error");
      return;
    }

    setCampaign(data as CampaignPanelRow);
    setSaveState("saved");
  }

  return (
    <AdminShell>
      <section className="rounded-[2.75rem] bg-white p-6 shadow-[0_24px_70px_rgba(44,31,61,0.12)] md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
              Homepage campaign
            </p>
            <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-6xl">
              Campaign panel
            </h1>
          </div>
          <a
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F7F0E8] px-5 py-3 text-sm font-black text-[#5F2D8C]"
            href="/"
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLink className="h-4 w-4" />
            View homepage
          </a>
        </div>
        {loadState === "loading" ? (
          <p className="mt-6 rounded-[1.5rem] bg-[#F7F0E8] p-5 text-sm font-black text-[#5F2D8C]">
            Loading campaign panel...
          </p>
        ) : null}
        {loadState === "error" ? (
          <p className="mt-6 rounded-[1.5rem] bg-[#FFF1C8] p-5 text-sm font-black text-[#6B4611]">
            Campaign content could not be loaded. Try refreshing.
          </p>
        ) : null}
        <form className="mt-8 grid gap-5" onSubmit={saveCampaign}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Label
              <input className={fieldClass} onChange={(event) => updateField("label", event.target.value)} value={campaign.label ?? ""} />
            </label>
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Title backup
              <input className={fieldClass} onChange={(event) => updateField("title", event.target.value)} value={campaign.title ?? ""} />
            </label>
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Yellow title text
              <input className={fieldClass} onChange={(event) => updateField("title_accent", event.target.value)} value={campaign.title_accent ?? ""} />
            </label>
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              White title text
              <input className={fieldClass} onChange={(event) => updateField("title_main", event.target.value)} value={campaign.title_main ?? ""} />
            </label>
          </div>
          <p className="rounded-[1.25rem] bg-[#F7F0E8] p-4 text-sm font-black leading-6 text-[#5F2D8C]">
            Yellow title text appears in gold. White title text appears beside it in white.
          </p>
          <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
            Middle content
            <span className="text-xs font-bold leading-5 text-[#2C1F3D]/65">
              Highlighted text shown in the campaign card.
            </span>
            <textarea className={`${fieldClass} min-h-28`} onChange={(event) => updateField("middle_content", event.target.value)} value={campaign.middle_content ?? ""} />
          </label>
          <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
            Lower text
            <span className="text-xs font-bold leading-5 text-[#2C1F3D]/65">
              Smaller supporting text shown below.
            </span>
            <textarea className={`${fieldClass} min-h-28`} onChange={(event) => updateField("lower_text", event.target.value)} value={campaign.lower_text ?? ""} />
          </label>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Button label
              <input className={fieldClass} onChange={(event) => updateField("button_label", event.target.value)} value={campaign.button_label ?? ""} />
            </label>
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Button URL
              <input className={fieldClass} onChange={(event) => updateField("button_url", event.target.value)} value={campaign.button_url ?? ""} />
            </label>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Starts at
              <input className={fieldClass} onChange={(event) => updateField("starts_at", fromDateInput(event.target.value))} type="datetime-local" value={toDateInput(campaign.starts_at)} />
            </label>
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Ends at
              <input className={fieldClass} onChange={(event) => updateField("ends_at", fromDateInput(event.target.value))} type="datetime-local" value={toDateInput(campaign.ends_at)} />
            </label>
          </div>
          <label className="flex items-center gap-3 rounded-[1.35rem] bg-[#F7F0E8] p-4 text-sm font-black text-[#2C1F3D]">
            <input
              checked={campaign.is_live}
              className="h-4 w-4 accent-[#5F2D8C]"
              onChange={(event) => updateField("is_live", event.target.checked)}
              type="checkbox"
            />
            Campaign is live
          </label>
          {saveState === "saved" ? (
            <p className="rounded-[1.35rem] bg-[#F7F0E8] p-4 text-sm font-black text-[#5F2D8C]">
              Campaign panel saved.
            </p>
          ) : null}
          {saveState === "error" ? (
            <p className="rounded-[1.35rem] bg-[#FFF1C8] p-4 text-sm font-black text-[#6B4611]">
              Could not save the campaign panel. Please try again.
            </p>
          ) : null}
          <button
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#5F2D8C] px-6 py-3 text-sm font-black text-[#F7F0E8] disabled:opacity-70"
            disabled={saveState === "saving"}
            type="submit"
          >
            <Save className="h-4 w-4" />
            {saveState === "saving" ? "Saving..." : "Save campaign"}
          </button>
        </form>
      </section>
    </AdminShell>
  );
}

export function CampaignAdmin() {
  return <AdminGuard>{() => <CampaignContent />}</AdminGuard>;
}
