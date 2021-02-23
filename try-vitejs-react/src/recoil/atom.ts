import { atom, selector } from "recoil";
import { configType, taskStatusType } from "../schema/type";

export const configAtom = atom<configType | null>({
  key: "config",
  default: null,
});

export const taskStatusAtom = atom<taskStatusType>({
  key: "taskStatus",
  default: { lightGame: [], guessGame: [], inviteNum: 0 },
});

export const refreshPageTagAtom = atom({
  key: "refreshPageTag",
  default: Date.now().toString(),
});

export const refreshPageSelector = selector({
  key: "refreshPage",
  get: ({ get }) => {
    return get(refreshPageTagAtom);
  },
  set: ({ set }) => {
    return set(refreshPageTagAtom, Date.now().toString());
  },
});
