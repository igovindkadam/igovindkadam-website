import { ArrowDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { kryomCodeArchitecture, kryomCodeTrustNotes } from "@/data/projects";

/**
 * Original architecture visualization for KryomCode, drawn from the
 * repository's documented three-layer design: sandboxed renderer, preload
 * bridge, and main-process services. Connections animate with CSS only.
 */
export function ArchitectureDiagram() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          id="architecture-heading"
          eyebrow="Under the hood"
          title="System architecture"
          description="Three layers, one trust direction — the renderer never touches disk, network, or secrets. Electron 45 · React 19 · TypeScript 5.7 · Vite 6."
        />
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal delay={0.06}>
          <figure
            aria-label="KryomCode architecture: sandboxed renderer calls through the preload bridge into main-process services"
            className="overflow-hidden rounded-2xl border border-slate-200 bg-midnight p-5 sm:p-7 dark:border-slate-700 dark:bg-black"
          >
            <ol className="list-none space-y-0">
              {kryomCodeArchitecture.map((layer, index) => {
                const last = index === kryomCodeArchitecture.length - 1;
                return (
                  <li key={layer.id}>
                    <div
                      className={`rounded-xl p-5 ring-1 ${
                        layer.accent
                          ? "bg-scientific/10 ring-scientific/50"
                          : "bg-white/[0.04] ring-white/10"
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-display text-lg font-bold text-white">
                          {layer.name}
                        </p>
                        <p className="text-right text-xs text-slate-400">
                          {layer.subtitle}
                        </p>
                      </div>
                      <ul className="mt-3 space-y-1.5">
                        {layer.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-slate-300"
                          >
                            <span
                              aria-hidden
                              className="animate-pulse-node mt-[7px] size-1.5 shrink-0 rounded-full bg-scientific"
                              style={{ animationDelay: `${-(index * 0.7)}s` }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {!last ? (
                        <span
                          aria-hidden
                          className="mt-4 flex flex-col items-center gap-1 text-slate-500"
                        >
                          <span className="h-5 w-px bg-gradient-to-b from-scientific to-scientific/20" />
                          <ArrowDown className="size-4 text-scientific" />
                        </span>
                      ) : null}
                    </div>
                    {!last ? <span aria-hidden className="block h-3" /> : null}
                  </li>
                );
              })}
            </ol>
            <figcaption className="mt-5 border-t border-white/10 pt-4 font-mono text-xs leading-relaxed text-slate-400">
              src/app/App.tsx → kryom() → window.kryom → ipcMain.handle →
              service → disk / git / Meta API
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-midnight-soft">
            <h3 className="font-display text-xl font-bold text-midnight dark:text-white">
              Trust notes
            </h3>
            <ul className="mt-4 space-y-3">
              {kryomCodeTrustNotes.map((note) => (
                <li
                  key={note}
                  className="border-l-2 border-scientific pl-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                >
                  {note}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Drawn from the repository&apos;s documented architecture. Full
              details live in the project docs — see the links section below.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
