import path from "path";
import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import { MdxContent } from "../components/mdx";
import { Heading } from "../components/common";

type Frontmatter = {
  title: string;
  date: string;
};
type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

async function getPost(filepath: string): Promise<Post<Frontmatter>> {
  const raw = await fs.readFile(filepath, "utf-8");

  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });

  const frontmatter = serialized.frontmatter as Frontmatter;

  return {
    frontmatter,
    serialized,
  };
}

export default async function Post() {
  const filePath = path.join(process.cwd(), "src/app/content");

  const { serialized, frontmatter } = await getPost(`${filePath}/post.mdx`);
  return (
    <div>
      <Heading title={frontmatter.title} fontSize="3xl" />
      <p>Published {frontmatter.date}</p>
      <MdxContent content={serialized} />
    </div>
  );
}
