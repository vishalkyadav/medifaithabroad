/**
 * Services page content — mirrors the original medifaithabroad.com/services/
 * page: ten service cards in this exact order, with matching photographs.
 *
 * Image paths are checked against files on disk (exact case) by
 * `node scripts/verify-image-paths.mjs`.
 */

export type ServicePageIcon =
  | "careerCounseling"
  | "universitySelection"
  | "admissionAssistance"
  | "visaGuidance"
  | "travelAssistance"
  | "accommodationSupport"
  | "preDepartureOrientation"
  | "postArrivalSupport"
  | "scholarshipGuidance"
  | "convocationSupport";

export type ServicePageItem = {
  title: string;
  description: string;
  icon: ServicePageIcon;
  image: string;
  imageAlt: string;
};

export const servicesPage: readonly ServicePageItem[] = [
  {
    title: "Career Counseling",
    description:
      "Personalized sessions to understand your career goals, academics, and budget – we help you choose the right country and university.",
    icon: "careerCounseling",
    image: "/images/services/Scholarship-guidance (2).png",
    imageAlt:
      "Counsellor reviewing education plans with a student using a tablet",
  },
  {
    title: "University Selection",
    description:
      "Get genuine details about top NMC/WHO approved universities abroad with transparent comparison of fees, facilities & recognition.",
    icon: "universitySelection",
    image: "/images/University.png",
    imageAlt: "Historic university campus building with a central tower",
  },
  {
    title: "Admission Assistance",
    description:
      "Hassle-free support in application forms, document verification, admission letters & fee submission.",
    icon: "admissionAssistance",
    image: "/images/services/Admissionsassistance.png",
    imageAlt:
      "Laptop displaying a university admission assistance application form",
  },
  {
    title: "Visa Guidance",
    description:
      "Step-by-step guidance for visa file preparation, interview training & embassy approvals.",
    icon: "visaGuidance",
    image: "/images/services/visa-processing.png",
    imageAlt:
      "Travellers holding Indian passports with boarding passes at an airport",
  },
  {
    title: "Travel Assistance",
    description:
      "Air tickets, foreign exchange, airport pickup – we make sure your journey abroad is stress-free.",
    icon: "travelAssistance",
    image: "/images/services/Airport Travel Assistance Consultation.png",
    imageAlt:
      "Travel consultant helping students with tickets and documents at an airport",
  },
  {
    title: "Accommodation Support",
    description:
      "Safe and comfortable hostel arrangements or private housing near your university.",
    icon: "accommodationSupport",
    image: "/images/student-lounge.png",
    imageAlt: "Student lounge seating area with couches and coffee tables",
  },
  {
    title: "Pre-Departure Orientation",
    description:
      "Sessions on lifestyle, culture, do’s & don’ts – so students are well-prepared before traveling.",
    icon: "preDepartureOrientation",
    image: "/images/Pre-Departure-Orientation.png",
    imageAlt:
      "Student waiting with luggage in an airport terminal before an international flight",
  },
  {
    title: "Post-Arrival Support",
    description:
      "Local representatives to help with registration, residence permits, SIM cards & emergency support.",
    icon: "postArrivalSupport",
    image: "/images/Post-Arrival-Support.png",
    imageAlt:
      "Student support staff checking arrival paperwork with a student after landing",
  },
  {
    title: "Scholarship Guidance",
    description:
      "Assistance in applying for government/university scholarships available for Indian students.",
    icon: "scholarshipGuidance",
    image: "/images/Scholarship-Guidance.png",
    imageAlt:
      "Graduation cap beside stacked coins and a card reading Education",
  },
  {
    title: "Continuous Support till Convocation",
    description:
      "We stay with you till you successfully complete your MBBS journey abroad.",
    icon: "convocationSupport",
    image: "/images/Continuous-Support-till-Convocation.png",
    imageAlt: "Graduating medical students throwing their caps in the air",
  },
];
