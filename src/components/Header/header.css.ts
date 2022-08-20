import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "src/theme.css";

export const headerStyles = style({
  padding: vars.space.extraExtraLarge,
});

export const textStyles = style({
  fontSize: vars.fonts.fontSizes.extraExtraLarge,
  fontFamily: vars.fonts.fontFamily.GilroyBold,
  borderBottom: `${vars.colors.pink} solid ${vars.space.extraSmall}`,
  paddingBottom: vars.space.small,
  letterSpacing: vars.space.extraExtraSmall,
});

export const _background = styleVariants(vars.colors, (background) => ({
  background,
}));

export const _color = styleVariants(vars.colors, (color) => ({
  color,
}));
