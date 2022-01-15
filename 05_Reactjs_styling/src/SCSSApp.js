import logo from "./logo.svg";
import "./SCSSApp.scss";

// SCSS 로드 방식을 사용한 컴포넌트
function SCSSApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default SCSSApp;
