import { extendTheme } from "@chakra-ui/react";

export const CustomTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#17242c",
        color: "white",
      },
    },
  },
  colors: {
    blog: {
      tag: {
        active: {
          fontColor: "#2D7B7F",
          background: "#00393C",
        },
        inactive: {
          fontColor: "#627387",
          background: "#293C4A",
        },
      },
      SearhBar: {
        fontColor: "#627387",
        background: "#293C4A",
      },
      NavBar: {
        fontColor: "white",
        background: "#293c4a",
      },
      card: {
        fontColor: "white",
        background: "#242E35",
      },
      pagination: {
        fontColor: "white",
        stroke: "#73CECF",
      },
      divider: {
        color: "white",
      },
    },
  },
});
