/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { size } from "@redchili/retouch";
import featureTitle from "../assets/image/features-title@2x.png";
import Swiper from "./swiper";

const featureTitleCss = css`
  margin: 0 auto .4rem;
  display: block;
  ${css({ ...size("7.5rem, 1.8rem") })}
`;

export default function Feature() {
  return (
    <div>
      <img
        src={featureTitle}
        css={featureTitleCss}
        alt="the title of feature module"
      ></img>
      <Swiper />
    </div>
  );
}
