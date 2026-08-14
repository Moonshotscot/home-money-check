"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { insertEnquiry, type RequestedCheck } from "@/lib/supabaseClient";

type FocusedBillsFormProps = {
  sourcePage: string;
};

type ServiceChoice = "gas" | "electricity" | "broadband";

type FormState = {
  choices: ServiceChoice[];
  postcode: string;
  name: string;
  mobile: string;
  email: string;
  website: string;
  consentContact: boolean;
  consentUpdates: boolean;
};

const choices: Array<{ value: ServiceChoice; label: string; note: string; check: RequestedCheck }> = [
  { value: "gas", label: "Gas", note: "Check your gas costs", check: { key: "gas", label: "Gas" } },
  {
    value: "electricity",
    label: "Electricity",
    note: "Check your electricity costs",
    check: { key: "electricity", label: "Electricity" },
  },
  {
    value: "broadband",
    label: "Broadband",
    note: "Check price, speed and usage",
    check: { key: "broadband", label: "Broadband" },
  },
];

const allServicesCheck: RequestedCheck = {
  key: "all-household-services",
  label: "Gas, electricity and broadband",
};

const initialState: FormState = {
  choices: [],
  postcode: "",
  name: "",
  mobile: "",
  email: "",
  website: "",
  consentContact: false,
  consentUpdates: false,
};

const fieldClass =
  "w-full rounded-[1rem] border border-[#CDBFD1] bg-white px-4 py-3.5 text-base font-semibold text-[#2C2033] outline-none transition placeholder:text-[#8D808F] focus:border-[#6A2C93] focus:ring-4 focus:ring-[#6A2C93]/10";

