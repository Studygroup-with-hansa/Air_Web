import { atom } from "recoil";
import { IStatDateTypes } from "types/stat.types";

export const activeTabState = atom<number>({
  key: "activeTabState",
  default: 0,
});

export const statDate: IStatDateTypes = {
  activeDate: "",
  startDate: "",
  endDate: "",
};

export const statDateState = atom<IStatDateTypes>({
  key: "statDateState",
  default: statDate,
});