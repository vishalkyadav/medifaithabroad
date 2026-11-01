/** Homepage copy aligned with medifaithabroad.com (reference site). */
import { homeImages } from "./home-images";

export const hero = {
  title: "Your Gateway to Studying MBBS Abroad",
  subtitle:
    "Expert guidance for a bright medical career at international universities—with clear counselling on admissions, visas, and planning.",
  imageAlt:
    "International students reviewing study options together outdoors",
};

type HeroFloatCard = {
  title: string;
  subtitle: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

/** Positioned with CSS percentages on the hero image (desktop). */
export const heroFloatingCards: HeroFloatCard[] = [
  {
    title: "University guidance",
    subtitle: "Compare destinations and programmes",
    top: "6%",
    left: "4%",
  },
  {
    title: "Admission support",
    subtitle: "Documents and application checklists",
    right: "4%",
    bottom: "14%",
  },
  {
    title: "Student-focused counselling",
    subtitle: "Clear timelines and next steps",
    left: "4%",
    bottom: "6%",
  },
];

/** Service-based trust statements — no unverified statistics. */
export const trustStripItems = [
  {
    icon: "globe" as const,
    title: "Study destinations",
    description: "Country guides for eleven MBBS abroad destinations.",
  },
  {
    icon: "document" as const,
    title: "Admission guidance",
    description: "Counselling on applications and university requirements.",
  },
  {
    icon: "visa" as const,
    title: "Visa documentation",
    description: "Support preparing student visa files and travel plans.",
  },
  {
    icon: "departure" as const,
    title: "Pre-departure assistance",
    description: "Orientation, accommodation, and departure planning.",
  },
] as const;

export const benefits = [
  {
    title: "Affordable fees",
    description:
      "Quality consultancy services at competitive and fair rates.",
    icon: "fees" as const,
  },
  {
    title: "Expert team",
    description:
      "Skilled professionals guiding students through every step of the admission process.",
    icon: "team" as const,
  },
  {
    title: "Trusted universities",
    description:
      "Guidance toward reputable medical universities worldwide.",
    icon: "university" as const,
  },
  {
    title: "Personalized support",
    description:
      "Tailored guidance to match your academic profile and preferences.",
    icon: "support" as const,
  },
] as const;

export const mission = {
  title: "Our mission",
  body:
    "To help students and families navigate MBBS abroad with clarity—from choosing a destination and university to applications, visas, and pre-departure planning.",
};

export const vision = {
  title: "Our vision",
  body:
    "To be a dependable consultancy where aspiring doctors receive ethical, student-first guidance for international medical education.",
};

export const about = {
  heading: "Bringing your medical dreams to life",
  body:
    "With experience in international medical education, Medifaith Abroad helps students pursue admissions at reputed MBBS universities abroad—from application assistance to visa guidance.",
  highlights: [
    "Admission assistance",
    "Visa & travel support",
    "Scholarship guidance",
  ],
};

export const servicesIntro =
  "End-to-end counselling for university selection, applications, visas, and pre-departure planning.";

export const services = [
  {
    title: "University selection",
    description:
      "Find the right medical university matching your budget and goals.",
    icon: "universitySelection" as const,
  },
  {
    title: "Application assistance",
    description: "Help with forms, documents, and submissions.",
    icon: "admissionAssistance" as const,
  },
  {
    title: "Visa processing",
    description: "Guidance to support your student visa application.",
    icon: "visaProcessing" as const,
  },
  {
    title: "Pre-departure support",
    description: "Orientation, accommodation, and travel assistance.",
    icon: "preDepartureSupport" as const,
  },
  {
    title: "Scholarship guidance",
    description: "Identify scholarships and financial aid opportunities.",
    icon: "scholarshipGuidance" as const,
  },
] as const;

/** Placeholder until verified team photos and roles are supplied by the owner. */
export const teamSection = {
  title: "Meet our team",
  description:
    "Reserved for verified counsellor and staff profiles. Add names, roles, and portraits only after owner approval. Original WordPress uploads may contain additional images—confirm identity before publishing.",
  placeholderCount: 3,
};

/** @deprecated Use servicesIntro on marketing pages. */
export const processNote = servicesIntro;

export const admissionSteps = [
  {
    step: 1,
    title: "Initial counselling",
    description:
      "Discuss your academic profile, budget, and goals so we can outline realistic destination and university options.",
  },
  {
    step: 2,
    title: "University and destination selection",
    description:
      "Compare countries and institutions using our guides and counselling—always confirm fees and recognition with official sources.",
  },
  {
    step: 3,
    title: "Application and admission guidance",
    description:
      "Support with document checklists and submissions. Admission decisions are made by universities, not by Medifaith.",
  },
  {
    step: 4,
    title: "Visa preparation and pre-departure",
    description:
      "Guidance on visa documentation and travel planning. Visa approval is decided by embassies and consulates.",
  },
] as const;

export const trustPrinciples = [
  {
    title: "Clear communication",
    description:
      "We explain requirements, timelines, and next steps in plain language—without pressure.",
  },
  {
    title: "Document-focused support",
    description:
      "Checklists and review help you prepare applications and visa files systematically.",
  },
  {
    title: "Verify before you commit",
    description:
      "We encourage families to confirm university fees, recognition, and NMC rules with official sources.",
  },
  {
    title: "Student-first counselling",
    description:
      "Recommendations are tailored to your profile; we do not guarantee admission, visas, or outcomes.",
  },
] as const;

export const whyChoose = [
  {
    title: "Expertise & experience",
    description: "Experience in international education consultancy.",
  },
  {
    title: "Customized solutions",
    description: "Personalized guidance based on your academic profile.",
  },
  {
    title: "Transparent process",
    description: "Clear fee discussions and support at each step.",
  },
  {
    title: "Student-centric approach",
    description: "Your comfort and informed choices throughout the journey.",
  },
] as const;

/** Quotes and names as published on medifaithabroad.com (reference homepage). */
export const testimonials = [
  {
    name: "Ankit Sharma",
    quote:
      "Medifaith made my MBBS admission simple, smooth, and completely stress-free. Highly recommend them!",
  },
  {
    name: "Sandeep Saini",
    quote:
      "The team guided me perfectly from counseling to admission with clear, honest advice. Very satisfied!",
  },
  {
    name: "Radha Singh",
    quote:
      "Affordable fees, transparent process, and continuous support made my MBBS abroad journey easy.",
  },
  {
    name: "Deepak Dhakad",
    quote:
      "They handled everything from documentation to visa smoothly and quickly. Excellent consultancy service!",
  },
] as const;

export const leadership = {
  name: "Vibhas Kumar",
  role: "Chairman",
  summary:
    "The Medifaith Abroad reference website lists Vibhas Kumar as Chairman. Portrait identity and biography should be confirmed with the owner before publication.",
  portraitAlt:
    "Leadership portrait from Medifaith Abroad reference materials (identity to be confirmed)",
};

/** Homepage leadership band — copy from verified reference content only. */
export const leadershipHome = {
  eyebrow: "Our leadership",
  title: "Guided by vision,",
  titleAccent: "driven by purpose",
  message:
    "With experience in international medical education, Medifaith Abroad helps students pursue admissions at reputed MBBS universities abroad—from application assistance to visa guidance.",
  visionLine:
    "We aim to be a dependable consultancy where aspiring doctors receive ethical, student-first guidance for international medical education.",
  ownerNote:
    "The public reference site lists Vibhas Kumar as Chairman. Confirm portrait identity and biography with the owner before wider publication.",
  ctaLabel: "Explore our mission",
  ctaHref: "/about",
};

export type TeamMemberProfile = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
  imageAlt: string;
  isPlaceholder: boolean;
};

