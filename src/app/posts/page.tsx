import PostSection from "../components/template/PostSection";
import { getPostData } from "./utils";

export default async function Post() {
  const postData = getPostData("post.md");

  console.log(postData);

  return (
    <PostSection
      title={postData.title}
      content={postData.content}
      date={postData.date}
      tags={postData.tags}
    />
  );
}
