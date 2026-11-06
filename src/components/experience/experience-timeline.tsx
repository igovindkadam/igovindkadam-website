import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import {
  entriesInCategory,
  experienceCategories,
  experienceKindMeta,
} from "@/data/experience";

/**
 * Data-driven experience timeline grouped by category. Categories render
 * only when they hold genuine entries; each entry carries its kind badge
 * so independent work is never mistaken for employment.
 */
export function ExperienceTimeline() {
  const populated = experienceCategories.filter(
    (category) => entriesInCategory(category.id).length > 0,
  );

  return (
    <div id="timeline" className="scroll-mt-20">
      <Reveal>
        <SectionHeading
          id="timeline-heading"
          eyebrow="The record"
          title="Experience timeline"
          description="Every entry links to its evidence. Kind badges distinguish employment, independent work, personal projects, hackathons, learning, and open source."
        />
      </Reveal>

      <div className="mt-10 space-y-12">
        {populated.map((category) => {
          const Icon = category.icon;
          const entries = entriesInCategory(category.id);
          return (
            <section key={category.id} aria-labelledby={`exp-cat-${category.id}`}>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex size-10 items-center justify-center rounded-lg bg-research text-white dark:bg-scientific dark:text-midnight"
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3
                    id={`exp-cat-${category.id}`}
                    className="font-display text-xl font-bold text-midnight dark:text-white"
                  >
                    {category.name}
                  </h3>
                </div>
              </Reveal>
              <div role="list" className="mt-5 space-y-4">
                {entries.map((entry) => (
                  <Reveal key={entry.title}>
                    <div
                      role="listitem"
                      className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-700 dark:bg-midnight-soft"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          title={experienceKindMeta[entry.kind].meaning}
                          className="rounded-full bg-research px-2.5 py-0.5 text-xs font-semibold text-white dark:bg-scientific dark:text-midnight"
                        >
                          {experienceKindMeta[entry.kind].label}
                        </span>
                        <span className="font-mono text-xs font-semibold text-scientific">
                          {entry.date}
                        </span>
                      </div>
                      <h4 className="mt-2 font-display text-xl font-bold text-midnight dark:text-white">
                        {entry.title}
                      </h4>
                      <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                        {entry.organization} · {entry.role}
                      </p>
                      <p className="mt-2.5 max-w-3xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                        {entry.description}
                      </p>
                      {entry.technologies.length > 0 ? (
                        <p className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
                          {entry.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 dark:bg-midnight dark:text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </p>
                      ) : null}
                      {entry.achievements.length > 0 ? (
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                          {entry.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </ul>
                      ) : null}
                      {entry.evidence.length > 0 ? (
                        <p className="mt-4 flex flex-wrap gap-2">
                          {entry.evidence.map((link) =>
                            link.external ? (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-scientific hover:text-midnight dark:border-slate-600 dark:text-slate-300 dark:hover:border-scientific dark:hover:text-white"
                              >
                                {link.label}
                                <ExternalLink aria-hidden className="size-3" />
                              </a>
                            ) : (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-scientific hover:text-midnight dark:border-slate-600 dark:text-slate-300 dark:hover:border-scientific dark:hover:text-white"
                              >
                                {link.label}
                              </Link>
                            ),
                          )}
                        </p>
                      ) : null}
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <Reveal>
        <p className="mt-8 max-w-3xl rounded-xl border border-dashed border-slate-300 p-5 text-sm leading-relaxed text-slate-500 dark:border-slate-600 dark:text-slate-400">
          Categories without verified entries — employment, open-source
          contributions, formal study, and collaborations — stay hidden
          until genuine records exist. The record grows only through
          evidence.
        </p>
      </Reveal>
    </div>
  );
}
