import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import { ScienceBackground } from "@/components/projects/science-background";

/** Editorial hero for the KryomLabs ecosystem page. */
export function LabsHero() {
  return (
    <section aria-labelledby="labs-heading" className="relative overflow-hidden">
      <ScienceBackground density={0.7} />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
              Ecosystem · Independent research & engineering
            </p>
            <h1
              id="labs-heading"
              className="mt-4 font-display text-5xl leading-[1.05] font-bold text-balance text-midnight sm:text-6xl dark:text-white"
            >
              Engineering Intelligence.{" "}
              <span className="text-research dark:text-scientific-soft">
                Shaping Tomorrow.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              An independent engineering and research ecosystem exploring
              intelligent systems, scientific computing, and emerging
              technologies — one person, honest statuses, real artifacts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#divisions" size="lg">
                Explore divisions
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
