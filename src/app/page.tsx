import { Footer, Main } from "@/app/components/home/Layout";
import { getAllPosts } from "./posts/utils";

export const HomePage = () => {
  const postAllData = getAllPosts();

  return (
    <section>
      <Main data={postAllData} />
      <Footer />
    </section>
  );
};

export default HomePage;
