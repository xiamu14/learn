/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import {
  bg,
  flexSpaceBetween,
  size,
  HStack,
  flexCenter,
} from "@redchili/retouch";
import headerBg from "../assets/image/header-bg@2x.png";
import btnEnter from "../assets/image/btn-enter@2x.png";
import btnReservation from "../assets/image/btn-reservation@2x.png";
import logoSlogan from "../assets/image/logo-slogan@2x.png";

const headerBoxCss = css`
  width: 10rem;
  height: 1.3rem;
  padding-left: .3rem;
  box-sizing: border-box;
  ${css({
    ...bg({ img: headerBg, color: "white" }),
    ...flexSpaceBetween(),
  })}
`;

const btnCss = css`
  ${css({
    ...size("2.8rem,1.1rem"),
  })}
`;

export default function Header() {
  const handleGo = (type: "website" | "reservation") => {
    switch (type) {
      case "website":
        window.open("http://game.leiting.com/list/xswc/home");
        break;

      default:
        window.open("http://acts.leiting.com/xswc/202011/reserve/");
        break;
    }
  };
  return (
    <div css={headerBoxCss}>
      <img
        src={logoSlogan}
        alt="logo and slogan"
        css={css({ ...size("3.8rem,1.1rem") })}
      />
      <div css={css({ ...HStack() })}>
        <div css={css({ ...flexCenter() })} onClick={() => handleGo("website")}>
          <img
            css={btnCss}
            src={btnEnter}
            alt="visit the official website"
          ></img>
        </div>
        <div
          css={css({ ...flexCenter() })}
          onClick={() => handleGo("reservation")}
        >
          <img
            css={btnCss}
            src={btnReservation}
            alt="reservation the game"
          ></img>
        </div>
      </div>
    </div>
  );
}
