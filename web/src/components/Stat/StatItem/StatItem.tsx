import { useRecoilState, useRecoilValue } from "recoil";
import Calendar from "components/Common/Calendar";
import Chart from "components/Common/Chart";
import { activeTabState, statDateState } from "recoil/stat";
import { IStatDateTypes } from "types/stat.types";

import "./StatItem.scss";

const StatItem = () => {
  const activeTab = useRecoilValue<number>(activeTabState);
  const statDate = useRecoilValue<IStatDateTypes>(statDateState);

  const tabMenu: any = {
    0: <Calendar type={"month"} />,
    1: <Calendar type={"week"} />,
    2: <Calendar type={"day"} />,
  };

  return (
    <div className="statItem">
      <div className="statItem-left">{tabMenu[activeTab]}</div>
      <div className="statItem-right">
        <div>{/* {statDate.startDate} ~ {statDate.endDate} */}</div>
      </div>
    </div>
  );
};

export default StatItem;
