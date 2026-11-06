import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicationLayout } from "@/components/publications/publication-layout";
import { buildCitation } from "@/data/publications";
import { getContentSlugs, getPublicationEntry } from "@/lib/content";

interface PublicationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getContentSlugs("publications").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PublicationPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getPublicationEntry(slug);
    return {
      title: meta.title,
      description: buildCitation(meta),
      keywords: meta.keywords,
      authors: meta.authors.map((name) => ({ name })),
      openGraph: {
        type: "article",
        title: meta.title,
        description: buildCitation(meta),
        publishedTime: meta.date,
        authors: meta.authors,
      },
    };
  } catch {
    return { title: "Publication" };
  }
}

/** Reusable publication detail template driven by src/content/publications. */
export default async function PublicationPage({ params }: PublicationPageProps) {
  const { slug } = await params;
  let entry;
  try {
    entry = await getPublicationEntry(slug);
  } catch {
    notFound();
  }
  return <PublicationLayout entry={entry} />;
}
