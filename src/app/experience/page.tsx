import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work history and practical background of Govind Kadam.",
};

export default function ExperiencePage() {
  return (
    <PlaceholderPage
      eyebrow="Experience"
      title="Experience"
      description="Work history and practical background. No roles are listed until employment details are confirmed by the owner."
      icon={Briefcase}
      plannedContent={[
        "Professional roles with dates and responsibilities",
        "Independent and consulting engagements",
        "Skills and tooling summary",
      ]}
    />
  );
}
