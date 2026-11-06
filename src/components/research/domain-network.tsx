"use client";

import { researchDomains } from "@/data/research";

const CENTER = 260;
const RADIUS = 168;
const VIEW = 520;

/**
 * Interactive research-domain network. Ten domain nodes orbit a shared
 * center — the spokes show only that every domain belongs to this one
 * research center, and imply no scientific relationships. Each node is a
 * real link to its domain section; fully usable by keyboard and with
 * reduced motion (static SVG, no animation dependency).
 */
export function DomainNetwork() {
  const nodes = researchDomains.map((domain, index) => {
    const angle = (index / researchDomains.length) * Math.PI * 2 - Math.PI / 2;
    return {
      domain,
      x: CENTER + RADIUS * Math.cos(angle),
      y: CENTER + RADIUS * Math.sin(angle),
    };
  });

  return (
    <figure className="mx-auto w-full max-w-xl">
      <svg
        viewBox={`0 0 ${VIEW} ${VIEW}`}
        role="group"
        aria-label="Research domain network: ten domains of one research center"
        className="h-auto w-full"
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          className="stroke-slate-300 dark:stroke-slate-600"
          strokeWidth="1"
          strokeDasharray="2 8"
        />
        {nodes.map(({ domain, x, y }) => (
          <line
            key={`spoke-${domain.id}`}
            x1={CENTER}
            y1={CENTER}
            x2={x}
            y2={y}
            className="stroke-slate-300 dark:stroke-slate-600"
            strokeWidth="1"
          />
        ))}
        <circle
          cx={CENTER}
          cy={CENTER}
          r="54"
          className="fill-research dark:fill-scientific"
        />
        <text
          x={CENTER}
          y={CENTER - 2}
          textAnchor="middle"
          className="fill-white font-display dark:fill-midnight"
          fontSize="13"
          fontWeight="700"
        >
          Research
        </text>
        <text
          x={CENTER}
          y={CENTER + 15}
          textAnchor="middle"
          className="fill-white/80 dark:fill-midnight/80"
          fontSize="10"
        >
          10 domains
        </text>
        {nodes.map(({ domain, x, y }, index) => (
          <g key={domain.id}>
            <a
              href={`#domain-${domain.id}`}
              aria-label={`${domain.name} — go to domain section`}
            >
              <circle
                cx={x}
                cy={y}
                r="30"
                className="fill-white stroke-slate-300 transition-colors hover:fill-scientific dark:fill-midnight-soft dark:stroke-slate-600 dark:hover:fill-scientific"
                strokeWidth="1.5"
              />
              <text
                x={x}
                y={y + 1}
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-midnight font-display pointer-events-none dark:fill-white"
                fontSize="13"
                fontWeight="700"
              >
                {String(index + 1).padStart(2, "0")}
              </text>
              <title>{domain.name}</title>
            </a>
          </g>
        ))}
      </svg>
      <figcaption className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
        Select a numbered node to jump to its domain. Positions carry no
        scientific meaning.
      </figcaption>
    </figure>
  );
}
