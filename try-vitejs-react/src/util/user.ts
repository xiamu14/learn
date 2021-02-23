// import CryptoJS from "crypto-js";
import { Base64 } from "js-base64";
import { clearCookie, getCookie } from "./cookie";

export const isLogin = () => {
  // console.log("奇怪怪啊", getCookie("KY"), getCookie("UN"));
  if (getCookie("KY") && getCookie("UN")) {
    return true;
  } else {
    return false;
  }
};

export const logout = () => {
  clearCookie("KY");
  clearCookie("UN");
};

export const getUserInfo = (type: "userName" | "uid" | "activeGames") => {
  // const key = "iakjsdkj";

  if (isLogin()) {
    switch (type) {
      case "uid":
        // return CryptoJS.AES.encrypt(
        //   getCookie("ACT_UN") as string,
        //   key
        // ).toString(); // 这里使用加密后的手机号作为 UID
        return Base64.encode(getCookie("ACT_UN") as string);
      case "userName":
        return getCookie("ACT_UN");
      case "activeGames":
        return getCookie("LT_GAMES");
      default:
        break;
    }
  }

  return null;
};
