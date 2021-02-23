import React from "react";
import { css } from "@linaria/core";
import { size } from "./rapierui-css/index.js";

export default function Test() {
  return <div className={headerCss}>测试</div>;
}

// Marked: style

const headerCss = css`
  ${size("10px", "12px")}
`;
