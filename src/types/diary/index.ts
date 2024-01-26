import type { PostsType } from "../shared";

export type DiaryListType = Pick<
  PostsType,
  "description" | "tags" | "date" | "thumbnail"
>;

export type DiaryPageType = {
  date: string[];
  list: DiaryListType[];
};
