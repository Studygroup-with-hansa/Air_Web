import Calendar from "components/Common/Calendar";
import Chart from "components/Common/Chart";
import "./PostStatItem.scss";

const PostStatItem = () => {
  return (
    <div className="postStatItem">
      <div className="postStatItem-calendar">
        <Calendar type="week" isControl={false} />
      </div>
      <div className="postStatItem-chart">
        <Chart />
      </div>
    </div>
  );
};

export default PostStatItem;
