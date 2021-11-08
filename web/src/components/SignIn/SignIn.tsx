import { ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { History } from "history";

import "./SignIn.scss";

const Sign = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const history: History = useHistory();
  const onChangeButton = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onClickButton = useCallback(() => {
    !email ? (
      <></>
    ) : (
      (document.getElementsByClassName("info")[0].childNodes[0].nodeValue =
        "전송했습니다 5분 안에 코드를 입력해주세요")
    );
    console.log(email);
  }, [email]);
  const handleButton = useCallback(() => {
    history.push("/signup");
  }, []);

  return (
    <>
      <div className="signIn">
        <div className="signIn-content">
          <div>
            <div className="signIn-content-title">로그인</div>
            <div>
              이메일
              {email ? <span className="info"> </span> : <></>}
            </div>
            <input
              value={email}
              onChange={onChangeButton}
              className="signIn-content-input"
              type="text"
              placeholder="이메일을 입력해주세요"
            />
            <button onClick={onClickButton} className={!email ? "isEmpty" : ""}>
              인증
            </button>

            <div>인증코드</div>
            <input type="text" placeholder="인증 코드를 입력해주세요" />
          </div>
          <div className="signIn-content-button">
            <button onClick={handleButton}>로그인</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
