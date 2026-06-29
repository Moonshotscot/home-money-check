"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { CampaignChoice } from "@/lib/campaign-pages";
import { insertEnquiry } from "@/lib/supabaseClient";

type CampaignLeadFormProps = {
  sourcePage: string;
  title: string;
  intro?: string;
  submitLabel: string;
  defaultCheck: CampaignChoice;
  showUpdatesConsent?: boolean;
  choiceLabel?: string;
  choices?: CampaignChoice[];
  contextField?: {
    label: string;
    options: CampaignChoice[];
  };
  workplaceMode?: boolean;
};

type FormState = {
  name: string;
  email: string;
  mobile: string;
  postcode: string;
  organisation: string;
  role: string;
  staffCount: string;
  bestTime: string;
  selectedChoice: string;
  contextChoice: string;
  notes: string;
  website: string;
  consentContact: boolean;
  consentUpdates: boolean;
};

const fieldClass =
  "w-full appearance-none rounded-[1.2rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.08)] outline-none ring-2 ring-transparent placeholder:text-[#8A7D96] focus:ring-[#FDCA55]";

export function CampaignLeadForm({
  sourcePage,
  title,
  intro,
  submitLabel,
  defaultCheck,
  showUpdatesConsent = false,
  choiceLabel,
  choices,
  contextField,
  workplaceMode = false,
}: CampaignLeadFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    mobile: "",
    postcode: "",
    organisation: "",
    role: "",
    staffCount: "",
    bestTime: "",
    selectedChoice: choices?.[0]?.key || "",
    contextChoice: "",
    notes: "",
    website: "",
    consentContact: false,
    consentUpdates: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationMessage, setValidationMessage] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    setValidationMessage("");
    setStatus("idle");

    if (form.website.trim()) {
      setStatus("success");
      return;
    }

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.mobile.trim() ||
      (!workplaceMode && !form.postcode.trim())
    ) {
      setValidationMessage(
        workplaceMode
          ? "Please complete your name, email and mobile."
          : "Please complete your name, email, mobile and postcode.",
      );
      return;
    }

    if (!form.bestTime) {
      setValidationMessage("Please choose the best time for us to contact you.");
      return;
    }

    if (choices && !form.selectedChoice) {
      setValidationMessage("Please choose what you would like checked.");
      return;
    }

    if (contextField && !form.contextChoice) {
      setValidationMessage(`Please choose an option for ${contextField.label}`);
      return;
    }

    if (!form.consentContact) {
      setValidationMessage("Please tick the contact consent box so we can respond.");
      return;
    }

    const selectedCheck = choices?.find((choice) => choice.key === form.selectedChoice) || defaultCheck;
    const contextChoice = contextField?.options.find(
      (choice) => choice.key === form.contextChoice,
    );
    const message = [
      `Best time to contact: ${form.bestTime}.`,
      workplaceMode && form.organisation.trim()
        ? `Organisation / workplace: ${form.organisation.trim()}.`
        : "",
      workplaceMode && form.role.trim() ? `Role: ${form.role.trim()}.` : "",
      workplaceMode && form.staffCount.trim()
        ? `Approximate number of staff: ${form.staffCount.trim()}.`
        : "",
      contextField && contextChoice ? `${contextField.label} ${contextChoice.label}.` : "",
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("submitting");

    try {
      await insertEnquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        postcode: workplaceMode ? form.postcode.trim() || "Not supplied" : form.postcode.trim(),
        selected_check: selectedCheck.label,
        requested_checks: [selectedCheck],
        source_page: sourcePage,
        message,
        consent_contact: true,
        consent_updates: form.consentUpdates,
      });

      setStatus("success");
    } catch (error) {
      console.error("Campaign enquiry submission failed", error);
      setStatus("error");
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F7F0E8] p-7 text-[#2C1F3D] shadow-[0_26px_72px_rgba(44,31,61,0.18)] ring-1 ring-white/30 md:p-9">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#EADFFD]/80" />
      <div className="absolute -bottom-12 left-10 h-24 w-24 rotate-[12deg] rounded-[1.8rem] bg-[#CFE6D5]/70" />
      <div className="relative">
        <p className="mb-4 w-fit rounded-full bg-[#CFE6D5] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#173E29]">
          Leave your details
        </p>
        <h2 className="display-font text-4xl font-black leading-[1.02] tracking-[-0.015em] md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-sm font-bold leading-6 text-[#2C1F3D]/70">
          {intro || "We'll get back to you for a straightforward conversation. No obligation."}
        </p>

        {status === "success" ? (
          <div className="mt-7 rounded-[1.5rem] bg-[#CFE6D5] p-5 text-base font-black leading-7 text-[#173E29]">
            Thanks, we've received your details. We'll be in touch soon.
          </div>
        ) : (
          <form className="mt-7 grid gap-4" onSubmit={handleSubmit}>
            <div aria-hidden="true" className="hidden">
              <label>
                Company website
                <input
                  autoComplete="off"
                  name="website"
                  onChange={(event) => updateField("website", event.target.value)}
                  tabIndex={-1}
                  value={form.website}
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                {workplaceMode ? "Your name" : "Name"}
                <input
                  className={fieldClass}
                  onChange={(event) => updateField("name", event.target.value)}
                  required
                  value={form.name}
                />
              </label>
              {workplaceMode ? (
                <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                  Organisation / workplace
                  <input
                    className={fieldClass}
                    onChange={(event) => updateField("organisation", event.target.value)}
                    value={form.organisation}
                  />
                </label>
              ) : null}
              {workplaceMode ? (
                <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                  Your role
                  <input
                    className={fieldClass}
                    onChange={(event) => updateField("role", event.target.value)}
                    value={form.role}
                  />
                </label>
              ) : null}
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
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                Mobile
                <input
                  className={fieldClass}
                  onChange={(event) => updateField("mobile", event.target.value)}
                  required
                  value={form.mobile}
                />
              </label>
              {workplaceMode ? (
                <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                  Approximate number of staff
                  <input
                    className={fieldClass}
                    onChange={(event) => updateField("staffCount", event.target.value)}
                    value={form.staffCount}
                  />
                </label>
              ) : (
                <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                  Postcode
                  <input
                    className={fieldClass}
                    onChange={(event) => updateField("postcode", event.target.value)}
                    required
                    value={form.postcode}
                  />
                </label>
              )}
            </div>
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Best time to contact
              <select
                className={fieldClass}
                onChange={(event) => updateField("bestTime", event.target.value)}
                required
                value={form.bestTime}
              >
                <option value="">Choose a time</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Any time">Any time</option>
              </select>
            </label>

            {choices ? (
              <fieldset className="grid gap-3">
                <legend className="text-sm font-black text-[#5F2D8C]">{choiceLabel}</legend>
                <div className="flex flex-wrap gap-2 rounded-[1.35rem] bg-white/60 p-4">
                  {choices.map((choice) => {
                    const selected = choice.key === form.selectedChoice;

                    return (
                      <button
                        aria-pressed={selected}
                        className={`rounded-full px-4 py-2 text-sm font-black transition-all duration-300 ${
                          selected
                            ? "bg-[#FDCA55] text-[#4F247D] shadow-[0_8px_18px_rgba(253,202,85,0.24)]"
                            : "bg-white text-[#5F2D8C] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.12)] hover:bg-[#EADFFD]"
                        }`}
                        key={choice.key}
                        onClick={() => updateField("selectedChoice", choice.key)}
                        type="button"
                      >
                        {choice.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ) : null}

            {contextField ? (
              <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
                {contextField.label}
                <select
                  className={fieldClass}
                  onChange={(event) => updateField("contextChoice", event.target.value)}
                  required
                  value={form.contextChoice}
                >
                  <option value="">Choose an option</option>
                  {contextField.options.map((option) => (
                    <option key={option.key} value={option.key}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}

            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Short message or notes
              <textarea
                className={`${fieldClass} min-h-28`}
                onChange={(event) => updateField("notes", event.target.value)}
                placeholder="Add anything you want us to know before we get in touch."
                value={form.notes}
              />
            </label>
            <label className="flex items-start gap-3 rounded-[1.35rem] bg-white/70 p-4 text-sm font-bold leading-6 text-[#2C1F3D]">
              <input
                checked={form.consentContact}
                className="mt-1 h-4 w-4 accent-[#6A35A0]"
                onChange={(event) => updateField("consentContact", event.target.checked)}
                required
                type="checkbox"
              />
              <span>I agree that Home Money Check or a representative may contact me about my enquiry.</span>
            </label>
            {showUpdatesConsent ? (
              <label className="flex items-start gap-3 rounded-[1.35rem] bg-white/70 p-4 text-sm font-bold leading-6 text-[#2C1F3D]">
                <input
                  checked={form.consentUpdates}
                  className="mt-1 h-4 w-4 accent-[#6A35A0]"
                  onChange={(event) => updateField("consentUpdates", event.target.checked)}
                  type="checkbox"
                />
                <span>
                  I would also like to receive occasional Home Money Check updates, including money-saving ideas,
                  relevant offers and home money tips.
                </span>
              </label>
            ) : null}
            {validationMessage ? (
              <p className="rounded-[1.25rem] bg-[#FFF1C8] p-4 text-sm font-black leading-6 text-[#6B4611]">
                {validationMessage}
              </p>
            ) : null}
            {status === "error" ? (
              <p className="rounded-[1.25rem] bg-[#F4D9DE] p-4 text-sm font-black leading-6 text-[#7A2130]">
                Sorry, something went wrong. Please try again.
              </p>
            ) : null}
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-7 py-4 text-base font-black text-[#2C1F3D] shadow-[0_18px_45px_rgba(34,197,94,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#32D86A] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "submitting"}
              type="submit"
            >
              {status === "submitting" ? "Sending..." : submitLabel}
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
