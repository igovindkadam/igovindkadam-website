import Link from "next/link";
import { ArrowRight, Compass, Milestone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";

/** Journey preview, vision statement, and contact call to action. */
export function ClosingSections() {
  return (
    <>
      <section
        aria-labelledby="journey-heading"
        className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
                <Milestone aria-hidden className="size-4" />
                Journey
              </p>
              <h2
                id="journey-heading"
                className="mt-2 font-display text-3xl font-bold text-balance text-midnight sm:text-4xl dark:text-white"
              >
                The road so far — and what is next
              </h2>
            </div>
            <dl className="mt-8 space-y-6">
              <div className="border-l-2 border-scientific pl-5">
                <dt className="text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-400">
                  Present
                </dt>
                <dd className="mt-1 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  Independent research and engineering across intelligence,
                  computation, and emerging technologies — with KryomCode as
                  the featured engineering effort.
                </dd>
              </div>
              <div className="border-l-2 border-slate-300 pl-5 dark:border-slate-600">
                <dt className="text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-400">
                  Future
                </dt>
                <dd className="mt-1 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  Deeper research programs, documented publications, and a
                  growing KryomLabs ecosystem. Ambitions, not achievements —
                  verified milestones will be listed here as they happen.
                </dd>
              </div>
            </dl>
            <div className="mt-8">
              <Button href="/experience" variant="secondary">
                View journey
                <ArrowRight aria-hidden className="size-4" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-midnight p-8 sm:p-10 dark:bg-black dark:ring-1 dark:ring-white/10">
              <Compass aria-hidden className="size-8 text-scientific" />
              <blockquote className="reading-surface mt-6 text-xl leading-relaxed text-balance text-slate-100 sm:text-2xl">
                “Long-term, I want to understand intelligence deeply —
                biological, artificial, and whatever lies between — and help
                build systems that extend what science and engineering can
                do.”
              </blockquote>
              <p className="mt-6 text-sm tracking-wide text-slate-400 uppercase">
                Govind Kadam · Guiding vision
              </p>
              <p className="mt-6">
                <Link
                  href="/vision"
                  className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium text-slate-200 ring-1 ring-white/20 transition-colors hover:bg-white/5 hover:text-white"
                >
                  Read the vision
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="contact-heading">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                id="contact-heading"
                align="center"
                eyebrow="Contact"
                title="Open to thoughtful conversation"
                description="Questions about the research directions, KryomCode, or a possible collaboration — the inbox is the right place to start. Direct channels will be published on the contact page."
              />
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" size="lg">
                  Get in touch
                  <ArrowRight aria-hidden className="size-4" />
                </Button>
                <Button href="/connect" variant="secondary" size="lg">
                  How to connect
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
