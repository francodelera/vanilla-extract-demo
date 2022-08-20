import React from "react";
import { PropsWithChildren } from "react";
import * as styles from "./header.css";

interface HeaderProps {
  background: keyof typeof styles._background;
  color: keyof typeof styles._color;
}

export const Header = ({ children, background, color }: PropsWithChildren<HeaderProps>) => {
  return (
    <div
      className={[styles.headerStyles, styles._background[background], styles._color[color]].join(
        " ",
      )}
    >
      <span className={styles.textStyles}>{children}</span>
    </div>
  );
};
