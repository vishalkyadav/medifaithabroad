"use client";

import { useEffect } from "react";

/** Enables scroll/hover motion enhancements; respects prefers-reduced-motion. */
export function MotionInit() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!reduced) {
      document.documentElement.classList.add("motion-enhanced");
    }
  }, []);

  return null;
}
