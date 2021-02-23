/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Modal, { RefType } from "@redchili/react-modal";
import pcBg from "./assets/image/pc-bg.jpg";
import QRCode from "./assets/image/qrcode.png";
import pcBtnWebsite from "./assets/image/pc-btn-website@2x.png";
import pcBtnReservation from "./assets/image/pc-btn-reservation@2x.png";
import pcBtnWelfare from "./assets/image/pc-btn-welfare@2x.png";
import { bg, flexCenter, size } from "@redchili/retouch";
import { useRef } from "react";

const pcBoxCss = css`
  position: relative;
  ${css({
    ...bg({ color: "rgba(0,0,0,0)", img: pcBg, size: "cover" }),
    ...size("100vw,100vh"),
  })}
`;

const btnWebsiteCss = css`
  position: absolute;
  right: 282px;
  top: 40px;
  transform: scale(1.3);
  cursor: pointer;
  ${css({
    ...bg({ color: "rgba(0,0,0,0)", img: pcBtnWebsite, size: "cover" }),
    ...size("85px, 34px"),
  })};
`;

const btnGroupCss = css`
  position: absolute;
  bottom: 50px;
  ${css({
    ...flexCenter(),
    ...size("100vw,54px"),
  })}
`;

const btnCss = css`
  ${css({
    ...size("140px,54px"),
  })}
`;

const btn1Css = css`
  margin-right: 21px;
  cursor: pointer;
  ${btnCss}
  ${css({
    ...bg({ color: "rgba(0,0,0,0)", img: pcBtnReservation, size: "cover" }),
  })}
`;

const btn2Css = css`
  cursor: pointer;
  ${btnCss}
  ${css({
    ...bg({ color: "rgba(0,0,0,0)", img: pcBtnWelfare, size: "cover" }),
  })}
`;

const qrcodeBoxCss = css`
  background: white;
  padding: 20px;
`;

export default function PC() {
  const modalRef = useRef<RefType>(null);
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
    <div css={pcBoxCss}>
      <div css={btnWebsiteCss} onClick={() => handleGo("website")}></div>
      <div css={btnGroupCss}>
        <div css={btn1Css} onClick={() => handleGo("reservation")}></div>
        <div css={btn2Css} onClick={() => modalRef.current?.show()}></div>
      </div>
      <Modal header={false} ref={modalRef}>
        <div css={qrcodeBoxCss} onClick={() => modalRef.current?.hide()}>
          <img
            alt="qrcode"
            src={QRCode}
            css={css({ ...size("260px,260px") })}
          />
          <p
            style={{
              marginTop: "10px",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            使用手机扫一扫参与活动
          </p>
        </div>
      </Modal>
    </div>
  );
}
