/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "normalize.css";
import 'toasted-notes/src/styles.css';
import "./App.css";
import Background from "./components/background";
import Header from "./components/header";
import UserInfo from "./components/user_info";
import Publicity from "./components/publicity";
import Suit from "./components/suit";
import Challenge from "./components/challenge";
import Feature from "./components/feature";
import InvitedModal from "./components/invited_modal";
import floatingObject from "./assets/image/floating-object@2x.png";
import { size } from "@redchili/retouch";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { configAtom, refreshPageSelector, taskStatusAtom } from "./recoil/atom";
import { getConfig, getTaskStatus } from "./api/recharge";
import { getUserInfo, isLogin } from "./util/user";

// Marked: css
const contentCss = css`
  position: absolute;
  top: 0;
`;

const floatingObjectCss = css`
  position: absolute;
  left: 0;
  top: 6.7rem;
  ${css({ ...size("10rem,49.8rem") })}
`;

// Marked: function component
function App() {
  const setConfigValue = useSetRecoilState(configAtom);
  const setTaskStatusValue = useSetRecoilState(taskStatusAtom);
  const refreshTagValue = useRecoilValue(refreshPageSelector);

  useEffect(() => {
    getConfig().then((res) => {
      if (res) {
        setConfigValue(res.data);
      }
    });
    if (isLogin()) {
      const uid = getUserInfo("uid") as string;
      getTaskStatus(uid).then((res) => {
        if (res) {
          setTaskStatusValue(res.data);
        }
      });
    }
  }, [setConfigValue, setTaskStatusValue, refreshTagValue]);

  return (
    <div className="App" css={{ position: "relative" }}>
      <Background></Background>
      <div css={contentCss}>
        <Header></Header>
        <UserInfo></UserInfo>
        <Publicity />
        <Suit />
        <Challenge />
        <Feature />
      </div>
      <InvitedModal />
      <img
        src={floatingObject}
        css={floatingObjectCss}
        alt=""
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}

export default App;
