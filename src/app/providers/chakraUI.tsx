"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { CustomTheme } from "../styles/theme";

function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={CustomTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

export default ChakraProviders;
