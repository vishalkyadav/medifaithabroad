import type { CountryPageContent } from "./types";

export type CountryQuickFact = {
  label: string;
  value: string;
};

export function buildQuickFacts(country: CountryPageContent): CountryQuickFact[] {
  const facts: CountryQuickFact[] = [];

  if (country.eligibility[0]) {
    facts.push({
      label: "Eligibility (overview)",
      value: country.eligibility[0],
    });
  }
  if (country.documentsRequired.length > 0) {
    facts.push({
      label: "Key documents",
      value: `${country.documentsRequired.slice(0, 3).join(", ")}${
        country.documentsRequired.length > 3 ? ", …" : ""
      }`,
    });
  }
  facts.push({
    label: "Planning note",
    value:
      "Fees, intake dates, and recognition rules change—confirm details for your university and intake before you apply.",
  });

  return facts.slice(0, 4);
}

export function defaultLivingAccommodation(countryName: string): string {
  return `Accommodation arrangements depend on the university and city in ${countryName}. Hostel or shared housing is commonly discussed during counselling; availability, cost, and rules vary by institution. Confirm what is included in your admission offer and budget for living expenses separately.`;
}
