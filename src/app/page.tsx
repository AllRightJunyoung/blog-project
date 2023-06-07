import { Footer, Main, Nav } from "@/app/components/home/Layout";
import { getAllPosts } from "./posts/utils";

export const HomePage = () => {
  const postAllData = getAllPosts();

  postAllData.forEach((postData) => {
    console.log(postData.category, postData.title, postData.date);
  });
  return (
    <>
      <Nav />
      <Main data={postAllData} />
      <Footer />
    </>
  );
};

export default HomePage;
