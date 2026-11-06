# Updating learning and ecosystem content

How the owner adds study resources, KryomLabs divisions, and vision
updates. No page components need editing — only content files and
typed data files.

## Study resource — `src/content/study-materials/<slug>.mdx`

Create one `.mdx` file per resource. The filename (minus `.mdx`) is
the URL slug. Required frontmatter:

- `title` — resource title.
- `description` — one or two sentences for cards and SEO.
- `subject` — one of: mathematics, physics, computer-science,
  research-methodology, ai-ml, agi, robotics, quantum-computing,
  quantum-ai, scientific-computing, aerospace, interdisciplinary.
- `resourceType` — one of: notes, guide, tutorial, explanation,
  derivation, problem-set, reading-list, exercises, reference.
- `status` — one of: published, in-progress, archived.
- `created` — publication date as `YYYY-MM-DD`.

Optional frontmatter:

- `subtitle`, `updated`, `author` (defaults to Govind Kadam).
- `difficulty` — introductory, intermediate, or advanced. Omit it
  unless the level is deliberate; the filter appears only when some
  entry defines one.
- `topics` — string array for search and display.
- `references` — string array of citations, rendered below the body.
- `relatedResources` — string array of other resource slugs. When
  empty, same-subject resources are suggested automatically.
- `pdf` — URL path to a real downloadable file under `public/`.
  Omit unless the file exists.
- `featured` — `true` to pin the resource first in listings.
- `draft: true` — keeps the resource routable but unlisted while
  writing. Remove to publish.

The body supports headings, tables, code blocks, KaTeX math
(`$...$` and `$$...$$`), images, quotes, links, and references.
Invalid frontmatter fails the build with the file path and field
name — read the error, fix the field, rebuild.

The file `template-guide.mdx` in the same folder is a formatting
reference. It is `draft: true` and never appears in listings,
search, or the sitemap. Do not delete it; copy from it.

## New resource category

There are no free-form categories. To add a subject or resource
type, extend the unions in `src/lib/content-model.ts`, the allowed
lists in `src/lib/content.ts`, and the display metadata in
`src/data/study-materials.ts` together — the build will point at
anything missed.

## KryomLabs division — `src/data/kryomlabs.ts`

Append to `kryomLabsDivisions` with `name`, `description`, and
`status`. Statuses: `active` (confirmed work underway),
`developing` (taking shape), `planned` (scoped, not started),
`tbd` (placeholder awaiting confirmation).

Rules:

- Only confirmed entries appear as division cards; `tbd` entries
  collapse into a count note automatically.
- Never set `active` or `developing` without real evidence, and
  never invent repository or website URLs.
- To promote a future direction into a division, confirm it here
  and remove it from `possibleLabsDirections` in
  `src/data/homepage.ts`.

## Project and its status — `src/data/projects.ts`

KryomCode facts (`kryomCodeFacts`, `kryomCodeLinks`, timeline,
capabilities) are verified against the public repository. Update
version, release date, or links only from the actual repo state,
and keep the KryomLabs page's featured panel in sync by reusing
these same exports — never hardcode a second copy.

## Vision essay — `src/content/vision/vision.mdx`

Edit the essay in place. Frontmatter is `title` and `description`
only — there are intentionally no date fields. Keep the epistemic
contract: established science, current developments, open
questions, hypotheses, and aspirations must stay labeled as such.
Principles and work links live in `src/data/vision.ts`.

## Rules

- Dates, identifiers, and URLs must be verifiable before
  publishing. When in doubt, leave the field out.
- After editing, run `npm run lint`, `npx tsc --noEmit`, and
  `npm run build` before pushing.
