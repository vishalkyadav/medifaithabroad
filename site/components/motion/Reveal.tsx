"use client";

import { type ElementType, type ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Reveal({
  children,
  className = "",
  as: Component = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!document.documentElement.classList.contains("motion-enhanced")) return;

    const markVisible = () => el.classList.add("is-visible");

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      requestAnimationFrame(markVisible);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          markVisible();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = Component as React.ElementType;

  return (
    <Tag ref={ref} className={`motion-reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
