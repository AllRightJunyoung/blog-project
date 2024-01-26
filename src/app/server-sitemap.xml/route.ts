import { getAllPosts } from "@/utils/shared/readFile";
import { ISitemapField, getServerSideSitemap } from "next-sitemap";

export async function GET(request: Request) {
  const allArticlePosts = getAllPosts("article");

  const sitemapFields: ISitemapField[] = allArticlePosts.map((post) => {
    return {
      loc: `${process.env.BLOG_URI}/posts/${post.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 1,
    };
  });
  sitemapFields.push({
    loc: `${process.env.BLOG_URI}`,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 1,
  });

  return getServerSideSitemap([...sitemapFields]);
}
