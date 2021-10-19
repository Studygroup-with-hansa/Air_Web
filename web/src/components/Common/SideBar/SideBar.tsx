import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { darkModeState } from "recoil/darkMode";
import { useHistory } from "react-router-dom";
import { History } from "history";
import stat from "assets/stat.svg";
import post from "assets/post.svg";
import profile from "assets/profile.svg";
import dark from "assets/dark.svg";
import light from "assets/light.svg";

import "./SideBar.scss";

const SideBar = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useRecoilState<boolean>(darkModeState);
  const history: History = useHistory();
  const path: string = window.location.pathname;
  const handleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setIsDarkMode(true);
    }
  };

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
      <div className="sideBar-darkMode" onClick={handleDarkMode}>
        <img src={isDarkMode ? dark : light} alt="darkmode" />
      </div>
    </div>
  );
};

export default SideBar;
