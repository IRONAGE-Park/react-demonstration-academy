import styled from "@emotion/styled/macro";

export const StyleCheckboxWrapper = styled.div`
  padding: 0 12px;

  box-shadow: 0px 3px 15px #0001;
  // 요소에 그림자 음영을 추가

  & + & {
    // SCSS 문법으로, 첫 번째 요소부터 margin이 적용되지 않고,
    // 두 번째 요소부터 위 요소와 margin이 적용됨
    // 리스트를 렌더링할 때 요소간 간격을 주기 좋음
    margin-top: 20px;
  }
`;

export const StyleCheckboxContent = styled.div`
  display: flex;
  align-items: center;
  // display: flex는 좀 더 유연하고 편하게 요소를 배치시킬 수 있게 해 줌
  // IE에서는 제대로 동작하지 않음

  height: 40px;
`;

export const StyleCheckboxMore = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 30px;

  color: #777;
  font-size: 12px;
`;

export const StyleCheckboxDetail = styled.div`
  width: 100%;

  padding: 24px 0;
  // 이렇게 입력하면 y축에만 padding이 적용됨
  // 반대로 0 24px; 라면 x축에만 padding 적용
`;
