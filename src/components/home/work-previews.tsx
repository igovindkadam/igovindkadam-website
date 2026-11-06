import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { workPreviews } from "@/data/homepage";

/** Numbered preview rows for research, publications, books, study materials. */
export function WorkPreviews() {
  return (
    <section aria-labelledby="work-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionHeading
            id="work-heading"
            eyebrow="Documented work"
            title="Research, writing, and resources"
            description="Home to future papers, notes, and learning materials. Each area opens with an honest empty state until real content arrives."
          />
        </Reveal>

        <div className="mt-10 border-t border-slate-200 dark:border-slate-800">
          {workPreviews.map((preview) => (
            <Reveal key={preview.href}>
              <Link
                href={preview.href}
                aria-label={`${preview.linkLabel}: ${preview.title}`}
                className="group grid gap-2 border-b border-slate-200 py-7 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-6 dark:border-slate-800"
              >
                <span
                  aria-hidden
                  className="font-display text-sm font-bold tracking-widest text-scientific"
                >
                  {preview.index}
                </span>
                <span>
                  <span className="block font-display text-2xl font-bold text-midnight group-hover:underline group-hover:decoration-scientific group-hover:decoration-2 group-hover:underline-offset-4 dark:text-white">
                    {preview.title}
                  </span>
                  <span className="mt-1 block text-base text-slate-600 dark:text-slate-300">
                    {preview.description}
                  </span>
                  <span className="mt-1 block text-sm text-slate-500 italic dark:text-slate-400">
                    {preview.note}
                  </span>
                </span>
                <span className="hidden items-center gap-2 text-sm font-medium text-research sm:inline-flex dark:text-scientific-soft">
                  {preview.linkLabel}
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
