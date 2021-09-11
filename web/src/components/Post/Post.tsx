import PostContent from "./PostContent";
import PostHeader from "./PostHeader/PostHeader";
import PostSide from "./PostSide";

import "./Post.scss";

const Post = (): JSX.Element => {
  return (
    <div className="post">
      <div className="post-content">
        <PostHeader />
        <PostContent />
      </div>
      <div className="post-side">
        <PostSide />
      </div>
    </div>
  );
};

export default Post;
