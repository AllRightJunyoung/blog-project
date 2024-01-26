import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { PostsType } from "@/types/shared";

const postsDirectory = path.join(process.cwd(), "posts");
const dataDirectory = path.join(process.cwd(), "data");

export const getJsonData = cache((name: string): unknown => {
  const filePath = path.join(dataDirectory, `${name}.json`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(fileContent);
});

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
