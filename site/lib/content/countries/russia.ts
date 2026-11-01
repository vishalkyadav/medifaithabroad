import type { CountryPageContent } from "./types";
import { russiaUniversityFees } from "./russia-fees";
import { contact } from "@/lib/contact";

/**
 * Content aligned with medifaithabroad.com/countries/russia/
 * Fee tables and recognition status change — confirm with Medifaith before applying.
 */
export const russia: CountryPageContent = {
  slug: "russia",
  name: "Russia",
  heroTitle: "Dream of MBBS? Choose Russia",
  heroSubtitle:
    "Explore medical study options in Russia with application and arrival guidance from Medifaith Abroad.",
  heroActions: [
    { label: "About Us", href: "/about" },
    { label: "Call Us Now", href: contact.callCtaHref, variant: "outline" },
  ],
  introduction:
    "Russia is one destination students consider for medical study abroad. Medifaith Abroad can help you compare university-published options and understand application steps. Programme details, fees, eligibility, and recognition vary; verify them with the university and the relevant regulator for your intake and intended licensing pathway.",
  universityFees: russiaUniversityFees,
  feeSectionTitle: "MBBS in Russia - Colleges Fee Structure",
  feeSectionDescription:
    "The source file lists annual tuition and hostel figures in Russian rubles (₽), first-year OTC in US dollars (USD), and consultancy charges separately. Amounts are reproduced as provided, without currency conversion.",
  feeColumnLabels: {
    university: "College Name",
    tuition: "Tuition Fees (Per Year, ₽)",
    hostel: "Hostel Fees (Per Year, ₽)",
    otc: "OTC (1st Year, USD)",
    consultancyCharges: "Consultancy Charges",
  },
  feeDataNote:
    "Source: countrycollagelist/Russia-.txt. Its fee list has no effective date and has not been confirmed with the universities; verify current amounts, payment terms, and availability directly before applying or paying. The source says fees may increase by 5–12% each year depending on the university, hostel availability and prices vary, and OTC is a one-time administrative charge. The source marks consultancy charges as Zero for each listed university. Names and spellings are reproduced as supplied.",
  countryTrustPoints: [
    {
      title: "Clinical learning",
      description:
        "Review each university’s curriculum and clinical placement details before choosing a programme.",
      icon: "university",
    },
    {
      title: "Recognition checks",
      description:
        "Verify the specific university and your intended licensing pathway with the relevant official regulator.",
      icon: "team",
    },
    {
      title: "Fee planning",
      description:
        "Compare source-listed fees and confirm the latest charges, currency, and payment terms with the university.",
      icon: "fees",
    },
    {
      title: "Application support",
      description:
        "Get guidance reviewing application steps, documents, and pre-departure arrangements.",
      icon: "support",
    },
  ],
  whyStudy: [
    {
      title: "Compare fee schedules",
      description:
        "Tuition, accommodation, and one-time charges differ by university. Request a current written breakdown before making a decision.",
      icon: "fees",
    },
    {
      title: "Check programme language",
      description:
        "Teaching language and local-language components are programme-specific; confirm both with the university.",
      icon: "university",
    },
    {
      title: "Understand clinical training",
      description:
        "Ask each institution about its curriculum, clinical sites, and the language used during patient-facing training.",
      icon: "support",
    },
    {
      title: "Plan for your licensing pathway",
      description:
        "Entry and licensing requirements depend on your nationality, university, and where you plan to practise.",
      icon: "team",
    },
  ],
  admissionOverview: true,
  admissionSteps: [
    "Shortlist a university and city after checking programme, language, eligibility, and fees.",
    "Submit the university application and required registration details.",
    "Review the admission offer and its terms with the university.",
    "Collect and verify the documents requested for your application.",
    "Complete any university-specific entrance or selection requirements, if applicable.",
    "Pay fees only according to the university’s written instructions and confirmed schedule.",
    "Apply for the appropriate visa and complete applicable immigration formalities.",
    "Arrange travel and pre-departure preparation after required approvals.",
    "Complete arrival registration and enrolment steps with the university.",
  ],
  universityGuidance:
    "Use the table as a transcription of the supplied countrycollagelist source, not as a verified or current university catalogue. We can help compare options, but university status, programme details, seats, and fees must be confirmed directly for the intended intake.",
  costGuidance:
    "The source labels annual tuition and hostel figures in ₽ (Russian rubles) and first-year OTC values in USD. These currencies are kept separate in the table; no conversion or combined total is shown. Some source values are marked approximate, and one hostel amount is absent.",
  documentsRequired: [
    "10th and 12th mark sheets and certificates, as requested by the university.",
    "NEET scorecard for Indian applicants when required for their intended pathway.",
    "Valid passport and university application or admission documents.",
    "Birth certificate and photographs, if requested by the university or authorities.",
    "Medical, health, or other supporting certificates required for the application or visa.",
    "Any additional documents specified by the university or relevant authorities.",
  ],
  eligibility: [
    "Academic subjects and marks: follow the selected university’s current admissions requirements and the rules applicable to your intended licensing pathway.",
    "Age: confirm any minimum age or admission-date condition with the university and relevant regulator.",
    "Entrance or selection requirements: vary by institution and programme; ask the university whether an examination or other assessment applies.",
    "Indian applicants: check current NEET and foreign medical qualification requirements with official Indian authorities for the intended intake and licensing pathway.",
  ],
  eligibilityTitle: "MBBS in Russia Eligibility Criteria",
  eligibilityRows: [
    {
      detail: "Entrance examination or selection",
      requirement:
        "University-specific; confirm whether an entrance test, interview, or other assessment applies to the chosen programme.",
    },
    {
      detail: "Academic eligibility",
      requirement:
        "Required school qualification, science subjects, and marks are set by the university and may also depend on the applicant’s intended licensing pathway.",
    },
    {
      detail: "Age requirements",
      requirement:
        "Confirm the applicable minimum age and date condition with the university and the official regulator for the intended pathway.",
    },
    {
      detail: "NEET for Indian applicants",
      requirement:
        "Check current NEET qualification requirements and foreign medical graduate rules with official Indian authorities. This does not apply identically to every international applicant.",
    },
  ],
  competitiveEdge: {
    title: "Why consider medical study in Russia?",
    description:
      "Compare each university’s programme, facilities, and student support against your own academic and career plans.",
    points: [
      "English-medium instruction may be available at selected universities; verify the medium and any local-language requirements for the specific programme.",
      "Review the curriculum, clinical placements, and patient-facing language with the university before applying.",
      "Ask about accommodation options, availability, and the current cost for your intended intake.",
      "Check university recognition and licensing eligibility with official regulators for the country where you intend to practise.",
    ],
    image: "/images/high-angle-students-learning-library.png",
    imageAlt: "Students studying together in a university library",
  },
  considerations: [
    {
      title: "Fees and payment terms",
      description:
        "Confirm tuition, hostel, insurance, travel, and one-time charges in writing. Check the billing currency, due dates, refund terms, and annual increases.",
    },
    {
      title: "University and programme",
      description:
        "Verify the exact institution, programme language, curriculum, clinical training, and eligibility for the pathway you intend to follow.",
    },
    {
      title: "Documents and admission",
      description:
        "Request the current document checklist and application process from the university; translation, attestation, or medical documents may be required.",
    },
    {
      title: "Language and daily life",
      description:
        "Ask what language is used in teaching and clinical settings, and plan for any local-language learning needed for daily life or patient interaction.",
    },
    {
      title: "Climate and accommodation",
      description:
        "Compare the city’s climate, travel options, and available housing. Confirm hostel availability and actual room costs before accepting an offer.",
    },
    {
      title: "Official verification",
      description:
        "Check current visa rules, university status, and professional licensing requirements through the relevant official authorities before paying.",
    },
  ],
  showEnquiryForm: true,
  enquiryFormTitle: "Partner With Us Today",
  enquiryFormOptions: {
    submitLabel: "Let’s Discuss",
    messageLabel: "Requirement",
    privacyReassurance:
      "Your details will be used only to respond to your enquiry.",
    showInterest: false,
  },
  // TODO: Add Russia introduction video here
  showVideoPlaceholder: true,
  collegesTabSide: "left",
  collegesTabTone: "gold",
  faqs: [
    {
      question: "Do Indian applicants need NEET for medical study in Russia?",
      answer:
        "Indian applicants should confirm current NEET qualification and foreign medical graduate requirements with the NMC and NTA for their intended intake and licensing pathway. University admission requirements are separate and may vary.",
    },
    {
      question: "Are Russian medical degrees recognised in India?",
      answer:
        "Recognition depends on the university, curriculum, and current National Medical Commission rules. Do not rely on marketing claims alone—verify the institution and pathway with official NMC guidance and your counsellor.",
    },
    {
      question: "What language is instruction?",
      answer:
        "Some universities may offer English-medium programmes, and local-language study may also be required. Confirm the medium and clinical-language requirements for the specific programme.",
    },
    {
      question: "Does Medifaith guarantee admission?",
      answer:
        "No. We provide counselling and application support; admission decisions are made by universities based on their criteria and seat availability.",
    },
  ],
  seo: {
    title: "MBBS in Russia",
    description:
      "MBBS in Russia: eligibility, admission steps, and counselling from Medifaith Abroad. Compare universities and plan your application with expert guidance.",
  },
};
