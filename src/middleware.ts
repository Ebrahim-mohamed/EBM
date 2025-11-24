import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /dashboard exactly to /dashboard/projects
  if (pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/dashboard/projects", request.url));
  }

  // Allow dashboard login and other dashboard paths freely
  if (pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  // Apply intl middleware for other routes
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
