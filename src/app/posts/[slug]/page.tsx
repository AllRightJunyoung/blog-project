import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getPostData } from "@/app/utils/shared/readFile";
import { ChakraProviders, Recoil } from "../../providers";
import { Header } from "@/app/components/shared";
import Spinner from "@/app/components/shared/Spinner";

const PostDetailPageLayout = dynamic(
  () => import("@/app/components/posts/Layout/PostDetailLayout"),
  {
    loading: () => <Spinner />,
    ssr: false,
  },
);

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
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

  return (
    <Recoil>
      <ChakraProviders>
        <Header />
        <PostDetailPageLayout
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
