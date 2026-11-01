import type { CountryPageContent } from "./types";
import { homeImages } from "../home-images";
import { contactHrefForCountry } from "@/lib/contact";

/**
 * Uzbekistan content is deliberately cautious in light of the NMC's April 2026
 * advisory for Indian applicants. Video fee figures are omitted because a
 * current, official schedule could not be verified for all institutions shown.
 */
export const uzbekistan: CountryPageContent = {
  slug: "uzbekistan",
  name: "Uzbekistan",
  heroTitle: "Explore Medical Study Options in Uzbekistan",
  heroSubtitle:
    "Compare a specific program carefully, confirm its requirements directly, and review the applicable licensing rules before making a decision.",
  heroImageAlt: "Exterior building with Samarkand State Medical University signage",
  heroActions: [
    { label: "Discuss your options", href: contactHrefForCountry("uzbekistan") },
    { label: "Admission process", href: "#admission-process", variant: "outline" },
  ],
  introduction:
    "Medical study in Uzbekistan requires careful, program-specific due diligence. Cost and eligibility claims may not apply to every institution or intake. For Indian applicants, the National Medical Commission issued a specific Uzbekistan advisory in April 2026 urging extreme caution. Verify the exact institution, campus, program, language, clinical training, internship and licensing requirements before applying or paying.",
  feeSectionTitle: "Medical Universities in Uzbekistan",
  feeSectionDescription: "",
  feeTableDisclaimer: "",
  universityFees: [
    { university: "Tashkent Medical Academy", tuition: "3.5L – 4.2L", hostel: "70,000", otc: "$1500" },
    { university: "Samarkand State Medical University", tuition: "3.2L – 3.8L", hostel: "65,000", otc: "$1500" },
    { university: "Bukhara State Medical Institute", tuition: "3.0L – 3.6L", hostel: "60,000", otc: "$1120" },
    { university: "Andijan State Medical University", tuition: "3.2L – 3.6L", hostel: "65,000", otc: "$1300" },
    { university: "Fergana State Medical University", tuition: "2.8L – 3.4L", hostel: "65,000", otc: "$1200" },
    { university: "Namangan State Medical University", tuition: "3.15L", hostel: "Hostel Incl.", otc: "$1500" },
    { university: "Andijan State Medical Institute", tuition: "3.6L", hostel: "Hostel Incl.", otc: "$1500" },
    { university: "Bukhara State Medical University", tuition: "3.05L", hostel: "Hostel Incl.", otc: "$1200" },
    { university: "Karshi State Medical University", tuition: "2.65L", hostel: "50,000", otc: "$1000" },
    { university: "Nukus State Medical University", tuition: "2.65L", hostel: "22,000", otc: "$800" },
    { university: "Fergana State University", tuition: "2.9L", hostel: "62,000", otc: "$1200" },
    { university: "MIPER", tuition: "2.9L", hostel: "49,000", otc: "$1000" },
  ],
  feeColumnLabels: {
    university: "College Name",
    tuition: "Tuition Fees (Per Year, ₹)",
    hostel: "Hostel Fees (Per Year, ₹)",
    otc: "OTC (1st Year)",
  },
  countryTrustPoints: [
    {
      title: "NMC issued a specific Uzbekistan alert",
      description:
        "Indian applicants are advised to exercise extreme caution and verify the selected program's compliance.",
      icon: "support",
    },
    {
      title: "Check the complete course duration",
      description:
        "NMC's alert specifies at least 54 months of education at one institution and a 12-month internship at that same university for the pathway it describes.",
      icon: "university",
    },
    {
      title: "Confirm language and clinical training",
      description:
        "The alert calls for English instruction and clinical training that is not split across countries.",
      icon: "team",
    },
    {
      title: "Get current written costs",
      description:
        "Ask the institution for an itemized schedule for the exact program, campus and intake before transferring funds.",
      icon: "fees",
    },
  ],
  admissionDetailsTitle: "Important NMC advisory for Indian applicants",
  admissionDetailsDescription:
    "The National Medical Commission issued a destination-specific warning. Read the official notice and verify the exact institution, campus and program before applying.",
  admissionDetails: [
    {
      section: "Uzbekistan alert — April 2026",
      details: [
        "The NMC advises Indian students considering undergraduate medical programs in Uzbekistan to exercise extreme caution and verify that the exact institution and program comply with the Foreign Medical Graduate Licentiate (FMGL) Regulations, 2021.",
        "The alert lists requirements including at least 54 months of education at one institution, a 12-month internship at the same foreign university, English as the medium of instruction, and clinical training that is not divided across countries. It also calls for checking the required curriculum and licensing status in the country awarding the degree.",
        "The notice names Bukhara State Medical Institute, Samarkand State Medical University and Tashkent State Medical University, and separately discusses TIT Institute of Medical Sciences in Bangalore as an offshore-campus case. These names are not endorsements. The notice reports concerns and calls for careful due diligence; check the full alert and your exact campus and intake before proceeding.",
      ],
      sources: [
        {
          label: "Read the NMC Uzbekistan alert (April 2026)",
          href: "https://nmc.org.in/whats-new/download/51",
        },
        {
          label: "NMC rules and regulations",
          href: "https://oldnmc.nmc.org.in/rules-regulations-nmc/",
        },
        {
          label: "NMC guidance on foreign institutions",
          href: "https://www.nmc.org.in/MCIRest/open/getDocument?path=%2FDocuments%2FPublic%2FPortal%2FLatestNews%2FPublic-Notice-NEET-Eligibility-05.04.2019.pdf",
        },
      ],
    },
  ],
  whyStudy: [
    {
      title: "Check the exact institution and campus",
      description:
        "Confirm that the named institution, campus and medical program are authorized for the intake you are considering. A name appearing in a promotional list does not establish NMC endorsement or Indian licensing eligibility.",
      icon: "university",
    },
    {
      title: "Verify language in practice",
      description:
        "Request written confirmation of the teaching language and how students communicate during supervised clinical training.",
      icon: "team",
    },
    {
      title: "Review clinical training and internship",
      description:
        "Ask where clinical rotations take place and whether the full course and internship meet the applicable regulator's requirements.",
      icon: "support",
    },
    {
      title: "Compare a written cost schedule",
      description:
        "Separate tuition, accommodation, one-time charges and other expenses, and confirm the academic year, currency and refund terms directly with the institution.",
      icon: "fees",
    },
  ],
  admissionStagesTitle: "Admission planning for Indian students — Uzbekistan",
  admissionStagesDescription:
    "Use these nine stages as a planning outline, not a promise of admission or a universal checklist. Requirements vary by institution and intake. The NMC's April 2026 Uzbekistan alert makes independent verification especially important for Indian applicants.",
  admissionStages: [
    {
      title: "Review your eligibility",
      points: [
        "Check current Indian eligibility and NEET requirements for your admission year with the official authorities.",
        "Confirm the institution's own academic and age criteria in writing; do not rely on generic percentage figures copied from old webpages.",
      ],
    },
    {
      title: "Verify the institution and program",
      points: [
        "Check the exact legal institution, campus, degree, program duration, language, curriculum, clinical training and internship arrangements.",
        "For an Indian licensing pathway, compare each requirement with the NMC FMGL rules and its Uzbekistan-specific alert. NMC does not provide a blanket endorsement through a marketing list.",
      ],
    },
    {
      title: "Prepare and submit documents",
      points: [
        "The recording lists academic records, a NEET scorecard for Indian applicants, passport copies, photographs and a completed application form as examples.",
        "Obtain the current checklist from the university or relevant authority and confirm any attestation, translation or medical documents required for your case.",
      ],
    },
    {
      title: "Review any admission offer",
      points: [
        "Check the institution and campus, program, duration, teaching language, total charges, payment recipient and conditions on the official offer.",
        "An offer or agent statement does not guarantee that the degree will meet later licensing requirements.",
      ],
    },
    {
      title: "Confirm visa requirements",
      points: [
        "Follow current instructions from the relevant Uzbekistan authority and the university for your nationality and study program.",
        "Do not rely on the recording's passport-validity period or document list as a current universal visa checklist.",
      ],
    },
    {
      title: "Verify fees before paying",
      points: [
        "Request a dated, itemized fee schedule directly from the institution, including tuition, accommodation, one-time charges, currency and refund terms.",
        "Independently verify the payee and official bank details; keep receipts and written confirmations.",
      ],
    },
    {
      title: "Coordinate travel and arrival",
      points: [
        "Confirm travel dates and arrival instructions with the institution after the appropriate documents are issued.",
        "Airport pickup should be treated as available only if the university confirms it for your intake.",
      ],
    },
    {
      title: "Complete arrival formalities",
      points: [
        "Ask the university and relevant authorities about registration, original-document checks, student identification and accommodation arrangements.",
        "Confirm hostel availability and terms directly; accommodation is not guaranteed by this page.",
      ],
    },
    {
      title: "Confirm enrollment and program structure",
      points: [
        "Review the final enrollment documents, academic calendar, clinical training locations and internship arrangements.",
        "For Indian applicants, ensure the complete program meets the applicable NMC requirements before committing to study.",
      ],
    },
  ],
  competitiveEdge: {
    title: "What to verify before choosing a program",
    description:
      "The NMC's Uzbekistan-specific alert makes institution-by-institution due diligence essential for Indian applicants.",
    image: homeImages.studentsLibrary,
    imageAlt: "Students studying in a university library",
    points: [
      "Verify the exact university, campus and degree with the relevant authorities; names in a directory or promotional page are not an assurance of licensing eligibility.",
      "Check that the full course duration, English instruction, curriculum, clinical training and internship meet the current rules for your intended licensing pathway.",
      "Ask where clinical rotations occur, how students communicate with patients and whether the internship is completed at the same foreign university.",
      "Compare current written fee schedules and refund terms from the institution before sending money.",
    ],
  },
  showEnquiryForm: true,
  showVideoPlaceholder: true,
  enquiryFormTitle: "Discuss your Uzbekistan study questions",
  enquiryFormOptions: {
    submitLabel: "Send enquiry",
    showInterest: true,
  },
  admissionSteps: [
    "Check the current eligibility requirements for your nationality and intended licensing pathway.",
    "Verify the institution, campus, curriculum and clinical training directly with official sources.",
    "Submit the institution's current application documents.",
    "Review any official offer and all conditions before accepting.",
    "Confirm visa requirements with the relevant authorities.",
    "Pay only after verifying a written fee schedule and official payment details.",
    "Coordinate travel and arrival directly with the university.",
    "Complete registration and accommodation arrangements as confirmed by the institution.",
    "Confirm the final program and internship structure before enrollment.",
  ],
  universityGuidance:
    "The NMC's April 2026 alert specifically discusses Uzbekistan, names Bukhara State Medical Institute, Samarkand State Medical University and Tashkent State Medical University, and separately discusses TIT Institute of Medical Sciences in Bangalore as an offshore-campus case. The notice flags concerns and urges extreme caution. This is not a list of recommended universities. Verify the exact institution, campus, program and intake against the full advisory and current official sources before applying.",
  costGuidance:
    "The video contains rupee-denominated tuition and hostel figures and US-dollar first-year OTC amounts for 12 entries, but a current official fee schedule supporting all those names and figures could not be verified. They are not reproduced here. Request a dated, itemized written quotation directly from the institution and confirm exactly what each charge includes before paying.",
  documentsRequired: [
    "Academic certificates and transcripts required by the selected institution",
    "Passport and photographs in the format requested by the institution",
    "NEET documentation for Indian applicants where required for their pathway",
    "Completed application forms and any required translations or attestations",
    "Additional visa, medical or enrollment documents confirmed by the relevant authorities",
  ],
  eligibility: [
    "Admission thresholds and age requirements vary by institution and intake; obtain the current criteria directly from the institution.",
    "Indian applicants should check the current NEET and eligibility requirements with official Indian authorities for their admission year.",
    "The NMC's 2026 alert specifies minimum course-duration, same-institution internship, English-medium, curriculum and clinical-training conditions relevant to Indian registration.",
    "No admission route or future registration outcome is guaranteed by this page or by a university list.",
  ],
  livingAccommodation:
    "Accommodation types, availability, registration requirements and costs depend on the specific institution and campus. Confirm room options, facilities, rules, payment schedule and refund terms directly with the university before accepting an offer.",
  faqs: [
    {
      question: "What should Indian applicants know about the NMC's Uzbekistan alert?",
      answer:
        "In April 2026, the NMC advised Indian students considering undergraduate medical programs in Uzbekistan to exercise extreme caution and verify full compliance with the FMGL Regulations. Read the linked notice and check the exact institution, campus, program and intake before applying or paying.",
    },
    {
      question: "Does the NMC approve a general list of Uzbekistan universities?",
      answer:
        "Do not treat a promotional list or directory entry as NMC approval or a guarantee of Indian registration. Verify the exact course and institution against current NMC requirements and the competent regulator in the country awarding the degree.",
    },
    {
      question: "What are the current tuition and hostel fees?",
      answer:
        "The figures shown in the recording could not be verified as current official quotations for all listed programs, so they are not published here. Request a dated itemized schedule directly from the institution, including currency, accommodation and one-time charges.",
    },
    {
      question: "Is every program taught in English?",
      answer:
        "Do not assume that every campus or clinical placement uses English in practice. Obtain written confirmation for the exact program and ask how clinical communication is handled.",
    },
    {
      question: "How long must a program be for an Indian licensing pathway?",
      answer:
        "The NMC's Uzbekistan alert describes at least 54 months of education at one institution and a 12-month internship at the same foreign university, among other requirements. Check the complete current regulations and verify that the exact program meets them; this is not a licensing guarantee.",
    },
    {
      question: "Are scholarships, airport pickup or hostel places guaranteed?",
      answer:
        "No such offer is verified here. Ask the relevant institution for written confirmation of any scholarship terms, arrival support or accommodation availability for your intake.",
    },
  ],
  seo: {
    title: "MBBS in Uzbekistan: Programs, Admission and NMC Guidance",
    description:
      "Explore medical study options in Uzbekistan, review the NMC advisory for Indian applicants, and learn what to verify before applying.",
  },
};

