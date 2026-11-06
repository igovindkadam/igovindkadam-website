import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Direct contact information for Govind Kadam.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      eyebrow="Contact"
      title="Contact"
      description="Direct contact information and inquiry options. Details will be published once provided."
      icon={Mail}
      plannedContent={[
        "Email address for general and research inquiries",
        "Response-time expectations",
        "Inquiry form (planned; no backend service in this release)",
      ]}
    />
  );
}
