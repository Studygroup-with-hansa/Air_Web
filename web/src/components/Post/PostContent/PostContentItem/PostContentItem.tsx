import { useCallback, useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { VscComment } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";
import send from "assets/send.svg";
import PostStatItem from "./PostStatItem";
import usePostItem from "hooks/post/usePostItem";
import image from "assets/ivory.png";

import "./PostContentItem.scss";

const PostContentItem = (props: { isMine: boolean }): JSX.Element => {
  // const { getPost } = usePostItem();

  // const postData = getPost.data;
  const [like, setLike] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  const postData = {
    username: "박상아",
    userImage: "PROFILE_IMG_URL",
    postDate: "2021.12.14",
    startDate: "2021-12-19",
    endDate: "2021-12-25",
    achievementRate: [100, 176, 98, 0, 32, 68, 79],
    calendarType: "week", // month, week, day
    like: 3,
    idx: 2,
  };

  const handleLike = () => {
    like ? setLike(false) : setLike(true);
  };
  const handleInput = (e: any) => {
    setComment(e.target.value);
    console.log(comment);
  };
  const handleButton = () => {
    setComments((item) => [...item, comment]);
    setComment("");
  };
  return (
    <div className="postContentItem">
      <div className="postContentItem-header">
        <div>
          <img
            className="postContentItem-header-img"
            src={image}
            alt="profile img"
          />
          <div className="postContentItem-header-title">
            <div className="postContentItem-header-title-name">
              {postData.username}
            </div>
            <div>{postData.postDate}</div>
          </div>
        </div>
        <div className="postContentItem-header-more">
          {/* {props.isMine ? (
            <AiOutlineDelete
              style={{ fontSize: "24px", color: "var(--red)", opacity: "50%" }}
            />
          ) : (
            <></>
          )} */}
        </div>
      </div>
      <div>
        <PostStatItem />
      </div>
      <div>
        <div className="postContentItem-bottom">
          <label onClick={handleLike}>
            <div className="postContentItem-bottom-button">
              {like ? (
                <IoMdHeart style={{ color: "red" }} size={24} />
              ) : (
                <IoMdHeartEmpty size={24} />
              )}
            </div>
            <div className="postContentItem-bottom-button-count">
              {like ? `${postData.like + 1}개` : `${postData.like}개`}
            </div>
          </label>
          <label>
            <div className="postContentItem-bottom-button">
              <VscComment size={24} />
            </div>
            <div className="postContentItem-bottom-button-count">
              {comments.length}개
            </div>
          </label>
        </div>
        {comments.map((data) => {
          return (
            <div className="postContentItem-bottom-comments">
              <img src={image} alt="image" />
              <div>박상아</div>
              {data}
            </div>
          );
        })}
        <div className="postContentItem-bottom-reply">
          <input type="text" value={comment} onChange={handleInput} />
          <img src={send} alt="send" onClick={handleButton} />
        </div>
      </div>
    </div>
  );
};

export default PostContentItem;
