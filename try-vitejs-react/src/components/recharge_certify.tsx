/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import {
  flexCenter,
  flexColumnCenter,
  flexSpaceBetween,
  size,
} from "@redchili/retouch";
import { gameDownloadUrl, LinkGames } from "../schema/enum";
import { emitter } from "../util/event";
import { logout } from "../util/user";

const text = css`
  font-size: .32rem;
  color: #ececec;
  line-height: 1.6;
  text-align: center;
  margin: .6rem 0 .6rem;
`;

const button = css`
  border: 2px solid #f4c32e;
  background-color: #ac850b;
  box-sizing: border-box;
  color: white;
  font-size: .3rem;
  font-weight: 800;
  ${css({
    ...size("3.3rem,1rem"),
    ...flexCenter(),
  })}
`;

interface Props {
  type: "success" | "failure";
  game?: LinkGames;
  onClose: () => void;
}

export default function RechargeCertify(props: Props) {
  const handleDownload = () => {
    if (props.game) {
      window.open(gameDownloadUrl[props.game]);
    }
  };

  const handleReload = () => {
    logout();
    // window.location.reload();
    emitter.emit("showLoginModal");
  };

  const handleClose = () => {
    props.onClose();
  }

  return (
    <div
      css={css({
        ...flexColumnCenter(),
      })}
    >
      {props.type === "success" ? (
        <p css={text}>
          恭喜您认证该游戏的联动玩家身份。
          <br />
          充能+1。
        </p>
      ) : (
        <p css={text}>
          您尚未登录过该游戏，无法认证联动身份哦!
          <br />
          *游戏角色创建读取需一定时间，可尝试注销登录后稍等片刻
        </p>
      )}
      <div css={css({ ...flexSpaceBetween() })}>
        {props.type === "success" ? (
          <div css={button} onClick={handleClose}>更多充能</div>
        ) : (
          <>
            <div
              css={button}
              style={{ marginRight: "3rem" }}
              onClick={handleDownload}
            >
              下载游戏
            </div>
            <div css={button} onClick={handleReload}>
              重新登陆
            </div>
          </>
        )}
      </div>
    </div>
  );
}
