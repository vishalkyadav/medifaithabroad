import type { Metadata } from "next";
import { Suspense } from "react";
import { Figtree, Manrope } from "next/font/google";
import { LeadPopup } from "@/components/contact/LeadPopup";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionInit } from "@/components/motion/MotionInit";
import { BackToTop } from "@/components/ui/BackToTop";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Medifaith Abroad | MBBS Abroad Consultancy",
    template: "%s | Medifaith Abroad",
  },
  description:
    "Expert guidance for studying MBBS abroad — admissions, visas, and support for international medical universities.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-brand-text-muted">
        <MotionInit />
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <Suspense fallback={null}>
          <LeadPopup />
        </Suspense>
      </body>
    </html>
  );
}
