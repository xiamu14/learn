/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Modal, { RefType } from "@redchili/react-modal";
import { useEffect, useRef, useState } from "react";
import { postInvitationEnergy } from "../api/recharge";
import { closeModalCss, normalModalCss } from "../style/modal";
import { getUserInfo, isLogin } from "../util/user";
import acceptInvite from "../assets/image/accept-invite@2x.png";
import { flexCenter, flexColumnCenter, size } from "@redchili/retouch";
import { emitter } from "../util/event";
import { useSetRecoilState } from "recoil";
import { refreshPageSelector } from "../recoil/atom";

const text = css`
  font-size: .32rem;
  color: #ececec;
  line-height: 1.6;
  text-align: center;
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

const searchParams = new URLSearchParams(window.location.search);
// const inviter = getInviter();
export default function InvitedModal() {
  const modalRef = useRef<RefType>(null);
  const [accepted, setAccepted] = useState(false);
  const [canAccept, setCanAccept] = useState(true);
  const [selfInviter, setSelfInviter] = useState(false);
  const refreshPage = useSetRecoilState(refreshPageSelector);
  useEffect(() => {
    if (searchParams.has("id")) {
      setTimeout(() => {
        modalRef.current?.show();
      }, 1000);
    }
  }, []);

  const getContentHtml = () => {
    if (canAccept && !accepted) {
      return (
        <div css={css({ ...flexColumnCenter() })}>
          <p css={text} style={{ margin: ".6rem 0 .8rem" }}>
            您的好友正在参与“像素危城雷霆联动活动”
            <br />
            需要您的大力支持，请帮他助力吧!
          </p>
          <div css={button} onClick={handleAcceptInvitation}>
            接受邀请
          </div>
        </div>
      );
    }
    if (canAccept && accepted) {
      return (
        <div css={css({ ...flexColumnCenter() })}>
          <p css={text} style={{ margin: ".6rem 0 .8rem" }}>
            感谢您，成功为好友增加3点充能
          </p>
          <div css={button} onClick={() => modalRef.current?.hide()}>
            确认
          </div>
        </div>
      );
    }
    if (!canAccept && selfInviter) {
      return (
        <div css={css({ ...flexColumnCenter() })}>
          <p css={text} style={{ margin: ".6rem 0 .8rem" }}>
            很抱歉，您无法邀请自己
          </p>
          <div css={button} onClick={() => modalRef.current?.hide()}>
            确认
          </div>
        </div>
      );
    }
    if (!canAccept && !selfInviter) {
      return (
        <div css={css({ ...flexColumnCenter() })}>
          <p css={text} style={{ margin: ".6rem 0 .8rem" }}>
            很抱歉，您已经接受过该玩家的邀请啦
            <br />
            无法重复邀请哦
          </p>
          <div css={button} onClick={() => modalRef.current?.hide()}>
            确认
          </div>
        </div>
      );
    }
  };

  const handleAcceptInvitation = () => {
    if (isLogin()) {
      // TODO: 判读 uid === inviter
      const uid = getUserInfo("uid") as string;
      const inviter = searchParams.get("id") as string;
      if (uid !== inviter) {
        postInvitationEnergy({ uid, inviteUid: inviter as string }).then(
          (res) => {
            // modalRef.current?.hide();
            // console.log(res);
            if (res.code === 5001) {
              setCanAccept(false);
            } else if (res.code === 0) {
              setAccepted(true);
              // TODO: 调用充能总值接口
              refreshPage("");
            }
          }
        );
      } else {
        // TODO: 显示不能自己邀请自己
        setSelfInviter(true);
        setCanAccept(false);
      }
    } else {
      // TODO: 触发登录事件
      emitter.emit("showLoginModal");
    }
  };
  return (
    <Modal header={false} ref={modalRef}>
      <div css={normalModalCss}>
        <img className="title" alt="" src={acceptInvite}></img>
        {getContentHtml()}
        <div css={closeModalCss} onClick={() => modalRef.current?.hide()}></div>
      </div>
    </Modal>
  );
}
