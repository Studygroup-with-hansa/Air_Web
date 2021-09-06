import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/Main/MainPage";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      {/* <Route exact path="/post" component={postPage} />
      <Route exact path="/profile" component={profilePage} />
      <Route exact path="/setting" component={settingPage} /> */}
    </Switch>
  );
};

export default Routes;

// 나중에 RestrictRoute로 바꾸기 -> 로그인 시 페이지들 열람 가능
