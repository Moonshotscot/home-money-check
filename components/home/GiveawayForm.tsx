"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { insertEnquiry } from "@/lib/supabaseClient";

const fieldClass = "w-full rounded-[1rem] border border-[#CDBFD1] bg-white px-4 py-3.5 text-base font-semibold text-[#2C2033] outline-none transition placeholder:text-[#8D808F] focus:border-[#6A2C93] focus:ring-4 focus:ring-[#6A2C93]/10";

export function GiveawayForm() {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", postcode: "", website: "", consentContact: false, consentUpdates: false });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function updateField<K extends keyof typeof form>(field: K, value: (typeof form)[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (form.website.trim()) {
      setStatus("success");
      return;
    }
    if (!form.name.trim() || !form.mobile.trim() || !form.email.trim()) {
      setMessage("Enter your name, mobile number and email address.");
      return;
    }
    if (!form.consentContact) {
      setMessage("Confirm that Home Money Check may contact you about your giveaway entry.");
      return;
    }

    setStatus("submitting");
    try {
      await insertEnquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        postcode: form.postcode.trim(),
        selected_check: "£20K Giveaway",
        requested_checks: [{ key: "giveaway-20k", label: "£20K Giveaway" }],
        source_page: "/20k-giveaway",
        message: "Asked Home Money Check to help with the current £20K Giveaway entry.",
        consent_contact: form.consentContact,
        consent_updates: form.consentUpdates,
      });
      setStatus("success");
    } catch (error) {
      console.error("Giveaway enquiry submission failed", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div aria-live="polite" className="rounded-[2rem] bg-[#FFFDF8] p-8 text-[#2C2033] shadow-[0_28px_80px_rgba(15,5,23,0.2)] ring-2 ring-[#F0C646] sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-[#22C86B] text-[#12371F]"><Check className="h-7 w-7" strokeWidth={3} /></div>
        <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.19em] text-[#6A2C93]">Details received</p>
        <h3 className="display-font mt-3 text-4xl leading-[0.98] tracking-[-0.045em] text-[#3D145F] sm:text-5xl">Your giveaway entry is underway.</h3>
        <p className="mt-5 text-base font-semibold leading-7 text-[#5D5062]">We&rsquo;ll get in touch and help you complete the current entry.</p>
      </div>
    );
  }

  return (
    <form className="min-w-0 rounded-[2rem] bg-[#FFFDF8] p-6 text-[#2C2033] shadow-[0_28px_80px_rgba(15,5,23,0.22)] ring-2 ring-[#F0C646] sm:p-9" onSubmit={handleSubmit}>
      <div aria-hidden="true" className="hidden"><label>Company website<input autoComplete="off" name="website" onChange={(event) => updateField("website", event.target.value)} tabIndex={-1} value={form.website} /></label></div>
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6A2C93]">Enter the giveaway</p>
      <h2 className="display-font mt-3 text-4xl leading-[0.98] tracking-[-0.04em] text-[#3D145F]">Start your free entry.</h2>
      <p className="mt-4 text-sm font-semibold leading-6 text-[#6B5E70]">Leave your details and we&rsquo;ll get in touch to help complete your entry.</p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-extrabold text-[#514258]">Name<input autoComplete="name" className={fieldClass} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" required value={form.name} /></label>
        <label className="grid gap-2 text-sm font-extrabold text-[#514258]">Mobile<input autoComplete="tel" className={fieldClass} inputMode="tel" onChange={(event) => updateField("mobile", event.target.value)} placeholder="Your mobile number" required type="tel" value={form.mobile} /></label>
        <label className="grid gap-2 text-sm font-extrabold text-[#514258]">Email<input autoComplete="email" className={fieldClass} onChange={(event) => updateField("email", event.target.value)} placeholder="Your email address" required type="email" value={form.email} /></label>
        <label className="grid gap-2 text-sm font-extrabold text-[#514258]">Postcode <span className="font-semibold text-[#76697A]">Optional</span><input autoComplete="postal-code" className={fieldClass} onChange={(event) => updateField("postcode", event.target.value)} placeholder="Your postcode" value={form.postcode} /></label>
      </div>
      <label className="mt-5 flex items-start gap-3 border-t border-[#D8CCBD] pt-5 text-sm font-semibold leading-6 text-[#514258]"><input checked={form.consentContact} className="mt-1 h-4 w-4 accent-[#6A2C93]" onChange={(event) => updateField("consentContact", event.target.checked)} required type="checkbox" /><span>I agree that Home Money Check may contact me about my giveaway entry.</span></label>
      <label className="mt-4 flex items-start gap-3 rounded-[1.1rem] bg-[#FFF4CE] p-4 text-sm font-semibold leading-6 text-[#514258] ring-1 ring-[#EAB929]/45"><input checked={form.consentUpdates} className="mt-1 h-5 w-5 shrink-0 accent-[#6A2C93]" onChange={(event) => updateField("consentUpdates", event.target.checked)} type="checkbox" /><span><span className="block font-extrabold text-[#3D145F]">Yes, email me Home Money Check offers, updates and money-saving ideas.</span><span className="mt-1 block text-xs">Occasional emails only. You can unsubscribe at any time.</span></span></label>
      <Link className="mt-3 inline-block text-xs font-bold text-[#6A2C93] underline underline-offset-2" href="/privacy-policy">How we use your details</Link>
      {message ? <p aria-live="polite" className="mt-4 rounded-[1rem] bg-[#F6E6B8] p-4 text-sm font-bold text-[#63470A]">{message}</p> : null}
      {status === "error" ? <p aria-live="polite" className="mt-4 rounded-[1rem] bg-[#F4DCDD] p-4 text-sm font-bold text-[#7A2931]">We couldn&rsquo;t send your details. Please try again.</p> : null}
      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#3D145F] px-6 py-4 text-base font-extrabold text-white transition hover:bg-[#512078] disabled:cursor-not-allowed disabled:opacity-65" disabled={status === "submitting"} type="submit">{status === "submitting" ? "Sending your details..." : "Enter the giveaway"}<ArrowRight className="h-5 w-5" /></button>
      <p className="mt-4 text-center text-xs font-semibold leading-5 text-[#76697A]">Free to enter. No purchase necessary. Giveaway terms apply.</p>
    </form>
  );
}
