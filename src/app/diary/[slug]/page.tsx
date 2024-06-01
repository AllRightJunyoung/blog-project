import { DiaryDetailLayout } from "@/components/diary";
import { getPostsData, getAllPosts } from "@/utils/shared/readFile";

type Props = {
  params: {
    slug: string;
  };
};

export default function DiaryDetailPage({ params: { slug } }: Props) {
  const postDiaryData = getPostsData(slug, "diary");
  return (
    <DiaryDetailLayout
      description={postDiaryData.description}
      tags={postDiaryData.tags}
      date={postDiaryData.date}
      content={postDiaryData.content}
      title={postDiaryData.title}
      category={postDiaryData.category}
    />
  );
}

export function generateStaticParams() {
  const allpostDiaryData = getAllPosts("diary");
  return allpostDiaryData.map((post) => ({
    slug: post.slug,
  }));
}
