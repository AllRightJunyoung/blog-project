"use client";
import type { LayoutProps } from "./Layout.types";
import { Main } from "../template";
import { Footer } from "@/components/shared";
import { FeaturedPostLayout } from "../FeaturedPost/Layout";

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
