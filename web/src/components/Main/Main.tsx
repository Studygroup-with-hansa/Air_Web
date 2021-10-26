import useMainList from "hooks/main/useMainList";
import MainList from "./MainList";

import "./Main.scss";

const Main = (): JSX.Element => {
  const { EveryMainListDummy } = useMainList();

  return (
    <div className="main">
      <div className="main-header">
        <div>
          공부 시간 순위
          <span className="main-header-text">
            일주일 간 공부 시간을 기준으로 합니다.
          </span>
        </div>
      </div>
      <div className="main-list">
        <div className="main-list-title">
          <div style={{ width: "10%" }}>순위</div>
          <div style={{ width: "20%" }}>이름</div>
          <div style={{ width: "50%" }}>일주일 통계</div>
          <div style={{ width: "20%" }}>총 공부 시간</div>
        </div>
        <MainList
          rank="1"
          name="박상아"
          week={[0, 14, 50, 100, 34, 32, 95]}
          time="63H 24M 02S"
          isMine={true}
        />
        <div className="main-list-content">
          {EveryMainListDummy.map((data) => {
            return (
              <>
                <MainList
                  rank={data.rank}
                  name={data.name}
                  week={data.week}
                  time={data.time}
                />
              </>
            );
          })}
          {}
        </div>
      </div>
    </div>
  );
};

export default Main;
