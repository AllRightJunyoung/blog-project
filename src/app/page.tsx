import { getAllPosts } from "./posts/utils";
import { Layout } from "./components/home/Layout";

export const HomePage = () => {
  const postAllData = getAllPosts();

  return (
    <section>
      <Layout data={postAllData} />
    </section>
  );
};

export default HomePage;
