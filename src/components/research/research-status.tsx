import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { researchKindMeta, researchStatusMeta } from "@/data/research";
import type { ResearchStatus } from "@/lib/content";

const statusDot: Record<ResearchStatus, string> = {
  exploring: "bg-slate-400",
  "in-progress": "bg-scientific",
  completed: "bg-research dark:bg-scientific-soft",
  published: "bg-emerald-600 dark:bg-emerald-400",
  archived: "bg-slate-300 dark:bg-slate-600",
};

/** Status pill for research entries. */
export function ResearchStatusPill({ status }: { status: ResearchStatus }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-slate-600 dark:border-slate-600 dark:text-slate-300">
      <span aria-hidden className={`size-1.5 rounded-full ${statusDot[status]}`} />
      {researchStatusMeta[status].label}
    </span>
  );
}

/** Precise status meanings plus the six supported entry kinds. */
export function ResearchStatusLegend() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <Reveal>
        <div>
          <SectionHeading
            id="status-heading"
            eyebrow="Shared vocabulary"
            title="Status system"
          />
          <ul className="mt-6 space-y-3">
            {(Object.keys(researchStatusMeta) as ResearchStatus[]).map((status) => (
              <li key={status} className="flex items-start gap-3 text-sm">
                <ResearchStatusPill status={status} />
                <span className="leading-relaxed text-slate-600 dark:text-slate-300">
                  {researchStatusMeta[status].meaning}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7 dark:border-slate-700 dark:bg-midnight-soft">
          <h3 className="font-display text-xl font-bold text-midnight dark:text-white">
            Entry kinds
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {Object.entries(researchKindMeta)
              .filter(([kind]) => kind !== "guide")
              .map(([kind, meta]) => {
                const Icon = meta.icon;
                return (
                  <li key={kind} className="flex gap-2.5 text-sm">
                    <Icon aria-hidden className="mt-0.5 size-4 shrink-0 text-scientific" />
                    <span>
                      <span className="block font-semibold text-midnight dark:text-white">
                        {meta.label}
                      </span>
                      <span className="mt-0.5 block leading-relaxed text-slate-600 dark:text-slate-300">
                        {meta.description}
                      </span>
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
