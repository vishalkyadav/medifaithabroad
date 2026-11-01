import { contactHrefForCountry } from "@/lib/contact";
import { homeImages } from "../home-images";
import type {
  CountryPageContent,
  CountryUniversityFeeRow,
} from "./types";

const publicNames = [
  "Heidelberg University",
  "Charité – Universitätsmedizin Berlin",
  "Ludwig Maximilian University of Munich (LMU)",
  "RWTH Aachen University",
  "University of Freiburg",
  "University of Tübingen",
  "Goethe University Frankfurt",
  "University of Bonn",
  "University of Duisburg-Essen",
  "Humboldt University of Berlin",
  "University of Leipzig",
  "University of Göttingen",
  "University of Würzburg",
  "University of Mainz",
  "University of Erlangen-Nuremberg",
  "University of Rostock",
  "University of Greifswald",
  "University of Marburg",
  "University of Halle-Wittenberg",
  "University of Jena",
  "University of Mannheim",
  "University of Oldenburg",
  "University of Potsdam",
  "University of Siegen",
  "University of Kassel",
];

const publicRows: CountryUniversityFeeRow[] = publicNames.map((university) => ({
  university,
  tuition: "€0",
  semesterContribution: "€150–€300",
  teachingLanguage: "German",
  accommodation: "Available",
  type: "Public",
  notes: "",
}));

const privateRows: CountryUniversityFeeRow[] = [
  ["Brandenburg Medical School “Theodor Fontane”", "€10,000–€15,000"],
  ["Witten/Herdecke University", "€10,000–€15,000"],
  ["University of Targu Mures Medical Campus Hamburg", "€20,000–€30,000"],
  ["Medical School Hamburg", "€20,000–€25,000"],
  ["University of Munich (Private)", "€15,000–€20,000"],
  ["University of Heidelberg (Private)", "€15,000–€20,000"],
  ["University of Berlin (Private)", "€15,000–€20,000"],
  ["University of Frankfurt (Private)", "€15,000–€20,000"],
  ["University of Freiburg (Private)", "€15,000–€20,000"],
  ["University of Tübingen (Private)", "€15,000–€20,000"],
  ["University of Göttingen (Private)", "€15,000–€20,000"],
  ["University of Leipzig (Private)", "€15,000–€20,000"],
  ["University of Würzburg (Private)", "€15,000–€20,000"],
  ["University of Mainz (Private)", "€15,000–€20,000"],
  ["University of Erlangen-Nuremberg (Private)", "€15,000–€20,000"],
  ["University of Rostock (Private)", "€15,000–€20,000"],
  ["University of Greifswald (Private)", "€15,000–€20,000"],
].map(([university, tuition]) => ({
  university,
  tuition,
  semesterContribution: "€300–€500",
  teachingLanguage: "English",
  accommodation: "Available",
  type: "Private",
  notes: "",
}));

const official = {
  heidelberg: "https://www.uni-heidelberg.de/en/study/all-subjects/medicine-study-location-heidelberg/medicine-study-location-heidelberg-staatsexamen?overlay=menu",
  heidelbergCosts: "https://www.uni-heidelberg.de/en/study-financing-for-international-students",
  uniAssist: "https://www.uni-assist.de/en/how-to-apply/get-information/bachelor-staatsexamen/",
  uniAssistApply: "https://www.uni-assist.de/en/how-to-apply/plan-your-application/",
  witten: "https://www.uni-wh.de/en/studies/degree-programmes/state-examination-programmes/medizin-state-examination",
  wittenFees: "https://www.uni-wh.de/en/studies/financing/tuition-fees",
  umch: "https://edu.umch.de/en/the-medicine-degree-program",
  umchFees: "https://edu.umch.de/en/tuition-fees",
  msh: "https://www.medicalschool-hamburg.de/files/inhalte/MSH%20University%20of%20Applied%20Sciences%20and%20Medical%20University/Studieng%C3%A4nge%20-%20Flyer/Fakult%C3%A4t%20Medizin/MSH_Humanmedizin_2025_IRO-Group-web.pdf",
  daad: "https://www.daad.de/en/studying-in-germany/scholarships/",
};

