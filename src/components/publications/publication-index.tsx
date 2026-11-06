"use client";

import Link from "next/link";
import { ArrowRight, FileText, ScrollText } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import {
  buildCitation,
  publicationStatusMeta,
  publicationTypeMeta,
} from "@/data/publications";
import type { PublicationMeta } from "@/lib/content-model";
import { matchesQuery } from "@/lib/content-model";

/**
 * Publications collection with title/keyword search plus type, status, and
 * year filters. Filters render only when genuine entries exist; otherwise
 * an academic empty state stands in their place.
 */
export function PublicationIndex({ entries }: { entries: PublicationMeta[] }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");
  const [year, setYear] = useState("all");

  const years = useMemo(
    () =>
      [...new Set(entries.map((entry) => entry.year).filter((y): y is number => y !== undefined))].sort(
        (a, b) => b - a,
      ),
    [entries],
  );

  const filtered = useMemo(
    () =>
      entries.filter(
        (entry) =>
          (type === "all" || entry.pubType === type) &&
          (status === "all" || entry.status === status) &&
          (year === "all" || entry.year === Number(year)) &&
          matchesQuery(
            [entry.title, entry.venue, ...entry.authors, ...entry.keywords],
            query,
          ),
      ),
    [entries, query, type, status, year],
  );

  const selectClass =
    "rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-midnight dark:border-slate-600 dark:bg-midnight dark:text-white";

  return (
    <div id="collection" className="scroll-mt-20">
      <Reveal>
        <SectionHeading
          id="collection-heading"
          eyebrow="The collection"
          title="Publications"
          description="Every entry carries only verified metadata — titles, venues, identifiers, and links appear solely when genuinely confirmed."
        />
      </Reveal>

      {entries.length === 0 ? (
        <Reveal>
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-center sm:p-12 dark:border-slate-600">
            <ScrollText aria-hidden className="mx-auto size-10 text-slate-400" />
            <h3 className="mt-4 font-display text-xl font-bold text-midnight dark:text-white">
              No verified publications yet
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
              Papers, preprints, and reports will appear here with full
              citations, identifiers, and links — only once their details
              are confirmed. Nothing is listed on speculation.
            </p>
          </div>
        </Reveal>
      ) : (
        <>
          <Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label className="flex flex-col gap-1.5 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
                Search
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Titles, authors, venues…"
                  className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-normal normal-case text-midnight placeholder:text-slate-400 dark:border-slate-600 dark:bg-midnight dark:text-white"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
                Type
                <select
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                  className={selectClass}
                >
                  <option value="all">All types</option>
                  {Object.entries(publicationTypeMeta).map(([id, meta]) => (
                    <option key={id} value={id}>
                      {meta.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
                Status
                <select
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                  className={selectClass}
                >
                  <option value="all">All statuses</option>
                  {Object.entries(publicationStatusMeta).map(([id, meta]) => (
                    <option key={id} value={id}>
                      {meta.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
                Year
                <select
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                  className={selectClass}
                >
                  <option value="all">All years</option>
                  {years.map((entry) => (
                    <option key={entry} value={entry}>
                      {entry}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <p className="mt-8 rounded-xl border border-slate-200 p-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
              No publications match this combination. Clear a filter to
              browse everything.
            </p>
          ) : (
            <ul className="mt-8 space-y-4">
              {filtered.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    href={`/publications/${entry.slug}`}
                    className="group flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-scientific sm:gap-5 sm:p-6 dark:border-slate-700 dark:bg-midnight-soft dark:hover:border-scientific"
                  >
                    <span
                      aria-hidden
                      className="hidden size-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-research sm:flex dark:bg-midnight dark:text-scientific"
                    >
                      <FileText className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-semibold tracking-wide uppercase">
                          {publicationTypeMeta[entry.pubType].label}
                        </span>
                        {entry.year !== undefined ? (
                          <span aria-hidden>·</span>
                        ) : null}
                        {entry.year !== undefined ? <span>{entry.year}</span> : null}
                        <span aria-hidden>·</span>
                        <span>{publicationStatusMeta[entry.status].label}</span>
                      </span>
                      <span className="mt-1.5 block font-display text-lg leading-snug font-bold text-midnight group-hover:underline group-hover:decoration-scientific group-hover:decoration-2 group-hover:underline-offset-4 dark:text-white">
                        {entry.title}
                      </span>
                      <span className="mt-1 block text-sm text-slate-600 dark:text-slate-300">
                        {entry.authors.join(", ")}
                        {entry.venue ? ` — ${entry.venue}` : ""}
                      </span>
                      <span className="mt-2 block text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                        {buildCitation(entry)}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-research dark:text-scientific-soft">
                        View publication
                        <ArrowRight
                          aria-hidden
                          className="size-4 transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
