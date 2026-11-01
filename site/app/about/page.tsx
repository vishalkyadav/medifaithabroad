import type { Metadata } from "next";
import { AboutPageView } from "@/components/about/AboutPageView";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Medifaith Abroad and our MBBS abroad counselling services.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutPageView />
    </main>
  );
}
