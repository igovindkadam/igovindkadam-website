import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { KryomCodeFeature } from "@/components/home/kryomcode-feature";
import { InterestsGrid } from "@/components/home/interests-grid";
import { LabsEcosystem } from "@/components/home/labs-ecosystem";
import { WorkPreviews } from "@/components/home/work-previews";
import { ClosingSections } from "@/components/home/closing-sections";
import { siteIdentity } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteIdentity.owner} — ${siteIdentity.positioning}`,
  description:
    "Govind Kadam is an independent researcher and engineer exploring intelligence, computation, and emerging technologies — featuring KryomCode and the KryomLabs ecosystem.",
};

/**
 * Premium homepage: hero, featured KryomCode project, research interests,
 * KryomLabs ecosystem, work previews, journey/vision, and contact CTA.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <KryomCodeFeature />
      <InterestsGrid />
      <LabsEcosystem />
      <WorkPreviews />
      <ClosingSections />
    </>
  );
}
