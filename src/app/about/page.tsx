import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { BioPanel } from "@/components/about/bio-panel";
import { InterestDomains } from "@/components/about/interest-domains";
import { Philosophy } from "@/components/about/philosophy";
import { AboutJourney, RelatedDestinations } from "@/components/about/about-journey";
import { siteIdentity } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteIdentity.owner}, ${siteIdentity.positioning}: biography, intellectual interests, research philosophy, and learning journey.`,
  openGraph: {
    title: `About ${siteIdentity.owner}`,
    description:
      "Independent researcher and engineer — biography, interests, philosophy, and journey.",
  },
};

/** About page: hero, biography, interests, philosophy, journey, links. */
export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <section aria-label="Biography">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <BioPanel />
        </div>
      </section>

      <section
        aria-label="Academic and intellectual interests"
        className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <InterestDomains />
        </div>
      </section>

      <section aria-label="Research and engineering philosophy">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Philosophy />
        </div>
      </section>

      <section
        aria-label="Learning journey"
        className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-research-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <AboutJourney />
        </div>
      </section>

      <section aria-label="Related destinations">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <RelatedDestinations />
        </div>
      </section>
    </>
  );
}
