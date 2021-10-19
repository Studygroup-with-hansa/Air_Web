import PostContent from "./PostContent";

import "./Post.scss";

const Post = (): JSX.Element => {
  return (
    <div className="post">
      <div className="post-content">
        <PostContent />
      </div>
    </div>
  );
};

export default Post;
