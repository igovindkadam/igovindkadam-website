import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { visionPrinciples, visionWorkLinks } from "@/data/vision";

/** Compact principles grid — personal aspirations, honestly labeled. */
export function VisionPrinciples() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          id="principles-heading"
          eyebrow="Personal compass"
          title="Vision principles"
          description="The principles behind the essay. Aspirations held as standards for future work — not outcomes already achieved."
        />
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visionPrinciples.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <Reveal key={principle.title} delay={(index % 3) * 0.05} className="h-full">
              <article className="h-full rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-midnight-soft">
                <span
                  aria-hidden
                  className="flex size-10 items-center justify-center rounded-lg bg-slate-100 text-research dark:bg-midnight dark:text-scientific"
                >
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-midnight dark:text-white">
                  {principle.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {principle.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

/** Links from the vision to genuine existing work. */
export function VisionWorkLinks() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          id="work-heading"
          eyebrow="Vision, grounded"
          title="Connected to actual work"
          description="The essay points here — to real pages and a released project. None of them is claimed to have achieved the vision."
        />
      </Reveal>
      <nav
        aria-label="Work connected to the vision"
        className="mt-8 grid gap-3 sm:grid-cols-2"
      >
        {visionWorkLinks.map((link, index) => (
          <Reveal key={link.href} delay={(index % 2) * 0.05} className="h-full">
            <Link
              href={link.href}
              className="group flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-scientific dark:border-slate-700 dark:bg-midnight-soft dark:hover:border-scientific"
            >
              <span className="min-w-0 flex-1">
                <span className="block font-display text-base font-bold text-midnight dark:text-white">
                  {link.label}
                </span>
                <span className="mt-0.5 block text-sm text-slate-500 dark:text-slate-400">
                  {link.description}
                </span>
              </span>
              <ArrowRight
                aria-hidden
                className="size-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-scientific"
              />
            </Link>
          </Reveal>
        ))}
      </nav>
    </div>
  );
}
