import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getPostData } from "@/utils/shared/readFile";
import { Spinner } from "@/components/shared";
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
  const { title, description, thumbnail, tags } = getPostData(slug);
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
  const postData = getPostData(slug);

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
