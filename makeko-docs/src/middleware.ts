import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/config/site";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip construction page for itself and API routes
  const excludedPaths = ["/under-construction", "/api"];
  if (excludedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Redirect to construction page if enabled
  if (siteConfig.underConstruction) {
    return NextResponse.redirect(new URL("/under-construction", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (e.g., public/*)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
