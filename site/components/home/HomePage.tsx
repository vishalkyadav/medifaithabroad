import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeImages } from "@/lib/content/home-images";
import {
  admissionSteps,
  mission,
  services,
  servicesIntro,
  testimonials,
  vision,
  whyChoose,
} from "@/lib/content/home";
import { countries, studyDestinationsId } from "@/lib/navigation";
import { Reveal } from "@/components/motion/Reveal";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/StaggerGroup";
import { photoFrame } from "@/lib/design/photo-frame";
import { CountryGridItem } from "./CountryGridItem";
import { HomeHero } from "./HomeHero";
import { HomeLeadershipSection } from "./HomeLeadershipSection";
import { HomeConsultationCta } from "./HomeConsultationCta";
import { ServiceShowcase } from "./ServiceShowcase";
import { SectionHeading } from "./SectionHeading";
import { TrustStrip } from "./TrustStrip";
import { HomeStudentFamilySlideshow } from "./HomeStudentFamilySlideshow";
import { ChinaScholarshipSection } from "./ChinaScholarshipSection";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />

      <ChinaScholarshipSection showCta />

      <section
        id={studyDestinationsId}
        className="scroll-mt-24 border-b border-brand-border bg-white py-12 sm:py-16"
        aria-labelledby="countries-heading"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="countries-heading"
              eyebrow="Study destinations"
              title="Countries we serve"
              description="Explore our country guides for eligibility, process, and planning topics.Choose Country to study MBBS abroad."
              align="center"
            />
            <ul
              className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-11 xl:gap-3"
            >
              {countries.map((country) => (
                <li key={country.slug} className="min-w-0">
                  <CountryGridItem country={country} />
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section
        className="bg-brand-sky py-12 sm:py-16"
        aria-labelledby="services-heading"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="services-heading"
              eyebrow="Our services"
              title="Comprehensive MBBS abroad consultancy"
              description={servicesIntro}
              align="center"
            />
            <div className="mx-auto max-w-4xl">
              <ServiceShowcase items={services} />
            </div>
            <div className="mt-8 text-center">
              <ButtonLink href="/services" variant="outline">
                View all services
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        className="bg-brand-sand py-12 sm:py-16"
        aria-labelledby="why-heading"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="why-heading"
              eyebrow="Why MediFaith Abroad"
              title="Your launchpad to a global medical career"
              description="From university selection to visa support, we focus on a clear, student-first process."
              align="center"
            />
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {whyChoose.map((item) => (
                <li
                  key={item.title}
                  className="card-glow-accent rounded-xl border border-brand-border/80 bg-white/60 p-5 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span
                    className="mb-3 block h-1 w-8 rounded-full bg-brand-gold"
                    aria-hidden
                  />
                  <h3 className="font-semibold text-brand-heading">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section
        className="bg-white py-12 sm:py-16"
        aria-labelledby="mission-vision"
      >
        <Container>
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div
                className={`relative aspect-[16/9] rounded-2xl ${photoFrame}`}
              >
                <Image
                  src={homeImages.missionVision}
                  alt="Vision and mission graphic used on the Medifaith Abroad reference website"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-8">
                <h2 id="mission-vision" className="sr-only">
                  Mission and vision
                </h2>
                <article>
                  <p className="type-eyebrow text-brand-gold">{mission.title}</p>
                  <p className="mt-3 text-lg leading-relaxed text-brand-text-muted">
                    {mission.body}
                  </p>
                </article>
                <article className="border-l-4 border-brand-gold pl-6">
                  <p className="type-eyebrow text-brand-navy">{vision.title}</p>
                  <p className="mt-3 text-lg leading-relaxed text-brand-heading">
                    {vision.body}
                  </p>
                </article>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        className="bg-white py-12 sm:py-16"
        aria-labelledby="process-heading"
      >
        <Container>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className={`relative aspect-[4/3] lg:order-2 ${photoFrame} rounded-2xl`}>
                <Image
                  src={homeImages.studentLounge}
                  alt="Student studying in a modern lounge"
                  fill
                  className="photo-frame__img object-cover object-[center_30%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="lg:order-1">
                <SectionHeading
                  id="process-heading"
                  eyebrow="Admission process"
                  title="Four steps from counselling to departure"
                  description="A typical pathway for MBBS abroad planning. Requirements vary by country and university."
                />
                <StaggerGroup as="ol" className="mt-8 space-y-6">
                  {admissionSteps.map((item, index) => (
                    <StaggerItem
                      key={item.step}
                      index={index}
                      as="li"
                      className="flex gap-4"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white"
                        aria-hidden
                      >
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-semibold text-brand-heading">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">
                          {item.description}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
                <ButtonLink href="/admission-process" variant="outline" className="mt-8">
                  Full admission guide
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <HomeLeadershipSection />

      <section
        className="bg-brand-sand py-12 sm:py-16"
        aria-labelledby="testimonials-heading"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="testimonials-heading"
              eyebrow="Student feedback"
              title="What students say"
              description="Reviews published on the Medifaith Abroad reference website."
              align="center"
            />
            <ul className="mt-12 grid gap-6 md:grid-cols-2">
              {testimonials.map((item) => (
                <li
                  key={item.name}
                  className="flex h-full flex-col rounded-2xl border border-brand-border bg-brand-sky/40 p-8 shadow-sm"
                >
                  <blockquote className="flex-1 text-base leading-relaxed text-brand-heading">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-5 border-t border-brand-border pt-4 text-sm font-semibold text-brand-navy">
                    {item.name}
                  </footer>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section
        className="bg-brand-sky py-12 sm:py-16"
        aria-labelledby="student-family-photos-heading"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="student-family-photos-heading"
              eyebrow="Student moments"
              title="Students and families on their journey"
              description="Travel-day photos shared from student and family send-offs."
              align="center"
            />
            <div className="mt-8 sm:mt-10">
              <HomeStudentFamilySlideshow />
            </div>
          </Reveal>
        </Container>
      </section>

      <HomeConsultationCta
        backgroundImage={homeImages.studentdreams}
      />
    </>
  );
}
