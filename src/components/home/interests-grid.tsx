"use client";

import Link from "next/link";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { researchInterests } from "@/data/homepage";

/** Expandable grid of research interests. Interests, not claimed expertise. */
export function InterestsGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="research-interests"
      aria-labelledby="interests-heading"
      className="scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionHeading
            id="interests-heading"
            eyebrow="Fields of curiosity"
            title="Research interests"
            description="Areas I read, study, and think about. These are directions of interest — documented work will appear under Research as it becomes available."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researchInterests.map((interest, index) => {
            const Icon = interest.icon;
            const open = openIndex === index;
            return (
              <Reveal key={interest.name} delay={(index % 3) * 0.06}>
                <div
                  className={`h-full rounded-xl border bg-white transition-colors dark:bg-midnight-soft ${
                    open
                      ? "border-scientific dark:border-scientific"
                      : "border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    aria-controls={`interest-panel-${index}`}
                    className="flex w-full items-center gap-3 rounded-xl p-5 text-left"
                  >
                    <span
                      aria-hidden
                      className={`flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        open
                          ? "bg-scientific text-midnight"
                          : "bg-slate-100 text-slate-600 dark:bg-midnight dark:text-slate-300"
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1 font-display text-base font-semibold text-midnight dark:text-white">
                      {interest.name}
                    </span>
                    {open ? (
                      <Minus aria-hidden className="size-4 shrink-0 text-scientific" />
                    ) : (
                      <Plus aria-hidden className="size-4 shrink-0 text-slate-400" />
                    )}
                  </button>
                  {open ? (
                    <div id={`interest-panel-${index}`} className="px-5 pb-5">
                      <p className="border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600 dark:border-slate-700 dark:text-slate-300">
                        {interest.field}
                      </p>
                      <Link
                        href="/research"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-research hover:underline dark:text-scientific-soft"
                      >
                        Related research
                        <ArrowUpRight aria-hidden className="size-3.5" />
                      </Link>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
            Looking for finished work instead?{" "}
            <Link
              href="/projects"
              className="font-medium text-research underline decoration-scientific decoration-2 underline-offset-2 hover:text-research-deep dark:text-scientific-soft dark:hover:text-scientific"
            >
              Browse projects
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
