import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";

/** Case study narrative: overview, problem, vision, design philosophy. */
export function CaseStudyNarrative() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <Reveal>
        <div>
          <SectionHeading
            id="overview-heading"
            eyebrow="Overview"
            title="Review-first companion for evidence-backed development"
          />
          <div className="reading-surface mt-5 space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              KryomCode is an AI-assisted coding and scientific research
              desktop workspace. It keeps the whole development chain in one
              Meta-first environment: research with cited sources,
              source-grounded plans, diff review, explicit approval, then
              verified execution.
            </p>
            <p>
              It does not claim to replace every IDE or coding agent.
              Instead, it is the place where AI assistance is always
              proposed, reviewed, approved, and verified — with the evidence
              kept alongside the code.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div>
          <SectionHeading
            id="problem-heading"
            eyebrow="Problem & motivation"
            title="Research dies in browser tabs"
          />
          <div className="reading-surface mt-5 space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              Papers get read, then implementation starts from a blank file
              with no trace back to the evidence. Meanwhile AI coding tools
              either act without review or bury their reasoning where it
              cannot be checked.
            </p>
            <p>
              The result is code nobody can audit: no sources, no plan
              record, no proof that verification actually ran. KryomCode
              exists to close that gap.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div>
          <SectionHeading
            id="vision-heading"
            eyebrow="Vision"
            title="Accessible, transparent, verifiable"
          />
          <div className="reading-surface mt-5 space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              KryomCode is built toward a workspace where a single builder
              can move from a research question to reviewed, verified
              implementation without losing the chain of evidence — and
              where every AI suggestion arrives with its reasoning visible
              and its execution gated behind human approval.
            </p>
            <p>
              The long-term direction is evidence-driven AI-assisted
              engineering and scientific research. Intended application
              areas include robotics, quantum computing, scientific
              computing, machine learning, and aerospace — directions for
              the product, not claims that every specialized workflow is
              already implemented.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="h-full rounded-2xl bg-midnight p-7 sm:p-8 dark:bg-black dark:ring-1 dark:ring-white/10">
          <h3 className="font-display text-xl font-bold text-white">
            Design philosophy
          </h3>
          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-300">
            <li className="flex gap-3">
              <span aria-hidden className="font-bold text-scientific">01</span>
              Proposed, never presumed — the agent suggests, the human
              decides.
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="font-bold text-scientific">02</span>
              Reviewed with intent — every edit carries its rationale and
              its diff.
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="font-bold text-scientific">03</span>
              Verified with confidence — reports pin to observed runs, not
              model prose.
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="font-bold text-scientific">04</span>
              Honest by default — no silent fallbacks, no invented model
              properties, no faked checks.
            </li>
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
