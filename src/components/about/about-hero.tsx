import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import { ScienceBackground } from "@/components/projects/science-background";
import { biography } from "@/data/about";

/** Editorial hero for the About page. */
export function AboutHero() {
  return (
    <section aria-labelledby="about-heading" className="relative overflow-hidden">
      <ScienceBackground density={0.7} />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
              {biography.fullName} · {biography.designation}
            </p>
            <h1
              id="about-heading"
              className="mt-4 font-display text-5xl leading-[1.05] font-bold text-balance text-midnight sm:text-6xl dark:text-white"
            >
              Curiosity Into Research.{" "}
              <span className="text-research dark:text-scientific-soft">
                Ideas Into Engineering.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              An independent, interdisciplinary approach to scientific
              exploration — following questions across fields, then building
              the systems that answer them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#biography" size="lg">
                Read the introduction
                <ArrowDown aria-hidden className="size-4" />
              </Button>
              <Button href="/research" variant="secondary" size="lg">
                Research Center
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
