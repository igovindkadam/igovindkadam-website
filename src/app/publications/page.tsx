import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Publications",
  description: "Papers, preprints, and scholarly writing by Govind Kadam.",
};

export default function PublicationsPage() {
  return (
    <PlaceholderPage
      eyebrow="Publications"
      title="Publications"
      description="Papers, preprints, and scholarly writing. No entries are listed until publication details are confirmed by the owner."
      icon={FileText}
      plannedContent={[
        "Peer-reviewed papers with citation details",
        "Preprints and technical reports",
        "Citation formats and download links",
      ]}
    />
  );
}
