import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project, ProjectCategory, ProjectStatus } from "@/data/projects";
import { StatusBadge } from "@/components/ui/status-badge";
import type { DivisionStatus } from "@/data/kryomlabs";

const releasedBadgeClasses =
  "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-200";

function statusToDivision(status: ProjectStatus): DivisionStatus {
  if (status === "released" || status === "active") {
    return "active";
  }
  return status;
}

/** Status pill for project cards, including the Released state. */
export function ProjectStatusPill({ project }: { project: Project }) {
  if (project.status === "released") {
    return (
      <span
        className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${releasedBadgeClasses}`}
      >
        {project.statusLabel}
      </span>
    );
  }
  return <StatusBadge status={statusToDivision(project.status)} />;
}

interface ProjectCardProps {
  project: Project;
  category?: ProjectCategory;
}

/**
 * Reusable portfolio card: image, name, description, category, status,
 * verified stack, and view action. Entire card links to the project page.
 */
export function ProjectCard({ project, category }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-scientific hover:shadow-xl hover:shadow-slate-900/5 focus-within:border-scientific dark:border-slate-700 dark:bg-midnight-soft dark:hover:border-scientific dark:hover:shadow-black/40">
      <Link
        href={project.href}
        aria-label={`View project: ${project.name}`}
        className="flex h-full flex-col rounded-xl"
      >
        <span className="relative block aspect-video overflow-hidden bg-midnight">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute top-3 left-3">
            <ProjectStatusPill project={project} />
          </span>
        </span>
        <span className="flex flex-1 flex-col p-5">
          {category ? (
            <span className="text-xs font-semibold tracking-widest text-research uppercase dark:text-scientific-soft">
              {category.name}
            </span>
          ) : null}
          <span className="mt-1 font-display text-xl font-bold text-midnight dark:text-white">
            {project.name}
          </span>
          <span className="mt-1 block text-sm font-medium text-slate-500 dark:text-slate-400">
            {project.tagline}
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </span>
          {project.stack.length > 0 ? (
            <span className="mt-3 flex flex-wrap gap-1.5" aria-label="Verified technology stack">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 dark:bg-midnight dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </span>
          ) : null}
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-research dark:text-scientific-soft">
            View project
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </span>
      </Link>
    </article>
  );
}
