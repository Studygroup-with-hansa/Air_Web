import PostHeader from "./PostHeader";
import PostContent from "./PostContent/PostContent";
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
