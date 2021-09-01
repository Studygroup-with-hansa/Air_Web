import Plus from "assets/plus.svg";

import "./MainList.scss";
import MainListItem from "./MainListItem";

const MainList = (): JSX.Element => {
  return (
    <div className="mainList">
      <div className="mainList-title">
        <div>과목</div>
        <div>
          <img src={Plus} alt="plus" />
        </div>
      </div>
      <div>
        <MainListItem />
      </div>
    </div>
  );
};

export default MainList;
