import type { Metadata } from "next";
import { FlaskConical } from "lucide-react";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research areas, questions, and ongoing inquiry by Govind Kadam.",
};

export default function ResearchPage() {
  return (
    <PlaceholderPage
      eyebrow="Research"
      title="Research"
      description="Research areas, open questions, and ongoing lines of inquiry. Entries will be added as the research program is defined."
      icon={FlaskConical}
      plannedContent={[
        "Research areas and guiding questions",
        "Ongoing investigations and working notes",
        "Long-form research writing in a dedicated reading layout",
      ]}
    />
  );
}
