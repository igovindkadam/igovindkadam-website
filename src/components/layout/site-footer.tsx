import Link from "next/link";
import { siteIdentity, siteRoutes } from "@/lib/site";
import { SiteLogo } from "@/components/brand/site-logo";
import { FooterYear } from "@/components/layout/footer-year";

/** Site footer with full sitemap and identity note. */
export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center gap-3">
            <SiteLogo height={40} />
            <p className="font-display text-lg font-bold text-midnight dark:text-white">
              {siteIdentity.owner}
            </p>
          </div>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {siteIdentity.positioning}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {siteIdentity.description}
          </p>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            Featured project:{" "}
            <span className="font-semibold text-midnight dark:text-white">
              {siteIdentity.featuredProject}
            </span>{" "}
            · Ecosystem:{" "}
            <span className="font-semibold text-midnight dark:text-white">
              {siteIdentity.ecosystem}
            </span>
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
          {siteRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="rounded py-1 text-sm text-slate-600 transition-colors hover:text-scientific dark:text-slate-300 dark:hover:text-scientific-soft"
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 dark:text-slate-400">
          <p>
            © <FooterYear /> {siteIdentity.owner}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Foundation release — content sections are placeholders.</span>
            <a
              href="https://github.com/igovindkadam/igovindkadam-website"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded underline decoration-slate-300 underline-offset-2 hover:text-scientific dark:decoration-slate-600 dark:hover:text-scientific-soft"
            >
              Website source on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
