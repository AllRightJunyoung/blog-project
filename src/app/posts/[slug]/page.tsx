import PostSection from "../../components/template/PostSection";
import { getPostData } from "../utils";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params: { slug } }: Props) {
  const postData = getPostData(slug);

  return (
    <PostSection
      title={postData.title}
      content={postData.content}
      date={postData.date}
      tags={postData.tags}
    />
  );
}
