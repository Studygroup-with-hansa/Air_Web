import { useState } from "react";
import MainList from "./MainList";
import useRank from "hooks/main/useRank";
import { IRankDataTypes } from "types/mainList.types";

import "./Main.scss";

const Main = (): JSX.Element => {
  // const { responseRank } = useRank();
  const rankData: any[] = [
    {
      rank: "1",
      username: "박상아",
      totalStudyTime: "60000",
      achievementRate: [100, 80, 98, 0, 32, 68, 79],
    },
    {
      rank: "2",
      username: "이동주",
      totalStudyTime: "50000",
      achievementRate: [100, 40, 98, 0, 32, 68, 79],
    },
    {
      rank: "3",
      username: "강동현",
      totalStudyTime: "44666",
      achievementRate: [17, 84, 94, 83, 94, 39, 83],
    },
    {
      rank: "4",
      username: "서승우",
      totalStudyTime: "36636",
      achievementRate: [45, 87, 99, 100, 46, 33, 10],
    },
    {
      rank: "5",
      username: "양윤재",
      totalStudyTime: "26626",
      achievementRate: [15, 64, 17, 88, 67, 86, 57],
    },
    {
      rank: "6",
      username: "김부성",
      totalStudyTime: "16616",
      achievementRate: [10, 0, 5, 50, 60, 64, 37],
    },
    {
      rank: "7",
      username: "대소고",
      totalStudyTime: "11111",
      achievementRate: [10, 0, 5, 50, 60, 64, 37],
    },
    {
      rank: "8",
      username: "닉네임",
      totalStudyTime: "9003",
      achievementRate: [33, 6, 0, 83, 3, 9, 37],
    },
    {
      rank: "9",
      username: "라이언",
      totalStudyTime: "8686",
      achievementRate: [15, 16, 72, 83, 27, 83, 93],
    },
    {
      rank: "10",
      username: "어피치",
      totalStudyTime: "7474",
      achievementRate: [10, 0, 5, 50, 60, 64, 37],
    },
    {
      rank: "11",
      username: "무지",
      totalStudyTime: "6444",
      achievementRate: [0, 0, 0, 5, 6, 64, 3],
    },
  ];

  // responseRank().then((e) => {
  //   if (e) {
  //     const { rank } = e;
  //     setRankData(rank);
  //   }
  // });

  return (
    <div className="main">
      <div className="main-header">
        <div>
          공부 시간 순위
          <span className="main-header-text">
            일주일 간 공부 시간을 기준으로 합니다.
          </span>
        </div>
      </div>
      <div className="main-list">
        <div className="main-list-title">
          <div style={{ width: "10%" }}>순위</div>
          <div style={{ width: "20%" }}>이름</div>
          <div style={{ width: "50%" }}>일주일 통계</div>
          <div style={{ width: "20%" }}>총 공부 시간</div>
        </div>
        <MainList
          rank="1"
          name="박상아"
          week={[100, 80, 98, 0, 32, 68, 79]}
          time="60000"
          isMine={true}
        />
        <div className="main-list-content">
          {rankData.map(
            (data: {
              rank: string;
              username: string;
              achievementRate: number[];
              totalStudyTime: string;
            }) => {
              return (
                <>
                  <MainList
                    rank={data.rank}
                    name={data.username}
                    week={data.achievementRate}
                    time={data.totalStudyTime}
                  />
                </>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
