/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { bg, flexCenter, size } from "@redchili/retouch";
import LightSwiperElement from "./light_swiper";
import challengeTitle from "../assets/image/challenge-title@2x.png";
import challengeNumber from "../assets/image/challenge-number@2x.png";
import challengeUp from "../assets/image/challenge-up@2x.png";
import tabDefault from "../assets/image/tab-default@2x.png";
import tabActive from "../assets/image/tab-active@2x.png";
import up11 from "../assets/image/up11.png";
import up12 from "../assets/image/up12.png";
import up13 from "../assets/image/up13.png";
import up21 from "../assets/image/up21.png";
import up22 from "../assets/image/up22.png";
import up23 from "../assets/image/up23.png";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { configAtom } from "../recoil/atom";

const suitTitleCss = css`
  margin: 0 auto .4rem;
  display: block;
  ${css({ ...size("7.5rem, 1.8rem") })}
`;

const contentCss = css`
  font-size: .3rem;
  color: white;
  line-height: 1.6;
  margin: 0 .5rem .6rem;
  .yellow {
    color: #ffd738;
  }
`;

const challengeNumberBoxCss = css`
  position: relative;
  margin: 0 auto 1.2rem;
  box-sizing: border-box;
  ${css({
    ...bg({ img: challengeNumber, color: "rgba(0,0,0,0)", size: "cover" }),
    ...size("9.4rem, 3.4rem"),
  })}
`;

const challengeNumberCss = css`
  font-size: .7rem;
  font-weight: bold;
  color: #fee600;
  text-align: center;
  transform: translate(-1.2rem, 1.5rem);
`;

const awardCss = css`
  position: absolute;
  font-size: .3rem;
  font-weight: bold;
  right: .4rem;
  bottom: -0.5rem;
  color: #e2e1ff;
`;

const tabHeadBoxCss = css`
  margin: .6rem 0 .1rem;
  ${css({
    ...flexCenter(),
  })}
`;

const tabDefaultCss = css`
  font-size: .427rem;
  font-weight: bold;
  color: #9d9d9d;
  ${css({
    ...flexCenter(),
    ...size("4.6rem,1.3rem"),
    ...bg({ img: tabDefault, color: "rgba(0,0,0,0)", size: "cover" }),
  })}
`;

const tabActiveCss = css`
  font-size: .427rem;
  font-weight: bold;
  color: #fee600;
  ${css({
    ...flexCenter(),
    ...size("5.2rem,1.8rem"),
    ...bg({ img: tabActive, color: "rgba(0,0,0,0)", size: "cover" }),
  })}
`;

const challengeRuleCss = css`
  margin: 0 auto;
  ${css({
    ...size("9.4rem,5.5rem"),
  })}
`;

const challengeTextCss = css`
  margin: .3rem 0 .9rem;
  padding: 0 .4rem;
  font-size: .32rem;
  color: white;
  font-weight: 400;
  line-height: 1.6;
  > .yellow {
    color: #fee600;
  }
`;

export default function Challenge() {
  const [tabActive, setTabActive] = useState<0 | 1>(0); // 0,1
  const configValue = useRecoilValue(configAtom);
  const onSwitchTab = (tabKey: 0 | 1) => {
    setTabActive(tabKey);
  };

  return (
    <div id="challenge">
      <img
        src={challengeTitle}
        css={suitTitleCss}
        alt="the title of challenge module"
      ></img>
      <p css={contentCss}>
        1月21日-2月20日，玩家达到<span className="yellow">第三章</span>
        后可前往避难所找到游戏厅/医疗室中<span className="yellow">UP主NPC</span>
        开启挑战活动。完成对应的玩法挑战，即可激活宠物幻化的功能，将宠物幻化成专属的
        <span className="yellow">UP主形象</span>
        ！同时当全服玩家挑战总数达10w，全服玩家可获得全服挑战奖励！
      </p>
      <div css={challengeNumberBoxCss}>
        <p css={challengeNumberCss}>{configValue?.upNum ?? 0}</p>
        <p css={awardCss}>配件抽奖券*10 金币*100</p>
      </div>
      <img
        src={challengeUp}
        alt="challenged anchor"
        css={css({ ...size("10rem,7.9rem") })}
      />
      <div>
        <div css={tabHeadBoxCss}>
          <div
            css={tabActive === 0 ? tabActiveCss : tabDefaultCss}
            onClick={() => onSwitchTab(0)}
          >
            逆风笑副本
          </div>
          <div
            css={tabActive === 1 ? tabActiveCss : tabDefaultCss}
            onClick={() => onSwitchTab(1)}
          >
            与山0v0副本
          </div>
        </div>
        <div>
          <div
            css={challengeRuleCss}
            style={{ display: tabActive === 0 ? "block" : "none" }}
          >
            <LightSwiperElement images={[up11, up12, up13]} />
          </div>
          <div
            css={challengeRuleCss}
            style={{ display: tabActive === 1 ? "block" : "none" }}
          >
            <LightSwiperElement images={[up21, up22, up23]} />
          </div>
          {tabActive === 0 ? (
            <p css={challengeTextCss}>
              <span className="yellow">与逆风笑：</span>
              参与内嵌小游戏“弓箭挑战”玩法，层数突破30层，可激活宠物幻化成”逆风笑“的功能。此外突破更多层级对应的任务还可以获得大量宠物升级材料
            </p>
          ) : (
            <p css={challengeTextCss}>
              <span className="yellow">与山0v0：</span>
              参与内嵌小游戏“拯救动物王国”玩法，累计获得达到7星，可激活宠物幻化成“小与山0v0”的功能。此外获得更多星数对应的任务还可以获得大量银币、金币奖励
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
