import type { PublicationMeta, PublicationStatus, PublicationType } from "@/lib/content-model";

/**
 * Publications taxonomy and citation helpers. Entries render only the
 * metadata they genuinely carry — missing fields are omitted, never filled.
 */

export const publicationTypeMeta: Record<
  PublicationType,
  { label: string; description: string }
> = {
  journal: {
    label: "Journal article",
    description: "Peer-reviewed journal articles.",
  },
  conference: {
    label: "Conference paper",
    description: "Peer-reviewed conference and workshop papers.",
  },
  preprint: {
    label: "Preprint",
    description: "Public preprints awaiting or outside peer review.",
  },
  "technical-report": {
    label: "Technical report",
    description: "Self-published technical reports.",
  },
  manuscript: {
    label: "Research manuscript",
    description: "Complete manuscripts not yet submitted.",
  },
  "book-chapter": {
    label: "Book chapter",
    description: "Chapters in edited volumes.",
  },
};

export const publicationStatusMeta: Record<
  PublicationStatus,
  { label: string; meaning: string }
> = {
  published: {
    label: "Published",
    meaning: "Formally released through the stated venue.",
  },
  preprint: {
    label: "Preprint",
    meaning: "Publicly posted; not peer-reviewed in this form.",
  },
  "in-review": {
    label: "In review",
    meaning: "Submitted and awaiting a decision.",
  },
  draft: {
    label: "Draft",
    meaning: "Unreleased working version; not a publication claim.",
  },
};

/** Plain-text citation built only from available fields. */
export function buildCitation(pub: PublicationMeta): string {
  const authors = pub.authors.join(", ");
  const year = pub.year !== undefined ? ` (${pub.year})` : "";
  const venue = pub.venue ? `. ${pub.venue}` : "";
  const id = pub.doi
    ? ` https://doi.org/${pub.doi}`
    : pub.arxiv
      ? ` arXiv:${pub.arxiv}`
      : "";
  return `${authors}${year}. ${pub.title}${venue}.${id}`.trim();
}

/** A publication qualifies for ScholarlyArticle markup only with a real identifier or venue. */
export function qualifiesForScholarlyMarkup(pub: PublicationMeta): boolean {
  return (
    !pub.draft &&
    pub.status !== "draft" &&
    (pub.doi !== undefined || pub.arxiv !== undefined || pub.publisherUrl !== undefined)
  );
}
