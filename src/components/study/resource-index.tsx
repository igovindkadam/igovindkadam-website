"use client";

import Link from "next/link";
import { ArrowRight, SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import {
  studyDifficultyMeta,
  studyResourceTypeMeta,
  studyStatusMeta,
  studySubjectById,
  studySubjects,
} from "@/data/study-materials";
import type { StudyMaterialMeta, StudyStatus } from "@/lib/content-model";
import { matchesQuery } from "@/lib/content-model";

const statusDot: Record<StudyStatus, string> = {
  published: "bg-emerald-600 dark:bg-emerald-400",
  "in-progress": "bg-scientific",
  archived: "bg-slate-300 dark:bg-slate-600",
};

/** Status pill for study resources. */
export function StudyStatusPill({ status }: { status: StudyStatus }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-slate-600 dark:border-slate-600 dark:text-slate-300">
      <span aria-hidden className={`size-1.5 rounded-full ${statusDot[status]}`} />
      {studyStatusMeta[status].label}
    </span>
  );
}

type SortOrder = "newest" | "alphabetical";

/**
 * Searchable resource index. Controls render only when resources exist;
 * the difficulty filter appears only when some entry defines a difficulty.
 */
export function ResourceIndex({ entries }: { entries: StudyMaterialMeta[] }) {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("all");
  const [resourceType, setResourceType] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState<SortOrder>("newest");

  const hasDifficulty = useMemo(
    () => entries.some((entry) => entry.difficulty !== undefined),
    [entries],
  );

  const filtered = useMemo(() => {
    const list = entries.filter(
      (entry) =>
        (subject === "all" || entry.subject === subject) &&
        (resourceType === "all" || entry.resourceType === resourceType) &&
        (difficulty === "all" || entry.difficulty === difficulty) &&
        (status === "all" || entry.status === status) &&
        matchesQuery(
          [entry.title, entry.subtitle, entry.description, ...entry.topics],
          query,
        ),
    );
    list.sort((a, b) =>
      sort === "newest"
        ? b.created.localeCompare(a.created)
        : a.title.localeCompare(b.title),
    );
    return list;
  }, [entries, query, subject, resourceType, difficulty, status, sort]);

  const selectClass =
    "rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-midnight dark:border-slate-600 dark:bg-midnight dark:text-white";
  const labelClass =
    "flex flex-col gap-1.5 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400";

  return (
    <div id="index" className="scroll-mt-20">
      <Reveal>
        <SectionHeading
          id="index-heading"
          eyebrow="The collection"
          title="Resource index"
          description="Notes, guides, tutorials, and references — searchable by subject, type, and status as genuine resources are added."
        />
      </Reveal>

      {entries.length === 0 ? (
        <Reveal>
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-center sm:p-12 dark:border-slate-600">
            <SearchX aria-hidden className="mx-auto size-10 text-slate-400" />
            <h3 className="mt-4 font-display text-xl font-bold text-midnight dark:text-white">
              The shelves are empty — for now
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
              This library lists genuine owner-written resources only. Nothing
              is generated to fill it — the first published notes, guides, or
              tutorials will appear here with their subject, type, and status.
            </p>
          </div>
        </Reveal>
      ) : (
        <>
          <Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <label className={labelClass}>
                Search
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Titles, topics, descriptions…"
                  className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-normal normal-case text-midnight placeholder:text-slate-400 dark:border-slate-600 dark:bg-midnight dark:text-white"
                />
              </label>
              <label className={labelClass}>
                Subject
                <select
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  className={selectClass}
                >
                  <option value="all">All subjects</option>
                  {studySubjects.map((entry) => (
                    <option key={entry.id} value={entry.id}>
                      {entry.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className={labelClass}>
                Resource type
                <select
                  value={resourceType}
                  onChange={(event) => setResourceType(event.target.value)}
                  className={selectClass}
                >
                  <option value="all">All types</option>
                  {Object.entries(studyResourceTypeMeta).map(([id, meta]) => (
                    <option key={id} value={id}>
                      {meta.label}
                    </option>
                  ))}
                </select>
              </label>
              {hasDifficulty ? (
                <label className={labelClass}>
                  Difficulty
                  <select
                    value={difficulty}
                    onChange={(event) => setDifficulty(event.target.value)}
                    className={selectClass}
                  >
                    <option value="all">All levels</option>
                    {Object.entries(studyDifficultyMeta).map(([id, meta]) => (
                      <option key={id} value={id}>
                        {meta.label}
                      </option>
                    ))}
                  </select>
                </label>
              ) : null}
              <label className={labelClass}>
                Status
                <select
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                  className={selectClass}
                >
                  <option value="all">All statuses</option>
                  {Object.entries(studyStatusMeta).map(([id, meta]) => (
                    <option key={id} value={id}>
                      {meta.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className={labelClass}>
                Sort
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value as SortOrder)}
                  className={selectClass}
                >
                  <option value="newest">Newest first</option>
                  <option value="alphabetical">Alphabetical</option>
                </select>
              </label>
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <p className="mt-8 rounded-xl border border-slate-200 p-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
              No resources match this combination. Clear a filter to browse
              everything.
            </p>
          ) : (
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {filtered.map((entry) => (
                <li key={entry.slug} className="h-full">
                  <Link
                    href={`/study-materials/${entry.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-scientific dark:border-slate-700 dark:bg-midnight-soft dark:hover:border-scientific"
                  >
                    <span className="flex flex-wrap items-center gap-2">
                      <StudyStatusPill status={entry.status} />
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {studyResourceTypeMeta[entry.resourceType].label}
                      </span>
                    </span>
                    <span className="mt-2 block font-display text-lg font-bold text-midnight group-hover:underline group-hover:decoration-scientific group-hover:decoration-2 group-hover:underline-offset-4 dark:text-white">
                      {entry.title}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {entry.description}
                    </span>
                    <span className="mt-3 block text-xs text-slate-500 dark:text-slate-400">
                      {studySubjectById(entry.subject)?.name ?? entry.subject}
                      {entry.difficulty
                        ? ` · ${studyDifficultyMeta[entry.difficulty].label}`
                        : ""}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-research dark:text-scientific-soft">
                      Read resource
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
