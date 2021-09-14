import { useCallback } from "react";
import { useHistory } from "react-router-dom";

const SignUp = (): JSX.Element => {
  const history = useHistory();
  const handleButton = useCallback(() => {
    history.push("/signin");
  }, []);

  return (
    <>
      <div className="signIn">
        <div className="signIn-content">
          <div>
            <div className="signIn-content-title">회원가입</div>
            <div>닉네임</div>
            <input
              style={{ marginBottom: 24 }}
              type="text"
              placeholder="닉네임을 입력해주세요"
            />
            <div>이메일</div>
            <input type="text" placeholder="이메일을 입력해주세요" />
          </div>
          <div className="signIn-content-button">
            <button>회원가입</button>
            <div>
              회원이신가요?
              <span onClick={handleButton}> 로그인하기</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
