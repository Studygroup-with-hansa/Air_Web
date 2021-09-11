import Img from "assets/ivory.png";

import "./PostSideItem.scss";

const PostSideItem = ({ isFirst }: any): JSX.Element => {
  return (
    <div className={isFirst ? "postSideItem isFirst" : "postSideItem"}>
      <div className="postSideItem-img">
        <div className="postSideItem-img-up">
          <img src={Img} alt="" />
          <img src={Img} alt="" />
        </div>
        <img src={Img} alt="" />
        <img src={Img} alt="" />
      </div>
      <div className="postSideItem-name">grup name</div>
    </div>
  );
};

export default PostSideItem;
