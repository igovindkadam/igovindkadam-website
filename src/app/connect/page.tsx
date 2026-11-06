import type { Metadata } from "next";
import { MessagesSquare } from "lucide-react";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Community presence and collaboration channels for Govind Kadam.",
};

export default function ConnectPage() {
  return (
    <PlaceholderPage
      eyebrow="Connect"
      title="Connect"
      description="Community presence and collaboration channels. Profiles and handles will be listed once provided."
      icon={MessagesSquare}
      plannedContent={[
        "Professional and research profiles",
        "Open-source and community presence",
        "Collaboration interests and availability",
      ]}
    />
  );
}
