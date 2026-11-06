import type { Metadata } from "next";
import { User } from "lucide-react";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, interests, and current focus of Govind Kadam, Independent Researcher & Engineer.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About"
      title="About Govind Kadam"
      description="Independent Researcher & Engineer. This section will present background, research interests, and current focus once the details are provided."
      icon={User}
      plannedContent={[
        "Professional biography and current focus",
        "Research interests and engineering domains",
        "Education and credentials, as confirmed by the owner",
      ]}
    />
  );
}
