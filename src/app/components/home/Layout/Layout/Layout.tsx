"use client";
import { RecoilRoot } from "recoil";
import type { LayoutProps } from "./Layout.types";
import { Nav, Main, Footer } from "@/app/components/home/Layout";

const Layout = ({ data }: LayoutProps) => {
  return (
    <RecoilRoot>
      <Nav />
      <Main data={data} />
      <Footer />
    </RecoilRoot>
  );
};
export default Layout;
