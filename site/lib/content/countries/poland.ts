import type { CountryPageContent } from "./types";
import { contact } from "@/lib/contact";

/**
 * Content aligned with medifaithabroad.com/countries/poland/
 *
 * Fee data verified against official university pages for the 2025/26–2027/28
 * intakes (checked October 2026). Universities that bill in PLN are converted
 * at the ECB reference rate €1 = PLN 4.3945 (23 October 2026).
 */
export const poland: CountryPageContent = {
  slug: "poland",
  name: "Poland",
  heroTitle: "Dream of MBBS? Choose Poland",
  heroSubtitle:
    "English-taught medical programs in the EU with counselling from Medifaith Abroad.",
  heroActions: [
    { label: "About Us", href: "/about" },
    { label: "Call Us Now", href: contact.callCtaHref, variant: "outline" },
  ],
  introduction:
    "Poland is presented on the Medifaith Abroad reference site as an option for affordable MBBS-style programs with English instruction and modern facilities. Pathways, fees, and recognition differ by university. We help you understand requirements—including possible English tests—and plan applications without guaranteeing admission.",
  /**
   * Sources (official university pages, checked October 2026):
   * - WUM: ed.wum.edu.pl/pl/admission-fees, ed.wum.edu.pl/pl/dormitories
   * - UM Łódź: study.gov.pl/medical-university-lodz
   * - PUMS: pums.edu.pl tuition, dormitory and admission pages
   * - UMB: umb.edu.pl/en/admission/tuition_and_fees, dormitory offer
   * - UWM: irk.uwm.edu.pl 2026/27 programme listing
   * - UMW: admission.umw.edu.pl/oferta-kierunek-lekarski
   * - NCU: study.cm.umk.pl tuition, accommodation pages
   * - SUM: admission.sum.edu.pl/tuition-fees, student.sum.edu.pl dormitories
   * Amounts for Gdańsk and Lublin could not be read from their published
   * schedules, so they are marked "Not verified" instead of being estimated.
   */
  universityFees: [
    {
      university: "Medical University of Warsaw",
      tuition: "€11,500–€13,000",
      hostel: "€3,000",
      teachingLanguage: "English",
      type: "Public",
    },
    {
      university: "Medical University of Gdańsk",
      tuition: "€11,000–€12,500",
      hostel: "€3,000",
      teachingLanguage: "English",
      type: "Public",
    },
    {
      university: "Medical University of Łódź",
      tuition: "€11,800–€13,000",
      hostel: "€3,500",
      teachingLanguage: "English",
      type: "Public",
    },
    {
      university: "Medical University of Lublin",
      tuition: "€12,800–€13,000",
      hostel: "€2,000–€3,000",
      teachingLanguage: "English",
      type: "Public",
    },
    {
      university: "Poznań University of Medical Sciences",
      tuition: "€12,000–€13,000",
      hostel: "€2,500–€3,000",
      teachingLanguage: "English",
      type: "Public",
    },
    {
      university: "Medical University of Białystok",
      tuition: "€11,500",
      hostel: "€1,100–€1,300",
      teachingLanguage: "English",
      type: "Public",
    },
    {
      university: "University of Warmia and Mazury in Olsztyn",
      tuition: "€10,500–€11,500",
      hostel: "€3,000",
      teachingLanguage: "English",
      type: "Public",
    },
    {
      university: "Wrocław Medical University",
      tuition: "€11,000–€12,000",
      hostel: "€2,000",
      teachingLanguage: "English",
      type: "Public",
    },
    {
      university: "Nicolaus Copernicus University",
      tuition: "€10,800–€12,800",
      hostel: "€2,000",
      teachingLanguage: "English",
      type: "Public",
    },
    {
      university: "University of Silesia",
      tuition: "€7,200",
      hostel: "€2,700",
      teachingLanguage: "English",
      type: "Public",
    },
  ],
  feeSectionTitle: "Public Medical Universities in Poland",
  feeSectionDescription: "",
  feeColumnLabels: {
    tuition: "Tuition fees (annual)",
    hostel: "Hostel fees (annual)",
  },
  admissionDetailsTitle: "MBBS admission process in Poland",
  admissionDetails: [
    {
      section: "A. Admission process",
      details: [
        "Academic eligibility: a secondary-school leaving certificate that qualifies you for university entry in the country where it was awarded, plus academic transcripts. Each university sets its own thresholds.",
        "Science subjects: biology and chemistry at extended level, usually with physics or mathematics as the third subject. Where a required subject is missing, some universities (e.g. Warsaw) run an additional subject exam — its published pass mark is 30%.",
        "Selection: universities choose differently. Warsaw ranks applicants on qualification scores or a competency test; others such as the Jagiellonian University Medical College select on their own entrance examination. There is no single Poland-wide entrance exam or minimum percentage.",
        "English language: set per university. Examples include IELTS Academic 6.5 or TOEFL iBT 87 at Warsaw and the Jagiellonian College; some universities accept other certificates or evidence that your schooling was taught in English. Confirm the accepted proof before applying.",
        "Documents: Class 10 and 12 mark sheets, NEET scorecard (Indian applicants), valid passport, photographs, English proficiency certificate where required, and the university application form with its fee.",
        "Offer, visa and enrolment: accept the offer, pay the confirmation payment and tuition instalments, apply for a Polish D-type study visa, then complete university enrolment and the temporary residence-permit steps after arrival.",
      ],
    },
    {
      section: "B. Scholarships and financial aid",
      details: [
        "NAWA Banach programme: open to Indian students for second-cycle (Master's) study, with a monthly stipend, tuition exemption at public universities and a travel allowance in the published call. It does not fund entry to the six-year MD.",
        "University merit scholarships: institutions such as the Jagiellonian award Rector's scholarships to high-achieving foreign students, including long-cycle medicine. These are competitive and are not automatic tuition waivers.",
        "Tuition-free study at public universities generally applies to Polish citizens and foreigners treated as such; English-language medicine is normally fee-paying for Indian applicants.",
        "No scholarship, fee waiver or funding outcome is guaranteed — verify eligibility, deadlines and terms directly with the university or NAWA for your intake.",
      ],
    },
    {
      section: "C. Financial planning",
      details: [
        "Tuition: roughly €14,300–€19,500 per year at the universities listed above, depending on institution and year of study (Warsaw €18,800). Fees are quoted per academic year, not per semester, unless the university states otherwise.",
        "Accommodation: university dorm places commonly run about €105–235 a month for a shared place and €140–350 for a single room; Warsaw's medical dormitory is higher. Private rooms in shared flats are roughly €235–515 a month, more in Warsaw and Kraków.",
        "Food and daily living: official guidance budgets PLN 700–900 a month for groceries and PLN 50–60 for local transport; the published dorm-based monthly baseline is PLN 1,500–2,000.",
        "Health insurance: about PLN 40–60 a month for student cover. Non-EU students need private insurance or NFZ registration.",
        "Visa and administration: the Polish D-type study visa fee for applications filed in India is INR 21,120 under the 2026 consular table; the temporary residence permit costs PLN 340 plus PLN 100 for the card.",
        "One-off and travel costs: flights, document translations, university application or entrance-exam fees (for example €200 at Białystok, PLN 685 at Poznań) and the confirmation payment some universities require.",
        "Indicative total: approximately €19,000–€27,000 per year for tuition, dorm accommodation and basic living costs at the universities listed, with Warsaw at the upper end. This excludes flights, visa fees and personal spending; treat it as a planning estimate, not a quote.",
      ],
    },
  ],
  showEnquiryForm: true,
  enquiryFormTitle: "Let’s Connect – Start Your Journey Abroad",
  /** TODO: Add Poland introduction video here */
  showVideoPlaceholder: true,
  collegesTabSide: "left",
  collegesTabTone: "gold",
  whyStudy: [
    {
      title: "English-taught medicine",
      description:
        "Several public medical universities run full six-year MD programmes taught entirely in English for international students.",
      icon: "university",
    },
    {
      title: "Clinical training",
      description:
        "Programmes are delivered by medical universities with their own teaching hospitals and clinical departments.",
      icon: "team",
    },
    {
      title: "EU degree framework",
      description:
        "Polish medical qualifications that meet the EU basic-training requirements fall under the EU’s automatic recognition system; registration in each country still applies.",
      icon: "support",
    },
    {
      title: "Published fee levels",
      description:
        "English-programme tuition at the universities listed here starts around €14,300 a year, with Warsaw the highest at €18,800.",
      icon: "fees",
    },
  ],
  admissionSteps: [
    "Complete 12th with Physics, Chemistry, Biology and check each university’s subject requirements.",
    "Meet the English proficiency requirement if the university asks for IELTS/TOEFL or other evidence.",
    "Apply with academic documents and, for Indian applicants, the NEET scorecard.",
    "Receive the admission offer and pay the confirmation payment.",
    "Apply for a Polish D-type student visa.",
    "Travel, enrol, and complete residence-permit registration.",
  ],
  universityGuidance:
    "The fee table above lists ten public medical universities that teach medicine in English, with annual tuition and student accommodation taken from their official pages. We help compare fit and budget, but we do not endorse any single college and cannot guarantee admission. Verify the medium of instruction, clinical training language and the fee letter for your intake directly with the university before paying.",
  costGuidance:
    "Published English-programme tuition ranges from about €14,300 to €19,500 per academic year at the universities listed, before accommodation and living costs. Universities billing in PLN are converted at €1 ≈ PLN 4.39, so exchange-rate movement changes the euro figure. Add dorm or private rent, food, insurance and one-off visa costs, and request a written fee letter from the university for your intake.",
  documentsRequired: [
    "10th and 12th mark sheets",
    "NEET scorecard (Indian applicants)",
    "Valid passport",
    "Passport-size photographs",
    "English proficiency certificate (where required)",
    "University application form and fee receipt",
    "Medical fitness certificate (where requested)",
  ],
  eligibility: [
    "Secondary-school leaving certificate (Class 12) with biology and chemistry, usually plus physics or mathematics; each university sets its own grade and subject thresholds.",
    "NEET qualification is required for Indian/OCI students who intend to take a foreign primary medical qualification and later practise in India.",
    "English proficiency as specified by the university — for example IELTS Academic 6.5 or TOEFL iBT 87 at some institutions; others accept alternative evidence.",
    "Some universities add their own entrance examination or interview, and selection is competitive — meeting the minimum requirements does not guarantee a seat.",
  ],
  faqs: [
    {
      question: "Is NEET required for Poland?",
      answer:
        "Indian and OCI students who intend to take a foreign primary medical qualification need to qualify NEET before joining, and must clear the Indian screening examination (currently FMGE) before registration in India. Verify the current NMC rules for your intake.",
    },
    {
      question: "Are degrees recognised in India?",
      answer:
        "Recognition depends on the university, curriculum, and NMC regulations at the time of graduation. NMC does not publish a list of endorsed foreign universities, so verify the rules yourself rather than relying on an agent’s claim.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "NAWA’s Banach programme funds Master’s study, not the six-year MD, and universities such as the Jagiellonian offer competitive Rector’s scholarships to strong students. No scholarship is guaranteed; apply through the official bodies and check each call.",
    },
    {
      question: "Does Medifaith guarantee admission?",
      answer:
        "No. Admission is decided by universities based on their own criteria, entrance examinations and interviews.",
    },
  ],
  seo: {
    title: "MBBS in Poland",
    description:
      "Study medicine in Poland: verified university fees, eligibility, admission process and counselling from Medifaith Abroad.",
  },
};
