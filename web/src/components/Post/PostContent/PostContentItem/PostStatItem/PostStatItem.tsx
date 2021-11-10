import PostCalendar from "components/Common/PostCalendar";

import "./PostStatItem.scss";

const PostStatItem = () => {
  return (
    <div className="postStatItem">
      <div className="postStatItem-calendar">
        <PostCalendar />
      </div>
    </div>
  );
};

export default PostStatItem;
