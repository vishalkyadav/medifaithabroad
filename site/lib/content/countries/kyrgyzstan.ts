import { contact } from "@/lib/contact";
import { homeImages } from "@/lib/content/home-images";
import type { CountryPageContent } from "./types";

/** Kyrgyzstan fee rows transcribed from the supplied screenshot. */
export const kyrgyzstan: CountryPageContent = {
  slug: "kyrgyzstan",
  name: "Kyrgyzstan",
  heroTitle: "Dream of MBBS? Choose Kyrgyzstan",
  heroSubtitle:
    "Explore medical study options in Kyrgyzstan with personalised counselling.",
  heroActions: [
    { label: "About Us", href: "/about" },
    { label: "Call Us Now", href: contact.callCtaHref, variant: "outline" },
  ],
  introduction:
    "Medical programme names, language of instruction, admission eligibility, clinical training, and fees vary by institution and intake. The International Higher School of Medicine (IHSM) describes an MBBS programme and English-language medical education on its official website. Confirm the exact programme, campus, current international-student requirements, and written fee schedule directly with each university before applying.",
  universityFees: [
    {
      university: "Asian Medical Institute, Kant",
      tuition: "₹2,92,400",
      hostel: "₹38,700",
      totalApproximateAnnualCost: "₹3,31,100",
    },
    {
      university: "International Higher School of Medicine (IHSM), Bishkek",
      tuition: "₹3,26,800",
      hostel: "₹55,900",
      totalApproximateAnnualCost: "₹3,82,700",
    },
    {
      university: "Osh State University, Osh",
      tuition: "₹3,01,000",
      hostel: "₹1,50,500",
      totalApproximateAnnualCost: "₹4,51,500",
    },
    {
      university: "Kyrgyz National University, Bishkek",
      tuition: "₹3,87,000",
      hostel: "₹68,800",
      totalApproximateAnnualCost: "₹4,55,800",
    },
    {
      university: "Kyrgyz Russian Slavic University, Bishkek",
      tuition: "₹5,59,000",
      hostel: "₹34,400",
      totalApproximateAnnualCost: "₹5,93,400",
    },
    {
      university: "Jalalabad State University, Jalal-Abad",
      tuition: "₹3,61,200",
      hostel: "₹51,600",
      totalApproximateAnnualCost: "₹4,12,800",
    },
    {
      university: "International School of Medicine, Bishkek",
      tuition: "₹5,56,000",
      hostel: "₹56,000",
      totalApproximateAnnualCost: "₹6,12,000",
    },
    {
      university: "Kyrgyz State Medical Academy, Bishkek",
      tuition: "₹3,65,200",
      hostel: "—",
      totalApproximateAnnualCost: "₹3,65,200",
    },
    {
      university: "Bishkek International Medical Institute",
      tuition: "₹2,90,500",
      hostel: "₹49,800",
      totalApproximateAnnualCost: "₹3,40,300",
    },
    {
      university: "LN Medical College Kyrgyzstan (private)",
      tuition: "₹3,32,000",
      hostel: "₹1,49,400",
      totalApproximateAnnualCost: "₹4,81,400",
    },
    {
      university: "Osh State University (Medical Faculty)",
      tuition: "₹2,88,000",
      hostel: "₹33,200",
      totalApproximateAnnualCost: "₹3,21,200",
    },
    {
      university: "International University of Kyrgyzstan, Bishkek",
      tuition: "₹3,50,000 (USD 4,500 est.)",
      hostel: "₹ ~50,000",
      totalApproximateAnnualCost: "₹4,00,000 est.",
    },
    {
      university: "Avicenna International Medical University",
      tuition: "₹3,28,000",
      hostel: "₹ ~50,000",
      totalApproximateAnnualCost: "₹3,78,000 est.",
    },
  ],
  feeSectionTitle: "MBBS in Kyrgyzstan – Fee Structure",
  feeSectionDescription: "",
  feeTableDisclaimer: "",
  feeColumnLabels: {
    university: "College Name",
    tuition: "Tuition Fee (Per Year, INR)",
    hostel: "Hostel Fee (Per Year, INR)",
    totalApproximateAnnualCost: "Total (Approx./Year)",
  },
  showEnquiryForm: true,
  enquiryFormTitle: "Let’s discuss MBBS in Kyrgyzstan",
  enquiryFormOptions: {
    submitLabel: "Let's Discuss",
    messageLabel: "Requirement",
    privacyReassurance:
      "Your details are used only to respond to this enquiry.",
  },
  // TODO: Add Kyrgyzstan introduction video here
  showVideoPlaceholder: true,
  collegesTabSide: "left",
  collegesTabTone: "gold",
  whyStudy: [
    {
      title: "English-language option",
      description:
        "IHSM's official website describes English-language medical education. Confirm the teaching language for the full programme, campus, and clinical years.",
      icon: "university",
    },
    {
      title: "Clinical learning facilities",
      description:
        "IHSM lists a clinical simulation centre and affiliated state hospitals. Confirm the clinical placement plan for the exact programme and intake.",
      icon: "team",
    },
    {
      title: "International applicants",
      description:
        "IHSM describes an undergraduate pathway for foreign citizens; its stated entry conditions are programme-specific and should be checked directly.",
      icon: "support",
    },
    {
      title: "Compare written costs",
      description:
        "Ask each university for current tuition, accommodation availability and charges, and other compulsory costs before comparing annual budgets.",
      icon: "fees",
    },
  ],
  competitiveEdge: {
    title: "Why Choose Kyrgyzstan?",
    description:
      "Compare the programme and campus details that matter to your plans rather than relying on general claims.",
    points: [
      "IHSM's official website describes an MBBS programme and English-language medical education; do not assume the same programme or language is offered by every institution.",
      "IHSM lists a clinical simulation centre and affiliated state hospitals. Ask the university how practical training and clinical placements are arranged for your intake.",
      "Current tuition, hostel fees, and total annual costs remain unverified here. Request a written, itemised fee schedule before making a payment.",
    ],
    image: homeImages.studentsLibrary,
    imageAlt: "Students studying together in a library",
  },
  admissionStagesTitle:
    "KG MBBS Admission Process in Kyrgyzstan (For Indian Students)",
  admissionStagesDescription:
    "Requirements and procedures vary by university, nationality, and intake. Confirm current steps with the institution and relevant authorities before you apply.",
  admissionStages: [
    {
      title: "Eligibility and preparation",
      points: [
        "Indian applicants should meet the current NMC/NEET-UG requirements for studying medicine abroad, including applicable Class 12 science-subject, English, age, and category-specific marks criteria. The minimum age is generally 17 by 31 December of the admission year; check the latest official rules.",
        "Indian applicants must qualify NEET-UG where required under current Indian rules. Applicants of other nationalities should follow their own country's requirements and the university's criteria; NEET is India-specific.",
        "Confirm the programme's language of instruction for all years. IHSM describes English-language medical education; do not assume this applies to other universities or removes any local-language needs in clinical settings.",
      ],
    },
    {
      title: "Application and documentation",
      points: [
        "Apply through the university's official international admissions process and confirm that the selected programme is open to applicants with your nationality and qualifications.",
        "Prepare academic certificates and transcripts, a valid passport, photographs, the application form, and a NEET-UG scorecard for Indian applicants.",
        "Provide medical reports, translations, notarisation, or legalisation only when the university or relevant authority requires them for your application.",
      ],
    },
    {
      title: "Admission confirmation and fees",
      points: [
        "Review the official offer or invitation and verify the institution, campus, programme name, language, duration, entry conditions, and any applicable recognition or licensing requirements.",
        "Complete document checks requested by the university. Obtain a written breakdown of tuition, accommodation, other required charges, payment dates, and refund terms before paying.",
        "Pay only through payment instructions confirmed by the university and retain the official receipt. An offer or payment does not guarantee later regulatory or licensing eligibility.",
      ],
    },
    {
      title: "Visa and travel arrangements",
      points: [
        "Check current Kyrgyz visa and entry requirements for your passport and study purpose on the official Kyrgyz e-Visa portal or with the relevant authority; requirements differ by nationality.",
        "Arrange the required visa or entry authorisation before travel where applicable. Visa decisions are made by government authorities, not the university or counsellor.",
        "After arrival, follow the university's instructions for registration, accommodation, and any immigration formalities. Confirm available student support and travel arrangements directly with the institution.",
      ],
    },
  ],
  admissionSteps: [
    "Check current academic, age, NEET, and university-specific eligibility.",
    "Apply with the documents requested by the university.",
    "Verify the official offer and itemised fees before payment.",
    "Complete any required visa or entry process, then register with the university.",
  ],
  universityGuidance:
    "IHSM is the only institution retained in this fee table because its official website describes an MBBS programme, English-language medical education, and an international-student pathway. Programme availability, eligibility, and suitability for Indian applicants must still be checked for the intended campus and intake. Other universities from older reference material are not shown until their current official information can be confirmed.",
  costGuidance:
    "No current official international tuition or hostel schedule was verified for the listed programme. Do not rely on earlier INR conversions or estimates. Request a written, itemised schedule from the university and budget separately for any charges not included in it.",
  documentsRequired: [
    "Academic certificates and transcripts (including Class 10 and 12 for Indian applicants)",
    "Valid passport",
    "Passport-size photographs in the university's required format",
    "NEET-UG scorecard for Indian applicants, where required",
    "Application form and any additional documents requested by the university",
    "Medical reports, translations, or legalisation documents only if requested",
  ],
  eligibility: [
    "Indian applicants must check current NMC/NEET-UG academic, subject, English, age, and category-specific requirements; the minimum age is generally 17 by 31 December of the admission year.",
    "NEET-UG requirements apply to Indian applicants under current Indian rules; applicants from other countries follow their own national and university rules.",
    "Confirm the exact programme and language of instruction with the university. IHSM describes English-language medical education; language and clinical requirements may differ elsewhere.",
  ],
  faqs: [
    {
      question: "Are all Kyrgyzstan medical universities NMC approved?",
      answer:
        "No blanket approval or recognition claim is made here. Indian applicants should check current NMC rules and the exact institution, programme, campus, and course details before enrolling.",
    },
    {
      question: "How much are tuition and hostel fees?",
      answer:
        "Current official international tuition and hostel amounts were not verified for this page. Request an itemised schedule directly from the university; do not rely on older INR estimates.",
    },
    {
      question: "Is every medical programme taught in English?",
      answer:
        "No. IHSM describes English-language medical education, but language of instruction can differ by university, programme, and clinical stage. Confirm it in writing for your intake.",
    },
    {
      question: "Do I need a visa to study in Kyrgyzstan?",
      answer:
        "Visa and entry requirements depend on your passport and study purpose. Check the official Kyrgyz e-Visa portal and relevant authorities before booking travel.",
    },
  ],
  seo: {
    title: "MBBS in Kyrgyzstan",
    description:
      "Explore medical study options in Kyrgyzstan, university-specific eligibility, and fee-planning guidance with Medifaith Abroad.",
  },
};
