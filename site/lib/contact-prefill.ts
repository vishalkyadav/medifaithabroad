import { countries } from "@/lib/navigation";

const slugSet = new Set(countries.map((c) => c.slug));

export function normalizeCountryQueryParam(
  value: string | null | undefined,
): string | null {
  if (!value || typeof value !== "string") return null;
  const slug = value.trim().toLowerCase();
  if (!slugSet.has(slug)) return null;
  return slug;
}

export function countryLabelForSlug(slug: string): string | undefined {
  return countries.find((c) => c.slug === slug)?.label;
}

export function resolveCountryPrefill(value: string | null | undefined): {
  slug: string | null;
  label: string;
} {
  const slug = normalizeCountryQueryParam(value);
  if (!slug) {
    return { slug: null, label: "" };
  }
  const label = countryLabelForSlug(slug) ?? "";
  return { slug, label };
}
