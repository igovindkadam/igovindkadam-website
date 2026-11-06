import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import { ScienceBackground } from "@/components/projects/science-background";

/** Editorial hero for the Connect page. */
export function ConnectHero() {
  return (
    <section aria-labelledby="connect-heading" className="relative overflow-hidden">
      <ScienceBackground density={0.6} />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
              Connect · Open channels
            </p>
            <h1
              id="connect-heading"
              className="mt-4 font-display text-5xl leading-[1.05] font-bold text-balance text-midnight sm:text-6xl dark:text-white"
            >
              Let&apos;s Connect{" "}
              <span className="text-research dark:text-scientific-soft">
                Through Ideas.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Thoughtful conversations, research discussions, engineering
              collaboration, and constructive feedback are all welcome. Every
              channel below is verified — nothing invented, nothing dead.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#channels" size="lg">
                Find a channel
                <ArrowDown aria-hidden className="size-4" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Direct contact
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
