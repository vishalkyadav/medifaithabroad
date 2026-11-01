"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useId, useMemo, useState } from "react";
import { resolveCountryPrefill } from "@/lib/contact-prefill";
import { countries } from "@/lib/navigation";
import {
  validateContactForm,
  type ContactFormErrors,
} from "@/lib/validation/contact-form";

type SubmitState = "idle" | "loading" | "success" | "error" | "not_configured";

const inputClass =
  "mt-1 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-teal-dark shadow-sm transition-[border-color,box-shadow] duration-200 placeholder:text-brand-text-muted/70 focus-visible:border-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-teal";

/** Destinations hidden from the course suggestion list. */
const hiddenInterestSlugs = new Set(["germany", "united-kingdom"]);

const interestSuggestions: string[] = [
  ...countries
    .filter((c) => !hiddenInterestSlugs.has(c.slug))
    .map((c) => `MBBS in ${c.label}`),
  "Bachelor abroad",
  "Master abroad",
  "MBBS abroad (general enquiry)",
];

type ContactFormProps = {
  /** Explicit country prefill, used when the form is embedded on a country page */
  countrySlug?: string;
  title?: string;
  submitLabel?: string;
  messageLabel?: string;
  privacyReassurance?: string;
  showInterest?: boolean;
  /** `modal` renders the compact popup layout (placeholders instead of labels) */
  variant?: "card" | "modal";
};

export function ContactForm({
  countrySlug,
  title,
  submitLabel,
  messageLabel,
  privacyReassurance,
  showInterest = true,
  variant = "card",
}: ContactFormProps = {}) {
  const searchParams = useSearchParams();
  const prefill = useMemo(
    () => resolveCountryPrefill(countrySlug ?? searchParams.get("country")),
    [countrySlug, searchParams],
  );

  return (
    <ContactFormFields
      key={prefill.slug ?? "general"}
      prefill={prefill}
      title={title}
      submitLabel={submitLabel}
      messageLabel={messageLabel}
      privacyReassurance={privacyReassurance}
      showInterest={showInterest}
      variant={variant}
    />
  );
}

type Prefill = ReturnType<typeof resolveCountryPrefill>;

