import { IMainListTypes } from "types/mainList.types";
import MainListItem from "./MainListItem";
import Crown from "assets/ICrown";

import "./MainList.scss";

const MainList = ({
  rank,
  name,
  week,
  time,
  isMine,
}: IMainListTypes): JSX.Element => {
  let rankStyle = "";
  switch (rank) {
    case "1":
      rankStyle = "#FFD900";
      break;

    case "2":
      rankStyle = "#c0c0c0";
      break;

    case "3":
      rankStyle = "#f5b87c";
      break;

    default:
      rankStyle = "";
      break;
  }
  return (
    <div className={isMine ? "mainList isMine" : "mainList"}>
      <div className="mainList-rank">
        <div
          style={
            rank === "1"
              ? { border: `1px solid ${rankStyle}` }
              : rank === "2"
              ? { border: `1px solid ${rankStyle}` }
              : rank === "3"
              ? { border: `1px solid ${rankStyle}` }
              : {}
          }
        >
          {rank}
        </div>
        <Crown props={rankStyle} />
      </div>
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
