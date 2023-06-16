import { atom, selector } from "recoil";
import type { PostsType } from "@/app/posts/types";
import { getSearchPost } from "../utils/search";

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
export const SearchBarInputState = atom({
  key: "SearchBarInputState",
  default: "",
});

export const PostCardSectionState = selector({
  key: "PostCardSectionState",
  get: ({ get }) => {
    const POST_LENGTH = 4;
    const currentPage = get(currentPageState);
    const offset = (currentPage - 1) * POST_LENGTH;
    const allPosts = get(AllPostState);
    const category = get(CategoryTagState);
    const searchBarInput = get(SearchBarInputState);

    const filteredCategoryPosts = allPosts.filter(
      (post) => post.category === category,
    );

    const currentPosts = category === "All" ? allPosts : filteredCategoryPosts;
    const searchPost = getSearchPost(searchBarInput, currentPosts);

    const pagingPosts =
      category === "All"
        ? allPosts.slice(offset, offset + POST_LENGTH)
        : filteredCategoryPosts.slice(offset, offset + POST_LENGTH);

    return !searchBarInput.length ? pagingPosts : searchPost;
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

export const PaginationPostState = selector({
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
