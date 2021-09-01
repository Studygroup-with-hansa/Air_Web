import moment from "moment";
import "./MainTimer.scss";

const MainTimer = (): JSX.Element => {
  const date = moment(new Date()).format("YYYY.MM.DD");

  return (
    <div className="mainTimer">
      <div className="mainTimer-textBox">
        <div className="mainTimer-textBox-text">{date}</div>
        <div className="mainTimer-textBox-time">00H 00M 00S</div>
        <div className="mainTimer-textBox-goal">목표 시간을 설정해주세요</div>
      </div>
    </div>
  );
};

export default MainTimer;
