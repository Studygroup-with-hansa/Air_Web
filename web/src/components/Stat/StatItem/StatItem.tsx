import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { activeTabState, dateDataState } from "recoil/stat";
import { IDateDataTypes, IStatDateTypes } from "types/stat.types";
import { statDateState } from "recoil/stat";
import Calendar from "components/Common/Calendar";
import Chart from "components/Common/Chart";
import useStatItem from "hooks/stat/useStatItem";
import usePost from "hooks/post/usePost";
import moment from "moment";

import "./StatItem.scss";

const StatItem = () => {
  const { getStat, changeTimeType } = useStatItem();
  const { requestPost } = usePost();

  const activeTab = useRecoilValue<number>(activeTabState);
  const [totalTime, setTotalTime] = useState<string>();
  const [goal, setGoal] = useState<number>();
  const statDate = useRecoilValue<IStatDateTypes>(statDateState);
  const dateData = useRecoilValue<IDateDataTypes>(dateDataState);

  const tabMenu: { [key: number]: JSX.Element } = {
    0: <Calendar type="month" />,
    1: <Calendar type="week" />,
    2: <Calendar type="day" />,
  };
  const calendarType: { [key: number]: string } = {
    0: "month",
    1: "week",
    2: "day",
  };

  useEffect(() => {
    getStat.data.stats.map((data) => {
      data.date === statDate.activeDate ? (
        setState(data.totalStudyTime, data.achievementRate)
      ) : (
        <></>
      );
    });
  }, [statDate.activeDate]);

  const setState = (totalStudyTime: number, achievementRate: number) => {
    setTotalTime(changeTimeType(totalStudyTime));
    setGoal(achievementRate);
  };
  const handleButton = () => {
    requestPost(
      dateData.startDate[activeTab],
      moment().format("YYYY.MM.DD"),
      calendarType[activeTab]
    );
  };

  return (
    <div className="statItem">
      <div className="statItem-left">{tabMenu[activeTab]}</div>
      <div className="statItem-right">
        <div className="statItem-right-date">{statDate.activeDate}</div>
        <div className="statItem-right-content">
          <div>
            <div className="statItem-right-content-title">
              총 공부 시간
              <div>{totalTime}</div>
            </div>
            <div className="statItem-right-content-title">
              목표 달성률
              <div>{goal}%</div>
            </div>
          </div>
          <div className="statItem-right-content-item">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatItem;
