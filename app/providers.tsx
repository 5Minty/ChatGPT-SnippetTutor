"use client";

import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./font-theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
