import Link from "next/link";
import { ArrowLeft, Download, FlaskConical } from "lucide-react";
import { MdxBody } from "@/components/scientific/mdx-body";
import { ReadingProgress } from "@/components/scientific/reading-progress";
import { TableOfContents } from "@/components/scientific/table-of-contents";
import { ResearchStatusPill } from "@/components/research/research-status";
import { domainById, researchKindMeta } from "@/data/research";
import type { ContentEntry, ResearchMeta } from "@/lib/content";

interface ArticleLayoutProps {
  entry: ContentEntry<ResearchMeta>;
  related: ResearchMeta[];
}

/** Academic reading layout for a single research entry. */
export function ArticleLayout({ entry, related }: ArticleLayoutProps) {
  const { meta, source, headings } = entry;
  const kind = researchKindMeta[meta.kind];
  const KindIcon = kind.icon;

  return (
    <>
      <ReadingProgress />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="print:hidden">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-research hover:underline dark:text-scientific-soft"
          >
            <ArrowLeft aria-hidden className="size-4" />
            Research Center
          </Link>
        </p>

        {meta.draft ? (
          <p className="mt-6 rounded-lg border border-dashed border-scientific bg-orange-50 px-4 py-3 text-sm text-amber-900 dark:bg-orange-950 dark:text-scientific-soft">
            Draft preview — this entry is unlisted and exists to demonstrate
            the article system. It is not a research claim.
          </p>
        ) : null}

        <header className="mt-6 max-w-3xl">
          <p className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1.5 font-semibold text-research dark:text-scientific-soft">
              <KindIcon aria-hidden className="size-4" />
              {kind.label}
            </span>
            <ResearchStatusPill status={meta.status} />
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
          </dl>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {meta.domains.map((id) => {
              const domain = domainById(id);
              return (
                <Link
                  key={id}
                  href={`/research#domain-${id}`}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:bg-scientific hover:text-midnight dark:bg-midnight-soft dark:text-slate-300"
                >
                  {domain?.name ?? id}
                </Link>
              );
            })}
          </div>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <article data-reading-body className="reading-surface min-w-0 max-w-3xl">
            {meta.abstract ? (
              <section
                aria-label="Abstract"
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 not-italic dark:border-slate-700 dark:bg-midnight-soft"
              >
                <h2 className="font-display text-base font-bold tracking-wide text-midnight uppercase dark:text-white">
                  Abstract
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {meta.abstract}
                </p>
              </section>
            ) : null}
            <MdxBody source={source} />
            {meta.keywords.length > 0 ? (
              <p className="mt-10 border-t border-slate-200 pt-5 font-sans text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                <span className="font-semibold">Keywords: </span>
                {meta.keywords.join(", ")}
              </p>
            ) : null}
            {meta.pdf ? (
              <p className="mt-4 font-sans">
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
              <FlaskConical aria-hidden className="size-5 text-scientific" />
              Related research
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/research/${item.slug}`}
                    className="block rounded-lg border border-slate-200 p-4 transition-colors hover:border-scientific dark:border-slate-700 dark:hover:border-scientific"
                  >
                    <span className="block font-display text-sm font-bold text-midnight dark:text-white">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
                      {researchKindMeta[item.kind].label} ·{" "}
                      {item.domains.map((id) => domainById(id)?.name ?? id).join(", ")}
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
