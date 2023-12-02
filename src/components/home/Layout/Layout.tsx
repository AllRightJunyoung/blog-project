"use client";
import type { LayoutProps } from "./Layout.types";
import FeaturedPost from "../FeaturedPost";
import { Main } from "../template";
import { Footer } from "@/components/shared";

const HomeLayout = ({ data }: LayoutProps) => {
  return (
    <>
      <FeaturedPost />
      <Main data={data} />
      <Footer />
    </>
  );
};
export default HomeLayout;
