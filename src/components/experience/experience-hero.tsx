import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import { ScienceBackground } from "@/components/projects/science-background";

/** Editorial hero for the Experience page. */
export function ExperienceHero() {
  return (
    <section aria-labelledby="experience-heading" className="relative overflow-hidden">
      <ScienceBackground density={0.7} />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
              Experience · Evidence-based
            </p>
            <h1
              id="experience-heading"
              className="mt-4 font-display text-5xl leading-[1.05] font-bold text-balance text-midnight sm:text-6xl dark:text-white"
            >
              An Independent Journey Through{" "}
              <span className="text-research dark:text-scientific-soft">
                Science & Engineering.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Learning, building, experimenting, and exploring across
              disciplines. Independent work is labeled as independent
              work — nothing here pretends to be employment it is not.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#timeline" size="lg">
                View the journey
                <ArrowDown aria-hidden className="size-4" />
              </Button>
              <Button href="/projects/kryomcode" variant="secondary" size="lg">
                KryomCode case study
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
