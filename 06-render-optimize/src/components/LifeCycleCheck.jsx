import { useState, useEffect } from "react";
// useState 훅과 useEffect 훅 가져옴

let prevValue = null, // 컴포넌트 내의 number 변수의 이전 값을 저장
  prevFunc = null; // 컴포넌트 내의 onClick 함수의 이전 값을 저장
const LifeCycleCheck = () => {
  let number = 1; // 컴포넌트 내 변수 1 선언

  const [count, setCount] = useState(0); // 컴포넌트 내 상태 count 선언(초기값은 0)

  const onClick = () => {
    console.log("onClick Event ", number);
    number++;
    setCount(count + 1);
  }; // 컴포넌트 내 상태 count에 + 1을 하고, number의 값을 ++ 하는 함수 선언

  console.log("이전 number와 현재 number: ", prevValue === number);
  console.log("이전 onClick와 현재 onClick: ", prevFunc === onClick);
  // 이전 값과 현재 값 비교하면 모두 false
  // 함수가 실행 됨에 따라 모든 값이 새로 선언, 할당되기 때문
  prevValue = number;
  prevFunc = onClick;
  // 다시 이전 값에 현재 값을 넣어 줌

  useEffect(() => {
    // 빈 배열일 경우 이 함수는 mount될 때만 실행
    console.log("mount");
    return () => {
      // 빈 배열 내의 return 하는 함수는 unmount될 때만 실행
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    // count를 넣은 배열일 경우 이 함수는 mount될 때, count 값이 변할 때만 실행
    console.log("count update");
    return () => {
      // count를 넣은 배열 내의 return 함수는 unmount될 때, count 값이 변하기 직전에만 실행
      console.log("count will update");
    };
  }, [count]);

  // useEffect는 먼저 선언한 순서대로 호출됨
  // 위의 useEffect 순서를 변경하면 mount 됐을 때 count update - mount 순서대로 출력
  return (
    <div onClick={onClick}>
      <p>Life Cycle {count}</p>
      <p>{number}</p>
    </div>
  );
};

export default LifeCycleCheck;
