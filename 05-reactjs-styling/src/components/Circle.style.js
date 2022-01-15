import styled from "@emotion/styled/macro";
// 컴포넌트에 주입할 매개변수(어트리뷰트)를 사용
// 매개변수를 사용하기 위해선 외부 설정을 하거나, @emotion/styled/macro 라이브러리 호출

// styled 라이브러리로 스타일이 지정된 p 컴포넌트 생성
// export default가 아닌 export 키워드는 해당 이름을 가진 변수(여기서는 컴포넌트)를 동일한 이름으로 외부에 내보내기 함
// 따라서 다른 파일에서 이 변수(컴포넌트)를 사용하기 위해선 내보낸 변수(컴포넌트)와 동일한 이름으로 불러와야 함
export const StyleCircleText = styled.p((props) => ({
  color: props.red && "#f00",
  // 컴포넌트에 주입할 매개변수(어트리뷰트)를 사용
}));

// styled 라이브러리로 스타일이 지정된 div 컴포넌트 생성
// export default가 아닌 export 키워드는 해당 이름을 가진 변수(여기서는 컴포넌트)를 동일한 이름으로 외부에 내보내기 함
// 따라서 다른 파일에서 이 변수(컴포넌트)를 사용하기 위해선 내보낸 변수(컴포넌트)와 동일한 이름으로 불러와야 함
export const StyleCircleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;

  background-color: ${(props) => props.color || "#06f"};
  // 컴포넌트에 주입할 매개변수(어트리뷰트)를 사용

  border-radius: 50%;

  box-shadow: 0px 3px 15px #0001;

  ${StyleCircleText} {
    // SCSS 문법으로 현재 스타일 컴포넌트 하위(자식, 손자)에 있을 StyleCircle 스타일 컴포넌트에 스타일 지정
    font-size: 40px;
  }
`;