function ContactFormFields({
  prefill,
  title,
  submitLabel,
  messageLabel,
  privacyReassurance,
  showInterest,
  variant,
}: {
  prefill: Prefill;
  title?: string;
  submitLabel?: string;
  messageLabel?: string;
  privacyReassurance?: string;
  showInterest: boolean;
  variant: "card" | "modal";
}) {
  const isModal = variant === "modal";
  const labelClass = isModal
    ? "sr-only"
    : "block text-sm font-medium text-brand-teal-dark";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(
    () => (prefill.label ? `MBBS in ${prefill.label}` : ""),
  );
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const formId = useId();
  const statusId = `${formId}-status`;

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setServerMessage("");

      const fields = {
        fullName,
        email,
        phone,
        interest,
        message,
        website: honeypot,
      };
      const nextErrors = validateContactForm(fields);
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) {
        setSubmitState("idle");
        return;
      }

      setSubmitState("loading");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fields),
        });
        const data = (await res.json()) as {
          ok?: boolean;
          error?: string;
          code?: string;
          errors?: ContactFormErrors;
        };

        if (res.status === 400 && data.errors) {
          setErrors(data.errors);
          setSubmitState("idle");
          return;
        }

        if (data.ok) {
          setSubmitState("success");
          setFullName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setInterest(prefill.label ? `MBBS in ${prefill.label}` : "");
          return;
        }

        if (data.code === "NOT_CONFIGURED") {
          setSubmitState("not_configured");
          setServerMessage(data.error ?? "");
          return;
        }

        setSubmitState("error");
        setServerMessage(
          data.error ??
            "Something went wrong. Please try again or contact us directly.",
        );
      } catch {
        setSubmitState("error");
        setServerMessage(
          "Network error. Please check your connection or contact us by phone or email.",
        );
      }
    },
    [email, fullName, honeypot, interest, message, phone, prefill.label],
  );

  return (
    <form
      onSubmit={onSubmit}
      className={
        isModal
          ? "bg-white"
          : "rounded-2xl border border-brand-border bg-white p-6 shadow-sm sm:p-8"
      }
      aria-describedby={serverMessage ? statusId : undefined}
      noValidate
    >
      <h2
        className={
          isModal
            ? "text-center text-xl font-bold text-brand-teal-dark sm:text-2xl"
            : "text-xl font-bold text-brand-teal-dark"
        }
      >
        {title ?? "Send an enquiry"}
      </h2>
      {!isModal && (
        <p className="mt-2 text-sm text-brand-text-muted">
          Share your details and we will respond as soon as we can.
          {!privacyReassurance &&
            " Your information is used only to reply to this enquiry."}
        </p>
      )}

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className={isModal ? "mt-6 grid gap-1" : "mt-8 grid gap-6 sm:grid-cols-2"}>
        <div className={isModal ? "" : "sm:col-span-2"}>
          <label htmlFor={`${formId}-name`} className={labelClass}>
            Full name <span className="text-brand-gold">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder={isModal ? "Name" : undefined}
            className={inputClass}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={
              errors.fullName ? `${formId}-name-error` : undefined
            }
          />
          {errors.fullName && (
            <p
              id={`${formId}-name-error`}
              className="mt-1 text-sm text-red-700"
              role="alert"
            >
              {errors.fullName}
            </p>
          )}
        </div>

        <div className={isModal ? "" : undefined}>
          <label htmlFor={`${formId}-email`} className={labelClass}>
            Email <span className="text-brand-gold">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={isModal ? "Email Address" : undefined}
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? `${formId}-email-error` : undefined
            }
          />
          {errors.email && (
            <p
              id={`${formId}-email-error`}
              className="mt-1 text-sm text-red-700"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div className={isModal ? "" : undefined}>
          <label htmlFor={`${formId}-phone`} className={labelClass}>
            Phone <span className="text-brand-gold">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder={isModal ? "Phone Number" : undefined}
            className={inputClass}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={
              errors.phone ? `${formId}-phone-error` : undefined
            }
          />
          {errors.phone && (
            <p
              id={`${formId}-phone-error`}
              className="mt-1 text-sm text-red-700"
              role="alert"
            >
              {errors.phone}
            </p>
          )}
        </div>

        {showInterest && (
          <div className={isModal ? "mt-2" : "sm:col-span-2"}>
            <label htmlFor={`${formId}-interest`} className={labelClass}>
              {isModal ? "Course" : "Course or destination interest"}{" "}
              <span className="text-brand-gold">*</span>
            </label>
            <input
              id={`${formId}-interest`}
              name="interest"
              type="text"
              list={`${formId}-destinations`}
              required
              placeholder={isModal ? "Course" : undefined}
              className={inputClass}
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              aria-invalid={Boolean(errors.interest)}
              aria-describedby={
                errors.interest ? `${formId}-interest-error` : undefined
              }
            />
            <datalist id={`${formId}-destinations`}>
              {interestSuggestions.map((option) => (
                <option key={option} value={option} />
              ))}
            </datalist>
            {errors.interest && (
              <p
                id={`${formId}-interest-error`}
                className="mt-1 text-sm text-red-700"
                role="alert"
              >
                {errors.interest}
              </p>
            )}
          </div>
        )}

        <div className={isModal ? "mt-2" : "sm:col-span-2"}>
          <label htmlFor={`${formId}-message`} className={labelClass}>
            {messageLabel ?? "Message"}{" "}
            <span className="text-brand-gold">*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={isModal ? 3 : 5}
            required
            placeholder={isModal ? (messageLabel ?? "Message") : undefined}
            className={inputClass}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? `${formId}-message-error` : undefined
            }
          />
          {errors.message && (
            <p
              id={`${formId}-message-error`}
              className="mt-1 text-sm text-red-700"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div
        className={
          isModal
            ? "mt-5"
            : "mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
        }
      >
        <button
          type="submit"
          disabled={submitState === "loading"}
          className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold text-brand-teal-dark shadow-sm transition-colors hover:bg-brand-gold-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal disabled:cursor-not-allowed disabled:opacity-70 ${isModal ? "w-full" : ""}`}
        >
          {submitState === "loading"
            ? "Sending…"
            : submitLabel ?? "Submit enquiry"}
          {isModal && submitState !== "loading" && (
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.2 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.1 9.9a16 16 0 006 6l1.26-1.26a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          )}
        </button>
        {submitState === "success" && (
          <p
            className={`text-sm font-medium text-brand-teal-dark ${isModal ? "mt-3 text-center" : ""}`}
            role="status"
          >
            Thank you — your enquiry was sent. We will be in touch soon.
          </p>
        )}
      </div>

      {isModal && !privacyReassurance && (
        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-brand-text-muted">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 018 0v4" />
          </svg>
          Your Information Is Safe &amp; Secure
        </p>
      )}

      {privacyReassurance && (
        <p className="mt-4 text-sm text-brand-text-muted">
          {privacyReassurance}
        </p>
      )}

      {(submitState === "error" || submitState === "not_configured") && (
        <p
          id={statusId}
          className="mt-4 text-sm text-red-800"
          role="alert"
        >
          {serverMessage}
        </p>
      )}
    </form>
  );
}
