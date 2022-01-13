// 최근의 문법은 import React from 'react';를 생략해도 리액트 코드가 잘 실행 됨.
// 예전 버전에는 무조건 호출해줘야 했음.
// 일반적으로 컴포넌트 명은 단어의 시작마다 대문자인 파스칼 케이스로 작성하며, 파일 이름과 동일하게 함.

const ConditionRender = () => {
  const isRender = false; // 임시 조건식

  if (isRender) {
    return <>if 문으로도 조건부 가능하나, 응용할 상황이 제한적</>;
  }

  return (
    <>
      <div>{isRender ? <h1>렌더 가능</h1> : <p>렌더 불가</p>}</div>
      {/* 삼항 연산자를 통해 조건을 골라 렌더링 가능 */}
      <div>
        {isRender && <h1>true면 렌더</h1>}
        {/* && 연산자의 경우 앞의 조건식이 true이면 뒤의 컴포넌트를 렌더 */}
        {isRender || <h1>false면 렌더</h1>}
        {/* || 연산자의 경우 앞의 조건식이 false이면 뒤의 컴포넌트를 렌더 */}
      </div>
    </>
  );
};

export default ConditionRender;
// 현재의 컴포넌트를 바깥에서 사용할 수 있게 내보내기 함.
