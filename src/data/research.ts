import type { LucideIcon } from "lucide-react";
import {
  Atom,
  BookOpen,
  Bot,
  Brain,
  Calculator,
  Cpu,
  Dna,
  FlaskConical,
  Hexagon,
  Network,
  Rocket,
  Sigma,
} from "lucide-react";
import type { ResearchKind, ResearchStatus } from "@/lib/content-model";

/**
 * Research Center taxonomy. Domains and statuses describe the shape of the
 * program — they never imply completed work on their own.
 */

export interface ResearchDomain {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const researchDomains: ResearchDomain[] = [
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    description: "Learning systems, models, and intelligent software.",
    icon: Brain,
  },
  {
    id: "agi",
    name: "AGI & Advanced Intelligence",
    description: "General intelligence and advanced AI systems.",
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
    description: "Quantum algorithms and computing models.",
    icon: Atom,
  },
  {
    id: "quantum-ai",
    name: "Quantum AI",
    description: "Where quantum computing meets machine intelligence.",
    icon: Cpu,
  },
  {
    id: "math-physics",
    name: "Mathematics & Physics",
    description: "Formal foundations beneath everything else.",
    icon: Sigma,
  },
  {
    id: "scientific-computing",
    name: "Scientific Computing",
    description: "Simulation and numerical methods for science.",
    icon: Calculator,
  },
  {
    id: "aerospace",
    name: "Aerospace & Space Science",
    description: "Flight, orbit, and exploration.",
    icon: Rocket,
  },
  {
    id: "biotech",
    name: "Biotechnology & Medical Technology",
    description: "Engineering at the scale of life and health.",
    icon: Dna,
  },
  {
    id: "nano-materials",
    name: "Nanotechnology & Materials Science",
    description: "Matter designed from the atom up.",
    icon: Hexagon,
  },
];

export function domainById(id: string): ResearchDomain | undefined {
  return researchDomains.find((domain) => domain.id === id);
}

export const researchStatusMeta: Record<
  ResearchStatus,
  { label: string; meaning: string }
> = {
  exploring: {
    label: "Exploring",
    meaning: "An interest under early reading; no confirmed investigation yet.",
  },
  "in-progress": {
    label: "In Progress",
    meaning: "Confirmed active investigation with work underway.",
  },
  completed: {
    label: "Completed",
    meaning: "Investigation finished and documented; not formally published.",
  },
  published: {
    label: "Published",
    meaning: "Released through a verified publication channel.",
  },
  archived: {
    label: "Archived",
    meaning: "Paused or superseded; kept for reference.",
  },
};

export const researchKindMeta: Record<
  ResearchKind,
  { label: string; description: string; icon: LucideIcon }
> = {
  note: {
    label: "Research note",
    description: "Short recorded observations and working thoughts.",
    icon: BookOpen,
  },
  essay: {
    label: "Research essay",
    description: "Longer-form exploration of an idea or question.",
    icon: BookOpen,
  },
  investigation: {
    label: "Technical investigation",
    description: "Structured inquiry with method and findings.",
    icon: FlaskConical,
  },
  "literature-review": {
    label: "Literature review",
    description: "Survey of existing sources on a topic.",
    icon: BookOpen,
  },
  "experimental-report": {
    label: "Experimental report",
    description: "Documented experiment with observed results.",
    icon: FlaskConical,
  },
  guide: {
    label: "Guide",
    description: "How-to reference for the research system itself.",
    icon: BookOpen,
  },
};

export interface ResearchTier {
  name: string;
  description: string;
}

export const researchTiers: ResearchTier[] = [
  {
    name: "Research interests",
    description: "Fields of curiosity — what is read, studied, and followed.",
  },
  {
    name: "Active investigations",
    description: "Confirmed lines of inquiry with work underway.",
  },
  {
    name: "Research notes",
    description: "Recorded observations, essays, and working documents.",
  },
  {
    name: "Completed research",
    description: "Finished, documented investigations awaiting publication.",
  },
  {
    name: "Published work",
    description: "Formally released papers, preprints, and reports.",
  },
];
