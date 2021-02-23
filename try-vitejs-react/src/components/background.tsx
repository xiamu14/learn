/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import bg1 from "../assets/image/bg_01.jpg";
import bg2 from "../assets/image/bg_02.jpg";
import bg3 from "../assets/image/bg_03.jpg";
import bg4 from "../assets/image/bg_04.jpg";

const backgroundCss = css`
  width: 100%;

  > img {
    width: 100%;
    display: block;
    object-fit: fill;
  }
`;

export default function Background() {
  return (
    <div css={backgroundCss}>
      <img src={bg1} alt="background01"></img>
      <img src={bg2} alt="background02"></img>
      <img src={bg3} alt="background03"></img>
      <img src={bg4} alt="background04"></img>
    </div>
  );
}