export const germany: CountryPageContent = {
  slug: "germany",
  name: "Germany",
  heroImage: homeImages.germanyhero,
  heroImageAlt: "Students studying together in a university library",
  heroTitle: "Study Medicine in Germany",
  heroSubtitle: "Understand the language, admission route and full cost before choosing a medical programme.",
  heroActions: [
    { label: "Enquire about Germany", href: contactHrefForCountry("germany") },
    { label: "Admission process", href: "/admission-process", variant: "outline" },
  ],
  introduction: "Germany's Human Medicine programmes generally follow a state-examination pathway and are not interchangeable with packaged MBBS-abroad courses. Programme language, entry qualifications, selection, application route and costs vary by institution. Most programmes require strong German proficiency; check each official programme page before applying.",
  feeSectionTitle: "MBBS Universities in Germany (2025)",
  feeSectionDescription: "",
  universityFeeTables: [
    {
      title: "🏛️ Public Universities (Low-Cost or No Tuition Fees) – MBBS in Germany",
      description: "",
      columnLabels: ["University", "Tuition Fees (Annual)", "Semester Contribution", "Teaching Language", "Hostel Facilities", "Type"],
      rows: publicRows,
    },
    {
      title: "🏫 Private Universities (Higher Tuition Fees)",
      description: "",
      columnLabels: ["University", "Tuition Fees (Annual)", "Semester Contribution", "Teaching Language", "Hostel Facilities", "Type"],
      rows: privateRows,
    },
  ],
  countryTrustPoints: [
    { title: "Check the exact degree", description: "Confirm that the institution offers Human Medicine and check the qualification and study pathway.", icon: "university" },
    { title: "Plan for programme language", description: "German-language proficiency is a key requirement for many medical courses; each institution sets its accepted certificates and level.", icon: "support" },
    { title: "Verify all fees", description: "Tuition, semester charges and living costs differ by institution, state, city and applicant category.", icon: "fees" },
    { title: "Use official application routes", description: "Uni-assist is not responsible for every application; the university's instructions determine the route.", icon: "team" },
  ],
  whyStudy: [
    { title: "Programme fit", description: "Compare course structure and qualification requirements with your academic background.", icon: "university" },
    { title: "Language planning", description: "Check the programme language and the language needed in clinical settings.", icon: "support" },
    { title: "Cost clarity", description: "Review tuition, term charges and local living costs using current official information.", icon: "fees" },
    { title: "Application route", description: "Follow the route published for your programme and applicant category.", icon: "team" },
  ],
  admissionDetailsTitle: "MBBS admission in Germany: requirements and planning",
  admissionDetails: [
    {
      section: "Eligibility criteria",
      details: [
        "Your school-leaving qualification must be accepted as an entrance qualification for the chosen programme; a Studienkolleg or additional assessment may be required depending on the credential and institution.",
        "Human Medicine is commonly taught in German. Required proficiency and accepted examinations (which may include TestDaF or DSH) are set by each university; there is no single level to assume for every course.",
        "Selection methods and aptitude tests vary by institution. Indian applicants should separately check current NEET/NMC requirements if they intend to pursue medical registration in India.",
      ],
      sources: [
        { label: "Heidelberg Human Medicine programme", href: official.heidelberg },
        { label: "uni-assist: Bachelor / Staatsexamen", href: official.uniAssist },
      ],
    },
    {
      section: "Admission process",
      details: [
        "Shortlist an officially listed Human Medicine programme, then check its entry qualification, language, selection and application instructions.",
        "Submit documents through the named route: the university directly, uni-assist, or another procedure where specified. Uni-assist does not handle every application and does not decide admission.",
        "Complete any required tests or interviews, then follow the university's instructions for offer acceptance, enrolment, visa preparation and health insurance.",
      ],
      sources: [
        { label: "uni-assist application planning", href: official.uniAssistApply },
        { label: "uni-assist Bachelor / Staatsexamen route", href: official.uniAssist },
      ],
    },
    {
      section: "Documents typically requested",
      details: [
        "School-leaving certificates and subject/grade transcripts, with certified copies and translations where required.",
        "Recognised language certificates and any university-specific application form, proof of entrance examination, CV, motivation letter or recommendation documents.",
        "Passport/identity documents and financial evidence for visa purposes as required by the relevant German mission. The institution's checklist controls the application documents.",
      ],
      sources: [{ label: "uni-assist documents guidance", href: official.uniAssistApply }],
    },
    {
      section: "Scholarships and funding",
      details: [
        "Search the DAAD scholarship database and the selected university's official funding pages for options matching your citizenship, degree and study stage.",
        "Funding is limited, eligibility varies, and an award is never guaranteed by this counselling page. Confirm deadlines and whether the specific medical programme is eligible.",
      ],
      sources: [{ label: "DAAD scholarship information", href: official.daad }],
    },
    {
      section: "Financial planning",
      details: [
        "Do not rely on the source file's €600–€900 monthly estimate. Heidelberg University cites €992/month minimum living costs for visa purposes as of summer semester 2026; this is a Heidelberg example, not a universal Germany-wide budget.",
        "Heidelberg lists a €189.80 semester fee for winter semester 2026/27. Its general international-fee guidance describes €1,500/semester for specified study types in Baden-Württemberg; confirm whether that fee applies to Human Medicine and your applicant category. Other states and institutions set different charges.",
        "Add city-specific rent, food, insurance, travel, deposits and any programme tuition. Check current visa financial-proof rules with the responsible German mission.",
      ],
      sources: [
        { label: "Heidelberg international student costs", href: official.heidelbergCosts },
        { label: "Heidelberg Human Medicine fees and language", href: official.heidelberg },
      ],
    },
    {
      section: "Final checks",
      details: [
        "Start early, but use the deadline published for your chosen programme and applicant category; application routes and closing dates differ.",
        "Arrange certified translations and recognition/evaluation documents only as instructed. Improve German early where the programme and clinical setting require it.",
        "Compare written official fee schedules and verify the institution, degree, language, clinical training and intended licensing pathway before paying.",
      ],
      sources: [{ label: "uni-assist application guidance", href: official.uniAssistApply }],
    },
  ],
  competitiveEdge: {
    title: "Plan the programme, not just the destination",
    description: "A medical degree choice should be based on current official programme details, costs and the student's intended licensing pathway.",
    image: homeImages.studentLounge,
    imageAlt: "Student working on a laptop in a shared study lounge",
    points: [
      "Check the exact Human Medicine degree and its language of instruction.",
      "Ask the university how your school qualifications are evaluated and which application route applies.",
      "Compare tuition, semester charges and realistic living costs using current official sources.",
      "For a return-to-India pathway, verify the applicable NMC rules independently; admission alone does not establish licensing eligibility.",
    ],
  },
  documentsRequired: [
    "School-leaving certificate and subject/grade transcripts",
    "Certified translations or recognition documents where required",
    "Accepted language certificate for the chosen course",
    "Passport or identity documents and university application form",
    "Additional tests, CV, motivation letter or recommendations only if requested",
    "Financial evidence requested for the visa application",
  ],
  eligibility: [
    "The university must assess whether the applicant's school qualification provides access to the chosen programme.",
    "Medical programme language requirements are institution-specific; many programmes require German proficiency.",
    "Selection tests and procedures differ by programme and applicant category.",
    "Indian applicants should verify applicable NEET/NMC rules separately for their intended licensing pathway.",
  ],
  admissionSteps: [
    "Confirm the exact Human Medicine programme and its entry requirements.",
    "Check qualification recognition, language certificates and any selection tests.",
    "Apply through the university's named application route.",
    "Follow the official decision, enrolment, visa and financial-proof instructions.",
    "Arrange accommodation and insurance after confirming availability and requirements.",
  ],
  universityGuidance: "Check the official programme catalogue, admissions route, language and applicant eligibility for each institution. The source lists on this page are not university partnerships or confirmed placement options.",
  costGuidance: "The supplied cost estimates are undated and should not be used as a budget. Verify tuition, semester contributions, living costs and visa financial proof for the institution, city and intake.",
  livingAccommodation: "Accommodation is not guaranteed by a university listing. Availability, price and application routes vary by city and housing provider; contact the relevant Studentenwerk or institution and budget using current local information.",
  faqs: [
    { question: "Is MBBS in Germany taught in English?", answer: "Many German Human Medicine programmes are taught in German. A small number of separate or foreign-university campus programmes may use English for classes; check the official programme page and clinical-language requirements." },
    { question: "Are public medical universities in Germany tuition-free?", answer: "Do not assume that. Tuition and semester contributions vary by state, institution and applicant category. For example, Heidelberg lists fees that may apply to non-EU/EEA applicants in Baden-Württemberg. Confirm the current fee schedule for your exact course." },
    { question: "Can I apply through uni-assist?", answer: "Only when the chosen university and programme use uni-assist for your applicant category. Some courses or applicant groups apply directly or through another route." },
    { question: "Does admission guarantee medical registration in India?", answer: "No. Admission does not guarantee eligibility for registration. Indian applicants should check current NMC requirements for foreign medical graduates independently before selecting a programme." },
    { question: "Are the university fees and living-cost figures on this page current quotes?", answer: "No. Most public/private table entries reproduce an undated local source and are flagged as unverified. The dated Heidelberg examples have their stated scope and term; request written current costs from each institution." },
  ],
  /** TODO: Add Germany introduction video here */
  showVideoPlaceholder: true,
  showEnquiryForm: true,
  enquiryFormTitle: "Ask about studying medicine in Germany",
  collegesTabSide: "left",
  collegesTabTone: "gold",
  seo: {
    title: "Study Medicine in Germany: Programmes, Costs and Admission",
    description: "Review Germany medical-programme listings, language and application checks, and dated university-specific cost guidance from Medifaith Abroad.",
  },
};
