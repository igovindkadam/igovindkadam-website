import { Database, Lock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import {
  kryomCodeCapabilityDetails,
  kryomCodeProviders,
  kryomCodeSafety,
  kryomCodeStack,
} from "@/data/projects";

/** Case study technical sections: capabilities, stack, integrations, safety. */
export function CaseStudyTechnical() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <div>
        <Reveal>
          <SectionHeading
            id="capabilities-heading"
            eyebrow="What it does"
            title="Core capabilities"
            description="Implemented and evidence-backed — each capability below is documented in the public repository."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kryomCodeCapabilityDetails.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Reveal
                key={capability.title}
                delay={(index % 3) * 0.06}
                className="h-full"
              >
                <article className="h-full rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-scientific dark:border-slate-700 dark:bg-midnight-soft dark:hover:border-scientific">
                  <span
                    aria-hidden
                    className="flex size-10 items-center justify-center rounded-lg bg-slate-100 text-research dark:bg-midnight dark:text-scientific"
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-midnight dark:text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {capability.detail}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <SectionHeading
              id="stack-heading"
              eyebrow="Built with"
              title="Technology stack"
            />
            <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-700 dark:border-slate-700">
              {kryomCodeStack.map((entry) => (
                <div key={entry.piece} className="grid gap-0.5 py-3.5 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-4">
                  <dt className="font-mono text-sm font-semibold text-midnight dark:text-white">
                    {entry.piece}
                  </dt>
                  <dd className="text-sm text-slate-600 dark:text-slate-300">
                    {entry.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={0.06}>
            <div>
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-midnight dark:text-white">
                <Database aria-hidden className="size-5 text-scientific" />
                Research integrations
              </h3>
              <ul className="mt-4 space-y-2.5">
                {kryomCodeProviders.map((provider) => (
                  <li
                    key={provider.name}
                    className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-4 py-2.5 text-sm dark:border-slate-700"
                  >
                    <span className="font-medium text-midnight dark:text-white">
                      {provider.name}
                    </span>
                    <span className="text-xs tracking-wide text-slate-500 uppercase dark:text-slate-400">
                      {provider.access}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Claim verification uses lexical matching and is labeled as
                such — the project does not claim semantic search for these
                integrations.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-midnight-soft">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-midnight dark:text-white">
                <Lock aria-hidden className="size-5 text-scientific" />
                Human approval & safety model
              </h3>
              <ul className="mt-4 space-y-3.5">
                {kryomCodeSafety.map((rule) => (
                  <li key={rule.title}>
                    <p className="text-sm font-semibold text-midnight dark:text-white">
                      {rule.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {rule.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
