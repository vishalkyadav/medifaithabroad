import { NextResponse, type NextRequest } from "next/server";
import { isPublishedCountrySlug } from "@/lib/content/countries";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/countries/")) {
    return NextResponse.next();
  }

  const rawSlug = pathname.slice("/countries/".length).split("/")[0];
  if (!rawSlug) {
    return NextResponse.next();
  }

  const slug = decodeURIComponent(rawSlug).toLowerCase();
  if (!isPublishedCountrySlug(slug)) {
    const url = request.nextUrl.clone();
    url.pathname = "/not-found";
    url.search = "";
    return NextResponse.rewrite(url, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/countries/:slug"],
};
