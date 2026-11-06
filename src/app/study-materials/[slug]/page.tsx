import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "katex/dist/katex.min.css";
import { ResourceLayout } from "@/components/study/resource-layout";
import {
  getContentSlugs,
  getStudyMaterialEntry,
  getVisibleStudyMaterialMeta,
} from "@/lib/content";
import type { StudyMaterialMeta } from "@/lib/content";

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getContentSlugs("study-materials").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getStudyMaterialEntry(slug);
    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.topics,
      openGraph: {
        type: "article",
        title: meta.title,
        description: meta.description,
        publishedTime: meta.created,
        modifiedTime: meta.updated,
        authors: [meta.author],
      },
    };
  } catch {
    return { title: "Study resource" };
  }
}

/** Reusable study-resource template driven by src/content/study-materials. */
export default async function StudyResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  let entry;
  try {
    entry = await getStudyMaterialEntry(slug);
  } catch {
    notFound();
  }
  const visible = await getVisibleStudyMaterialMeta();
  const bySlug = new Map(visible.map((item) => [item.slug, item]));
  const explicit = entry.meta.relatedResources
    .map((relatedSlug) => bySlug.get(relatedSlug))
    .filter(
      (item): item is StudyMaterialMeta =>
        item !== undefined && item.slug !== slug,
    );
  const sameSubject =
    explicit.length > 0
      ? []
      : visible
          .filter(
            (item) =>
              item.slug !== slug && item.subject === entry.meta.subject,
          )
          .slice(0, 4);
  const related = (explicit.length > 0 ? explicit : sameSubject).slice(0, 4);

  return <ResourceLayout entry={entry} related={related} />;
}
