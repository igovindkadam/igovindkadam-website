import { Reveal } from "@/components/home/reveal";

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  badge?: string;
  href?: string;
  hrefLabel?: string;
  external?: boolean;
}

/**
 * Shared chronological timeline. Screen-reader-friendly ordered list with
 * pulsing date markers; fully readable with reduced motion (CSS handles it).
 */
export function Timeline({ items }: { items: TimelineItem[] }) {
  if (items.length === 0) {
    return null;
  }
  return (
    <div role="list">
      {items.map((item, index) => {
        const last = index === items.length - 1;
        return (
          <Reveal key={`${item.date}-${item.title}`}>
            <div
              role="listitem"
              className="relative flex gap-5 pb-9 last:pb-0 sm:gap-8"
            >
              {!last ? (
                <span
                  aria-hidden
                  className="absolute top-9 bottom-0 left-[7px] w-px bg-slate-300 sm:left-[107px] dark:bg-slate-600"
                />
              ) : null}
              <span className="hidden w-24 shrink-0 pt-0.5 text-right font-mono text-sm font-semibold text-scientific sm:block">
                {item.date}
              </span>
              <span
                aria-hidden
                className="animate-pulse-node relative z-10 mt-1.5 size-4 shrink-0 rounded-full border-[3px] border-scientific bg-white sm:mt-1 dark:bg-midnight"
                style={{ animationDelay: `${-(index * 0.5)}s` }}
              />
              <span className="min-w-0">
                <span className="block font-mono text-xs font-semibold text-scientific sm:hidden">
                  {item.date}
                </span>
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-lg font-bold text-midnight dark:text-white">
                    {item.title}
                  </span>
                  {item.badge ? (
                    <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-500 dark:border-slate-600 dark:text-slate-400">
                      {item.badge}
                    </span>
                  ) : null}
                </span>
                <span className="mt-1 block max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-2 inline-block text-sm font-medium text-research underline decoration-scientific decoration-2 underline-offset-2 hover:text-research-deep dark:text-scientific-soft dark:hover:text-scientific"
                  >
                    {item.hrefLabel ?? "Learn more"}
                  </a>
                ) : null}
              </span>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
