import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CountryPageView } from "@/components/country/CountryPageView";
import {
  getCountryBySlug,
  publishedCountrySlugs,
} from "@/lib/content/countries";
import { siteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedCountrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) {
    return {};
  }

  const canonical = `${siteUrl}/countries/${slug}`;

  return {
    title: country.seo.title,
    description: country.seo.description,
    alternates: { canonical },
    openGraph: {
      title: `${country.seo.title} | Medifaith Abroad`,
      description: country.seo.description,
      url: canonical,
      type: "website",
    },
  };
}

function CountryPageFallback() {
  return (
    <main className="flex flex-1 flex-col" aria-busy="true" aria-live="polite">
      <div className="border-b border-brand-border bg-brand-muted py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-36 max-w-full rounded bg-brand-border/80" />
          <div className="mt-4 h-10 max-w-lg rounded bg-brand-border/80 sm:h-12" />
          <div className="mt-5 h-16 max-w-2xl rounded bg-brand-border/60" />
        </div>
      </div>
    </main>
  );
}

async function CountryPageContent({ params }: PageProps) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col">
      <CountryPageView country={country} />
    </main>
  );
}

export default function CountryPage({ params }: PageProps) {
  return (
    <Suspense fallback={<CountryPageFallback />}>
      <CountryPageContent params={params} />
    </Suspense>
  );
}
