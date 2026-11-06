import { ArrowDown, ArrowRight } from "lucide-react";
import { SiteLogo } from "@/components/brand/site-logo";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import { HeroVisual } from "@/components/home/hero-visual";
import { researchInterests } from "@/data/homepage";
import { siteIdentity } from "@/lib/site";

/** Homepage hero: identity, headline, CTAs, and logo panel. */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-14 pb-12 sm:px-6 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
            {siteIdentity.owner} · {siteIdentity.positioning}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-display text-5xl leading-[1.05] font-bold text-balance text-midnight sm:text-6xl dark:text-white"
          >
            Exploring Science.{" "}
            <span className="text-research dark:text-scientific-soft">
              Engineering the Future.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            An independent researcher and engineer exploring the frontiers of
            intelligence, computation and emerging technologies — turning
            curiosity into research, and ideas into engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects" size="lg">
              Explore My Work
              <ArrowRight aria-hidden className="size-4" />
            </Button>
            <Button href="#research-interests" variant="secondary" size="lg">
              Research Interests
              <ArrowDown aria-hidden className="size-4" />
            </Button>
          </div>
          <p className="mt-6 max-w-xl border-l-2 border-scientific pl-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Featured project:{" "}
            <span className="font-semibold text-midnight dark:text-white">
              KryomCode
            </span>
            , part of the {siteIdentity.ecosystem} ecosystem.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <figure className="relative overflow-hidden rounded-2xl bg-midnight shadow-xl ring-1 ring-slate-900/10 dark:bg-black dark:ring-white/10">
            <div className="relative aspect-[6/5] sm:aspect-[6/4] lg:aspect-auto lg:h-[540px]">
              <HeroVisual />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <SiteLogo height={190} padding={14} priority className="rounded-2xl shadow-2xl" />
              </div>
            </div>
            <figcaption className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs tracking-wide text-slate-400">
              <span>Official mark · igovindkadam</span>
              <span aria-hidden>K / 01</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="border-y border-slate-200 bg-slate-50 py-3.5 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8 whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-8">
                {researchInterests.map((interest) => (
                  <span
                    key={`${copy}-${interest.name}`}
                    className="flex items-center gap-8 text-sm font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400"
                  >
                    {interest.name}
                    <span className="size-1.5 rounded-full bg-scientific" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
