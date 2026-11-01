import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { BenefitIcon } from "@/components/home/BenefitIcon";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ChinaScholarshipSection } from "@/components/home/ChinaScholarshipSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { ImageBackdrop } from "@/components/ui/ImageBackdrop";
import { getCountryHeroImage } from "@/lib/content/country-images";
import { chinaScholarshipReviews } from "@/lib/content/countries/china";
import {
  buildQuickFacts,
  defaultLivingAccommodation,
} from "@/lib/content/countries/quick-facts";
import type {
  CountryHeroAction,
  CountryPageContent,
  CountryUniversityFeeTable,
} from "@/lib/content/countries/types";
import { Reveal } from "@/components/motion/Reveal";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/StaggerGroup";
import { contact, contactHrefForCountry } from "@/lib/contact";
import { photoFrame } from "@/lib/design/photo-frame";
import { CountryVideoPlaceholder } from "./CountryVideoPlaceholder";
import { UnitedKingdomPage } from "./UnitedKingdomPage";
import { ViewCollegesTab } from "./ViewCollegesTab";

type CountryPageViewProps = {
  country: CountryPageContent;
};

function CountryTrustStrip({ country }: CountryPageViewProps) {
  if (!country.countryTrustPoints) return null;

  return (
    <section
      className={`border-y border-white/10 ${
        country.slug === "kazakhstan"
          ? "bg-black"
          : "bg-brand-navy-deep"
      }`}
      aria-label={`${country.name} study considerations`}
    >
      <Container className="py-8 sm:py-9">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {country.countryTrustPoints.map((point) => (
            <li key={point.title} className="flex gap-3 sm:gap-4">
              {point.icon && (
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10"
                  aria-hidden
                >
                  <BenefitIcon
                    name={point.icon}
                    className="h-5 w-5 text-brand-gold"
                  />
                </span>
              )}
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white sm:text-base">
                  {point.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-white/70 sm:text-sm">
                  {point.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function CountryAdmissionStages({ country }: CountryPageViewProps) {
  if (!country.admissionStages) return null;

  return (
    <>
      <SectionHeading
        id="admission-process"
        eyebrow="Admission"
        title={
          country.admissionStagesTitle ??
          `${country.name} MBBS admission process`
        }
        description={
          country.admissionStagesDescription ??
          "Each stage below reflects the published foreign-student process; confirm the current session’s circular before you act."
        }
      />
      <ol className="mt-8 space-y-4">
        {country.admissionStages.map((stage, index) => (
          <li
            key={stage.title}
            className="rounded-2xl border border-brand-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal-dark text-sm font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold text-brand-teal-dark">
                  {stage.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {stage.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                        aria-hidden
                      />
                      <span className="text-sm leading-relaxed text-brand-text-muted">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

function CountryAdmissionDetailsTable({ country }: CountryPageViewProps) {
  if (!country.admissionDetails) return null;
  return (
    <div>
      <SectionHeading
        id="admission-process"
        eyebrow="Requirements"
        title={country.admissionDetailsTitle ?? `${country.name} admission information`}
        description="Requirements and costs vary by programme and applicant. Confirm current details with the relevant university and official authorities."
      />
      <div className="mt-8 overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
        <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
          <thead className="bg-brand-teal-dark text-white"><tr><th scope="col" className="w-56 px-5 py-4 font-semibold">Section</th><th scope="col" className="px-5 py-4 font-semibold">Details</th></tr></thead>
          <tbody className="divide-y divide-brand-border">
            {country.admissionDetails.map((row) => (
              <tr key={row.section} className="odd:bg-white even:bg-brand-muted/50">
                <th scope="row" className="w-56 px-5 py-4 align-top font-medium text-brand-heading">{row.section}</th>
                <td className="px-5 py-4 align-top"><ul className="space-y-2">
                  {row.details.map((detail) => <li key={detail} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden /><span className="leading-relaxed text-brand-text-muted">{detail}</span></li>)}
                </ul>{row.sources && <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">{row.sources.map((source) => <li key={source.href}><a className="text-xs font-semibold text-brand-teal underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal" href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-brand-text-muted">Confirm current admissions, fees, and funding rules with the institution before making decisions or payments.</p>
    </div>
  );
}

function CountryUniversityFeeTable({ table }: { table: CountryUniversityFeeTable }) {
  const headings = table.columnLabels ?? [
    "University / institution",
    "Tuition fees (annual)",
    "Semester contribution",
    "Teaching language",
    "Accommodation",
    "Type / source classification",
  ];
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-brand-teal-dark">{table.title}</h3>
      {table.description && <p className="mt-2 max-w-4xl text-sm leading-relaxed text-brand-text-muted">{table.description}</p>}
      <div className="mt-4 overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
        <table className="w-full min-w-[70rem] border-collapse text-left text-sm">
          <thead className="bg-brand-teal-dark text-white"><tr>{headings.map((heading) => <th key={heading} scope="col" className="px-4 py-4 font-semibold">{heading}</th>)}</tr></thead>
          <tbody className="divide-y divide-brand-border">
            {table.rows.map((row) => <tr key={row.university} className="odd:bg-white even:bg-brand-muted/50 hover:bg-brand-muted">
              <th scope="row" className="min-w-64 px-4 py-4 align-top font-medium text-brand-heading">{row.university}</th>
              <td className="min-w-48 px-4 py-4 align-top text-brand-text-muted">{row.tuition}</td>
              <td className="min-w-44 px-4 py-4 align-top text-brand-text-muted">{row.semesterContribution}</td>
              <td className="min-w-40 px-4 py-4 align-top text-brand-text-muted">{row.teachingLanguage}</td>
              <td className="min-w-40 px-4 py-4 align-top text-brand-text-muted">{row.accommodation}</td>
              <td className="min-w-48 px-4 py-4 align-top text-brand-text-muted"><span>{row.type}</span>{row.notes && <p className="mt-2 min-w-64 text-xs leading-relaxed">{row.notes}</p>}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-brand-text-muted sm:hidden">Scroll horizontally to view all six columns.</p>
    </div>
  );
}

function CountryCompetitiveEdge({ country, heroImage }: CountryPageViewProps & { heroImage: string }) {
  if (!country.competitiveEdge) return null;
  return (
    <section className="bg-white py-12 sm:py-16" aria-labelledby="competitive-edge">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className={`relative aspect-[4/3] ${photoFrame}`}><Image src={country.competitiveEdge.image ?? heroImage} alt={country.competitiveEdge.imageAlt ?? ""} fill className="photo-frame__img object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
        <div><SectionHeading id="competitive-edge" eyebrow="Study planning" title={country.competitiveEdge.title} description={country.competitiveEdge.description} /><ul className="mt-6 space-y-4">{country.competitiveEdge.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden /><span className="text-sm leading-relaxed text-brand-text-muted">{point}</span></li>)}</ul></div>
      </Container>
    </section>
  );
}

export function CountryPageView({ country }: CountryPageViewProps) {
  if (country.slug === "united-kingdom") {
    return <UnitedKingdomPage country={country} />;
  }

  return <StandardCountryPageView country={country} />;
}

function StandardCountryPageView({ country }: CountryPageViewProps) {
  const heroImage = country.heroImage ?? getCountryHeroImage(country.slug);
  const quickFacts = country.quickFacts ?? buildQuickFacts(country);
  const livingText =
    country.livingAccommodation ?? defaultLivingAccommodation(country.name);
  const enquiryHref = contactHrefForCountry(country.slug);
  const hasUniversityFees = Boolean(
    country.universityFees?.length || country.universityFeeTables?.length,
  );
  const hasFeeLocation = Boolean(
    country.universityFees?.some((fee) => fee.location),
  );
  const hasFeeLanguage = Boolean(
    country.universityFees?.some((fee) => fee.teachingLanguage),
  );
  const hasFeeNotes = Boolean(
    country.universityFees?.some((fee) => fee.notes),
  );
  const hasFeeType = Boolean(country.universityFees?.some((fee) => fee.type));
  const hasFeeAnnualTotal = Boolean(
    country.universityFees?.some((fee) => fee.totalApproximateAnnualCost),
  );
  const hasFeeOtc = Boolean(
    country.universityFees?.some((fee) => fee.otc),
  );
  const hasConsultancyCharges = Boolean(
    country.universityFees?.some((fee) => fee.consultancyCharges),
  );
  const feeColumnCount = hasFeeNotes ? 3 :
    3 +
    (hasFeeLocation ? 1 : 0) +
    (hasFeeLanguage ? 1 : 0) +
    (hasFeeType ? 1 : 0) +
    (hasFeeAnnualTotal ? 1 : 0) +
    (hasFeeOtc ? 1 : 0) +
    (hasConsultancyCharges ? 1 : 0);
  const heroActions: CountryHeroAction[] = country.heroActions ?? [
    { label: `Enquire about ${country.name}`, href: enquiryHref },
    {
      label: "Admission process",
      href: "/admission-process",
      variant: "outline",
    },
  ];

  return (
    <>
      <PhotoHero
        imageSrc={heroImage}
        imageAlt={
          country.heroImageAlt ??
          `Study MBBS in ${country.name} — campus and student life`
        }
        imageClassName={`object-cover ${
          country.slug === "nepal"
            ? "object-[center_18%]"
            : "object-center"
        }`}
        minHeightClass="min-h-[28rem] sm:min-h-[32rem]"
      >
        <div className="max-w-2xl">
          <p className="type-eyebrow tracking-widest text-brand-gold">
            Study destination
          </p>
          <h1
            id="country-hero-title"
            className="type-display-1 mt-3"
          >
            {country.heroTitle}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            {country.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {heroActions.map((action) => {
              const variant = action.variant ?? "primary";
              return (
                <ButtonLink
                  key={`${action.label}-${action.href}`}
                  href={action.href}
                  variant={variant}
                  className={
                    variant === "outline"
                      ? "border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                      : ""
                  }
                >
                  {action.label}
                </ButtonLink>
              );
            })}
          </div>
        </div>
      </PhotoHero>

      {country.slug !== "kazakhstan" && country.slug !== "nepal" && country.slug !== "germany" && (
        <CountryTrustStrip country={country} />
      )}

      {hasUniversityFees && (
        <ViewCollegesTab
          targetId="university-fees"
          side={country.collegesTabSide}
          tone={country.collegesTabTone}
        />
      )}

      {country.slug === "china" && (
        <ChinaScholarshipSection reviews={chinaScholarshipReviews} />
      )}

      {country.slug !== "nepal" && country.slug !== "germany" && quickFacts.length > 0 && (
        <section
          className="border-b border-brand-border bg-brand-muted py-10 sm:py-12"
          aria-labelledby="quick-facts"
        >
          <Container>
            <Reveal>
            <h2
              id="quick-facts"
              className="type-eyebrow text-center text-brand-teal"
            >
              Quick facts
            </h2>
            <ul className="mt-8 flex flex-wrap justify-center gap-4">
              {quickFacts.map((fact) => (
                <li
                  key={fact.label}
                  className="w-full rounded-2xl border border-brand-border bg-white p-5 text-center shadow-sm sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-teal-dark">
                    {fact.value}
                  </p>
                </li>
              ))}
            </ul>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="bg-white py-12 sm:py-16" aria-labelledby="country-intro">
        <Container className="max-w-3xl">
          <h2 id="country-intro" className="sr-only">Introduction</h2>
          <p className="text-lg leading-relaxed text-brand-text-muted">
            {country.introduction}
          </p>
        </Container>
      </section>

      {country.universityFeeTables ? (
        <section id="university-fees" className="scroll-mt-24 bg-brand-muted py-12 sm:py-16" aria-labelledby="university-fees-heading">
          <Container>
            {country.feeSectionTitle !== "" && <SectionHeading id="university-fees-heading" eyebrow="University listings" title={country.feeSectionTitle ?? `Medicine programmes in ${country.name}`} description={country.feeSectionDescription} />}
            {country.universityFeeTables.map((table) => <CountryUniversityFeeTable key={table.title} table={table} />)}
            {country.feeDataNote && <p className="mt-6 rounded-xl border border-brand-border bg-white p-5 text-sm leading-relaxed text-brand-text-muted">{country.feeDataNote}</p>}
          </Container>
        </section>
      ) : country.universityFees && (
        <section
          id="university-fees"
          className="scroll-mt-24 bg-brand-muted py-12 sm:py-16"
          aria-labelledby="university-fees-heading"
        >
          <Container>
            <SectionHeading
              id="university-fees-heading"
              eyebrow="Fees"
              title={country.feeSectionTitle ?? `MBBS Fees in ${country.name}`}
              description={
                country.feeSectionDescription ??
                `Compare annual tuition and hostel costs at selected ${country.name} medical universities.`
              }
            />
            <div className="mt-8 overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
              <table
                className={`w-full border-collapse text-left text-sm ${
                  feeColumnCount >= 6
                    ? "min-w-[56rem]"
                    : feeColumnCount === 5
                      ? "min-w-[52rem]"
                      : "min-w-[42rem]"
                }`}
              >
                <thead className="bg-brand-teal-dark text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      {country.feeColumnLabels?.university ?? "University"}
                    </th>
                    {!hasFeeNotes && hasFeeLocation && (
                      <th scope="col" className="whitespace-nowrap px-5 py-4 font-semibold">
                        Location
                      </th>
                    )}
                    <th scope="col" className="whitespace-nowrap px-5 py-4 font-semibold">
                      {country.feeColumnLabels?.tuition ?? "Tuition fee per year"}
                    </th>
                    {!hasFeeNotes && (
                      <th scope="col" className="whitespace-nowrap px-5 py-4 font-semibold">
                        {country.feeColumnLabels?.hostel ?? "Hostel fee per year"}
                      </th>
                    )}
                    {hasFeeNotes && (
                      <th scope="col" className="px-5 py-4 font-semibold">
                        {country.feeColumnLabels?.notes ?? "Notes / Highlights"}
                      </th>
                    )}
                    {hasFeeAnnualTotal && (
                      <th scope="col" className="whitespace-nowrap px-5 py-4 font-semibold">
                        {country.feeColumnLabels?.totalApproximateAnnualCost ??
                          "Total approximate annual cost"}
                      </th>
                    )}
                    {hasFeeOtc && (
                      <th scope="col" className="whitespace-nowrap px-5 py-4 font-semibold">
                        {country.feeColumnLabels?.otc ?? "OTC"}
                      </th>
                    )}
                    {hasConsultancyCharges && (
                      <th scope="col" className="whitespace-nowrap px-5 py-4 font-semibold">
                        {country.feeColumnLabels?.consultancyCharges ??
                          "Consultancy charges"}
                      </th>
                    )}
                    {hasFeeLanguage && (
                      <th scope="col" className="whitespace-nowrap px-5 py-4 font-semibold">
                        Teaching language
                      </th>
                    )}
                    {hasFeeType && (
                      <th scope="col" className="whitespace-nowrap px-5 py-4 font-semibold">
                        Type
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  {country.universityFees.map((fee) => (
                    <tr
                      key={fee.university}
                      className="odd:bg-white even:bg-brand-muted/50 hover:bg-brand-muted"
                    >
                      <th
                        scope="row"
                        className="min-w-64 px-5 py-4 font-medium text-brand-heading"
                      >
                        {fee.university}
                      </th>
                      {!hasFeeNotes && hasFeeLocation && (
                        <td className="whitespace-nowrap px-5 py-4 text-brand-text-muted">
                          {fee.location ?? "—"}
                        </td>
                      )}
                      <td className="px-5 py-4 align-top text-brand-text-muted">
                        {fee.tuition}
                      </td>
                      {!hasFeeNotes && (
                        <td className="px-5 py-4 align-top text-brand-text-muted">
                          {fee.hostel}
                        </td>
                      )}
                      {hasFeeNotes && (
                        <td className="min-w-72 px-5 py-4 align-top leading-relaxed text-brand-text-muted">
                          {fee.notes ?? "Not available in source data"}
                        </td>
                      )}
                      {hasFeeAnnualTotal && (
                        <td className="px-5 py-4 align-top text-brand-text-muted">
                          {fee.totalApproximateAnnualCost ?? "Not verified"}
                        </td>
                      )}
                      {hasFeeOtc && (
                        <td className="whitespace-nowrap px-5 py-4 align-top text-brand-text-muted">
                          {fee.otc ?? "Not available in source data"}
                        </td>
                      )}
                      {hasConsultancyCharges && (
                        <td className="whitespace-nowrap px-5 py-4 align-top text-brand-text-muted">
                          {fee.consultancyCharges ??
                            "Not available in source data"}
                        </td>
                      )}
                      {hasFeeLanguage && (
                        <td className="whitespace-nowrap px-5 py-4 align-top text-brand-text-muted">
                          {fee.teachingLanguage ?? "—"}
                        </td>
                      )}
                      {hasFeeType && (
                        <td className="whitespace-nowrap px-5 py-4 align-top text-brand-text-muted">
                          {fee.type ?? "—"}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {country.feeTableDisclaimer !== "" && (
              <p className="mt-4 text-sm leading-relaxed text-brand-text-muted">
                {country.feeTableDisclaimer ??
                  "Note: Other expenses and OTC may vary depending on the university and student’s profile. Fees are indicative and should be confirmed directly with the university before making payment."}
              </p>
            )}
            {country.feeDataNote && (
              <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                {country.feeDataNote}
              </p>
            )}
            <p className="mt-2 text-xs text-brand-text-muted sm:hidden">
              Scroll horizontally to view all fee columns.
            </p>
          </Container>
        </section>
      )}

      {country.slug === "germany" && <CountryTrustStrip country={country} />}

      {country.slug === "germany" && country.admissionDetails && (
        <section className="bg-brand-muted py-12 sm:py-16" aria-labelledby="admission-process">
          <Container><CountryAdmissionDetailsTable country={country} /></Container>
        </section>
      )}

      {country.slug === "germany" && <CountryCompetitiveEdge country={country} heroImage={heroImage} />}

      {(country.slug === "kazakhstan" || country.slug === "nepal") && (
        <>
          <CountryTrustStrip country={country} />
          <section
            className="bg-brand-muted py-12 sm:py-16"
            aria-labelledby="admission-process"
          >
            <Container>
              <CountryAdmissionStages country={country} />
            </Container>
          </section>
        </>
      )}

      {country.slug !== "nepal" && country.slug !== "germany" && <section
        className="surface-dark bg-brand-teal-dark py-12 sm:py-16"
        aria-labelledby="why-country"
      >
        <Container>
          <div className="max-w-2xl">
            <p className="type-eyebrow tracking-wider text-brand-gold">
              Why {country.name}
            </p>
            <h2
              id="why-country"
              className="type-display-2 mt-2"
            >
              Why students consider {country.name}
            </h2>
            <p className="mt-4 text-white/80">
              Factors commonly discussed with families during MBBS abroad
              counselling.
            </p>
          </div>
          <StaggerGroup
            as="ul"
            className="mt-10 grid gap-6 sm:grid-cols-2"
          >
            {country.whyStudy.map((item, index) => (
              <StaggerItem
                key={item.title}
                index={index}
                as="li"
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                {item.icon && (
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10">
                    <BenefitIcon
                      name={item.icon}
                      className="h-6 w-6 text-brand-gold"
                    />
                  </span>
                )}
                <h3 className="font-semibold text-brand-gold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>}

      {country.competitiveEdge && country.slug !== "germany" && (
        <section
          className="bg-white py-12 sm:py-16"
          aria-labelledby="competitive-edge"
        >
          <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className={`relative aspect-[4/3] ${photoFrame}`}>
              <Image
                src={country.competitiveEdge.image ?? heroImage}
                alt={country.competitiveEdge.imageAlt ?? ""}
                fill
                className="photo-frame__img object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading
                id="competitive-edge"
                eyebrow="Advantages"
                title={country.competitiveEdge.title}
                description={country.competitiveEdge.description}
              />
              <ul className="mt-6 space-y-4">
                {country.competitiveEdge.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-brand-text-muted">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      {country.slug !== "germany" && <section
        className="bg-white py-12 sm:py-16"
        aria-labelledby="university-guidance"
      >
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              id="university-guidance"
              eyebrow="Universities"
              title="University information"
            />
            <p className="mt-6 text-brand-text-muted leading-relaxed">
              {country.universityGuidance}
            </p>
          </div>
          <div className="rounded-2xl border border-brand-border bg-brand-muted p-6">
            <h3 className="text-lg font-semibold text-brand-teal-dark">
              Cost planning
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-text-muted">
              {country.costGuidance}
            </p>
            <p className="mt-4 text-xs text-brand-text-muted">
              {country.universityFees
                ? "Figures are indicative only—confirm current fees and charges with the university before payment."
                : "Request a current written fee schedule directly from the university before making a payment."}
            </p>
          </div>
        </Container>
      </section>}

      {country.admissionOverview && country.slug !== "germany" && (
        <section
          className="bg-white py-12 sm:py-16"
          aria-labelledby="admission-overview"
        >
          <Container>
            <SectionHeading
              id="admission-overview"
              eyebrow="Requirements"
              title={`${country.name} MBBS - Requirements & Admission Process`}
            />
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-brand-border bg-brand-muted p-6">
                <h3 className="text-lg font-semibold text-brand-teal-dark">
                  Admission Process
                </h3>
                <ol className="mt-4 space-y-3">
                  {country.admissionSteps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-teal-dark text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="pt-1 leading-relaxed text-brand-text-muted">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-2xl border border-brand-border bg-brand-muted p-6">
                <h3 className="text-lg font-semibold text-brand-teal-dark">
                  Documents Required
                </h3>
                <ul className="mt-4 space-y-3">
                  {country.documentsRequired.map((doc) => (
                    <li key={doc} className="flex gap-3 text-sm">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-gold"
                        aria-hidden
                      />
                      <span className="leading-relaxed text-brand-text-muted">
                        {doc}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-brand-text-muted">
                  Exact documents and steps vary by institution, applicant, and
                  applicable authorities. Request the current checklist before
                  applying.
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {country.slug !== "kazakhstan" && country.slug !== "germany" && (
      <section
        className="bg-brand-muted py-12 sm:py-16"
        aria-labelledby="eligibility-docs"
      >
        <Container>
          {country.eligibilityRows ? (
            <>
              <SectionHeading
                id="eligibility-docs"
                eyebrow="Requirements"
                title={
                  country.eligibilityTitle ??
                  `${country.name} eligibility criteria`
                }
                description="Requirements differ by university, applicant, and intended licensing pathway. Confirm the current rules with official sources."
              />
              <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
                <div className="overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
                  <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                    <thead className="bg-brand-teal-dark text-white">
                      <tr>
                        <th scope="col" className="px-5 py-4 font-semibold">
                          Details
                        </th>
                        <th scope="col" className="px-5 py-4 font-semibold">
                          Requirements
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border">
                      {country.eligibilityRows.map((row) => (
                        <tr
                          key={row.detail}
                          className="odd:bg-white even:bg-brand-muted/50"
                        >
                          <th
                            scope="row"
                            className="w-44 px-5 py-4 align-top font-medium text-brand-heading"
                          >
                            {row.detail}
                          </th>
                          <td className="px-5 py-4 align-top leading-relaxed text-brand-text-muted">
                            {row.requirement}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {country.showEnquiryForm && (
                  <Suspense
                    fallback={
                      <div
                        className="h-96 animate-pulse rounded-2xl border border-brand-border bg-white"
                        aria-hidden
                      />
                    }
                  >
                    <ContactForm
                      countrySlug={country.slug}
                      title={
                        country.enquiryFormTitle ?? "Send an enquiry"
                      }
                      submitLabel={country.enquiryFormOptions?.submitLabel}
                      messageLabel={country.enquiryFormOptions?.messageLabel}
                      privacyReassurance={
                        country.enquiryFormOptions?.privacyReassurance
                      }
                      showInterest={
                        country.enquiryFormOptions?.showInterest
                      }
                    />
                  </Suspense>
                )}
              </div>
            </>
          ) : (
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                id="eligibility-docs"
                eyebrow="Requirements"
                title="Eligibility and application requirements"
              />
              <ul className="mt-6 space-y-2 text-sm text-brand-text-muted">
                {country.eligibility.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-brand-text-muted">
                Requirements can change by intake and institution—verify with
                official university and regulatory sources.
              </p>
            </div>
            <div
              className={
                hasUniversityFees
                  ? "rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
                  : ""
              }
            >
              <h3 className="text-lg font-semibold text-brand-teal-dark">
                Documents typically required
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-brand-text-muted">
                {country.documentsRequired.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-teal"
                      aria-hidden
                    />
                    {doc}
                  </li>
                ))}
              </ul>
              {!hasUniversityFees && !country.admissionStages && (
                <>
                  <h3 className="mt-8 text-lg font-semibold text-brand-teal-dark">
                    Admission steps (overview)
                  </h3>
                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-brand-text-muted">
                    {country.admissionSteps.map((step) => (
                      <li key={step} className="pl-1 leading-relaxed">{step}</li>
                    ))}
                  </ol>
                </>
              )}
            </div>
          </div>
          )}
          {country.admissionDetails && country.slug !== "germany" && (
            <div className="mt-12">
              <SectionHeading
                id={country.slug === "uzbekistan" ? "uzbekistan-advisory" : "admission-process"}
                eyebrow={country.slug === "uzbekistan" ? "Official guidance" : "Admission"}
                title={
                  country.admissionDetailsTitle ??
                  `${country.name} MBBS admission process`
                }
                description={country.admissionDetailsDescription ?? "University-specific requirements, funding options and the cost components to budget for."}
              />
              <div className="mt-8 overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
                <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
                  <thead className="bg-brand-teal-dark text-white">
                    <tr>
                      <th scope="col" className="w-56 px-5 py-4 font-semibold">
                        Section
                      </th>
                      <th scope="col" className="px-5 py-4 font-semibold">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border">
                    {country.admissionDetails.map((row) => (
                      <tr
                        key={row.section}
                        className="odd:bg-white even:bg-brand-muted/50"
                      >
                        <th
                          scope="row"
                          className="w-56 px-5 py-4 align-top font-medium text-brand-heading"
                        >
                          {row.section}
                        </th>
                        <td className="px-5 py-4 align-top">
                          <ul className="space-y-2">
                            {row.details.map((detail) => (
                              <li key={detail} className="flex gap-2">
                                <span
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                                  aria-hidden
                                />
                                <span className="leading-relaxed text-brand-text-muted">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                          {row.sources && (
                            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                              {row.sources.map((source) => (
                                <li key={source.href}>
                                  <a
                                    className="text-xs font-semibold text-brand-teal underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                                    href={source.href}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {source.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-brand-text-muted">
                Confirm current requirements with relevant official regulators
                and the institution before applying.
              </p>
            </div>
          )}

          {country.slug !== "kazakhstan" && country.slug !== "nepal" && country.admissionStages && (
            <div className="mt-12">
              <CountryAdmissionStages country={country} />
            </div>
          )}

          {country.universityFees &&
            !country.admissionDetails &&
            !country.admissionStages &&
            !country.admissionOverview && (
            <div className="mt-12">
              <SectionHeading
                id="admission-process"
                eyebrow="Admission"
                title={`${country.name} MBBS admission process`}
              />
              <ol className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {country.admissionSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 rounded-2xl border border-brand-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal-dark text-sm font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
                        Step {index + 1}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                        {step}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </Container>
      </section>
      )}

      {country.slug !== "germany" && <section className="bg-white py-12 sm:py-16" aria-labelledby="living">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              id="living"
              eyebrow="Student life"
              title="Living and accommodation"
            />
            <p
              className={`mt-6 leading-relaxed text-brand-text-muted ${country.universityFees ? "rounded-2xl border border-brand-border bg-brand-muted p-6" : ""}`}
            >
              {livingText}
            </p>
          </div>
          <div className={`relative aspect-[4/3] ${photoFrame}`}>
            <Image
              src={country.livingImage ?? heroImage}
              alt={country.livingImage ? "Medical team in a hospital corridor" : ""}
              fill
              className="photo-frame__img object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>}

      {country.considerations && (
        <section
          className="bg-brand-muted py-12 sm:py-16"
          aria-labelledby="country-considerations"
        >
          <Container>
            <SectionHeading
              id="country-considerations"
              eyebrow="Before you apply"
              title={`Things to consider while applying for MBBS in ${country.name}`}
              align="center"
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {country.considerations.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-brand-teal-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="bg-brand-muted py-12 sm:py-16" aria-labelledby="country-faq">
        <Container>
          <Reveal>
          <SectionHeading
            id="country-faq"
            eyebrow="FAQ"
            title={`${country.name} — frequently asked questions`}
            align="center"
          />
          <dl className="mx-auto mt-10 max-w-3xl space-y-6">
            {country.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
              >
                <dt className="font-semibold text-brand-teal-dark">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
          </Reveal>
        </Container>
      </section>

      {country.showVideoPlaceholder && (
        <CountryVideoPlaceholder countryName={country.name} />
      )}

      {country.showEnquiryForm && !country.eligibilityRows && (
        <section
          className="border-t border-brand-border bg-brand-muted py-12 sm:py-16"
          aria-labelledby="enquiry-form-title"
        >
          <Container className="max-w-3xl">
            <SectionHeading
              id="enquiry-form-title"
              eyebrow="Enquiry"
              title={
                country.enquiryFormTitle ??
                "Let’s Connect – Start Your Journey Abroad"
              }
              description={`Tell us about your plans for ${country.name} and we will respond as soon as we can.`}
              align="center"
            />
            <div className="mx-auto mt-8 max-w-3xl">
              <Suspense
                fallback={
                  <div
                    className="h-96 animate-pulse rounded-2xl border border-brand-border bg-white"
                    aria-hidden
                  />
                }
              >
                <ContactForm
                  countrySlug={country.slug}
                  title={country.enquiryFormTitle}
                  submitLabel={country.enquiryFormOptions?.submitLabel}
                  messageLabel={country.enquiryFormOptions?.messageLabel}
                  privacyReassurance={
                    country.enquiryFormOptions?.privacyReassurance
                  }
                  showInterest={country.enquiryFormOptions?.showInterest}
                />
              </Suspense>
            </div>
          </Container>
        </section>
      )}

      <section
        className="surface-dark relative isolate overflow-hidden bg-brand-teal py-12 sm:py-16"
        aria-labelledby="country-cta"
      >
        <ImageBackdrop src={country.livingImage ?? heroImage} />
        <Container className="relative text-center">
          <h2
            id="country-cta"
            className="type-display-2"
          >
            Ready to discuss MBBS in {country.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Speak with Medifaith Abroad for a personalised checklist and next
            steps—without obligation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={enquiryHref}>Send an enquiry</ButtonLink>
            <Link
              href={contact.callCtaHref}
              className="text-sm font-semibold text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Call {contact.phoneDisplay}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
