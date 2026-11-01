import { trustStripItems } from "@/lib/content/home";
import { Container } from "@/components/layout/Container";

function StripIcon({ name }: { name: (typeof trustStripItems)[number]["icon"] }) {
  if (name === "globe") {
    return (
      <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6-4 9s1.5 6.2 4 9" />
      </svg>
    );
  }
  if (name === "document") {
    return (
      <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M8 4h8l4 4v12H8V4z" />
        <path d="M16 4v4h4" />
      </svg>
    );
  }
  if (name === "visa") {
    return (
      <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 11h4M7 14h2" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function TrustStrip() {
  return (
    <section
      className="border-y border-white/10 bg-brand-navy-deep"
      aria-label="How MediFaith Abroad supports students"
    >
      <Container className="py-8 sm:py-9">
        <ul className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {trustStripItems.map((item) => (
            <li key={item.title} className="flex gap-3 sm:gap-4">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10"
                aria-hidden
              >
                <StripIcon name={item.icon} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white sm:text-base">{item.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-white/70 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
