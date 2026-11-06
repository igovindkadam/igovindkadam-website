# Content

MDX-compatible content architecture for igovindkadam.

## Conventions (foundation)

- Long-form research writing, study notes, and publications live here as
  `.mdx` files, organized by section:
  - `research/` — research notes and essays
  - `study-materials/` — study notes and guides
  - `publications/` — paper summaries and preprints
- MDX element styling is centralized in `src/mdx-components.tsx`, so every
  content file inherits the site type scale and light/dark theme.
- No content files ship in the foundation release. The first real content
  entry should also add the loader that reads it (e.g. `src/lib/content.ts`
  using `next-mdx-remote` or `fs`-based imports), keeping this folder as the
  single source of truth.

## Rules

- Never invent degrees, affiliations, papers, awards, employment history,
  research achievements, or credentials. Every file added here must be
  owner-provided or explicitly marked as a draft/placeholder.
