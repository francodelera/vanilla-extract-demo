import React from "react";
import { PropsWithChildren } from "react";
import { headerStyles, textStyles } from "./header.css";

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className={headerStyles}>
      <span className={textStyles}>{children}</span>
    </div>
  );
};
