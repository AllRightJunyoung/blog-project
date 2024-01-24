import { IntroductionLayout } from "@/components/introduction/Layout";
import { getJsonData } from "@/utils/shared/readFile";

import type { ProjectDataType } from "@/types/shared";

export default async function IntroductionPage() {
  const projectData = getJsonData("project") as ProjectDataType[];

  return <IntroductionLayout project={projectData} />;
}
