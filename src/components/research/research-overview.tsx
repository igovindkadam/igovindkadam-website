import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { DomainNetwork } from "@/components/research/domain-network";
import { researchDomains, researchTiers } from "@/data/research";

/** Research overview taxonomy plus the ten anchored domain sections. */
export function ResearchOverview() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <SectionHeading
              id="overview-heading"
              eyebrow="What lives here"
              title="One center, five kinds of work"
              description="Everything in the Research Center sits on exactly one rung of this ladder — so interests are never mistaken for results."
            />
            <ol className="mt-8 space-y-0">
              {researchTiers.map((tier, index) => (
                <li
                  key={tier.name}
                  className="flex gap-4 border-t border-slate-200 py-4 last:border-b dark:border-slate-700"
                >
                  <span
                    aria-hidden
                    className="font-display text-sm font-bold text-scientific"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-base font-bold text-midnight dark:text-white">
                      {tier.name}
                    </span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {tier.description}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <DomainNetwork />
        </Reveal>
      </div>

      <div id="domains" className="scroll-mt-20">
        <Reveal>
          <SectionHeading
            id="domains-heading"
            eyebrow="Ten domains"
            title="Research domains"
            description="The fields under exploration. Each domain collects its investigations, notes, and essays as they are written."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researchDomains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <Reveal key={domain.id} delay={(index % 3) * 0.05} className="h-full">
                <article
                  id={`domain-${domain.id}`}
                  className="h-full scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-midnight-soft"
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-research dark:bg-midnight dark:text-scientific"
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-base font-bold text-midnight dark:text-white">
                      <span aria-hidden className="mr-1.5 text-xs font-bold text-scientific">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {domain.name}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {domain.description}
                  </p>
                  <p className="mt-3 text-sm text-slate-500 italic dark:text-slate-400">
                    No documented entries yet —{" "}
                    <Link
                      href="/research#domain-entries"
                      className="font-medium text-research not-italic hover:underline dark:text-scientific-soft"
                    >
                      how entries appear
                    </Link>
                    .
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <p id="domain-entries" className="mt-6 max-w-3xl scroll-mt-24 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Domain sections list genuine investigations, notes, and essays
            once the owner writes them. Until then, the honest state of
            every domain is: interest declared, documentation pending.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
