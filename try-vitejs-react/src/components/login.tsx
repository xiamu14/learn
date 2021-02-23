/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { bg } from "@redchili/retouch";
import { forwardRef, useImperativeHandle, useState } from "react";
import loginBg from "../assets/image/login_bg@2x.jpg";
import { isLogin } from "../util/user";

const loginBoxCss = css`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  /* border: 1px solid red; */
  ${css({
    ...bg({
      color: "#212f37",
      img: loginBg,
      size: "cover",
      repeat: "no-repeat",
    }),
  })}
`;

interface Props {
  onSuccess?: () => void;
}

export interface LoginRefType {
  show: () => void;
}

const htmlEle = document.getElementsByTagName("html")[0];

const Login = forwardRef<LoginRefType, Props>((props, ref) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => {
      if (!isLogin()) {
        htmlEle.style.fontSize = "50px";
        htmlEle.style.overflow = "hidden";
        setShow(true);
        // @ts-ignore
        new LeiTing_Common_Login({
          game_Type: "xswc",
          show_choose: false,
          callback: () => {
            console.log(document.cookie);
            // TODO:处理登录后的行为
            if (props.onSuccess) {
              props.onSuccess();
            }
            // TODO:缓存用户名
            hide();
          },
        });
        setTimeout(() => {
          document
            .getElementsByClassName("LeiTing_Common_close")[0]
            .addEventListener("click", () => {
              hide();
            });
        }, 0);
      }
    },
  }));

  const hide = () => {
    setShow(false);
    htmlEle.style.fontSize = "10vw";
    htmlEle.style.overflow = "auto";

  };

  return <>{show ? <div css={loginBoxCss}></div> : null}</>;
});

export default Login;
