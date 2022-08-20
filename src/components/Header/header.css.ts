import { style } from "@vanilla-extract/css";
import { vars } from "src/theme.css";

export const headerStyles = style({
  background: vars.colors.blue,
  fontSize: "3rem",
  padding: vars.space.extraExtraLarge,
});

export const textStyles = style({
  fontSize: vars.fonts.fontSizes.extraExtraLarge,
  color: "white",
  fontFamily: vars.fonts.fontFamily.GilroyBold,
  borderBottom: `${vars.colors.pink} solid ${vars.space.extraSmall}`,
  paddingBottom: vars.space.small,
  letterSpacing: vars.space.extraExtraSmall,
});
