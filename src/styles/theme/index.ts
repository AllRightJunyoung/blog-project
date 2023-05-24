import { extendTheme } from "@chakra-ui/react";

export const CustomTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#17242c",
      },
    },
  },
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
      stroke: "#73CECF",
    },
    divider: {
      color: "white",
    },
  },
});
