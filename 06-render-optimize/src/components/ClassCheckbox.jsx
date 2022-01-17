import { Component } from "react";
import { Checkbox } from "@mui/material";
import {
  StyleCheckboxContent,
  StyleCheckboxDetail,
  StyleCheckboxMore,
  StyleCheckboxWrapper,
} from "./Checkbox.style";

// 클래스형 컴포넌트 선언
class ClassCheckbox extends Component {
  // Component를 상속 받음
  render() {
    // 렌더/재렌더시 이 함수 실행
    return (
      <StyleCheckboxWrapper>
        <StyleCheckboxContent>
          <Checkbox checked={false} />
        </StyleCheckboxContent>
        {true ? (
          <StyleCheckboxMore>
            사람을 화나게하는 방법은 두가지가 있다고 합니다. 그 첫번째는 말을
            하다가 마는 것이고... 더보기
          </StyleCheckboxMore>
        ) : (
          <StyleCheckboxDetail>대충 긴 내용?</StyleCheckboxDetail>
        )}
      </StyleCheckboxWrapper>
    );
  }
}

export default ClassCheckbox;
