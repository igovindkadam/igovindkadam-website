import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Bot,
  Brain,
  Check,
  ClipboardList,
  Cpu,
  Diff,
  Eye,
  FlaskConical,
  GitBranch,
  Microscope,
  Play,
  Rocket,
  Search,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";

/**
 * Project portfolio data. KryomCode facts are verified against the public
 * repository README (https://github.com/KryomLabs/kryomcode). Everything
 * else is an honest empty state — no projects are invented.
 */

export const kryomCodeLinks = {
  repository: "https://github.com/KryomLabs/kryomcode",
  release: "https://github.com/KryomLabs/kryomcode/releases/tag/v0.1.0",
  releases: "https://github.com/KryomLabs/kryomcode/releases",
  issues: "https://github.com/KryomLabs/kryomcode/issues",
  demoVideo: "https://www.youtube.com/watch?v=M_3XuU4IjLg",
  demoEmbed: "https://www.youtube-nocookie.com/embed/M_3XuU4IjLg",
  websiteRepo: "https://github.com/igovindkadam/igovindkadam-website",
  docs: {
    architecture:
      "https://github.com/KryomLabs/kryomcode/blob/main/docs/ARCHITECTURE.md",
    security: "https://github.com/KryomLabs/kryomcode/blob/main/docs/SECURITY.md",
    platformSupport:
      "https://github.com/KryomLabs/kryomcode/blob/main/docs/PLATFORM_SUPPORT.md",
    limitations:
      "https://github.com/KryomLabs/kryomcode/blob/main/docs/backend-limitations.md",
    changelog:
      "https://github.com/KryomLabs/kryomcode/blob/main/docs/CHANGELOG.md",
    demoScript:
      "https://github.com/KryomLabs/kryomcode/blob/main/docs/DEMO_VIDEO_SCRIPT.md",
    vision: "https://github.com/KryomLabs/kryomcode/blob/main/docs/VISION.md",
  },
  founder: {
    linkedIn: "https://www.linkedin.com/in/igovindkadam",
    x: "https://www.x.com/iGovindKadam",
    gitHub: "https://www.github.com/igovindkadam",
  },
} as const;

const kryomCodeRaw = "https://raw.githubusercontent.com/KryomLabs/kryomcode/main";

export const kryomCodeBrand = {
  src: `${kryomCodeRaw}/assets/branding/kryomcode-logo-512.png`,
  width: 512,
  height: 512,
  alt: "KryomCode logo — metallic K emblem",
} as const;

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const projectCategories: ProjectCategory[] = [
  {
    id: "ai-systems",
    name: "AI & Intelligent Systems",
    description: "Machine intelligence, agents, and AI-assisted tooling.",
    icon: Brain,
  },
  {
    id: "software-engineering",
    name: "Software Engineering",
    description: "Developer tools, platforms, and systems software.",
    icon: Wrench,
  },
  {
    id: "robotics",
    name: "Robotics & Autonomous Systems",
    description: "Embodied intelligence and autonomous machines.",
    icon: Bot,
  },
  {
    id: "quantum",
    name: "Quantum Computing",
    description: "Quantum algorithms, tooling, and exploration.",
    icon: Atom,
  },
  {
    id: "scientific-computing",
    name: "Scientific Computing",
    description: "Simulation, numerical methods, and research software.",
    icon: Microscope,
  },
  {
    id: "aerospace",
    name: "Aerospace & Space Technology",
    description: "Flight, orbit, and space systems engineering.",
    icon: Rocket,
  },
  {
    id: "experimental",
    name: "Experimental Projects",
    description: "Prototypes, spikes, and boundary-pushing experiments.",
    icon: FlaskConical,
  },
];

export type ProjectStatus = "released" | "active" | "developing" | "planned";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  categoryId: string;
  status: ProjectStatus;
  statusLabel: string;
  stack: string[];
  href: string;
  image: { src: string; width: number; height: number; alt: string };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "kryomcode",
    name: "KryomCode",
    tagline: "A Meta AI-powered desktop IDE for research-driven engineering.",
    description:
      "Evidence-driven coding workspace: research with cited sources, source-grounded plans, diff review, explicit approval, then verified execution.",
    categoryId: "ai-systems",
    status: "released",
    statusLabel: "Released v0.1.0",
    stack: ["Electron 45", "React 19", "TypeScript", "Vite 6", "Monaco Editor", "Muse Spark 1.3"],
    href: "/projects/kryomcode",
    image: {
      src: `${kryomCodeRaw}/docs/images/01-main-workbench.png`,
      width: 1902,
      height: 1071,
      alt: "KryomCode main workbench — welcome view with Chat, Research, and Agent modes",
    },
    featured: true,
  },
];

