import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import { CitationCopy } from "@/components/scientific/citation-copy";
import { MdxBody } from "@/components/scientific/mdx-body";
import { ReadingProgress } from "@/components/scientific/reading-progress";
import { TableOfContents } from "@/components/scientific/table-of-contents";
import {
  buildCitation,
  publicationStatusMeta,
  publicationTypeMeta,
  qualifiesForScholarlyMarkup,
} from "@/data/publications";
import type { ContentEntry, PublicationMeta } from "@/lib/content";

interface PublicationLayoutProps {
  entry: ContentEntry<PublicationMeta>;
}

/** Academic detail layout for a single publication entry. */
export function PublicationLayout({ entry }: PublicationLayoutProps) {
  const { meta, source, headings } = entry;
  const citation = buildCitation(meta);

  const identifiers: { label: string; href: string; text: string }[] = [];
  if (meta.doi) {
    identifiers.push({
      label: "DOI",
      href: `https://doi.org/${meta.doi}`,
      text: meta.doi,
    });
  }
  if (meta.arxiv) {
    identifiers.push({
      label: "arXiv",
      href: `https://arxiv.org/abs/${meta.arxiv}`,
      text: meta.arxiv,
    });
  }
  if (meta.publisherUrl) {
    identifiers.push({
      label: "Publisher",
      href: meta.publisherUrl,
      text: "Publisher page",
    });
  }

  return (
    <>
      <ReadingProgress />
      {qualifiesForScholarlyMarkup(meta) ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ScholarlyArticle",
              headline: meta.title,
              author: meta.authors.map((name) => ({
                "@type": "Person",
                name,
              })),
              datePublished: meta.date ?? (meta.year !== undefined ? String(meta.year) : undefined),
              ...(meta.doi ? { sameAs: `https://doi.org/${meta.doi}` } : {}),
            }),
          }}
        />
      ) : null}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="print:hidden">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-research hover:underline dark:text-scientific-soft"
          >
            <ArrowLeft aria-hidden className="size-4" />
            All publications
          </Link>
        </p>

        {meta.draft ? (
          <p className="mt-6 rounded-lg border border-dashed border-scientific bg-orange-50 px-4 py-3 text-sm text-amber-900 dark:bg-orange-950 dark:text-scientific-soft">
            Draft preview — this entry is unlisted and exists to demonstrate
            the publication template. It is not a real publication.
          </p>
        ) : null}

        <header className="mt-6 max-w-3xl">
          <p className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1.5 font-semibold text-research dark:text-scientific-soft">
              <FileText aria-hidden className="size-4" />
              {publicationTypeMeta[meta.pubType].label}
            </span>
            <span className="rounded-full border border-slate-200 px-2.5 py-0.5 text-xs text-slate-600 dark:border-slate-600 dark:text-slate-300">
              {publicationStatusMeta[meta.status].label}
            </span>
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-balance text-midnight sm:text-4xl dark:text-white">
            {meta.title}
          </h1>
          <p className="mt-3 text-[15px] text-slate-600 dark:text-slate-300">
            {meta.authors.join(", ")}
            {meta.venue ? (
              <>
                {" · "}
                <span className="italic">{meta.venue}</span>
              </>
            ) : null}
            {meta.year !== undefined ? ` · ${meta.year}` : ""}
          </p>
        </header>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="min-w-0">
            <article data-reading-body className="reading-surface max-w-3xl">
              <MdxBody source={source} />
            </article>

            <section
              aria-labelledby="cite-heading"
              className="mt-10 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-midnight-soft"
            >
              <div className="flex items-center justify-between gap-3">
                <h2
                  id="cite-heading"
                  className="font-display text-base font-bold text-midnight dark:text-white"
                >
                  Cite this work
                </h2>
                <CitationCopy text={citation} label="citation" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {citation}
              </p>
            </section>

            {meta.keywords.length > 0 ? (
              <p className="mt-6 max-w-3xl text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold">Keywords: </span>
                {meta.keywords.join(", ")}
              </p>
            ) : null}
          </div>

          <aside className="space-y-8 lg:pt-1">
            <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-700">
              <h2 className="text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-400">
                Details
              </h2>
              <dl className="mt-3 space-y-2.5 text-sm">
                {meta.date ? (
                  <div className="flex justify-between gap-3">
                    <dt className="text-slate-500 dark:text-slate-400">Date</dt>
                    <dd className="text-right font-medium text-midnight dark:text-white">
                      <time dateTime={meta.date}>{meta.date}</time>
                    </dd>
                  </div>
                ) : null}
                {meta.venue ? (
                  <div className="flex justify-between gap-3">
                    <dt className="text-slate-500 dark:text-slate-400">Venue</dt>
                    <dd className="text-right font-medium text-midnight dark:text-white">
                      {meta.venue}
                    </dd>
                  </div>
                ) : null}
                {identifiers.map((id) => (
                  <div key={id.label} className="flex justify-between gap-3">
                    <dt className="text-slate-500 dark:text-slate-400">{id.label}</dt>
                    <dd className="text-right">
                      <a
                        href={id.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium break-all text-research hover:underline dark:text-scientific-soft"
                      >
                        {id.text}
                        <ExternalLink aria-hidden className="size-3 shrink-0" />
                      </a>
                    </dd>
                  </div>
                ))}
                {meta.pdfUrl ? (
                  <div className="pt-1">
                    <a
                      href={meta.pdfUrl}
                      className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3.5 py-2 text-sm font-medium text-midnight transition-colors hover:border-scientific dark:border-slate-600 dark:text-white dark:hover:border-scientific"
                    >
                      <Download aria-hidden className="size-4" />
                      Download PDF
                    </a>
                  </div>
                ) : null}
                {identifiers.length === 0 && !meta.date && !meta.venue && !meta.pdfUrl ? (
                  <p className="text-sm text-slate-500 italic dark:text-slate-400">
                    No identifiers or links yet — they appear here when
                    verified.
                  </p>
                ) : null}
              </dl>
            </div>
            <div className="hidden lg:block">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
