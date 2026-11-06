import type { LucideIcon } from "lucide-react";
import {
  Atom,
  BookOpen,
  Bot,
  Brain,
  Calculator,
  ClipboardList,
  Code2,
  Cpu,
  DraftingCompass,
  FlaskConical,
  GraduationCap,
  Library,
  Lightbulb,
  ListChecks,
  Network,
  Orbit,
  PenLine,
  Rocket,
  Sigma,
} from "lucide-react";
import type {
  StudyDifficulty,
  StudyMaterialMeta,
  StudyResourceType,
  StudyStatus,
  StudySubject,
} from "@/lib/content-model";

/**
 * Study Materials taxonomy. Subjects and types describe supported shelves —
 * they never imply that resources already exist on every shelf.
 */

export interface StudySubjectMeta {
  id: StudySubject;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const studySubjects: StudySubjectMeta[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Foundations, proofs, and mathematical methods.",
    icon: Sigma,
  },
  {
    id: "physics",
    name: "Physics",
    description: "Classical and modern physics, concept by concept.",
    icon: Atom,
  },
  {
    id: "computer-science",
    name: "Computer Science & Programming",
    description: "Algorithms, systems, and the craft of code.",
    icon: Code2,
  },
  {
    id: "research-methodology",
    name: "Scientific Research Methodology",
    description: "How to investigate, verify, and document.",
    icon: FlaskConical,
  },
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    description: "Learning systems from first principles.",
    icon: Brain,
  },
  {
    id: "agi",
    name: "Artificial General Intelligence",
    description: "Reading and reasoning about general intelligence.",
    icon: Network,
  },
  {
    id: "robotics",
    name: "Robotics & Autonomous Systems",
    description: "Embodied intelligence and autonomous machines.",
    icon: Bot,
  },
  {
    id: "quantum-computing",
    name: "Quantum Computing",
    description: "Qubits, gates, and quantum algorithms.",
    icon: Cpu,
  },
  {
    id: "quantum-ai",
    name: "Quantum AI",
    description: "Where quantum computing meets learning.",
    icon: Orbit,
  },
  {
    id: "scientific-computing",
    name: "Scientific Computing",
    description: "Simulation and numerical methods.",
    icon: Calculator,
  },
  {
    id: "aerospace",
    name: "Aerospace & Space Science",
    description: "Flight, orbit, and exploration.",
    icon: Rocket,
  },
  {
    id: "interdisciplinary",
    name: "Interdisciplinary Technologies",
    description: "Biotech, nanotech, and fields in collision.",
    icon: DraftingCompass,
  },
];

export function studySubjectById(id: string): StudySubjectMeta | undefined {
  return studySubjects.find((subject) => subject.id === id);
}

export const studyResourceTypeMeta: Record<
  StudyResourceType,
  { label: string; description: string; icon: LucideIcon }
> = {
  notes: {
    label: "Study Notes",
    description: "Condensed notes from reading and courses.",
    icon: PenLine,
  },
  guide: {
    label: "Learning Guide",
    description: "Structured paths through a topic.",
    icon: GraduationCap,
  },
  tutorial: {
    label: "Tutorial",
    description: "Step-by-step practical walkthroughs.",
    icon: ListChecks,
  },
  explanation: {
    label: "Technical Explanation",
    description: "One concept, explained carefully.",
    icon: Lightbulb,
  },
  derivation: {
    label: "Mathematical Derivation",
    description: "Results built up from first principles.",
    icon: Sigma,
  },
  "problem-set": {
    label: "Problem Set",
    description: "Practice problems with worked thinking.",
    icon: ClipboardList,
  },
  "reading-list": {
    label: "Reading List",
    description: "Curated sources worth the hours.",
    icon: Library,
  },
  exercises: {
    label: "Practical Exercises",
    description: "Hands-on tasks to build intuition.",
    icon: FlaskConical,
  },
  reference: {
    label: "Reference Material",
    description: "Cheat sheets, definitions, and lookups.",
    icon: BookOpen,
  },
};

export const studyDifficultyMeta: Record<StudyDifficulty, { label: string }> = {
  introductory: { label: "Introductory" },
  intermediate: { label: "Intermediate" },
  advanced: { label: "Advanced" },
};

/** A resource qualifies for LearningResource markup only when genuinely published. */
export function qualifiesForLearningMarkup(resource: StudyMaterialMeta): boolean {
  return !resource.draft && resource.status === "published";
}

export const studyStatusMeta: Record<
  StudyStatus,
  { label: string; meaning: string }
> = {
  published: {
    label: "Published",
    meaning: "Complete resource, published for reading.",
  },
  "in-progress": {
    label: "In Progress",
    meaning: "Being written; published parts may grow.",
  },
  archived: {
    label: "Archived",
    meaning: "Superseded or paused; kept for reference.",
  },
};
