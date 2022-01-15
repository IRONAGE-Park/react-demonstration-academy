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
      <div className="div">
        <p>이건 외부 스타일 시트의 스타일 요소가 적용된 태그입니다.</p>
        <p>이 요소는 public/index.html 파일에서 불러온 expand_style.css가 적용됨.</p>
      </div>
    </div>
  );
}

export default CSSApp;
