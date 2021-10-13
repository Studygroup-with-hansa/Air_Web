import ImageInputBox from "components/Common/ImageInput";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { profileImageState } from "recoil/profile";
import defaultProfile from "assets/defaultProfile.svg";

import "./Profile.scss";

const Profile = () => {
  const profileImage = useRecoilValue<File | undefined>(profileImageState);
  const [name, setName] = useState<string>("");

  let imageUrl: string | undefined = undefined;
  if (profileImage) imageUrl = URL.createObjectURL(profileImage);

  const handleInput = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  return (
    <div className="profile">
      <div className="profile-header">내 프로필</div>
      <div className="profile-contents">
        <div className="profile-contents-view">
          <div className="profile-contents-view-img">
            <img src={!imageUrl ? defaultProfile : imageUrl} alt="" />
          </div>
          <div className="profile-contents-view-name">{name}</div>
        </div>
        <div className="profile-contents-input">
          <div className="profile-contents-input-item">
            <div>
              <div className="profile-contents-input-item-title">
                닉네임<span className="infotext">8자 이내로 작성해주세요</span>
              </div>
              <div className="profile-contents-input-item-text">
                <input type="text" onChange={handleInput} />
              </div>
            </div>
            <div>
              <div className="profile-contents-input-item-title">
                프로필 사진
              </div>
              <div className="profile-contents-input-item-image">
                <ImageInputBox />
              </div>
            </div>
          </div>
          <div className="profile-contents-btn">저장하기</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
