import "./SignIn.scss";

const Sign = (): JSX.Element => {
  return (
    <>
      <div className="signIn">
        <div className="signIn-content">
          <div>
            <div className="signIn-content-title">로그인</div>
            <div>이메일</div>
            <input
              className="signIn-content-input"
              type="text"
              placeholder="이메일을 입력해주세요"
            />
            <button>인증</button>
            <div>인증코드</div>
            <input type="text" placeholder="인증 코드를 입력해주세요" />
          </div>
          <div className="signIn-content-button">
            <button>로그인</button>
            <div>
              회원이 아니신가요?
              <span> 회원가입하기</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
