import "./App.css";
// CSS 파일을 불러옴
import ConditionRender from "./ConditionRender";
import InputComponent from "./InputComponent";
// 커스텀 컴포넌트를 작성함
// .js(jsx) 파일이지만 경로 입력 시 .js를 제외하더라도 상관 없음
import logo from "./logo.svg";
// SVG 파일(벡터 이미지)을 불러옴
// (이 logo는 후에 logo.svg의 위치 문자열로 변하므로 <img src={logo} />와 같이 지정 가능)

// 화살표 함수를 통해 함수형 컴포넌트 선언
const SingleMultiLine = () => {
  const name = "SingleMulti";

  const element = <h1>Hello. {name}</h1>; // 한 줄의 경우 중괄호 생략 가능
  const multiLine = (
    <div tabIndex={0}>
      {/* tab-index와 같이 '-'을 통해 연결되는 어트리뷰트는 뒤를 대문자로 변경 후 연결 */}
      {/* 숫자 타입의 0과 문자 타입의 "0" 아무 값이나 상관 없음 */}
      <h1>Hello, MultilLine {name}</h1>
    </div>
  );
  // JSX 문법 내에서 {변수명}과 같이 변수 사용 가능.

  // 한 가지 태그로 감싸지 않고 return 하면 JSX가 오류를 발생 시킴
  // return (
  //   {element}
  //   {multiLine}
  // );

  return (
    <>
      {element}
      {multiLine}
    </>
  );
  // 태그 없이 감싸야할 경우 위와 같이 빈 태그로 감싸주면 됨.
};

// 함수형 컴포넌트로 선언
function App() {
  return (
    <div className="App">
      <SingleMultiLine />
      <InputComponent />
      {/* 자식이 있는 없는 경우 */}
      <ConditionRender></ConditionRender>
      {/* 자식이 있는 있는 경우 */}
      {/* 두 가지 형태로 사용 가능 */}
    </div>
  );
  // 커스텀 컴포넌트 또한 태그 이름으로 사용 가능
}

export default App;
// 현재의 컴포넌트를 바깥에서 사용할 수 있게 내보내기 함.