export function projectsInCategory(categoryId: string): Project[] {
  return projects.filter((project) => project.categoryId === categoryId);
}

export interface WorkflowStage {
  name: string;
  detail: string;
  icon: LucideIcon;
}

export const kryomCodeWorkflowDetailed: WorkflowStage[] = [
  {
    name: "Research",
    detail: "Investigate through real search providers with cited briefs.",
    icon: Search,
  },
  {
    name: "Understand",
    detail: "Index the codebase — symbols, impact, architecture.",
    icon: Eye,
  },
  {
    name: "Plan",
    detail: "Agent proposes a bounded plan grounded in sources.",
    icon: ClipboardList,
  },
  {
    name: "Review",
    detail: "Each edit shows rationale plus diff for approval.",
    icon: Diff,
  },
  {
    name: "Execute",
    detail: "Apply only selected edits, with rollback on failure.",
    icon: Play,
  },
  {
    name: "Verify",
    detail: "Guarded runs produce reports pinned to observed runs.",
    icon: ShieldCheck,
  },
];

export interface ArchitectureLayer {
  id: string;
  name: string;
  subtitle: string;
  items: string[];
  accent: boolean;
}

export const kryomCodeArchitecture: ArchitectureLayer[] = [
  {
    id: "renderer",
    name: "Renderer",
    subtitle: "React UI shell · sandboxed",
    items: ["App shell + workbench views", "Monaco Editor (local bundle)", "xterm.js transcript renderer", "Typed kryom() bridge access"],
    accent: false,
  },
  {
    id: "preload",
    name: "Preload bridge",
    subtitle: "window.kryom · no Node APIs",
    items: ["~200 typed capability methods", "Sender + payload validation", "Human-readable messages only"],
    accent: true,
  },
  {
    id: "main",
    name: "Main process",
    subtitle: "Node + Electron · services",
    items: ["15 IPC domain modules", "workspace · terminal · ai · agent · git · research…", "Disk, Git, Meta AI endpoint access"],
    accent: false,
  },
];

export const kryomCodeTrustNotes: string[] = [
  "One trust direction: the renderer never touches disk, network, or secrets.",
  "Every path resolves through workspace containment — traversal rejected, symlinks refused.",
  "Per-project state lives in .kryom/ (git-ignored, never committed).",
  "Keys and secrets stay in the main process; only presence booleans cross IPC.",
];

export interface CapabilityDetail {
  title: string;
  detail: string;
  icon: LucideIcon;
}

export const kryomCodeCapabilityDetails: CapabilityDetail[] = [
  {
    title: "Meta AI chat",
    detail:
      "Center-stage chat on Muse Spark 1.3 (default) or Muse Wonder 1.0, with workspace context, research-brief context, history, and Stop/cancel.",
    icon: Cpu,
  },
  {
    title: "Approval-gated agent",
    detail:
      "Task to validated plan to per-edit approval, with atomic apply, rollback, checkpoints, per-item undo, and freshness protection.",
    icon: Check,
  },
  {
    title: "Research workspace",
    detail:
      "Visible run steps, persisted sessions, cited markdown briefs, source lists, .docx export, and Implement-from-Research handoff.",
    icon: Search,
  },
  {
    title: "Evidence and citations",
    detail:
      "Citations must resolve to retrieved sources; claim checks are lexical and labeled as such; model prose is marked AI-generated.",
    icon: Eye,
  },
  {
    title: "Diff review and rollback",
    detail:
      "Why-rationale plus diff per edit, change-set ordering, same-file conflict blocking, and digest-checked undo of pre-apply bytes.",
    icon: Diff,
  },
  {
    title: "Monaco editor",
    detail:
      "Multi-tab editing with dirty tracking, session restore, conflict dialogs, auto save, and locally bundled workers (no CDN).",
    icon: ClipboardList,
  },
  {
    title: "Integrated terminal",
    detail:
      "One explicit run per command with timeout, output caps, secret scrubbing, advisory warnings, and cancel/status controls.",
    icon: Terminal,
  },
  {
    title: "Git source control",
    detail:
      "Status, diffs, stage/unstage, confirmed discard, commit, push, fast-forward-only pull, and restricted clone sources.",
    icon: GitBranch,
  },
  {
    title: "Verification reports",
    detail:
      "Reports derive from observed run facts — exit codes and run ids — never from model prose. Stale steps are flagged, never faked.",
    icon: ShieldCheck,
  },
];

