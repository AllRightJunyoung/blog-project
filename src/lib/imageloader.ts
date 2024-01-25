import type { ImageLoaderProps } from "next/image";

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  return `${process.env.IMAGE_URI}${src}?w=${width}&q=${quality || 75}`;
}
