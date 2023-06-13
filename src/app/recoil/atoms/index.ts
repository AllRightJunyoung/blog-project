import { atom, selector } from "recoil";
import type { PostsType } from "@/app/posts/types";

export const AllPostState = atom({
  key: "AllPostState",
  default: [] as PostsType[],
});
export const CategoryTagState = atom({
  key: "CategoryTagState",
  default: "All",
});

export const PostCardSectionState = selector({
  key: "PostCardSectionState",
  get: ({ get }) => {
    const allPosts = get(AllPostState);
    const category = get(CategoryTagState);
    const filteredCategoryPosts = allPosts.filter(
      (post) => post.category === category,
    );
    return category === "All" ? allPosts : filteredCategoryPosts;
  },
});

export const FeaturedPostsState = selector({
  key: "FeaturedPostsState",
  get: ({ get }) => {
    const allPosts = get(AllPostState);
    const featuredPosts = allPosts.filter((post) => post.featured === true);
    return featuredPosts;
  },
});
