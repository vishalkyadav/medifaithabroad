"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

type CursorSpotlightZoneProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  /** Optional decorative layer painted behind the spotlight and content. */
  backdrop?: ReactNode;
};

function useCursorSpotlight(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (reduced || coarse || !fineHover) {
      return;
    }

    let frame = 0;
    let clientX = 0;
    let clientY = 0;

    const apply = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      node.style.setProperty("--spotlight-x", `${clientX - rect.left}px`);
      node.style.setProperty("--spotlight-y", `${clientY - rect.top}px`);
      node.dataset.spotlightActive = "true";
    };

    const onMove = (event: MouseEvent) => {
      clientX = event.clientX;
      clientY = event.clientY;
      if (!frame) {
        frame = window.requestAnimationFrame(apply);
      }
    };

    const onLeave = () => {
      delete node.dataset.spotlightActive;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    node.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ref]);
}

export function CursorSpotlightZone({
  className = "",
  children,
  backdrop,
  ...rest
}: CursorSpotlightZoneProps) {
  const ref = useRef<HTMLElement>(null);
  useCursorSpotlight(ref);

  return (
    <section
      ref={ref}
      className={`cursor-spotlight-zone relative ${className}`}
      {...rest}
    >
      {backdrop}
      <div className="cursor-spotlight-layer pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <div className="relative z-[2]">{children}</div>
    </section>
  );
}
