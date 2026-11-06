import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import { unified } from "unified";
import remarkParse from "remark-parse";
import GithubSlugger from "github-slugger";

/**
 * Server-only content library. Reads MDX files from src/content, validates
 * frontmatter, serializes bodies (GFM tables, math, heading slugs), and
 * extracts table-of-contents headings. Never import values from client
 * components — client code uses src/lib/content-model.ts instead.
 */
import type {
  Collection,
  PublicationMeta,
  PublicationStatus,
  PublicationType,
  ResearchKind,
  ResearchMeta,
  ResearchStatus,
  StudyDifficulty,
  StudyMaterialMeta,
  StudyResourceType,
  StudyStatus,
  StudySubject,
  TocHeading,
  VisionMeta,
} from "./content-model";

export type {
  Collection,
  PublicationMeta,
  PublicationStatus,
  PublicationType,
  ResearchKind,
  ResearchMeta,
  ResearchStatus,
  StudyDifficulty,
  StudyMaterialMeta,
  StudyResourceType,
  StudyStatus,
  StudySubject,
  TocHeading,
  VisionMeta,
} from "./content-model";

const contentRoot = path.join(process.cwd(), "src", "content");

export interface ContentEntry<TMeta> {
  meta: TMeta;
  body: string;
  source: MDXRemoteSerializeResult;
  headings: TocHeading[];
}

const RESEARCH_STATUSES: ResearchStatus[] = [
  "exploring",
  "in-progress",
  "completed",
  "published",
  "archived",
];

const RESEARCH_KINDS: ResearchKind[] = [
  "note",
  "essay",
  "investigation",
  "literature-review",
  "experimental-report",
  "guide",
];

const PUBLICATION_TYPES: PublicationType[] = [
  "journal",
  "conference",
  "preprint",
  "technical-report",
  "manuscript",
  "book-chapter",
];

const PUBLICATION_STATUSES: PublicationStatus[] = [
  "published",
  "preprint",
  "in-review",
  "draft",
];

const STUDY_SUBJECTS: StudySubject[] = [
  "mathematics",
  "physics",
  "computer-science",
  "research-methodology",
  "ai-ml",
  "agi",
  "robotics",
  "quantum-computing",
  "quantum-ai",
  "scientific-computing",
  "aerospace",
  "interdisciplinary",
];

const STUDY_RESOURCE_TYPES: StudyResourceType[] = [
  "notes",
  "guide",
  "tutorial",
  "explanation",
  "derivation",
  "problem-set",
  "reading-list",
  "exercises",
  "reference",
];

const STUDY_DIFFICULTIES: StudyDifficulty[] = [
  "introductory",
  "intermediate",
  "advanced",
];

const STUDY_STATUSES: StudyStatus[] = ["published", "in-progress", "archived"];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function asStringArray(value: unknown): string[] {
  if (value === undefined) {
    return [];
  }
  if (Array.isArray(value) && value.every((item) => typeof item === "string")) {
    return value as string[];
  }
  throw new Error("expected a string array");
}

