import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { VisionHero } from "@/components/vision/vision-hero";
import { VisionPrinciples, VisionWorkLinks } from "@/components/vision/vision-sections";
import { VisionEssay } from "@/components/vision/vision-essay";
import { getVisionEssay } from "@/lib/content";
import { siteIdentity } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vision",
  description: `Long-term vision of ${siteIdentity.owner}: a personal essay on science, intelligence, engineering, and the technologies that may shape the future.`,
  openGraph: {
    type: "article",
    title: `Vision — ${siteIdentity.owner}`,
    description:
      "Exploring what humanity can build next: curiosity, evidence, and responsible progress.",
  },
};

/** Vision page: hero, principles, long-form essay, work connections. */
export default async function VisionPage() {
  const essay = await getVisionEssay();

  return (
    <>
      <VisionHero />

      <section aria-label="Vision principles">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <VisionPrinciples />
        </div>
      </section>

      <section
        aria-label="Vision essay"
        className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <VisionEssay entry={essay} />
        </div>
      </section>

      <section aria-label="Connected work">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <VisionWorkLinks />
        </div>
      </section>
    </>
  );
}
