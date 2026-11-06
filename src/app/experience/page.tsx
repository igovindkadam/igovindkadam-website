import type { Metadata } from "next";
import { ExperienceHero } from "@/components/experience/experience-hero";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { FutureDirection, Skills } from "@/components/experience/skills-future";
import { siteIdentity } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `Evidence-based journey of ${siteIdentity.owner}: independent engineering, the KryomCode release, hackathon participation, grounded skills, and future direction.`,
  openGraph: {
    title: `Experience — ${siteIdentity.owner}`,
    description:
      "Independent engineering journey: KryomCode, hackathons, grounded skills, and future goals.",
  },
};

/** Experience page: hero, evidence timeline, skills, future direction. */
export default function ExperiencePage() {
  return (
    <>
      <ExperienceHero />

      <section aria-label="Experience timeline">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <ExperienceTimeline />
        </div>
      </section>

      <section
        aria-label="Skills and technical interests"
        className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Skills />
        </div>
      </section>

      <section aria-label="Future direction">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <FutureDirection />
        </div>
      </section>
    </>
  );
}
