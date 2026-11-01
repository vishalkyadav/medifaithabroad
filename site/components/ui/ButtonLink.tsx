import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "outline";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-brand-gold text-brand-midnight hover:bg-brand-gold-hover shadow-md shadow-brand-midnight/10",
  secondary:
    "bg-brand-navy text-white hover:bg-brand-midnight",
  outline:
    "border-2 border-brand-heading text-brand-heading hover:bg-brand-sky",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`btn-motion inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy ${variantClass[variant]} ${className}`}
      {...props}
    />
  );
}
