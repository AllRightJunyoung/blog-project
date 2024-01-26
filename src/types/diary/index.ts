import type { PostsType } from "../shared";

export interface DiaryListType
  extends Pick<PostsType, "description" | "tags" | "image" | "date"> {}

export type DiaryPageType = {
  list: DiaryListType;
};
