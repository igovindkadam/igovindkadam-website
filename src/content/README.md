# Content

MDX content for igovindkadam. This folder is the single source of truth;
`src/lib/content.ts` loads, validates, and serializes it at build time.

## Layout

- `research/*.mdx` — research notes, essays, investigations, reviews,
  experimental reports, and guides. Routed at `/research/[slug]`.
- `publications/*.mdx` — publication records with abstract bodies.
  Routed at `/publications/[slug]`.

## Frontmatter

Research entries require: `title`, `kind`, `domains`, `status`,
`created`. Optional: `subtitle`, `author`, `updated`, `keywords`,
`abstract`, `pdf`, `draft`.

Publication entries require: `title`, `authors`, `pubType`, `status`.
Optional: `year`, `date`, `venue`, `doi`, `arxiv`, `publisherUrl`,
`pdfUrl`, `keywords`, `draft`.

Allowed `kind`, `domains`, `status`, and `pubType` values are defined
in `src/data/research.ts`, `src/data/publications.ts`, and
`src/lib/content.ts`. Unknown values fail the build with the file
path — fix the file, never the validator.

## Body features

Bodies support GFM tables and footnotes, fenced code, KaTeX math
(`$…$` and `$$…$$`), images with alt-text captions, blockquotes,
and links. H2/H3 headings become table-of-contents anchors
automatically.

## Drafts

`draft: true` keeps an entry routable but excludes it from listings
and the sitemap. Drafts must be labeled as drafts in their own
text. The shipped `template-guide` and `template-sample` drafts
demonstrate the templates and must never read as real work.

## Rules

- Never invent degrees, affiliations, papers, awards, employment
  history, research achievements, or credentials. Every file added
  here must be owner-provided or explicitly marked as a draft.
- KryomCode is a software project, not a publication — it never
  belongs in `publications/`.
