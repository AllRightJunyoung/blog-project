export type PostsType = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  date: string;
  content: string;
  thumbnail: string;
};

export interface PostCardType
  extends Pick<
    PostsType,
    "slug" | "title" | "category" | "date" | "thumbnail"
  > {
  time: string;
}
