import type { PostsType } from "../shared";

export interface PostCardType
  extends Pick<
    PostsType,
    "slug" | "title" | "category" | "date" | "thumbnail"
  > {
  diffDate: string;
}

export interface FeaturedPostCardType
  extends Pick<
    PostsType,
    "slug" | "title" | "category" | "date" | "thumbnail" | "featured"
  > {
  diffDate: string;
}
