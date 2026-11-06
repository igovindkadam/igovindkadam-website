import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { projectCategories, projectsInCategory } from "@/data/projects";

/**
 * Category sections for the portfolio. Only real projects render as cards;
 * every other category shows an honest empty state. No filters — there is
 * not enough project data to justify them yet.
 */
export function CategorySections() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="scroll-mt-20 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="mx-auto max-w-6xl space-y-14 px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            id="categories-heading"
            eyebrow="Browse by discipline"
            title="Project categories"
            description="A scalable home for future work. Categories without verified projects stay visibly empty until real entries arrive."
          />
        </Reveal>

        {projectCategories.map((category) => {
          const entries = projectsInCategory(category.id);
          const Icon = category.icon;
          return (
            <Reveal key={category.id}>
              <div>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex size-10 items-center justify-center rounded-lg bg-research text-white dark:bg-scientific dark:text-midnight"
                  >
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-midnight dark:text-white">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                  <p className="ml-auto shrink-0 text-sm text-slate-400 dark:text-slate-500">
                    {entries.length === 1
                      ? "1 project"
                      : `${entries.length} projects`}
                  </p>
                </div>

                {entries.length > 0 ? (
                  <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {entries.map((project) => (
                      <ProjectCard
                        key={project.slug}
                        project={project}
                        category={category}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 rounded-xl border border-dashed border-slate-300 p-6 dark:border-slate-600">
                    <p className="text-sm leading-relaxed text-slate-500 italic dark:text-slate-400">
                      No verified projects in this category yet. Entries
                      appear here only when real project work is ready to
                      show.
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
