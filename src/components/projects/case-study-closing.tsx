import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  AtSign,
  BookOpen,
  Briefcase,
  Check,
  CircleAlert,
  Code2,
  Download,
  FileText,
  FolderGit2,
  Globe,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { researchInterests } from "@/data/homepage";
import {
  kryomCodeLimitations,
  kryomCodeLinks,
  kryomCodeRoadmap,
} from "@/data/projects";

const docLinks = [
  { label: "Architecture", href: kryomCodeLinks.docs.architecture },
  { label: "Security", href: kryomCodeLinks.docs.security },
  { label: "Platform support", href: kryomCodeLinks.docs.platformSupport },
  { label: "Limitations", href: kryomCodeLinks.docs.limitations },
  { label: "Changelog", href: kryomCodeLinks.docs.changelog },
  { label: "Vision", href: kryomCodeLinks.docs.vision },
];

/** Closing sections: links, limitations, roadmap, related, navigation. */
export function CaseStudyClosing() {
  const related = researchInterests.filter((interest) =>
    [
      "Artificial Intelligence",
      "Scientific Computing",
      "Mathematics and Physics",
    ].includes(interest.name),
  );

  return (
    <div className="space-y-16 sm:space-y-20">
      <div>
        <Reveal>
          <SectionHeading
            id="links-heading"
            eyebrow="Get it & follow it"
            title="GitHub and releases"
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Reveal className="h-full">
            <a
              href={kryomCodeLinks.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-scientific dark:border-slate-700 dark:bg-midnight-soft dark:hover:border-scientific"
            >
              <FolderGit2 aria-hidden className="size-6 text-midnight dark:text-white" />
              <span className="mt-3 font-display text-base font-bold text-midnight dark:text-white">
                Source repository
              </span>
              <span className="mt-1 block text-sm text-slate-600 dark:text-slate-300">
                KryomLabs/kryomcode — code, docs, and issue tracker.
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.06} className="h-full">
            <a
              href={kryomCodeLinks.release}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-scientific dark:border-slate-700 dark:bg-midnight-soft dark:hover:border-scientific"
            >
              <Download aria-hidden className="size-6 text-midnight dark:text-white" />
              <span className="mt-3 font-display text-base font-bold text-midnight dark:text-white">
                v0.1.0 release
              </span>
              <span className="mt-1 block text-sm text-slate-600 dark:text-slate-300">
                MIT release with the Windows x64 installer and SHA256.
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.12} className="h-full">
            <a
              href={kryomCodeLinks.issues}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-scientific dark:border-slate-700 dark:bg-midnight-soft dark:hover:border-scientific"
            >
              <CircleAlert aria-hidden className="size-6 text-midnight dark:text-white" />
              <span className="mt-3 font-display text-base font-bold text-midnight dark:text-white">
                Issues & releases
              </span>
              <span className="mt-1 block text-sm text-slate-600 dark:text-slate-300">
                Report bugs and follow future releases from v0.1.0 onward.
              </span>
            </a>
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <BookOpen aria-hidden className="size-4" />
              Project docs:
            </span>
            {docLinks.map((doc) => (
              <a
                key={doc.label}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 px-3 py-1 text-sm text-research transition-colors hover:border-scientific dark:border-slate-600 dark:text-scientific-soft dark:hover:border-scientific"
              >
                {doc.label}
              </a>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Built by Govind Kadam, solo developer at KryomLabs. Verified
            profiles:{" "}
            <a
              href={kryomCodeLinks.founder.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-research hover:underline dark:text-scientific-soft"
            >
              <Code2 aria-hidden className="size-3.5" /> GitHub
            </a>
            {" · "}
            <a
              href={kryomCodeLinks.founder.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-research hover:underline dark:text-scientific-soft"
            >
              <Briefcase aria-hidden className="size-3.5" /> LinkedIn
            </a>
            {" · "}
            <a
              href={kryomCodeLinks.founder.x}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-research hover:underline dark:text-scientific-soft"
            >
              <AtSign aria-hidden className="size-3.5" /> X
            </a>
            .
          </p>
        </Reveal>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <SectionHeading
              id="limitations-heading"
              eyebrow="Honest scope"
              title="Known limitations"
            />
            <ul className="mt-6 space-y-3">
              {kryomCodeLimitations.map((limitation) => (
                <li
                  key={limitation}
                  className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-600 dark:border-slate-700 dark:bg-midnight-soft dark:text-slate-300"
                >
                  <CircleAlert aria-hidden className="mt-0.5 size-4 shrink-0 text-scientific" />
                  {limitation}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div>
            <SectionHeading
              id="roadmap-heading"
              eyebrow="What is next"
              title="Future roadmap"
            />
            <ul className="mt-6 space-y-3">
              {kryomCodeRoadmap.map((item) => (
                <li
                  key={item.title}
                  className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-midnight-soft"
                >
                  <p className="flex items-center gap-2 text-sm font-bold text-midnight dark:text-white">
                    {item.done ? (
                      <Check aria-hidden className="size-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Globe aria-hidden className="size-4 text-scientific" />
                    )}
                    {item.title}
                    {item.done ? (
                      <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                        Done
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              Roadmap order follows the repository; nothing beyond the
              completed item is scheduled or promised.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 dark:border-slate-700 dark:bg-midnight-soft">
          <h3 className="flex items-center gap-2 font-display text-xl font-bold text-midnight dark:text-white">
            <FileText aria-hidden className="size-5 text-scientific" />
            Related research interests
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {related.map((interest) => {
              const Icon = interest.icon;
              return (
                <Link
                  key={interest.name}
                  href="/#research-interests"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-midnight transition-colors hover:border-scientific dark:border-slate-600 dark:bg-midnight dark:text-white dark:hover:border-scientific"
                >
                  <Icon aria-hidden className="size-4 text-research dark:text-scientific" />
                  {interest.name}
                </Link>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <nav
          aria-label="Project navigation"
          className="flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-research hover:underline dark:text-scientific-soft"
          >
            <ArrowLeft aria-hidden className="size-4" />
            Back to all projects
          </Link>
          <p className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            Next project
            <ArrowRight aria-hidden className="size-4" />
            <span className="italic">To be announced — only real projects ship here.</span>
          </p>
        </nav>
      </Reveal>
    </div>
  );
}
