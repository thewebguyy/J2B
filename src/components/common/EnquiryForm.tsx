"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { CONTACT_EMAIL, ENQUIRY_CATEGORIES } from "@/lib/enquiry";

type Status = "idle" | "submitting" | "success" | "unavailable" | "rate-limited" | "error";

const inputClass =
  "w-full rounded-lg border border-ivory-border bg-ivory-canvas px-4 py-3 font-sans text-base text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold-harvest focus:border-gold-harvest";

export const EnquiryForm: React.FC = () => {
  const enabled = process.env.NEXT_PUBLIC_ENQUIRY_ENABLED === "true";

  const [interest, setInterest] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const focusRef = useRef<HTMLFieldSetElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const preset = new URLSearchParams(window.location.search).get("interest");
    if (preset && ENQUIRY_CATEGORIES.some((category) => category.id === preset)) {
      setInterest(preset);
    }
  }, []);

  function clearErrors() {
    setFieldErrors({});
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearErrors();
    setStatus("submitting");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, country, interest, message, consent, website }),
      });

      if (response.status === 201) {
        setName("");
        setEmail("");
        setCountry("");
        setMessage("");
        setConsent(false);
        setWebsite("");
        setStatus("success");
        return;
      }

      if (response.status === 400) {
        const data = (await response.json()) as { fieldErrors?: { field: string; message: string }[] };
        const nextErrors: Record<string, string> = {};
        for (const item of data.fieldErrors ?? []) {
          nextErrors[item.field] = item.message;
        }
        setFieldErrors(nextErrors);
        setStatus("idle");
        focusRef.current?.focus();
        return;
      }

      if (response.status === 429) {
        setStatus("rate-limited");
        return;
      }

      if (response.status === 503) {
        setStatus("unavailable");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (!enabled) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-gold-harvest/60 bg-ivory-surface p-8 sm:p-10"
      >
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mb-3">
          The enquiry form is on its way
        </h3>
        <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed mb-6 max-w-2xl">
          Our online enquiry form is not available yet. In the meantime, please email us
          and we will respond personally.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2.5 rounded-full bg-midnight hover:bg-midnight-deep text-ivory-canvas px-7 py-3.5 text-xs font-semibold uppercase tracking-wider border border-gold-harvest/45 transition-all duration-300"
        >
          <Mail className="size-4 text-gold-harvest" />
          <span>{CONTACT_EMAIL}</span>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-ivory-border bg-ivory-surface p-6 sm:p-10">
      <fieldset ref={focusRef} className="space-y-6">
        <legend className="sr-only">Contact enquiry</legend>

        {/* Honeypot — hidden from real users. */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="interest" className="block font-sans text-sm font-semibold text-midnight mb-2">
            Area of interest
          </label>
          <select
            id="interest"
            name="interest"
            required
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
            aria-invalid={Boolean(fieldErrors.interest)}
            aria-describedby={fieldErrors.interest ? "interest-error" : undefined}
            className={`${inputClass} ${fieldErrors.interest ? "border-red-500" : ""}`}
          >
            <option value="" disabled>
              Choose an area
            </option>
            {ENQUIRY_CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          {fieldErrors.interest && (
            <p id="interest-error" className="mt-2 text-sm text-red-700">
              {fieldErrors.interest}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-sans text-sm font-semibold text-midnight mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
              className={`${inputClass} ${fieldErrors.name ? "border-red-500" : ""}`}
            />
            {fieldErrors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-700">
                {fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-sans text-sm font-semibold text-midnight mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              className={`${inputClass} ${fieldErrors.email ? "border-red-500" : ""}`}
            />
            {fieldErrors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-700">
                {fieldErrors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="country" className="block font-sans text-sm font-semibold text-midnight mb-2">
            Country <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-sans text-sm font-semibold text-midnight mb-2">
            Message <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
            className={`${inputClass} resize-y`}
          />
          {fieldErrors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-700">
              {fieldErrors.message}
            </p>
          )}
        </div>

        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            aria-invalid={Boolean(fieldErrors.consent)}
            aria-describedby={fieldErrors.consent ? "consent-error" : undefined}
            className="mt-1 size-5 rounded border-ivory-border text-teal-living focus:ring-gold-harvest"
          />
          <label htmlFor="consent" className="font-sans text-sm text-charcoal/85 leading-relaxed">
            I consent to Journey2Better contacting me about this enquiry and understand how my
            details will be used, as described in the privacy notice below.
          </label>
        </div>
        {fieldErrors.consent && (
          <p id="consent-error" className="-mt-3 text-sm text-red-700">
            {fieldErrors.consent}
          </p>
        )}

        {fieldErrors.form && (
          <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            {fieldErrors.form}
          </p>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-midnight hover:bg-midnight-deep disabled:opacity-60 text-ivory-canvas px-8 py-3.5 text-xs font-semibold uppercase tracking-wider border border-gold-harvest/45 transition-all duration-200 min-h-[48px]"
          >
            <span>{status === "submitting" ? "Sending…" : "Send enquiry"}</span>
            <ArrowRight className="size-4 text-gold-harvest" />
          </button>
        </div>
      </fieldset>

      <div aria-live="polite" className="mt-6">
        {status === "success" && (
          <p className="rounded-lg bg-teal-subtle px-4 py-4 text-sm text-midnight">
            Thank you — your enquiry has been received. We will be in touch at the email address
            you provided.
          </p>
        )}
        {status === "unavailable" && (
          <p className="rounded-lg bg-gold-subtle px-4 py-4 text-sm text-midnight">
            Enquiry submission is not available yet. Please email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">
              {CONTACT_EMAIL}
            </a>{" "}
            and we will respond personally.
          </p>
        )}
        {status === "rate-limited" && (
          <p className="rounded-lg bg-gold-subtle px-4 py-4 text-sm text-midnight">
            You have sent several enquiries recently. Please try again later or email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">
              {CONTACT_EMAIL}
            </a>.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-lg bg-red-50 px-4 py-4 text-sm text-red-700">
            Something went wrong and your enquiry was not sent. Please try again or email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">
              {CONTACT_EMAIL}
            </a>.
          </p>
        )}
      </div>
    </form>
  );
};
