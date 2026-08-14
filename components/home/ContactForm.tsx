"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { insertEnquiry } from "@/lib/supabaseClient";

const subjects = [
  { key: "household-bills", label: "Household bills" },
  { key: "giveaway-20k", label: "£20K Giveaway" },
  { key: "build-a-second-income", label: "Build a Second Income" },
  { key: "general-question", label: "Something else" },
] as const;

type ContactFormState = {
  subject: string;
  name: string;
  mobile: string;
  email: string;
  message: string;
  website: string;
  consentContact: boolean;
};

const fieldClass = "w-full rounded-[1rem] border border-[#CDBFD1] bg-white px-4 py-3.5 text-base font-semibold text-[#2C2033] outline-none transition placeholder:text-[#8D808F] focus:border-[#6A2C93] focus:ring-4 focus:ring-[#6A2C93]/10";

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({ subject: subjects[0].key, name: "", mobile: "", email: "", message: "", website: "", consentContact: false });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validation, setValidation] = useState("");

  function updateField<K extends keyof typeof form>(field: K, value: (typeof form)[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValidation("");
    if (form.website.trim()) {
      setStatus("success");
      return;
    }
    if (!form.name.trim() || !form.mobile.trim() || !form.email.trim() || !form.message.trim()) {
      setValidation("Enter your name, mobile number, email address and message.");
      return;
    }
    if (!form.consentContact) {
      setValidation("Confirm that Home Money Check may contact you about your message.");
      return;
    }

    const selectedSubject = subjects.find((subject) => subject.key === form.subject) || subjects[0];
    setStatus("submitting");
    try {
      await insertEnquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        selected_check: selectedSubject.label,
        requested_checks: [{ key: selectedSubject.key, label: selectedSubject.label }],
        source_page: "/contact",
        message: form.message.trim(),
        consent_contact: form.consentContact,
        consent_updates: false,
      });
      setStatus("success");
    } catch (error) {
      console.error("Contact enquiry submission failed", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div aria-live="polite" className="rounded-[2rem] bg-[#FFFDF8] p-8 text-[#2C2033] shadow-[0_28px_80px_rgba(15,5,23,0.2)] ring-2 ring-[#F0C646] sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-[#22C86B] text-[#12371F]"><Check className="h-7 w-7" strokeWidth={3} /></div>
        <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.19em] text-[#6A2C93]">Message received</p>
        <h2 className="display-font mt-3 text-4xl leading-[0.98] tracking-[-0.045em] text-[#3D145F] sm:text-5xl">Thanks. We&rsquo;ll be in touch.</h2>
        <p className="mt-5 text-base font-semibold leading-7 text-[#5D5062]">We&rsquo;ll read your message and contact you about the next step.</p>
      </div>
    );
  }

  return (
    <form className="min-w-0 rounded-[2rem] bg-[#FFFDF8] p-6 text-[#2C2033] shadow-[0_28px_80px_rgba(15,5,23,0.22)] ring-2 ring-[#F0C646] sm:p-9" onSubmit={handleSubmit}>
      <div aria-hidden="true" className="hidden"><label>Company website<input autoComplete="off" name="website" onChange={(event) => updateField("website", event.target.value)} tabIndex={-1} value={form.website} /></label></div>
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6A2C93]">Your message</p>
      <h2 className="display-font mt-3 text-4xl leading-[0.98] tracking-[-0.04em] text-[#3D145F]">How can we help?</h2>
      <div className="mt-7 grid gap-4">
        <label className="grid gap-2 text-sm font-extrabold text-[#514258]">What would you like to discuss?<select className={fieldClass} onChange={(event) => updateField("subject", event.target.value)} value={form.subject}>{subjects.map((subject) => <option key={subject.key} value={subject.key}>{subject.label}</option>)}</select></label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-extrabold text-[#514258]">Name<input autoComplete="name" className={fieldClass} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" required value={form.name} /></label>
          <label className="grid gap-2 text-sm font-extrabold text-[#514258]">Mobile<input autoComplete="tel" className={fieldClass} inputMode="tel" onChange={(event) => updateField("mobile", event.target.value)} placeholder="Your mobile number" required type="tel" value={form.mobile} /></label>
        </div>
        <label className="grid gap-2 text-sm font-extrabold text-[#514258]">Email<input autoComplete="email" className={fieldClass} onChange={(event) => updateField("email", event.target.value)} placeholder="Your email address" required type="email" value={form.email} /></label>
        <label className="grid gap-2 text-sm font-extrabold text-[#514258]">Message<textarea className={`${fieldClass} min-h-36 resize-y`} onChange={(event) => updateField("message", event.target.value)} placeholder="Tell us what you would like help with" required value={form.message} /></label>
      </div>
      <label className="mt-5 flex items-start gap-3 border-t border-[#D8CCBD] pt-5 text-sm font-semibold leading-6 text-[#514258]"><input checked={form.consentContact} className="mt-1 h-4 w-4 accent-[#6A2C93]" onChange={(event) => updateField("consentContact", event.target.checked)} required type="checkbox" /><span>I agree that Home Money Check may contact me about my message.</span></label>
      {validation ? <p aria-live="polite" className="mt-4 rounded-[1rem] bg-[#F6E6B8] p-4 text-sm font-bold text-[#63470A]">{validation}</p> : null}
      {status === "error" ? <p aria-live="polite" className="mt-4 rounded-[1rem] bg-[#F4DCDD] p-4 text-sm font-bold text-[#7A2931]">We couldn&rsquo;t send your message. Please try again.</p> : null}
      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#22C86B] px-6 py-4 text-base font-extrabold text-[#12371F] transition hover:bg-[#2DD977] disabled:cursor-not-allowed disabled:opacity-65" disabled={status === "submitting"} type="submit">{status === "submitting" ? "Sending your message..." : "Send my message"}<ArrowRight className="h-5 w-5" /></button>
    </form>
  );
}
