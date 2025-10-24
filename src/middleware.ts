import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all paths EXCEPT:
    // - /api, /trpc, /_next, /_vercel, any file, and /dashboard
    "/((?!api|trpc|_next|_vercel|.*\\..*|dashboard).*)",
  ],
};
