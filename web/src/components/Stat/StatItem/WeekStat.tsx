import Calendar from "components/Common/Calendar";

import "./StatItem.scss";

const WeekStat = (): JSX.Element => {
  return (
    <div className="statItem">
      <div className="statItem-left">
        <Calendar />
      </div>
      <div className="statItem-right"></div>
    </div>
  );
};
export default WeekStat;
