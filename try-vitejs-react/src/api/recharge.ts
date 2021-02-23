import { LinkGames } from "../schema/enum";
import { fetcher } from "./../util/fetcher";

// 用户邀请增加充能
export const postInvitationEnergy = (body: {
  uid: string;
  inviteUid: string;
}) => {
  const params = new URLSearchParams();

  Object.keys(body).forEach((key) => {
    // @ts-ignore
    params.append(key, body[key]);
  });
  return fetcher("/activity/accept-invite", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
};

// 用户点亮游戏增加充能
export const postActiveGame = (body: { uid: string; game: LinkGames }) => {
  const params = new URLSearchParams();

  Object.keys(body).forEach((key) => {
    // @ts-ignore
    params.append(key, body[key]);
  });
  return fetcher("/activity/light", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
};

// 登录页面增加充能
/**
 *
 * @param body {uid:string, type: 1 | 3}
 */
export const postOtherGame = (body: { uid: string; type: number }) => {
  const params = new URLSearchParams();

  Object.keys(body).forEach((key) => {
    // @ts-ignore
    params.append(key, body[key]);
  });

  return fetcher("/activity/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
};

// 竞猜增加充能
export const postGuessGame = (body: { uid: string; gameId: number }) => {
  const params = new URLSearchParams();

  Object.keys(body).forEach((key) => {
    // @ts-ignore
    params.append(key, body[key]);
  });

  return fetcher("/activity/guess", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
};

export const getConfig = () => {
  return fetcher("/activity/config");
};

export const getTaskStatus = (uid: string) => {
  return fetcher(`/activity/user-info?uid=${uid}`);
};
