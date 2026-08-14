"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { insertEnquiry } from "@/lib/supabaseClient";

type DistributionKind = "staff" | "introducer" | "partner";

type DistributionEnquiryFormProps = {
  kind: DistributionKind;
};

type FormState = {
  name: string;
  organisation: string;
  role: string;
  audienceSize: string;
  mobile: string;
  email: string;
  message: string;
  website: string;
  consentContact: boolean;
};

const initialState: FormState = {
  name: "",
  organisation: "",
  role: "",
  audienceSize: "",
  mobile: "",
  email: "",
  message: "",
  website: "",
  consentContact: false,
};

const fieldClass =
  "w-full rounded-[1rem] border border-[#CDBFD1] bg-white px-4 py-3.5 text-base font-semibold text-[#2C2033] outline-none transition placeholder:text-[#8D808F] focus:border-[#6A2C93] focus:ring-4 focus:ring-[#6A2C93]/10";

const configs = {
  staff: {
    eyebrow: "For your workplace",
    title: "Tell us about your team.",
    intro: "Leave your details and we’ll get in touch about offering a Staff Bills Check in your workplace.",
    organisationLabel: "Organisation",
    organisationPlaceholder: "Your organisation",
    roleLabel: "Your role",
    rolePlaceholder: "Owner, manager, HR or wellbeing",
    audienceLabel: "Approximate staff number",
    audiencePlaceholder: "Optional",
    selectedCheck: "Your Staff’s Bills Check",
    key: "staff-bills-check",
    sourcePage: "/staff-bills-check",
    button: "Ask about Staff Bills Check",
  },
  introducer: {
    eyebrow: "For your clients",
    title: "Tell us about your business.",
    intro: "Leave your details and we’ll get in touch about helping your clients save money on household bills.",
    organisationLabel: "Business",
    organisationPlaceholder: "Your business",
    roleLabel: "Professional type",
    rolePlaceholder: "Mortgage adviser, accountant or other",
    audienceLabel: "Approximate client base",
    audiencePlaceholder: "Optional",
    selectedCheck: "For Your Clients",
    key: "client-introductions",
    sourcePage: "/for-your-clients",
    button: "Ask about client introductions",
  },
  partner: {
    eyebrow: "Your partner page",
    title: "Tell us about your audience.",
    intro: "Leave your details and we’ll get in touch about creating a Home Money Check page for your audience.",
    organisationLabel: "Business or organisation",
    organisationPlaceholder: "Your business or organisation",
    roleLabel: "What do you do?",
    rolePlaceholder: "Tell us about your work",
    audienceLabel: "Approximate audience size",
    audiencePlaceholder: "Optional",
    selectedCheck: "Partner-specific HMC Page",
    key: "partner-bills-page",
    sourcePage: "/partner-bills-check",
    button: "Ask about my HMC page",
  },
} as const;

