"use client";

import Link from "next/link";
import { ArrowRight, SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { ResearchStatusPill } from "@/components/research/research-status";
import {
  domainById,
  researchDomains,
  researchKindMeta,
  researchStatusMeta,
} from "@/data/research";
import type { ResearchMeta } from "@/lib/content-model";
import { matchesQuery } from "@/lib/content-model";

/**
 * Searchable research index. Search, domain, kind, and status filters render
 * only when entries exist — with an empty collection the section shows an
 * honest empty state instead of useless controls.
 */
export function ResearchIndex({ entries }: { entries: ResearchMeta[] }) {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("all");
  const [kind, setKind] = useState("all");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(
    () =>
      entries.filter(
        (entry) =>
          (domain === "all" || entry.domains.includes(domain)) &&
          (kind === "all" || entry.kind === kind) &&
          (status === "all" || entry.status === status) &&
          matchesQuery(
            [entry.title, entry.subtitle, entry.abstract, ...entry.keywords],
            query,
          ),
      ),
    [entries, query, domain, kind, status],
  );

  const selectClass =
    "rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-midnight dark:border-slate-600 dark:bg-midnight dark:text-white";

  return (
    <div id="index" className="scroll-mt-20">
      <Reveal>
        <SectionHeading
          id="index-heading"
          eyebrow="The collection"
          title="Research index"
          description="Investigations, notes, essays, reviews, and reports — searchable by topic, domain, kind, and status as the collection grows."
        />
      </Reveal>

      {entries.length === 0 ? (
        <Reveal>
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-center sm:p-12 dark:border-slate-600">
            <SearchX aria-hidden className="mx-auto size-10 text-slate-400" />
            <h3 className="mt-4 font-display text-xl font-bold text-midnight dark:text-white">
              No research entries yet
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
              The index lists genuine investigations and notes only. Nothing
              is invented to fill it — the first owner-provided entry will
              appear here with its domain, kind, and status.
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
                  placeholder="Topics, titles, keywords…"
                  className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-normal normal-case text-midnight placeholder:text-slate-400 dark:border-slate-600 dark:bg-midnight dark:text-white"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
                Domain
                <select
                  value={domain}
                  onChange={(event) => setDomain(event.target.value)}
                  className={selectClass}
                >
                  <option value="all">All domains</option>
                  {researchDomains.map((entry) => (
                    <option key={entry.id} value={entry.id}>
                      {entry.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
                Kind
                <select
                  value={kind}
                  onChange={(event) => setKind(event.target.value)}
                  className={selectClass}
                >
                  <option value="all">All kinds</option>
                  {Object.entries(researchKindMeta).map(([id, meta]) => (
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
                  {Object.entries(researchStatusMeta).map(([id, meta]) => (
                    <option key={id} value={id}>
                      {meta.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <p className="mt-8 rounded-xl border border-slate-200 p-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
              No entries match this combination. Clear a filter to browse
              everything.
            </p>
          ) : (
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {filtered.map((entry) => (
                <li key={entry.slug} className="h-full">
                  <Link
                    href={`/research/${entry.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-scientific dark:border-slate-700 dark:bg-midnight-soft dark:hover:border-scientific"
                  >
                    <span className="flex flex-wrap items-center gap-2">
                      <ResearchStatusPill status={entry.status} />
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {researchKindMeta[entry.kind].label}
                      </span>
                    </span>
                    <span className="mt-2 block font-display text-lg font-bold text-midnight group-hover:underline group-hover:decoration-scientific group-hover:decoration-2 group-hover:underline-offset-4 dark:text-white">
                      {entry.title}
                    </span>
                    {entry.abstract ? (
                      <span className="mt-1.5 block text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {entry.abstract}
                      </span>
                    ) : null}
                    <span className="mt-3 block text-xs text-slate-500 dark:text-slate-400">
                      {entry.domains
                        .map((id) => domainById(id)?.name ?? id)
                        .join(" · ")}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-research dark:text-scientific-soft">
                      Read entry
                      <ArrowRight
                        aria-hidden
                        className="size-4 transition-transform group-hover:translate-x-1"
                      />
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
