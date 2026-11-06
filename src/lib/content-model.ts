/**
 * Client-safe content model: metadata types and pure helpers only.
 * No Node.js imports here — client components may import this module.
 * Server loading/serialization lives in src/lib/content.ts.
 */

export type Collection = "research" | "publications";

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
