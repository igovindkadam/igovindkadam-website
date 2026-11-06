import { Compass, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { futureDirections, skillGroups } from "@/data/experience";

/** Evidence-labeled skills — no proficiency scores, ever. */
export function Skills() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          id="skills-heading"
          eyebrow="Grounded abilities"
          title="Skills & technical interests"
          description="Tools appear only with project evidence behind them, and carry neutral labels — never percentages or ratings."
        />
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.06} className="h-full">
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-midnight-soft">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-midnight dark:text-white">
                <Wrench aria-hidden className="size-5 text-scientific" />
                {group.label}
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {group.note}
              </p>
              <p className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-midnight dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/** Forward-looking goals, fenced off from completed work. */
export function FutureDirection() {
  return (
    <Reveal>
      <div className="rounded-2xl bg-midnight p-7 sm:p-10 dark:bg-black dark:ring-1 dark:ring-white/10">
        <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-scientific-soft uppercase">
          <Compass aria-hidden className="size-4" />
          Future direction
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-balance text-white">
          Where this is heading
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {futureDirections.map((direction) => (
            <li
              key={direction}
              className="rounded-lg bg-white/5 p-4 text-[15px] leading-relaxed text-slate-200 ring-1 ring-white/10"
            >
              {direction}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-slate-400">
          Goals, not accomplishments — each becomes a timeline entry only
          when there is evidence for it.
        </p>
      </div>
    </Reveal>
  );
}
