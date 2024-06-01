import { DiaryMainLayout } from "@/components/diary";
import { getJsonData } from "@/utils/shared/readFile";
import { DiaryPageType } from "@/types/diary";

export default function DiaryMainPage() {
  const dirayData = getJsonData("diary") as DiaryPageType;

  return <DiaryMainLayout data={dirayData} />;
}
