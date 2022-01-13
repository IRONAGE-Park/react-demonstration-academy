import React from 'react';
import ReactDOM from 'react-dom';
// React.js의 모듈 불러옴
// require와 같이 모듈을 불러오는 코드
// 모듈 이름만 사용해서 불러오면 npm을 통하여 의존 중인 외부 패키지 모듈
// 경로를 지정해서 불러오면 프로젝트 내의 모듈
import './index.css';
// CSS 파일 로드
import App from './App';
// App 컴포넌트를 불러옴

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // 이 root ID는 public/index.html의 <div id="root"></div>와 동일해야 함.
);
// 이 소스를 통해 React로 컴포넌트를 렌더함

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
