import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import { ScienceBackground } from "@/components/projects/science-background";

/** Editorial hero for the Vision essay page. */
export function VisionHero() {
  return (
    <section aria-labelledby="vision-heading" className="relative overflow-hidden">
      <ScienceBackground density={0.55} />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
              Vision · Long-term perspective
            </p>
            <h1
              id="vision-heading"
              className="mt-4 font-display text-5xl leading-[1.05] font-bold text-balance text-midnight sm:text-6xl dark:text-white"
            >
              Exploring What Humanity{" "}
              <span className="text-research dark:text-scientific-soft">
                Can Build Next.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              A long-term perspective on science, intelligence, engineering,
              and the technologies that may shape the future — with
              speculation labeled as speculation throughout.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#essay" size="lg">
                Read the essay
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
