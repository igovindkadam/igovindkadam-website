import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { aboutInterests } from "@/data/about";

/** Interest domains framed as curiosity — never expertise claims. */
export function InterestDomains() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          id="interests-heading"
          eyebrow="Intellectual landscape"
          title="Academic & intellectual interests"
          description="Areas under active curiosity. Each line describes an interest — exploring, learning, studying — not completed research or expertise."
        />
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aboutInterests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <Reveal key={interest.name} delay={(index % 3) * 0.05} className="h-full">
              <article className="h-full rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-midnight-soft">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-research dark:bg-midnight dark:text-scientific"
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-midnight dark:text-white">
                    {interest.name}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-scientific">
                    {interest.verb}
                  </span>{" "}
                  <span className="lowercase">{interest.line}</span>
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
