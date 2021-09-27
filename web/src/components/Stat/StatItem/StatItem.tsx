import { useRecoilValue } from "recoil";
import Calendar from "components/Common/Calendar";
import Chart from "components/Common/Chart";
import { activeTabState, statDateState } from "recoil/stat";
import useStatItem from "hooks/Stat/useStatItem";

import "./StatItem.scss";
import { IStatDateTypes } from "types/stat.types";

const StatItem = () => {
  //범위 설정하는 함수 생성 (타입 별로 다르게) hooks 따로 만들어도 될 듯
  const activeTab = useRecoilValue(activeTabState);
  // const statDate = useRecoilValue<IStatDateTypes>(statDateState);
  // const { MonthStat } = useStatItem();

  // MonthStat();

  return (
    <div className="statItem">
      <div className="statItem-left">
        <Calendar />
        <div className="statItem-left-analysis">
          <div>총 공부시간</div>
          <div>3H 24M 11S</div>
          <div>{activeTab}</div>
        </div>
      </div>
      <div className="statItem-right">
        {/* {statDate.startDate}
        {statDate.endDate} */}
      </div>
    </div>
  );
};

export default StatItem;
