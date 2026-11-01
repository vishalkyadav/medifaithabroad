"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ContactForm } from "./ContactForm";

const STORAGE_KEY = "medifaith-lead-popup-shown";
const OPEN_DELAY_MS = 1200;

/**
 * Enquiry popup shown once per browser session shortly after the site loads.
 * Suppressed on the contact page, where the full form is already visible.
 */
export function LeadPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const suppressed = pathname?.startsWith("/contact") ?? false;

  useEffect(() => {
    if (suppressed || dismissed) return;

    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadyShown = false;
    }
    if (alreadyShown) return;

    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // Storage unavailable — the popup simply may show again next visit.
      }
      setOpen(true);
    }, OPEN_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [dismissed, suppressed]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
    setDismissed(true);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-midnight/60 p-4 backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Let’s Connect – Start Your Journey Abroad"
        className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-brand-border bg-white px-6 py-8 shadow-2xl sm:px-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Close enquiry form"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-white text-brand-teal-dark transition-colors hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <ContactForm
          variant="modal"
          title="Let’s Connect – Start Your Journey Abroad"
          submitLabel="Let’s Discuss"
        />
      </div>
    </div>
  );
}
