import dynamic from "next/dynamic";
import { Metadata } from "next";

import { Spinner } from "@/components/shared";
import { getPostsData, getAllPosts } from "@/utils/shared/readFile";

const PostDetailPageLayout = dynamic(
  () => import("@/components/posts/Layout/PostDetailLayout"),
  {
    loading: () => <Spinner />,
    ssr: false,
  },
);

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description, thumbnail, tags } = getPostsData(slug, "article");
  return {
    title,
    description,
    openGraph: {
      type: "website",
      siteName: title,
      title,
      description,
      locale: "ko_KR",
    },
    keywords: tags,
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function PostDetailPage({ params: { slug } }: Props) {
  const postData = getPostsData(slug, "article");

  return (
    <PostDetailPageLayout
      title={postData.title}
      content={postData.content}
      date={postData.date}
      tags={postData.tags}
      category={postData.category}
    />
  );
}
export async function generateStaticParams() {
  const allpostArticleData = getAllPosts("article");
  return allpostArticleData.map((post) => ({
    slug: post.slug,
  }));
}
