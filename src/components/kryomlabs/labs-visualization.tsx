import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { Reveal } from "@/components/home/reveal";
import { kryomLabsDivisions } from "@/data/kryomlabs";
import { possibleLabsDirections } from "@/data/homepage";

/**
 * Ecosystem relationship map. The SVG is an illustration; the HTML node
 * list below it carries the same structure accessibly with real links.
 * Solid connectors mean released/active; dashed means conceptual.
 */
export function LabsVisualization() {
  const kryomCode = kryomLabsDivisions.find(
    (division) => division.name === "KryomCode",
  );

  return (
    <div>
      <Reveal>
        <SectionHeading
          id="map-heading"
          eyebrow="How it fits together"
          title="Ecosystem map"
          description="KryomLabs as parent, KryomCode as the released division, and future directions as explicitly conceptual — nothing implied beyond the data."
        />
      </Reveal>

      <Reveal delay={0.06}>
        <figure className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 dark:border-slate-700 dark:bg-midnight-soft">
          <svg
            viewBox="0 0 680 400"
            role="img"
            aria-label="Diagram: KryomLabs connects to the active KryomCode division with a solid line, and to five conceptual future directions with dashed lines."
            className="h-auto w-full"
          >
            {/* Solid connector: hub to released division */}
            <path
              d="M 272 200 C 340 200 360 124 428 124"
              fill="none"
              strokeWidth="2.5"
              className="stroke-research dark:stroke-scientific"
            />
            {/* Dashed connector: hub to conceptual cluster */}
            <path
              d="M 272 200 C 340 200 360 292 428 292"
              fill="none"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="animate-dash-flow stroke-slate-400 dark:stroke-slate-500"
            />
            {/* Hub node */}
            <g>
              <rect
                x="72"
                y="156"
                width="200"
                height="88"
                rx="12"
                className="fill-midnight dark:fill-black dark:stroke-white/20"
              />
              <text
                x="172"
                y="192"
                textAnchor="middle"
                fontSize="20"
                fontWeight="700"
                className="fill-white"
              >
                KryomLabs
              </text>
              <text
                x="172"
                y="216"
                textAnchor="middle"
                fontSize="12"
                className="fill-slate-300"
              >
                parent ecosystem
              </text>
            </g>
            {/* Released division node */}
            <g>
              <rect
                x="428"
                y="80"
                width="200"
                height="88"
                rx="12"
                fill="none"
                strokeWidth="2.5"
                className="stroke-research dark:stroke-scientific"
              />
              <circle cx="452" cy="112" r="6" className="fill-emerald-500" />
              <text
                x="466"
                y="117"
                fontSize="12"
                fontWeight="600"
                className="fill-emerald-700 dark:fill-emerald-300"
              >
                Active · Released
              </text>
              <text
                x="452"
                y="146"
                fontSize="19"
                fontWeight="700"
                className="fill-midnight dark:fill-white"
              >
                KryomCode
              </text>
            </g>
            {/* Conceptual cluster node */}
            <g>
              <rect
                x="428"
                y="232"
                width="200"
                height="120"
                rx="12"
                fill="none"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="stroke-slate-400 dark:stroke-slate-500"
              />
              <text
                x="452"
                y="258"
                fontSize="12"
                fontWeight="600"
                className="fill-slate-500 dark:fill-slate-400"
              >
                Conceptual · unconfirmed
              </text>
              <text
                x="452"
                y="280"
                fontSize="12"
                className="fill-slate-600 dark:fill-slate-300"
              >
                Kryom AI · Robotics
              </text>
              <text
                x="452"
                y="298"
                fontSize="12"
                className="fill-slate-600 dark:fill-slate-300"
              >
                Quantum · Cloud
              </text>
              <text
                x="452"
                y="316"
                fontSize="12"
                className="fill-slate-600 dark:fill-slate-300"
              >
                Aerospace
              </text>
              <text
                x="452"
                y="338"
                fontSize="11"
                fontStyle="italic"
                className="fill-slate-400 dark:fill-slate-500"
              >
                names only, not divisions
              </text>
            </g>
          </svg>
          <figcaption className="mt-6 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2 dark:border-slate-700">
            <div className="rounded-lg bg-slate-50 p-4 dark:bg-midnight">
              <p className="flex items-center gap-2 font-display text-sm font-bold text-midnight dark:text-white">
                <span aria-hidden className="inline-block h-0.5 w-6 bg-research dark:bg-scientific" />
                Released relationship
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                KryomCode v0.1.0 ships under KryomLabs with a public
                repository and release.{" "}
                {kryomCode ? (
                  <span className="ml-1 inline-flex align-middle">
                    <StatusBadge status={kryomCode.status} />
                  </span>
                ) : null}
              </p>
              <p className="mt-2">
                <Link
                  href="/projects/kryomcode"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-research hover:underline dark:text-scientific-soft"
                >
                  Open the case study
                  <ArrowUpRight aria-hidden className="size-4" />
                </Link>
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4 dark:bg-midnight">
              <p className="flex items-center gap-2 font-display text-sm font-bold text-midnight dark:text-white">
                <span
                  aria-hidden
                  className="inline-block h-0 w-6 border-t-2 border-dashed border-slate-400 dark:border-slate-500"
                />
                Conceptual relationship
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {possibleLabsDirections.join(" · ")} — names under
                consideration. No partnerships, dependencies, or
                institutions are implied.
              </p>
            </div>
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}
