/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  bg,
  flexCenter,
  flexColumnCenter,
  flexSpaceBetween,
  font,
  HStack,
  size,
} from "@redchili/retouch";
import React, { useMemo, useRef, useState } from "react";
import Modal, { RefType } from "@redchili/react-modal";
import suitTitle from "../assets/image/suit-title@2x.png";
import suitBoxBg from "../assets/image/suit-box-bg@2x.png";
import suitSmallBoxBg from "../assets/image/suit-small-box-bg@2x.png";
import btnTask1 from "../assets/image/btn-task1@2x.png";
import btnTask2 from "../assets/image/btn-task2@2x.png";
import energyValue from "../assets/image/energy-value@2x.png";
import silverGrade from "../assets/image/silver-grade@2x.png";
import silverValue from "../assets/image/silver-value@2x.png";
import goldGrade from "../assets/image/gold-grade@2x.png";
import goldValue from "../assets/image/gold-value@2x.png";
import modalRule from "../assets/image/modal-rule@2x.png";
import rechargeBg from "../assets/image/recharge-bg@2x.png";
import guessTitle from "../assets/image/guess-title@2x.png";
import shareTitle from "../assets/image/share-title@2x.png";
import certifySuccess from "../assets/image/certify-success@2x.png";
import certifyFailure from "../assets/image/certify-failure@2x.png";
import invalidGame1 from "../assets/image/invalid-game1@2x.png";
import invalidGame2 from "../assets/image/invalid-game2@2x.png";
import invalidGame3 from "../assets/image/invalid-game3@2x.png";
import game1 from "../assets/image/game1@2x.png";
import game2 from "../assets/image/game2@2x.png";
import game3 from "../assets/image/game3@2x.png";
import gameTitle1 from "../assets/image/game_title1.png";
import gameTitle2 from "../assets/image/game_title2.png";
import gameTitle3 from "../assets/image/game_title3.png";
import fullSuit from "../assets/image/full-suit@2x.png";
import shoes from "../assets/image/shoes@2x.png";
import armor from "../assets/image/armor@2x.png";
import hat from "../assets/image/hat@2x.png";
import coat from "../assets/image/coat@2x.png";
import pants from "../assets/image/pants@2x.png";

import { closeModalCss, normalModalCss } from "../style/modal";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  configAtom,
  refreshPageSelector,
  taskStatusAtom,
} from "../recoil/atom";
import RechargeGuess from "./recharge_guess";
import RechargeCertify from "./recharge_certify";
import RechargeShare from "./recharge_share";
import { getUserInfo, isLogin } from "../util/user";
import { emitter } from "../util/event";
import { postActiveGame } from "../api/recharge";
import { canActiveGame, LinkGames } from "../schema/enum";

const suitBoxCss = css`
  margin-top: 1.2rem;
`;

const suitTitleCss = css`
  margin: 0 auto 0.4rem;
  display: block;
  ${css({ ...size("7.5rem, 1.8rem") })}
`;

const contentCss = css`
  font-size: 0.3rem;
  color: #ffe9de;
  line-height: 1.6;
  margin: 0 0.5rem 0.1rem;
  .purple {
    color: #e79cff;
  }
  .yellow {
    color: #ffd738;
  }
`;

const suitShowBoxCss = css`
  padding: 0 0.3rem;
  margin-bottom: 0.6rem;
  ${css({ ...flexSpaceBetween() })}
`;

const suitShowPeopleCss = css`
  ${css({
    ...bg({ color: "rgba(0,0,0,0)", img: suitBoxBg, size: "cover" }),
    ...size("4.4rem, 7.5rem"),
    ...flexCenter(),
  })}
`;

const suitShowPartCss = css`
  > div {
    margin-bottom: 0.4rem;
  }
  > div:last-child {
    margin-bottom: 0;
  }
`;

const btnTaskBoxCss = css`
  margin: 0.4rem 0.9rem 0.8rem;
  ${css({ ...flexSpaceBetween() })}
`;

const btnTaskCss = css`
  ${css({ ...size("3.7rem,1.4rem") })}
`;

const linkGameBoxCss = css`
  ${css({ ...flexSpaceBetween() })}
  img.game {
    ${css({ ...size("1.7rem,1.7rem") })}
  }
  img.game-title {
    width: 1.4rem;
    height: auto;
    object-fit: contain;
    position: absolute;
    bottom: 0.1rem;
    left: 0.15rem;
  }
`;

