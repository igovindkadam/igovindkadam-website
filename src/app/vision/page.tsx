import type { Metadata } from "next";
import { Library } from "lucide-react";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Vision",
  description: "Long-term outlook and guiding principles of Govind Kadam.",
};

export default function VisionPage() {
  return (
    <PlaceholderPage
      eyebrow="Vision"
      title="Vision"
      description="Long-term outlook, guiding principles, and the direction of the research program."
      icon={Library}
      plannedContent={[
        "Statement of long-term research direction",
        "Guiding principles and working philosophy",
        "Roadmap of focus areas over time",
      ]}
    />
  );
}
