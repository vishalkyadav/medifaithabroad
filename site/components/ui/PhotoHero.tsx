import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

type PhotoHeroProps = {
  imageSrc: string;
  imageAlt: string;
  /** Tailwind object-position classes, e.g. object-center */
  imageClassName?: string;
  children: ReactNode;
  minHeightClass?: string;
};

export function PhotoHero({
  imageSrc,
  imageAlt,
  imageClassName = "object-cover object-center",
  children,
  minHeightClass = "min-h-[22rem] sm:min-h-[26rem]",
}: PhotoHeroProps) {
  return (
    <section
      className={`relative flex items-center overflow-hidden ${minHeightClass}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        quality={80}
        className={imageClassName}
        sizes="(max-width: 1280px) 100vw, 1280px"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-teal-dark/98 via-brand-teal-dark/88 to-brand-teal-dark/35 lg:to-brand-teal-dark/15"
        aria-hidden
      />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <div className="hero-enter surface-dark">{children}</div>
      </Container>
    </section>
  );
}
