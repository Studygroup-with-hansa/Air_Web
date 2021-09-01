import menu from "assets/hamburger.svg";
import home from "assets/home.svg";
import stat from "assets/stat.svg";
import calender from "assets/calender.svg";
import checkList from "assets/checkList.svg";
import badge from "assets/badge.svg";

import "./SideBar.scss";

const SideBar = (): JSX.Element => {
  const path = window.location.pathname;

  console.log(path);

  return (
    <div className="sideBar">
      <div>
        <img className="isMain" src={menu} alt="menu" />
      </div>
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
    </div>
  );
};

export default SideBar;
