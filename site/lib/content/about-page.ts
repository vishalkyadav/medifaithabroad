/**
 * About page content — copied from the original page at
 * medifaithabroad.com/about-us/ (and its Elementor source), in the same order.
 * Paragraph copy is verbatim; only markup emphasis was dropped.
 */

import { homeImages } from "./home-images";
import { siteImages } from "./site-images";

export const aboutHero = {
  titlePrefix: "Welcome to",
  titleEmphasis: "Medifaith",
  titleSuffix: "Abroad Consultancy",
  subtitle:
    "From Trusted Guidance to Global Careers, We Shape Your Future in Healthcare Education.",
  imageSrc: siteImages.aboutHeroIllustration,
  imageAlt:
    "Illustration of travellers and international landmarks for study abroad guidance",
} as const;

export type AboutFlag = {
  label: string;
  slug: string;
  src: string;
};

/** Flags shown on the original page, in the original order. */
export const aboutCountries = {
  title: "Countries We Serve",
  flags: [
    { label: "Nepal", slug: "nepal", src: "/images/flags/nepal.png" },
    { label: "India", slug: "india", src: "/images/flags/india.png" },
    { label: "Bangladesh", slug: "bangladesh", src: "/images/flags/bangladesh.png" },
    { label: "Ukraine", slug: "ukraine", src: "/images/flags/ukraine.png" },
    { label: "Russia", slug: "russia", src: "/images/flags/russia.png" },
    { label: "Poland", slug: "poland", src: "/images/flags/poland.png" },
    { label: "Kyrgyzstan", slug: "kyrgyzstan", src: "/images/flags/kyrgyzstan.png" },
    { label: "Kazakhstan", slug: "kazakhstan", src: "/images/flags/kazakhstan.png" },
    { label: "Germany", slug: "germany", src: "/images/flags/germany.png" },
    { label: "Georgia", slug: "georgia", src: "/images/flags/georgia.png" },
    { label: "China", slug: "china", src: "/images/flags/china.png" },
  ] satisfies AboutFlag[],
} as const;

export const aboutChairman = {
  name: "Vibhas Kumar",
  role: "Chairman,   (Ex-Indian Army)",
  company: "Medifaith Abroad Consultancy",
  portraitSrc: homeImages.leadershipPortrait,
  portraitAlt: "Vibhas Kumar, Chairman of Medifaith Abroad Consultancy",
} as const;

export const aboutMissionVision = {
  mission: {
    eyebrow: "The Goal",
    title: "Our Mission",
    body:
      "To empower students with the right opportunities in global medical education , ensuring a smooth, transparent, and ethical journey from admission to career growth.",
  },
  vision: {
    eyebrow: "The Outlook",
    title: "Our Vision",
    body:
      "To become a leading global gateway for aspiring medical and healthcare professionals, making high-quality international education accessible, affordable, and reliable.",
  },
} as const;

export type AboutTeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
};

/** Names, designations and portrait frames as published on the original page. */
export const aboutTeam = {
  eyebrow: "The Team",
  title: "Meet Our Team",
  intro:
    "Behind Medifaith is a team of experienced counselors, education consultants, and healthcare professionals, all working with one goal: to help students achieve their dream of becoming successful doctors and healthcare experts.",
  members: [
    {
      name: "Dr Ankit Kumar Singh",
      role: "CEO",
      imageSrc: homeImages.teamFrame33,
      imageAlt: "Portrait of Dr Ankit Kumar Singh",
    },
    {
      name: "Abhishek Kumar",
      role: "Operation manager",
      imageSrc: homeImages.teamFrame32,
      imageAlt: "Portrait of Abhishek Kumar",
    },
    {
      name: "Dr Sumon Roy",
      role: "Foreign & legal advisor",
      imageSrc: homeImages.teamFrame25,
      imageAlt: "Portrait of Dr Sumon Roy",
    },
    {
      name: "Satyendra Singh",
      role: "EC Ranchi",
      imageSrc: homeImages.teamFrame28,
      imageAlt: "Portrait of Satyendra Singh",
    },
    {
      name: "Nigiar Guseynova Roy",
      role: "Foreign & legal advisor",
      imageSrc: homeImages.teamFrame26,
      imageAlt: "Portrait of Nigiar Guseynova Roy",
    },
    {
      name: "Kalki Prashreetha Pranav",
      role: "EC South India",
      imageSrc: homeImages.teamFrame27,
      imageAlt: "Portrait of Kalki Prashreetha Pranav",
    },
  ] satisfies AboutTeamMember[],
  ctaLabel: "Contact Us",
  ctaHref: "/contact",
} as const;

