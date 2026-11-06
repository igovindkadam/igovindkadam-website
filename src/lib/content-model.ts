/**
 * Client-safe content model: metadata types and pure helpers only.
 * No Node.js imports here — client components may import this module.
 * Server loading/serialization lives in src/lib/content.ts.
 */

export type Collection = "research" | "publications" | "study-materials" | "vision";

export type ResearchStatus =
  | "exploring"
  | "in-progress"
  | "completed"
  | "published"
  | "archived";

export type ResearchKind =
  | "note"
  | "essay"
  | "investigation"
  | "literature-review"
  | "experimental-report"
  | "guide";

export interface ResearchMeta {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  kind: ResearchKind;
  domains: string[];
  status: ResearchStatus;
  created: string;
  updated?: string;
  keywords: string[];
  abstract?: string;
  pdf?: string;
  draft: boolean;
}

export type PublicationType =
  | "journal"
  | "conference"
  | "preprint"
  | "technical-report"
  | "manuscript"
  | "book-chapter";

export type PublicationStatus =
  | "published"
  | "preprint"
  | "in-review"
  | "draft";

export interface PublicationMeta {
  slug: string;
  title: string;
  authors: string[];
  pubType: PublicationType;
  status: PublicationStatus;
  year?: number;
  date?: string;
  venue?: string;
  doi?: string;
  arxiv?: string;
  publisherUrl?: string;
  pdfUrl?: string;
  keywords: string[];
  draft: boolean;
}

export interface TocHeading {
  depth: 2 | 3;
  text: string;
  slug: string;
}

export type StudySubject =
  | "mathematics"
  | "physics"
  | "computer-science"
  | "research-methodology"
  | "ai-ml"
  | "agi"
  | "robotics"
  | "quantum-computing"
  | "quantum-ai"
  | "scientific-computing"
  | "aerospace"
  | "interdisciplinary";

export type StudyResourceType =
  | "notes"
  | "guide"
  | "tutorial"
  | "explanation"
  | "derivation"
  | "problem-set"
  | "reading-list"
  | "exercises"
  | "reference";

export type StudyDifficulty = "introductory" | "intermediate" | "advanced";

export type StudyStatus = "published" | "in-progress" | "archived";

export interface StudyMaterialMeta {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  subject: StudySubject;
  topics: string[];
  resourceType: StudyResourceType;
  difficulty?: StudyDifficulty;
  status: StudyStatus;
  created: string;
  updated?: string;
  author: string;
  references: string[];
  relatedResources: string[];
  pdf?: string;
  featured: boolean;
  draft: boolean;
}

export interface VisionMeta {
  title: string;
  description: string;
}

/** Estimated reading minutes from raw MDX body text (200 wpm, min 1). */
export function readingMinutes(body: string): number {
  const words = body.split(/\s+/).filter((word) => word !== "").length;
  return Math.max(1, Math.round(words / 200));
}

/** Case-insensitive query match across searchable metadata fields. */
export function matchesQuery(fields: Array<string | undefined>, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (q === "") {
    return true;
  }
  return fields
    .filter((field): field is string => typeof field === "string")
    .some((field) => field.toLowerCase().includes(q));
}
