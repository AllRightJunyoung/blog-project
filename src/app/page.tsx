import { ChakraProviders, Recoil } from "./providers";
import { getAllPosts } from "./utils/shared/readFile";
import { HomeLayout } from "./components/home/Layout";

export default async function HomePage() {
  const postAllData = getAllPosts();

  return (
    <Recoil>
      <ChakraProviders>
        <HomeLayout data={postAllData} />
      </ChakraProviders>
    </Recoil>
  );
}
