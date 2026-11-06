import type { Metadata } from "next";
import { ConnectHero } from "@/components/connect/connect-hero";
import { ChannelCards } from "@/components/connect/channel-cards";
import {
  CollaborationTopics,
  ConnectClosing,
} from "@/components/connect/collaboration";
import { siteIdentity } from "@/lib/site";

export const metadata: Metadata = {
  title: "Connect",
  description: `Verified channels and conversation topics for reaching ${siteIdentity.owner}: GitHub, LinkedIn, YouTube, and the direct contact page.`,
  openGraph: {
    title: `Connect — ${siteIdentity.owner}`,
    description:
      "Verified channels, collaboration interests, and the direct contact handoff.",
  },
};

/** Connect page: hero, verified channels, topics, closing CTA. */
export default function ConnectPage() {
  return (
    <>
      <ConnectHero />

      <section aria-label="Contact channels">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <ChannelCards />
        </div>
      </section>

      <section
        aria-label="Collaboration interests"
        className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <CollaborationTopics />
        </div>
      </section>

      <section aria-label="Direct contact">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <ConnectClosing />
        </div>
      </section>
    </>
  );
}
