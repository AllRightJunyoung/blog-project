import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostsType } from "../types";

const postsDirectory = path.join(process.cwd(), "src/app/content");

export const getPostData = (postId: string): PostsType => {
  console.time("getPostData 실행시간은 얼마나 걸릴까?");

  const postSlug = postId.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  } as PostsType;
  console.timeEnd("getPostData 실행시간은 얼마나 걸릴까?");

  return postData;
};
export const getAllPosts = () => {
  console.time("getAllPosts 실행시간은 얼마나 걸릴까?");

  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  );
  console.timeEnd("getAllPosts 실행시간은 얼마나 걸릴까?");

  return sortedPosts;
};
