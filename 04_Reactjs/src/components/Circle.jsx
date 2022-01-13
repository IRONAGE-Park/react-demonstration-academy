import { StyleCircleBox, StyleCircleText } from "./Circle.style";

const Circle = () => {
  return (
    <>
      <StyleCircleBox>
        <StyleCircleText>Inner Box</StyleCircleText>
      </StyleCircleBox>
      <StyleCircleText red>Outer Box</StyleCircleText>
      <StyleCircleBox color="#0f6"></StyleCircleBox>
    </>
  );
};

export default Circle;
