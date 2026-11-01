import Image from "next/image";
import type { TeamMemberProfile } from "@/lib/content/home";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/StaggerGroup";
import { photoFrame } from "@/lib/design/photo-frame";

type TeamMemberGridProps = {
  members: TeamMemberProfile[];
  className?: string;
};

export function TeamMemberGrid({ members, className = "" }: TeamMemberGridProps) {
  return (
    <StaggerGroup
      as="ul"
      className={`mx-auto grid w-full grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 ${className}`}
    >
      {members.map((member, index) => (
        <StaggerItem key={member.id} index={index} as="li">
          <article
            className="card-glow-accent group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border/80 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1"
          >
            <div
              className={`relative aspect-[4/3] bg-brand-sand ${photoFrame} ${
                member.isPlaceholder ? "border-b border-dashed border-brand-border" : ""
              }`}
            >
              {member.imageSrc ? (
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  fill
                  className="photo-frame__img object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div
                  className="flex h-full flex-col items-center justify-center px-4 text-center"
                  role="img"
                  aria-label={member.imageAlt}
                >
                  <span
                    className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-brand-border bg-brand-sky text-xs font-medium text-brand-text-muted"
                  >
                    Photo
                  </span>
                  <p className="mt-3 text-xs text-brand-text-muted">
                    Owner to supply verified portrait
                  </p>
                </div>
              )}
              <span
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-gold transition-[width] duration-300 group-hover:w-full"
                aria-hidden
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="font-semibold text-brand-heading">
                {member.name}
                {member.isPlaceholder && (
                  <span className="ml-1 text-xs font-normal text-brand-text-muted">
                    (placeholder)
                  </span>
                )}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-navy">{member.role}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-text-muted">
                {member.bio}
              </p>
            </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
