import React from "react";
import { PropsWithChildren } from "react";
import { button } from "./button.css";

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <button
      className={button({
        backgroundColor: "accent",
        rounded: false,
        size: "medium",
      })}
    >
      {children}
    </button>
  );
};
