import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "./SectionHeading";
import { TeamMemberGrid } from "./TeamMemberGrid";
import { Reveal } from "@/components/motion/Reveal";
import { teamHome, teamMembers } from "@/lib/content/home";

export function HomeTeamSection() {
  return (
    <section
      id="team"
      className="scroll-mt-24 bg-brand-sky py-12 sm:py-16"
      aria-labelledby="team-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="team-heading"
            eyebrow={teamHome.eyebrow}
            title={teamHome.title}
            description={teamHome.description}
            align="center"
          />
          <TeamMemberGrid members={teamMembers} className="mt-10" />
          <p className="mt-8 text-center">
            <ButtonLink href="/about#team" variant="outline">
              Meet the full team on About
            </ButtonLink>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
