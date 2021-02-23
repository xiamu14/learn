/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { size } from "@redchili/retouch";
import LightSwiper from "light-swiper";
import { useEffect, useRef } from "react";

const lightSwiper = css`
  overflow: hidden;
  position: relative;
`;

const swiperWrap = css`
  overflow: hidden;
  position: relative;
`;

const swipeItem = css`
  float: left;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  ${css({
    ...size("9.4rem,5.5rem"),
  })}
`;

const swiperItemContent = css`
  transform: scale(0.9);
  ${css({
    ...size("100%,100%"),
  })}
`;

interface Props {
  images: string[];
}

export default function LightSwiperElement(props: Props) {
  const { images } = props;
  const swiperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (swiperRef.current) {
      new LightSwiper(swiperRef.current, { auto: 3000, continuous: true });
    }
  }, [images]);
  return (
    <div css={lightSwiper} ref={swiperRef}>
      <div css={swiperWrap}>
        {images.map((image, index) => {
          return (
            <div css={swipeItem} key={index.toString()}>
              <img alt="" src={image} css={swiperItemContent}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
