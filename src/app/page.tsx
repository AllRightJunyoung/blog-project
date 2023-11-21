import { Header, HomeLayout } from "./components/home/Layout";
import { ChakraProviders, Recoil } from "./providers";
import { getAllPosts } from "./utils/shared/readFile";

export default async function HomePage() {
  const postAllData = getAllPosts();

  return (
    <Recoil>
      <ChakraProviders>
        <Header />
        <HomeLayout data={postAllData} />
      </ChakraProviders>
    </Recoil>
  );
}
