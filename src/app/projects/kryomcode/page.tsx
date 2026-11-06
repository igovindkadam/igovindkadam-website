import type { Metadata } from "next";
import { KryomCodeHero } from "@/components/projects/kryomcode-hero";
import { CaseStudyNarrative } from "@/components/projects/case-study-narrative";
import { WorkflowVisualization } from "@/components/projects/workflow-visualization";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { CaseStudyTechnical } from "@/components/projects/case-study-technical";
import { CaseStudyTimeline } from "@/components/projects/case-study-timeline";
import { CaseStudyGallery } from "@/components/projects/case-study-gallery";
import { CaseStudyClosing } from "@/components/projects/case-study-closing";

export const metadata: Metadata = {
  title: "KryomCode — Case Study",
  description:
    "KryomCode: a Meta AI-powered desktop IDE bridging scientific research and software engineering. Architecture, workflow, capabilities, gallery, demo, and release links.",
};

/**
 * KryomCode case study: hero, narrative, animated workflow, architecture,
 * technical detail, timeline, authentic gallery, demo video, links,
 * limitations, roadmap, related interests, and project navigation.
 */
export default function KryomCodePage() {
  return (
    <>
      <KryomCodeHero />

      <section
        aria-label="Project overview, problem, and vision"
        className="border-t border-slate-200 dark:border-slate-800"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <CaseStudyNarrative />
        </div>
      </section>

      <section
        aria-label="Research to engineering workflow"
        className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <WorkflowVisualization />
        </div>
      </section>

      <section aria-label="System architecture">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <ArchitectureDiagram />
        </div>
      </section>

      <section
        aria-label="Capabilities, stack, integrations, and safety"
        className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <CaseStudyTechnical />
        </div>
      </section>

      <section aria-label="Development journey">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <CaseStudyTimeline />
        </div>
      </section>

      <section
        aria-label="Screenshots and demo video"
        className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <CaseStudyGallery />
        </div>
      </section>

      <section aria-label="Links, limitations, roadmap, and navigation">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <CaseStudyClosing />
        </div>
      </section>
    </>
  );
}
