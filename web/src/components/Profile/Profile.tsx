import defaultProfile from "assets/defaultProfile.svg";
import ImageInputBox from "components/Common/ImageInput";
import { useCallback, useState } from "react";

import "./Profile.scss";

const Profile = () => {
  const [name, setName] = useState<string>("");
  const [mainTitle, setMainTitle] = useState<string>("");
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleInput = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };
  const handleTitle = (data: string) => {
    setMainTitle(data);
  };
  const inputImage = useCallback((event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  }, []);

  return (
    <div className="profile">
      <div className="profile-header">내 프로필</div>
      <div className="profile-contents">
        <div className="profile-contents-view">
          <div className="profile-contents-view-img">
            <img
              src={!fileUrl ? defaultProfile : fileUrl}
              alt="defaultProfile"
            />
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
                {/* <label
                  className="profile-contents-input-item-image-button"
                  htmlFor="input-file"
                >
                  <div>이미지 선택</div>
                </label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept=".jpeg, .jpg, .png"
                  id="input-file"
                  onChange={inputImage}
                /> */}
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
