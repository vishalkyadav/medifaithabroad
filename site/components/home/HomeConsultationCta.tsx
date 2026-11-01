import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImageBackdrop } from "@/components/ui/ImageBackdrop";
import { CursorSpotlightZone } from "@/components/motion/CursorSpotlightZone";
import { contact } from "@/lib/contact";

type HomeConsultationCtaProps = {
  /** Optional photograph behind the CTA; falls back to the solid brand colour. */
  backgroundImage?: string;
};

export function HomeConsultationCta({
  backgroundImage,
}: HomeConsultationCtaProps = {}) {
  return (
    <CursorSpotlightZone
      className={`overflow-hidden bg-brand-midnight py-16 sm:py-20 ${
        backgroundImage ? "isolate" : ""
      }`}
      aria-labelledby="cta-heading"
      backdrop={
        backgroundImage ? <ImageBackdrop src={backgroundImage} /> : undefined
      }
    >
      <div
        className={`home-hero__glow pointer-events-none absolute inset-0 ${
          backgroundImage ? "opacity-40" : "opacity-80"
        }`}
        aria-hidden
      />
      <Container className="surface-dark relative text-center">
        <p className="type-eyebrow text-brand-gold">Start your journey</p>
        <h2 id="cta-heading" className="type-display-2 mt-3">
          Ready to start your MBBS abroad journey?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
          Call us to talk through your options, or send an enquiry any time.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <ButtonLink href={contact.callCtaHref} variant="primary">
            Call us now
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-white/80">
          <a
            href={`mailto:${contact.email}`}
            className="underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
          <span className="mx-2" aria-hidden>·</span>
          <a
            href={contact.callCtaHref}
            className="underline-offset-4 hover:underline"
          >
            {contact.phoneDisplay}
          </a>
        </p>
        {contact.instagramHandle && (
          <p className="mt-2 text-sm text-white/70">
            Instagram: {contact.instagramHandle}
          </p>
        )}
      </Container>
    </CursorSpotlightZone>
  );
}
