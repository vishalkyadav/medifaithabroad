import Image from "next/image";
import Link from "next/link";
import { countryFlagSrc } from "@/lib/content/home-images";
import type { CountryItem } from "@/lib/navigation";
import { countryHref, isCountryPageLive } from "@/lib/navigation";
import { CountryFlag } from "./CountryFlag";

const linkClass =
  "card-glow-accent group flex min-w-0 flex-col items-center gap-2 rounded-2xl border border-transparent p-3 transition-[background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-sky hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:p-4";

type CountryGridItemProps = {
  country: CountryItem;
};

function FlagVisual({ slug, label }: { slug: string; label: string }) {
  const src = countryFlagSrc[slug];

  if (src) {
    return (
      <Image
        src={src}
        alt=""
        width={80}
        height={80}
        className="h-full w-full object-cover"
      />
    );
  }

  return <CountryFlag slug={slug} label={label} />;
}

export function CountryGridItem({ country }: CountryGridItemProps) {
  const live = isCountryPageLive(country.slug);
  const flagRing =
    "relative h-14 w-14 shrink-0 overflow-hidden rounded-full shadow-sm ring-2 ring-white transition-[transform,box-shadow] duration-300 ease-out group-hover:scale-105 group-hover:shadow-md group-hover:ring-brand-gold group-focus-visible:ring-2 group-focus-visible:ring-brand-gold sm:h-16 sm:w-16";

  const inner = (
    <>
      <span className={flagRing}>
        <FlagVisual slug={country.slug} label={country.label} />
      </span>
      <span className="line-clamp-2 text-center text-xs font-semibold leading-snug text-brand-heading transition-colors duration-300 group-hover:text-brand-navy sm:text-sm">
        {country.label}
      </span>
    </>
  );

  if (live) {
    const href = countryHref(country.slug);
    return (
      <Link
        href={href}
        className={linkClass}
        aria-label={`${country.label} — view MBBS abroad country guide`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <span
      className={`${linkClass} cursor-default opacity-60`}
      title="Country guide coming soon"
    >
      {inner}
      <span className="sr-only"> — guide coming soon</span>
    </span>
  );
}
