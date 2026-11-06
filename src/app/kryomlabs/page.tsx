import type { Metadata } from "next";
import { LabsHero } from "@/components/kryomlabs/labs-hero";
import {
  LabsDivisions,
  LabsFeature,
  LabsIntro,
} from "@/components/kryomlabs/labs-sections";
import { LabsVisualization } from "@/components/kryomlabs/labs-visualization";
import { LabsFuture, LabsPhilosophy } from "@/components/kryomlabs/labs-philosophy";
import { siteIdentity } from "@/lib/site";

export const metadata: Metadata = {
  title: "KryomLabs",
  description: `KryomLabs — ${siteIdentity.owner}'s independent engineering and research ecosystem: the released KryomCode project, confirmed divisions, philosophy, and future direction.`,
  openGraph: {
    title: "KryomLabs — Engineering Intelligence. Shaping Tomorrow.",
    description:
      "Independent research and engineering ecosystem: released work, confirmed divisions, and honest statuses.",
  },
};

/** KryomLabs ecosystem: intro, feature, divisions, map, philosophy, future. */
export default function KryomLabsPage() {
  return (
    <>
      <LabsHero />

      <section aria-label="Ecosystem introduction">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <LabsIntro />
        </div>
      </section>

      <section
        aria-label="Featured project"
        className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <LabsFeature />
        </div>
      </section>

      <section aria-label="Divisions">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <LabsDivisions />
        </div>
      </section>

      <section
        aria-label="Ecosystem map"
        className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <LabsVisualization />
        </div>
      </section>

      <section aria-label="Engineering philosophy">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <LabsPhilosophy />
        </div>
      </section>

      <section aria-label="Future direction" className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <LabsFuture />
        </div>
      </section>
    </>
  );
}
