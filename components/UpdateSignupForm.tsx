"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { insertUpdateSubscriber } from "@/lib/supabaseClient";

const interestOptions = [
  "Household bills",
  "Mortgages",
  "Protection",
  "Wills and POAs",
  "Business services",
  "Partner opportunities",
];

type FormState = {
  first_name: string;
  email: string;
  postcode: string;
  interests: string[];
  consent_updates: boolean;
  website: string;
};

const initialState: FormState = {
  first_name: "",
  email: "",
  postcode: "",
  interests: [],
  consent_updates: false,
  website: "",
};

const fieldClass =
  "w-full appearance-none rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.08)] outline-none ring-2 ring-transparent placeholder:text-[#8A7D96] focus:ring-[#FDCA55]";

export function UpdateSignupForm({ sourcePage = "/updates" }: { sourcePage?: string }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationMessage, setValidationMessage] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleInterest(interest: string) {
    setForm((current) => {
      const isSelected = current.interests.includes(interest);

      return {
        ...current,
        interests: isSelected
          ? current.interests.filter((item) => item !== interest)
          : [...current.interests, interest],
      };
    });
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
      setForm(initialState);
      return;
    }

    if (!form.first_name.trim() || !form.email.trim()) {
      setValidationMessage("Please enter your first name and email address.");
      return;
    }

    if (!form.consent_updates) {
      setValidationMessage("Please tick the updates consent box.");
      return;
    }

    setStatus("submitting");

    try {
      await insertUpdateSubscriber({
        first_name: form.first_name.trim(),
        email: form.email.trim(),
        postcode: form.postcode.trim() || undefined,
        interests: form.interests,
        consent_updates: form.consent_updates,
        source_page: sourcePage,
      });

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F7F0E8] p-7 text-[#2C1F3D] shadow-[0_24px_70px_rgba(44,31,61,0.13)] ring-1 ring-[#EADFFD] md:p-9">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#EADFFD]/55" />
      <p className="relative mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
        Updates
      </p>
      <h2 className="relative text-4xl font-black leading-[0.98] tracking-[-0.065em] text-[#2C1F3D] md:text-5xl">
        Sign up for updates
      </h2>
      <p className="relative mt-5 rounded-[1.35rem] bg-white/70 p-4 text-sm font-bold leading-6 text-[#4F247D]">
        Occasional emails only. You can unsubscribe at any time.
      </p>

      {status === "success" ? (
        <div className="relative mt-7 rounded-[1.5rem] bg-[#CFE6D5] p-5 text-base font-black leading-7 text-[#173E29]">
          Thanks, you’re on the updates list.
        </div>
      ) : (
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
            First name
            <input
              className={fieldClass}
              onChange={(event) => updateField("first_name", event.target.value)}
              required
              value={form.first_name}
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
            Postcode (optional)
            <input
              className={fieldClass}
              onChange={(event) => updateField("postcode", event.target.value)}
              value={form.postcode}
            />
          </label>

          <fieldset className="grid gap-3">
            <legend className="text-sm font-black text-[#5F2D8C]">Interests (optional)</legend>
            <div className="flex flex-wrap gap-2 rounded-[1.35rem] bg-white/55 p-4">
              {interestOptions.map((interest) => {
                const isSelected = form.interests.includes(interest);

                return (
                  <button
                    className={`rounded-full px-4 py-2 text-sm font-black transition-all duration-300 ${
                      isSelected
                        ? "bg-[#FDCA55] text-[#4F247D] shadow-[0_8px_18px_rgba(253,202,85,0.22)]"
                        : "bg-white text-[#5F2D8C] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.12)] hover:bg-[#EADFFD]"
                    }`}
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    type="button"
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label className="flex items-start gap-3 rounded-[1.35rem] bg-white/65 p-4 text-sm font-bold leading-6 text-[#2C1F3D]">
            <input
              className="mt-1 h-4 w-4 accent-[#6A35A0]"
              checked={form.consent_updates}
              onChange={(event) => updateField("consent_updates", event.target.checked)}
              required
              type="checkbox"
            />
            <span>
              Yes, send me Home Money Check updates by email. I can unsubscribe at any time.
            </span>
          </label>

          {validationMessage ? (
            <p className="rounded-[1.25rem] bg-[#F4CF7A] p-4 text-sm font-black text-[#4F247D]">
              {validationMessage}
            </p>
          ) : null}
          {status === "error" ? (
            <p className="rounded-[1.25rem] bg-[#F4D9DE] p-4 text-sm font-black text-[#7A2130]">
              Sorry, something went wrong. Please try again.
            </p>
          ) : null}

          <button
            className="flex transform-gpu items-center justify-center gap-2 rounded-full bg-[#6A35A0] px-7 py-4 text-base font-black text-[#F7F0E8] shadow-[0_18px_45px_rgba(106,53,160,0.25)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "submitting"}
            type="submit"
          >
            {status === "submitting" ? "Signing up..." : "Sign up for updates"}
            <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
          </button>
        </form>
      )}
    </div>
  );
}
