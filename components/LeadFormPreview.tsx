"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { insertEnquiry, type RequestedCheck } from "@/lib/supabaseClient";

const checkGroups = [
  {
    label: "Household bills",
    options: [
      { key: "energy", label: "Energy" },
      { key: "broadband", label: "Broadband" },
      { key: "mobile", label: "Mobile SIMs" },
      { key: "giveaway-20k", label: "£20K Giveaway" },
    ],
  },
  {
    label: "Planning",
    options: [
      { key: "mortgages", label: "Mortgages" },
      { key: "estate-planning", label: "Wills and POAs" },
    ],
  },
  {
    label: "Insurance",
    options: [
      { key: "protection", label: "Protection" },
      { key: "private-medical-insurance", label: "Private Medical Insurance" },
      { key: "business-protection", label: "Business protection" },
    ],
  },
  {
    label: "Business",
    options: [
      { key: "business-utilities", label: "Business utilities" },
      { key: "business-continuity", label: "Business continuity" },
      { key: "finance-bookkeeping", label: "Finance / bookkeeping" },
      { key: "partner-with-us", label: "Partner with us" },
    ],
  },
];

const defaultOpenGroups = ["Household bills"];

type LeadFormPreviewProps = {
  defaultSelectedCheck?: string;
  selectedCheck?: string;
  sourcePage: string;
  uwRelated?: boolean;
  compactCheckSelector?: boolean;
  title?: string;
  submitLabel?: string;
  helperText?: ReactNode;
  showPostcode?: boolean;
  messagePlaceholder?: string;
};

type FormState = {
  name: string;
  email: string;
  mobile: string;
  postcode: string;
  requested_checks: RequestedCheck[];
  message: string;
  website: string;
  consent_contact: boolean;
  consent_updates: boolean;
};

const fieldClass =
  "w-full appearance-none rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.08)] outline-none ring-2 ring-transparent placeholder:text-[#8A7D96] focus:ring-[#FDCA55]";

const flatCheckOptions = checkGroups.flatMap((group) => group.options);

const checkAliases = new Map(
  flatCheckOptions.flatMap((option) => [
    [normaliseCheckLabel(option.label), option],
    [normaliseCheckLabel(option.key), option],
  ]),
);

checkAliases.set("mobile sim deals", { key: "mobile", label: "Mobile SIMs" });
checkAliases.set("mobile sims", { key: "mobile", label: "Mobile SIMs" });
checkAliases.set("private medical insurance", {
  key: "private-medical-insurance",
  label: "Private Medical Insurance",
});
checkAliases.set("first-time buyers", { key: "mortgages", label: "Mortgages" });
checkAliases.set("remortgages", { key: "mortgages", label: "Mortgages" });
checkAliases.set("moving home", { key: "mortgages", label: "Mortgages" });
checkAliases.set("finance/bookkeeping", {
  key: "finance-bookkeeping",
  label: "Finance / bookkeeping",
});

function normaliseCheckLabel(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function fallbackCheckFromLabel(label: string): RequestedCheck {
  return {
    key: label
      .trim()
      .toLowerCase()
      .replace(/£/g, "")
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80),
    label: label.trim(),
  };
}

function getCheckFromLabel(label?: string) {
  const trimmed = label?.trim();

  if (!trimmed || trimmed === "Choose your check") {
    return null;
  }

  return checkAliases.get(normaliseCheckLabel(trimmed)) || fallbackCheckFromLabel(trimmed);
}

