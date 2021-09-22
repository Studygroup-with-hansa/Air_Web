import Calendar from "components/Common/Calendar";
import Chart from "components/Common/Chart";

import "./StatItem.scss";

const StatItem = () => {
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
