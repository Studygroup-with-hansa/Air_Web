import stat from "assets/stat.svg";
import post from "assets/post.svg";
import profile from "assets/profile.svg";
import setting from "assets/setting.svg";
import "./SideBar.scss";

const SideBar = (): JSX.Element => {
  const path = window.location.pathname;

  return (
    <div className="sideBar">
      <div>
        <img className={path === "/" ? "isMain" : ""} src={stat} alt="stat" />
      </div>
      <div>
        <img
          className={path === "/post" ? "isMain" : ""}
          src={post}
          alt="post"
        />
      </div>
      <div>
        <img
          className={path === "/profile" ? "isMain" : ""}
          src={profile}
          alt="profile"
        />
      </div>
      <div>
        <img
          className={path === "/setting" ? "isMain" : ""}
          src={setting}
          alt="setting"
        />
      </div>
    </div>
  );
};

export default SideBar;
