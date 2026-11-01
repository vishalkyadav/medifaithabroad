/**
 * Contact details sourced from the public reference site (medifaithabroad.com).
 */
export const contact = {
  /** Omit from UI until owner provides a verified office address. */
  address: null as string | null,
  email: "medifaithabroad@gmail.com",
  phoneDisplay: "+91 91550 46390",
  phoneTel: "+919155046390",
  callCtaHref: "tel:+919155046390",
  contactPageHref: "/contact",
  /** Handle published on reference site; URL not confirmed for linking. */
  instagramHandle: "@medifaith_abroad_01",
  instagramUrl: null as string | null,
  offices: [
    {
      name: "Muzaffarpur office",
      address: "Medifaith Abroad Consultancy Private Limited,Akharaghat, Shekhpur Dhab, Muzaffarpur, Bihar – 842001",
    },
    {
      name: "Ranchi office",
      address: "Awadhpuri rode no 2 Saket Nagar hinoo, ranchi, Jharkhand pin 834002",
    },
    {
      name: "Muzaffarpur office 2",
      address:
        "4C28+MF9 Muzaffarpur, Bihar26",
    },
  ],
} as const;

export function contactHrefForCountry(slug: string): string {
  return `/contact?country=${encodeURIComponent(slug)}`;
}

export function hasPublicAddress(): boolean {
  return Boolean(contact.address?.trim());
}
