"use client";

import { useEffect, useState } from "react";

/**
 * Small gold back-to-top control. Appears once the page is scrolled and
 * smooth-scrolls to the top; reduced-motion preferences are respected.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
    document.getElementById("top")?.focus?.({ preventScroll: true });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      title="Back to top"
      className={`btn-motion fixed right-4 bottom-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold bg-brand-gold text-brand-teal-dark shadow-lg hover:bg-brand-gold-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy print:hidden sm:right-6 sm:bottom-6 ${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      tabIndex={visible ? 0 : -1}
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
