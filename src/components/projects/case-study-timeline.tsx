import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { kryomCodeTimeline } from "@/data/projects";

/** Development journey: verified milestones with verified dates only. */
export function CaseStudyTimeline() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          id="journey-heading"
          eyebrow="How it shipped"
          title="Development journey"
          description="Milestones with documented dates. Anything undated stays unspecified."
        />
      </Reveal>
      <ol className="mt-10">
        {kryomCodeTimeline.map((milestone, index) => {
          const last = index === kryomCodeTimeline.length - 1;
          return (
            <Reveal key={`${milestone.date}-${milestone.title}`}>
              <li className="relative flex gap-5 pb-9 last:pb-0 sm:gap-8">
                {!last ? (
                  <span
                    aria-hidden
                    className="absolute top-9 bottom-0 left-[7px] w-px bg-slate-300 sm:left-[107px] dark:bg-slate-600"
                  />
                ) : null}
                <span className="hidden w-24 shrink-0 pt-0.5 text-right font-mono text-sm font-semibold text-scientific sm:block">
                  {milestone.date}
                </span>
                <span
                  aria-hidden
                  className="animate-pulse-node relative z-10 mt-1.5 size-4 shrink-0 rounded-full border-[3px] border-scientific bg-white sm:mt-1 dark:bg-midnight"
                  style={{ animationDelay: `${-(index * 0.5)}s` }}
                />
                <span className="min-w-0">
                  <span className="block font-mono text-xs font-semibold text-scientific sm:hidden">
                    {milestone.date}
                  </span>
                  <span className="block font-display text-lg font-bold text-midnight dark:text-white">
                    {milestone.title}
                  </span>
                  <span className="mt-1 block max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {milestone.detail}
                  </span>
                </span>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}
