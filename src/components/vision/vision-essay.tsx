import { Clock } from "lucide-react";
import { MdxBody } from "@/components/scientific/mdx-body";
import { ReadingProgress } from "@/components/scientific/reading-progress";
import { TableOfContents } from "@/components/scientific/table-of-contents";
import type { ContentEntry, VisionMeta } from "@/lib/content";
import { readingMinutes } from "@/lib/content-model";

/** Long-form reading layout for the vision essay. */
export function VisionEssay({ entry }: { entry: ContentEntry<VisionMeta> }) {
  const { meta, body, source, headings } = entry;
  const minutes = readingMinutes(body);

  return (
    <>
      <ReadingProgress />
      <div id="essay" className="scroll-mt-20">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
            The essay
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-balance text-midnight sm:text-4xl dark:text-white">
            {meta.title}
          </h2>
          <p className="reading-surface mt-3 text-xl text-slate-600 dark:text-slate-300">
            {meta.description}
          </p>
          <p className="mt-4 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <Clock aria-hidden className="size-4" />
            {minutes} min read · personal essay, not a research paper
          </p>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <article data-reading-body className="reading-surface min-w-0 max-w-3xl">
            <MdxBody source={source} />
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
