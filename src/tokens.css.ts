const colors = {
  white: "#fff",
  blue: "#383182",
  pink: "#7B47F3",
  orange: "#F96E62",
  slateBlue: "#222944",
  slatePurple: "#5D317C",
  slateWhite: "#F0F0F0",
  slateRed: "#C16C6C",
} as const;

type Color = keyof typeof colors;

/**
 * Space
 */

const space = {
  extraExtraSmall: "0.06rem",
  extraSmall: "0.25rem",
  small: "8px",
  medium: "16px",
  large: "32px",
  extraLarge: "64px",
  extraExtraLarge: "128px",
};

type Space = keyof typeof space;

const negativeSpace = {
  extraExtraSmall: "-0.06rem",
  extraSmall: "-0.25rem",
  small: "-8px",
  medium: "-16px",
  large: "-32px",
  extraLarge: "-64px",
  extraExtraLarge: "-128px",
};

type NegativeSpace = keyof typeof negativeSpace;

/**
 * Font
 */

const fontSizes = {
  small: "0.75rem",
  medium: "1rem",
  large: "2rem",
  extraLarge: "3rem",
  extraExtraLarge: "4rem",
};

type FontSize = keyof typeof fontSizes;

const fontFamilies = {
  Gilroy: "Gilroy",
  GilroyLight: "Gilroy-Light",
  GilroyMedium: "Gilroy-Regular",
  GilroyBold: "Gilroy-Bold",
  SansSerif: "sans-serif",
};

type FontFamily = keyof typeof fontFamilies;

const fontWeights = {
  light: 300,
  regular: 400,
  bold: 700,
};

type FontWeight = keyof typeof fontWeights;

const display = {
  flex: "flex",
  inlineFlex: "inline-flex",
  grid: "grid",
  inlineBlock: "inline-block",
  block: "block",
  none: "none",
  initial: "initial",
};

type Display = keyof typeof display;

const breakpoints = {
  mobile: "screen and (max-width: 768px)",
  tablet: "screen and (min-width: 768px) and (max-width: 1024px)",
  tabletMax: "screen and (min-width: 1024px)",
  desktop: "screen and (min-width: 1024px) and (max-width: 1440px)",
  desktopL: "screen and (min-width: 1440px) and (max-width: 1920px)",
  desktopXl: "screen and (min-width: 1920px)",
};

type Breakpoint = keyof typeof breakpoints;

const columns = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "11",
  12: "12",
};

type Columns = keyof typeof columns;

const radii = {
  extraSmall: "0.25rem",
  small: "0.5rem",
  medium: "1rem",
  large: "2rem",
  extraLarge: "4rem",
  rounded: "50%",
};

type Radius = keyof typeof radii;

// Tokens
export {
  colors,
  space,
  fontSizes,
  fontFamilies,
  fontWeights,
  display,
  breakpoints,
  negativeSpace,
  columns,
  radii,
};

// Types
export {
  Color,
  Space,
  FontSize,
  FontFamily,
  Display,
  Breakpoint,
  NegativeSpace,
  Columns,
  Radius,
  FontWeight,
};
