import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { contact } from "@/lib/contact";
import { homeImages } from "@/lib/content/home-images";
import { hero, heroFloatingCards } from "@/lib/content/home";
import { studyDestinationsId } from "@/lib/navigation";
import { CursorSpotlightZone } from "@/components/motion/CursorSpotlightZone";

export function HomeHero() {
  return (
    <CursorSpotlightZone
      className="home-hero overflow-x-hidden bg-brand-midnight"
      aria-labelledby="hero-heading"
    >
      <div className="home-hero__glow pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative py-8 sm:py-10 lg:py-14 xl:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div className="hero-enter surface-dark max-w-xl lg:max-w-none">
            <p className="type-eyebrow text-brand-gold">MBBS abroad consultancy</p>
            <h1 id="hero-heading" className="type-display-1 mt-3 text-white">
              Your Gateway to Studying{" "}
              <span className="text-brand-gold">MBBS Abroad</span>
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-white/88 sm:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={contact.callCtaHref}>Call us now</ButtonLink>
              <ButtonLink
                href={`#${studyDestinationsId}`}
                variant="outline"
                className="border-white/35 bg-transparent text-white hover:border-white/60 hover:bg-white/10 hover:text-white"
              >
                Explore countries
              </ButtonLink>
            </div>
            <ul
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/78"
              aria-label="What we help with"
            >
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" aria-hidden />
                Admissions counselling
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" aria-hidden />
                Visa documentation
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" aria-hidden />
                Pre-departure planning
              </li>
            </ul>
          </div>

          <div className="hero-media-enter relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="relative aspect-[5/4] max-h-[min(72vw,22rem)] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_48px_rgb(7_26_53/0.45)] sm:max-h-none sm:aspect-[4/5] lg:aspect-[5/6]"
            >
              <Image
                src={homeImages.heroFeature}
                alt={hero.imageAlt}
                fill
                priority
                fetchPriority="high"
                quality={92}
                className="hero-feature__photo object-cover"
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 720px"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-midnight/40 via-transparent to-transparent"
                aria-hidden
              />

              <ul className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
                {heroFloatingCards.map((card, index) => (
                  <li
                    key={card.title}
                    className={`hero-float-card hero-float-card--${index} absolute max-w-[10.5rem] rounded-xl border border-white/20 bg-brand-midnight/55 px-3 py-2.5 shadow-lg backdrop-blur-sm sm:max-w-[11.5rem] sm:px-3.5 sm:py-3`}
                    style={{
                      ...(card.top ? { top: card.top } : {}),
                      ...(card.left ? { left: card.left } : {}),
                      ...(card.right ? { right: card.right } : {}),
                      ...(card.bottom ? { bottom: card.bottom } : {}),
                    }}
                  >
                    <span className="mb-1 block h-0.5 w-6 rounded-full bg-brand-gold" />
                    <p className="text-xs font-semibold leading-snug text-white sm:text-sm">
                      {card.title}
                    </p>
                    <p className="mt-0.5 text-[0.6875rem] leading-snug text-white/78 sm:text-xs">
                      {card.subtitle}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-3 grid grid-cols-1 gap-2 sm:hidden">
              {heroFloatingCards.map((card) => (
                <li
                  key={card.title}
                  className="rounded-lg border border-white/15 bg-brand-navy-deep/90 px-3 py-2.5"
                >
                  <p className="text-sm font-semibold text-white">{card.title}</p>
                  <p className="text-xs text-white/78">{card.subtitle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </CursorSpotlightZone>
  );
}
