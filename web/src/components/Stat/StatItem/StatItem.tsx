import { useRecoilState, useRecoilValue } from "recoil";
import Calendar from "components/Common/Calendar";
import Chart from "components/Common/Chart";
import { activeTabState, dateDataState, statDateState } from "recoil/stat";
import { IDateDataTypes, IStatDateTypes } from "types/stat.types";

import "./StatItem.scss";

const StatItem = () => {
  const activeTab = useRecoilValue<number>(activeTabState);
  const dateData = useRecoilValue<IDateDataTypes>(dateDataState);

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
          {dateData.startDate} ~ {dateData.endDate}
        </div>
      </div>
    </div>
  );
};

export default StatItem;
