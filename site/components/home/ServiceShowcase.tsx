import Image from "next/image";
import {
  Award,
  BedDouble,
  ClipboardCheck,
  FileCheck,
  GraduationCap,
  HandCoins,
  Luggage,
  MessagesSquare,
  PlaneTakeoff,
  UserCheck,
} from "lucide-react";
import type { services } from "@/lib/content/home";
import type { ServicePageItem } from "@/lib/content/services";
import { servicePhotoAlt, servicePhotos } from "@/lib/content/home-images";
import { photoFrame } from "@/lib/design/photo-frame";

const serviceIcons = {
  careerCounseling: MessagesSquare,
  universitySelection: GraduationCap,
  admissionAssistance: ClipboardCheck,
  visaGuidance: FileCheck,
  visaProcessing: FileCheck,
  travelAssistance: PlaneTakeoff,
  accommodationSupport: BedDouble,
  preDepartureOrientation: Luggage,
  preDepartureSupport: PlaneTakeoff,
  postArrivalSupport: UserCheck,
  scholarshipGuidance: HandCoins,
  convocationSupport: Award,
};

type ServiceItem = (typeof services)[number];

type ServiceShowcaseProps =
  | { items: readonly ServiceItem[]; variant?: "rows" }
  | { items: readonly ServicePageItem[]; variant: "grid" };

export function ServiceShowcase(props: ServiceShowcaseProps) {
  if (props.variant === "grid") {
    return <ServiceGrid items={props.items} />;
  }

  return <ServiceRows items={props.items} />;
}

function ServiceRows({ items }: { items: readonly ServiceItem[] }) {
  return (
    <ul className="mt-8 flex flex-col gap-4 sm:gap-5 lg:gap-6">
      {items.map((service, index) => {
        const photo = servicePhotos[service.icon];
        const alt = servicePhotoAlt[service.icon];
        const imageFirst = index % 2 === 0;
        const ServiceIcon = serviceIcons[service.icon];

        return (
          <li
            key={service.title}
            className="card-glow-accent overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm"
          >
            <div
              className={`grid lg:grid-cols-2 lg:items-stretch ${
                imageFirst ? "" : "[&>div:first-child]:lg:order-2"
              }`}
            >
              <div
                className={`relative aspect-[16/10] sm:aspect-[2/1] lg:aspect-auto lg:min-h-[13.5rem] ${photoFrame}`}
              >
                <Image
                  src={photo}
                  alt={alt}
                  fill
                  quality={80}
                  className="photo-frame__img object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                />
              </div>
              <div className="flex flex-col justify-center px-4 py-4 sm:px-5 sm:py-5 lg:px-8 lg:py-6">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-border bg-[#edf9f7] text-[#0d4a4a] shadow-sm sm:h-14 sm:w-14"
                    aria-hidden="true"
                  >
                    <ServiceIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="type-display-3 text-brand-heading">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function ServiceGrid({ items }: { items: readonly ServicePageItem[] }) {
  return (
    <ul className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
      {items.map((service) => {
        const ServiceIcon = serviceIcons[service.icon];

        return (
          <li
            key={service.title}
            className="card-glow-accent flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm"
          >
            <div className={`relative aspect-[16/10] w-full shrink-0 ${photoFrame}`}>
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                quality={80}
                className="photo-frame__img object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5 lg:px-6">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-border bg-[#edf9f7] text-[#0d4a4a] shadow-sm sm:h-12 sm:w-12"
                  aria-hidden="true"
                >
                  <ServiceIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                </span>
                <h3 className="type-display-3 min-w-0 text-brand-heading">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-brand-text-muted">
                {service.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
