import img from "assets/ivory.png";
import more from "assets/more.svg";
import send from "assets/send.svg";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscComment } from "react-icons/vsc";
import { AiOutlineShareAlt } from "react-icons//ai";
import Chart from "../../../Common/Chart/Chart";

import "./PostContentItem.scss";

const PostContentItem = (): JSX.Element => {
  return (
    <div className="postContentItem">
      <div className="postContentItem-header">
        <div>
          <img
            className="postContentItem-header-img"
            src={img}
            alt="profile img"
          />
          <div className="postContentItem-header-title">
            <div className="postContentItem-header-title-name">박상아</div>
            <div>2021.09.07</div>
          </div>
        </div>
        <div className="postContentItem-header-more">
          <img src={more} alt="more" />
        </div>
      </div>
      <div className="postContentItem-contents">
        <Chart />
        <div>content</div>
      </div>
      <div>
        <div className="postContentItem-bottom">
          <label>
            <div className="postContentItem-bottom-button">
              <IoMdHeartEmpty size={24} />
            </div>
            <div className="postContentItem-bottom-button-count">1개</div>
          </label>
          <label>
            <div className="postContentItem-bottom-button">
              <VscComment size={24} />
            </div>
            <div className="postContentItem-bottom-button-count">1개</div>
          </label>
          <div className="postContentItem-bottom-button">
            <AiOutlineShareAlt size={24} />
          </div>
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
