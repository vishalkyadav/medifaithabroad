import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "MBBS Abroad Consultancy",
  description:
    "Expert guidance for studying MBBS abroad—university selection, applications, visas, and personalised support from Medifaith Abroad.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Medifaith Abroad | MBBS Abroad Consultancy",
    description:
      "Expert guidance for studying MBBS abroad—admissions, visas, and support for international medical universities.",
    url: siteUrl,
    siteName: "Medifaith Abroad",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden">
      <HomePage />
    </main>
  );
}
