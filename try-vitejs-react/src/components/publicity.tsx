/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { flexSpaceBetween, size } from "@redchili/retouch";
import publicityUp from "../assets/image/publicity-up@2x.png";
import btnChallenge from "../assets/image/btn-challenge@2x.png";
import btnFreeCollection from "../assets/image/btn-free-collection@2x.png";
import scrollToAnchor from "../util/scroll_to_anchor";

const publicityUpCss = css`
  display: block;
  margin: 4.1rem auto .2rem;
  ${css({ ...size("8.5rem,7.6rem") })}
`;

const btnBoxCss = css`
  padding: 0rem .7rem;
  ${css({ ...flexSpaceBetween() })}
`;

const btnCss = css`
  object-fit: fill;
  ${css({ ...size("4.1rem,1.6rem") })}
`;

export default function Publicity() {
  const handleGo = (type: "challenge" | "suit") => {
    switch (type) {
      case "challenge":
        scrollToAnchor("challenge");
        break;

      default:
        scrollToAnchor("suit");
        break;
    }
  };
  return (
    <div>
      <img src={publicityUp} alt="" css={publicityUpCss}></img>
      <div css={btnBoxCss}>
        <img
          css={btnCss}
          src={btnChallenge}
          alt="the button of challenge"
          onClick={() => handleGo("challenge")}
        />
        <img
          css={btnCss}
          src={btnFreeCollection}
          alt="the button of free collection"
          onClick={() => handleGo("suit")}
        />
      </div>
    </div>
  );
}
