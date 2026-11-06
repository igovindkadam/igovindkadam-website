import type { LucideIcon } from "lucide-react";
import {
  FlaskConical,
  BookOpen,
  GraduationCap,
  Briefcase,
  Mail,
  MessagesSquare,
  Telescope,
  FolderKanban,
  Library,
  FileText,
  User,
  Home,
} from "lucide-react";

export const siteIdentity = {
  name: "igovindkadam",
  owner: "Govind Kadam",
  positioning: "Independent Researcher & Engineer",
  featuredProject: "KryomCode",
  ecosystem: "KryomLabs",
  description:
    "Personal academic and research website of Govind Kadam, Independent Researcher & Engineer. Research, projects, publications, and study materials.",
} as const;

export interface SiteRoute {
  href: string;
  label: string;
  /** Short, factual description of what the section will contain. */
  description: string;
  icon: LucideIcon;
  /** Shown directly in the desktop header bar. */
  primary: boolean;
}

export const siteRoutes: SiteRoute[] = [
  {
    href: "/",
    label: "Home",
    description: "Introduction and entry point to the research website.",
    icon: Home,
    primary: false,
  },
  {
    href: "/about",
    label: "About",
    description: "Background, interests, and current focus.",
    icon: User,
    primary: true,
  },
  {
    href: "/projects",
    label: "Projects",
    description: "Engineering and research projects, including KryomCode.",
    icon: FolderKanban,
    primary: true,
  },
  {
    href: "/research",
    label: "Research",
    description: "Research areas, questions, and ongoing inquiry.",
    icon: FlaskConical,
    primary: true,
  },
  {
    href: "/publications",
    label: "Publications",
    description: "Papers, preprints, and scholarly writing.",
    icon: FileText,
    primary: true,
  },
  {
    href: "/books",
    label: "Books",
    description: "Reading list, notes, and book-length writing.",
    icon: BookOpen,
    primary: false,
  },
  {
    href: "/study-materials",
    label: "Study Materials",
    description: "Notes, guides, and learning resources.",
    icon: GraduationCap,
    primary: false,
  },
  {
    href: "/kryomlabs",
    label: "KryomLabs",
    description: "The KryomLabs research and engineering ecosystem.",
    icon: Telescope,
    primary: true,
  },
  {
    href: "/vision",
    label: "Vision",
    description: "Long-term outlook and guiding principles.",
    icon: Library,
    primary: false,
  },
  {
    href: "/experience",
    label: "Experience",
    description: "Work history and practical background.",
    icon: Briefcase,
    primary: false,
  },
  {
    href: "/connect",
    label: "Connect",
    description: "Community presence and collaboration channels.",
    icon: MessagesSquare,
    primary: true,
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Direct contact information and inquiry form.",
    icon: Mail,
    primary: false,
  },
];

export const primaryRoutes = siteRoutes.filter((route) => route.primary);

/**
 * Official brand assets. The master logo is the owner-uploaded file and must
 * never be altered; derivatives are pre-generated crops of that same file.
 */
export const brandAssets = {
  logo: {
    src: "/images/igovindkadam-logo.png",
    width: 350,
    height: 355,
    alt: "igovindkadam logo — metallic K emblem",
  },
  icon: {
    src: "/images/igovindkadam-logo.png",
    size: 350,
  },
  openGraph: {
    src: "/images/igovindkadam-og.png",
    width: 350,
    height: 355,
    alt: "igovindkadam — Govind Kadam, Independent Researcher & Engineer",
  },
} as const;
