import { Image } from "@chakra-ui/next-js";

import type { ImageProps } from "@chakra-ui/next-js";

const ResponsiveImage = (props: ImageProps) => {
  return (
    <>
      <Image
        {...props}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </>
  );
};
export default ResponsiveImage;
