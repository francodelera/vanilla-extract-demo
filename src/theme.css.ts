import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  colors: {
    white: "#fff",
    blue: "#383182",
    pink: "#7B47F3",
    orange: "#F96E62",
  },
  space: {
    extraExtraSmall: "0.06rem",
    extraSmall: "0.25rem",
    small: "8px",
    medium: "16px",
    large: "32px",
    extraLarge: "64px",
    extraExtraLarge: "128px",
  },
  fonts: {
    fontSizes: {
      small: "0.75rem",
      medium: "1rem",
      large: "2rem",
      extraLarge: "3rem",
      extraExtraLarge: "4rem",
    },
    fontFamily: {
      Gilroy: "Gilroy",
      GilroyLight: "Gilroy-Light",
      GilroyMedium: "Gilroy-Regular",
      GilroyBold: "Gilroy-Bold",
    },
  },
});
