import React from "react";
import {PropsWithChildren} from "react";
import * as styles from "./header.css";

export const Header = ({children}: PropsWithChildren) => {
    return <div className={styles.custom}>{children}</div>;
};
