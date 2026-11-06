import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { Timeline } from "@/components/profile/timeline";
import { journeyMilestones, relatedDestinations } from "@/data/about";

/** Verified learning journey plus related destinations. */
export function AboutJourney() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          id="journey-heading"
          eyebrow="Documented milestones"
          title="Learning journey"
          description="Only milestones with verified dates appear here. Earlier beginnings stay out until their facts are confirmed."
        />
      </Reveal>
      <div className="mt-10">
        <Timeline items={journeyMilestones} />
      </div>
    </div>
  );
}

/** Elegant cross-links to the rest of the site. */
export function RelatedDestinations() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          id="destinations-heading"
          eyebrow="Keep exploring"
          title="Related destinations"
        />
      </Reveal>
      <nav
        aria-label="Related destinations"
        className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {relatedDestinations.map((destination, index) => (
          <Reveal key={destination.href} delay={(index % 3) * 0.05} className="h-full">
            <Link
              href={destination.href}
              className="group flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-scientific dark:border-slate-700 dark:bg-midnight-soft dark:hover:border-scientific"
            >
              <span className="min-w-0 flex-1">
                <span className="block font-display text-base font-bold text-midnight dark:text-white">
                  {destination.label}
                </span>
                <span className="mt-0.5 block truncate text-sm text-slate-500 dark:text-slate-400">
                  {destination.description}
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
