import PageTemplate from "components/Common/PageTemplate";
import Main from "components/Main/Main";
import SignIn from "components/SignIn";
import useUser from "hooks/user/useUser";

const MainPage = (): JSX.Element => {
  // const { isLogin } = useUser();
  const isLogin = true;

  return isLogin ? (
    <>
      <PageTemplate>
        <Main />
      </PageTemplate>
    </>
  ) : (
    <>
      <SignIn />
    </>
  );
};

export default MainPage;
