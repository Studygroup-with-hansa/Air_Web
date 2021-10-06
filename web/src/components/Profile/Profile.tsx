import "./Profile.scss";
import defaultProfile from "assets/defaultProfile.svg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">내 프로필</div>
      <div className="profile-contents">
        <div className="profile-contents-view">
          <div>
            <img src={defaultProfile} alt="defaultProfile" />
          </div>
          <div className="profile-contents-view-name">name</div>
          <div className="profile-contents-view-title">title</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
