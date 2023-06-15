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

export const currentPageState = atom({
  key: "currentPageState",
  default: 1,
});

export const PostCardSectionState = selector({
  key: "PostCardSectionState",
  get: ({ get }) => {
    const POST_LENGTH = 4;
    const currentPage = get(currentPageState);
    const offset = (currentPage - 1) * POST_LENGTH;
    const allPosts = get(AllPostState);
    const category = get(CategoryTagState);
    const filteredCategoryPosts = allPosts.filter(
      (post) => post.category === category,
    );
    return category === "All"
      ? allPosts.slice(offset, offset + POST_LENGTH)
      : filteredCategoryPosts.slice(offset, offset + POST_LENGTH);
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

export const PaginationState = selector({
  key: "PaginationState",
  get: ({ get }) => {
    const allPosts = get(AllPostState);
    const category = get(CategoryTagState);
    const filteredCategoryPosts = allPosts.filter(
      (post) => post.category === category,
    );
    return category === "All" ? allPosts : filteredCategoryPosts;
  },
});
