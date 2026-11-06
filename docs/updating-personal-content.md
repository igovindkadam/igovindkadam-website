# Updating personal content

How the owner adds or corrects biography facts, experience entries, and
contact links. All personal content lives in three typed data files —
no page components need editing.

## Biography — `src/data/about.ts`

- `biography.shortIntro` — one-paragraph introduction.
- `biography.extended` — array of paragraphs. Empty by default; add one
  string per paragraph to publish a full biography.
- `biography.currentFocus` — bullet list of what is being worked on now.
- `biography.location` — add only if approved for publication.
- `biography.profileImage` — add `{ src, alt }` only with a genuine,
  approved image placed under `public/images/`.
- `journeyMilestones` — append `{ date, title, description, href? }`.
  Only dated, verifiable milestones; undated beginnings stay out.

## Experience — `src/data/experience.ts`

- `experienceEntries` — append entries with `title`, `organization`,
  `role`, `date`, `description`, `categoryId`, `kind`, `technologies`,
  `achievements`, and `evidence` links.
- `kind` must be honest: `personal-project` and `independent` are
  never employment. Categories with zero entries stay hidden
  automatically.
- `skillGroups` — list a tool only with project evidence or explicit
  owner confirmation. Never add proficiency percentages.
- `futureDirections` — goals, kept separate from completed work.

## Connect — `src/data/connect.ts`

- `contactChannels` — append `{ kind, label, handle, href, description }`
  only with a verified URL the owner controls. Unverified channels
  must not be added; there is intentionally no email entry until an
  address is approved.
- `collaborationTopics` — conversation topics framed as interests.

## Rules

- Dates, venues, identifiers, and URLs must be verifiable before
  publishing. When in doubt, leave the field out — templates omit
  missing fields gracefully.
- After editing, run `npm run lint`, `npx tsc --noEmit`, and
  `npm run build` before pushing.
