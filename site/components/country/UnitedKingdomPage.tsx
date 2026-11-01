import Image from "next/image";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { BenefitIcon } from "@/components/home/BenefitIcon";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { contact } from "@/lib/contact";
import { photoFrame } from "@/lib/design/photo-frame";
import type { CountryPageContent } from "@/lib/content/countries/types";
import { CountryVideoPlaceholder } from "./CountryVideoPlaceholder";
import { ViewCollegesTab } from "./ViewCollegesTab";

type UnitedKingdomPageProps = {
  country: CountryPageContent;
};

function UniversityFeeTable({
  fees,
}: {
  fees: NonNullable<CountryPageContent["universityFees"]>;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
      <table className="w-full min-w-[60rem] border-collapse text-left text-sm">
        <thead className="bg-brand-teal-dark text-white">
          <tr>
            <th scope="col" className="px-5 py-4 font-semibold">
              University
            </th>
            <th scope="col" className="px-5 py-4 font-semibold">
              Tuition Fees (Annual)
            </th>
            <th scope="col" className="px-5 py-4 font-semibold">
              Teaching Language
            </th>
            <th scope="col" className="px-5 py-4 font-semibold">
              Hostel Facilities
            </th>
            <th scope="col" className="px-5 py-4 font-semibold">
              Type
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-border">
          {fees.map((fee) => (
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
              <td className="px-5 py-4 align-top text-brand-text-muted">
                {fee.tuition}
              </td>
              <td className="px-5 py-4 align-top text-brand-text-muted">
                {fee.teachingLanguage ?? "Not available in source data"}
              </td>
              <td className="px-5 py-4 align-top text-brand-text-muted">
                {fee.hostel}
              </td>
              <td className="whitespace-nowrap px-5 py-4 align-top text-brand-text-muted">
                {fee.type ?? "Not available in source data"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CountryTrustStrip({ country }: UnitedKingdomPageProps) {
  if (!country.countryTrustPoints) return null;

  return (
    <section
      className="border-y border-white/10 bg-black"
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

export function UnitedKingdomPage({ country }: UnitedKingdomPageProps) {
  const heroImage = country.heroImage ?? "/images/University-Unitedkingdom.png";
  const feeGroups = [
    {
      title: "Top 25 UK Universities Offering MBBS",
      fees:
        country.universityFees?.filter((fee) => fee.tableGroup === "Public") ?? [],
    },
    {
      title: "Private Universities",
      fees:
        country.universityFees?.filter((fee) => fee.tableGroup === "Private") ?? [],
    },
  ].filter((group) => group.fees.length > 0);

  return (
    <>
      <PhotoHero
        imageSrc={heroImage}
        imageAlt="University campus in the United Kingdom"
        imageClassName="object-cover object-center"
        minHeightClass="min-h-[28rem] sm:min-h-[32rem]"
      >
        <div className="max-w-2xl">
          <p className="type-eyebrow tracking-widest text-brand-gold">
            Study destination
          </p>
          <h1 id="country-hero-title" className="type-display-1 mt-3">
            {country.heroTitle}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            {country.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {(country.heroActions ?? []).map((action) => {
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

      <section className="bg-white py-12 sm:py-16" aria-labelledby="country-intro">
        <Container className="max-w-3xl">
          <h2 id="country-intro" className="sr-only">
            Introduction
          </h2>
          <p className="text-lg leading-relaxed text-brand-text-muted">
            {country.introduction}
          </p>
        </Container>
      </section>

      {country.universityFees && (
        <>
          <ViewCollegesTab
            targetId="university-fees"
            side={country.collegesTabSide}
            tone={country.collegesTabTone}
          />
          <section
            id="university-fees"
            className="scroll-mt-24 bg-brand-muted py-12 sm:py-16"
            aria-labelledby="university-fees-title"
          >
            <Container>
              <SectionHeading
                id="university-fees-title"
                eyebrow=""
                title={country.feeSectionTitle ?? "MBBS in United Kingdom – Colleges Fee Structure"}
                description={country.feeSectionDescription}
              />
              <div className="mt-8 space-y-10">
                {feeGroups.map((group) => (
                  <section key={group.title} aria-labelledby={`fees-${group.title.toLowerCase().replaceAll(" ", "-")}`}>
                    <h3
                      id={`fees-${group.title.toLowerCase().replaceAll(" ", "-")}`}
                      className="mb-4 text-xl font-bold text-brand-teal-dark sm:text-2xl"
                    >
                      {group.title}
                    </h3>
                    <UniversityFeeTable fees={group.fees} />
                  </section>
                ))}
              </div>
              {country.feeDataNote && (
                <p className="mt-5 text-sm leading-relaxed text-brand-text-muted">
                  {country.feeDataNote}
                </p>
              )}
            </Container>
          </section>
        </>
      )}

      <CountryTrustStrip country={country} />

      <section
        className="bg-brand-muted py-12 sm:py-16"
        aria-labelledby="admission-details-title"
      >
        <Container>
          <SectionHeading
            id="admission-details-title"
            eyebrow="Admission"
            title={country.admissionDetailsTitle ?? "MBBS Admission in UK"}
            description="Requirements and selection steps vary by university, course and application cycle."
          />
          {country.admissionDetails && (
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a
              className="font-semibold text-brand-teal underline underline-offset-4"
              href="https://www.gov.uk/student-visa"
              target="_blank"
              rel="noreferrer"
            >
              GOV.UK Student visa guidance
            </a>
            <a
              className="font-semibold text-brand-teal underline underline-offset-4"
              href="https://www.gov.uk/student-visa/money"
              target="_blank"
              rel="noreferrer"
            >
              GOV.UK student visa financial requirements
            </a>
            <a
              className="font-semibold text-brand-teal underline underline-offset-4"
              href="https://www.buckingham.ac.uk/courses/undergraduate/mb-chb-medicine-4.5-year-degree/"
              target="_blank"
              rel="noreferrer"
            >
              University of Buckingham MB ChB course information
            </a>
          </div>
        </Container>
      </section>

      {country.competitiveEdge && (
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
                eyebrow="Study medicine"
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

      {country.showVideoPlaceholder && (
        <>
          {/* TODO: Add UK introduction video here */}
          <CountryVideoPlaceholder />
        </>
      )}

      {country.showEnquiryForm && (
        <section
          className="border-t border-brand-border bg-brand-muted py-12 sm:py-16"
          aria-labelledby="enquiry-form-title"
        >
          <Container className="max-w-3xl">
            <SectionHeading
              id="enquiry-form-title"
              eyebrow="Enquiry"
              title={country.enquiryFormTitle ?? "Enquire about studying medicine in the UK"}
              description="Tell us about your plans for the United Kingdom and we will respond as soon as we can."
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
            <p className="mt-4 text-center text-sm text-brand-text-muted">
              Call us at{" "}
              <a className="font-semibold underline" href={contact.callCtaHref}>
                {contact.phoneDisplay}
              </a>{" "}
              if you prefer to speak with us.
            </p>
          </Container>
        </section>
      )}
    </>
  );
}
