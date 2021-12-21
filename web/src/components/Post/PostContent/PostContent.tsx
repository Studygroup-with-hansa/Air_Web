import PostContentItem from "./PostContentItem/PostContentItem";

import "./PostContent.scss";

const PostContent = (): JSX.Element => {
  return (
    <div className="postContent">
      <PostContentItem isMine={true} />
    </div>
  );
};

export default PostContent;
