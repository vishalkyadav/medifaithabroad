import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactOptions } from "@/components/contact/ContactOptions";
import { ContactMapSection } from "@/components/contact/ContactMapSection";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/motion/Reveal";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { contact } from "@/lib/contact";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Medifaith Abroad for MBBS abroad counselling and admissions support.",
};

function ContactFormFallback() {
  return (
    <div
      className="h-96 animate-pulse rounded-2xl border border-brand-border bg-brand-muted"
      aria-hidden
    />
  );
}

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PhotoHero
        imageSrc={siteImages.contactHero}
        imageAlt="Students at an airport — preparing for study abroad"
        imageClassName="object-cover object-center"
      >
        <div className="max-w-2xl">
          <p className="type-eyebrow tracking-widest text-brand-gold">
            Get in touch
          </p>
          <h1 className="type-display-1 mt-3">
            Contact Medifaith Abroad
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            Schedule a consultation or ask about universities, visas, and next
            steps. We respond to enquiries as quickly as we can.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={contact.callCtaHref}>Call now</ButtonLink>
            <ButtonLink
              href={`mailto:${contact.email}`}
              variant="outline"
              className="border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              Email us
            </ButtonLink>
          </div>
        </div>
      </PhotoHero>

      <section className="bg-brand-muted py-12 sm:py-16" aria-labelledby="contact-options">
        <Container>
          <Reveal>
            <h2
              id="contact-options"
              className="type-display-2 text-center text-brand-teal-dark"
            >
              How to reach us
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-brand-text-muted">
              Choose the channel that works best for you.
            </p>
            <div className="mt-10">
              <ContactOptions />
            </div>
          </Reveal>
        </Container>
      </section>

      <ContactMapSection />

      <section
        className="border-t border-brand-border bg-white py-12 sm:py-16"
        aria-labelledby="contact-form-section"
      >
        <Container className="max-w-3xl">
          <h2 id="contact-form-section" className="sr-only">
            Enquiry form
          </h2>
          <Suspense fallback={<ContactFormFallback />}>
            <ContactForm />
          </Suspense>
        </Container>
      </section>
    </main>
  );
}
