import type { CountryPageContent } from "./types";
import { homeImages } from "../home-images";
import { contact } from "@/lib/contact";

/** Bangladesh fee table transcribed from the supplied screenshots. */
export const bangladesh: CountryPageContent = {
  slug: "bangladesh",
  name: "Bangladesh",
  heroTitle: "Dream of MBBS? Choose Bangladesh",
  heroSubtitle:
    "Five-year medical colleges close to home, with counselling from Medifaith Abroad.",
  heroActions: [
    { label: "About Us", href: "/about" },
    { label: "Call Us Now", href: contact.callCtaHref, variant: "outline" },
  ],
  introduction:
    "Bangladesh is presented on the Medifaith reference site as an affordable alternative to private medical colleges in India, with English instruction and merit-based admission without donations. Eligibility thresholds on the reference page differ from some other countries—use the Bangladesh-specific criteria below, which follow the current foreign-student rules, together with current NMC requirements.",
  universityFees: [
    {
      university: "Dhaka Medical College",
      tuition: "₹37,00,000",
      hostel: "",
      notes: "Varies",
    },
    {
      university: "Bangladesh Medical College",
      tuition: "₹33,00,000",
      hostel: "",
      notes: "Likely excluded",
    },
    {
      university: "Ibrahim Medical College",
      tuition: "₹31,00,000",
      hostel: "",
      notes: "May be excluded",
    },
    {
      university: "Sylhet Women’s Medical College",
      tuition: "₹28,90,000",
      hostel: "",
      notes: "Likely excluded",
    },
    {
      university: "Jahurul Islam Medical College",
      tuition: "₹35,30,586",
      hostel: "",
      notes: "Included",
    },
    {
      university: "Holy Family Red Crescent Medical College",
      tuition: "₹43,03,429",
      hostel: "",
      notes: "—",
    },
    {
      university: "Dhaka National Medical College",
      tuition: "₹25,81,982",
      hostel: "",
      notes: "—",
    },
    {
      university: "Tairunnessa Memorial Medical College",
      tuition: "₹38,74,427",
      hostel: "",
      notes: "—",
    },
    {
      university: "Enam Medical College & Hospital",
      tuition: "₹34,80,000 (tuition only)",
      hostel: "",
      notes: "Hostel extra",
    },
    {
      university: "East West Medical College",
      tuition: "₹40,02,000",
      hostel: "",
      notes: "Included",
    },
    {
      university: "Khulna City Medical College",
      tuition: "~₹33,00,000 (est.)",
      hostel: "",
      notes: "Included",
    },
    {
      university: "Barind Medical College",
      tuition: "₹38,74,427",
      hostel: "",
      notes: "Included",
    },
    {
      university: "Community-Based Medical College",
      tuition: "₹41,33,369–₹51,58,101",
      hostel: "",
      notes: "Varies",
    },
    {
      university: "Anwer Khan Modern Medical College",
      tuition: "INR 33–38 lakhs (est.)",
      hostel: "",
      notes: "Included",
    },
    {
      university: "Chittagong Medical College",
      tuition: "₹26–30 lakhs (est.)",
      hostel: "",
      notes: "Likely no",
    },
  ],
  feeSectionTitle: "Top Medical Colleges in Bangladesh for MBBS",
  feeSectionDescription: "",
  feeColumnLabels: {
    university: "College Name",
    tuition: "Total Fees (5 yrs, INR)",
    notes: "Hostel Included",
  },
  feeTableDisclaimer: "",
  showEnquiryForm: true,
  /** TODO: Add Bangladesh introduction video here */
  showVideoPlaceholder: true,
  collegesTabSide: "left",
  collegesTabTone: "gold",
  whyStudy: [
    {
      title: "Foreign fees in US dollars",
      description:
        "Colleges that publish international fees quote the whole five-year course in dollars, which is easier to budget than year-by-year rupee estimates.",
      icon: "fees",
    },
    {
      title: "English-medium teaching",
      description:
        "Private colleges advertise English-medium MBBS, though Bangla still matters in hospital interaction—confirm the teaching and clinical language for your college.",
      icon: "university",
    },
    {
      title: "Five years plus internship",
      description:
        "The standard programme is five academic years followed by a one-year internship, with clinical rotations at the college's teaching hospital.",
      icon: "team",
    },
    {
      title: "An established Indian cohort",
      description:
        "Indian students made up 507 of 1,156 foreign enrolments in 2024–25, so peer networks, shared travel and settled hostels are common.",
      icon: "support",
    },
  ],
  admissionStagesTitle: "BD admission process for MBBS in Bangladesh",
  admissionStages: [
    {
      title: "Check your eligibility",
      points: [
        "Private colleges (2025–26 foreign criteria): O-level/Class 10 passed in 2022 or later and A-level/Class 12 in 2024 or 2025, with a combined GPA of at least 7.0 and Biology at 3.50 at A-level.",
        "These are GPA-equivalence rules, not a percentage cut-off — do not convert them into Class 12 marks without DGME's equivalence method.",
        "Indian students must qualify NEET-UG and be 17 by 31 December of the admission year to keep the route to Indian registration.",
      ],
    },
    {
      title: "Select an eligible medical college",
      points: [
        "Foreign applicants to private colleges apply through the DGME foreign-student process, not the domestic combined merit list.",
        "Check the college's BMDC registration, university affiliation and teaching hospital before you apply.",
        "Government college seats for foreigners are limited and allocated by nomination, so a specific college is never guaranteed.",
      ],
    },
    {
      title: "Prepare and submit required documents",
      points: [
        "Class 10 and Class 12 certificates and transcripts attested by your country's education and foreign-affairs ministries.",
        "Passport, photographs, NEET scorecard for Indian applicants, and the equivalence documents DGME asks for.",
        "Apply on the DGME foreign-student portal with the US$100 non-refundable equivalence fee paid by TT/SWIFT, and attach the transfer receipt.",
      ],
    },
    {
      title: "Complete the application and admission process",
      points: [
        "DGME processes eligibility and equivalence; the college then confirms seat availability and its contract for the session.",
        "Ask for the written fee schedule before committing: what each payment covers, due dates, refund policy and how the internship year is charged.",
      ],
    },
    {
      title: "Receive and verify the admission offer",
      points: [
        "Check the college name, programme duration (five years plus one-year internship), total fee and affiliation on the offer letter.",
        "Do not pay against an informal offer that bypasses DGME's foreign-student process.",
      ],
    },
    {
      title: "Complete the required fee payment",
      points: [
        "At Enam, the published Indian-student schedule is US$20,000 at booking followed by four instalments totalling US$45,000, plus BDT 50,000 in professional-exam charges and BDT 1,000 registration.",
        "Pay only to the college's official account, against a receipt and the written schedule.",
      ],
    },
    {
      title: "Arrange travel and immigration formalities",
      points: [
        "Apply for a Bangladesh student visa with the college's admission letter; some missions also ask for Ministry of Education attestation and a financial guarantee.",
        "Confirm the current checklist with the Bangladesh High Commission or Deputy High Commission handling your application.",
      ],
    },
    {
      title: "Complete arrival, registration and campus enrolment",
      points: [
        "Register with the High Commission of India in Dhaka after arrival, as its student advisory directs.",
        "Complete college registration, BMDC and university formalities, hostel check-in and any medical requirements.",
        "Keep original certificates available for verification throughout enrolment.",
      ],
    },
  ],
  competitiveEdge: {
    title: "Why Bangladesh? The competitive edge",
    description:
      "What the verified record supports, and what to check for your chosen college.",
    image: homeImages.studentsLibrary,
    imageAlt: "Students studying together in a university library",
    points: [
      "A single US-dollar course fee at colleges that publish foreign charges, instead of year-by-year rupee estimates that move with the exchange rate.",
      "Five academic years plus a one-year internship, with clinical training at the college's own teaching hospital — ask for the rotation list and patient-load details.",
      "An established Indian cohort: 507 of 1,156 foreign enrolments in 2024–25, which means shared travel, senior guidance and settled hostels.",
      "A small government quota — 224 seats across government medical and dental institutions in 2025–26 — allocated by nomination rather than direct application.",
    ],
  },
  admissionSteps: [
    "Check the DGME foreign-student eligibility and GPA-equivalence rules for the current session.",
    "Shortlist colleges with BMDC registration and a teaching hospital you are comfortable with.",
    "Submit attested documents and the DGME equivalence fee through the foreign-student portal.",
    "Complete the college's admission process and obtain the offer letter.",
    "Pay fees against the written schedule and official receipt.",
    "Apply for a Bangladesh student visa with the admission letter.",
    "Travel, register with the High Commission of India, and enrol on campus.",
  ],
  universityGuidance:
    "The reference Bangladesh page lists government and private colleges with total five-year fee estimates, but most colleges do not publish a readable foreign-student schedule. Only Enam's official foreign fee list could be verified here. We help you compare colleges and prepare documents without guaranteeing seat allocation or recognition.",
  costGuidance:
    "The one verified foreign-student figure is Enam's US$45,000 total for the five-year course for Indian students, plus US$65–100 a month for hostel and BDT 50,000 in professional-exam charges. Budget separately for food, travel, visa costs and the exchange rate, and treat agent packages as estimates until the college confirms them in writing.",
  documentsRequired: [
    "10th and 12th mark sheets and certificates",
    "NEET scorecard (Indian applicants)",
    "Passport and passport-size photographs",
    "Attested academic documents (education and foreign-affairs ministries)",
    "DGME equivalence fee transfer receipt",
    "College admission letter (for the visa)",
    "Financial guarantee, where the mission requires it",
  ],
  eligibility: [
    "Private colleges (2025–26 foreign criteria): O-level/Class 10 in 2022 or later, A-level/Class 12 in 2024 or 2025, combined GPA 7.0 with Biology 3.50 at A-level.",
    "Indian students: NEET-UG qualification and age 17 by 31 December of the admission year.",
    "Government-college quota: separate criteria (the 2025–26 notice indicated an aggregate GPA of 8.50) and nomination-based seats.",
    "All applicants: valid passport and academic documents attested by their education and foreign-affairs ministries.",
  ],
  livingAccommodation:
    "Most private medical colleges expect foreign students to live in the college hostel. Enam lists US$65–100 a month depending on the hostel, with food charged separately at around BDT 4,000 a month. Hostel rules, room types and mess arrangements differ by college, so confirm what is included before you pay.",
  faqs: [
    {
      question: "What marks do I need for MBBS in Bangladesh?",
      answer:
        "The foreign-student criteria are expressed as GPA equivalence, not percentages: a combined GPA of at least 7.0 with Biology at 3.50 at A-level for 2025–26 private-college admission. Government-quota seats have separate, higher criteria.",
    },
    {
      question: "How long is MBBS in Bangladesh?",
      answer:
        "Five academic years followed by a one-year internship at the college's teaching hospital, for six years in total. Confirm the structure on your admission letter.",
    },
    {
      question: "Is a student visa required?",
      answer:
        "Yes. You apply with the college's admission letter, and some missions also ask for Ministry of Education attestation and a financial guarantee. Confirm the current checklist with the Bangladesh mission handling your application.",
    },
    {
      question: "Does Medifaith guarantee BMDC or NMC listing?",
      answer:
        "No. BMDC registration is college-specific, and NMC does not endorse a list of foreign institutions — Indian graduates must clear the screening examination and meet NMC's foreign-graduate rules. Verify both independently.",
    },
  ],
  seo: {
    title: "MBBS in Bangladesh",
    description:
      "MBBS in Bangladesh: verified college fees, foreign-student admission process and counselling from Medifaith Abroad.",
  },
};