function requiredString(
  data: Record<string, unknown>,
  field: string,
  file: string,
): string {
  const value = data[field];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${file}: frontmatter field "${field}" must be a non-empty string`);
  }
  return value;
}

function optionalString(
  data: Record<string, unknown>,
  field: string,
  file: string,
): string | undefined {
  const value = data[field];
  if (value === undefined) {
    return undefined;
  }
  if (typeof value !== "string") {
    throw new Error(`${file}: frontmatter field "${field}" must be a string`);
  }
  return value;
}

function requiredEnum<T extends string>(
  data: Record<string, unknown>,
  field: string,
  allowed: readonly T[],
  file: string,
): T {
  const value = data[field];
  if (typeof value !== "string" || !allowed.includes(value as T)) {
    throw new Error(
      `${file}: frontmatter field "${field}" must be one of: ${allowed.join(", ")}`,
    );
  }
  return value as T;
}

function validateResearchMeta(
  data: unknown,
  slug: string,
  file: string,
): ResearchMeta {
  if (!isRecord(data)) {
    throw new Error(`${file}: frontmatter must be a mapping`);
  }
  let domains: string[];
  try {
    domains = asStringArray(data.domains);
  } catch {
    throw new Error(`${file}: frontmatter field "domains" must be a string array`);
  }
  let keywords: string[];
  try {
    keywords = asStringArray(data.keywords);
  } catch {
    throw new Error(`${file}: frontmatter field "keywords" must be a string array`);
  }
  const draft = data.draft;
  if (draft !== undefined && typeof draft !== "boolean") {
    throw new Error(`${file}: frontmatter field "draft" must be a boolean`);
  }
  return {
    slug,
    title: requiredString(data, "title", file),
    subtitle: optionalString(data, "subtitle", file),
    author: optionalString(data, "author", file) ?? "Govind Kadam",
    kind: requiredEnum(data, "kind", RESEARCH_KINDS, file),
    domains,
    status: requiredEnum(data, "status", RESEARCH_STATUSES, file),
    created: requiredString(data, "created", file),
    updated: optionalString(data, "updated", file),
    keywords,
    abstract: optionalString(data, "abstract", file),
    pdf: optionalString(data, "pdf", file),
    draft: draft ?? false,
  };
}

function optionalEnum<T extends string>(
  data: Record<string, unknown>,
  field: string,
  allowed: readonly T[],
  file: string,
): T | undefined {
  const value = data[field];
  if (value === undefined) {
    return undefined;
  }
  if (typeof value !== "string" || !allowed.includes(value as T)) {
    throw new Error(
      `${file}: frontmatter field "${field}" must be one of: ${allowed.join(", ")}`,
    );
  }
  return value as T;
}

function optionalBoolean(
  data: Record<string, unknown>,
  field: string,
  file: string,
): boolean | undefined {
  const value = data[field];
  if (value === undefined) {
    return undefined;
  }
  if (typeof value !== "boolean") {
    throw new Error(`${file}: frontmatter field "${field}" must be a boolean`);
  }
  return value;
}

function stringArrayField(
  data: Record<string, unknown>,
  field: string,
  file: string,
): string[] {
  try {
    return asStringArray(data[field]);
  } catch {
    throw new Error(`${file}: frontmatter field "${field}" must be a string array`);
  }
}

function validateStudyMaterialMeta(
  data: unknown,
  slug: string,
  file: string,
): StudyMaterialMeta {
  if (!isRecord(data)) {
    throw new Error(`${file}: frontmatter must be a mapping`);
  }
  return {
    slug,
    title: requiredString(data, "title", file),
    subtitle: optionalString(data, "subtitle", file),
    description: requiredString(data, "description", file),
    subject: requiredEnum(data, "subject", STUDY_SUBJECTS, file),
    topics: stringArrayField(data, "topics", file),
    resourceType: requiredEnum(data, "resourceType", STUDY_RESOURCE_TYPES, file),
    difficulty: optionalEnum(data, "difficulty", STUDY_DIFFICULTIES, file),
    status: requiredEnum(data, "status", STUDY_STATUSES, file),
    created: requiredString(data, "created", file),
    updated: optionalString(data, "updated", file),
    author: optionalString(data, "author", file) ?? "Govind Kadam",
    references: stringArrayField(data, "references", file),
    relatedResources: stringArrayField(data, "relatedResources", file),
    pdf: optionalString(data, "pdf", file),
    featured: optionalBoolean(data, "featured", file) ?? false,
    draft: optionalBoolean(data, "draft", file) ?? false,
  };
}

function validateVisionMeta(data: unknown, file: string): VisionMeta {
  if (!isRecord(data)) {
    throw new Error(`${file}: frontmatter must be a mapping`);
  }
  return {
    title: requiredString(data, "title", file),
    description: requiredString(data, "description", file),
  };
}

function validatePublicationMeta(
  data: unknown,
  slug: string,
  file: string,
): PublicationMeta {
  if (!isRecord(data)) {
    throw new Error(`${file}: frontmatter must be a mapping`);
  }
  const authorsRaw = data.authors;
  if (
    !Array.isArray(authorsRaw) ||
    authorsRaw.length === 0 ||
    !authorsRaw.every((item) => typeof item === "string")
  ) {
    throw new Error(
      `${file}: frontmatter field "authors" must be a non-empty string array`,
    );
  }
  let keywords: string[];
  try {
    keywords = asStringArray(data.keywords);
  } catch {
    throw new Error(`${file}: frontmatter field "keywords" must be a string array`);
  }
  const year = data.year;
  if (year !== undefined && (typeof year !== "number" || !Number.isInteger(year))) {
    throw new Error(`${file}: frontmatter field "year" must be an integer`);
  }
  const draft = data.draft;
  if (draft !== undefined && typeof draft !== "boolean") {
    throw new Error(`${file}: frontmatter field "draft" must be a boolean`);
  }
  return {
    slug,
    title: requiredString(data, "title", file),
    authors: authorsRaw as string[],
    pubType: requiredEnum(data, "pubType", PUBLICATION_TYPES, file),
    status: requiredEnum(data, "status", PUBLICATION_STATUSES, file),
    year,
    date: optionalString(data, "date", file),
    venue: optionalString(data, "venue", file),
    doi: optionalString(data, "doi", file),
    arxiv: optionalString(data, "arxiv", file),
    publisherUrl: optionalString(data, "publisherUrl", file),
    pdfUrl: optionalString(data, "pdfUrl", file),
    keywords,
    draft: draft ?? false,
  };
}

interface MdastNode {
  type: string;
  depth?: number;
  value?: string;
  children?: MdastNode[];
}

function nodeText(node: MdastNode): string {
  if (typeof node.value === "string") {
    return node.value;
  }
  return (node.children ?? []).map(nodeText).join("");
}

/** Extract h2/h3 headings with slugs matching rehype-slug output. */
export function extractHeadings(body: string): TocHeading[] {
  const tree = unified().use(remarkParse).parse(body) as unknown as MdastNode;
  const slugger = new GithubSlugger();
  const headings: TocHeading[] = [];
  const visit = (node: MdastNode) => {
    if (
      node.type === "heading" &&
      (node.depth === 2 || node.depth === 3)
    ) {
      const text = nodeText(node).trim();
      if (text !== "") {
        headings.push({ depth: node.depth, text, slug: slugger.slug(text) });
      }
    }
    for (const child of node.children ?? []) {
      visit(child);
    }
  };
  visit(tree);
  return headings;
}

export async function serializeBody(
  body: string,
): Promise<MDXRemoteSerializeResult> {
  return serialize(body, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeKatex, rehypeSlug],
    },
  });
}

/** Slugs for every MDX file in a collection, including drafts. */
export function getContentSlugs(collection: Collection): string[] {
  const dir = path.join(contentRoot, collection);
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.slice(0, -".mdx".length))
    .sort();
}

function readRaw(collection: Collection, slug: string): { file: string; raw: string } {
  const file = path.join(contentRoot, collection, `${slug}.mdx`);
  if (!fs.existsSync(file)) {
    throw new Error(`content not found: ${collection}/${slug}`);
  }
  return { file, raw: fs.readFileSync(file, "utf8") };
}

export async function getResearchEntry(
  slug: string,
): Promise<ContentEntry<ResearchMeta>> {
  const { file, raw } = readRaw("research", slug);
  const { data, content: body } = matter(raw);
  const meta = validateResearchMeta(data, slug, file);
  const [source, headings] = await Promise.all([
    serializeBody(body),
    Promise.resolve(extractHeadings(body)),
  ]);
  return { meta, body, source, headings };
}

export async function getPublicationEntry(
  slug: string,
): Promise<ContentEntry<PublicationMeta>> {
  const { file, raw } = readRaw("publications", slug);
  const { data, content: body } = matter(raw);
  const meta = validatePublicationMeta(data, slug, file);
  const [source, headings] = await Promise.all([
    serializeBody(body),
    Promise.resolve(extractHeadings(body)),
  ]);
  return { meta, body, source, headings };
}

/** Metadata for all entries in a collection, newest first by created/date. */
export async function getAllResearchMeta(): Promise<ResearchMeta[]> {
  const entries = await Promise.all(
    getContentSlugs("research").map(async (slug) => {
      const { file, raw } = readRaw("research", slug);
      return validateResearchMeta(matter(raw).data, slug, file);
    }),
  );
  return entries.sort((a, b) => b.created.localeCompare(a.created));
}

export async function getAllPublicationMeta(): Promise<PublicationMeta[]> {
  const entries = await Promise.all(
    getContentSlugs("publications").map(async (slug) => {
      const { file, raw } = readRaw("publications", slug);
      return validatePublicationMeta(matter(raw).data, slug, file);
    }),
  );
  return entries.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

export async function getStudyMaterialEntry(
  slug: string,
): Promise<ContentEntry<StudyMaterialMeta>> {
  const { file, raw } = readRaw("study-materials", slug);
  const { data, content: body } = matter(raw);
  const meta = validateStudyMaterialMeta(data, slug, file);
  const [source, headings] = await Promise.all([
    serializeBody(body),
    Promise.resolve(extractHeadings(body)),
  ]);
  return { meta, body, source, headings };
}

/** The single long-form vision essay. */
export async function getVisionEssay(): Promise<ContentEntry<VisionMeta>> {
  const { file, raw } = readRaw("vision", "vision");
  const { data, content: body } = matter(raw);
  const meta = validateVisionMeta(data, file);
  const [source, headings] = await Promise.all([
    serializeBody(body),
    Promise.resolve(extractHeadings(body)),
  ]);
  return { meta, body, source, headings };
}

/** Entries visible in public listings (drafts excluded). */
export async function getVisibleResearchMeta(): Promise<ResearchMeta[]> {
  return (await getAllResearchMeta()).filter((entry) => !entry.draft);
}

export async function getVisiblePublicationMeta(): Promise<PublicationMeta[]> {
  return (await getAllPublicationMeta()).filter((entry) => !entry.draft);
}

/** Metadata for all study materials, featured first, then newest first. */
export async function getAllStudyMaterialMeta(): Promise<StudyMaterialMeta[]> {
  const entries = await Promise.all(
    getContentSlugs("study-materials").map(async (slug) => {
      const { file, raw } = readRaw("study-materials", slug);
      return validateStudyMaterialMeta(matter(raw).data, slug, file);
    }),
  );
  return entries.sort((a, b) => {
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1;
    }
    return b.created.localeCompare(a.created);
  });
}

export async function getVisibleStudyMaterialMeta(): Promise<StudyMaterialMeta[]> {
  return (await getAllStudyMaterialMeta()).filter((entry) => !entry.draft);
}
