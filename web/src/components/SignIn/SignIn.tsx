import { ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { History } from "history";
import { ISignInTypes } from "types/signIn.types";
import useSignIn from "hooks/signIn/useSignIn";

import "./SignIn.scss";

const Sign = (): JSX.Element => {
  const history: History = useHistory();
  const { requestSignIn, requestSignInCode } = useSignIn();

  const [request, setRequest] = useState<ISignInTypes>({
    email: "",
    auth: "",
  });

  const onChangeButton = (e: ChangeEvent<HTMLInputElement>) => {
    setRequest({
      ...request,
      [e.target.id]: e.target.value,
    });
  };
  const onClickButton = useCallback(() => {
    // !request.email ? (
    //   <></>
    // ) : (
    //   (document.getElementsByClassName("info")[0].childNodes[0].nodeValue =
    //     "전송했습니다 5분 안에 코드를 입력해주세요")
    // );
    requestSignIn(request.email);
  }, [request.email]);
  const handleButton = useCallback(() => {
    requestSignInCode(request.auth, request.email).then((e) =>
      localStorage.setItem("token", e.token)
    );
  }, [request.auth]);

  return (
    <>
      <div className="signIn">
        <div className="signIn-content">
          <div>
            <div className="signIn-content-title">로그인</div>
            <div>
              이메일
              {request.email ? <span className="info"> </span> : <></>}
            </div>
            <input
              id="email"
              type="text"
              className="signIn-content-input"
              value={request.email}
              onChange={onChangeButton}
              autoComplete="off"
              placeholder="이메일을 입력해주세요"
            />
            <button
              onClick={onClickButton}
              className={!request.email ? "isEmpty" : ""}
            >
              인증
            </button>

            <div>인증코드</div>
            <input
              id="auth"
              type="text"
              value={request.auth}
              autoComplete="off"
              onChange={onChangeButton}
              placeholder="인증 코드를 입력해주세요"
            />
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
