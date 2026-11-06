import type { Metadata } from "next";
import { ProjectsHero } from "@/components/projects/projects-hero";
import { FeaturedProject } from "@/components/projects/featured-project";
import { CategorySections } from "@/components/projects/category-sections";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering portfolio of Govind Kadam: the featured KryomCode project plus categorized explorations across emerging technologies.",
};

/** Projects portfolio: hero, featured KryomCode, category sections. */
export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <FeaturedProject />
      <CategorySections />
    </>
  );
}
