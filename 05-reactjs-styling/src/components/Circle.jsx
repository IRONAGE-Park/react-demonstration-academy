import { StyleCircleBox, StyleCircleText } from "./Circle.style";
// @emotion/styled 라이브러리로 스타일이 지정된 컴포넌트 파일에서 내보낸 컴포넌트들을 가져옴

const Circle = () => {
  return (
    <>
      <StyleCircleBox>
        <StyleCircleText>Inner Box</StyleCircleText>
      </StyleCircleBox>
      <StyleCircleText red>Outer Box</StyleCircleText>
      {/* 스타일 컴포넌트에 매개변수를 넘겨줌. 값이 지정되어 있지 않으면 암묵적으로 true 할당 */}
      {/* 이 경우 red={true}와 같음 */}
      <StyleCircleBox color="#0f6"></StyleCircleBox>
      {/* 스타일 컴포넌트에 매개변수를 넘겨줌 */}
    </>
  );
};

export default Circle;
