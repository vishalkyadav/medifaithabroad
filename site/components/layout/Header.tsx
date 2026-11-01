"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/lib/contact";
import {
  countries,
  countryHref,
  isCountryPageLive,
  mainNav,
} from "@/lib/navigation";
import { Container } from "./Container";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const [countriesOpen, setCountriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCountriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="rounded-md px-3 py-2 text-sm font-medium text-brand-heading transition-colors duration-300 hover:bg-brand-sky hover:text-brand-navy"
        >
          {item.label}
        </Link>
      ))}
      {onNavigate ? (
        <div className="mt-1 border-t border-brand-border pt-3">
          <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-text-muted">
            Countries
          </p>
          <ul className="max-h-48 overflow-y-auto">
            {countries.map((country) => {
              const live = isCountryPageLive(country.slug);
              if (!live) {
                return (
                  <li key={country.slug}>
                    <span className="block px-3 py-2 text-sm text-brand-text-muted">
                      {country.label}
                    </span>
                  </li>
                );
              }
              return (
                <li key={country.slug}>
                  <Link
                    href={countryHref(country.slug)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-brand-heading hover:bg-brand-sky"
                    onClick={onNavigate}
                  >
                    {country.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-brand-heading transition-colors duration-300 hover:bg-brand-sky hover:text-brand-navy"
            aria-expanded={countriesOpen}
            aria-haspopup="true"
            onClick={() => setCountriesOpen((open) => !open)}
          >
            Countries
            <ChevronIcon open={countriesOpen} />
          </button>
          {countriesOpen && (
            <div
              className="absolute left-0 top-full z-50 mt-2 max-h-[min(24rem,70vh)] min-w-[15rem] overflow-y-auto rounded-xl border border-brand-border bg-white py-2 shadow-xl ring-1 ring-black/5"
              role="menu"
            >
              {countries.map((country) => {
                const live = isCountryPageLive(country.slug);
                const className =
                  "block px-4 py-2 text-sm transition-colors hover:bg-brand-muted " +
                  (live
                    ? "text-brand-heading hover:text-brand-navy"
                    : "text-brand-text-muted cursor-default");

                if (!live) {
                  return (
                    <span
                      key={country.slug}
                      role="menuitem"
                      className={className}
                      title="Country guide coming soon"
                    >
                      {country.label}
                      <span className="sr-only"> — coming soon</span>
                    </span>
                  );
                }

                return (
                  <Link
                    key={country.slug}
                    href={countryHref(country.slug)}
                    role="menuitem"
                    className={className}
                    onClick={() => {
                      setCountriesOpen(false);
                    }}
                  >
                    {country.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.2 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.1 9.9a16 16 0 006 6l1.26-1.26a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-brand-border bg-white/98 shadow-md backdrop-blur-md"
          : "border-transparent bg-white/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/85"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Medifaith Abroad home"
          >
            <Image
              src="/images/medifaith-logo.png"
              alt=""
              width={44}
              height={44}
              className="h-9 w-9 object-contain"
            />
            <span className="text-lg font-bold tracking-tight text-brand-teal-dark sm:text-xl">
              Medifaith Abroad
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            <NavLinks />
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={contact.callCtaHref}
              className="btn-motion hidden items-center gap-1.5 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-midnight shadow-sm hover:bg-brand-gold-hover sm:inline-flex"
            >
              <PhoneIcon />
              Call us now
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-heading hover:bg-brand-sky lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="border-t border-brand-border bg-white lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            <NavLinks onNavigate={() => setMobileOpen(false)} />
            <a
              href={contact.callCtaHref}
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-midnight"
              onClick={() => setMobileOpen(false)}
            >
              <PhoneIcon />
              Call us now
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
