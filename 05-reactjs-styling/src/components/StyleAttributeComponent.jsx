// 스타일 어트리뷰트를 사용한 컴포넌트 선언
const StyleAttributeComponent = () => {
  return (
    <div
      style={{
        width: 100, // width에서 숫자의 경우 px 단위로 변경
        height: "100px", // 문자열로 100px를 입력해도 무방함
        padding: 32,
        backgroundColor: 12, // background-color를 카멜 케이스로 변경
        // 12는 backgroundColor에 유효하지 않으므로 적용되지 않음
        // background: "#fff",
        background: "rgba(0, 0, 0, 0.6)",
      }}
    >
      Style Attribute
    </div>
  );
};

export default StyleAttributeComponent;
