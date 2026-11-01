import type { Metadata } from "next";
import { AdmissionProcessView } from "@/components/admission/AdmissionProcessView";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admission process",
  description:
    "Learn how Medifaith Abroad supports MBBS abroad applicants—from counselling and documents to university applications, visas, and pre-departure planning.",
  alternates: {
    canonical: `${siteUrl}/admission-process`,
  },
};

export default function AdmissionProcessPage() {
  return (
    <main className="flex-1">
      <AdmissionProcessView />
    </main>
  );
}