const otherTaskBoxCss = css`
  width: 7rem;
  height: 1.5rem;
  border: 2px solid #353940;
  background-color: #13161c;
  margin-bottom: 0.2rem;
  padding: 0.2rem;
  box-sizing: border-box;
  &:last-child {
    margin-bottom: 0;
  }
  ${css({
    ...flexSpaceBetween(),
  })}
`;

const otherTaskTitleCss = css`
  font-size: 0.35rem;
  font-weight: 800;
  margin-bottom: 0.1rem;
  color: #ececec;
`;

const otherTaskTextCss = css`
  font-size: 0.2rem;
  color: #cdcdcd;
`;

const otherTaskBtnCss = css`
  border: 2px solid #f4c32e;
  background-color: #ac850b;
  box-sizing: border-box;
  color: white;
  font-size: 0.3rem;
  font-weight: 800;
  ${css({
    ...size("2.4rem,.7rem"),
    ...flexCenter(),
  })}
`;

const otherTaskBtnDisableCss = css`
  ${otherTaskBtnCss}
  border: 2px solid #9b9b9b;
  background-color: #646464;
`;

const taskTitleCss = css`
  font-size: 0.45rem;
  font-weight: 800;
  color: #ececec;
  margin-bottom: 0.3rem;
`;

const rechargeModalCss = css`
  position: relative;
  padding: 1.3rem 1.2rem 0.3rem 0.6rem;
  box-sizing: border-box;
  ${css({
    ...bg({ color: "rgba(0,0,0,0)", img: rechargeBg, size: "cover" }),
    ...size("9.0rem, 10.6rem"),
  })}
`;

const currentRechargeCss = css`
  position: absolute;
  top: 1.1rem;
  right: 1.2rem;
  font-size: 0.32rem;
  font-weight: bold;
  color: #f9e201;
`;

function judgeLightGame(game: LinkGames, lightGames: string[]) {
  return lightGames.indexOf(game) > -1;
}

function judgeGuessGame(game: string, games: string[]) {
  return games.indexOf(game) > -1;
}