export const aboutStory = {
  eyebrow: "Our Story",
  title: "Guiding Dreams, Building Futures",
  paragraphs: [
    "Founded with the mission to bridge the gap between ambition and opportunity, Medifaith Abroad Consultancy has grown into a trusted name in international medical education. What started as a small team passionate about helping students, is now a professional organization assisting hundreds of aspiring doctors and healthcare professionals in pursuing their careers abroad.",
    "With partnerships across Russia, Kazakhstan, Georgia, Uzbekistan, Kyrgyzstan, and more , we ensure every student finds the right university at an affordable cost.",
  ],
  imageSrc: siteImages.aboutStoryIllustration,
  imageAlt:
    "Illustration of students travelling between world landmarks for international education",
} as const;

export const aboutStats = [
  { value: "10", label: "Years of experience" },
  { value: "10K", label: "Worldwide Trust" },
  { value: "99%", label: "Satisfaction rate" },
] as const;

export const aboutCare = {
  title: "We Care to Guide You Best",
  subtitle: "As We Can, For Your Bright Future",
  paragraphs: [
    "Medifaith Abroad Consultancy is one of the most trusted medical education consultancies for Indian students aspiring to study abroad. From your very first counseling session to your convocation day, we stand with you at every step. Our dedicated team even provides on-ground support in partner universities abroad, ensuring you never feel alone in a new country.",
    "We are officially associated with top NMC & WHO-recognized universities across Russia, Kazakhstan, Georgia, Uzbekistan, Kyrgyzstan, Philippines, China, Bangladesh, Armenia, Nepal, and Belarus. With these collaborations, we guarantee authentic admission guidance, transparent fee structures, and complete student support.",
    "At Medifaith, our mission is to deliver genuine and verified information about universities, courses, and living abroad. Along with personalized counseling, we also share detailed resources, videos, and student success stories so that every student makes the right choice for their career.",
  ],
  imageSrc: siteImages.aboutConsultantPhoto,
  imageAlt: "Medifaith Abroad counsellor holding study documents and books",
} as const;

export const aboutProcess = {
  eyebrow: "Our Process",
  title: "Simple Steps to Your Global Career",
  steps: [
    {
      title: "Counseling",
      description:
        "Personalized sessions to understand your career goals and eligibility.",
    },
    {
      title: "University Selection",
      description: "Guidance in choosing NMC & WHO-recognized universities.",
    },
    {
      title: "Admission & Visa",
      description:
        "Complete support for documentation, application, and travel.",
    },
    {
      title: "Settlement Support",
      description:
        "Our team helps you settle abroad and focus on your education.",
    },
  ],
} as const;

export const aboutStudentSupport = {
  eyebrow: "Giving Back",
  title: "Student Support",
  bodyBefore: "At Medifaith, we believe in ",
  bodyEmphasis: "long-term support",
  bodyAfter:
    ". From admission to graduation, and even during licensing exams like FMGE/NExT, we stand with our students as a family.",
  imageSrc: siteImages.aboutStudentSupportPhoto,
  imageAlt:
    "Medical student in a white coat giving a thumbs up in a hospital corridor",
} as const;

export const aboutCta = {
  title: "Ready to start your MBBS journey abroad?",
  body:
    "Contact us today for a free counseling session and explore your opportunities.",
  ctaLabel: "Get A Free Quote",
  ctaHref: "/contact",
  imageSrc: siteImages.aboutCtaBackground,
  imageAlt:
    "Aerial view of a historic university building surrounded by landscaped grounds",
} as const;
