/**
 * KryomLabs division data.
 *
 * KryomCode is confirmed active (public v0.1.0 release, 2026-11-03).
 * Remaining entries are placeholders: statuses must only be set to
 * "active", "developing", or "planned" once confirmed by Govind Kadam.
 * Until then, placeholders stay "tbd" ("To be confirmed").
 */

export type DivisionStatus = "active" | "developing" | "planned" | "tbd";

export interface KryomLabsDivision {
  name: string;
  description: string;
  status: DivisionStatus;
}

export const statusMeta: Record<
  DivisionStatus,
  { label: string; hint: string }
> = {
  active: {
    label: "Active",
    hint: "Confirmed work currently underway.",
  },
  developing: {
    label: "Developing",
    hint: "Taking shape; details being defined.",
  },
  planned: {
    label: "Planned",
    hint: "Scoped for the future; not started.",
  },
  tbd: {
    label: "To be confirmed",
    hint: "Placeholder entry awaiting owner confirmation.",
  },
};

export const kryomLabsDivisions: KryomLabsDivision[] = [
  {
    name: "KryomCode",
    description:
      "A Meta AI-powered desktop IDE connecting scientific research and software engineering. Public release v0.1.0 (MIT) published 2026-11-03.",
    status: "active",
  },
  {
    name: "Placeholder Division A",
    description:
      "Placeholder entry. Name, scope, and status to be provided by the owner.",
    status: "tbd",
  },
  {
    name: "Placeholder Division B",
    description:
      "Placeholder entry. Name, scope, and status to be provided by the owner.",
    status: "tbd",
  },
];