export default function Suit() {
  const [certifyResult, setCertifyResult] = useState<{
    isActive: boolean;
    game?: LinkGames;
  }>({ isActive: true });
  const [guessGame, setGuessGame] = useState(1);
  const ruleModalRef = useRef<RefType>(null);
  const rechargeModalRef = useRef<RefType>(null);
  const guessModalRef = useRef<RefType>(null);
  const certifyModalRef = useRef<RefType>(null);
  const shareModalRef = useRef<RefType>(null);
  const configValue = useRecoilValue(configAtom);
  const taskStatusValue = useRecoilValue(taskStatusAtom);
  const refreshPage = useSetRecoilState(refreshPageSelector);
  const currentRecharge = useMemo(() => {
    return (
      taskStatusValue.guessGame.length +
      taskStatusValue.lightGame.length +
      taskStatusValue.inviteNum * 3 +
      1
    );
  }, [taskStatusValue]);
  const handleShowRechargeModal = () => {
    if (isLogin()) {
      rechargeModalRef.current?.show();
    } else {
      emitter.emit("showLoginModal");
    }
  };

  const handleCertifyGame = (game: LinkGames) => {
    if (!judgeLightGame(game, taskStatusValue.lightGame)) {
      if (isLogin()) {
        const activeGames = getUserInfo("activeGames") as string;
        // console.log('可以点亮的游戏',activeGames);
        if (canActiveGame(game, activeGames)) {
          const uid = getUserInfo("uid") as string;
          postActiveGame({ uid, game }).then((res) => {
            if (res) {
              // console.log(res.data);
              setCertifyResult({ isActive: true });
              // certifyModalRef.current?.show();
              refreshPage("");
            }
          });
        } else {
          // TODO: 显示未登录过游戏的弹框
          setCertifyResult({ isActive: false, game });
        }
        certifyModalRef.current?.show();
      } else {
        emitter.emit("showLoginModal");
      }
    }
  };

  const handleGuessGame = (game: number) => {
    if (!judgeGuessGame(game.toString(), taskStatusValue.guessGame)) {
      setGuessGame(game);
      guessModalRef.current?.show();
    }
  };

  const handleShare = () => {
    if (isLogin()) {
      shareModalRef.current?.show();
    } else {
      emitter.emit("showLoginModal");
    }
  };

  return (
    <div css={suitBoxCss} id="suit">
      <img
        src={suitTitle}
        css={suitTitleCss}
        alt="the title of suit module"
      ></img>
      <p css={contentCss}>
        登录点亮雷霆联盟套装，可为雷霆联盟应援充能。 当全服总充能达
        <span className="purple">25000</span>时，
        <span className="purple">参与充能的玩家</span>
        可获得整套联盟套装。当充能达到<span className="yellow">50000</span>时，
        <span className="yellow">官服全玩家</span>可获得整套联盟套装。
      </p>
      <div css={suitShowBoxCss}>
        <div css={suitShowPartCss}>
          <SuitPartMemo
            title="调查员的护心"
            part={
              <img src={armor} alt="" css={css({ ...size(".8rem,1.1rem") })} />
            }
          />
          <SuitPartMemo
            title="与山的猪猪鞋"
            part={
              <img src={shoes} alt="" css={css({ ...size("1rem,.9rem") })} />
            }
          />
        </div>
        <div css={suitShowPeopleCss}>
          <img
            src={fullSuit}
            alt=""
            css={css({
              ...size("2.4rem,6.3rem"),
            })}
          />
        </div>
        <div css={suitShowPartCss}>
          <SuitPartMemo
            title="逆风笑的羊面具"
            part={<img src={hat} alt="" css={css({ ...size("1rem,1rem") })} />}
          />
          <SuitPartMemo
            title="猎人的外套"
            part={
              <img src={coat} alt="" css={css({ ...size("1.1rem,1.2rem") })} />
            }
          />
          <SuitPartMemo
            title="封魔人的外裤"
            part={
              <img src={pants} alt="" css={css({ ...size(".8rem,1.3rem") })} />
            }
          />
        </div>
      </div>
      {/* progress bar */}
      <ProgressPart
        // progress={0.5}
        value={configValue ? configValue.energy : 0}
      />
      {/* btn group */}
      <div css={btnTaskBoxCss}>
        <div css={css({ ...flexColumnCenter() })}>
          <img
            src={btnTask1}
            alt="button of the task 1"
            css={btnTaskCss}
            onClick={handleShowRechargeModal}
          />
          <p
            css={css`
              text-decoration: underline;
              ${css({ ...font({ size: ".3rem", color: "white" }) })}
            `}
            onClick={() => ruleModalRef.current?.show()}
          >
            活动规则
          </p>
        </div>
        <div css={css({ ...flexColumnCenter() })}>
          <img
            src={btnTask2}
            alt="button of the task 2"
            css={btnTaskCss}
            onClick={handleShare}
          />
          <p css={css({ ...font({ size: ".3rem", color: "white" }) })}>
            累计分享 {taskStatusValue ? taskStatusValue?.inviteNum : "0"} 次
          </p>
        </div>
      </div>
      {/* 活动规则 */}
      <Modal header={false} ref={ruleModalRef}>
        <img
          src={modalRule}
          alt=""
          css={css({ ...size("9rem,8rem") })}
          onClick={() => ruleModalRef.current?.hide()}
        />
      </Modal>
      {/* 充能任务弹框 */}
      <Modal header={false} ref={rechargeModalRef}>
        <div css={rechargeModalCss}>
          <p css={currentRechargeCss}>当前充能：{currentRecharge}</p>
          <div>
            <div
              css={css`
                margin-bottom: 0.5rem;
              `}
            >
              <p css={taskTitleCss}>联动游戏任务</p>
              <div css={linkGameBoxCss}>
                <div
                  css={css`
                    position: relative;
                  `}
                >
                  <img
                    src={
                      judgeLightGame(LinkGames.SLCB, taskStatusValue.lightGame)
                        ? game1
                        : invalidGame1
                    }
                    alt=""
                    className="game"
                    onClick={() => handleCertifyGame(LinkGames.SLCB)}
                  ></img>
                  <img src={gameTitle1} alt="" className="game-title" />
                </div>
                <div
                  css={css`
                    position: relative;
                  `}
                >
                  <img
                    src={
                      judgeLightGame(LinkGames.YHZD, taskStatusValue.lightGame)
                        ? game2
                        : invalidGame2
                    }
                    alt=""
                    className="game"
                    onClick={() => handleCertifyGame(LinkGames.YHZD)}
                  ></img>
                  <img src={gameTitle2} alt="" className="game-title" />
                </div>
                <div
                  css={css`
                    position: relative;
                  `}
                >
                  <img
                    src={
                      judgeLightGame(LinkGames.MYZR, taskStatusValue.lightGame)
                        ? game3
                        : invalidGame3
                    }
                    alt=""
                    className="game"
                    onClick={() => handleCertifyGame(LinkGames.MYZR)}
                  ></img>
                  <img src={gameTitle3} alt="" className="game-title" />
                </div>
              </div>
            </div>
            <div>
              <p css={taskTitleCss}>其他任务</p>
              <div>
                <div css={otherTaskBoxCss}>
                  <div>
                    <p css={otherTaskTitleCss}>完成逆风笑竞猜</p>
                    <p css={otherTaskTextCss}>可获得充能1点</p>
                  </div>
                  <div
                    css={
                      judgeGuessGame("1", taskStatusValue.guessGame)
                        ? otherTaskBtnDisableCss
                        : otherTaskBtnCss
                    }
                    onClick={() => {
                      handleGuessGame(1);
                    }}
                  >
                    {judgeGuessGame("1", taskStatusValue.guessGame)
                      ? "已完成"
                      : "去完成"}
                  </div>
                </div>
                <div css={otherTaskBoxCss}>
                  <div>
                    <p css={otherTaskTitleCss}>完成与山0V0竞猜</p>
                    <p css={otherTaskTextCss}>可获得充能1点</p>
                  </div>
                  <div
                    css={
                      judgeGuessGame("2", taskStatusValue.guessGame)
                        ? otherTaskBtnDisableCss
                        : otherTaskBtnCss
                    }
                    onClick={() => {
                      handleGuessGame(2);
                    }}
                  >
                    {judgeGuessGame("2", taskStatusValue.guessGame)
                      ? "已完成"
                      : "去完成"}
                  </div>
                </div>
                <div css={otherTaskBoxCss}>
                  <div>
                    <p css={otherTaskTitleCss}>完成一次好友分享</p>
                    <p css={otherTaskTextCss}>
                      可获得充能3点，已分享{taskStatusValue.inviteNum}人
                    </p>
                  </div>
                  <div
                    css={otherTaskBtnCss}
                    onClick={() => {
                      shareModalRef.current?.show();
                      setGuessGame(2);
                    }}
                  >
                    去完成
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            css={closeModalCss}
            onClick={() => rechargeModalRef.current?.hide()}
          ></div>
        </div>
      </Modal>
      {/* 竞猜活动弹框 */}
      <Modal header={false} ref={guessModalRef}>
        <div css={normalModalCss}>
          <img className="title" alt="" src={guessTitle}></img>
          <RechargeGuess
            gameId={guessGame}
            onClose={() => guessModalRef.current?.hide()}
          />
          <div
            css={closeModalCss}
            onClick={() => guessModalRef.current?.hide()}
          ></div>
        </div>
      </Modal>
      {/* 联动认证结果弹框 */}
      <Modal header={false} ref={certifyModalRef}>
        <div css={normalModalCss}>
          <img
            className="title"
            alt=""
            src={certifyResult.isActive ? certifySuccess : certifyFailure}
            style={{ width: "27rem", marginLeft: "-15rem" }}
          ></img>
          <RechargeCertify
            type={certifyResult.isActive ? "success" : "failure"}
            game={certifyResult.game}
            onClose={() => certifyModalRef.current?.hide()}
          />
          <div
            css={closeModalCss}
            onClick={() => certifyModalRef.current?.hide()}
          ></div>
        </div>
      </Modal>
      {/* 分享充能 */}
      <Modal header={false} ref={shareModalRef}>
        <div css={normalModalCss}>
          <img className="title" alt="" src={shareTitle}></img>
          <RechargeShare
            num={taskStatusValue ? taskStatusValue?.inviteNum : 0}
          ></RechargeShare>
          <div
            css={closeModalCss}
            onClick={() => shareModalRef.current?.hide()}
          ></div>
        </div>
      </Modal>
    </div>
  );
}

