import StyleAttributeComponent from "./components/StyleAttributeComponent";
import EmotionComponent from "./components/EmotionComponent";
import Circle from "./components/Circle";
// 스타일 어트리뷰트 및 @emotion/styled로 작성한 컴포넌트 가져옴

import logo from "./logo.svg";
import "./CSSApp.css";

// CSS 로드 방식을 사용한 컴포넌트
function CSSApp() {
  return (
    <div className="App">
      <StyleAttributeComponent />
      <EmotionComponent />
      <Circle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default CSSApp;
