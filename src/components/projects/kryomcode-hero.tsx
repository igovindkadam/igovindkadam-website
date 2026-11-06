import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, FolderGit2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import { ScienceBackground } from "@/components/projects/science-background";
import { kryomCodeBrand, kryomCodeFacts, kryomCodeLinks } from "@/data/projects";

/** Case study hero: brand, positioning, verified facts, primary links. */
export function KryomCodeHero() {
  return (
    <section aria-labelledby="kryomcode-case-heading" className="relative overflow-hidden">
      <ScienceBackground density={0.8} />
      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <Reveal>
          <p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-research hover:underline dark:text-scientific-soft"
            >
              <ArrowLeft aria-hidden className="size-4" />
              All projects
            </Link>
          </p>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-4">
                <span className="inline-flex shrink-0 overflow-hidden rounded-xl bg-black p-1.5 ring-1 ring-slate-900/10 dark:ring-white/10">
                  <Image
                    src={kryomCodeBrand.src}
                    alt={kryomCodeBrand.alt}
                    width={kryomCodeBrand.width}
                    height={kryomCodeBrand.height}
                    priority
                    style={{ height: 64, width: 64 }}
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
                    Case study · KryomLabs
                  </p>
                  <h1
                    id="kryomcode-case-heading"
                    className="font-display text-5xl font-bold text-midnight sm:text-6xl dark:text-white"
                  >
                    KryomCode
                  </h1>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                A Meta AI-powered desktop IDE that bridges scientific
                research and software engineering — where every AI-assisted
                change is proposed, reviewed, approved, and verified, with
                the evidence kept alongside the code.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  href={kryomCodeLinks.repository}
                  size="lg"
                >
                  <FolderGit2 aria-hidden className="size-4" />
                  View on GitHub
                </Button>
                <Button href={kryomCodeLinks.release} variant="secondary" size="lg">
                  <Download aria-hidden className="size-4" />
                  v0.1.0 release
                </Button>
                <Button href="#demo" variant="ghost" size="lg">
                  <Play aria-hidden className="size-4" />
                  Watch demo
                </Button>
              </div>
            </div>
            <dl className="grid shrink-0 grid-cols-2 gap-px overflow-hidden rounded-xl bg-slate-200 ring-1 ring-slate-200 sm:grid-cols-3 lg:w-80 lg:grid-cols-2 dark:bg-slate-700 dark:ring-slate-700">
              {kryomCodeFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-white px-4 py-3.5 dark:bg-midnight-soft"
                >
                  <dt className="text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-400">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-midnight dark:text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            An independent KryomLabs project integrating Meta AI models
            through their API; this does not imply official endorsement by,
            or affiliation with, Meta. Facts on this page are verified
            against the public repository README.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
