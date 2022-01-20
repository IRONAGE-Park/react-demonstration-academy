import { useState, useRef } from "react";

const InputManage = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);
  // 이런 작성 방식은 onChange 이벤트가 발생할 때마다 React에게 리렌더 로직을 요청하는 것과 같음
  // 실제로 input 요소는 onChange 이벤트마다 리렌더가 됨

  const onSubmit = (e) => {
    // e 객체에 하위 로직을 전달 받을 수 있는 방법이 여러 가지 존재함
    // 이를 통해 꼭 상태로 관리하여 리렌더하는 방식을 취하지 않아도 무방
    // inputRef.current. 이처럼 useRef를 사용하여 ref로 접근 가능함
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <input type="text" ref={inputRef} />
      <button type="submit">전송</button>
    </form>
  );
};
export default InputManage;