/** Replace placeholders with verified names, roles, photos, and bios from the owner. */
export const teamHome = {
  eyebrow: "Our team",
  title: "Meet the People Behind Your Journey",
  description:
    "Our counsellors support students with university selection, applications, documentation, visa guidance, and pre-departure preparation—step by step, with clear expectations.",
};

export const teamMembers: TeamMemberProfile[] = [
  {
    id: "team-slot-1",
    name: "Counsellor profile — pending",
    role: "Admissions counselling",
    bio:
      "Reserved for a verified team member. Add name, role, portrait, and a short factual bio after owner approval.",
    imageSrc: homeImages.teamFrame25,
    imageAlt: "Portrait of a man in a suit; team member identity pending confirmation",
    isPlaceholder: true,
  },
  {
    id: "team-slot-2",
    name: "Counsellor profile — pending",
    role: "Documentation & applications",
    bio:
      "Reserved for a verified team member. Add name, role, portrait, and a short factual bio after owner approval.",
    imageSrc: homeImages.teamFrame26,
    imageAlt: "Portrait of a man in a light shirt; team member identity pending confirmation",
    isPlaceholder: true,
  },
  {
    id: "team-slot-3",
    name: "Counsellor profile — pending",
    role: "Visa & pre-departure support",
    bio:
      "Reserved for a verified team member. Add name, role, portrait, and a short factual bio after owner approval.",
    imageSrc: homeImages.teamFrame27,
    imageAlt: "Portrait of a woman wearing a white coat and stethoscope; identity pending confirmation",
    isPlaceholder: true,
  },
  {
    id: "team-slot-4",
    name: "Team profile — pending",
    role: "Team role — pending",
    bio:
      "Reserved for a verified team member. Add name, role, portrait, and a short factual bio after owner approval.",
    imageSrc: homeImages.teamFrame28,
    imageAlt: "Portrait of a woman in white clothing; team member identity pending confirmation",
    isPlaceholder: true,
  },
];

/** Homepage China scholarship spotlight — rendered immediately before the about block. */
export const chinaScholarships = {
  eyebrow: "Scholarship support",
  title: "Scholarship Program's in China",
  ctaLabel: "Know More",
  ctaHref: "/countries/china",
  points: [
    {
      title: "CSCA Exam Guidance",
      description:
        "Guidance to help students understand the CSCA exam process and prepare for the required steps.",
    },
    {
      title: "University Selection and Application Process",
      description:
        "Assistance in choosing a suitable Chinese university and understanding the application process.",
    },
    {
      title: "Get the Golden Ticket: Admission Letter",
      description:
        "Guidance through the admission process and support with the required admission documentation.",
    },
    {
      title: "University Assistance",
      description:
        "Support with SIM cards, bank account setup, hostel arrangements, and bedding requirements.",
    },
  ],
} as const;
