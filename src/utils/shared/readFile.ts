import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { PostsType } from "@/types/shared";

export const getJsonData = cache((name: string): unknown => {
  const dataDirectory = path.join(process.cwd(), "data");

  const filePath = path.join(dataDirectory, `${name}.json`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(fileContent);
});

export const getPostsData = cache(
  (postId: string, position: string): PostsType => {
    const postsDirectory = path.join(process.cwd(), `posts/${position}`);

    const postSlug = postId.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    const postData = {
      slug: postSlug,
      ...data,
      content,
    } as PostsType;
    return postData;
  },
);
export const getAllPosts = cache((position: string) => {
  const postsDirectory = path.join(process.cwd(), `posts/${position}`);
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostsData(postFile, position);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  );

  return sortedPosts;
});
