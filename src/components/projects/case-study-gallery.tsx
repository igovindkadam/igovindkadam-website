import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { kryomCodeGallery, kryomCodeLinks } from "@/data/projects";

/** Authentic screenshot gallery plus the verified demo video. */
export function CaseStudyGallery() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <div>
        <Reveal>
          <SectionHeading
            id="screenshots-heading"
            eyebrow="Real captures"
            title="Screenshots"
            description="Authentic captures from the running app (dark theme), served from the project repository with their documented captions."
          />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {kryomCodeGallery.map((shot, index) => (
            <Reveal key={shot.src} delay={(index % 2) * 0.06}>
              <figure className="group overflow-hidden rounded-xl border border-slate-200 bg-midnight transition-colors hover:border-scientific dark:border-slate-700 dark:hover:border-scientific">
                <span className="block overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={`${shot.title} — ${shot.caption}`}
                    width={shot.width}
                    height={shot.height}
                    loading="lazy"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </span>
                <figcaption className="border-t border-slate-200 bg-white px-5 py-4 dark:border-slate-700 dark:bg-midnight-soft">
                  <p className="font-display text-sm font-bold text-midnight dark:text-white">
                    {String(index + 1).padStart(2, "0")} · {shot.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {shot.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            Source: KryomCode repository docs gallery. Additional
            supplementary shots stay in the repository outside this gallery.
          </p>
        </Reveal>
      </div>

      <div id="demo" className="scroll-mt-20">
        <Reveal>
          <SectionHeading
            id="demo-heading"
            eyebrow="In motion"
            title="Demo video"
            description="The official 2:16 hackathon demo, recorded 2026-11-02 following the published demo script."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-midnight dark:border-slate-700">
            <div className="aspect-video w-full">
              <iframe
                src={kryomCodeLinks.demoEmbed}
                title="KryomCode official hackathon demo video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-midnight px-5 py-4 dark:bg-black">
              <p className="flex items-center gap-2 text-sm text-slate-300">
                <Play aria-hidden className="size-4 text-scientific" />
                H.264 1080p · AAC stereo · 2:16
              </p>
              <a
                href={kryomCodeLinks.demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-scientific-soft hover:underline"
              >
                Watch on YouTube
                <ExternalLink aria-hidden className="size-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
