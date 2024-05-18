import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const breakpoints = {
  sm: "375px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

export const theme: ThemeConfig = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: () => ({
      "*": {
        padding: 0,
        margin: 0,
      },
      "html,body": {
        _dark: {
          bg: "#202125",
        },
        bg: "#17242c",
        width: "100%",
        height: "100%",
      },
      ".swiper .swiper-pagination": {
        position: "absolute",
      },
      ".swiper .swiper-pagination-bullet": {
        backgroundColor: "white",
        margin: "0 10px",
        width: "16px",
        height: "16px",
      },
      ".swiper .swiper-button-next::after": {
        content: `""`,
      },
      ".swiper .swiper-button-prev::after": {
        content: `""`,
      },
    }),
  },
  breakpoints,
  colors: {
    dark: {
      header: {
        background: "black",
      },
      tag: {
        active: {
          fontColor: "black",
          background: "white",
        },
        inactive: {
          fontColor: "white",
          background: "black",
        },
      },
      searchBar: {
        fontColor: "black",
        background: "white",
      },
      card: {
        fontColor: "white",
        background: "black",
      },
      pagination: {
        border: "white",
      },
      userProfile: {
        border: "white",
      },
      snsIcons: {
        bg: "white",
        border: "white",
      },
      toc: {
        bg: "#1b1c1f",
        quoteColor: "teal",
        h1Color: "gray",
        h2Color: "white",
      },
    },
    light: {
      header: {
        background: "#293c4a",
      },
      tag: {
        active: {
          fontColor: "black",
          background: "#01827F",
        },
        inactive: {
          fontColor: "white",
          background: "#222A2F",
        },
      },
      searchBar: {
        fontColor: "white",
        background: "#293c4a",
      },
      card: {
        fontColor: "#637FB8",
        background: "#10181B",
      },
      pagination: {
        border: "#73CECF",
      },
      userProfile: {
        border: "#357276",
      },
      snsIcons: {
        background: "#357276",
        border: "#357276",
      },
      toc: {
        bg: "#141E25",
        quoteColor: "teal",
        h1Color: "#FF8945",
        h2Color: "#9FD5D5",
      },
    },
    divider: {
      color: "white",
    },
  },
});
