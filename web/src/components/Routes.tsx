import { Route, Switch } from "react-router-dom";
import PostPage from "pages/Post";
import MainPage from "pages/Main/MainPage";
import StatPage from "pages/Stat";
import SignInPage from "components/SignIn";
import SignUpPage from "components/SignUp";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/post" component={PostPage} />
      <Route exact path="/stat" component={StatPage} />
      {/* <Route exact path="/profile" component={profilePage} /> */}
      {/* <Route exact path="/setting" component={settingPage} /> */}
    </Switch>
  );
};

export default Routes;

// 나중에 RestrictRoute로 바꾸기 -> 로그인 시 페이지들 열람 가능
