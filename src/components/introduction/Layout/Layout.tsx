"use client";

import MyInfo from "../MyInfo";
import Footer from "../Footer";

import ProjectLayout from "../Project/ProjectLayout";
import type { ProjectDataType } from "@/types/introduction";

interface Props {
  project: ProjectDataType[];
}

const IntroductionLayout = ({ project }: Props) => {
  return (
    <>
      <MyInfo />
      <ProjectLayout data={project}></ProjectLayout>
      <Footer />
    </>
  );
};
export default IntroductionLayout;
