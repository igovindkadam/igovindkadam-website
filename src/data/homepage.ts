import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Bot,
  Brain,
  Calculator,
  Check,
  ClipboardList,
  Cpu,
  Diff,
  Dna,
  Eye,
  FlaskConical,
  GitBranch,
  Hexagon,
  Network,
  Play,
  Rocket,
  Search,
  ShieldCheck,
  Sigma,
  Terminal,
} from "lucide-react";

/**
 * Homepage content data, kept separate from presentation.
 * Everything here is either owner-provided identity content or explicitly
 * marked as planned/future. No credentials, metrics, or results are claimed.
 */

export interface ResearchInterest {
  name: string;
  /** Plain description of the field — not a claim of expertise. */
  field: string;
  icon: LucideIcon;
}

export const researchInterests: ResearchInterest[] = [
  {
    name: "Artificial Intelligence",
    field: "Machine intelligence, from foundations to systems.",
    icon: Brain,
  },
  {
    name: "AGI and Advanced Intelligence",
    field: "Paths toward general and advanced intelligence.",
    icon: Network,
  },
  {
    name: "Robotics",
    field: "Autonomous systems that act in the physical world.",
    icon: Bot,
  },
  {
    name: "Quantum Computing",
    field: "Computation beyond the classical model.",
    icon: Atom,
  },
  {
    name: "Quantum AI",
    field: "Where quantum computing meets machine intelligence.",
    icon: Cpu,
  },
  {
    name: "Mathematics and Physics",
    field: "The formal language beneath everything else.",
    icon: Sigma,
  },
  {
    name: "Scientific Computing",
    field: "Simulation and numerical methods for science.",
    icon: Calculator,
  },
  {
    name: "Aerospace and Space Science",
    field: "Flight, orbit, and exploration.",
    icon: Rocket,
  },
  {
    name: "Biotechnology and Medical Technology",
    field: "Engineering at the scale of life.",
    icon: Dna,
  },
  {
    name: "Nanotechnology and Materials Science",
    field: "Matter, designed atom by atom.",
    icon: Hexagon,
  },
];

export interface WorkflowStep {
  name: string;
  icon: LucideIcon;
}

export const kryomCodeWorkflow: WorkflowStep[] = [
  { name: "Research", icon: Search },
  { name: "Understand", icon: Eye },
  { name: "Plan", icon: ClipboardList },
  { name: "Review", icon: Diff },
  { name: "Execute", icon: Play },
  { name: "Verify", icon: ShieldCheck },
];

export interface KryomCodeCapability {
  title: string;
  detail: string;
  icon: LucideIcon;
}

export const kryomCodeCapabilities: KryomCodeCapability[] = [
  {
    title: "Research-assisted development",
    detail: "Bring research context directly into the coding workflow.",
    icon: FlaskConical,
  },
  {
    title: "Research-to-implementation planning",
    detail: "Turn findings into structured implementation plans.",
    icon: ClipboardList,
  },
  {
    title: "Multi-file changes with human approval",
    detail: "Proposed edits across files, applied only with approval.",
    icon: Check,
  },
  {
    title: "Diff review, checkpoints, and rollback",
    detail: "Inspect every change and return to safe states.",
    icon: GitBranch,
  },
  {
    title: "Terminal, Git, testing, and verification",
    detail: "Core engineering workflows integrated in one place.",
    icon: Terminal,
  },
  {
    title: "Meta Muse AI integration",
    detail: "Powered by Meta Muse AI assistance.",
    icon: Cpu,
  },
];

/** Possible future KryomLabs directions. Unconfirmed ideas, not divisions. */
export const possibleLabsDirections: string[] = [
  "Kryom AI",
  "Kryom Robotics",
  "Kryom Quantum",
  "Kryom Cloud",
  "Kryom Aerospace",
];

export interface WorkPreview {
  index: string;
  title: string;
  description: string;
  note: string;
  href: string;
  linkLabel: string;
}

export const workPreviews: WorkPreview[] = [
  {
    index: "01",
    title: "Research",
    description: "Questions, areas, and lines of inquiry.",
    note: "Documented research will be published here as it becomes available.",
    href: "/research",
    linkLabel: "Visit research",
  },
  {
    index: "02",
    title: "Publications",
    description: "Papers, preprints, and scholarly writing.",
    note: "No entries yet. Confirmed publications will be listed here.",
    href: "/publications",
    linkLabel: "Visit publications",
  },
  {
    index: "03",
    title: "Books and Writing",
    description: "Reading, notes, and book-length work.",
    note: "Reading lists and writing will appear here over time.",
    href: "/books",
    linkLabel: "Visit books",
  },
  {
    index: "04",
    title: "Study Materials",
    description: "Notes, guides, and learning resources.",
    note: "Prepared materials will be published here as they are ready.",
    href: "/study-materials",
    linkLabel: "Visit study materials",
  },
];
