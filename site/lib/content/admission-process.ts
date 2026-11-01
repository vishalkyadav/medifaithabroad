export const admissionProcessHero = {
  title: "Admission process",
  subtitle:
    "Medifaith Abroad guides you from first counselling through documents, university applications, visa planning, and pre-departure preparation—step by step, with clear expectations.",
  imageAlt:
    "Medical students in a hospital corridor — representing the journey to study medicine abroad",
};

export const admissionTimeline = [
  {
    step: 1,
    title: "Initial counselling",
    description:
      "We discuss your academic background, NEET status where relevant, budget, timeline, and destination preferences. You receive an honest overview of options—not guaranteed outcomes.",
  },
  {
    step: 2,
    title: "Eligibility and documents",
    description:
      "We review eligibility against university and country requirements and help you prepare documents such as mark sheets, passport copies, and application forms. Final requirements must be confirmed with the institution.",
  },
  {
    step: 3,
    title: "University application and admission",
    description:
      "We support application preparation and submission, track responses, and explain admission letters, fee payment steps, and enrolment instructions from the university.",
  },
  {
    step: 4,
    title: "Visa and pre-departure support",
    description:
      "We guide you on student visa documentation, travel planning, and accommodation discussions where those services apply. Visa approval is decided by authorities—not by the consultancy.",
  },
] as const;

export const documentChecklist = [
  "Academic records (10th, 12th, and other transcripts as required)",
  "Identity documents and valid passport",
  "Passport-size photographs per embassy or university specifications",
  "Completed application forms for the chosen university",
  "NEET score card or other exam proof if required for your profile",
  "Medical fitness or health reports if requested",
  "Financial or sponsorship documents if required for visa",
  "Any additional certificates requested by the university or embassy",
] as const;

export const documentChecklistNote =
  "The exact checklist varies by country, university, intake, and your individual circumstances. Treat this list as a planning aid—your counsellor will highlight what applies to your case.";

export const admissionFaqs = [
  {
    question: "How long does the process usually take?",
    answer:
      "Timelines depend on university intake dates, document readiness, and visa processing. We outline realistic milestones during counselling rather than promising fixed durations.",
  },
  {
    question: "Do you guarantee admission or visa approval?",
    answer:
      "No. Universities and embassies make final decisions. We provide guidance, document support, and communication help based on published requirements.",
  },
  {
    question: "When should I start preparing?",
    answer:
      "Earlier is better—especially if you need NEET results, passport renewal, or specific translations. Contact us to map a timeline for your target intake.",
  },
  {
    question: "Can I apply to more than one country?",
    answer:
      "You can explore multiple destinations during counselling. Each application may need separate documents and fees; we help you prioritise based on your goals.",
  },
] as const;
