import { getAllPosts } from "./posts/utils";
import { Header, Layout } from "./components/home/Layout";
import { ChakraProviders, Recoil } from "./providers";
import GoogleAnalytics from "@/app/components/common/GoogleAnalytics";

export default function HomePage() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const postAllData = getAllPosts();

  return (
    <Recoil>
      <ChakraProviders>
        {GA_ID && <GoogleAnalytics GA_TRACKING_ID={GA_ID} />}
        <Header />
        <section>
          <Layout data={postAllData} />
        </section>
      </ChakraProviders>
    </Recoil>
  );
}
