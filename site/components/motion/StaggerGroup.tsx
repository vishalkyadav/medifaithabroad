"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
} from "react";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function StaggerGroup({
  children,
  className = "",
  as: Component = "div",
}: StaggerGroupProps) {
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
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = Component as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`motion-stagger-group ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  index: number;
  as?: ElementType;
};

export function StaggerItem({
  children,
  className = "",
  index,
  as: Component = "div",
}: StaggerItemProps) {
  const Tag = Component as React.ElementType;
  const style = { "--stagger": index } as CSSProperties;

  return (
    <Tag className={`motion-stagger-item ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
