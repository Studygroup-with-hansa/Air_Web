import Img from "assets/ivory.png";

import "./PostSideItem.scss";

const PostSideItem = (): JSX.Element => {
  return (
    <div className="postSideItem">
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
