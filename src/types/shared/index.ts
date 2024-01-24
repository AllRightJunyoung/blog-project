export type PostsType = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  date: string;
  content: string;
  thumbnail: string;
  featured: boolean;
  blurURL: string;
};

export type ProjectDataType = {
  name: string;
  description: string;
  skills: string[];
  image: string;
  github: string;
  portfolio: string;
};

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
