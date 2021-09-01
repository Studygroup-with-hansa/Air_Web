import Play from "assets/play.svg";
import Meatball from "assets/meatball.svg";

import "./MainListItem.scss";

const MainListItem = (): JSX.Element => {
  return (
    <div className="mainListItem">
      <div className="mainListItem-left">
        <div className="mainListItem-left-playBtn">
          <img src={Play} alt="play" />
        </div>
        <div className="mainListItem-left-title">
          <span>국어</span>
          <span className="mainListItem-left-title-time">00:00:00</span>
        </div>
      </div>
      <div className="mainListItem-right">
        <img src={Meatball} alt="meatball" />
      </div>
    </div>
  );
};

export default MainListItem;
