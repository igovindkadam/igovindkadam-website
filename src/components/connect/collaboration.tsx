import { ArrowRight, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/home/reveal";
import { collaborationTopics } from "@/data/connect";

/** Conversation topics framed as interests, not expertise claims. */
export function CollaborationTopics() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          id="topics-heading"
          eyebrow="Conversation starters"
          title="Collaboration interests"
          description="Good opening topics for a message. These are interests to discuss — not proof of expertise or a promise of availability."
        />
      </Reveal>
      <Reveal delay={0.08}>
        <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Conversation topics">
          {collaborationTopics.map((topic) => (
            <li
              key={topic}
              className="rounded-full border border-slate-300 px-4 py-2 text-[15px] text-slate-700 dark:border-slate-600 dark:text-slate-200"
            >
              {topic}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

/** Closing panel with the direct-contact handoff. */
export function ConnectClosing() {
  return (
    <Reveal>
      <div className="rounded-2xl bg-midnight p-7 sm:p-10 dark:bg-black dark:ring-1 dark:ring-white/10">
        <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-scientific-soft uppercase">
          <MessagesSquare aria-hidden className="size-4" />
          Direct contact
        </p>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-bold text-balance text-white">
          Good Ideas Grow Through Thoughtful Collaboration.
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">
          For direct inquiries, the dedicated contact page carries email
          details and response expectations as they are published.
        </p>
        <div className="mt-6">
          <Button href="/contact" size="lg">
            Go to the contact page
            <ArrowRight aria-hidden className="size-4" />
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
