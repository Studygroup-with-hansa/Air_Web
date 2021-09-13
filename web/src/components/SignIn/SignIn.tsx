import logo from "assets/logo.svg";

import "./SignIn.scss";

const SignIn = (): JSX.Element => {
  return (
    <div className="signIn">
      <div className="signIn-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="signIn-content"></div>
    </div>
  );
};

export default SignIn;
