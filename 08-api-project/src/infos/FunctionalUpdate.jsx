import { useState, useCallback } from "react";

const FunctionalUpdate = () => {
  const [count, setCount] = useState(0);

  // 값을 매개변수로 전달한 setCount 함수
  const onClick = useCallback(() => {
    setCount(count + 1);

    console.log(count); // count의 값이 변하지 않음

    setCount(count + 2);
    // 두 번째로 실행한 setState만 실제로 적용
  }, [count]);
  // deps 배열에 count를 넣어 주지 않으면, onClick 함수는 count의 값을 계속해서 0으로 기억하게 됨

  // 콜백 함수를 매개변수로 전달한 setCount 함수
  const onClickFunctionalUpdate = useCallback(() => {
    setCount((prevCount) => {
      // 이전 count의 상태가 넘어옴
      return prevCount + 1;
    }); // 콜백 함수의 인자로는 이전 상태 값이 전달됨

    // 콜백 함수에서 다음으로 설정할 상태 값을 return 하면 적용됨
    // console.log(count); // count의 값이 변하지 않음

    setCount((prevCount) => {
      return prevCount + 2;
    }); // 첫 번째로 전달한 setState와 두 번째로 전달한 setState 모두 실행
  }, []);
  // deps 배열에 count를 넣어 주지 않아도, onClickFunctionalUpdate 함수는 이 컴포넌트의 count를 사용하는게 아닌,
  // React에서 전달한 prevCount를 사용하기 때문에 문제가 되지 않음
  // 상태를 관리해야 할 책임을 React로 전가한 것

  return <div onClick={onClick}>카운터 값: {count}</div>;
};

// 현재 count의 값이 0일 때, 값을 매개변수로 전달한 setCount 함수 실행 과정
//
// 1. 다음 count의 상태를 1(count + 1 === 0 + 1)로 만들라고 React에 전달
// 2. console.log 함수 실행
// 3. 다음 count의 상태를 2(count + 2 === 0 + 2)로 만들라고 React에 전달
// 4. 함수 종료

// 이에 React는 처음에 1로 상태를 변경한 후에 즉시 2로 상태를 변경하므로
// 두 번째 setCount만 적용된 것처럼 보임

// 현재 count의 값이 0일 때, 콜백 함수를 매개변수로 전달한 setCount 함수 실행 과정

// 1. 다음 count의 상태를 이전 상태 + 1(prevCount + 1 === 0 + 1 === 1)로 변경하는 함수를 실행하라고 React에 전달
// 2. console.log 함수 실행
// 3. 다음 count의 상태를 이전 상태 + 2(prevCount + 2 === 1 + 2 === 3)로 변경하는 함수를 실행하라고 React에 전달
// 4. 함수 종료

// 이에 React는 처음에 1로 상태를 변경한 후에 두 번째로 실행할 함수에서,
// prevCount에 1을 넣고 실행하기 때문에 두 setCount 모두 적용

export default FunctionalUpdate;
