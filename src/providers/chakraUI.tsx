"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { theme } from "../styles/theme";
import dynamic from "next/dynamic";

const ChakraProvider = dynamic(() =>
  import("@chakra-ui/provider").then((mod) => mod.ChakraProvider),
);

function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

export default ChakraProviders;
