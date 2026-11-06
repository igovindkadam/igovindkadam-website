import { Compass } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";

const philosophy: { title: string; description: string }[] = [
  {
    title: "Research with evidence",
    description:
      "Every technical choice traces back to a source, a test, or a documented run. KryomCode's verification record is the template.",
  },
  {
    title: "Engineering with discipline",
    description:
      "Scope it, review it, verify it. Checkpoints and rollback before confidence; the demo is never the deliverable.",
  },
  {
    title: "Human oversight and responsibility",
    description:
      "Consequential actions pass through human approval — in the tools built here, and in how they are released.",
  },
  {
    title: "Iterative experimentation",
    description:
      "Smallest shippable proof first, then hardening. Version 0.1.0 teaches more than version 1.0 plans.",
  },
  {
    title: "Long-term technological exploration",
    description:
      "Fields are explored on decade horizons. Today's reading in quantum or robotics is tomorrow's division candidate.",
  },
];

const futureDirections: string[] = [
  "Hardening KryomCode through real use, issues, and subsequent releases",
  "Confirming the next division only when evidence justifies it",
  "Publishing research notes that feed back into the tooling",
  "Growing the ecosystem one verified artifact at a time",
];

/** Engineering philosophy shared across the ecosystem. */
export function LabsPhilosophy() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          id="philosophy-heading"
          eyebrow="How KryomLabs builds"
          title="Engineering philosophy"
          description="The working agreements behind every division — consistent with the research philosophy, stated for engineering."
        />
      </Reveal>
      <div role="list" className="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-2">
        {philosophy.map((principle, index) => (
          <Reveal key={principle.title} delay={(index % 2) * 0.06}>
            <div role="listitem" className="flex gap-4">
              <span
                aria-hidden
                className="font-display text-2xl font-bold text-scientific"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-midnight dark:text-white">
                  {principle.title}
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {principle.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/** Aspirations for the ecosystem — never presented as delivered. */
export function LabsFuture() {
  return (
    <Reveal>
      <div className="rounded-2xl bg-midnight p-7 sm:p-10 dark:bg-black dark:ring-1 dark:ring-white/10">
        <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-scientific-soft uppercase">
          <Compass aria-hidden className="size-4" />
          Future ecosystem direction
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-balance text-white">
          Aspirations, not a roadmap
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {futureDirections.map((direction) => (
            <li
              key={direction}
              className="rounded-lg bg-white/5 p-4 text-[15px] leading-relaxed text-slate-200 ring-1 ring-white/10"
            >
              {direction}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-slate-400">
          No fake product cards, no progress bars. Each aspiration becomes
          a division only with owner confirmation and evidence.
        </p>
      </div>
    </Reveal>
  );
}
