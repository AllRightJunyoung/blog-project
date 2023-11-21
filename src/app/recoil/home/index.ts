import { atom, selector } from "recoil";
import type { PostsType } from "@/app/types/shared";
import { getSearchPost } from "@/app/utils/home/search";

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

    // 1. PagiNation 계산
    const currentPage = get(currentPageState);
    const offset = (currentPage - 1) * POST_LENGTH;
    const allPosts = get(AllPostState);
    const category = get(CategoryTagState);
    const searchBarInput = get(SearchBarInputState);

    const filteredCategoryPosts = allPosts.filter(
      (post) => post.category === category,
    );

    const currentPosts = category === "All" ? allPosts : filteredCategoryPosts;
    const searchPost = getSearchPost(searchBarInput, currentPosts).slice(
      offset,
      offset + POST_LENGTH,
    );

    const pagingPosts =
      category === "All"
        ? allPosts.slice(offset, offset + POST_LENGTH)
        : filteredCategoryPosts.slice(offset, offset + POST_LENGTH);

    return searchBarInput.length === 0 ? pagingPosts : searchPost;
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

    const searchBarInput = get(SearchBarInputState);
    const currentPosts = category === "All" ? allPosts : filteredCategoryPosts;
    const searchPost = getSearchPost(searchBarInput, currentPosts);

    return searchBarInput.length === 0 ? currentPosts : searchPost;
  },
});
