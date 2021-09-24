import { atom } from "recoil";
import { IactiveDateTypes } from "types/stat.types";

export const activeTabState = atom<number>({
  key: "activeTabState",
  default: 0,
});

export const activeDate: IactiveDateTypes = {
  startDate: "",
  endDate: "",
};

export const activeDateState = atom<IactiveDateTypes>({
  key: "activeDateState",
  default: activeDate,
});
