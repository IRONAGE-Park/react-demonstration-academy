import { StyleAppendButton } from "./AppendButton.style";

const AppendButton = ({ onClick }) => {
  // 추가 요청 함수를 클릭 이벤트로 사용하기 위해 onClick props 받아옴
  return <StyleAppendButton onClick={onClick}>추가</StyleAppendButton>;
}; // 영화 목록을 추가 요청하기 위해 만든 버튼 컴포넌트

export default AppendButton;
