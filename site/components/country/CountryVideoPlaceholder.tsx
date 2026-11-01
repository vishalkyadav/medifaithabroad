import { Container } from "@/components/layout/Container";

type CountryVideoPlaceholderProps = {
  countryName?: string;
  /** Optional country-specific video; falls back to the shared introduction clip. */
  src?: string;
};

const defaultVideoSrc = "/videos/russia-introduction.mp4";

export function CountryVideoPlaceholder({
  countryName = "Country",
  src = defaultVideoSrc,
}: CountryVideoPlaceholderProps) {
  return (
    <section
      className="bg-white py-12 sm:py-16"
      aria-label={`${countryName} introduction video`}
    >
      <Container>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-brand-border bg-brand-muted">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </Container>
    </section>
  );
}
