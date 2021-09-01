import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/Main/MainPage";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      {/* <Route exact path="/stat" component={statPage} />
      <Route exact path="/calender" component={calenderPage} />
      <Route exact path="/checkList" component={checkListPage} />
      <Route exact path="/badge" component={badgePage} /> */}
    </Switch>
  );
};

export default Routes;

// 나중에 RestrictRoute로 바꾸기 -> 로그인 시 페이지들 열람 가능
