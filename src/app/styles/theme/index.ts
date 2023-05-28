import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

export const CustomTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#17242c",
      },
    },
  },
  breakpoints,
  colors: {
    tag: {
      active: {
        fontColor: "#00393C",
        background: "#2D7B7F",
      },
      inactive: {
        fontColor: "#627387",
        background: "#293C4A",
      },
    },
    SearchBar: {
      fontColor: "#627387",
      background: "#293C4A",
    },
    NavBar: {
      fontColor: "white",
      background: "#293c4a",
    },
    card: {
      fontColor: "white",
      background: "#10181B",
    },
    pagination: {
      fontColor: "white",
      border: "#73CECF",
    },
    divider: {
      color: "white",
    },
  },
});