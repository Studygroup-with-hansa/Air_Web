import PageTemplate from "components/Common/PageTemplate";
import Post from "components/Post";
import SignIn from "components/SignIn";
import useUser from "hooks/user/useUser";

const PostPage = () => {
  const { isLogin } = useUser();

  return isLogin ? (
    <>
      <PageTemplate>
        <Post />
      </PageTemplate>
    </>
  ) : (
    <>
      <SignIn />
    </>
  );
};

export default PostPage;
