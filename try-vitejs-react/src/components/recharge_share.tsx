/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { flexCenter, flexColumnCenter, size } from "@redchili/retouch";
import { useEffect, useMemo, useRef, useState } from "react";
import toast from "toasted-notes";
import Modal, { RefType } from "@redchili/react-modal";
import QRCode from "qrcode";
import poster from "../assets/image/poster.png";
import { copy } from "../util/copy";
import { getUserInfo } from "../util/user";

const button = css`
  border: 2px solid #f4c32e;
  background-color: #ac850b;
  box-sizing: border-box;
  color: white;
  font-size: 0.3rem;
  font-weight: 800;
  margin-top: 0.2rem;
  ${css({
    ...size("3.3rem,.9rem"),
    ...flexCenter(),
  })}
`;

const text = css`
  font-size: 0.22rem;
  color: #ececec;
  line-height: 1.6;
  text-align: center;
`;
const linkCss = css`
  width: 5.7rem;
  height: 0.8rem;
  padding: 0 0.1rem;
  margin-right: 1px;
  background-color: #141820;
  border: 2px solid #262a30;
  text-align: center;
  box-sizing: border-box;
  line-height: 0.7rem;
  font-size: 0.3rem;
  color: white;
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不
`;

const btnCopyCss = css`
  width: 1.8rem;
  height: 0.7rem;
  background-color: #60521b;
  color: #fee600;
  line-height: 0.7rem;
  font-size: 0.3rem;
  text-align: center;
`;

const posterBoxCss = css`
  background-color: white;
  padding: 0.4rem;
  /* transform: translateY(-20rem); */
`;

const posterCss = css`
  margin-bottom: 0.4rem;
  ${css({ ...size("7rem,12.4rem") })}
`;

interface Props {
  num: number;
}
export default function RechargeShare(props: Props) {
  const posterRef = useRef<RefType>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [combinePoster, setCombinePoster] = useState(false);
  const shareUrl = useMemo(() => {
    const uid = getUserInfo("uid") as string;
    return `http://cp.leiting.com/xswc/202101/act/?id=${uid}`;
  }, []);

  useEffect(() => {
    if (shareUrl && combinePoster) {
      const ctx = canvasRef.current?.getContext("2d");
      const posterBgElement = document.getElementById(
        "posterBg"
      ) as HTMLImageElement;
      posterBgElement.onload = () => {
        ctx?.drawImage(posterBgElement, 0, 0, 750, 1334);
        QRCode.toDataURL(shareUrl, { width: 178 }).then((url) => {
          // console.log(url);
          const qrcodeElement = document.getElementById(
            "qrcode"
          ) as HTMLImageElement;

          qrcodeElement.onload = () => {
            ctx?.drawImage(qrcodeElement, 502, 1136, 178, 178);
            const posterElement = document.getElementById(
              "poster"
            ) as HTMLImageElement;
            posterElement.setAttribute(
              "src",
              canvasRef.current?.toDataURL() ?? ""
            );
          };
          qrcodeElement.src = url;
        });
      };
      posterBgElement.src = poster;
    }
  }, [shareUrl, combinePoster]);

  const handleCopy = () => {
    // alert(document.cookie);
    copy(shareUrl);
    toast.notify("复制成功", { position: "top" });
  };

  const handleShare = () => {
    posterRef.current?.show();
    setCombinePoster(true);
  };

  return (
    <div css={css({ ...flexColumnCenter() })}>
      <p css={text} style={{ margin: ".2rem 0 .2rem" }}>
        您可将分享链接或者海报分享给好友，当好友通过您的地址进入页面并成功完成登录，您可获得3点充能。
        (当前已分享{props.num}
        人)
      </p>
      <div css={css({ ...flexCenter() })}>
        <div css={linkCss}>{shareUrl}</div>
        <div css={btnCopyCss} onClick={handleCopy}>
          复制链接
        </div>
      </div>
      <div css={button} onClick={handleShare}>
        分享海报
      </div>
      <div style={{ opacity: 0 }}>
        <canvas ref={canvasRef} id="canvas" width="750px" height="1334px" />
        <img crossOrigin="anonymous" id="posterBg" alt="" />
        <img crossOrigin="anonymous" alt="" id="qrcode" />
      </div>
      <Modal header={false} ref={posterRef}>
        <div css={posterBoxCss} onClick={() => posterRef.current?.hide()}>
          <img alt="" id="poster" css={posterCss} />
          <p>长按图片下载分享</p>
        </div>
      </Modal>
    </div>
  );
}
