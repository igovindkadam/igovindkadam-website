import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { researchPhilosophy } from "@/data/about";

/** Research philosophy principles plus the engineering bridge. */
export function Philosophy() {
  return (
    <div className="space-y-14">
      <div>
        <Reveal>
          <SectionHeading
            id="philosophy-heading"
            eyebrow="How I work"
            title="Research philosophy"
            description="Guiding principles and aspirations for doing science — a personal compass, not a record of accomplishments."
          />
        </Reveal>
        <div className="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-2">
          {researchPhilosophy.map((principle, index) => (
            <Reveal key={principle.title} delay={(index % 2) * 0.06}>
              <div className="flex gap-4">
                <span
                  aria-hidden
                  className="font-display text-2xl font-bold text-scientific"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-midnight dark:text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="grid gap-8 rounded-2xl bg-midnight p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center dark:bg-black dark:ring-1 dark:ring-white/10">
          <div>
            <p className="text-sm font-semibold tracking-wide text-scientific-soft uppercase">
              From understanding to systems
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-balance text-white sm:text-3xl">
              Engineering is understanding, made runnable
            </h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">
              Scientific understanding earns its keep when it becomes a
              system someone can run, inspect, and trust. KryomCode is a
              genuine example of that bridge: research context flowing
              into reviewed, verified software — built the same way the
              research is done, with evidence at every step.
            </p>
          </div>
          <p>
            <Button href="/projects/kryomcode">
              See it in practice
              <ArrowRight aria-hidden className="size-4" />
            </Button>
          </p>
        </div>
      </Reveal>
    </div>
  );
}
