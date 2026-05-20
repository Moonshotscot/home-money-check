"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { insertEnquiry } from "@/lib/supabaseClient";

const checkOptions = [
  "Household bills",
  "Energy",
  "Broadband",
  "Mobile",
  "£20K Giveaway",
  "Mortgage",
  "First-time buyer mortgage",
  "Remortgage",
  "Moving home mortgage",
  "Protection insurance",
  "Private medical insurance",
  "Estate planning",
  "Extra income",
  "Business utilities",
  "Finance services",
];

type LeadFormPreviewProps = {
  defaultSelectedCheck?: string;
  selectedCheck?: string;
  sourcePage: string;
  uwRelated?: boolean;
  title?: string;
};

type FormState = {
  name: string;
  email: string;
  mobile: string;
  postcode: string;
  selected_check: string;
  message: string;
  consent_contact: boolean;
  consent_updates: boolean;
};

const fieldClass =
  "w-full appearance-none rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.08)] outline-none ring-2 ring-transparent placeholder:text-[#8A7D96] focus:ring-[#FDCA55]";

export function LeadFormPreview({
  defaultSelectedCheck,
  selectedCheck,
  sourcePage,
  uwRelated = false,
  title = "Tell us what you want to check.",
}: LeadFormPreviewProps) {
  const initialSelectedCheck =
    defaultSelectedCheck === "Choose your check"
      ? ""
      : defaultSelectedCheck || (selectedCheck === "Choose your check" ? "" : selectedCheck) || "";

  const initialState = useMemo<FormState>(
    () => ({
      name: "",
      email: "",
      mobile: "",
      postcode: "",
      selected_check: initialSelectedCheck,
      message: "",
      consent_contact: false,
      consent_updates: false,
    }),
    [initialSelectedCheck],
  );

  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationMessage, setValidationMessage] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValidationMessage("");
    setStatus("idle");

    if (!form.name.trim() || !form.email.trim() || !form.mobile.trim() || !form.selected_check) {
      setValidationMessage("Please complete your name, email, mobile and chosen check.");
      return;
    }

    if (!form.consent_contact) {
      setValidationMessage("Please tick the contact consent box so we can respond.");
      return;
    }

    setStatus("submitting");

    try {
      await insertEnquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        postcode: form.postcode.trim() || undefined,
        selected_check: form.selected_check,
        source_page: sourcePage,
        message: form.message.trim() || undefined,
        consent_contact: form.consent_contact,
        consent_updates: form.consent_updates,
      });

      setStatus("success");
      setForm({
        ...initialState,
        selected_check: form.selected_check,
      });
    } catch (error) {
      console.error("Supabase enquiry insert failed", error);
      setStatus("error");
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[2.75rem] bg-[#F7F0E8] p-7 shadow-[0_24px_70px_rgba(44,31,61,0.13)] ring-1 ring-[#EADFFD] md:p-9">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#EADFFD]/55" />
      <p className="relative mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
        Leave your details
      </p>
      <h2 className="relative text-4xl font-black leading-[0.98] tracking-[-0.065em] text-[#2C1F3D] md:text-5xl">
        {title}
      </h2>
      {uwRelated ? (
        <p className="relative mt-5 rounded-[1.35rem] bg-white/70 p-4 text-sm font-bold leading-6 text-[#4F247D]">
          If your enquiry relates to Utility Warehouse, you may be contacted about UW services or the
          UW Partner opportunity. You can opt out of marketing messages at any time.
        </p>
      ) : null}
      {status === "success" ? (
        <div className="relative mt-7 rounded-[1.75rem] bg-white p-6 text-[#2C1F3D] shadow-[0_18px_50px_rgba(44,31,61,0.10)]">
          <p className="text-2xl font-black leading-7 tracking-[-0.045em]">
            Thanks. Your enquiry has been received.
          </p>
          <p className="mt-3 text-base font-bold leading-7 text-[#2C1F3D]/72">
            We’ll review it and come back to you as soon as we can.
          </p>
        </div>
      ) : null}
      {status === "error" ? (
        <p className="relative mt-5 rounded-[1.35rem] bg-[#FFF1C8] p-4 text-sm font-black leading-6 text-[#6B4611]">
          Sorry, something went wrong. Please try again, or contact us directly if it keeps
          happening.
        </p>
      ) : null}
      {validationMessage ? (
        <p className="relative mt-5 rounded-[1.35rem] bg-[#FFF1C8] p-4 text-sm font-black leading-6 text-[#6B4611]">
          {validationMessage}
        </p>
      ) : null}
      <form className="relative mt-7 grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
          Name
          <input
            className={fieldClass}
            onChange={(event) => updateField("name", event.target.value)}
            required
            value={form.name}
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
          Email
          <input
            className={fieldClass}
            onChange={(event) => updateField("email", event.target.value)}
            required
            type="email"
            value={form.email}
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
          Mobile
          <input
            className={fieldClass}
            onChange={(event) => updateField("mobile", event.target.value)}
            required
            value={form.mobile}
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
          Postcode
          <input
            className={fieldClass}
            onChange={(event) => updateField("postcode", event.target.value)}
            value={form.postcode}
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
          Choose your check
          <select
            className={fieldClass}
            onChange={(event) => updateField("selected_check", event.target.value)}
            required
            value={form.selected_check}
          >
            <option value="">Choose your check</option>
            {checkOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
          Message
          <textarea
            className={`${fieldClass} min-h-28`}
            onChange={(event) => updateField("message", event.target.value)}
            value={form.message}
          />
        </label>
        <label className="flex items-start gap-3 rounded-[1.35rem] bg-white/65 p-4 text-sm font-bold leading-6 text-[#2C1F3D]">
          <input
            checked={form.consent_contact}
            className="mt-1 h-4 w-4 accent-[#6A35A0]"
            onChange={(event) => updateField("consent_contact", event.target.checked)}
            required
            type="checkbox"
          />
          <span>
            I agree that Home Money Check or a representative may contact me about my enquiry.
          </span>
        </label>
        <label className="flex items-start gap-3 rounded-[1.35rem] bg-white/65 p-4 text-sm font-bold leading-6 text-[#2C1F3D]">
          <input
            checked={form.consent_updates}
            className="mt-1 h-4 w-4 accent-[#6A35A0]"
            onChange={(event) => updateField("consent_updates", event.target.checked)}
            type="checkbox"
          />
          <span>
            I would also like to receive occasional Home Money Check updates, including useful home
            money tips, relevant services and local offers. I can unsubscribe at any time.
          </span>
        </label>
        <button
          className="flex transform-gpu items-center justify-center gap-2 rounded-full bg-[#6A35A0] px-7 py-4 text-base font-black text-[#F7F0E8] shadow-[0_18px_45px_rgba(106,53,160,0.25)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? "Sending..." : "Start my check"}
          <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
        </button>
      </form>
    </div>
  );
}
