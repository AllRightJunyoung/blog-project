import path from "path";
import { promises as fs } from "fs";
import { readFile } from "fs/promises";

import matter from "gray-matter";
import type { PostsType } from "../types";
import { cache } from "react";

const postsDirectory = path.join(process.cwd(), "src/app/content");

export const getPostData = async (postId: string): Promise<PostsType> => {
  const postSlug = postId.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = await readFile(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  } as PostsType;
  return postData;
};
export const getAllPosts = cache(async (): Promise<PostsType[]> => {
  const postFiles = await fs.readdir(postsDirectory);

  const allPosts = await Promise.all(
    postFiles.map(async (postFile) => {
      return getPostData(postFile);
    }),
  );

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  );

  return sortedPosts;
});
