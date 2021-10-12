import { atom } from "recoil";

export const profileImageState = atom<File | undefined>({
  key: "profileImageState",
  default: undefined,
});
