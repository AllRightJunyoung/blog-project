import Head from "next/head";
import { Footer, Main, Nav, Header } from "@/components/home/Layout";
const HomePage = () => {
  return (
    <>
      <Head>
        <title>준영 블로그</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
};

export default HomePage;
