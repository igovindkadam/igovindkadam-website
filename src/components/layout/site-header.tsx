"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { primaryRoutes, siteIdentity, siteRoutes } from "@/lib/site";
import { SiteLogo } from "@/components/brand/site-logo";
import { ThemeToggle } from "@/components/theme-toggle";

function isActiveRoute(href: string, pathname: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Sticky site header with primary nav, theme toggle, and full section index. */
export function SiteHeader() {
  const pathname = usePathname();
  const [indexOpen, setIndexOpen] = useState(false);

  useEffect(() => {
    if (!indexOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIndexOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [indexOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-midnight/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label={`${siteIdentity.name} — home`}
        >
          <SiteLogo height={32} priority />
          <span className="hidden min-w-0 flex-col leading-tight min-[420px]:flex">
            <span className="truncate font-display text-base font-bold text-midnight dark:text-white">
              {siteIdentity.owner}
            </span>
            <span className="truncate text-xs text-slate-500 dark:text-slate-400">
              {siteIdentity.positioning}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
          {primaryRoutes.map((route) => {
            const active = isActiveRoute(route.href, pathname);
            return (
              <Link
                key={route.href}
                href={route.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-slate-100 text-midnight dark:bg-midnight-soft dark:text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-midnight dark:text-slate-300 dark:hover:bg-midnight-soft dark:hover:text-white"
                }`}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <button
            type="button"
            onClick={() => setIndexOpen((open) => !open)}
            aria-expanded={indexOpen}
            aria-controls="site-index"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-scientific hover:text-midnight dark:border-slate-700 dark:text-slate-300 dark:hover:border-scientific dark:hover:text-white"
          >
            {indexOpen ? <X className="size-4" /> : <LayoutGrid className="size-4" />}
            <span className="hidden sm:inline">All sections</span>
            <span className="sr-only">Toggle full site index</span>
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIndexOpen((open) => !open)}
            aria-expanded={indexOpen}
            aria-controls="site-index"
            aria-label="Toggle navigation menu"
            className="inline-flex size-9 items-center justify-center rounded-md border border-slate-300 text-slate-600 transition-colors hover:border-scientific hover:text-midnight lg:hidden dark:border-slate-700 dark:text-slate-300 dark:hover:border-scientific dark:hover:text-white"
          >
            {indexOpen ? <Menu className="size-4 rotate-90" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {indexOpen ? (
        <div
          id="site-index"
          className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-midnight"
        >
          <nav
            aria-label="All sections"
            className="mx-auto grid max-w-6xl gap-1 px-4 py-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3"
          >
            {siteRoutes.map((route) => {
              const Icon = route.icon;
              const active = isActiveRoute(route.href, pathname);
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIndexOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                    active
                      ? "bg-slate-100 dark:bg-midnight-soft"
                      : "hover:bg-slate-100 dark:hover:bg-midnight-soft"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md ${
                      active
                        ? "bg-scientific text-midnight"
                        : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-200"
                    }`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-midnight dark:text-white">
                      {route.label}
                    </span>
                    <span className="block text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      {route.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
