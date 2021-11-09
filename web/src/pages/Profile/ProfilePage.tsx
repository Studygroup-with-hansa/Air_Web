import PageTemplate from "components/Common/PageTemplate";
import Profile from "components/Profile";
import SignIn from "components/SignIn";
import useUser from "hooks/user/useUser";

const ProfilePage = () => {
  const { isLogin } = useUser();

  return isLogin ? (
    <>
      <PageTemplate>
        <Profile />
      </PageTemplate>
    </>
  ) : (
    <>
      <SignIn />
    </>
  );
};

export default ProfilePage;
