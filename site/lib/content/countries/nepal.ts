import { homeImages } from "../home-images";
import { contactHrefForCountry } from "@/lib/contact";
import type { CountryPageContent } from "./types";

/** Nepal college table transcribed from the supplied screenshots. */
export const nepal: CountryPageContent = {
  slug: "nepal",
  name: "Nepal",
  heroImage: homeImages.nepalhero,
  heroImageAlt: "Illustrated university building with Nepal-themed signage",
  heroTitle: "Dream of MBBS? Choose Nepal",
  heroSubtitle:
    "Review the current admission route, college details and fee estimates before you apply.",
  heroActions: [
    { label: "Enquire about Nepal", href: contactHrefForCountry("nepal") },
    { label: "Admission process", href: "/admission-process", variant: "outline" },
  ],
  introduction:
    "Medical colleges in Nepal have institution-specific courses, admission routes, fees and clinical-training arrangements. The current Nepal Medical Education Commission (MEC) notices and each college’s official information should be checked for the intended intake. The fee figures below reproduce an undated reference list and are not current quotations or confirmation that a college is accepting applicants.",
  universityFees: [
    { university: "Institute of Medicine (IOM), TU – Kathmandu", tuition: "₹35–45 L", hostel: "", notes: "Elite government college, highly competitive" },
    { university: "B.P. Koirala Institute of Health Sciences (BPKIHS) – Dharan", tuition: "₹50–55 L", hostel: "", notes: "Autonomous, with top infrastructure" },
    { university: "Manipal College of Medical Sciences (MCOMS) – Pokhara", tuition: "₹55–60 L", hostel: "", notes: "Manipal group–run, advanced facilities" },
    { university: "Kathmandu University School of Medical Sciences (KUSMS) – Dhulikhel", tuition: "₹37 L", hostel: "", notes: "One of cheapest under KU" },
    { university: "Kathmandu Medical College (KMC) – Kathmandu", tuition: "₹55–60 L", hostel: "", notes: "Well-known, good hospital exposure" },
    { university: "Nepal Medical College (NMC) – Kathmandu", tuition: "₹55–60 L", hostel: "", notes: "Modern infrastructure, NMC-approved" },
    { university: "Nepalgunj Medical College (NGMC) – Nepalgunj", tuition: "₹50–55 L", hostel: "", notes: "Value-for-money, popular with Indian students" },
    { university: "College of Medical Sciences (CMS) – Bharatpur", tuition: "₹45–50 L", hostel: "", notes: "KU-affiliated, growing repute" },
    { university: "Nobel Medical College – Biratnagar", tuition: "₹55–60 L", hostel: "", notes: "KU-affiliated, strong hospital" },
    { university: "Devdaha Medical College – Rupendehi", tuition: "₹45–50 L", hostel: "", notes: "Budget-friendly, newer college" },
    { university: "Lumbini Medical College – Palpa", tuition: "₹50–55 L", hostel: "", notes: "KU-affiliated, growing clinical exposure" },
    { university: "Birat Medical College – Biratnagar", tuition: "₹50–55 L", hostel: "", notes: "KU-affiliated, modern campus" },
    { university: "Janaki Medical College – Janakpur", tuition: "₹50–55 L", hostel: "", notes: "TU-affiliated, regional hub" },
    { university: "Universal College of Medical Sciences (UCMS) – Bhairahawa", tuition: "₹50–55 L", hostel: "", notes: "TU-affiliated, good academics" },
    { university: "National Medical College – Birgunj", tuition: "₹50–55 L", hostel: "", notes: "TU-affiliated" },
    { university: "KIST Medical College – Lalitpur", tuition: "₹50–55 L", hostel: "", notes: "TU-affiliated" },
    { university: "Chitwan Medical College (CMC) – Bharatpur", tuition: "₹50–55 L", hostel: "", notes: "TU-affiliated, excellent clinical exposure" },
    { university: "Gandaki Medical College – Pokhara", tuition: "₹50–55 L", hostel: "", notes: "TU-affiliated" },
    { university: "Devdaha Medical College & Teaching Hospital", tuition: "₹45–50 L", hostel: "", notes: "KU-affiliated" },
  ],
  feeSectionTitle: "Medical Colleges in Nepal",
  feeSectionDescription: "",
  feeTableDisclaimer: "",
  feeColumnLabels: {
    university: "College Name",
    tuition: "Total MBBS Fee (INR, est.)",
    notes: "Notes / Highlights",
  },
  countryTrustPoints: [
    {
      title: "Check the current MEC route",
      description: "Nepal publishes session-specific entrance and foreign-candidate notices; confirm the process for your applicant category.",
      icon: "university",
    },
    {
      title: "Compare institutions individually",
      description: "Course availability, affiliation, facilities and selection requirements must be checked for each college and intake.",
      icon: "support",
    },
    {
      title: "Treat old fee figures as estimates",
      description: "The local reference list is undated. Ask the institution for a current written fee schedule.",
      icon: "fees",
    },
    {
      title: "Plan licensing separately",
      description: "Admission does not establish eligibility for medical registration in India or elsewhere.",
      icon: "team",
    },
  ],
  admissionStagesTitle: "Nepal MBBS admission process for Indian students",
  admissionStagesDescription:
    "Admission and licensing requirements depend on the intake, applicant category, institution and intended practice country. Verify each step using current official notices.",
  admissionStages: [
    {
      title: "Check eligibility and entrance requirements",
      points: [
        "Indian citizens and OCI applicants intending to study a primary medical qualification abroad must meet current NEET-UG requirements; confirm the applicable rules for your admission year.",
        "MEC publishes foreign-candidate entrance and matching notices. Confirm whether and how the current session process applies to you.",
        "Check academic subjects, marks and age requirements against current NTA/NMC and MEC rules rather than relying on old percentage summaries.",
      ],
    },
    {
      title: "Shortlist a currently eligible college",
      points: [
        "Confirm that the institution is offering the specific medical programme and has seats for your applicant category in the intended intake.",
        "Check current MEC listings, university affiliation, the teaching institution and hospital arrangements directly with official sources.",
        "For a future Indian licensing pathway, compare the exact course and institution against current NMC rules; no blanket approval is implied here.",
      ],
    },
    {
      title: "Prepare documents and apply through the stated route",
      points: [
        "Gather academic records, identity/passport documents, photographs and NEET evidence for Indian applicants.",
        "Obtain equivalency or other supporting documents only where MEC or the institution requires them.",
        "Use the current MEC notice and college instructions for the application form, entrance process and submission method.",
      ],
    },
    {
      title: "Complete selection and verify the offer",
      points: [
        "Complete any applicable entrance examination, matching, interview or college-level selection steps.",
        "Check the written offer for the institution, programme, campus, intake, course length and conditions before accepting.",
      ],
    },
    {
      title: "Confirm fees before making payment",
      points: [
        "Request a current written schedule stating what the total covers, payment dates, additional charges and refund terms.",
        "Pay only through the institution's confirmed payment channel and retain its official receipt.",
      ],
    },
    {
      title: "Arrange travel and accommodation",
      points: [
        "Check current entry-document and travel requirements for your citizenship and travel method with official authorities.",
        "Confirm accommodation availability, cost, facilities and rules directly with the institution; the source fee list gives no hostel details.",
      ],
    },
    {
      title: "Complete enrolment and review licensing requirements",
      points: [
        "Follow the college's registration, orientation and medical-document instructions after arrival.",
        "For Indian licensure, NMC regulations specify course, internship, English-medium, registration and examination conditions. Confirm that the exact programme satisfies current rules; admission alone does not guarantee registration.",
      ],
    },
  ],
  showEnquiryForm: true,
  enquiryFormTitle: "Enquire about studying medicine in Nepal",
  enquiryFormOptions: {
    submitLabel: "Discuss Nepal options",
    messageLabel: "Your question",
    privacyReassurance: "Your details will only be used to respond to your enquiry.",
    showInterest: false,
  },
  /** TODO: Add Nepal introduction video here */
  showVideoPlaceholder: true,
  collegesTabSide: "left",
  collegesTabTone: "gold",
  whyStudy: [
    {
      title: "Geographic proximity",
      description: "Nepal shares a border with India. Travel routes, documents and practical arrangements still depend on the student's location and circumstances.",
    },
    {
      title: "Session-specific admission process",
      description: "MEC publishes entrance and foreign-candidate notices. Applicants should follow the current instructions for their category.",
    },
    {
      title: "Institution-by-institution comparison",
      description: "Compare the current programme, campus, hospital arrangements, fee schedule and student support before choosing a college.",
    },
    {
      title: "Separate licensing checks",
      description: "Applicants planning to practise in India must independently meet the applicable foreign medical graduate requirements.",
    },
  ],
  competitiveEdge: {
    title: "Why Nepal? What to check before applying",
    description: "A practical comparison should start with current official course and admission information.",
    image: homeImages.studentsLibrary,
    imageAlt: "Students studying together in a university library",
    points: [
      "Nepal is geographically close to India, though travel and entry requirements depend on individual circumstances.",
      "MEC entrance and foreign-candidate procedures are issued by session; use the current notice for your category.",
      "The college names and fee figures on this page come from an undated local reference file and do not confirm current course availability or approval.",
      "If planning to practise in India, review the current NMC foreign-graduate rules for the exact course before enrolling.",
    ],
  },
  admissionSteps: [
    "Check applicable NEET-UG, MEC and institution-specific eligibility for the current intake.",
    "Verify programme availability, current institution status and affiliation.",
    "Prepare the documents and apply through the stated MEC or college route.",
    "Complete the required selection steps and verify the written offer.",
    "Confirm the current fee schedule and refund terms before paying.",
    "Arrange travel, accommodation and arrival requirements.",
    "Complete enrolment and separately confirm any future licensing pathway.",
  ],
  universityGuidance:
    "The supplied list names medical colleges but does not establish which ones currently offer places to your applicant category. Check current MEC seat and entrance notices, the institution's programme page, university affiliation and teaching-hospital arrangements before applying.",
  costGuidance:
    "The INR figures are undated estimates copied from the local source file, not official current quotes. The source does not define their exact fee scope or give a payment schedule. Request a written breakdown for tuition, examination charges, accommodation, food and other costs directly from the institution.",
  documentsRequired: [
    "Academic certificates and transcripts for the required school qualifications",
    "NEET-UG score or qualification evidence for Indian applicants",
    "Passport or other identity documents accepted for the application and travel",
    "Recent photographs and completed application forms, if requested",
    "Equivalency certificate or entrance-examination documents, where required by MEC or the institution",
    "Medical certificate and other supporting documents only if requested for the specific intake",
  ],
  eligibility: [
    "Indian citizens and OCI candidates intending to study primary medical education abroad must check and meet current NEET-UG requirements.",
    "Academic subjects, marks, age and qualification-equivalency criteria depend on current NTA/NMC rules and the applicable MEC/institution process.",
    "Foreign-candidate entrance, matching, seat availability and document requirements are session- and category-specific; consult the latest MEC notice.",
    "Verify the exact programme, institution, course duration, language, internship and local registration requirements against current NMC rules if planning to practise in India.",
  ],
  livingAccommodation:
    "Accommodation availability, costs and rules vary by institution and location. The source fee list does not include verified hostel details. Ask the college for current room options, meal arrangements and charges before budgeting.",
  faqs: [
    {
      question: "Do Indian students need to qualify NEET to study medicine in Nepal?",
      answer: "Indian citizens and OCI applicants intending to pursue primary medical education abroad must check and meet the current NEET-UG rules. Confirm the requirements for your admission year with NMC and NTA.",
    },
    {
      question: "Do foreign applicants need to take Nepal's MEC entrance examination?",
      answer: "MEC publishes session-specific entrance and foreign-candidate notices. The applicable route can depend on category and intake, so follow the current notice and confirm with the institution.",
    },
    {
      question: "Are the fees shown current official college quotations?",
      answer: "No. They are estimates from an undated reference file. Confirm the exact programme, fee scope, payment schedule and additional charges directly with the college.",
    },
    {
      question: "Are all listed colleges NMC-approved?",
      answer: "This page does not make a blanket approval or recognition claim. Check the current programme and institution against official MEC, Nepal Medical Council and NMC requirements relevant to your intended licensing route.",
    },
    {
      question: "How long is the course and internship?",
      answer: "Course structure and internship arrangements must be confirmed with the institution for the specific programme. NMC's foreign-graduate rules set separate minimum requirements for applicants seeking registration in India; do not assume a course meets them based on a marketing summary.",
    },
    {
      question: "Can a Nepal medical degree guarantee registration or work in India?",
      answer: "No. Graduates must meet applicable NMC examination, internship, qualification and registration requirements. Admission or graduation does not guarantee a licence or employment.",
    },
  ],
  seo: {
    title: "Study MBBS in Nepal: Colleges, Fees and Admission Guidance",
    description:
      "Review source-listed Nepal medical college fee estimates, current admission checks and guidance for Indian applicants considering medical study in Nepal.",
  },
};