interface SuitPartProps {
  title: string;
  part: any;
}

const suitPartCss = css`
  ${css({ ...flexColumnCenter() })}
`;

const suitSmallBoxBGCss = css`
  margin-bottom: 0.4rem;

  ${css({
    ...bg({ color: "rgba(0,0,0,0)", img: suitSmallBoxBg, size: "cover" }),
    ...size("2.1rem, 2.2rem"),
    ...flexCenter(),
  })}
`;

function SuitPart(props: SuitPartProps) {
  return (
    <div css={suitPartCss}>
      <div css={suitSmallBoxBGCss}>{props.part}</div>
      <p css={css({ ...font({ size: ".3rem", color: "white" }) })}>
        {props.title}
      </p>
    </div>
  );
}

const SuitPartMemo = React.memo<SuitPartProps>(SuitPart);

interface ProgressPartProps {
  value: number;
  // progress: number;
}

const energyBoxCss = css`
  position: relative;
  top: -0.5rem;
  margin-left: 0.6rem;
  margin-right: 0.4rem;
  ${css({ ...flexColumnCenter() })}
`;

const energyValueCss = css`
  font-size: 0.4rem;
  font-weight: 400;
  color: #fee600;
  position: relative;
  letter-spacing: 2px;
  z-index: 0;
  ::before {
    content: attr(data-text);
    position: absolute;
    -webkit-text-stroke: 0.1rem #332119;
    z-index: -1;
  }
`;

