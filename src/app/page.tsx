import { getAllPosts } from "./posts/utils";
import { Layout } from "./components/home/Layout";

export default function HomePage() {
  const postAllData = getAllPosts();

  return (
    <section>
      <Layout data={postAllData} />
    </section>
  );
}
