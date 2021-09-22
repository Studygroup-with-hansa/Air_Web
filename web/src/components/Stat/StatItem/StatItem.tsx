import Calendar from "components/Common/Calendar";
import Chart from "components/Common/Chart";

import "./StatItem.scss";

const StatItem = ({ type }: any) => {
  return (
    <div className="statItem">
      <div className="statItem-left">
        <Calendar />
        <div className="statItem-left-analysis">
          <div>총 공부시간</div>
          {type === "month" ? (
            <div>month</div>
          ) : type === "week" ? (
            <div>week</div>
          ) : (
            <div>day</div>
          )}
          <div>3H 24M 11S</div>
        </div>
      </div>
      <div className="statItem-right">right</div>
    </div>
  );
};

export default StatItem;
