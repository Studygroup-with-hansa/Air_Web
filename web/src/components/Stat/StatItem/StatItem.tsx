import { useRecoilState, useRecoilValue } from "recoil";
import Calendar from "components/Common/Calendar";
import Chart from "components/Common/Chart";
import { activeTabState, statDateState } from "recoil/stat";
import { IStatDateTypes } from "types/stat.types";

import "./StatItem.scss";

const StatItem = () => {
  const activeTab = useRecoilValue<number>(activeTabState);
  const statDate = useRecoilValue<IStatDateTypes>(statDateState);

  let monthStatItem = {
    startDate: `${statDate.dateArray[0]}.${statDate.dateArray[1]}.01`,
    endDate: `${statDate.dateArray[0]}.${statDate.dateArray[1]}.${String(
      new Date(
        parseInt(statDate.dateArray[0]),
        parseInt(statDate.dateArray[1]),
        0
      ).getDate()
    )}`,
  };

  const tabMenu: any = {
    0: `${monthStatItem.startDate} ~ ${monthStatItem.endDate}`,
    1: "주간",
    2: "일간",
  };

  return (
    <div className="statItem">
      <div className="statItem-left">
        <Calendar />
        <div className="statItem-left-analysis">
          <div>{tabMenu[activeTab]}</div>
        </div>
      </div>
      <div className="statItem-right">
        <div>{statDate.activeDate}</div>
      </div>
    </div>
  );
};

export default StatItem;
