import dynamic from "next/dynamic";
import { Spinner } from "@/components/shared";
import { getAllPosts } from "@/utils/shared/readFile";

const HomeLayout = dynamic(() => import("../components/home/Layout/Layout"), {
  loading: () => <Spinner />,
  ssr: false,
});

export default async function HomePage() {
  const postAllData = getAllPosts();

  return <HomeLayout data={postAllData} />;
}
