import defaultProfile from "assets/defaultProfile.svg";
// import { Dropdown } from "react-dropdown-now";

import "./Profile.scss";

const Profile = () => {
  // const option = [
  //   "one",
  //   "two",
  //   "two",
  //   "two",
  //   "two",
  //   "two",
  //   "two",
  //   "two",
  //   "two",
  //   "three",
  // ];
  return (
    <div className="profile">
      <div className="profile-header">내 프로필</div>
      <div className="profile-contents">
        <div className="profile-contents-view">
          <div className="profile-contents-view-img">
            <img src={defaultProfile} alt="defaultProfile" />
          </div>
          <div className="profile-contents-view-title">title</div>
          <div className="profile-contents-view-name">name</div>
        </div>
        <div className="profile-contents-input">
          <div className="profile-contents-input-item">
            <div>
              닉네임<span className="infotext">8자 이하로 작성해주세요</span>
            </div>
            <input type="text" />
          </div>
          <div className="profile-contents-input-item">
            <div>칭호 선택</div>
            <div className="profile-contents-input-item-title">asdf</div>
            {/* <Dropdown
              placeholder="Select an option"
              className="my-className"
              options={option}
              value="one"
              onChange={(value) => console.log("change!", value)}
              onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) =>
                console.log("closedBySelection?:", closedBySelection)
              }
              onOpen={() => console.log("open!")}
            /> */}
          </div>
          <div>
            <div>프로필 사진</div>
            <div className="profile-contents-input-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
