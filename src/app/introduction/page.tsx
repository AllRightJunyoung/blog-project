import { IntroductionLayout } from "@/components/introduction/Layout";
import { getJsonData } from "@/utils/shared/readFile";

import { ProjectDataType } from "@/types/introduction";

export default async function IntroductionPage() {
  const projectData = getJsonData("project") as ProjectDataType[];

  return <IntroductionLayout project={projectData} />;
}
