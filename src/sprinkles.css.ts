import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import {
  breakpoints,
  colors,
  columns,
  display,
  fontFamilies,
  fontSizes,
  fontWeights,
  negativeSpace,
  radii,
  space,
} from "./tokens.css";

const properties = defineProperties({
  properties: {
    appearance: ["none"],
    border: ["none"],
    borderBottomLeftRadius: radii,
    borderBottomRightRadius: radii,
    borderStyle: ["solid", "dashed"],
    borderTopLeftRadius: radii,
    borderTopRightRadius: radii,
    borderColor: colors,
    bottom: space,
    cursor: ["pointer", "progress"],
    flexBasis: [0] as const,
    flexGrow: [0, 1] as const,
    flexShrink: [0, 1] as const,
    flexWrap: ["wrap"],
    fontFamily: fontFamilies,
    fontWeight: fontWeights,
    height: ["100%"],
    left: space,
    letterSpacing: [0.5, 0.6],
    listStyle: ["none"],
    opacity: [0, 1],
    maxHeight: ["0px", "100%"],
    maxWidth: ["768px"],
    right: space,
    top: space,
    textTransform: ["uppercase"],
    width: ["100%"],
    whiteSpace: ["pre-line"],
    wordBreak: ["break-word"],
    zIndex: {
      "0": 0,
      "100": 100,
      "200": 200,
      "300": 300,
      "400": 400,
      "500": 500,
      "600": 600,
      "999": 999,
      "1000": 1000,
    },
  },
  shorthands: {
    borderBottomRadius: ["borderBottomLeftRadius", "borderBottomRightRadius"],
    borderRadius: [
      "borderTopLeftRadius",
      "borderBottomLeftRadius",
      "borderTopRightRadius",
      "borderBottomRightRadius",
    ],
    borderTopRadius: ["borderTopLeftRadius", "borderTopRightRadius"],
  },
});

const pseudoProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: "&:hover" },
  },
  defaultCondition: "default",
  properties: {
    textDecoration: ["underline", "none"],
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    mobile: { "@media": breakpoints.mobile },
    tablet: { "@media": breakpoints.tablet },
    tabletMax: { "@media": breakpoints.tabletMax },
    desktop: { "@media": breakpoints.desktop },
    desktopL: { "@media": breakpoints.desktopL },
    desktopXl: { "@media": breakpoints.desktopXl },
    default: {},
  },
  defaultCondition: "default",
  properties: {
    alignItems: {
      bottom: "flex-end",
      center: "center",
      top: "flex-start",
    },
    borderBottomWidth: ["2px", "4px", "6px"],
    display,
    fontSize: fontSizes,
    gap: space,
    marginTop: { ...space, ...negativeSpace },
    marginRight: { ...space, ...negativeSpace },
    marginBottom: { ...space, ...negativeSpace },
    marginLeft: { ...space, ...negativeSpace },
    overflow: ["auto", "hidden", "visible"],
    overflowX: ["auto", "hidden", "visible"],
    overflowY: ["auto", "hidden", "visible"],
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    paddingTop: space,
    position: ["absolute", "relative", "sticky", "fixed"],
    textAlign: ["left", "center", "right"],
    visibility: ["visible", "hidden"],
    justifyContent: {
      center: "center",
      left: "flex-start",
      right: "flex-end",
      spaceBetween: "space-between",
      spaceAround: "space-around",
      spaceEvenly: "space-evenly",
    },
    justifyItems: {
      flexStart: "flex-start",
      flexEnd: "flex-end",
      center: "center",
      spaceBetween: "space-between",
      spaceArount: "space-around",
      spaceEvenly: "space-evenly",
      initial: "initial",
      inherit: "inherit",
    },
    flexDirection: ["row", "column"],
    gridColumnStart: columns,
    gridColumnEnd: columns,
  },
  shorthands: {
    padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    marginX: ["marginRight", "marginLeft"],
    marginY: ["marginTop", "marginBottom"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {
      "@media": "(prefers-color-scheme: light)",
    },
    darkMode: {
      "@media": "(prefers-color-scheme: dark)",
    },
  },
  defaultCondition: "lightMode",
  properties: {
    color: colors,
    backgroundColor: colors,
    borderBottomColor: colors,
  },
});

export const sprinkles = createSprinkles(
  properties,
  colorProperties,
  responsiveProperties,
  pseudoProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
