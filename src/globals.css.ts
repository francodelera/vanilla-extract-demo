import { globalFontFace, globalStyle, style } from "@vanilla-extract/css";

globalStyle("body, body *", {
  all: "unset",
  boxSizing: "border-box",
  margin: "40px",
});

const gilroyBold = "GlobalGilroyBold";

globalFontFace(gilroyBold, {
  src: 'local("Gilroy-Bold")',
});

export const font = style({
  fontFamily: gilroyBold,
});

globalStyle("button", {
  fontFamily: "Gilroy-Bold",
  letterSpacing: "1px",
  fontSize: "24px",
  color: "white",
});
