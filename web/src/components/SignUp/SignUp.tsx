import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import defaultProfile from "assets/defaultProfile.svg";
import addImg from "assets/addImg.svg";
import { History } from "history";
import SignIn from "components/SignIn";
import useUser from "hooks/user/useUser";

const SignUp = (): JSX.Element => {
  const { isLogin } = useUser();
  const [fileUrl, setFileUrl] = useState<null | string>(null);
  const history: History = useHistory();

  const inputImage = useCallback((event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  }, []);
  const handleButton = useCallback(() => {
    history.push("/signin");
  }, []);

  return isLogin ? (
    <>
      <div className="signIn">
        <div className="signIn-content">
          <div>
            <div className="signIn-content-title">프로필 설정</div>
            <div className="signIn-content-image">
              <img
                className="signIn-content-image-img"
                src={!fileUrl ? defaultProfile : fileUrl}
                alt="profile"
              />
              <label
                className="signIn-content-image-button"
                htmlFor="input-file"
              >
                <img src={addImg} alt="" />
              </label>
              <input
                type="file"
                id="input-file"
                style={{ display: "none" }}
                accept=".jpeg, .jpg, .png"
                onChange={inputImage}
              />
            </div>
            <div>닉네임</div>
            <input type="text" placeholder="닉네임을 입력해주세요" />
          </div>
          <div className="signIn-content-button">
            <button onClick={handleButton}>저장</button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <SignIn />
  );
};

export default SignUp;
