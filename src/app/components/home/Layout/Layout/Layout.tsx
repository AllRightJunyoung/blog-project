"use client";

import FeaturedPost from "../../FeaturedPost";
import type { LayoutProps } from "./Layout.types";
import { Main } from "@/app/components/home/Layout";
import { Footer } from "@/app/components/shared";

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
