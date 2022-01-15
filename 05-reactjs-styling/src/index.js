import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import CSSApp from "./CSSApp";
import CSSModuleApp from "./CSSModuleApp";
import SCSSApp from "./SCSSApp";
import SCSSModuleApp from "./SCSSModuleApp";
// 예제 컴포넌트들을 가져옴

import reportWebVitals from "./reportWebVitals";

const selector = "CSS";
// 선택할 예제 컴포넌트

const getRenderApp = (selector) => {
  // selector 변수를 통해 예제 컴포넌트를 반환하는 함수
  switch (selector) {
    case "CSS":
      return <CSSApp />;
    case "CSSModule":
      return <CSSModuleApp />;
    case "SCSS":
      return <SCSSApp />;
    default:
      return <SCSSModuleApp />;
  }
};

ReactDOM.render(<React.StrictMode>{getRenderApp(selector)}</React.StrictMode>, document.getElementById("root"));
// getRenderApp은 컴포넌트를 반환하며,
// 반환된 컴포넌트를 기존의 App 렌더 위치에 넣어 selector에 따라 다른 App 렌더

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
