import type { LucideIcon } from "lucide-react";
import {
  Code2,
  FlaskConical,
  FolderGit2,
  GraduationCap,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

/**
 * Experience data. Every entry must be verifiable — independent work is
 * labeled as independent work, and personal projects are never employment.
 * See docs/updating-personal-content.md for how to extend this file.
 */

export type ExperienceCategoryId =
  | "independent-research"
  | "engineering-projects"
  | "software-development"
  | "open-source"
  | "academic-learning"
  | "hackathons"
  | "collaborations";

export type ExperienceKind =
  | "employment"
  | "independent"
  | "personal-project"
  | "hackathon"
  | "learning"
  | "open-source";

export interface ExperienceCategory {
  id: ExperienceCategoryId;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const experienceCategories: ExperienceCategory[] = [
  {
    id: "independent-research",
    name: "Independent Research",
    description: "Self-directed scientific inquiry.",
    icon: FlaskConical,
  },
  {
    id: "engineering-projects",
    name: "Engineering Projects",
    description: "Designed and built systems.",
    icon: Wrench,
  },
  {
    id: "software-development",
    name: "Software Development",
    description: "Shipped software and tooling.",
    icon: Code2,
  },
  {
    id: "open-source",
    name: "Open-Source Contributions",
    description: "Public code and collaboration.",
    icon: FolderGit2,
  },
  {
    id: "academic-learning",
    name: "Academic & Technical Learning",
    description: "Structured study and courses.",
    icon: GraduationCap,
  },
  {
    id: "hackathons",
    name: "Hackathons & Competitions",
    description: "Time-boxed builds and entries.",
    icon: Trophy,
  },
  {
    id: "collaborations",
    name: "Collaborations & Professional Roles",
    description: "Work with others and employers.",
    icon: Users,
  },
];

export const experienceKindMeta: Record<
  ExperienceKind,
  { label: string; meaning: string }
> = {
  employment: {
    label: "Employment",
    meaning: "A formal role with an employer.",
  },
  independent: {
    label: "Independent work",
    meaning: "Self-directed work outside employment.",
  },
  "personal-project": {
    label: "Personal project",
    meaning: "Built independently; not employment.",
  },
  hackathon: {
    label: "Hackathon",
    meaning: "Competition entry; participation only unless stated.",
  },
  learning: {
    label: "Learning",
    meaning: "Study activity, not professional work.",
  },
  "open-source": {
    label: "Open source",
    meaning: "Public contribution or release.",
  },
};

export interface EvidenceLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ExperienceEntry {
  title: string;
  organization: string;
  role: string;
  /** Display date or range; precise only when verified. */
  date: string;
  description: string;
  categoryId: ExperienceCategoryId;
  kind: ExperienceKind;
  technologies: string[];
  achievements: string[];
  evidence: EvidenceLink[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: "KryomCode",
    organization: "KryomLabs",
    role: "Solo Developer",
    date: "2026",
    description:
      "Designed and built a Meta AI-powered desktop IDE connecting scientific research and software engineering, released publicly as v0.1.0 (MIT) with an install-tested Windows build.",
    categoryId: "engineering-projects",
    kind: "personal-project",
    technologies: ["Electron", "React", "TypeScript", "Vite", "Monaco Editor", "Git"],
    achievements: [
      "Public v0.1.0 release with documented verification record",
    ],
    evidence: [
      { label: "Case study", href: "/projects/kryomcode" },
      {
        label: "Repository",
        href: "https://github.com/KryomLabs/kryomcode",
        external: true,
      },
      {
        label: "v0.1.0 release",
        href: "https://github.com/KryomLabs/kryomcode/releases/tag/v0.1.0",
        external: true,
      },
    ],
  },
  {
    title: "Meta Global AI Developer Hackathon 2026",
    organization: "Meta hackathon program",
    role: "Solo entrant — Team KryomLabs #1011",
    date: "2026",
    description:
      "Entered the Indie Developer solo track with KryomCode under the problem statement “Push the Frontier”. Participation only — no award is claimed.",
    categoryId: "hackathons",
    kind: "hackathon",
    technologies: [],
    achievements: [],
    evidence: [
      { label: "KryomCode case study", href: "/projects/kryomcode" },
    ],
  },
];

export function entriesInCategory(
  categoryId: ExperienceCategoryId,
): ExperienceEntry[] {
  return experienceEntries.filter((entry) => entry.categoryId === categoryId);
}

export interface SkillGroup {
  /** Neutral evidence label — never a proficiency score. */
  label: "Used in KryomCode" | "Research interest";
  note: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Used in KryomCode",
    note: "Tools and technologies evidenced in the released project.",
    skills: ["TypeScript", "React", "Electron", "Vite", "Monaco Editor", "Git & GitHub"],
  },
  {
    label: "Research interest",
    note: "Fields under active curiosity, tracked in the Research Center — not skill claims.",
    skills: [
      "Artificial intelligence",
      "Quantum computing",
      "Robotics",
      "Scientific computing",
      "Mathematics & physics",
    ],
  },
];

export const futureDirections: string[] = [
  "Deepening the research program with documented investigations",
  "First verified publications with citable metadata",
  "Growing KryomLabs from one released project into an ecosystem",
  "Open-source collaboration with researchers and engineers",
];
