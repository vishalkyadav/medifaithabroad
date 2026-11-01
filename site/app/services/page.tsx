import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShowcase } from "@/components/home/ServiceShowcase";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { contact } from "@/lib/contact";
import { servicesIntro } from "@/lib/content/home";
import { servicesPage } from "@/lib/content/services";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MBBS abroad consultancy services including university selection, applications, visas, and pre-departure support.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PhotoHero
        imageSrc={siteImages.servicesHero}
        imageAlt="Student support environment — Medifaith Abroad services"
        imageClassName="object-cover object-center"
      >
        <div className="max-w-2xl">
          <p className="type-eyebrow tracking-widest text-brand-gold">
            What we offer
          </p>
          <h1 className="type-display-1 mt-3">Our services</h1>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            End-to-end support for students planning to study medicine abroad.
          </p>
          <div className="mt-8">
            <ButtonLink href={contact.contactPageHref}>Enquire now</ButtonLink>
          </div>
        </div>
      </PhotoHero>

      <section
        className="bg-brand-muted py-12 sm:py-16"
        aria-labelledby="services-list"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="services-list"
              eyebrow="Consultancy"
              title="Comprehensive MBBS abroad support"
              description={servicesIntro}
              align="center"
            />
            <div className="mx-auto max-w-6xl">
              <ServiceShowcase items={servicesPage} variant="grid" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="rounded-2xl border border-brand-border bg-brand-muted p-6 sm:p-8">
            <h2 className="type-display-3 text-brand-teal-dark">
              Ready to discuss your options?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-brand-text-muted">
              Speak with our counsellors about destinations, documents, and
              timelines—without obligation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={contact.contactPageHref}>Contact us</ButtonLink>
              <Link
                href="/admission-process"
                className="inline-flex items-center text-sm font-semibold text-brand-teal underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
              >
                Admission process
              </Link>
              <Link
                href="/"
                className="inline-flex items-center text-sm font-semibold text-brand-teal underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
              >
                Back to home
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
