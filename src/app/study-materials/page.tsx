import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Study Materials",
  description: "Notes, guides, and learning resources by Govind Kadam.",
};

export default function StudyMaterialsPage() {
  return (
    <PlaceholderPage
      eyebrow="Study Materials"
      title="Study Materials"
      description="Study notes, guides, and learning resources. Materials will be published here as they are prepared."
      icon={GraduationCap}
      plannedContent={[
        "Subject-wise study notes",
        "Tutorials and worked examples",
        "Curated external learning resources",
      ]}
    />
  );
}
