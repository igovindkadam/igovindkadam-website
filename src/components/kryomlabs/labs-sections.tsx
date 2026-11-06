import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { Reveal } from "@/components/home/reveal";
import { kryomCodeBrand, kryomCodeFacts, kryomCodeLinks } from "@/data/projects";
import { kryomLabsDivisions, statusMeta } from "@/data/kryomlabs";
import { possibleLabsDirections } from "@/data/homepage";
import type { DivisionStatus } from "@/data/kryomlabs";

/** What KryomLabs is — and honestly is not. */
export function LabsIntro() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <Reveal>
        <div>
          <SectionHeading
            id="intro-heading"
            eyebrow="The ecosystem"
            title="What KryomLabs represents"
          />
          <div className="reading-surface mt-6 max-w-2xl space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              KryomLabs is the engineering and research ecosystem behind this
              website — the name under which independent projects are
              designed, built, and released. It exists because the most
              interesting problems ignore disciplinary borders: intelligence,
              computation, and the physical world meet in systems that must
              actually run.
            </p>
            <p>
              The focus is deliberately practical: turn ideas into working
              systems, document how they were built, and keep every claim
              tied to evidence. KryomCode, a released desktop IDE, is the
              first proof that the loop works.
            </p>
            <p>
              KryomLabs is an independent solo endeavor — not a company, not
              a funded organization, not an established laboratory. Division
              statuses below say exactly what is real and what is still
              being confirmed.
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <aside
          aria-label="Division status key"
          className="h-fit rounded-xl border border-slate-200 bg-slate-50 p-5 lg:sticky lg:top-24 dark:border-slate-700 dark:bg-midnight-soft"
        >
          <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-400">
            Status key
          </h3>
          <ul className="mt-3 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
            {(Object.keys(statusMeta) as DivisionStatus[]).map((status) => (
              <li key={status} className="flex items-center gap-3">
                <StatusBadge status={status} />
                <span>{statusMeta[status].hint}</span>
              </li>
            ))}
          </ul>
        </aside>
      </Reveal>
    </div>
  );
}

/** Concise KryomCode overview — the case study keeps the detail. */
export function LabsFeature() {
  const division = kryomLabsDivisions.find((entry) => entry.name === "KryomCode");

  return (
    <div>
      <Reveal>
        <SectionHeading
          id="featured-heading"
          eyebrow="Released project"
          title="KryomCode leads the ecosystem"
          description="The first shipped proof of the KryomLabs loop: research context flowing into reviewed, verified software."
        />
      </Reveal>
      <Reveal delay={0.06}>
        <div className="mt-8 grid gap-8 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 lg:grid-cols-[auto_minmax(0,1fr)] dark:border-slate-700 dark:bg-midnight-soft">
          <div className="flex items-start justify-center lg:justify-start">
            <Image
              src={kryomCodeBrand.src}
              alt={kryomCodeBrand.alt}
              width={160}
              height={160}
              className="size-36 rounded-2xl bg-midnight object-contain p-2 sm:size-40"
            />
          </div>
          <div className="min-w-0">
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-display text-2xl font-bold text-midnight dark:text-white">
                KryomCode
              </span>
              {division ? <StatusBadge status={division.status} /> : null}
            </p>
            <p className="mt-2 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
              A Meta AI-powered desktop IDE connecting scientific research
              and software engineering. Research → Understand → Plan →
              Review → Execute → Verify, with human approval on every
              consequential change.
            </p>
            <dl className="mt-5 grid max-w-2xl gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {kryomCodeFacts.map((fact) => (
                <div key={fact.label} className="flex gap-2">
                  <dt className="shrink-0 font-semibold text-slate-500 dark:text-slate-400">
                    {fact.label}:
                  </dt>
                  <dd className="text-slate-700 dark:text-slate-200">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/projects/kryomcode">
                Read the case study
                <ArrowRight aria-hidden className="size-4" />
              </Button>
              <Button href={kryomCodeLinks.repository} variant="secondary">
                Repository
                <ExternalLink aria-hidden className="size-4" />
              </Button>
              <Button href={kryomCodeLinks.release} variant="ghost">
                v0.1.0 release
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/**
 * Confirmed divisions plus honest placeholders. Unconfirmed entries render
 * as a count note — never as fake product cards.
 */
export function LabsDivisions() {
  const confirmed = kryomLabsDivisions.filter(
    (division) => division.status !== "tbd",
  );
  const awaiting = kryomLabsDivisions.length - confirmed.length;

  return (
    <div id="divisions" className="scroll-mt-20">
      <Reveal>
        <SectionHeading
          id="divisions-heading"
          eyebrow="Confirmed work"
          title="Ecosystem divisions"
          description="Every division below is confirmed with a real status. Names still under consideration are listed separately — as names, not divisions."
        />
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {confirmed.map((division, index) => (
          <Reveal key={division.name} delay={(index % 2) * 0.06} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-midnight-soft">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-midnight dark:text-white">
                  {division.name}
                </h3>
                <StatusBadge status={division.status} />
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                {division.description}
              </p>
              {division.name === "KryomCode" ? (
                <p className="mt-4">
                  <Button href="/projects/kryomcode" variant="secondary" size="sm">
                    Open case study
                    <ArrowRight aria-hidden className="size-4" />
                  </Button>
                </p>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
      {awaiting > 0 ? (
        <Reveal>
          <p className="mt-4 rounded-xl border border-dashed border-slate-300 p-5 text-sm leading-relaxed text-slate-500 dark:border-slate-600 dark:text-slate-400">
            {awaiting} further division {awaiting === 1 ? "slot is" : "slots are"}{" "}
            reserved and awaiting owner confirmation — no names, scopes, or
            statuses are shown until they are real.
          </p>
        </Reveal>
      ) : null}
      <Reveal>
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-6 dark:border-slate-600">
          <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
            Possible future directions — unconfirmed
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {possibleLabsDirections.join("  ·  ")}
          </p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Names under consideration only. Each becomes a division with a
            confirmed status only when the owner confirms it.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
