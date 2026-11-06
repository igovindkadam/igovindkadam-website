import { Briefcase, ExternalLink, FolderGit2, Mail, Play } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { contactChannels } from "@/data/connect";
import type { ChannelKind } from "@/data/connect";

const channelIcons: Record<ChannelKind, LucideIcon> = {
  github: FolderGit2,
  linkedin: Briefcase,
  youtube: Play,
  email: Mail,
};

/** Verified contact channels. Unverified channels stay hidden entirely. */
export function ChannelCards() {
  return (
    <div id="channels" className="scroll-mt-20">
      <Reveal>
        <SectionHeading
          id="channels-heading"
          eyebrow="Verified only"
          title="Contact channels"
          description="Each card links to a real, checked destination. Email will appear here once an address is provided for publication."
        />
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contactChannels.map((channel, index) => {
          const Icon = channelIcons[channel.kind];
          return (
            <Reveal key={channel.kind} delay={(index % 3) * 0.06} className="h-full">
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${channel.label} (${channel.handle}) — opens in a new tab`}
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-scientific dark:border-slate-700 dark:bg-midnight-soft dark:hover:border-scientific"
              >
                <span className="flex items-center justify-between">
                  <span
                    aria-hidden
                    className="flex size-11 items-center justify-center rounded-lg bg-research text-white dark:bg-scientific dark:text-midnight"
                  >
                    <Icon className="size-5" />
                  </span>
                  <ExternalLink
                    aria-hidden
                    className="size-4 text-slate-400 transition-colors group-hover:text-scientific"
                  />
                </span>
                <span className="mt-4 font-display text-xl font-bold text-midnight dark:text-white">
                  {channel.label}
                </span>
                <span className="mt-0.5 font-mono text-sm text-scientific">
                  {channel.handle}
                </span>
                <span className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {channel.description}
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
