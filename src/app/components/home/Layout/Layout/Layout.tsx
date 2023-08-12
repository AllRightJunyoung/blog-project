"use client";

import type { LayoutProps } from "./Layout.types";
import { Nav, Footer, Main } from "@/app/components/home/Layout";

const Layout = ({ data }: LayoutProps) => {
  return (
    <>
      <Nav />
      <Main data={data} />
      <Footer />
    </>
  );
};
export default Layout;
