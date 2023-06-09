import { atom, selector } from "recoil";
import type { PostCardType } from "@/app/posts/types";

export const AllPostsState = atom({
  key: "AllPostsState",
  default: [] as PostCardType[],
});
export const CategoryTagState = atom({
  key: "CategoryTag",
  default: "All",
});

export const PostCardSectionState = selector({
  key: "PostCardSectionState",
  get: ({ get }) => {
    const Allposts = get(AllPostsState);
    const category = get(CategoryTagState);
    const filteredCategoryPosts = Allposts.filter(
      (post) => post.category === category,
    );
    return category === "All" ? Allposts : filteredCategoryPosts;
  },
});
