import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Factual list of what this section will contain once provided by the owner. */
  plannedContent: string[];
  children?: ReactNode;
}

/**
 * Shared foundation layout for unlaunched sections. Shows only the section
 * purpose and a factual list of planned content — never invented credentials.
 */
export function PlaceholderPage({
  eyebrow,
  title,
  description,
  icon: Icon,
  plannedContent,
  children,
}: PlaceholderPageProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="flex items-start gap-4">
        <span
          aria-hidden
          className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-research text-white dark:bg-scientific dark:text-midnight"
        >
          <Icon className="size-6" />
        </span>
        <div>
          <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
            {eyebrow}
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold text-balance text-midnight sm:text-5xl dark:text-white">
            {title}
          </h1>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 dark:border-slate-600 dark:bg-midnight-soft">
        <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
          Planned content — to be provided
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {plannedContent.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {children}

      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/" variant="secondary">
          Back to home
        </Button>
        <Button href="/contact" variant="ghost">
          Contact Govind
        </Button>
      </div>
    </div>
  );
}
