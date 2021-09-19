import "./PostSide.scss";
import PostSideItem from "./PostSideItem";

const PostSide = (): JSX.Element => {
  return (
    <div className="postSide">
      <div className="postSide-title">내 그룹</div>
      <div className="postSide-content">
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
        <PostSideItem />
      </div>
    </div>
  );
};

export default PostSide;
