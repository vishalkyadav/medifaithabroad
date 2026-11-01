import Image from "next/image";
import Link from "next/link";
import { BedDouble, FileCheck, GraduationCap, MessagesSquare } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Reveal } from "@/components/motion/Reveal";
import {
  aboutCare,
  aboutChairman,
  aboutCountries,
  aboutCta,
  aboutHero,
  aboutMissionVision,
  aboutProcess,
  aboutStats,
  aboutStory,
  aboutStudentSupport,
  aboutTeam,
} from "@/lib/content/about-page";
import { countryHref, isCountryPageLive } from "@/lib/navigation";
import { photoFrame } from "@/lib/design/photo-frame";

const processIcons = [MessagesSquare, GraduationCap, FileCheck, BedDouble];

export function AboutPageView() {
  return (
    <>
      {/* 1 — Hero */}
      <PhotoHero
        imageSrc={aboutHero.imageSrc}
        imageAlt={aboutHero.imageAlt}
        imageClassName="object-cover object-center"
        minHeightClass="min-h-[34rem] sm:min-h-[40rem] lg:min-h-[calc(100svh-var(--header-height))]"
      >
        <div className="max-w-3xl">
          <h1 className="type-display-1">
            {aboutHero.titlePrefix}{" "}
            <strong className="font-bold text-brand-gold">
              {aboutHero.titleEmphasis}
            </strong>{" "}
            {aboutHero.titleSuffix}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            {aboutHero.subtitle}
          </p>
        </div>
      </PhotoHero>

      {/* 2 — Countries We Serve */}
      <section
        className="bg-brand-teal-dark py-10 sm:py-12"
        aria-labelledby="about-countries-heading"
      >
        <Container>
          <h2
            id="about-countries-heading"
            className="text-center text-3xl font-semibold text-white sm:text-4xl"
          >
            {aboutCountries.title}
          </h2>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-5 lg:gap-6">
            {aboutCountries.flags.map((flag) => {
              const live = isCountryPageLive(flag.slug);
              const visual = (
                <>
                  <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white/25 transition-transform duration-300 group-hover:scale-105 group-hover:ring-brand-gold sm:h-20 sm:w-20">
                    <Image
                      src={flag.src}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </span>
                  <span className="sr-only">{flag.label}</span>
                </>
              );

              return (
                <li key={flag.slug} className="shrink-0">
                  {live ? (
                    <Link
                      href={countryHref(flag.slug)}
                      className="group block rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
                      aria-label={`${flag.label} — view MBBS abroad country guide`}
                    >
                      {visual}
                    </Link>
                  ) : (
                    <span
                      className="group block"
                      role="img"
                      aria-label={`${flag.label} — country guide coming soon`}
                    >
                      {visual}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* 3 — Our Mission and Our Vision */}
      <section
        className="bg-white py-14 sm:py-20"
        aria-labelledby="about-mission-heading"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <article>
                <p className="type-eyebrow text-brand-gold">
                  {aboutMissionVision.mission.eyebrow}
                </p>
                <h2
                  id="about-mission-heading"
                  className="type-display-2 mt-2 text-brand-heading"
                >
                  {aboutMissionVision.mission.title}
                </h2>
                <p className="mt-4 leading-relaxed text-brand-text-muted">
                  {aboutMissionVision.mission.body}
                </p>
              </article>

              <hr className="my-8 max-w-md border-brand-border" />

              <article>
                <p className="type-eyebrow text-brand-gold">
                  {aboutMissionVision.vision.eyebrow}
                </p>
                <h2 className="type-display-2 mt-2 text-brand-heading">
                  {aboutMissionVision.vision.title}
                </h2>
                <p className="mt-4 leading-relaxed text-brand-text-muted">
                  {aboutMissionVision.vision.body}
                </p>
              </article>
            </div>

            <div className="flex flex-col items-center">
              <div
                className={`relative mx-auto aspect-[914/1308] w-[68%] ${photoFrame} rounded-2xl bg-brand-sky`}
              >
                <Image
                  src={aboutChairman.portraitSrc}
                  alt={aboutChairman.portraitAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 60vw, 320px"
                />
              </div>
              <p className="mt-5 text-center text-2xl font-bold text-brand-heading sm:text-[1.7rem]">
                {aboutChairman.name}
              </p>
              <p className="mt-1 text-center text-lg font-semibold text-brand-navy">
                {aboutChairman.role}
              </p>
              <p className="mt-1 text-center text-sm text-brand-text-muted">
                {aboutChairman.company}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 — Meet Our Team */}
      <section
        className="bg-[#f3faf6] py-14 sm:py-20"
        aria-labelledby="about-team-heading"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="type-eyebrow text-brand-gold">{aboutTeam.eyebrow}</p>
              <h2
                id="about-team-heading"
                className="type-display-2 mt-2 text-brand-heading"
              >
                {aboutTeam.title}
              </h2>
              <p className="mt-4 leading-relaxed text-brand-text-muted">
                {aboutTeam.intro}
              </p>
            </div>
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutTeam.members.map((member) => (
              <li key={member.name}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border/70 bg-white p-3 text-center shadow-sm">
                  <div className="relative aspect-[387/460] overflow-hidden rounded-xl bg-brand-sky">
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-brand-heading">
                    {member.name}
                  </h3>
                  <p className="mt-1 pb-1 text-sm text-brand-text-muted">
                    {member.role}
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <ButtonLink href={aboutTeam.ctaHref}>{aboutTeam.ctaLabel}</ButtonLink>
          </div>
        </Container>
      </section>

      {/* 5 — Our Story */}
      <section
        className="bg-white py-14 sm:py-20"
        aria-labelledby="about-story-heading"
      >
        <Container>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div>
                <p className="type-eyebrow text-brand-gold">{aboutStory.eyebrow}</p>
                <h2
                  id="about-story-heading"
                  className="type-display-2 mt-2 text-brand-heading"
                >
                  {aboutStory.title}
                </h2>
              </div>
              <div className="space-y-5 leading-relaxed text-brand-text-muted">
                {aboutStory.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div
              className={`relative mt-10 aspect-[2560/640] w-full overflow-hidden rounded-2xl bg-brand-sky ${photoFrame}`}
            >
              <Image
                src={aboutStory.imageSrc}
                alt={aboutStory.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 6 — Company Statistics */}
      <section className="bg-brand-teal-dark py-10 sm:py-12" aria-label="Company statistics">
        <Container>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse text-center"
              >
                <dt className="mt-3 text-sm text-white/80">{stat.label}</dt>
                <dd className="text-5xl font-bold leading-none text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 7 — We Care to Guide You Best */}
      <section
        className="bg-white py-14 sm:py-20"
        aria-labelledby="about-care-heading"
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <h2
                id="about-care-heading"
                className="type-display-2 text-brand-heading"
              >
                {aboutCare.title}
              </h2>
              <p className="mt-2 text-lg font-semibold text-brand-navy">
                {aboutCare.subtitle}
              </p>
              <div className="mt-6 space-y-4 leading-relaxed text-brand-text-muted">
                {aboutCare.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div
              className={`relative mx-auto aspect-[684/1024] w-full max-w-sm overflow-hidden rounded-2xl bg-brand-sky ${photoFrame}`}
            >
              <Image
                src={aboutCare.imageSrc}
                alt={aboutCare.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 80vw, 380px"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 8 — Our Process */}
      <section
        className="bg-brand-teal-dark py-14 sm:py-20"
        aria-labelledby="about-process-heading"
      >
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="type-eyebrow text-brand-gold">
                {aboutProcess.eyebrow}
              </p>
              <h2
                id="about-process-heading"
                className="type-display-2 mt-2 text-white"
              >
                {aboutProcess.title}
              </h2>
            </div>

            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {aboutProcess.steps.map((step, index) => {
                const Icon = processIcons[index];
                return (
                  <li
                    key={step.title}
                    className="flex h-full flex-col items-center rounded-2xl bg-[#f3faf6] p-6 text-center"
                  >
                    <Icon
                      className="h-9 w-9 text-brand-heading"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <h3 className="mt-4 text-lg font-semibold text-brand-heading">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                      {step.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* 9 — Student Support */}
      <section
        className="bg-white py-14 sm:py-20"
        aria-labelledby="about-support-heading"
      >
        <Container>
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div
                className={`relative aspect-[939/626] w-full overflow-hidden rounded-2xl bg-brand-sky ${photoFrame}`}
              >
                <Image
                  src={aboutStudentSupport.imageSrc}
                  alt={aboutStudentSupport.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>

              <div>
                <p className="type-eyebrow text-brand-gold">
                  {aboutStudentSupport.eyebrow}
                </p>
                <h2
                  id="about-support-heading"
                  className="type-display-2 mt-2 text-brand-heading"
                >
                  {aboutStudentSupport.title}
                </h2>
                <p className="mt-4 leading-relaxed text-brand-text-muted">
                  {aboutStudentSupport.bodyBefore}
                  <strong>{aboutStudentSupport.bodyEmphasis}</strong>
                  {aboutStudentSupport.bodyAfter}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 10 — Final call to action */}
      <section className="relative isolate overflow-hidden" aria-labelledby="about-cta-heading">
        <Image
          src={aboutCta.imageSrc}
          alt={aboutCta.imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-midnight/70" aria-hidden />
        <Container className="relative py-16 sm:py-20">
          <div className="ml-auto max-w-2xl">
            <h2
              id="about-cta-heading"
              className="type-display-2 text-white"
            >
              {aboutCta.title}
            </h2>
            <p className="mt-4 text-lg text-white/90">{aboutCta.body}</p>
            <div className="mt-7">
              <ButtonLink href={aboutCta.ctaHref}>{aboutCta.ctaLabel}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
