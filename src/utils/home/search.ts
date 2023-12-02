import type { PostsType } from "@/types/shared";
export const getSearchPost = (
  input: string,
  posts: PostsType[],
): PostsType[] => {
  let searchPosts: PostsType[] = [];

  posts.forEach((post) => {
    const searchInput = input;
    const postTitle = String(post.title);
    const isValid = postTitle.search(new RegExp(searchInput, "i"));

    if (isValid !== -1) {
      searchPosts.push(post);
    }
  });
  return searchPosts;
};
