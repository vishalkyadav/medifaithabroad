import { isPublishedCountrySlug } from "@/lib/content/countries";

export type NavItem = {
  label: string;
  href: string;
};

export const studyDestinationsId = "study-destinations";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Admission process", href: "/admission-process" },
  { label: "Contact", href: "/contact" },
];

export type CountryItem = {
  label: string;
  slug: string;
};

export const countries: CountryItem[] = [
  { label: "Russia", slug: "russia" },
  { label: "Poland", slug: "poland" },
  { label: "China", slug: "china" },
  { label: "Uzbekistan", slug: "uzbekistan" },
  { label: "Kazakhstan", slug: "kazakhstan" },
  { label: "Georgia", slug: "georgia" },
  { label: "Nepal", slug: "nepal" },
  { label: "Kyrgyzstan", slug: "kyrgyzstan" },
  { label: "Bangladesh", slug: "bangladesh" },
  { label: "Germany", slug: "germany" },
  { label: "United Kingdom", slug: "united-kingdom" },
];

export function isCountryPageLive(slug: string): boolean {
  return isPublishedCountrySlug(slug);
}

export function countryHref(slug: string): string {
  if (isCountryPageLive(slug)) {
    return `/countries/${slug}`;
  }
  return `/#${studyDestinationsId}`;
}

export const footerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Admission process", href: "/admission-process" },
  { label: "Contact", href: "/contact" },
];
