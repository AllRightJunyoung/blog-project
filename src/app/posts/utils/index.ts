import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostData } from "../types";

const postsDirectory = path.join(process.cwd(), "src/app/content");

export const getPostData = (postId: string): PostData => {
  const postSlug = postId.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  } as PostData;

  return postData;
};
export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  );

  return sortedPosts;
};
