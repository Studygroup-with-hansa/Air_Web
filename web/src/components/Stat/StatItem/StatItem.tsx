import Calendar from "components/Common/Calendar";
import Chart from "components/Common/Chart";

import "./StatItem.scss";

const StatItem = (type: any) => {
  //범위 설정하는 함수 생성 (타입 별로 다르게) hooks 따로 만들어도 될 듯
  const tabType: any = {
    0: "month",
    1: "week",
    2: "day",
  };
  return (
    <div className="statItem">
      <div className="statItem-left">
        <Calendar />
        <div className="statItem-left-analysis">
          <div>총 공부시간</div>
          <div>3H 24M 11S</div>
        </div>
      </div>
      <div className="statItem-right">right</div>
    </div>
  );
};

export default StatItem;
