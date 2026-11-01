import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/motion/Reveal";
import { leadership, leadershipHome } from "@/lib/content/home";
import { homeImages } from "@/lib/content/home-images";
import { photoFrame } from "@/lib/design/photo-frame";

export function HomeLeadershipSection() {
  return (
    <section
      className="relative overflow-hidden bg-brand-sky py-12 sm:py-16"
      aria-labelledby="leadership-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-8 h-64 w-64 rounded-full bg-brand-gold/15 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div
              className={`card-glow-accent relative mx-auto aspect-[3/4] w-full max-w-md ${photoFrame} rounded-2xl border border-brand-border/60 bg-white shadow-lg lg:mx-0`}
            >
              <div className="absolute -left-2 top-8 z-10 hidden h-24 w-1 rounded-full bg-brand-gold lg:block" aria-hidden />
              <Image
                src={homeImages.leadershipPortrait}
                alt={leadership.portraitAlt}
                fill
                className="photo-frame__img object-contain object-top bg-white"
                sizes="(max-width: 1024px) 85vw, 420px"
              />
            </div>

            <div className="max-w-xl lg:max-w-none">
              <p className="type-eyebrow text-brand-gold">{leadershipHome.eyebrow}</p>
              <h2
                id="leadership-heading"
                className="type-display-2 mt-2 text-brand-heading"
              >
                {leadershipHome.title}{" "}
                <span className="text-brand-gold">{leadershipHome.titleAccent}</span>
              </h2>
              <p className="mt-2 text-sm font-semibold text-brand-navy">
                {leadership.name} · {leadership.role}
                <span className="sr-only"> (reference site listing — confirm with owner)</span>
              </p>
              <span
                className="mt-5 mb-1 block h-1 w-12 rounded-full bg-brand-gold"
                aria-hidden
              />
              <p className="mt-4 text-base leading-relaxed text-brand-text-muted">
                {leadershipHome.message}
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-heading">
                {leadershipHome.visionLine}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-text-muted/90">
                {leadershipHome.ownerNote}
              </p>
              <div className="mt-8">
                <ButtonLink href={leadershipHome.ctaHref} variant="outline">
                  {leadershipHome.ctaLabel}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
