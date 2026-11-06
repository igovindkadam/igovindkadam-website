import type { TocHeading } from "@/lib/content";

/** Static table of contents with anchor links to slugged headings. */
export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  if (headings.length === 0) {
    return null;
  }
  return (
    <nav aria-label="Table of contents" className="print:hidden">
      <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-400">
        On this page
      </p>
      <ul className="mt-3 space-y-2 border-l border-slate-200 dark:border-slate-700">
        {headings.map((heading) => (
          <li key={heading.slug}>
            <a
              href={`#${heading.slug}`}
              className={`-ml-px block border-l-2 border-transparent pl-4 text-sm transition-colors hover:border-scientific hover:text-midnight dark:hover:text-white ${
                heading.depth === 3
                  ? "pl-7 text-slate-500 dark:text-slate-400"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