export function FocusedBillsForm({ sourcePage }: FocusedBillsFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationMessage, setValidationMessage] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleChoice(choice: ServiceChoice) {
    setForm((current) => ({
      ...current,
      choices: current.choices.includes(choice)
        ? current.choices.filter((selectedChoice) => selectedChoice !== choice)
        : [...current.choices, choice],
    }));
  }

  function continueToDetails() {
    if (form.choices.length === 0) {
      setValidationMessage("Choose at least one service to check.");
      return;
    }

    setValidationMessage("");
    setStep(2);
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

    if (form.choices.length === 0 || !form.name.trim() || !form.mobile.trim() || !form.email.trim() || !form.postcode.trim()) {
      setValidationMessage("Enter your mobile number, email, postcode and name.");
      return;
    }

    if (!form.consentContact) {
      setValidationMessage("Confirm that we can contact you about your bills check.");
      return;
    }

    const selectedChoices = choices.filter((choice) => form.choices.includes(choice.value));
    const checks = selectedChoices.length === choices.length
      ? [allServicesCheck]
      : selectedChoices.map((choice) => choice.check);
    const selectionSummary = checks.map((check) => check.label).join(", ");

    setStatus("submitting");

    try {
      await insertEnquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        postcode: form.postcode.trim(),
        selected_check: checks[0].label,
        requested_checks: checks,
        source_page: sourcePage,
        message: `Household bills check form. Selected: ${selectionSummary}.`,
        consent_contact: form.consentContact,
        consent_updates: form.consentUpdates,
      });

      setStatus("success");
    } catch (error) {
      console.error("Home Money Check enquiry submission failed", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div aria-live="polite" className="rounded-[2rem] bg-[#FFFDF8] p-7 text-[#2C2033] shadow-[0_28px_80px_rgba(15,5,23,0.2)] ring-1 ring-[#F0C646]/55 sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#20B963] text-[#173421]">
          <Check className="h-7 w-7" strokeWidth={3} />
        </div>
        <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.19em] text-[#6A2C93]">Enquiry received</p>
        <h3 className="display-font mt-3 text-4xl leading-[0.98] tracking-[-0.045em] text-[#3D145F] sm:text-5xl">
          Your Home Money Check is underway.
        </h3>
        <p className="mt-5 text-base font-semibold leading-7 text-[#5D5062]">
          We&rsquo;ll get in touch for a chat and start building your quote.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] bg-[#FFFDF8] p-6 text-[#2C2033] shadow-[0_28px_80px_rgba(15,5,23,0.2)] ring-2 ring-[#F0C646] sm:p-9">
      <div className="flex items-center justify-between gap-5 border-b border-[#F0C646]/55 pb-5">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6A2C93]">
            {step === 1 ? "Your check" : "Your details"}
          </p>
          <p className="mt-1 text-sm font-bold text-[#6B5E70]">Step {step} of 2</p>
        </div>
        <div aria-hidden="true" className="flex gap-2">
          <span className="h-2 w-12 rounded-full bg-[#6A2C93]" />
          <span className={`h-2 w-12 rounded-full ${step === 2 ? "bg-[#6A2C93]" : "bg-[#F0C646]/55"}`} />
        </div>
      </div>

      {step === 1 ? (
        <div className="pt-7">
          <h3 className="text-2xl font-extrabold tracking-[-0.035em] text-[#2C2033]">What would you like to check?</h3>
          <p className="mt-2 text-sm font-semibold text-[#76697A]">Choose one or more services.</p>
          <div className="mt-5 grid gap-3">
            {choices.map((choice) => {
              const selected = form.choices.includes(choice.value);

              return (
                <button
                  aria-pressed={selected}
                  className={`flex items-center justify-between gap-5 rounded-[1.15rem] border p-4 text-left transition ${
                    selected
                      ? "border-[#6A2C93] bg-[#EEE4F5] shadow-[0_10px_30px_rgba(61,20,95,0.08)]"
                      : "border-[#D8CCBD] bg-white hover:border-[#6A2C93]/45"
                  }`}
                  key={choice.value}
                  onClick={() => toggleChoice(choice.value)}
                  type="button"
                >
                  <span>
                    <span className="block text-base font-extrabold text-[#37293D]">{choice.label}</span>
                    <span className="mt-1 block text-sm font-medium text-[#76697A]">{choice.note}</span>
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                      selected ? "border-[#20B963] bg-[#20B963] text-[#173421]" : "border-[#CDBFD1]"
                    }`}
                  >
                    {selected ? <Check className="h-4 w-4" strokeWidth={3} /> : null}
                  </span>
                </button>
              );
            })}
          </div>

          {validationMessage ? (
            <p aria-live="polite" className="mt-4 rounded-[1rem] bg-[#F6E6B8] p-4 text-sm font-bold text-[#63470A]">
              {validationMessage}
            </p>
          ) : null}

          <button
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#22C86B] px-6 py-4 text-base font-extrabold text-[#12371F] ring-2 ring-inset ring-[#F0C646] transition duration-300 hover:bg-[#2DD977] disabled:cursor-not-allowed disabled:bg-[#D8CCBD] disabled:text-[#827786] disabled:ring-[#E8DFC9] disabled:hover:bg-[#D8CCBD]"
            disabled={form.choices.length === 0}
            onClick={continueToDetails}
            type="button"
          >
            Continue
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <form className="pt-7" onSubmit={handleSubmit}>
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

          <button
            className="mb-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#6A2C93]"
            onClick={() => {
              setValidationMessage("");
              setStep(1);
            }}
            type="button"
          >
            <ArrowLeft className="h-4 w-4" />
            Change your selection
          </button>

          <h3 className="text-2xl font-extrabold tracking-[-0.035em] text-[#2C2033]">Your contact details</h3>
          <div className="mt-5 grid gap-4">
            <label className="grid gap-2 text-sm font-extrabold text-[#514258]">
              Mobile
              <input
                autoComplete="tel"
                className={fieldClass}
                inputMode="tel"
                onChange={(event) => updateField("mobile", event.target.value)}
                placeholder="Your mobile number"
                required
                type="tel"
                value={form.mobile}
              />
            </label>
            <label className="grid gap-2 text-sm font-extrabold text-[#514258]">
              Email
              <input
                autoComplete="email"
                className={fieldClass}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="Your email address"
                required
                type="email"
                value={form.email}
              />
            </label>
            <label className="grid gap-2 text-sm font-extrabold text-[#514258]">
              Postcode
              <input
                autoComplete="postal-code"
                className={fieldClass}
                onChange={(event) => updateField("postcode", event.target.value)}
                placeholder="Your postcode"
                required
                value={form.postcode}
              />
              <span className="text-xs font-medium leading-5 text-[#76697A]">
                We use your postcode to check which services are available at your address.
              </span>
            </label>
            <label className="grid gap-2 text-sm font-extrabold text-[#514258]">
              Name
              <input
                autoComplete="name"
                className={fieldClass}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your name"
                required
                value={form.name}
              />
            </label>
          </div>

          <label className="mt-5 flex items-start gap-3 border-t border-[#D8CCBD] pt-5 text-sm font-semibold leading-6 text-[#514258]">
            <input
              checked={form.consentContact}
              className="mt-1 h-4 w-4 accent-[#6A2C93]"
              onChange={(event) => updateField("consentContact", event.target.checked)}
              required
              type="checkbox"
            />
            <span>
              I agree that Home Money Check may contact me about my enquiry. If another provider needs to contact me,
              we&rsquo;ll explain this first.
            </span>
          </label>
          <div className="mt-4 rounded-[1.2rem] bg-[#FFF4CE] p-4 ring-1 ring-[#EAB929]/45">
            <label className="flex items-start gap-3 text-sm font-semibold leading-6 text-[#514258]">
              <input
                checked={form.consentUpdates}
                className="mt-1 h-5 w-5 shrink-0 accent-[#6A2C93]"
                onChange={(event) => updateField("consentUpdates", event.target.checked)}
                type="checkbox"
              />
              <span>
                <span className="block font-extrabold text-[#3D145F]">
                  Yes, email me Home Money Check offers, updates and money-saving ideas.
                </span>
                <span className="mt-1 block text-xs font-semibold leading-5 text-[#6B5E70]">
                  Occasional emails only. You can unsubscribe at any time.
                </span>
              </span>
            </label>
            <Link className="mt-2 inline-block text-xs font-bold text-[#6A2C93] underline underline-offset-2" href="/privacy-policy">
              How we use your details
            </Link>
          </div>

          {validationMessage ? (
            <p aria-live="polite" className="mt-4 rounded-[1rem] bg-[#F6E6B8] p-4 text-sm font-bold text-[#63470A]">
              {validationMessage}
            </p>
          ) : null}
          {status === "error" ? (
            <p aria-live="polite" className="mt-4 rounded-[1rem] bg-[#F4DCDD] p-4 text-sm font-bold text-[#7A2931]">
              We couldn&rsquo;t send your details. Try again or contact Home Money Check directly.
            </p>
          ) : null}

          <button
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#20B963] px-6 py-4 text-base font-extrabold text-[#173421] transition duration-300 hover:bg-[#2CCF70] disabled:cursor-not-allowed disabled:opacity-65"
            disabled={status === "submitting"}
            type="submit"
          >
            {status === "submitting" ? "Sending your details..." : "Check how much I could save"}
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-4 text-center text-xs font-semibold leading-5 text-[#76697A]">
            We will show you the quote and potential savings before you decide what to do.
          </p>
        </form>
      )}
    </div>
  );
}
