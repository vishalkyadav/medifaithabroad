import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { chinaScholarships } from "@/lib/content/home";
import type { ChinaScholarshipReview } from "@/lib/content/countries/china";
import { SectionHeading } from "./SectionHeading";

type ChinaScholarshipSectionProps = {
  /** Renders the gold "Know More" button (homepage usage). */
  showCta?: boolean;
  /** Student review boxes with the automatic right-to-left slide (China page). */
  reviews?: readonly ChinaScholarshipReview[];
};

export function ChinaScholarshipSection({
  showCta,
  reviews,
}: ChinaScholarshipSectionProps) {
  return (
    <section
      className="bg-brand-sky py-12 sm:py-16"
      aria-labelledby="china-scholarships-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="china-scholarships-heading"
            eyebrow={chinaScholarships.eyebrow}
            title={chinaScholarships.title}
            align="center"
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {chinaScholarships.points.map((point, index) => (
              <li
                key={point.title}
                className="card-glow-accent flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 font-semibold text-brand-heading">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                  {point.description}
                </p>
              </li>
            ))}
          </ul>

          {reviews && reviews.length > 0 && (
            <ScholarshipReviewMarquee reviews={reviews} />
          )}

          {showCta && (
            <div className="mt-8 text-center">
              <ButtonLink href={chinaScholarships.ctaHref}>
                {chinaScholarships.ctaLabel}
              </ButtonLink>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

/**
 * Small review boxes — student name, then college/university, then course —
 * on a track that auto-slides from right to left (see `.review-marquee-*` in
 * app/globals.css).
 * The track holds two identical copies so the loop is seamless; the second
 * copy is hidden from assistive technology and the animation stops for
 * reduced-motion users.
 */
function ScholarshipReviewMarquee({
  reviews,
}: {
  reviews: readonly ChinaScholarshipReview[];
}) {
  return (
    <div className="mt-10">
      <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-brand-teal">
        Student reviews
      </h3>
      <div className="review-marquee-viewport mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)]">
        <div className="review-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex gap-4 pr-4"
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              {reviews.map((item, index) => (
                <figure
                  key={`${copy}-${index}`}
                  className="flex w-72 shrink-0 flex-col rounded-2xl border border-brand-border bg-white p-5 shadow-sm sm:w-80"
                >
                  <figcaption>
                    <p className="text-sm font-semibold text-brand-teal-dark">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-brand-text-muted">
                      {item.college}
                    </p>
                    <p className="mt-3 border-t border-brand-border pt-2 text-xs font-semibold text-brand-navy">
                      {item.course}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
