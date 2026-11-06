/** Contact + collaboration data. Only verified channels are listed. */

export type ChannelKind = "github" | "linkedin" | "youtube" | "email";

export interface ContactChannel {
  kind: ChannelKind;
  label: string;
  description: string;
  href: string;
  handle: string;
}

/** Verified public channels only. Email is omitted — no address was provided. */
export const contactChannels: ContactChannel[] = [
  {
    kind: "github",
    label: "GitHub",
    description: "Open-source code, the KryomCode project, and this website's source.",
    href: "https://www.github.com/igovindkadam",
    handle: "@igovindkadam",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    description: "Professional presence and background, kept verbatim from the verified profile URL.",
    href: "https://www.linkedin.com/in/igovindkadam",
    handle: "in/igovindkadam",
  },
  {
    kind: "youtube",
    label: "YouTube",
    description: "The KryomCode demo video and future project walkthroughs.",
    href: "https://www.youtube.com/watch?v=M_3XuU4IjLg",
    handle: "KryomCode demo",
  },
];

/** Topics of interest for conversation — not proof of expertise. */
export const collaborationTopics: string[] = [
  "AI and machine learning",
  "Robotics and autonomous systems",
  "Quantum computing and Quantum AI",
  "Scientific software engineering",
  "Research tooling",
  "Open-source engineering",
  "Interdisciplinary technology exploration",
];

/** Where the owner adds new channels: append to `contactChannels`. Email stays hidden until a real address is provided. */
export const connectOwnerNote =
  "Add biography, experience, and channels by editing src/data/about.ts, src/data/experience.ts, and src/data/connect.ts. See docs/updating-personal-content.md.";
