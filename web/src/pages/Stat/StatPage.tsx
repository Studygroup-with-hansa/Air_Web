import Stat from "components/Stat";
import PageTemplate from "components/Common/PageTemplate";
import SignIn from "components/SignIn";
import useUser from "hooks/user/useUser";

const StatPage = () => {
  // const { isLogin } = useUser();
  const isLogin = true;

  return isLogin ? (
    <>
      <PageTemplate>
        <Stat />
      </PageTemplate>
    </>
  ) : (
    <>
      <SignIn />
    </>
  );
};

export default StatPage;
