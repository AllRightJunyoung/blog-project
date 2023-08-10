"use client";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

type RecoilProps = {
  children: ReactNode;
};

const Recoil = ({ children }: RecoilProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
export default Recoil;
