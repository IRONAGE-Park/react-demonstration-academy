import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Global } from "@emotion/react";
// 전역 CSS를 등록할 컴포넌트 가져옴
import { GlobalStyles } from "./index.style";
// Global 컴포넌트에 등록할 전역 CSS 작성한 코드 가져옴

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global styles={GlobalStyles} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
