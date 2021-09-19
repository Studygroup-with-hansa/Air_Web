import stat from "assets/stat.svg";
import post from "assets/post.svg";
import profile from "assets/profile.svg";
import setting from "assets/setting.svg";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import "./SideBar.scss";

const SideBar = (): JSX.Element => {
  const history = useHistory();
  const path = window.location.pathname;

  const handleIcon = useCallback(
    (url: string) => {
      history.push(url);
    },
    [history]
  );

  return (
    <div className="sideBar">
      <div>
        <img
          className={path === "/" ? "isMain" : ""}
          onClick={() => handleIcon("/")}
          src={stat}
          alt="rank"
        />
      </div>
      <div>
        <img
          className={path === "/post" ? "isMain" : ""}
          onClick={() => handleIcon("/post")}
          src={post}
          alt="post"
        />
      </div>
      <div>
        <img
          style={{ transform: "rotate(90deg)" }}
          className={path === "/stat" ? "isMain" : ""}
          onClick={() => handleIcon("/stat")}
          src={stat}
          alt="stat"
        />
      </div>
      <div>
        <img
          className={path === "/profile" ? "isMain" : ""}
          onClick={() => handleIcon("/profile")}
          src={profile}
          alt="profile"
        />
      </div>
      <div>
        <img
          className={path === "/setting" ? "isMain" : ""}
          onClick={() => handleIcon("/setting")}
          src={setting}
          alt="setting"
        />
      </div>
    </div>
  );
};

export default SideBar;
