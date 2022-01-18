import { useState, useCallback, useMemo, memo } from "react";
import { Checkbox } from "@mui/material";

import {
  StyleCheckboxContent,
  StyleCheckboxDetail,
  StyleCheckboxMore,
  StyleCheckboxWrapper,
} from "./Checkbox.style";

// 함수형 컴포넌트 작성
const FunctionCheckbox = memo(
  // memo 함수는 안의 컴포넌트가 props 이외의 변화에 재렌더 되지 않도록 해줌
  // 최적화를 위해 자주 사용되는 함수
  // 재렌더 되지 않는 컴포넌트를 반환함
  ({ isHide, checked, label, onChangeCheckbox, onClickChangeView }) => {
    // props는 다음과 같이 받아올 수 있음
    // 이름이 같지 않으면 받아올 수 없음
    return (
      <StyleCheckboxWrapper>
        <StyleCheckboxContent>
          <Checkbox onChange={onChangeCheckbox} checked={checked} />
          {/* Material UI에 정의된 Checkbox 컴포넌트 사용 */}
          <p>{label}</p>
        </StyleCheckboxContent>
        <div onClick={onClickChangeView}>
          {/* 이 div가 클릭되면 보여지는 요소가 Toggle됨 */}
          {isHide ? (
            <StyleCheckboxMore>
              사람을 화나게하는 방법은 두가지가 있다고 합니다. 그 첫번째는 말을
              하다가 마는 것이고... 더보기
            </StyleCheckboxMore>
          ) : (
            <StyleCheckboxDetail>대충 긴 내용?</StyleCheckboxDetail>
          )}
        </div>
      </StyleCheckboxWrapper>
    );
  }
);

// 함수형 컴포넌트로 Checkbox를 반복적으로 렌더링하는 컴포넌트 작성
export const FunctionCheckboxList = () => {
  const [checkboxList, setCheckboxList] = useState([
    {
      id: 1, // 해당 Checkbox의 id
      isHide: true, // 자세히 보기 숨겨짐 여부
      checked: false, // check 상태
    },
    {
      id: 2,
      isHide: true,
      checked: false,
    },
  ]);
  // 렌더할 Checkbox에 대한 데이터를 useState로 선언(상태)

  // 한 Checkbox 컴포넌트의 checked 상태를 반대로 변경하는 함수
  const onChangeCheckbox = useCallback(
    (id) => {
      // id를 인자로 받음
      const newCheckboxList = checkboxList.map(
        (checkboxItem) =>
          checkboxItem.id === id
            ? // 인자로 받은 아이디와 순회하던 도중 만난 id 값이 일치한 checkbox 데이터의 값을 변경
              { ...checkboxItem, checked: !checkboxItem.checked } // checkbox 데이터의 다른 값은 유지하고, checked 프로퍼티만 값을 반대로 바꿈
            : checkboxItem // 일치하지 않은 id 값은 그대로 반환함
      ); // 상태는 불변성을 유지하기 위해 이전의 값은 변경하지 않고 새로운 배열을 반환하는 map 함수 사용
      setCheckboxList(newCheckboxList);
    },
    [checkboxList]
  );
  // useCallback을 사용하지 않으면 재렌더가 될 때마다 onChangeCheckbox가 새로이 선언되며, 함수 생성이 계속 실행됨
  // useCallback의 두 번째 인수에 있는 배열 내부의 값이 변경되면 첫 번째 인수의 함수를 새로 생성하여 반환
  // 여기서는 checkboxList가 변경될 때마다 함수 생성

  // 한 Checkbox 컴포넌트의 아래 텍스트 보이는 상태를 반대로 변경하는 함수
  const onClickChangeView = useCallback(
    (id) => {
      // id를 인자로 받음
      const newCheckboxList = checkboxList.map(
        (checkboxItem) =>
          checkboxItem.id === id
            ? // 인자로 받은 아이디와 순회하던 도중 만난 id 값이 일치한 checkbox 데이터의 값을 변경
              { ...checkboxItem, isHide: !checkboxItem.isHide } // checkbox 데이터의 다른 값은 유지하고, isHide 프로퍼티만 값을 반대로 바꿈
            : checkboxItem // 일치하지 않은 id 값은 그대로 반환함
      );
      setCheckboxList(newCheckboxList);
    },
    [checkboxList]
  );

  const AllCheck = useMemo(
    () => checkboxList.every((checkboxItem) => checkboxItem.checked),
    [checkboxList]
  );
  // const AllCheck = checkboxList.every((checkboxItem) => checkboxItem.checked);
  // useMemo를 사용하지 않으면 재렌더가 될 때마다 AllCheck가 새로이 선언되며, every 메서드가 계속 실행됨
  // useMemo의 두 번째 인수에 있는 배열 내부의 값이 변경되면 첫 번째 인수인 콜백 함수를 실행하여 AllCheck를 새로 계산함
  // 여기서는 checkboxList가 변경될 때마다 AllCheck를 계산

  const onChangeAllCheckbox = useCallback(() => {
    const newCheckboxList = checkboxList.map((checkboxItem) => ({
      ...checkboxItem,
      checked: !AllCheck,
    }));
    setCheckboxList(newCheckboxList);
  }, [AllCheck, checkboxList]);
  // 여기서는 AllCheck와 checkboxList가 변경될 때마다 함수 생성
  // 만약 AllCheck를 넣지 않으면 함수 내에서는
  // AllCheck의 초기값인 false로만 인식을 하여 계속 모든 Checkbox의 checked를 true로 값을 전환하게 됨

  return (
    <>
      <FunctionCheckbox
        checked={AllCheck}
        onChangeCheckbox={onChangeAllCheckbox}
        label="전체 체크 여부"
      />
      {checkboxList.map((checkboxItem) => (
        <FunctionCheckbox
          key={checkboxItem.id}
          isHide={checkboxItem.isHide}
          checked={checkboxItem.checked}
          onChangeCheckbox={() => onChangeCheckbox(checkboxItem.id)}
          onClickChangeView={() => onClickChangeView(checkboxItem.id)}
          // onChangeCheck 함수와 onClickChangeView 함수에는 id 매개변수를 넣어주어야 하는데,
          // 클릭 이벤트로 넣을 때 id 매개변수를 전달하기 위해선 함수를 미리 만들어 놓아야 함
        />
      ))}
      {/* 배열 내장 함수인 map으로 컴포넌트를 반환하게 되면 리스트로 출력 */}
    </>
  );
};

export default FunctionCheckbox;
