import { essays } from "#velite";
import { getEssayBySlug } from "@/lib/content";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Essay on arman.wtf";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return essays.filter((e) => !e.draft).map((e) => ({ slug: e.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  return renderOgImage({
    eyebrow: "Essay",
    title: essay?.title ?? "Writing",
    subtitle: essay?.description,
  });
}
