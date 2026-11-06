import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Books",
  description: "Reading list, notes, and book-length writing by Govind Kadam.",
};

export default function BooksPage() {
  return (
    <PlaceholderPage
      eyebrow="Books"
      title="Books"
      description="Reading list, book notes, and any book-length writing. Titles will appear here once provided."
      icon={BookOpen}
      plannedContent={[
        "Books authored or co-authored, as confirmed by the owner",
        "Reading list with notes and recommendations",
        "Chapter drafts or excerpts, if published",
      ]}
    />
  );
}
