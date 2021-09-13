const SignUp = (): JSX.Element => {
  return (
    <>
      <div className="signIn">
        <div className="signIn-content">
          <div>
            <div className="signIn-content-title">회원가입</div>
            <div>이메일</div>
            <input type="text" placeholder="이메일을 입력해주세요" />
            <div>인증코드</div>
            <input type="text" placeholder="인증 코드를 입력해주세요" />
          </div>
          <div className="signIn-content-button">
            <button>회원가입</button>
            <div>
              회원이신가요?
              <span> 로그인하기</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
