import styled from "@emotion/styled";
// @emotion의 styled 라이브러리를 가져옴

// styled 라이브러리로 스타일이 지정된 div 컴포넌트 생성
const StyleEmotionDiv = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  padding: 32px;

  background-color: #ddd; // CSS 파일처럼 속성 이름 적용

  &::after {
    content: "Emotion";
  } // SCSS 사용 가능
`;

// @emotion을 사용한 컴포넌트 선언
const EmotionComponent = () => {
  // @emotion으로 스타일링한 div 컴포넌트 렌더링
  return <StyleEmotionDiv />;
};

export default EmotionComponent;
