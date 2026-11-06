import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { studySubjects } from "@/data/study-materials";
import type { StudyMaterialMeta } from "@/lib/content-model";

/**
 * Subject shelves with live resource counts. Supported shelves render
 * regardless; the count line is honest about which shelves hold content.
 */
export function StudySubjects({ entries }: { entries: StudyMaterialMeta[] }) {
  const countBySubject = new Map<string, number>();
  for (const entry of entries) {
    countBySubject.set(entry.subject, (countBySubject.get(entry.subject) ?? 0) + 1);
  }

  return (
    <div>
      <Reveal>
        <SectionHeading
          id="subjects-heading"
          eyebrow="Supported shelves"
          title="Browse by subject"
          description="Twelve shelves the library supports. A shelf with no resources yet says so plainly — support is not a claim of coverage."
        />
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {studySubjects.map((subject, index) => {
          const Icon = subject.icon;
          const count = countBySubject.get(subject.id) ?? 0;
          return (
            <Reveal key={subject.id} delay={(index % 3) * 0.05} className="h-full">
              <article className="h-full rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-midnight-soft">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-research dark:bg-midnight dark:text-scientific"
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-midnight dark:text-white">
                    {subject.name}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {subject.description}
                </p>
                <p
                  className={`mt-3 text-xs font-semibold ${
                    count > 0
                      ? "text-research dark:text-scientific-soft"
                      : "text-slate-400 dark:text-slate-500"
                  }`}
                >
                  {count === 0
                    ? "Shelf open — no resources yet"
                    : `${count} resource${count === 1 ? "" : "s"}`}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
