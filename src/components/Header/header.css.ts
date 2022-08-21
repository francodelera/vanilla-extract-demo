import { style } from "@vanilla-extract/css";
import { sprinkles } from "src/sprinkles.css";

export const headerStyles = sprinkles({
  padding: {
    mobile: "large",
    tablet: "extraLarge",
    desktop: "extraExtraLarge",
    default: "extraExtraLarge",
  },
  backgroundColor: {
    lightMode: "white",
    darkMode: "slateBlue",
  },
});

export const textStyles = style([
  sprinkles({
    fontSize: {
      mobile: "medium",
      tablet: "large",
      desktop: "extraExtraLarge",
      default: "extraExtraLarge",
    },
    fontFamily: "GilroyBold",
    paddingBottom: "small",
    letterSpacing: 0.5,
    color: {
      lightMode: "blue",
      darkMode: "slateWhite",
    },
    borderBottomColor: {
      lightMode: "pink",
      darkMode: "slatePurple",
    },
    borderBottomWidth: {
      mobile: "2px",
      tablet: "4px",
      desktop: "6px",
      default: "6px",
    },
  }),
  {
    borderBottomStyle: "solid",
  },
]);
