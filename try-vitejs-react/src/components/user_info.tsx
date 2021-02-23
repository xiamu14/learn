/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { flexSpaceBetween, HStack, size } from "@redchili/retouch";
import React, { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import logoGame from "../assets/image/logo-game@2x.png";
import { postOtherGame } from "../api/recharge";
import { refreshPageSelector } from "../recoil/atom";
import { emitter } from "../util/event";
import { getUserInfo, isLogin, logout } from "../util/user";
import Login, { LoginRefType } from "./login";

const userInfoBoxCss = css`
  padding: .2rem .3rem 0;
  ${css({ ...flexSpaceBetween() })}
`;

const userInfoCss = css`
  font-size: .4rem;
  font-weight: 400;
  color: #ffffff;
  ${css({ ...HStack() })}
`;

const logoGameCss = css`
  ${css({ ...size("2.2rem,1.1rem") })}
`;

export default function UserInfo() {
  const [userName, setUserName] = useState<string | null>(null);
  const loginRef = useRef<LoginRefType>(null);
  const refreshPage = useSetRecoilState(refreshPageSelector);

  useEffect(() => {
    if (isLogin()) {
      setUserName(getUserInfo("userName"));
    } else {
      emitter.on("showLoginModal", handleLogin);
    }
  }, []);

  const handleLogin = () => {
    loginRef.current?.show();
  };

  const handleLogout = () => {
    logout();
    setUserName(null);
  };

  const handleLoginSuccess = () => {
    setUserName(getUserInfo("userName"));
    const uid = getUserInfo("uid") as string;
    postOtherGame({ uid, type: 1 });
    refreshPage("");
  };

  return (
    <div css={userInfoBoxCss}>
      <div css={userInfoCss}>
        <p>您好，</p>
        {userName ? (
          <>
            <p>{userName}</p>
            <p
              css={css`
                color: #ff6b23;
              `}
              onClick={handleLogout}
            >
              【注销】
            </p>
          </>
        ) : (
          <p
            css={css`
              color: #ff6b23;
            `}
            onClick={handleLogin}
          >
            请登录
          </p>
        )}
      </div>
      <img src={logoGame} alt="the logo of game" css={logoGameCss}></img>
      <Login ref={loginRef} onSuccess={handleLoginSuccess} />
    </div>
  );
}
