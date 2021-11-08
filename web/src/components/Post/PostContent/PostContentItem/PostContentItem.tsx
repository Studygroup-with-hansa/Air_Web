import more from "assets/more.svg";
import send from "assets/send.svg";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscComment } from "react-icons/vsc";
import PostStatItem from "./PostStatItem";
import usePostItem from "hooks/post/usePostItem";

import "./PostContentItem.scss";

const PostContentItem = (props: { isMine: boolean }): JSX.Element => {
  const { getPost } = usePostItem();
  const postData = getPost.data;

  return (
    <div className="postContentItem">
      <div className="postContentItem-header">
        <div>
          <img
            className="postContentItem-header-img"
            src={postData.userImage}
            alt="profile img"
          />
          <div className="postContentItem-header-title">
            <div className="postContentItem-header-title-name">
              {postData.username}
            </div>
            <div>{postData.postDate.replace(/\-/g, ".")}</div>
          </div>
        </div>
        <div className="postContentItem-header-more">
          {props.isMine ? <img src={more} alt="more" /> : <></>}
        </div>
      </div>
      <div>
        <PostStatItem />
      </div>
      <div>
        <div className="postContentItem-bottom">
          <label>
            <div className="postContentItem-bottom-button">
              <IoMdHeartEmpty size={24} />
            </div>
            <div className="postContentItem-bottom-button-count">0개</div>
          </label>
          <label>
            <div className="postContentItem-bottom-button">
              <VscComment size={24} />
            </div>
            <div className="postContentItem-bottom-button-count">0개</div>
          </label>
        </div>
        <div className="postContentItem-bottom-reply">
          <input type="text" />
          <img src={send} alt="send" />
        </div>
      </div>
    </div>
  );
};

export default PostContentItem;
