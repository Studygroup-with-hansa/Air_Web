import moment from "moment";
import { atom } from "recoil";
import { IDateDataTypes, IStatDateTypes } from "types/stat.types";
import { ETabMenu } from "lib/enum/stat";

export const activeTabState = atom<ETabMenu>({
  key: "activeTabState",
  default: 0,
});

export const statDate: IStatDateTypes = {
  activeDate: moment().format("YYYY.MM.DD"),
  dateArray: moment().format("YYYY.MM.DD").split("."),
};
export const statDateState = atom<IStatDateTypes>({
  key: "statDateState",
  default: statDate,
});

export const dateData: IDateDataTypes = {
  startDate: [
    moment().startOf("month").format("YYYY.MM.DD"),
    moment().startOf("week").format("YYYY.MM.DD"),
    moment().format("YYYY.MM.DD"),
  ],
  endDate: [
    moment().endOf("month").format("YYYY.MM.DD"),
    moment().endOf("week").format("YYYY.MM.DD"),
    moment().format("YYYY.MM.DD"),
  ],
};
export const dateDataState = atom<IDateDataTypes>({
  key: "dateDataState",
  default: dateData,
});

export const totalTimeState = atom<string>({
  key: "totalTimeState",
  default: "00H 00M 00S",
});
