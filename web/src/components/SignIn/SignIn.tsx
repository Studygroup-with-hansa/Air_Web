import { ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import "./SignIn.scss";

const Sign = (): JSX.Element => {
  const [isEmpty, setIsEmpty] = useState<string>("");
  const history = useHistory();
  const onChangeButton = (e: ChangeEvent<HTMLInputElement>) => {
    setIsEmpty(e.target.value);
  };
  const onClickButton = useCallback(() => {
    !isEmpty
      ? console.log("isEmpty")
      : (document.getElementsByClassName("info")[0].childNodes[0].nodeValue =
          "전송했습니다 5분 안에 코드를 입력해주세요");
  }, [isEmpty]);
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
              {isEmpty ? <span className="info"> </span> : <></>}
            </div>
            <input
              style={!isEmpty ? { borderColor: "#e92121" } : {}}
              value={isEmpty}
              onChange={onChangeButton}
              className="signIn-content-input"
              type="text"
              placeholder="이메일을 입력해주세요"
            />
            <button
              onClick={onClickButton}
              className={!isEmpty ? "isEmpty" : ""}
            >
              인증
            </button>

            <div className="infotext">
              {!isEmpty ? "이메일이 입력되지 않았습니다" : ""}
            </div>
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
