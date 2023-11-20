"use client";

import FeaturedPost from "../../FeaturedPost";
import type { LayoutProps } from "./Layout.types";
import { Footer, Main } from "@/app/components/home/Layout";

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
