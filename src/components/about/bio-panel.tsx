import Image from "next/image";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { biography } from "@/data/about";

/**
 * Biography panel. Renders only confirmed fields — extended biography,
 * location, and portrait appear if and when the owner provides them.
 */
export function BioPanel() {
  return (
    <div id="biography" className="scroll-mt-20">
      <Reveal>
        <SectionHeading
          id="biography-heading"
          eyebrow="Introduction"
          title={`About ${biography.fullName}`}
        />
      </Reveal>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
        <Reveal>
          <div className="reading-surface max-w-3xl space-y-4 text-slate-600 dark:text-slate-300">
            <p className="text-xl leading-relaxed text-midnight dark:text-white">
              {biography.shortIntro}
            </p>
            {biography.extended.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            {biography.extended.length === 0 ? (
              <p className="rounded-lg border border-dashed border-slate-300 p-5 font-sans text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
                A fuller biography will appear here as details are
                confirmed — covering background, education, and the path
                into independent research.
              </p>
            ) : null}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <aside className="space-y-4 lg:pt-1">
            {biography.profileImage ? (
              <Image
                src={biography.profileImage.src}
                alt={biography.profileImage.alt}
                width={560}
                height={560}
                className="w-full rounded-xl object-cover"
              />
            ) : null}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-midnight-soft">
              <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-400">
                Current focus
              </h3>
              <ul className="mt-3 space-y-2.5">
                {biography.currentFocus.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-scientific pl-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {biography.location ? (
                <p className="mt-4 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                  <MapPin aria-hidden className="size-4" />
                  {biography.location}
                </p>
              ) : null}
            </div>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
