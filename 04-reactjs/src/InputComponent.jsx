// 최근의 문법은 import React from 'react';를 생략해도 리액트 코드가 잘 실행 됨.
// 예전 버전에는 무조건 호출해줘야 했음.
// 일반적으로 컴포넌트 명은 단어의 시작마다 대문자인 파스칼 케이스로 작성하며, 파일 이름과 동일하게 함.
// 컴포넌트 파일의 확장자는 .js나 .jsx 아무거나 상관 없음.
// 하지만 리액트의 컴포넌트는 jsx 문법으로 표현하므로 .jsx가 가독성에 좋음.

const InputComponent = () => {
  const name = "InputText";

  const onChange = (e) => {
    // onChange 이벤트 발생 시 호출할 콜백 함수.
    // 이를 이벤트 리스너(Event Listener) 혹은 이벤트 핸들러(Event Handler)라고 함.
    // onChange 이벤트 리스너는 input 태그의 값이 변경될 때마다 호출됨.
    console.log(e.target.value);
  };

  return (
    <div className="component" style={{ width: 100 }}>
      <input type="text" placeholder={name} onChange={onChange} />
    </div>
  );
};

export default InputComponent;
// 현재의 컴포넌트를 바깥에서 사용할 수 있게 내보내기 함.
