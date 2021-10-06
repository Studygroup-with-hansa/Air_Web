import defaultProfile from "assets/defaultProfile.svg";
import { useCallback, useState } from "react";

import "./Profile.scss";

const title = [
  "칭호1",
  "칭호2",
  "칭호3",
  "칭호4",
  "칭호5",
  "칭호6",
  "칭호7",
  "칭호8",
  "칭호9",
  "칭호10",
  "칭호11",
  "칭호12",
  "칭호13",
  "칭호14",
];

const Profile = () => {
  const [mainTitle, setMainTitle] = useState<string>("");
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const inputImage = useCallback((event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  }, []);

  const handleTitle = (data: string) => {
    setMainTitle(data);
  };

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
          <div className="profile-contents-view-title">
            {!mainTitle ? "칭호를 선택해주세요" : mainTitle}
          </div>
          <div className="profile-contents-view-name">name</div>
        </div>
        <div className="profile-contents-input">
          <div className="profile-contents-input-item">
            <div>
              <div className="profile-contents-input-item-title">
                닉네임<span className="infotext">8자 이내로 작성해주세요</span>
              </div>
              <div className="profile-contents-input-item-text">
                <input type="text" />
              </div>
            </div>
            <div>
              <div className="profile-contents-input-item-title">
                프로필 사진
              </div>
              <div className="profile-contents-input-item-image">
                <label
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
                />
              </div>
            </div>
          </div>
          <div className="profile-contents-input-item">
            <div>
              <div className="profile-contents-input-item-title">칭호</div>
              <div className="profile-contents-input-item-list">
                {title.map((data) => {
                  return (
                    <div
                      onClick={() => handleTitle(data)}
                      className={
                        mainTitle === data
                          ? "profile-contents-input-item-list-content mainTitle"
                          : "profile-contents-input-item-list-content"
                      }
                    >
                      {data}
                    </div>
                  );
                })}
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
