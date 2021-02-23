/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { flexCenter, flexColumnCenter, size } from "@redchili/retouch";
import Modal, { RefType } from "@redchili/react-modal";
import { useRef, useState } from "react";
import { closeModalCss, normalModalCss } from "../style/modal";
import guessRight from "../assets/image/guess-right@2x.png";
import guessWrong from "../assets/image/guess-wrong@2x.png";
import { postGuessGame } from "../api/recharge";
import { getUserInfo } from "../util/user";
import { useSetRecoilState } from "recoil";
import { refreshPageSelector } from "../recoil/atom";

const title = css`
  margin-top: .4rem;
  font-size: .32rem;
  color: #ececec;
  margin-bottom: .5rem;
`;

const input = css`
  width: 4.6rem;
  height: 1rem;
  padding: .2rem;
  margin-bottom: .6rem;

  box-sizing: border-box;
  color: #ececec;
  font-size: .32rem;
  border: 2px solid #424f49;
  background-color: #32423e;
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

const text = css`
  font-size: .42rem;
  color: #ececec;
  line-height: 1.6;
  text-align: center;
`;

const resultModalCss = css`
  ${normalModalCss}
  ${css({
    ...flexColumnCenter(),
  })}
`;

interface Props {
  gameId: number; // 1 or 2
}

function judge(gameId: number, inputValue: string) {
  const answer = ["小风笑", ["小与山0v0", "小与山0V0"]];
  // console.log(gameId, inputValue);
  // console.log(answer[1].indexOf(inputValue) > -1);
  if (gameId === 1) {
    return inputValue === answer[0];
  } else {
    return answer[1].indexOf(inputValue) > -1;
  }
}

interface Props {
  onClose: () => void;
}

export default function RechargeGuess(props: Props) {
  const { gameId } = props;
  const resultModalRef = useRef<RefType>(null);
  const [result, setResult] = useState(false);
  const [inputValue, setInputValue] = useState<string>();
  const refreshPage = useSetRecoilState(refreshPageSelector);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue) {
      if (judge(gameId, inputValue)) {
        const uid = getUserInfo("uid") as string;
        postGuessGame({ uid, gameId }).then((res) => {
          if (res && res.code === 0) {
            setResult(true);
            // console.log(res.data.num);
            refreshPage("");
          }
        });
      } else {
        setResult(false);
      }
      resultModalRef.current?.show();
    }
  };

  const handleClose = () => {
    resultModalRef.current?.hide();
    props.onClose();
  };

  return (
    <>
      <div css={css({ ...flexColumnCenter() })}>
        <p css={title}>
          {gameId === 1 ? "逆风笑" : "与山0V0"}的专属《像素危城》宠物名称是？
        </p>
        <input css={input} type="text" maxLength={10} onChange={handleChange} />
        <div css={button} onClick={handleSubmit}>
          提交答案
        </div>
      </div>
      <Modal header={false} ref={resultModalRef}>
        <div css={resultModalCss}>
          <img
            className="title"
            alt=""
            src={result ? guessRight : guessWrong}
          ></img>
          {result ? (
            <div>
              <p css={text} style={{ margin: ".6rem 0 .8rem" }}>
                恭喜您获得1点充能
              </p>
              <div css={button} onClick={handleClose}>
                更多充能
              </div>
            </div>
          ) : (
            <div>
              <p css={text}>很抱歉，答案错误</p>
              <p css={text}>小提示：宠物名称可在页面中寻找答案</p>
            </div>
          )}
          <div
            css={closeModalCss}
            onClick={() => resultModalRef.current?.hide()}
          ></div>
        </div>
      </Modal>
    </>
  );
}
