export type CountryFaq = {
  question: string;
  answer: string;
};

export type CountryQuickFact = {
  label: string;
  value: string;
};

export type CountryBenefitIcon = "fees" | "team" | "university" | "support";

export type CountryBenefit = {
  title: string;
  description: string;
  /** Optional gold-accented icon rendered above the title */
  icon?: CountryBenefitIcon;
};

export type CountryHeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
};

export type CountryAdmissionDetail = {
  /** Row label, e.g. "A. Admission process" */
  section: string;
  details: string[];
  /** Optional official references supporting the row. */
  sources?: { label: string; href: string }[];
};

export type CountryAdmissionStage = {
  /** Stage heading, e.g. "Check your eligibility" */
  title: string;
  points: string[];
};

export type CountryUniversityFeeRow = {
  university: string;
  tuition: string;
  semesterContribution: string;
  teachingLanguage: string;
  accommodation: string;
  type: string;
  notes: string;
};

export type CountryUniversityFeeTable = {
  title: string;
  description: string;
  columnLabels?: [string, string, string, string, string, string];
  rows: CountryUniversityFeeRow[];
};

export type CountryCompetitiveEdge = {
  title: string;
  description?: string;
  points: string[];
  image?: string;
  imageAlt?: string;
};

export type CountryPageContent = {
  slug: string;
  name: string;
  /** Optional override; otherwise derived from lib/content/country-images.ts */
  heroImage?: string;
  /** Optional descriptive alternative text for a country-specific hero image. */
  heroImageAlt?: string;
  livingImage?: string;
  heroTitle: string;
  heroSubtitle: string;
  /** Optional override for the hero buttons; other countries keep the default pair */
  heroActions?: CountryHeroAction[];
  introduction: string;
  /** Optional verified facts only; otherwise derived from eligibility/documents */
  quickFacts?: CountryQuickFact[];
  /** Optional; otherwise a neutral country-specific default is shown */
  livingAccommodation?: string;
  universityFees?: {
    university: string;
    tuition: string;
    hostel: string;
    otc?: string;
    consultancyCharges?: string;
    /** Optional; only rendered when at least one row provides it */
    totalApproximateAnnualCost?: string;
    /** Optional; only rendered when at least one row provides it */
    location?: string;
    /** Optional; only rendered when at least one row provides it */
    teachingLanguage?: string;
    /** Optional; only rendered when at least one row provides it, e.g. Public */
    type?: string;
    /** Source-table placement; kept separate from the institution's actual type. */
    tableGroup?: "Public" | "Private";
    /** Optional row-specific source note/highlight. */
    notes?: string;
  }[];
  /** Optional multiple, fixed-column fee tables for destinations such as Germany. */
  universityFeeTables?: CountryUniversityFeeTable[];
  /** Optional override for the fee section heading */
  feeSectionTitle?: string;
  /** Optional override for the fee section description */
  feeSectionDescription?: string;
  /** Optional note shown under the fee table, e.g. to flag pending data */
  feeDataNote?: string;
  /** Optional override for the standard disclaimer rendered below the fee table. */
  feeTableDisclaimer?: string;
  /** Optional overrides for fee table column headers */
  feeColumnLabels?: {
    university?: string;
    tuition?: string;
    hostel?: string;
    totalApproximateAnnualCost?: string;
    otc?: string;
    consultancyCharges?: string;
    notes?: string;
  };
  countryTrustPoints?: CountryBenefit[];
  admissionOverview?: boolean;
  eligibilityTitle?: string;
  eligibilityRows?: {
    detail: string;
    requirement: string;
  }[];
  considerations?: {
    title: string;
    description: string;
  }[];
  /** Optional section/table of admission, scholarship and financial details */
  admissionDetails?: CountryAdmissionDetail[];
  /** Optional override for the admission details heading */
  admissionDetailsTitle?: string;
  /** Optional explanation for the admission details section */
  admissionDetailsDescription?: string;
  /** Optional numbered admission cards with headings and bullet points */
  admissionStages?: CountryAdmissionStage[];
  /** Optional override for the admission stages heading */
  admissionStagesTitle?: string;
  /** Optional override for the admission stages introduction */
  admissionStagesDescription?: string;
  /** Optional two-column image + benefit list section */
  competitiveEdge?: CountryCompetitiveEdge;
  /** Optional; renders the existing enquiry form inside the country page */
  showEnquiryForm?: boolean;
  /** Optional override for the enquiry form section heading */
  enquiryFormTitle?: string;
  /** Optional country-specific copy for the existing enquiry form */
  enquiryFormOptions?: {
    submitLabel?: string;
    messageLabel?: string;
    privacyReassurance?: string;
    showInterest?: boolean;
  };
  /** Optional; renders the empty 16:9 video placeholder section */
  showVideoPlaceholder?: boolean;
  /** Optional placement for the floating tab (default: right) */
  collegesTabSide?: "left" | "right";
  /** Optional colour treatment for the floating tab (default: navy) */
  collegesTabTone?: "navy" | "gold";
  whyStudy: CountryBenefit[];
  admissionSteps: string[];
  universityGuidance: string;
  costGuidance: string;
  documentsRequired: string[];
  eligibility: string[];
  faqs: CountryFaq[];
  seo: {
    title: string;
    description: string;
  };
};
