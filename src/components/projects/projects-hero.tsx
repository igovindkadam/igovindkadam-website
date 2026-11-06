import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import { ScienceBackground } from "@/components/projects/science-background";

/** Editorial hero for the projects portfolio. */
export function ProjectsHero() {
  return (
    <section aria-labelledby="projects-heading" className="relative overflow-hidden">
      <ScienceBackground />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
              Portfolio · Engineering & Research Software
            </p>
            <h1
              id="projects-heading"
              className="mt-4 font-display text-5xl leading-[1.05] font-bold text-balance text-midnight sm:text-6xl dark:text-white"
            >
              Engineering Ideas Into{" "}
              <span className="text-research dark:text-scientific-soft">
                Intelligent Systems.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              An evolving portfolio of engineering projects, research-driven
              software and explorations across emerging technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects/kryomcode" size="lg">
                KryomCode case study
              </Button>
              <Button href="#categories" variant="secondary" size="lg">
                Browse categories
                <ArrowDown aria-hidden className="size-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
