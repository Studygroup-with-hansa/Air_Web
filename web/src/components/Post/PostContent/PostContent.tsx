import PostContentItem from "./PostContentItem/PostContentItem";

import "./PostContent.scss";

const PostContent = (): JSX.Element => {
  return (
    <div className="postContent">
      <PostContentItem isMine={true} />
      <PostContentItem isMine={false} />
    </div>
  );
};

export default PostContent;
