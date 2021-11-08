import PageTemplate from "components/Common/PageTemplate";
import Main from "components/Main/Main";
import SignIn from "components/SignIn";

const MainPage = (): JSX.Element => {
  const isLogin: null | string = localStorage.getItem("token");

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
