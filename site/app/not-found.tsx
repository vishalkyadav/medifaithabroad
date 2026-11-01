import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col py-16 sm:py-24">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold text-brand-teal-dark sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-brand-text-muted">
          The page you requested is not available. Check the URL or return to
          the homepage.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <Link
            href="/contact"
            className="text-sm font-semibold text-brand-teal underline-offset-4 hover:underline"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </main>
  );
}
