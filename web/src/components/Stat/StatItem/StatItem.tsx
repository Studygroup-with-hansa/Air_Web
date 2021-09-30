import { useRecoilState, useRecoilValue } from "recoil";
import Calendar from "components/Common/Calendar";
import Chart from "components/Common/Chart";
import { activeTabState, dateDataState, statDateState } from "recoil/stat";
import { IDateDataTypes, IStatDateTypes } from "types/stat.types";

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
        <div>
          {startDate} ~ {endDate}
        </div>
      </div>
    </div>
  );
};

export default StatItem;
