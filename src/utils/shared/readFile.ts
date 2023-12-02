import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostsType } from "../../types/shared";
import { cache } from "react";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostData = cache((postId: string): PostsType => {
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
});
export const getAllPosts = cache(() => {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  );

  return sortedPosts;
});
