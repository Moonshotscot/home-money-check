"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { insertUpdateSubscriber } from "@/lib/supabaseClient";

const interestOptions = [
  "Household bills",
  "Money-saving offers",
  "Cashback offers",
  "Giveaways",
  "Earning a second income",
] as const;

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
  "w-full appearance-none rounded-[1rem] border border-[#D8CCBD] bg-white px-4 py-3.5 text-base font-semibold text-[#2C2033] outline-none transition placeholder:text-[#8D808F] focus:border-[#6A2C93] focus:ring-4 focus:ring-[#6A2C93]/10";

export function UpdateSignupForm({ sourcePage = "/updates" }: { sourcePage?: string }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationMessage, setValidationMessage] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleInterest(interest: string) {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
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
      setValidationMessage("Enter your first name and email address.");
      return;
    }

    if (!form.consent_updates) {
      setValidationMessage("Please confirm that you would like to receive emails from Home Money Check.");
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
    <div className="relative overflow-hidden rounded-[2rem] bg-[#FFFDF8] p-6 text-[#2C2033] shadow-[0_28px_80px_rgba(15,5,23,0.2)] ring-2 ring-[#F0C646] sm:p-9">
      <div className="absolute -right-14 -top-16 h-40 w-40 rounded-full border-[32px] border-[#F0C646]/18" />
      <p className="relative mb-5 text-xs font-extrabold uppercase tracking-[0.19em] text-[#6A2C93]">
        Join the list
      </p>
      <h2 className="display-font relative text-4xl leading-[0.98] tracking-[-0.045em] text-[#3D145F] sm:text-5xl">
        Get the offers worth knowing about.
      </h2>
      <p className="relative mt-5 text-sm font-semibold leading-6 text-[#5D5062]">
        Home Money Check offers, household bill updates, giveaways and money-saving ideas by email.
      </p>

      {status === "success" ? (
        <div className="relative mt-7 rounded-[1.2rem] bg-[#DDF6E7] p-5 text-base font-extrabold leading-7 text-[#173E29]">
          Thanks, you&rsquo;re on the Home Money Check list.
        </div>
      ) : (
        <form className="relative mt-7 grid gap-4" onSubmit={handleSubmit}>
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

          <label className="grid gap-2 text-sm font-extrabold text-[#514258]">
            First name
            <input
              autoComplete="given-name"
              className={fieldClass}
              onChange={(event) => updateField("first_name", event.target.value)}
              required
              value={form.first_name}
            />
          </label>

          <label className="grid gap-2 text-sm font-extrabold text-[#514258]">
            Email
            <input
              autoComplete="email"
              className={fieldClass}
              onChange={(event) => updateField("email", event.target.value)}
              required
              type="email"
              value={form.email}
            />
          </label>

          <label className="grid gap-2 text-sm font-extrabold text-[#514258]">
            Postcode (optional)
            <input
              autoComplete="postal-code"
              className={fieldClass}
              onChange={(event) => updateField("postcode", event.target.value)}
              value={form.postcode}
            />
          </label>

          <fieldset className="grid gap-3">
            <legend className="text-sm font-extrabold text-[#514258]">
              What would you like to hear about? (optional)
            </legend>
            <div className="flex flex-wrap gap-2 rounded-[1.1rem] bg-[#F6F0E8] p-4">
              {interestOptions.map((interest) => {
                const isSelected = form.interests.includes(interest);

                return (
                  <button
                    aria-pressed={isSelected}
                    className={`rounded-full px-4 py-2 text-sm font-extrabold transition duration-300 ${
                      isSelected
                        ? "bg-[#F0C646] text-[#3D145F] shadow-[0_8px_18px_rgba(240,198,70,0.24)]"
                        : "bg-white text-[#5B4B61] ring-1 ring-[#D8CCBD] hover:ring-[#6A2C93]/45"
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

          <label className="flex items-start gap-3 rounded-[1.2rem] bg-[#FFF4CE] p-4 text-sm font-semibold leading-6 text-[#514258] ring-1 ring-[#EAB929]/45">
            <input
              checked={form.consent_updates}
              className="mt-1 h-5 w-5 shrink-0 accent-[#6A2C93]"
              onChange={(event) => updateField("consent_updates", event.target.checked)}
              required
              type="checkbox"
            />
            <span>
              <span className="font-extrabold text-[#3D145F]">
                Yes, email me Home Money Check offers, updates and money-saving ideas.
              </span>{" "}
              I can unsubscribe at any time.
            </span>
          </label>

          {validationMessage ? (
            <p aria-live="polite" className="rounded-[1.1rem] bg-[#F6E6B8] p-4 text-sm font-bold text-[#63470A]">
              {validationMessage}
            </p>
          ) : null}
          {status === "error" ? (
            <p aria-live="polite" className="rounded-[1.1rem] bg-[#F4DCDD] p-4 text-sm font-bold text-[#7A2931]">
              We couldn&rsquo;t add you to the list. Please try again.
            </p>
          ) : null}

          <button
            className="flex items-center justify-center gap-2 rounded-full bg-[#22C86B] px-7 py-4 text-base font-extrabold text-[#12371F] shadow-[0_18px_45px_rgba(34,200,107,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2DD977] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "submitting"}
            type="submit"
          >
            {status === "submitting" ? "Joining the list..." : "Join the list"}
            <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
          </button>
        </form>
      )}
    </div>
  );
}