export function LeadFormPreview({
  defaultSelectedCheck,
  selectedCheck,
  sourcePage,
  compactCheckSelector = false,
  helperText = "Pop in your details and we’ll get back to you quickly. No obligation at all.",
  submitLabel = "Start my check",
  title = "Tell us what you want to check.",
  showPostcode = true,
  messagePlaceholder,
}: LeadFormPreviewProps) {
  const initialRequestedChecks = useMemo(() => {
    const defaultCheck = getCheckFromLabel(defaultSelectedCheck);
    const selected = getCheckFromLabel(selectedCheck);
    const initial = defaultCheck || selected;

    return initial ? [initial] : [];
  }, [defaultSelectedCheck, selectedCheck]);

  const initialState = useMemo<FormState>(
    () => ({
      name: "",
      email: "",
      mobile: "",
      postcode: "",
      requested_checks: initialRequestedChecks,
      message: "",
      website: "",
      consent_contact: false,
      consent_updates: false,
    }),
    [initialRequestedChecks],
  );

  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationMessage, setValidationMessage] = useState("");
  const isGeneralSelector = !compactCheckSelector && initialRequestedChecks.length === 0;
  const [showCheckSelector, setShowCheckSelector] = useState(isGeneralSelector);
  const [openGroups, setOpenGroups] = useState<string[]>(defaultOpenGroups);

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
      setForm({
        ...initialState,
        requested_checks: form.requested_checks,
      });
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.mobile.trim() || form.requested_checks.length === 0) {
      setValidationMessage("Please complete your name, email, mobile and at least one check.");
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
        selected_check: form.requested_checks[0].label,
        requested_checks: form.requested_checks,
        source_page: sourcePage,
        message: form.message.trim() || undefined,
        consent_contact: form.consent_contact,
        consent_updates: form.consent_updates,
      });

      setStatus("success");
      setForm({
        ...initialState,
        requested_checks: form.requested_checks,
      });
    } catch (error) {
      console.error("Supabase enquiry insert failed", error);
      setStatus("error");
    }
  }

  function toggleRequestedCheck(option: RequestedCheck) {
    setForm((current) => {
      const isSelected = current.requested_checks.some((check) => check.key === option.key);

      return {
        ...current,
        requested_checks: isSelected
          ? current.requested_checks.filter((check) => check.key !== option.key)
          : [...current.requested_checks, option],
      };
    });
  }

  function toggleGroup(label: string) {
    setOpenGroups((current) =>
      current.includes(label) ? current.filter((group) => group !== label) : [...current, label],
    );
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
      <p className="relative mt-5 rounded-[1.35rem] bg-white/70 p-4 text-sm font-bold leading-6 text-[#4F247D]">
        {helperText}
      </p>
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
        <div className="hidden" aria-hidden="true">
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
        {showPostcode ? (
          <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
            Postcode
            <input
              className={fieldClass}
              onChange={(event) => updateField("postcode", event.target.value)}
              value={form.postcode}
            />
          </label>
        ) : null}
        <fieldset className="grid gap-3">
          <legend className="text-sm font-black text-[#5F2D8C]">
            {compactCheckSelector ? "Your check" : "What would you like to check?"}
          </legend>
          {compactCheckSelector ? (
            <div className="rounded-[1.35rem] bg-white/75 p-4 text-sm font-black leading-6 text-[#5F2D8C]">
              {form.requested_checks[0]?.label || "This service"}
            </div>
          ) : (
            <div className="grid gap-3 rounded-[1.35rem] bg-white/55 p-4">
              {form.requested_checks.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {form.requested_checks.map((check) => (
                    <span
                      className="rounded-full bg-[#FDCA55] px-3 py-2 text-xs font-black text-[#4F247D] shadow-[0_8px_18px_rgba(253,202,85,0.22)]"
                      key={check.key}
                    >
                      {check.label}
                    </span>
                  ))}
                </div>
              ) : null}
              {!isGeneralSelector ? (
                <button
                  className="w-fit rounded-full bg-white px-4 py-2 text-sm font-black text-[#5F2D8C] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.12)] transition-colors duration-300 hover:bg-[#EADFFD]"
                  onClick={() => setShowCheckSelector((current) => !current)}
                  type="button"
                >
                  {showCheckSelector ? "Hide extra checks" : "Add another check"}
                </button>
              ) : null}
              {showCheckSelector ? (
                <div className="grid gap-2">
                  {checkGroups.map((group) => {
                    const isOpen = openGroups.includes(group.label);

                    return (
                      <div
                        className="overflow-hidden rounded-[1.1rem] bg-white shadow-[inset_0_0_0_1px_rgba(95,45,140,0.08)]"
                        key={group.label}
                      >
                        <button
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-black text-[#5F2D8C]"
                          onClick={() => toggleGroup(group.label)}
                          type="button"
                        >
                          <span>{group.label}</span>
                          <span className="text-lg leading-none">{isOpen ? "-" : "+"}</span>
                        </button>
                        {isOpen ? (
                          <div className="flex flex-wrap gap-2 border-t border-[#EADFFD] p-3">
                            {group.options.map((option) => {
                              const selected = form.requested_checks.some(
                                (check) => check.key === option.key,
                              );

                              return (
                                <button
                                  aria-pressed={selected}
                                  className={`rounded-full px-3 py-2 text-xs font-black transition-all duration-300 sm:text-sm ${
                                    selected
                                      ? "bg-[#FDCA55] text-[#4F247D] shadow-[0_10px_24px_rgba(253,202,85,0.25)] ring-2 ring-[#4F247D]/15"
                                      : "bg-[#F7F0E8] text-[#5F2D8C] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.10)] hover:bg-[#EADFFD]"
                                  }`}
                                  key={option.key}
                                  onClick={() => toggleRequestedCheck(option)}
                                  type="button"
                                >
                                  {option.label}
                                </button>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          )}
        </fieldset>
        <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
          Message
          <textarea
            className={`${fieldClass} min-h-28`}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder={messagePlaceholder}
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
        {status === "success" ? (
          <div className="rounded-[1.75rem] bg-white p-5 text-[#2C1F3D] shadow-[0_18px_50px_rgba(44,31,61,0.10)]">
            <p className="text-lg font-black leading-7 tracking-[-0.025em]">
              Thanks, we've received your details now. We’ll get back to you within 24 hours, and
              often much sooner!
            </p>
          </div>
        ) : null}
        <button
          className="flex transform-gpu items-center justify-center gap-2 rounded-full bg-[#6A35A0] px-7 py-4 text-base font-black text-[#F7F0E8] shadow-[0_18px_45px_rgba(106,53,160,0.25)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? "Sending..." : submitLabel}
          <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
        </button>
      </form>
    </div>
  );
}

