import type { PostData } from "@/app/posts/types";
export interface PostCardProps
  extends Pick<PostData, "title" | "date" | "category" | "thumbnail" | "slug"> {
  time: string;
}
