import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { PublicationsHero } from "@/components/publications/publications-hero";
import { PublicationIndex } from "@/components/publications/publication-index";
import { Reveal } from "@/components/home/reveal";
import { getVisiblePublicationMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications by Govind Kadam: papers, preprints, and technical reports with verified metadata, citations, and links.",
};

/** Publications listing: hero plus the searchable collection. */
export default async function PublicationsPage() {
  const entries = await getVisiblePublicationMeta();

  return (
    <>
      <PublicationsHero />
      <section aria-label="Publications collection">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <PublicationIndex entries={entries} />
          <Reveal>
            <p className="mt-8 flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-500 dark:border-slate-700 dark:bg-midnight-soft dark:text-slate-400">
              <FileText aria-hidden className="mt-0.5 size-4 shrink-0 text-scientific" />
              <span>
                Template preview: the{" "}
                <Link
                  href="/publications/template-sample"
                  className="font-medium text-research underline decoration-scientific decoration-2 underline-offset-2 dark:text-scientific-soft"
                >
                  publication template sample
                </Link>{" "}
                (unlisted draft) demonstrates the detail layout, metadata
                table, and citation copy for future entries.
              </span>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
