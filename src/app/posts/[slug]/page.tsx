import { PostDetailSection } from "@/app/components/template/PostDetailSection";
import { getPostData } from "../utils";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
    openGraph: {
      type: "website",
      siteName: title,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PostDetailPage({ params: { slug } }: Props) {
  const postData = getPostData(slug);

  return (
    <PostDetailSection
      title={postData.title}
      content={postData.content}
      date={postData.date}
      tags={postData.tags}
      category={postData.category}
    />
  );
}
