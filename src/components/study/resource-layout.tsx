import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Download } from "lucide-react";
import { MdxBody } from "@/components/scientific/mdx-body";
import { ReadingProgress } from "@/components/scientific/reading-progress";
import { TableOfContents } from "@/components/scientific/table-of-contents";
import { StudyStatusPill } from "@/components/study/resource-index";
import {
  qualifiesForLearningMarkup,
  studyDifficultyMeta,
  studyResourceTypeMeta,
  studySubjectById,
} from "@/data/study-materials";
import type { ContentEntry, StudyMaterialMeta } from "@/lib/content";
import { readingMinutes } from "@/lib/content-model";

interface ResourceLayoutProps {
  entry: ContentEntry<StudyMaterialMeta>;
  related: StudyMaterialMeta[];
}

/** Academic reading layout for a single study resource. */
export function ResourceLayout({ entry, related }: ResourceLayoutProps) {
  const { meta, body, source, headings } = entry;
  const type = studyResourceTypeMeta[meta.resourceType];
  const TypeIcon = type.icon;
  const subject = studySubjectById(meta.subject);
  const minutes = readingMinutes(body);

  return (
    <>
      <ReadingProgress />
      {qualifiesForLearningMarkup(meta) ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LearningResource",
              headline: meta.title,
              description: meta.description,
              author: { "@type": "Person", name: meta.author },
              datePublished: meta.created,
              ...(meta.updated ? { dateModified: meta.updated } : {}),
              ...(meta.difficulty ? { educationalLevel: meta.difficulty } : {}),
            }),
          }}
        />
      ) : null}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="print:hidden">
          <Link
            href="/study-materials"
            className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-research hover:underline dark:text-scientific-soft"
          >
            <ArrowLeft aria-hidden className="size-4" />
            Study Materials
          </Link>
        </p>

        {meta.draft ? (
          <p className="mt-6 rounded-lg border border-dashed border-scientific bg-orange-50 px-4 py-3 text-sm text-amber-900 dark:bg-orange-950 dark:text-scientific-soft">
            Draft preview — this resource is unlisted and exists to
            demonstrate the library system. It is not study content.
          </p>
        ) : null}

        <header className="mt-6 max-w-3xl">
          <p className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1.5 font-semibold text-research dark:text-scientific-soft">
              <TypeIcon aria-hidden className="size-4" />
              {type.label}
            </span>
            <StudyStatusPill status={meta.status} />
            {subject ? (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-midnight-soft dark:text-slate-300">
                {subject.name}
              </span>
            ) : null}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-balance text-midnight sm:text-5xl dark:text-white">
            {meta.title}
          </h1>
          {meta.subtitle ? (
            <p className="reading-surface mt-3 text-xl text-slate-600 dark:text-slate-300">
              {meta.subtitle}
            </p>
          ) : null}
          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex gap-1.5">
              <dt className="font-semibold">By</dt>
              <dd>{meta.author}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="font-semibold">Created</dt>
              <dd>
                <time dateTime={meta.created}>{meta.created}</time>
              </dd>
            </div>
            {meta.updated ? (
              <div className="flex gap-1.5">
                <dt className="font-semibold">Updated</dt>
                <dd>
                  <time dateTime={meta.updated}>{meta.updated}</time>
                </dd>
              </div>
            ) : null}
            {meta.difficulty ? (
              <div className="flex gap-1.5">
                <dt className="font-semibold">Level</dt>
                <dd>{studyDifficultyMeta[meta.difficulty].label}</dd>
              </div>
            ) : null}
            <div className="flex items-center gap-1.5">
              <Clock aria-hidden className="size-4" />
              <dd>{minutes} min read</dd>
            </div>
          </dl>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <article data-reading-body className="reading-surface min-w-0 max-w-3xl">
            <MdxBody source={source} />
            {meta.topics.length > 0 ? (
              <p className="mt-10 border-t border-slate-200 pt-5 font-sans text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                <span className="font-semibold">Topics: </span>
                {meta.topics.join(", ")}
              </p>
            ) : null}
            {meta.references.length > 0 ? (
              <section aria-label="References" className="mt-6 font-sans">
                <h2 className="font-display text-lg font-bold text-midnight dark:text-white">
                  References
                </h2>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {meta.references.map((reference) => (
                    <li key={reference}>{reference}</li>
                  ))}
                </ol>
              </section>
            ) : null}
            {meta.pdf ? (
              <p className="mt-6 font-sans">
                <a
                  href={meta.pdf}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-midnight transition-colors hover:border-scientific dark:border-slate-600 dark:text-white dark:hover:border-scientific"
                >
                  <Download aria-hidden className="size-4" />
                  Download PDF
                </a>
              </p>
            ) : null}
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>

        {related.length > 0 ? (
          <section aria-labelledby="related-heading" className="mt-14 border-t border-slate-200 pt-8 dark:border-slate-700">
            <h2
              id="related-heading"
              className="flex items-center gap-2 font-display text-xl font-bold text-midnight dark:text-white"
            >
              <BookOpen aria-hidden className="size-5 text-scientific" />
              Related resources
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/study-materials/${item.slug}`}
                    className="block rounded-lg border border-slate-200 p-4 transition-colors hover:border-scientific dark:border-slate-700 dark:hover:border-scientific"
                  >
                    <span className="block font-display text-sm font-bold text-midnight dark:text-white">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
                      {studyResourceTypeMeta[item.resourceType].label} ·{" "}
                      {studySubjectById(item.subject)?.name ?? item.subject}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}
