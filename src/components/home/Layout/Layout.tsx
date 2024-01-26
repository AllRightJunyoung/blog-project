"use client";

import { PostsType } from "@/types/shared";
import { Main } from "../template";
import { Footer } from "@/components/shared";
import { FeaturedPostLayout } from "../FeaturedPost/Layout";

export interface LayoutProps {
  data: PostsType[];
}

const HomeLayout = ({ data }: LayoutProps) => {
  return (
    <>
      <FeaturedPostLayout />
      <Main data={data} />
      <Footer />
    </>
  );
};
export default HomeLayout;