const sliverBoxCss = css`
  position: relative;
  z-index: 3;
  margin-right: 0.4rem;
  ${css({
    ...css({ ...flexColumnCenter() }),
  })}
`;

const goldValueCss = (props: { width: number; offsetRight: number }) => css`
  position: relative;
  z-index: 2;
  ::before {
    position: absolute;
    display: block;
    right: 0.4rem;
    top: 0.2rem;
    content: "0";
    width: 7.2rem;
    height: 0.2rem;
    color: rgba(0, 0, 0, 0);
    background: black;
    z-index: 1;
  }
  ::after {
    position: absolute;
    display: block;
    right: ${props.offsetRight}rem;
    top: 0.225rem;
    content: "0";
    color: rgba(0, 0, 0, 0);
    width: ${props.width}rem;
    height: 0.15rem;
    background: green;
    z-index: 1;
    overflow: hidden;
    /* transform: skewX(-30deg); */
  }
  > img {
    position: relative;
    z-index: 2;
  }
  ${css({
    ...size("1.1rem,1.2rem"),
  })}
`;

function ProgressPart(props: ProgressPartProps) {
  const progressValue = useMemo(() => {
    const fullWidth = 7.1;
    const fullOffsetRight = 0.5;
    const fullValue = 50000;
    let value = props.value;
    if (value > 47000 && value < 50000) {
      value = 47000;
    }
    if (value > 50000) {
      value = 50000;
    }
    const processWidth = (value / fullValue) * fullWidth;
    const processOffsetRight = fullWidth - processWidth + fullOffsetRight;
    // console.log("当前值", value);
    console.log("进度比例", value / fullValue);
    return { width: processWidth, offsetRight: processOffsetRight };
  }, [props.value]);
  return (
    <div css={css({ ...HStack() })}>
      <div css={energyBoxCss}>
        <img src={energyValue} alt="" css={css({ ...size("1.9rem,.5rem") })} />
        <p css={energyValueCss} data-text={props.value}>
          {props.value}
        </p>
      </div>
      <div css={sliverBoxCss}>
        <img
          src={silverGrade}
          alt=""
          css={css({ ...size("3rem,1.1rem") })}
        ></img>
        <img
          src={silverValue}
          alt=""
          css={css({ ...size("1.1rem,1.2rem") })}
        ></img>
      </div>
      <div css={css({ ...flexColumnCenter() })}>
        <img src={goldGrade} alt="" css={css({ ...size("3rem,1.1rem") })}></img>
        <div css={goldValueCss(progressValue)}>
          <img
            src={goldValue}
            alt=""
            css={css({ ...size("1.1rem,1.2rem") })}
          ></img>
        </div>
      </div>
    </div>
  );
}
