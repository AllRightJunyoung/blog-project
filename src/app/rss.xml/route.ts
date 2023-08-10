import RSS from "rss";
import { getAllPosts } from "../posts/utils";

export async function GET() {
  const allposts = getAllPosts();
  const feed = new RSS({
    title: "준영의 기술블로그",
    description: "준영의 기술블로그 입니다.",
    feed_url: `${process.env.BLOG_URI}/rss.xml`,
    site_url: `${process.env.BLOG_URI}`,
    language: "ko",
  });

  allposts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${process.env.BLOG_URI}/posts/${post.slug}`,
      guid: `${post.slug}`,
      date: post.date,
    });
  });
  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
