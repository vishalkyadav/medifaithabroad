import { bangladesh } from "./bangladesh";
import { china } from "./china";
import { georgia } from "./georgia";
import { germany } from "./germany";
import { kazakhstan } from "./kazakhstan";
import { kyrgyzstan } from "./kyrgyzstan";
import { nepal } from "./nepal";
import { poland } from "./poland";
import { russia } from "./russia";
import { uzbekistan } from "./uzbekistan";
import { unitedKingdom } from "./united-kingdom";
import type { CountryPageContent } from "./types";

const countriesBySlug: Record<string, CountryPageContent> = {
  russia,
  georgia,
  poland,
  china,
  uzbekistan,
  kazakhstan,
  kyrgyzstan,
  nepal,
  bangladesh,
  germany,
  "united-kingdom": unitedKingdom,
};

export const publishedCountrySlugs = Object.keys(
  countriesBySlug,
) as (keyof typeof countriesBySlug)[];

export function getCountryBySlug(
  slug: string,
): CountryPageContent | undefined {
  return countriesBySlug[slug];
}

export function isPublishedCountrySlug(slug: string): boolean {
  return slug in countriesBySlug;
}
