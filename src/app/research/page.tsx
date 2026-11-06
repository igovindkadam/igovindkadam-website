import type { Metadata } from "next";
import Link from "next/link";
import { FlaskConical } from "lucide-react";
import { ResearchHero } from "@/components/research/research-hero";
import { ResearchOverview } from "@/components/research/research-overview";
import { ResearchStatusLegend } from "@/components/research/research-status";
import { ResearchIndex } from "@/components/research/research-index";
import { Reveal } from "@/components/home/reveal";
import { getVisibleResearchMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research Center",
  description:
    "Research Center of Govind Kadam: domains, investigations, notes, and essays across science and engineering — interests declared, documentation honest.",
};

/** Research Center landing: hero, taxonomy, domains, statuses, index. */
export default async function ResearchPage() {
  const entries = await getVisibleResearchMeta();

  return (
    <>
      <ResearchHero />

      <section aria-label="Research overview and domains">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <ResearchOverview />
        </div>
      </section>

      <section
        aria-label="Status system"
        className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <ResearchStatusLegend />
        </div>
      </section>

      <section aria-label="Research index">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <ResearchIndex entries={entries} />
          <Reveal>
            <p className="mt-8 flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-500 dark:border-slate-700 dark:bg-midnight-soft dark:text-slate-400">
              <FlaskConical aria-hidden className="mt-0.5 size-4 shrink-0 text-scientific" />
              <span>
                Reading-system preview: the{" "}
                <Link
                  href="/research/template-guide"
                  className="font-medium text-research underline decoration-scientific decoration-2 underline-offset-2 dark:text-scientific-soft"
                >
                  formatting template guide
                </Link>{" "}
                (unlisted draft) demonstrates tables, code, mathematics,
                and references for future entries.
              </span>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
