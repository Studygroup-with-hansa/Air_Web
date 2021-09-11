import search from "assets/search.svg";

import "./PostHeader.scss";

const PostHeader = (): JSX.Element => {
  return (
    <div className="postHeader">
      <div className="postHeader-search">
        <div className="postHeader-search-icon">
          <img src={search} alt="search" />
        </div>
        <div className="postHeader-search-input">
          <input type="text" />
        </div>
      </div>
      <div className="postHeader-btn">새 글 작성</div>
    </div>
  );
};

export default PostHeader;
