import { CSSProperties } from "react";

export interface IMainListTypes {
  rank: string;
  name: string;
  week: number[];
  time: string;
  isMine?: boolean;
}

export interface IMainListStyleType {
  opacity: string;
  data: number;
  customStyle?: CSSProperties;
}
