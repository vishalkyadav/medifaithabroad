"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";

type ViewCollegesTabProps = {
  /** DOM id of the fee table / university list section to scroll to */
  targetId: string;
  /** Edge of the viewport the tab is pinned to (default: right) */
  side?: "left" | "right";
  /** Colour treatment; "gold" matches the country reference design */
  tone?: "navy" | "gold";
};

/**
 * Slim vertical "View Colleges" tab pinned to the viewport edge.
 * Rendered only when a country page has a university fee table to jump to.
 */
export function ViewCollegesTab({
  targetId,
  side = "right",
  tone = "navy",
}: ViewCollegesTabProps) {
  const [targetVisible, setTargetVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    const section = target?.closest("section") ?? target;
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry) setTargetVisible(entry.isIntersecting);
    });
    observer.observe(section);

    return () => observer.disconnect();
  }, [targetId]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Scroll the enclosing section so its sticky-header offset (scroll-mt) applies.
    const scrollTarget = target.closest("section") ?? target;
    scrollTarget.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    if (!target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1");
    }
    target.focus({ preventScroll: true });
    window.history.replaceState(null, "", `#${targetId}`);
  }

  const positionClass =
    side === "left"
      ? "left-0 bottom-24 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
      : "right-0 bottom-24 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2";

  const shapeClass =
    side === "left"
      ? "rounded-r-xl border-l-0"
      : "rotate-180 rounded-l-xl border-r-0";

  const toneClass =
    tone === "gold"
      ? "border-brand-gold bg-brand-gold text-brand-teal-dark shadow-lg hover:bg-brand-gold-hover"
      : "border-brand-gold/40 bg-brand-navy text-brand-gold shadow-lg hover:bg-brand-midnight";

  return (
    <div
      className={`pointer-events-none fixed z-30 print:hidden ${positionClass}`}
    >
      <a
        href={`#${targetId}`}
        onClick={handleClick}
        aria-hidden={targetVisible || undefined}
        tabIndex={targetVisible ? -1 : undefined}
        className={`btn-motion pointer-events-auto flex items-center justify-center border p-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:p-2 sm:text-xs [writing-mode:vertical-rl] ${shapeClass} ${toneClass} ${targetVisible ? "pointer-events-none invisible opacity-0" : ""}`}
      >
        View Colleges
      </a>
    </div>
  );
}
