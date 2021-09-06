import MainList from "./MainList";

import "./Main.scss";

const Main = (): JSX.Element => {
  return (
    <div className="main">
      <div className="main-header">
        <div>공부 시간 순위</div>
        <span>일주일 간 공부 시간을 기준으로 합니다.</span>
      </div>
      <div className="main-list">
        <div className="main-list-title">
          <div className="main-list-title-rank">순위</div>
          <div className="main-list-title-name">이름</div>
          <div className="main-list-title-week">일주일 통계</div>
          <div className="main-list-title-time">총 공부 시간</div>
        </div>
        <div className="main-list-content">
          <MainList
            rank="1"
            name="박상아"
            week={[0, 14, 50, 100, 34, 32, 95]}
            time="63H 24M 02S"
            isMine={true}
          />
          <MainList
            rank="1"
            name="박상아"
            week={[10, 20, 50, 70, 80, 90, 100]}
            time="63H 24M 02S"
          />
          <MainList
            rank="2"
            name="박상아"
            week={[10, 20, 50, 70, 80, 90, 100]}
            time="63H 24M 02S"
          />
          <MainList
            rank="3"
            name="박상아"
            week={[10, 20, 50, 70, 80, 90, 100]}
            time="63H 24M 02S"
          />
          <MainList
            rank="4"
            name="박상아"
            week={[10, 20, 50, 70, 80, 90, 100]}
            time="63H 24M 02S"
          />
          <MainList
            rank="5"
            name="박상아"
            week={[10, 20, 50, 70, 80, 90, 100]}
            time="63H 24M 02S"
          />
          <MainList
            rank="6"
            name="박상아"
            week={[10, 20, 50, 70, 80, 90, 100]}
            time="63H 24M 02S"
          />
          <MainList
            rank="7"
            name="박상아"
            week={[10, 20, 50, 70, 80, 90, 100]}
            time="63H 24M 02S"
          />
          <MainList
            rank="8"
            name="박상아"
            week={[10, 20, 50, 70, 80, 90, 100]}
            time="63H 24M 02S"
          />
          <MainList
            rank="9"
            name="박상아"
            week={[10, 20, 50, 70, 80, 90, 100]}
            time="63H 24M 02S"
          />
          <MainList
            rank="10"
            name="박상아"
            week={[10, 20, 50, 70, 80, 90, 100]}
            time="63H 24M 02S"
          />
          <MainList
            rank="11"
            name="박상아"
            week={[10, 20, 50, 70, 80, 90, 100]}
            time="63H 24M 02S"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
