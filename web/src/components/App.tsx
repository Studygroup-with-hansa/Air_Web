import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { RecoilRoot } from "recoil";

import "styles/reset.scss";
import "styles/styleVariable/styleVariable.scss";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
