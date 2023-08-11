import { Header, Layout } from "./components/home/Layout";
import { getAllPosts } from "./posts/utils";
import { ChakraProviders, Recoil } from "./providers";

export default function HomePage() {
  const postAllData = getAllPosts();

  return (
    <Recoil>
      <ChakraProviders>
        <Header />
        <section>
          <Layout data={postAllData} />
        </section>
      </ChakraProviders>
    </Recoil>
  );
}
