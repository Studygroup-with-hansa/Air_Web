import { useRecoilValue } from "recoil";
import { activeTabState, totalTimeState } from "recoil/stat";
import Calendar from "components/Common/Calendar";
import Chart from "components/Common/Chart";
import { IDateTypes } from "types/stat.types";
import useStatItem from "hooks/stat/useStatItem";

import "./StatItem.scss";

const StatItem = ({ startDate, endDate }: IDateTypes) => {
  const { stat } = useStatItem(); //나중에 서버 값으로 변경
  const statData = stat.data;

  const activeTab = useRecoilValue<number>(activeTabState);
  const totalTime = useRecoilValue<string>(totalTimeState);

  const tabMenu: { [key: number]: JSX.Element } = {
    0: <Calendar type="month" />,
    1: <Calendar type="week" />,
    2: <Calendar type="day" />,
  };

  return (
    <div className="statItem">
      <div className="statItem-left">{tabMenu[activeTab]}</div>
      <div className="statItem-right">
        <div className="statItem-right-date">
          {startDate} ~ {endDate}
        </div>
        <div className="statItem-right-content">
          <div>
            <div className="statItem-right-content-title">
              총 공부 시간
              <div>{totalTime}</div>
            </div>
            <div className="statItem-right-content-title">
              평균 목표 달성률
              <div>{statData.goals}%</div>
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
