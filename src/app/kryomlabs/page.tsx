import type { Metadata } from "next";
import { Telescope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { kryomLabsDivisions, statusMeta } from "@/data/kryomlabs";

export const metadata: Metadata = {
  title: "KryomLabs",
  description:
    "The KryomLabs research and engineering ecosystem, including the featured KryomCode project.",
};

export default function KryomLabsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="flex items-start gap-4">
        <span
          aria-hidden
          className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-research text-white dark:bg-scientific dark:text-midnight"
        >
          <Telescope className="size-6" />
        </span>
        <div>
          <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
            Ecosystem
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold text-balance text-midnight sm:text-5xl dark:text-white">
            KryomLabs
          </h1>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        KryomLabs is the research and engineering ecosystem behind this
        website. KryomCode is its featured project. Division details, scope,
        and statuses will be published once confirmed by the owner.
      </p>

      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-midnight-soft">
        <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
          Division status key
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {(
            Object.entries(statusMeta) as [
              keyof typeof statusMeta,
              (typeof statusMeta)[keyof typeof statusMeta],
            ][]
          ).map(([status, meta]) => (
            <li key={status} className="flex items-center gap-3">
              <StatusBadge status={status} />
              <span>{meta.hint}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {kryomLabsDivisions.map((division) => (
          <Card
            key={division.name}
            title={division.name}
            description={division.description}
            meta="KryomLabs division · placeholder"
            badge={<StatusBadge status={division.status} />}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/projects" variant="secondary">
          View projects
        </Button>
        <Button href="/contact" variant="ghost">
          Contact Govind
        </Button>
      </div>
    </div>
  );
}
