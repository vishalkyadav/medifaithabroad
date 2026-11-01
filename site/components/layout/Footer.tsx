import Link from "next/link";
import { contact, hasPublicAddress } from "@/lib/contact";
import {
  countries,
  countryHref,
  footerNav,
  isCountryPageLive,
} from "@/lib/navigation";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="surface-dark mt-auto border-t border-brand-border bg-brand-midnight">
      <Container className="py-12 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-lg font-semibold tracking-tight">
              Medifaith Abroad
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              MBBS abroad consultancy — expert guidance for admissions,
              visas, and your medical career abroad.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/85 transition-colors duration-300 hover:text-brand-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Study destinations
            </h2>
            <ul className="mt-4 columns-2 gap-x-4 space-y-2 sm:columns-1">
              {countries.map((country) => (
                <li key={country.slug} className="break-inside-avoid">
                  {isCountryPageLive(country.slug) ? (
                    <Link
                      href={countryHref(country.slug)}
                      className="text-sm text-white/85 transition-colors duration-300 hover:text-brand-gold"
                    >
                      {country.label}
                    </Link>
                  ) : (
                    <span className="text-sm text-white/50">
                      {country.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              {hasPublicAddress() && contact.address && (
                <li>
                  <span className="block text-white/60">Address</span>
                  {contact.address}
                </li>
              )}
              <li>
                <span className="block text-white/60">Email</span>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="block text-white/60">Phone</span>
                <a
                  href={contact.callCtaHref}
                  className="transition-colors hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-center text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© Medifaith Abroad. All rights reserved.</p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end"
          >
            <a
              href="https://medifaithabroad.com/privacy-policy/"
              className="transition-colors hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Privacy Policy
            </a>
            <a
              href="https://medifaithabroad.com/terms-of-service/"
              className="transition-colors hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