export interface StackEntry {
  piece: string;
  detail: string;
}

export const kryomCodeStack: StackEntry[] = [
  { piece: "Electron 45", detail: "Desktop shell, lifecycle, main process" },
  { piece: "React 19 + TypeScript 5.7 (strict)", detail: "Renderer UI" },
  { piece: "Vite 6", detail: "Renderer build and dev server" },
  { piece: "Monaco Editor", detail: "Locally bundled editing surface" },
  { piece: "xterm.js", detail: "Buffered transcript renderer (not an interactive PTY)" },
  { piece: "node:test + Vitest", detail: "Backend suite and renderer suite" },
  { piece: "electron-builder 26", detail: "Packaging and installers" },
  { piece: "Fixed Meta AI endpoint", detail: "api.meta.ai chat completions · temperature 0.2 · 90 s timeout" },
];

export interface ResearchProvider {
  name: string;
  access: string;
}

export const kryomCodeProviders: ResearchProvider[] = [
  { name: "arXiv", access: "Keyless" },
  { name: "OpenAlex", access: "Keyless" },
  { name: "Crossref", access: "Keyless" },
  { name: "Semantic Scholar", access: "Keyless" },
  { name: "DuckDuckGo", access: "Keyless" },
  { name: "Tavily", access: "Optional · API key" },
];

export interface SafetyRule {
  title: string;
  detail: string;
}

export const kryomCodeSafety: SafetyRule[] = [
  {
    title: "Plans propose, humans approve",
    detail: "Every file edit needs explicit selection; apply, run, skip, and undo each confirm first.",
  },
  {
    title: "Destructive commands need native approval",
    detail: "Main-process approval for destructive terminal commands that a compromised renderer cannot skip.",
  },
  {
    title: "Checkpoints before every apply",
    detail: "Pre-apply bytes persist with digest-checked undo; failures roll back with honest counts.",
  },
  {
    title: "Sandboxed renderer",
    detail: "Context isolation, no Node integration, full sandbox; navigation restricted; CSP allows no remote hosts.",
  },
  {
    title: "Secrets stay sealed",
    detail: "Environment allowlist plus OS-encrypted vault; terminal and Git children get scrubbed environments.",
  },
  {
    title: "Bounded recovery",
    detail: "Failed checks enter a bounded repair cycle (2 attempts, 10-minute budget) with per-attempt approval.",
  },
];

export interface TimelineMilestone {
  date: string;
  title: string;
  detail: string;
}

export const kryomCodeTimeline: TimelineMilestone[] = [
  {
    date: "2026",
    title: "Hackathon entry",
    detail:
      "Entered in the Meta Global AI Developer Hackathon 2026, Indie Developer (Individual/Solo) track — Team KryomLabs #1011, problem statement “Push the Frontier”. Solo developer.",
  },
  {
    date: "2026-11-02",
    title: "Demo recorded",
    detail: "Official 2:16 hackathon demo recorded following the published demo script.",
  },
  {
    date: "2026-11-02",
    title: "Meta AI live verification",
    detail: "One exact-marker request per model, both passed — Muse Spark 1.3 and Muse Wonder 1.0.",
  },
  {
    date: "2026-11-03",
    title: "CI green across three OSes",
    detail: "All six jobs passed: test and build plus pack-and-verify on macOS, Ubuntu, and Windows.",
  },
  {
    date: "2026-11-03",
    title: "Owner GUI smoke pass",
    detail: "All seven manual checks passed on the installed Windows app: launch, Explorer, chat, agent, terminal, Git, research-to-agent.",
  },
  {
    date: "2026-11-03",
    title: "Public release v0.1.0",
    detail: "MIT-licensed release with the install-tested Windows x64 installer (KryomCode.Setup.0.1.0.exe, ~143 MB).",
  },
];

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  title: string;
  caption: string;
}

