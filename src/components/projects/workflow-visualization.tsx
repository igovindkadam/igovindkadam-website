import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { kryomCodeWorkflowDetailed } from "@/data/projects";

/**
 * Animated research-to-engineering workflow. Desktop shows a connected
 * horizontal pipeline with pulsing nodes and flowing connectors; mobile
 * falls back to a readable vertical timeline. Pure CSS motion, so the
 * reduced-motion stylesheet neutralizes it automatically.
 */
export function WorkflowVisualization() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          id="workflow-heading"
          eyebrow="How it works"
          title="Research-to-engineering workflow"
          description="One fixed pipeline from question to verified code. Each stage hands evidence — not just output — to the next."
        />
      </Reveal>

      {/* Desktop pipeline */}
      <Reveal delay={0.08}>
        <ol aria-label="KryomCode workflow stages" className="mt-10 hidden lg:block">
          <li aria-hidden className="relative mx-8 mb-[-13px] h-px">
            <span className="absolute inset-0 bg-slate-300 dark:bg-slate-600" />
            <span className="animate-dash-flow absolute inset-0 border-t-2 border-scientific" />
          </li>
          <li className="grid list-none grid-cols-6 gap-4">
            {kryomCodeWorkflowDetailed.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div key={stage.name} className="relative pt-6 text-center">
                  <span
                    aria-hidden
                    className="animate-pulse-node absolute top-[7px] left-1/2 size-3 -translate-x-1/2 rounded-full bg-scientific ring-4 ring-white dark:ring-midnight"
                    style={{ animationDelay: `${-(index * 0.45)}s` }}
                  />
                  <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-research text-white dark:bg-scientific dark:text-midnight">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <p className="mt-3 font-display text-sm font-bold text-midnight dark:text-white">
                    <span className="mr-1.5 text-xs font-bold text-scientific">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {stage.name}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {stage.detail}
                  </p>
                </div>
              );
            })}
          </li>
        </ol>
      </Reveal>

      {/* Mobile / tablet timeline */}
      <ol aria-label="KryomCode workflow stages" className="mt-8 space-y-0 lg:hidden">
        {kryomCodeWorkflowDetailed.map((stage, index) => {
          const Icon = stage.icon;
          const last = index === kryomCodeWorkflowDetailed.length - 1;
          return (
            <Reveal key={stage.name}>
              <li className="relative flex gap-4 pb-7 last:pb-0">
                {!last ? (
                  <span
                    aria-hidden
                    className="absolute top-12 bottom-0 left-[21px] w-px bg-slate-300 dark:bg-slate-600"
                  />
                ) : null}
                <span
                  aria-hidden
                  className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-xl bg-research text-white dark:bg-scientific dark:text-midnight"
                >
                  <Icon className="size-5" />
                </span>
                <span className="pt-0.5">
                  <span className="block font-display text-base font-bold text-midnight dark:text-white">
                    <span className="mr-2 text-xs font-bold text-scientific">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {stage.name}
                  </span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {stage.detail}
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
