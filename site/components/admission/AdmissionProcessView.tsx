import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { ImageBackdrop } from "@/components/ui/ImageBackdrop";
import { contact } from "@/lib/contact";
import {
  admissionFaqs,
  admissionProcessHero,
  admissionTimeline,
  documentChecklist,
  documentChecklistNote,
} from "@/lib/content/admission-process";
import { siteImages } from "@/lib/content/site-images";
import { Reveal } from "@/components/motion/Reveal";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/StaggerGroup";
import { countries, studyDestinationsId } from "@/lib/navigation";

export function AdmissionProcessView() {
  return (
    <>
      <PhotoHero
        imageSrc={siteImages.admissionHero}
        imageAlt={admissionProcessHero.imageAlt}
        imageClassName="object-cover object-center"
      >
        <div className="max-w-2xl">
          <p className="type-eyebrow tracking-widest text-brand-gold">
            How we work
          </p>
          <h1 className="type-display-1 mt-3">
            {admissionProcessHero.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            {admissionProcessHero.subtitle}
          </p>
          <div className="mt-8">
            <ButtonLink href={contact.contactPageHref}>
              Book counselling
            </ButtonLink>
          </div>
        </div>
      </PhotoHero>

      <section className="bg-white py-12 sm:py-16" aria-labelledby="timeline-heading">
        <Container>
          <SectionHeading
            id="timeline-heading"
            eyebrow="Steps"
            title="Your journey with Medifaith Abroad"
            align="center"
          />
          <StaggerGroup
            as="ol"
            className="mx-auto mt-12 max-w-3xl"
          >
            {admissionTimeline.map((item, index) => (
              <StaggerItem
                key={item.step}
                index={index}
                as="li"
                className="relative grid gap-4 pb-12 pl-12 last:pb-0 sm:grid-cols-[auto_1fr] sm:gap-8 sm:pl-0"
              >
                {index < admissionTimeline.length - 1 && (
                  <span
                    className="absolute left-[1.15rem] top-12 hidden h-[calc(100%-2rem)] w-px bg-brand-border sm:left-[1.75rem] sm:block"
                    aria-hidden
                  />
                )}
                <div
                  className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-teal-dark sm:relative sm:left-auto sm:h-14 sm:w-14 sm:text-lg"
                  aria-hidden
                >
                  {item.step}
                </div>
                <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-teal-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section
        className="bg-brand-muted py-12 sm:py-16"
        aria-labelledby="checklist-heading"
      >
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              id="checklist-heading"
              eyebrow="Documents"
              title="General document checklist"
            />
            <p className="mt-4 text-sm leading-relaxed text-brand-text-muted">
              {documentChecklistNote}
            </p>
          </div>
          <ul className="space-y-3 text-sm text-brand-text-muted">
            {documentChecklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16" aria-labelledby="admission-faq">
        <Container>
          <Reveal>
          <SectionHeading
            id="admission-faq"
            eyebrow="FAQ"
            title="Common questions"
            align="center"
          />
          <dl className="mx-auto mt-10 max-w-3xl space-y-6">
            {admissionFaqs.map((faq) => (
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

      <section
        className="surface-dark relative isolate overflow-hidden bg-brand-teal-dark py-12 sm:py-16"
        aria-labelledby="admission-cta"
      >
        <ImageBackdrop src={siteImages.admissionHero} />
        <Container className="relative text-center">
          <h2 id="admission-cta" className="type-display-2">
            Ready to start your application planning?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Contact us for a personalised checklist, or explore study destinations
            on our homepage.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={contact.contactPageHref}>Contact us</ButtonLink>
            <Link
              href={`/#${studyDestinationsId}`}
              className="text-sm font-semibold text-brand-gold underline-offset-4 hover:underline"
            >
              View destinations
            </Link>
          </div>
          <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2 text-sm">
            {countries.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/contact?country=${encodeURIComponent(c.slug)}`}
                  className="rounded-full border border-white/25 px-3 py-1 text-white/90 transition-colors hover:border-brand-gold hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
