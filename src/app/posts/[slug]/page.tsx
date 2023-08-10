import { Header } from "@/app/components/home/Layout";
import { PostDetailSection } from "@/app/components/template/PostDetailSection";
import { Metadata } from "next";
import { getPostData } from "../utils";
import { ChakraProviders, Recoil } from "../../providers";
import GoogleAnalytics from "@/app/components/common/GoogleAnalytics";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = getPostData(slug);
  return {
    title,
    description,
    openGraph: {
      type: "website",
      siteName: title,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PostDetailPage({ params: { slug } }: Props) {
  const postData = getPostData(slug);
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <Recoil>
      <ChakraProviders>
        {GA_ID && <GoogleAnalytics GA_TRACKING_ID={GA_ID} />}
        <Header />
        <PostDetailSection
          title={postData.title}
          content={postData.content}
          date={postData.date}
          tags={postData.tags}
          category={postData.category}
        />
      </ChakraProviders>
    </Recoil>
  );
}
