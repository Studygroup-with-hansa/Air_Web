import Chart from "components/Common/Chart";
import PostCalendar from "components/Common/PostCalendar";

import "./PostStatItem.scss";

const PostStatItem = () => {
  return (
    <div className="postStatItem">
      <div className="postStatItem-calendar">
        {/* <Calendar type="week" isControl={false} /> */}
        <PostCalendar />
      </div>
      <div className="postStatItem-chart">
        <Chart />
      </div>
    </div>
  );
};

export default PostStatItem;
