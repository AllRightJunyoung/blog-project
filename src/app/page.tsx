import { Header } from "./components/home/Layout";
import { getAllPosts } from "./posts/utils";
import { ChakraProviders, Recoil } from "./providers";
import Spinner from "./components/common/Spinner/Spinner";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("./components/home/Layout/Layout"), {
  ssr: false,
  loading: () => <Spinner />,
});

export default async function HomePage() {
  const postAllData = await getAllPosts();

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
