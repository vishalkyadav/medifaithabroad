/**
 * Country page hero backgrounds. Override per slug; falls back to default.
 * See IMAGE-REPLACEMENT-GUIDE.md.
 */

import { homeImages } from "@/lib/content/home-images";

const defaultHero = homeImages.medicalTeam;

/** Distinct, highest-resolution heroes available in public/images/. */
export const countryHeroImages: Partial<Record<string, string>> = {
  russia: homeImages.russiahero,
  kazakhstan: homeImages.kazakhstanhero,
  uzbekistan: homeImages.uzbekistanhero,
  kyrgyzstan: homeImages.kyrgyzstan,
  georgia: homeImages.georgiahero,
  china: homeImages.chinahero,
  poland: homeImages.polandhero,
  nepal: homeImages.nepalhero,
  bangladesh: homeImages.bangladeshhero,
  germany: homeImages.germanyhero,
  "united-kingdom": homeImages.unitedKingdomhero,
};

export function getCountryHeroImage(slug: string): string {
  return countryHeroImages[slug] ?? defaultHero;
}
