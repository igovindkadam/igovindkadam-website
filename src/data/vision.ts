import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  FlaskConical,
  Handshake,
  HeartHandshake,
  Microscope,
  Wrench,
} from "lucide-react";

/** Personal principles behind the vision essay — aspirations, not outcomes. */
export interface VisionPrinciple {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const visionPrinciples: VisionPrinciple[] = [
  {
    title: "Curiosity without complacency",
    description:
      "Every answer opens two questions. Comfort with not-knowing, refusal to stay there.",
    icon: Microscope,
  },
  {
    title: "Evidence before certainty",
    description:
      "Strong claims need strong sources. Uncertainty is stated, not smoothed over.",
    icon: FlaskConical,
  },
  {
    title: "Understanding before implementation",
    description:
      "Build only what is understood. A system nobody comprehends is a liability.",
    icon: BookOpen,
  },
  {
    title: "Collaboration across disciplines",
    description:
      "The best problems ignore field boundaries, so the learning does too.",
    icon: Handshake,
  },
  {
    title: "Responsible technological progress",
    description:
      "Human oversight on consequential actions; limits documented honestly.",
    icon: HeartHandshake,
  },
  {
    title: "Systems of meaningful value",
    description:
      "Build things that earn their existence by helping humanity think and do.",
    icon: Wrench,
  },
];

/** Genuine work the vision connects to — none claimed as its achievement. */
export interface VisionWorkLink {
  href: string;
  label: string;
  description: string;
}

export const visionWorkLinks: VisionWorkLink[] = [
  {
    href: "/projects/kryomcode",
    label: "KryomCode",
    description: "The first artifact: research-to-software tooling, released.",
  },
  {
    href: "/research",
    label: "Research Center",
    description: "Where investigations will be documented as they verify.",
  },
  {
    href: "/study-materials",
    label: "Study Materials",
    description: "The library where foundations get worked in public.",
  },
  {
    href: "/kryomlabs",
    label: "KryomLabs",
    description: "The ecosystem growing one verified artifact at a time.",
  },
];
