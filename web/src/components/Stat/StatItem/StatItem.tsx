import { useRecoilValue } from "recoil";
import Calendar from "components/Common/Calendar";
import { activeTabState } from "recoil/stat";
import Chart from "components/Common/Chart";

import "./StatItem.scss";

export interface IStatItemTypes {
  startDate: string;
  endDate: string;
}

const StatItem = ({ startDate, endDate }: IStatItemTypes) => {
  const activeTab = useRecoilValue<number>(activeTabState);

  const tabMenu: any = {
    0: <Calendar type={"month"} />,
    1: <Calendar type={"week"} />,
    2: <Calendar type={"day"} />,
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
              <div>00H 00M 00S</div>
            </div>
            <div className="statItem-right-content-title">
              평균 목표 달성률
              <div>0%</div>
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