export function DistributionEnquiryForm({ kind }: DistributionEnquiryFormProps) {
  const config = configs[kind];
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validation, setValidation] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValidation("");

    if (form.website.trim()) {
      setStatus("success");
      return;
    }

    if (!form.name.trim() || !form.organisation.trim() || !form.role.trim() || !form.mobile.trim() || !form.email.trim()) {
      setValidation("Enter your name, organisation, role, mobile number and email address.");
      return;
    }

    if (!form.consentContact) {
      setValidation("Confirm that Home Money Check may contact you about your enquiry.");
      return;
    }

    setStatus("submitting");

    try {
      const details = [
        `Organisation: ${form.organisation.trim()}`,
        `Role: ${form.role.trim()}`,
        form.audienceSize.trim() ? `Audience size: ${form.audienceSize.trim()}` : "",
        form.message.trim() ? `Notes: ${form.message.trim()}` : "",
      ].filter(Boolean).join("\n");

      await insertEnquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        selected_check: config.selectedCheck,
        requested_checks: [{ key: config.key, label: config.selectedCheck }],
        source_page: config.sourcePage,
        message: details,
        consent_contact: form.consentContact,
        consent_updates: false,
      });

      setStatus("success");
    } catch (error) {
      console.error("Distribution enquiry submission failed", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div aria-live="polite" className="rounded-[2rem] bg-[#FFFDF8] p-8 text-[#2C2033] shadow-[0_28px_80px_rgba(15,5,23,0.2)] ring-2 ring-[#F0C646] sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-[#22C86B] text-[#12371F]"><Check className="h-7 w-7" strokeWidth={3} /></div>
        <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.19em] text-[#6A2C93]">Details received</p>
        <h2 className="display-font mt-3 text-4xl leading-[0.98] tracking-[-0.045em] text-[#3D145F] sm:text-5xl">We’ll be in touch.</h2>
        <p className="mt-5 text-base font-semibold leading-7 text-[#5D5062]">We’ll contact you to answer your questions and explain the next step.</p>
      </div>
    );
  }

  return (
    <form className="min-w-0 rounded-[2rem] bg-[#FFFDF8] p-6 text-[#2C2033] shadow-[0_28px_80px_rgba(15,5,23,0.22)] ring-2 ring-[#F0C646] sm:p-9" onSubmit={handleSubmit}>
      <div aria-hidden="true" className="hidden"><label>Company website<input autoComplete="off" name="website" onChange={(event) => updateField("website", event.target.value)} tabIndex={-1} value={form.website} /></label></div>
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6A2C93]">{config.eyebrow}</p>
      <h2 className="display-font mt-3 text-4xl leading-[0.98] tracking-[-0.04em] text-[#3D145F]">{config.title}</h2>
      <p className="mt-4 text-sm font-semibold leading-6 text-[#6B5E70]">{config.intro}</p>
      <div className="mt-7 grid gap-4">
        <label className="grid gap-2 text-sm font-extrabold text-[#514258]">Name<input autoComplete="name" className={fieldClass} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" required value={form.name} /></label>
        <label className="grid gap-2 text-sm font-extrabold text-[#514258]">{config.organisationLabel}<input autoComplete="organization" className={fieldClass} onChange={(event) => updateField("organisation", event.target.value)} placeholder={config.organisationPlaceholder} required value={form.organisation} /></label>
        <label className="grid gap-2 text-sm font-extrabold text-[#514258]">{config.roleLabel}<input autoComplete="organization-title" className={fieldClass} onChange={(event) => updateField("role", event.target.value)} placeholder={config.rolePlaceholder} required value={form.role} /></label>
        <label className="grid gap-2 text-sm font-extrabold text-[#514258]">{config.audienceLabel}<input className={fieldClass} inputMode="numeric" onChange={(event) => updateField("audienceSize", event.target.value)} placeholder={config.audiencePlaceholder} value={form.audienceSize} /></label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-extrabold text-[#514258]">Mobile<input autoComplete="tel" className={fieldClass} inputMode="tel" onChange={(event) => updateField("mobile", event.target.value)} placeholder="Your mobile number" required type="tel" value={form.mobile} /></label>
          <label className="grid gap-2 text-sm font-extrabold text-[#514258]">Email<input autoComplete="email" className={fieldClass} onChange={(event) => updateField("email", event.target.value)} placeholder="Your email address" required type="email" value={form.email} /></label>
        </div>
        <label className="grid gap-2 text-sm font-extrabold text-[#514258]">Anything you want us to know? <span className="font-semibold text-[#76697A]">Optional</span><textarea className={`${fieldClass} min-h-28 resize-y`} onChange={(event) => updateField("message", event.target.value)} placeholder="Add any useful details" value={form.message} /></label>
      </div>
      <label className="mt-5 flex items-start gap-3 border-t border-[#D8CCBD] pt-5 text-sm font-semibold leading-6 text-[#514258]"><input checked={form.consentContact} className="mt-1 h-4 w-4 accent-[#6A2C93]" onChange={(event) => updateField("consentContact", event.target.checked)} required type="checkbox" /><span>I agree that Home Money Check may contact me about this enquiry.</span></label>
      {validation ? <p aria-live="polite" className="mt-4 rounded-[1rem] bg-[#F6E6B8] p-4 text-sm font-bold text-[#63470A]">{validation}</p> : null}
      {status === "error" ? <p aria-live="polite" className="mt-4 rounded-[1rem] bg-[#F4DCDD] p-4 text-sm font-bold text-[#7A2931]">We couldn’t send your details. Please try again.</p> : null}
      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#22C86B] px-6 py-4 text-base font-extrabold text-[#12371F] transition hover:bg-[#2DD977] disabled:cursor-not-allowed disabled:opacity-65" disabled={status === "submitting"} type="submit">{status === "submitting" ? "Sending your details..." : config.button}<ArrowRight className="h-5 w-5" /></button>
    </form>
  );
}
