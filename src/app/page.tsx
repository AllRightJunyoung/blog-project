import { RecoilRoot } from "recoil";
import { Footer, Main, Nav } from "@/app/components/home/Layout";
import { getAllPosts } from "./posts/utils";

export const HomePage = () => {
  const postAllData = getAllPosts();

  return (
    <section>
      <Nav />
      <Main data={postAllData} />
      <Footer />
    </section>
  );
};

export default HomePage;
