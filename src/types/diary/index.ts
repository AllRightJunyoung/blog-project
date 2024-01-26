import type { PostsType } from "../shared";

export type DiaryType = Pick<
  PostsType,
  "description" | "tags" | "date" | "thumbnail" | "slug"
>;

export type DiaryPageType = {
  date: string[];
  list: DiaryType[];
};
