import { homeImages } from "../home-images";
import { contact } from "@/lib/contact";
import type { CountryPageContent } from "./types";

const universityFees = ([
  // Public universities.
  ["University of Oxford", "£39,000–£44,000", "Public", "Public"],
  ["University of Cambridge", "£60,000–£70,000", "Public", "Public"],
  ["Imperial College London", "£50,000–£55,000", "Public", "Public"],
  ["University College London (UCL)", "£47,000–£53,000", "Public", "Public"],
  ["King's College London", "£45,000–£50,000", "Public", "Public"],
  ["University of Edinburgh", "£40,000–£48,000", "Public", "Public"],
  ["University of Manchester", "£30,000–£40,000", "Public", "Public"],
  ["University of Glasgow", "£21,600", "Public", "Public"],
  ["University of Leeds", "£44,000", "Public", "Public"],
  ["University of Liverpool", "£42,700", "Public", "Public"],
  ["University of Newcastle", "£44,500", "Public", "Public"],
  ["Queen Mary University of London", "£48,700", "Public", "Public"],
  ["St. George's University of London", "£40,500", "Public", "Public"],
  ["University of Bristol", "£38,000", "Public", "Public"],
  ["University of Southampton", "£35,000", "Public", "Public"],
  ["University of Nottingham", "£28,600", "Public", "Public"],
  ["University of Birmingham", "£35,000", "Public", "Public"],
  ["University of Sheffield", "£35,000", "Public", "Public"],
  ["University of Leicester", "£38,000", "Public", "Public"],
  ["University of Dundee", "£36,000", "Public", "Public"],
  ["University of Aberdeen", "£34,000", "Public", "Public"],
  ["University of Warwick", "£35,000", "Public", "Public"],
  ["University of St Andrews", "£30,000", "Public", "Public"],
  ["University of East Anglia", "£32,000", "Public", "Public"],
  ["University of Exeter", "£35,000", "Public", "Public"],
  // Private universities.
  ["University of Buckingham", "£35,000", "Private", "Private"],
  ["University of Chester", "£32,000", "Private", "Public"],
  ["University of Central Lancashire", "£30,000", "Private", "Public"],
  ["University of Worcester", "£28,000", "Private", "Public"],
  ["University of Hertfordshire", "£30,000", "Private", "Public"],
  ["University of Sunderland", "£28,000", "Private", "Public"],
  ["University of Greenwich", "£30,000", "Private", "Public"],
  ["University of South Wales", "£28,000", "Private", "Public"],
  ["University of London", "£32,000", "Private", "Public"],
  ["University of Derby", "£30,000", "Private", "Public"],
] as const).map(([university, tuition, tableGroup]) => ({
  university,
  tuition,
  teachingLanguage: "English",
  hostel: "Available",
  type: tableGroup,
  tableGroup,
}));

