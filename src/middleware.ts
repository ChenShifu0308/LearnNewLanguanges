import createMiddleware from "next-intl/middleware";
import { Language } from "./data/languages";

export default createMiddleware({
  // A list of all locales that are supported
  locales: Object.values(Language),

  // Used when no locale matches
  defaultLocale: Object.values(Language)[0],
});

/* Return '/(zh|en|es)/:path*' like string */
const getMatchingLocale = (languages: string[]) => {
  let matcher = `/(${languages.join("|")})/:path*`;
  console.log("getMatchingLocale:" + matcher);
  return matcher;
};

const matcher = getMatchingLocale(Object.values(Language));

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    "/(en|zh|es|fr|de|it|ja|ko|pt|ru)/:path*",
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