export const kryomCodeGallery: GalleryImage[] = [
  {
    src: `${kryomCodeRaw}/docs/images/01-main-workbench.png`,
    width: 1902,
    height: 1071,
    title: "Main workbench",
    caption: "Welcome view with Chat/Research/Agent modes, Explorer, prompt box, and per-request model picker.",
  },
  {
    src: `${kryomCodeRaw}/docs/images/02-meta-ai-chat.png`,
    width: 1920,
    height: 1080,
    title: "Meta AI chat",
    caption: "Live request with elapsed timer and Stop, workspace context chips, and filterable thread history.",
  },
  {
    src: `${kryomCodeRaw}/docs/images/03-agent-planning.png`,
    width: 1920,
    height: 1080,
    title: "Agent planning",
    caption: "Staged execution plan with per-stage files and Verify commands, explicit approval gate, and live run timeline.",
  },
  {
    src: `${kryomCodeRaw}/docs/images/05-research-workspace.png`,
    width: 1902,
    height: 1071,
    title: "Research workspace",
    caption: "Persisted sessions, validated multi-query planning progress, and the Overview-to-Report tab flow.",
  },
  {
    src: `${kryomCodeRaw}/docs/images/06-research-evidence-citations.png`,
    width: 1902,
    height: 1071,
    title: "Research evidence and citations",
    caption: "Confidence-graded claims with numbered citations and one-click handoff briefs for chat and the agent.",
  },
  {
    src: `${kryomCodeRaw}/docs/images/07-integrated-terminal.png`,
    width: 1920,
    height: 1080,
    title: "Integrated terminal",
    caption: "One-shot reviewed execution with Run/Cancel/Status/Clear/Copy, above the Platform workflows tab.",
  },
  {
    src: `${kryomCodeRaw}/docs/images/08-git-source-control.png`,
    width: 1920,
    height: 1080,
    title: "Git source control",
    caption: "Staged/unstaged/untracked, commit, Push/Pull, plus the Tasks panel with plan verification states.",
  },
  {
    src: `${kryomCodeRaw}/docs/images/09-meta-model-configuration.png`,
    width: 1920,
    height: 1080,
    title: "Meta model configuration",
    caption: "Settings picker with both Muse models; API keys are managed under Providers and never shown.",
  },
];

export const kryomCodeLimitations: string[] = [
  "Windows is the validated platform; macOS and Linux packaging is configured but runtime there is not fully owner-tested.",
  "Evidence retrieval uses lexical matching — claim checks are labeled lexical, not semantic search.",
  "The installer is unsigned, so Windows SmartScreen may warn on first run.",
  "The terminal renders buffered transcripts; it is not an interactive PTY.",
  "Plans are bounded: at most 20 file edits and 10 suggested commands per plan.",
  "Files are capped at 1 MB in the editor; prompts are capped at 12,000 characters.",
];

export interface RoadmapItem {
  title: string;
  detail: string;
  done?: boolean;
}

export const kryomCodeRoadmap: RoadmapItem[] = [
  {
    title: "Three-OS CI matrix",
    detail: "First full matrix runs recorded — completed 2026-11-03.",
    done: true,
  },
  {
    title: "macOS and Linux hardware validation",
    detail: "Build, launch, and smoke-test installers on real machines. Blocked: test machines.",
  },
  {
    title: "Signed installers",
    detail: "Windows certificate plus Apple notarization. Blocked: certificates.",
  },
  {
    title: "Hosted update feed",
    detail: "Automatic update channel. Blocked: hosting.",
  },
  {
    title: "Streaming output and more parsers",
    detail: "Ideas only — no commitments or schedule.",
  },
];

export const kryomCodeFacts: { label: string; value: string }[] = [
  { label: "Version", value: "0.1.0 (MIT)" },
  { label: "Released", value: "2026-11-03" },
  { label: "Platform", value: "Windows x64 installer" },
  { label: "Role", value: "Solo developer" },
  { label: "Team", value: "KryomLabs #1011" },
  { label: "Track", value: "Indie Developer (Solo)" },
];
