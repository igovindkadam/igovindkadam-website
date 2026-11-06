import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { Reveal } from "@/components/home/reveal";
import { possibleLabsDirections } from "@/data/homepage";
import { kryomLabsDivisions } from "@/data/kryomlabs";

/** KryomLabs ecosystem preview. Statuses come straight from the data file. */
export function LabsEcosystem() {
  return (
    <section
      aria-labelledby="labs-heading"
      className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionHeading
            id="labs-heading"
            eyebrow="Ecosystem"
            title="KryomLabs"
            description="Engineering Intelligence. Shaping Tomorrow. The broader research and engineering ecosystem behind this website — shown here exactly as confirmed."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {kryomLabsDivisions.map((division, index) => (
            <Reveal key={division.name} delay={index * 0.06} className="h-full">
              <Card
                title={division.name}
                description={division.description}
                meta={
                  division.name === "KryomCode"
                    ? "Featured project"
                    : "Division · placeholder"
                }
                badge={<StatusBadge status={division.status} />}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-xl border border-dashed border-slate-300 p-6 dark:border-slate-600">
            <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
              Possible future directions — unconfirmed
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {possibleLabsDirections.join("  ·  ")}
            </p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Names under consideration only. They become divisions with a
              confirmed status only when the owner confirms them.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/kryomlabs">
              Explore KryomLabs
              <ArrowRight aria-hidden className="size-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
