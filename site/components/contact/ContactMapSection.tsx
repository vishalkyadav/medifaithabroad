import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { contact } from "@/lib/contact";

export function ContactMapSection() {
  return (
    <section className="border-t border-brand-border bg-brand-muted py-12 sm:py-16" aria-labelledby="office-locations-heading">
      <Container>
        <Reveal>
          <h2 id="office-locations-heading" className="type-display-2 text-center text-brand-teal-dark">
            Our office locations
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {contact.offices.map((office) => {
              const query = encodeURIComponent(office.address);
              return (
                <article key={office.name} className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm">
                  <iframe
                    title={`Map showing ${office.name}`}
                    src={`https://maps.google.com/maps?q=${query}&output=embed`}
                    className="h-64 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-brand-heading">{office.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">{office.address}</p>
                    <a
                      className="mt-3 inline-flex text-sm font-semibold text-brand-teal underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                      href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
