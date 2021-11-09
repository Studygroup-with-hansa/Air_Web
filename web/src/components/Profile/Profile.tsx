import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { History } from "history";
import { profileImageState } from "recoil/profile";
import { darkModeState } from "recoil/darkMode";
import ImageInputBox from "components/Common/ImageInput";
import IDefaultProfile from "assets/IDefaultProfile";
import useUser from "hooks/user/useUser";
import isEmpty from "util/isEmpty";

import "./Profile.scss";

const Profile = () => {
  const { responseUserData, requestUserData } = useUser();
  const history: History = useHistory();
  const profileImage = useRecoilValue<File | undefined>(profileImageState);
  const darkMode = useRecoilValue<boolean>(darkModeState);
  const [name, setName] = useState<string>("");

  if (isEmpty(name))
    responseUserData().then((e) => {
      var { name } = e;
      setName(name);
    });

  let imageUrl: string | undefined = undefined;
  if (profileImage) imageUrl = URL.createObjectURL(profileImage);

  const handleInput = useCallback(
    (e: { target: { value: string } }) => {
      setName(e.target.value.replace(/(\s*)/g, ""));
    },
    [name]
  );
  const handleButton = () => {
    requestUserData(name);
    setName("");
    history.push("/");
  };

  return (
    <div className="profile">
      <div className="profile-header">내 프로필</div>
      <div className="profile-contents">
        <div className="profile-contents-view">
          <div className="profile-contents-view-img">
            {!imageUrl ? (
              <IDefaultProfile color={darkMode ? "#F1F1F3" : "#555555"} />
            ) : (
              <img src={imageUrl} alt="image" />
            )}
          </div>
          <div className="profile-contents-view-name">{name}</div>
        </div>
        <div className="profile-contents-input">
          <div className="profile-contents-input-item">
            <div>
              <div className="profile-contents-input-item-title">
                닉네임
                <span className="infotext">8자 이내로 작성해주세요</span>
              </div>
              <div className="profile-contents-input-item-text">
                <input type="text" maxLength={8} onChange={handleInput} />
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
          <div className="profile-contents-btn" onClick={handleButton}>
            저장하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
