/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { flexSpaceBetween, size } from "@redchili/retouch";
import { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import btnLeft from "../assets/image/btn-left@2x.png";
import btnRight from "../assets/image/btn-right@2x.png";
import feature1 from "../assets/image/feature1@2x.png";
import feature2 from "../assets/image/feature2@2x.png";
import feature3 from "../assets/image/feature3@2x.png";
import feature4 from "../assets/image/feature4@2x.png";
import feature5 from "../assets/image/feature5@2x.png";

const swiperBoxCss = css`
  position: relative;
  margin: 0 auto;
  ${css({ ...size("9.2rem,3.9rem") })}
`;

const btnCss = css`
  position: absolute;
  top: 50%;
  margin-top: -.3rem;
  ${css({ ...size(".5rem,.6rem") })};
  z-index: 3;
`;

const btnLeftCss = css`
  ${btnCss};
  left: .1rem;
`;

const btnRightCss = css`
  ${btnCss};
  right: .1rem;
`;

const swiperCss = css`
  position: relative;
`;

const swiperItemCss = css`
  position: absolute;
  transform-origin: left center;
  background-size: cover;
  ${css({ ...size("7rem,3.9rem") })}
`;

const dotGroupBoxCss = css`
  position: absolute;
  z-index: 3;
  bottom: -.2rem;
  left: 50%;
  margin-left: -.9rem;
  width: 1.8rem;
  ${css({ ...flexSpaceBetween() })}
`;

const images = [feature1, feature2, feature3, feature4, feature5];

export default function SwiperFeature() {
  const [current, setCur] = useState(1);
  const [props, set] = useSprings(3, (i) => ({
    sc: i === 1 ? 1 : 0.7,
    x: i === 0 ? 0 : i === 1 ? 1.1 : 4.3,
    brightness: i === 1 ? 100 : 50,
  }));
  const onSlide = (direct: "left" | "right") => {
    const next = direct === "right" ? current + 1 : current - 1;
    setCur(next);
    const active = Math.abs(next) % 3;
    const left = active > 0 ? active - 1 : 2; // 2 是图片尾序号

    // @ts-ignore
    set((i) => {
      return {
        sc: i === active ? 1 : 0.7,
        x: i === left ? 0 : i === active ? 1.1 : 4.3,
        zIndex: i === active ? 2 : 1,
        brightness: i === active ? 100 : 50,
      };
    });
  };
  const getImage = (i: number) => {
    const cur = Math.abs(current) % images.length;
    let index = 0;
    if (cur === 0) {
      index = i === 1 ? cur : i === 0 ? images.length - 1 : cur + 1;
    } else if (cur === images.length - 1) {
    } else {
      index = i === 1 ? cur : i === 0 ? cur - 1 : cur + 1;
    }
    // console.log("index", index);
    // console.log("cur", cur);
    // console.log("i", i);
    // console.log("........");
    return images[index];
  };
  return (
    <div css={swiperBoxCss}>
      <div css={swiperCss}>
        {props.map(({ sc, x, brightness }, i) => (
          <animated.div
            key={i}
            style={{
              zIndex: i === Math.abs(current) % 3 ? 2 : 1,
              transform: interpolate(
                [sc, x],
                (s, x) => `translate3d(${x}rem,0,0) scale(${s})`
              ),
              filter: brightness.interpolate((n) => `brightness(${n}%)`),
              backgroundImage: `url(${getImage(i)})`,
            }}
            css={swiperItemCss}
          ></animated.div>
        ))}
      </div>
      <img
        src={btnLeft}
        alt="button"
        css={btnLeftCss}
        className="swiper-button-next"
        onClick={() => onSlide("left")}
      />
      <img
        src={btnRight}
        alt="button"
        css={btnRightCss}
        className=".swiper-button-prev"
        onClick={() => onSlide("right")}
      />
      <div css={dotGroupBoxCss}>
        {images.map((_, index) => {
          return (
            <Dot
              key={index.toString()}
              color={
                Math.abs(current) % images.length === index
                  ? "white"
                  : "#aa8d6a"
              }
            />
          );
        })}
      </div>
    </div>
  );
}

const dotBox = (props: { color: string }) => css`
  width: .3rem;
  height: .3rem;
  position: relative;
  > span {
    display: block;
    width: .2rem;
    height: .2rem;
    position: absolute;
    background-color: ${props.color};
  }
`;

interface Props {
  color: string;
}

function Dot(props: Props) {
  return (
    <div css={dotBox({ color: props.color })}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
