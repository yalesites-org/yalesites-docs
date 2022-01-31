import emulsifyTheme from "gatsby-theme-emulsify/src/gatsby-plugin-theme-ui";

// components
import layout from "./components/layout";

export default {
  ...emulsifyTheme,
  ...layout,
  colors: {
    text: "#111",
    background: "#fff",
    modes: {
      dark: {
        text: "#ccc",
        background: "#222",
      },
    },
  },
};
