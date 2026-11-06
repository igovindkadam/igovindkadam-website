import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import { ProjectStatusPill } from "@/components/projects/project-card";
import { kryomCodeWorkflowDetailed, projects } from "@/data/projects";
import { projectCategories } from "@/data/projects";

/** Large editorial feature for KryomCode on the projects page. */
export function FeaturedProject() {
  const project = projects.find((entry) => entry.featured) ?? projects[0];
  const category = projectCategories.find(
    (entry) => entry.id === project.categoryId,
  );

  return (
    <section aria-labelledby="featured-heading">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-midnight-soft">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-64 bg-midnight lg:min-h-full">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <span className="absolute top-4 left-4 flex gap-2">
                  <ProjectStatusPill project={project} />
                </span>
              </div>
              <div className="p-7 sm:p-10">
                <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
                  Featured project{category ? ` · ${category.name}` : ""}
                </p>
                <h2
                  id="featured-heading"
                  className="mt-2 font-display text-4xl font-bold text-midnight sm:text-5xl dark:text-white"
                >
                  {project.name}
                </h2>
                <p className="mt-3 text-lg font-medium text-slate-600 dark:text-slate-300">
                  {project.tagline}
                </p>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description} Every change traces back to the
                  research and checks behind it.
                </p>
                <ol
                  aria-label="KryomCode workflow"
                  className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium text-midnight dark:text-white"
                >
                  {kryomCodeWorkflowDetailed.map((stage, index) => (
                    <li key={stage.name} className="flex items-center gap-2">
                      {index > 0 ? (
                        <span aria-hidden className="text-scientific">
                          →
                        </span>
                      ) : null}
                      <span className="rounded-full border border-slate-200 px-3 py-1 dark:border-slate-600">
                        {stage.name}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-8">
                  <Button href={project.href} size="lg">
                    Read the case study
                    <ArrowRight aria-hidden className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
