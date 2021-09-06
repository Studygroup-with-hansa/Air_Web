import home from "assets/home.svg";
import stat from "assets/stat.svg";
import calender from "assets/calender.svg";
import checkList from "assets/checkList.svg";
import badge from "assets/badge.svg";
import { FiLogOut } from "react-icons/fi";

import "./SideBar.scss";

const SideBar = (): JSX.Element => {
  const path = window.location.pathname;

  return (
    <div className="sideBar">
      <div>
        <img className={path === "/" ? "isMain" : ""} src={home} alt="home" />
      </div>
      <div>
        <img
          className={path === "/stat" ? "isMain" : ""}
          src={stat}
          alt="stat"
        />
      </div>
      <div>
        <img
          className={path === "/calender" ? "isMain" : ""}
          src={calender}
          alt="calender"
        />
      </div>
      <div>
        <img
          className={path === "/checkList" ? "isMain" : ""}
          src={checkList}
          alt="checkList"
        />
      </div>
      <div>
        <img
          className={path === "/badge" ? "isMain" : ""}
          src={badge}
          alt="badge"
        />
      </div>
      {/* <FiLogOut /> */}
    </div>
  );
};

export default SideBar;
