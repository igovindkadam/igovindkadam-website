import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Bot,
  Brain,
  Calculator,
  Cpu,
  FlaskConical,
  Hexagon,
  Network,
  Rocket,
  Sigma,
} from "lucide-react";

/**
 * About page content. Only owner-confirmed facts belong here — see
 * docs/updating-personal-content.md for how to extend this file.
 */

export interface Biography {
  fullName: string;
  designation: string;
  shortIntro: string;
  /** Extended paragraphs; empty until the owner provides a biography. */
  extended: string[];
  currentFocus: string[];
  location?: string;
  profileImage?: { src: string; alt: string };
}

export const biography: Biography = {
  fullName: "Govind Kadam",
  designation: "Independent Researcher & Engineer",
  shortIntro:
    "An independent researcher and engineer exploring the frontiers of intelligence, computation, and emerging technologies — turning curiosity into research, and ideas into engineering.",
  extended: [],
  currentFocus: [
    "KryomCode — a Meta AI-powered desktop IDE connecting scientific research and software engineering",
    "Building this research center: domains, notes, and documented investigations",
    "Independent study across AI, computing, mathematics, and emerging technologies",
  ],
};

export interface InterestDomain {
  name: string;
  /** Interest-framed line — never a claim of expertise. */
  line: string;
  verb: "Exploring" | "Learning" | "Studying" | "Interested in" | "Investigating";
  icon: LucideIcon;
}

export const aboutInterests: InterestDomain[] = [
  {
    name: "Artificial Intelligence & Machine Learning",
    line: "How machines learn, reason, and assist with real work.",
    verb: "Exploring",
    icon: Brain,
  },
  {
    name: "Artificial General Intelligence",
    line: "What general intelligence is and how it might emerge.",
    verb: "Studying",
    icon: Network,
  },
  {
    name: "Advanced AI & Long-Term Intelligence",
    line: "Where intelligent systems go over decades, not quarters.",
    verb: "Interested in",
    icon: Cpu,
  },
  {
    name: "Robotics & Autonomous Systems",
    line: "Intelligence embodied in machines that act physically.",
    verb: "Exploring",
    icon: Bot,
  },
  {
    name: "Quantum Computing",
    line: "Computation beyond the classical model.",
    verb: "Learning",
    icon: Atom,
  },
  {
    name: "Quantum AI",
    line: "The meeting point of quantum systems and learning.",
    verb: "Interested in",
    icon: FlaskConical,
  },
  {
    name: "Mathematics & Theoretical Physics",
    line: "The formal language beneath everything else.",
    verb: "Studying",
    icon: Sigma,
  },
  {
    name: "Scientific Computing",
    line: "Simulation and numerical methods for science.",
    verb: "Learning",
    icon: Calculator,
  },
  {
    name: "Aerospace & Space Science",
    line: "Flight, orbit, and exploration.",
    verb: "Interested in",
    icon: Rocket,
  },
  {
    name: "Emerging Interdisciplinary Technologies",
    line: "Biotech, nanotech, and materials where fields collide.",
    verb: "Investigating",
    icon: Hexagon,
  },
];

export interface PhilosophyPrinciple {
  title: string;
  description: string;
}

export const researchPhilosophy: PhilosophyPrinciple[] = [
  {
    title: "Evidence before assumptions",
    description:
      "Claims start from observable sources. When evidence is missing, the honest answer is that it is missing.",
  },
  {
    title: "Understanding before implementation",
    description:
      "Build only what is understood. A working system nobody comprehends is a liability, not an asset.",
  },
  {
    title: "Curiosity with discipline",
    description:
      "Wide-ranging scientific curiosity, held to engineering discipline: scope it, review it, verify it.",
  },
  {
    title: "Reproducibility and verification",
    description:
      "Results that cannot be reproduced were never results. Checks must pin to observed runs.",
  },
  {
    title: "Responsible advanced technologies",
    description:
      " Powerful systems demand care: human approval on consequential actions, honesty about limits.",
  },
  {
    title: "Learning across boundaries",
    description:
      "The most interesting problems ignore disciplinary borders, so the learning does too.",
  },
];

export interface JourneyMilestone {
  date: string;
  title: string;
  description: string;
  href?: string;
  hrefLabel?: string;
}

/**
 * Personal journey milestones. Only entries with verified dates are
 * listed — undated beginnings stay out until the owner confirms them.
 */
export const journeyMilestones: JourneyMilestone[] = [
  {
    date: "2026",
    title: "Entered the Meta Global AI Developer Hackathon",
    description:
      "First public engineering milestone: Team KryomLabs #1011 in the Indie Developer solo track, problem statement “Push the Frontier”.",
    href: "/projects/kryomcode",
    hrefLabel: "Read the KryomCode case study",
  },
  {
    date: "2026-11-03",
    title: "First public software release",
    description:
      "KryomCode v0.1.0 shipped publicly under the MIT license with an install-tested Windows release.",
    href: "/projects/kryomcode",
    hrefLabel: "Read the KryomCode case study",
  },
];

export interface RelatedDestination {
  href: string;
  label: string;
  description: string;
}

export const relatedDestinations: RelatedDestination[] = [
  {
    href: "/research",
    label: "Research",
    description: "Domains, investigations, and notes.",
  },
  {
    href: "/publications",
    label: "Publications",
    description: "Papers and reports as they verify.",
  },
  {
    href: "/projects",
    label: "Projects",
    description: "Engineering portfolio, led by KryomCode.",
  },
  {
    href: "/study-materials",
    label: "Study Materials",
    description: "Notes and learning resources.",
  },
  {
    href: "/kryomlabs",
    label: "KryomLabs",
    description: "The broader research ecosystem.",
  },
  {
    href: "/experience",
    label: "Experience",
    description: "Evidence-based engineering journey.",
  },
  {
    href: "/connect",
    label: "Connect",
    description: "Channels and conversation topics.",
  },
];
