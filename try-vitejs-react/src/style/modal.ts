import { css } from "@emotion/react";
import { bg, size } from "@redchili/retouch";
import normalModalBg from "../assets/image/normal-modal-bg@2x.png";

export const closeModalCss = css`
  position: absolute;
  right: 0;
  top: 0.4rem;
  width: 1rem;
  height: 1rem;
  /* background-color: rgba(230,220,220,0.5); */
`;

export const normalModalCss = css`
  position: relative;
  padding: 1rem 1.2rem 0.6rem 0.6rem;
  box-sizing: border-box;
  ${css({
    ...bg({ color: "rgba(0,0,0,0)", img: normalModalBg, size: "cover" }),
    ...size("9rem, 5.4rem"),
  })}
  > img.title {
    width: 1.8rem;
    height: .4rem;
    background-size: cover;
    position: absolute;
    top: 0.35rem;
    left: 50%;
    margin-left: -1.1rem;
  }
`;
