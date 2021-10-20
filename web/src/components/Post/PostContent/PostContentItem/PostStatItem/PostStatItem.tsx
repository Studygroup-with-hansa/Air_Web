import Calendar from "components/Common/Calendar";
import "./PostStatItem.scss";

const PostStatItem = () => {
  return (
    <div className="postStatItem">
      <div className="postStatItem-calendar">
        <Calendar type="week" isControl={false} />
      </div>
    </div>
  );
};

export default PostStatItem;