export const unitedKingdom: CountryPageContent = {
  slug: "united-kingdom",
  name: "United Kingdom",
  heroTitle: "Dream of MBBS? Choose the United Kingdom",
  heroSubtitle:
    "Explore UK medical degrees, competitive admissions and the costs to plan for.",
  heroActions: [
    { label: "About Us", href: "/about" },
    {
      label: "Call Us Now",
      href: contact.callCtaHref,
      variant: "outline",
    },
  ],
  introduction:
    "UK medical degrees are selective undergraduate programmes, usually lasting five or six years depending on the university. Entry requirements, international places, tuition, clinical placements and professional pathways vary by course. Compare each university's current requirements before applying; admission, registration, training and employment are never guaranteed.",
  universityFees,
  feeSectionTitle: "MBBS in UNITED KINGDOM– Colleges Fee Structure",
  feeSectionDescription: "",
  feeColumnLabels: {
    university: "University",
    tuition: "Tuition Fees (Annual)",
    hostel: "Hostel Facilities",
  },
  feeDataNote: "",
  countryTrustPoints: [
    {
      title: "Course-specific clinical learning",
      description:
        "Clinical placements and teaching settings vary by medical school and programme.",
      icon: "university",
    },
    {
      title: "English-language instruction",
      description:
        "Confirm teaching, placement and language-support arrangements with the course provider.",
      icon: "team",
    },
    {
      title: "University student support",
      description:
        "Pastoral, academic and international-student support is provider-specific.",
      icon: "support",
    },
    {
      title: "Separate licensing pathways",
      description:
        "Medical registration and postgraduate training have additional eligibility requirements.",
      icon: "fees",
    },
  ],
  admissionDetailsTitle: "MBBS Admission in UK",
  admissionDetails: [
    {
      section: "Admission process",
      details: [
        "Academic subjects, grades and accepted qualifications differ by university. Many courses expect strong science preparation; check the current course-specific entry requirements, including international-equivalency rules.",
        "UCAT is required by many participating medical schools, but not every programme uses the same test. Check the current UCAT university list and the requirements for your intended entry year.",
        "English-language test, score and exemption rules are set by each university.",
        "Apply through UCAS and check the current medicine application deadline for the relevant cycle. Selection may include academic screening, interviews (including MMI or panel formats), references and other university-specific stages.",
        "Offer conditions, acceptance, health checks and enrolment steps are determined by the university.",
        "For a Student visa, applicants generally need an offer from a licensed student sponsor, a Confirmation of Acceptance for Studies (CAS), English evidence and the required financial evidence. Applicants applying from outside the UK can usually apply up to six months before the course starts; check current UKVI rules before applying.",
      ],
    },
    {
      section: "Eligibility",
      details: [
        "There is no single UK-wide percentage threshold for international applicants. Subject prerequisites, qualification equivalence and selection criteria vary by course.",
        "The University of Buckingham's published MB ChB course is 4.5 years and its Medical School says it is suited to international students; its specific academic, English and selection requirements apply.",
        "A medical degree does not by itself guarantee admission to postgraduate training, UK registration, a licence to practise or employment. Graduates must meet the applicable regulator and employer requirements.",
      ],
    },
    {
      section: "Scholarships and financial aid",
      details: [
        "Ask each university whether any scholarship or bursary is open to international students on its medicine programme; eligibility, value, deadlines and application procedures differ.",
        "Do not assume general UK scholarship schemes cover undergraduate medicine or are open to every nationality. Check the scheme's official eligibility rules and funding conditions.",
        "Plan to fund the course without assuming a scholarship will be awarded.",
      ],
    },
    {
      section: "Financial planning",
      details: [
        "Tuition: request the university's written annual international fee schedule for the correct entry year; do not use the historical source estimates above as current quotes.",
        "Accommodation and living costs: calculate a university- and location-specific budget separately from tuition. UKVI's financial evidence minimum is an immigration requirement, not a full living-cost estimate.",
        "As shown on GOV.UK when checked on 27 October 2026, student maintenance evidence is £1,529 per month for up to nine months in London or £1,171 outside London, subject to eligibility and rule changes.",
        "One-time and additional costs can include the UCAS application, admissions tests, visa application, Immigration Health Surcharge, travel, equipment and deposits. GOV.UK listed a £558 Student visa application fee when checked on 27 October 2026; the fee, IHS and other charges can change, so confirm them with the official provider before applying.",
      ],
    },
  ],
  competitiveEdge: {
    title: "Why study medicine in the UK?",
    description:
      "Medical courses combine academic study with patient-facing learning, but curriculum, placements and student experience differ by university.",
    image: homeImages.studentsLibrary,
    imageAlt: "Students studying together in a university library",
    points: [
      "Medical curricula typically integrate biomedical study with clinical learning; review the course structure and placement sites for each programme.",
      "Clinical exposure, placement schedules and patient contact vary by university and cannot be inferred from a course title alone.",
      "Compare student support, accommodation options and living costs with the university before making a decision.",
      "Graduation does not guarantee professional registration, postgraduate training or a job; check the relevant regulator's current requirements.",
    ],
  },
  showEnquiryForm: true,
  enquiryFormTitle: "Enquire about studying medicine in the UK",
  enquiryFormOptions: {
    submitLabel: "Let's Discuss",
    messageLabel: "Requirement",
    privacyReassurance:
      "Your details will only be used to respond to your enquiry.",
    showInterest: false,
  },
  showVideoPlaceholder: true,
  collegesTabSide: "left",
  collegesTabTone: "gold",
  whyStudy: [],
  admissionSteps: [
    "Check the international-entry requirements and subject prerequisites for each medical course.",
    "Confirm whether the course requires UCAT or another assessment for your entry cycle.",
    "Meet the university's English-language requirement and prepare the requested application documents.",
    "Apply through UCAS by the applicable medicine deadline and complete any required interviews.",
    "Review the written offer, annual international tuition and accommodation costs.",
    "If required, apply for a Student visa using current UKVI guidance and the university's CAS.",
  ],
  universityGuidance:
    "UK medical programmes and international application policies are set by individual universities. Confirm that the specific course is open to overseas applicants and check its current fee and requirements directly with the university.",
  costGuidance:
    "Budget tuition separately from accommodation, living costs, application and admissions-test charges, visa expenses, the Immigration Health Surcharge and travel. UKVI maintenance amounts are visa evidence requirements, not a guaranteed or comprehensive estimate of a student's actual living costs.",
  documentsRequired: [
    "Academic certificates and transcripts, with certified translations if required",
    "UCAT or other admissions-test result, if required by the course",
    "English-language evidence, where required",
    "UCAS application, references and personal statement",
    "Passport and any additional documents requested by the university",
    "CAS and financial evidence for a Student visa, where applicable",
  ],
  eligibility: [
    "Academic prerequisites and qualification equivalencies vary by programme.",
    "Admissions tests, English scores and interview stages are university- and cycle-specific.",
    "International applicant eligibility and available places must be confirmed with the university.",
  ],
  faqs: [
    {
      question: "Is every UK medical course called MBBS?",
      answer:
        "No. UK universities award different primary medical qualifications, such as MBChB or MBBS, with course structures set by each university.",
    },
    {
      question: "Do all UK medical schools require UCAT?",
      answer:
        "No. Many participating schools use UCAT, but requirements can differ by university and entry cycle. Check the current course information.",
    },
    {
      question: "Will a UK medical degree guarantee registration or a job?",
      answer:
        "No. Registration, licensing, postgraduate training and employment each have separate eligibility requirements and selection processes.",
    },
    {
      question: "Are the fee amounts current international tuition quotes?",
      answer:
        "No. The supplied source does not identify an academic year or whether the figures apply to international students. Request an official fee schedule from each university.",
    },
  ],
  seo: {
    title: "Study Medicine in the United Kingdom",
    description:
      "Explore UK medical-course admissions, source-listed annual fee estimates and international-student planning considerations.",
  },
};
