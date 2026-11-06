import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Reveal } from "@/components/home/reveal";
import { kryomCodeCapabilities, kryomCodeWorkflow } from "@/data/homepage";
import { kryomLabsDivisions, statusMeta } from "@/data/kryomlabs";

/** Featured KryomCode project section with workflow and capabilities. */
export function KryomCodeFeature() {
  const kryomCode = kryomLabsDivisions.find(
    (division) => division.name === "KryomCode",
  );

  return (
    <section aria-labelledby="kryomcode-heading" className="bg-midnight dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold tracking-wide text-scientific-soft uppercase">
              Featured project
            </p>
            {kryomCode ? <StatusBadge status={kryomCode.status} /> : null}
          </div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2
              id="kryomcode-heading"
              className="max-w-xl font-display text-4xl font-bold text-balance text-white sm:text-5xl"
            >
              KryomCode
            </h2>
            <p className="max-w-md text-base leading-relaxed text-slate-300">
              A Meta AI-powered desktop IDE connecting scientific research and
              software engineering.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ol
            aria-label="KryomCode workflow"
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-3 lg:grid-cols-6"
          >
            {kryomCodeWorkflow.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.name}
                  className="flex flex-col gap-3 bg-midnight p-5 dark:bg-black"
                >
                  <span className="flex items-center justify-between">
                    <Icon aria-hidden className="size-5 text-scientific" />
                    <span
                      aria-hidden
                      className="font-display text-xs font-bold text-slate-500"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="font-display text-base font-semibold text-white">
                    {step.name}
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="mt-3 text-sm tracking-wide text-slate-400">
            {kryomCodeWorkflow.map((step) => step.name).join("  →  ")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-8 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-2xl font-bold text-balance text-white sm:text-3xl">
              Built for research-driven engineering
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-slate-300">
              KryomCode keeps the full path from question to verified code in
              one place — with a human reviewing every consequential step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects">
                View projects
                <ArrowRight aria-hidden className="size-4" />
              </Button>
              <Link
                href="/kryomlabs"
                className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium text-slate-200 ring-1 ring-white/20 transition-colors hover:bg-white/5 hover:text-white"
              >
                Inside KryomLabs
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {kryomCodeCapabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <li key={capability.title} className="flex gap-4 py-4">
                    <span
                      aria-hidden
                      className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white/5 text-scientific ring-1 ring-white/10"
                    >
                      <Icon className="size-4" />
                    </span>
                    <span>
                      <span className="block font-medium text-white">
                        {capability.title}
                      </span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-slate-400">
                        {capability.detail}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-10 text-sm text-slate-500">
            Project visuals and documentation will be published here as they
            become available.{" "}
            {kryomCode ? (
              <Fragment>
                Current status:{" "}
                <span className="font-medium text-slate-300">
                  {statusMeta[kryomCode.status].label}.
                </span>
              </Fragment>
            ) : null}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
