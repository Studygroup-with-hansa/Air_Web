import { useRecoilValue } from "recoil";
import Calendar from "components/Common/Calendar";
import { activeTabState } from "recoil/stat";

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
          <div className="statItem-right-content-totalTime">asdf</div>
        </div>
      </div>
    </div>
  );
};

export default StatItem;
