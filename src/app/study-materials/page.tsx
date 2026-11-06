import type { Metadata } from "next";
import { StudyHero } from "@/components/study/study-hero";
import { StudySubjects } from "@/components/study/study-subjects";
import { ResourceIndex } from "@/components/study/resource-index";
import { getVisibleStudyMaterialMeta } from "@/lib/content";
import { siteIdentity } from "@/lib/site";

export const metadata: Metadata = {
  title: "Study Materials",
  description: `Structured learning resources by ${siteIdentity.owner}: study notes, guides, tutorials, and references across mathematics, science, and emerging technologies.`,
  openGraph: {
    title: `Study Materials — ${siteIdentity.owner}`,
    description:
      "A growing knowledge library: notes, guides, tutorials, and references.",
  },
};

/** Study Materials library: hero, subject shelves, searchable index. */
export default async function StudyMaterialsPage() {
  const entries = await getVisibleStudyMaterialMeta();

  return (
    <>
      <StudyHero />

      <section aria-label="Subjects">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <StudySubjects entries={entries} />
        </div>
      </section>

      <section
        aria-label="Resource index"
        className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <ResourceIndex entries={entries} />
        </div>
      </section>
    </>
  );
}
