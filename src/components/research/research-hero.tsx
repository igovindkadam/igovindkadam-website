import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import { ScienceBackground } from "@/components/projects/science-background";

/** Editorial hero for the Research Center. */
export function ResearchHero() {
  return (
    <section aria-labelledby="research-center-heading" className="relative overflow-hidden">
      <ScienceBackground density={0.9} />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
              Research Center
            </p>
            <h1
              id="research-center-heading"
              className="mt-4 font-display text-5xl leading-[1.05] font-bold text-balance text-midnight sm:text-6xl dark:text-white"
            >
              Exploring the{" "}
              <span className="text-research dark:text-scientific-soft">
                Frontiers of Science.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              A growing space for scientific curiosity, research exploration,
              technical investigation and interdisciplinary ideas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#domains" size="lg">
                Explore domains
                <ArrowDown aria-hidden className="size-4" />
              </Button>
              <Button href="#index" variant="secondary" size="lg">
                Research index
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
