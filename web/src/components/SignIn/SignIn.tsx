import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import logo from "assets/logo.svg";

import "./SignIn.scss";

const SignIn = (): JSX.Element => {
  const history = useHistory();
  const handleButton = useCallback((url: string) => {
    history.push(url);
  }, []);

  return (
    <div className="signIn">
      <div className="signIn-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="signIn-content">
        <div>
          <div>이메일</div>
          <input type="text" placeholder="이메일을 입력해주세요" />
          <button>인증</button>
          <div>인증코드</div>
          <input
            className="signIn-content-input"
            type="text"
            placeholder="인증 코드를 입력해주세요"
          />
        </div>
        <div className="signIn-content-button">
          <button>로그인</button>
          <div>
            회원이 아니신가요?
            <span onClick={() => handleButton("/")}>회원가입하기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
