import { atom } from "recoil";

export const activeTabState = atom<number>({
  key: "activeTabState",
  default: 0,
});
