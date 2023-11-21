"use client";

import FeaturedPost from "../../FeaturedPost";
import type { LayoutProps } from "./Layout.types";
import { Header, Footer } from "@/app/components/shared";
import { Main } from "@/app/components/home/Layout";

const HomeLayout = ({ data }: LayoutProps) => {
  return (
    <>
      <Header />
      <FeaturedPost />
      <Main data={data} />
      <Footer />
    </>
  );
};
export default HomeLayout;
