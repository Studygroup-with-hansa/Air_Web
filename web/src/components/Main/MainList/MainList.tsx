import { IMainListTypes } from "../../../types/mainList.types";
import MainListItem from "./MainListItem";

import "./MainList.scss";

const MainList = ({
  rank,
  name,
  week,
  time,
  isMine,
}: IMainListTypes): JSX.Element => {
  return (
    <div className={isMine ? "mainList isMine" : "mainList"}>
      <div className="mainList-rank">{rank}</div>
      <div className="mainList-name">{name}</div>
      <div className="mainList-week">
        {week.map((data) => (
          <MainListItem opacity={`${30 + data * (7 / 10)}%`} data={data} />
        ))}
      </div>
      <div className="mainList-time">{time}</div>
    </div>
  );
};

export default MainList;
