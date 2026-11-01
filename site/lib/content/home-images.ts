/**
 * Central homepage image map — change paths here when replacing files in public/images/.
 * See IMAGE-REPLACEMENT-GUIDE.md in the project root.
 *
 * All paths below are verified against files on disk (case-sensitive) by
 * `node scripts/verify-image-paths.mjs`.
 */

export const homeImages = {
  /** Legacy full-bleed hero; homepage uses heroFeature. */
  hero: "/images/medical-team-corridor.png",
  /** Primary homepage hero photograph (1536×1024). */
  heroFeature: "/images/hero-students-park.png",
  /** Alternate high-res park editorial (1396×932) — originals preserved. */
  parkScene: "/images/park.png",
  chinahero: "/images/university-china.png",
  uzbekistanhero: "/images/university-uzbekistan.png",
  bangladeshhero: "/images/university-bangladesh.png",
  russiahero: "/images/university-russia.png",
  unitedKingdomhero: "/images/University-Unitedkingdom.png",
  polandhero: "/images/university-Poland.png",
  kazakhstanhero: "/images/university-kazakhstan.png",
  nepalhero: "/images/university-Nepal.png",
  germanyhero: "/images/university-germany.png",
  kyrgyzstan: "/images/university-kyrgyzstan.png",
  about: "/images/medical-team-corridor.png",
  ctaBackground: "/images/students-airport.png",
  studentsAirport: "/images/students-airport.png",
  missionVision: "/images/mission-vision1.png",
  leadershipPortrait: "/images/leadership-chairman.png",
  medicalTeam: "/images/medical-team-corridor.png",
  georgiahero: "/images/university-of-georgia%20.png",
  studentLounge: "/images/student-lounge.png",
  studentsLibrary: "/images/high-angle-students-learning-library.png",
  universityCampus: "/images/university-china.png",
  journeyCampus: "/images/university-campus-kazakhstan.png",
  studentsPark: "/images/hero-students-park.png",
  studentdreams: "/images/studentdream.png",
  studentFamilyPhotos: [
    {
      src: "/images/studentfamily1.jpeg",
      alt: "Students and family members gathered with luggage at an airport",
    },
    {
      src: "/images/studentfamily2.png",
      alt: "A group of students and families with travel luggage at an airport",
    },
    {
      src: "/images/studentfamily3.png",
      alt: "Students and family members standing together with luggage before travel",
    },
    {
      src: "/images/studentfamily4.png",
      alt: "A student group and family members gathered with suitcases at an airport",
    },
    {
      src: "/images/studentfamily5.jpeg",
      alt: "Students and families gathered together with luggage at an airport",
    },
  ],
  teamFrame25: "/images/Frame-25.png",
  teamFrame26: "/images/Frame-26.png",
  teamFrame27: "/images/Frame-27.png",
  teamFrame28: "/images/Frame-28.png",
  teamFrame33: "/images/Frame-33.png",
  teamFrame32: "/images/Frame-32.png",

  testimonialAccent: "/images/testimonial-accent.png",
  /** Large service-row photographs (see servicePhotos below). */
  serviceUniversityPhoto: "/images/university-china.png",
  serviceAdmissionPhoto: "/images/services/Admissionsassistance.png",
  serviceVisaPhoto: "/images/services/visa-processing.png",
  servicePreDeparturePhoto:
    "/images/services/Airport Travel Assistance Consultation.png",
  serviceScholarshipPhoto: "/images/services/Scholarship-guidance (2).png",
  /** Compact service thumbnails, distinct from the large row photos. */
  serviceUniversityThumb: "/images/services/university-selectio.png",
  serviceAdmissionThumb:
    "/images/services/University Application Assistance Office.png",
  serviceVisaThumb: "/images/students-airport.png",
  servicePreDepartureThumb: "/images/services/pre-departure-support.png",
  serviceScholarshipThumb: "/images/services/scholarship-guidance.png",
} as const;

/**
 * Legacy icon map (not rendered by ServiceShowcase after the photo-thumbnail
 * update). Paths kept accurate so the verifier passes.
 */
export const serviceIcons = {
  universitySelection: "/images/services/Universitychina.png",
  admissionAssistance: "/images/services/Admissionsassistance.png",
  visaProcessing: "/images/services/visa-processing.png",
  preDepartureSupport: "/images/services/pre-departure-support.png",
  scholarshipGuidance: "/images/services/scholarship-guidance.png",
} as const;

/**
 * Large editorial photos for each service row (left/right alternating layout).
 * Prefer highest-resolution local sources; each service uses a different image.
 */
export const servicePhotos = {
  universitySelection: homeImages.serviceUniversityPhoto,
  admissionAssistance: homeImages.serviceAdmissionPhoto,
  visaProcessing: homeImages.serviceVisaPhoto,
  preDepartureSupport: homeImages.servicePreDeparturePhoto,
  scholarshipGuidance: homeImages.serviceScholarshipPhoto,
} as const;

export const servicePhotoAlt: Record<
  keyof typeof servicePhotos,
  string
> = {
  universitySelection: "Grand international university campus building",
  admissionAssistance:
    "Hand completing an online university admission application on a laptop",
  visaProcessing: "Hands holding passports and travel documents for international study",
  preDepartureSupport:
    "Students with luggage receiving travel guidance at an airport before departure",
  scholarshipGuidance:
    "Counsellor explaining scholarship information to a student on a tablet",
};

/** Compact photo thumbnails beside service titles (distinct from large row images). */
export const serviceThumbnails = {
  universitySelection: homeImages.serviceUniversityThumb,
  admissionAssistance: homeImages.serviceAdmissionThumb,
  visaProcessing: homeImages.serviceVisaThumb,
  preDepartureSupport: homeImages.servicePreDepartureThumb,
  scholarshipGuidance: homeImages.serviceScholarshipThumb,
} as const;

export const serviceThumbnailAlt: Record<
  keyof typeof serviceThumbnails,
  string
> = {
  universitySelection: "Historic university building — campus selection",
  admissionAssistance:
    "Counsellor helping a student complete a university application",
  visaProcessing: "Students with luggage at an airport before travelling abroad",
  preDepartureSupport:
    "Students in shared accommodation before departure abroad",
  scholarshipGuidance: "Tablet showing scholarship and financial-aid information",
};

/** Circular flag assets from the original site (UK not in archive — SVG fallback). */
export const countryFlagSrc: Record<string, string | undefined> = {
  russia: "/images/flags/russia.png",
  poland: "/images/flags/poland.png",
  china: "/images/flags/china.png",
  uzbekistan: "/images/flags/uzbekistan.png",
  kazakhstan: "/images/flags/kazakhstan.png",
  georgia: "/images/flags/georgia.png",
  nepal: "/images/flags/nepal.png",
  kyrgyzstan: "/images/flags/kyrgyzstan.png",
  bangladesh: "/images/flags/bangladesh.png",
  germany: "/images/flags/germany.png",
  "united-kingdom": undefined,
};
