import type { CountryPageContent } from "./types";
import { homeImages } from "../home-images";

/**
 * Content aligned with medifaithabroad.com/countries/georgia/
 * Confirm fees, recognition, and visa rules for your intake year.
 */
export const georgia: CountryPageContent = {
  slug: "georgia",
  name: "Georgia",
  livingImage: homeImages.medicalTeam,
  heroTitle: "Dream of MBBS? Choose Georgia",
  heroSubtitle:
    "Counselling for English-medium medical studies with global recognition—plan your path with Medifaith Abroad.",
  introduction:
    "Georgia attracts Indian students seeking structured medical programs in Europe’s neighbourhood. Medifaith Abroad supports eligibility checks, university shortlisting, documentation, and visa planning. Use official university and embassy sources together with our counselling to confirm fees, recognition, and program structure for your intake.",
  showEnquiryForm: true,
  showVideoPlaceholder: true,
  enquiryFormTitle: "Discuss studying medicine in Georgia",
  enquiryFormOptions: {
    submitLabel: "Send enquiry",
    showInterest: true,
  },
  universityFees: [
    {
      university: "Tbilisi State Medical University",
      tuition: "₹6,64,000",
      hostel: "₹2,15,000 (approx.)",
    },
    {
      university: "David Tvildiani Medical University",
      tuition: "₹6,64,000 (approx.)",
      hostel: "₹2,15,000 (approx.)",
    },
    {
      university: "Caucasus International University",
      tuition: "₹5,16,000",
      hostel: "₹2,58,000",
    },
    {
      university: "University of Georgia (Tbilisi)",
      tuition: "₹4,98,000",
      hostel: "₹2,08,750",
    },
    {
      university: "New Vision University",
      tuition: "₹6,02,000",
      hostel: "₹2,15,000",
    },
    {
      university: "Georgian National University (SEU)",
      tuition: "₹4,73,000",
      hostel: "₹2,58,000",
    },
    {
      university: "Akaki Tsereteli State University",
      tuition: "₹6,16,276",
      hostel: "₹48,590",
    },
    {
      university: "East European University",
      tuition: "₹4,73,000",
      hostel: "₹2,58,000",
    },
    {
      university: "Batumi Shota Rustaveli State University",
      tuition: "₹4,30,000",
      hostel: "₹2,58,000",
    },
    {
      university: "Grigol Robakidze University",
      tuition: "₹4,73,000",
      hostel: "₹2,15,000",
    },
    {
      university: "Kutaisi Medical Institute, Georgia",
      tuition: "₹3,44,000",
      hostel: "₹2,15,000",
    },
    {
      university: "Geomedi Medical University",
      tuition: "₹4,73,000",
      hostel: "₹2,15,000",
    },
  ],
  feeSectionDescription:
    "Compare estimated annual tuition and hostel costs at selected Georgian medical universities.",
  whyStudy: [
    {
      title: "English-medium programs",
      description:
        "Reference materials describe English as the medium of instruction, with basic Georgian language learning in some programs.",
    },
    {
      title: "Structured medical curriculum",
      description:
        "The reference site outlines a six-year track including academic study and internship components—confirm details per university.",
    },
    {
      title: "Regional hub for students",
      description:
        "Georgia is presented as a cost-conscious option compared with many Western countries; living costs still vary by city and lifestyle.",
    },
    {
      title: "Counselling for licensing prep",
      description:
        "Students often plan for Indian (FMGE/NeXT) or other licensing exams alongside their degree; preparation is separate from admission.",
    },
  ],
  admissionSteps: [
    "Confirm eligibility (age, PCB marks, NEET where required).",
    "Select an appropriate university with counselling support.",
    "Apply with required documents.",
    "Receive offer or invitation letter and pay fees per university instructions.",
    "Apply for a Georgia student visa using the invitation letter.",
    "Arrange travel and accommodation.",
    "Complete university registration, orientation, and local formalities.",
    "Begin the academic program and internship phases per university calendar.",
  ],
  universityGuidance:
    "The reference Georgia page lists multiple NMC-oriented universities with indicative annual tuition and hostel fees in INR. We help you compare institutions on fit, budget, and documentation—without endorsing a single “best” college. Verify that your chosen university meets current Indian regulatory requirements before you pay any fees.",
  costGuidance:
    "The reference site gives per-university tuition and hostel examples (roughly ₹3.4 lakh to ₹6.6 lakh tuition per year in published tables, plus hostel lines). It also states that total annual expenditure (tuition, hostel, living) often falls in a ₹4–9 lakh range, with other expenses and one-time charges varying by profile. Treat these as guides only and request a written quote for your intake.",
  documentsRequired: [
    "Valid passport",
    "10th and 12th mark sheets",
    "NEET scorecard (for Indian students, per reference site)",
    "Passport-size photographs",
    "Birth certificate",
    "Medical fitness and HIV test reports",
  ],
  eligibility: [
    "Age 17 by 31 December of the admission year (reference site).",
    "10+2 with Physics, Chemistry, Biology: minimum 50% (40% for reserved categories, reference site).",
    "NEET qualification for Indian students (reference site).",
  ],
  faqs: [
    {
      question: "How long is the MBBS program in Georgia?",
      answer:
        "The reference Medifaith page describes a six-year structure with five years of academics and one year of internship. Confirm the exact calendar with your chosen university.",
    },
    {
      question: "Is the degree valid in India?",
      answer:
        "Validity depends on university recognition, curriculum, and current NMC rules. Verify status through official NMC sources and professional counselling—not marketing slogans alone.",
    },
    {
      question: "What does admission counselling include?",
      answer:
        "We help with shortlisting, applications, document checklists, and visa guidance. We do not guarantee visas, scholarships, or admission outcomes.",
    },
    {
      question: "Can I see exact fees online?",
      answer:
        "Published fee tables on the reference site are indicative. Always confirm current tuition, hostel, and one-time charges with the university or Medifaith before payment.",
    },
  ],
  seo: {
    title: "MBBS in Georgia",
    description:
      "MBBS in Georgia: eligibility, admission process, and university counselling from Medifaith Abroad for Indian students.",
  },
};
