const numberArray = [1, 2, 3, 4, 5];
// 임의의 배열 선언

const newArray = numberArray.map((number, index, arr) => {
  // 각 배열을 한 번씩 순회하는 함수
  // 위 예시로는 총 5번 호출
  // number는 배열의 값
  // index는 위 number라는 값이 배열에 있는 위치
  // arr는 배열 전체
  // 반환한 값은 새로운 배열의 해당 인덱스에 들어감
  return number ** 2;
}); // [1, 4, 9, 16, 25] 반환

const newArray2 = numberArray.map((number, index, arr) => {
  // 각 배열을 한 번씩 순회하여 숫자 -> 문자열인 데이터로 변환
  return index.toString() + ": " + (number ** 2).toString();
}); // ["0: 1", "1: 4", "2: 9", "3: 16", "4: 25"] 반환

console.log(newArray, newArray2);

const underFive = numberArray.every((number, index, arr) => {
  // 각 배열을 한 번씩 순회하여 모든 요소가 조건식에 부합하는지 확인하는 함수
  // 반환한 값이 모두 true이면 every 함수는 true 반환
  // 위 경우 마지막 요소가 5보다 작지 않으므로 false
  return number < 5;
}); // false 반환

const overZero = numberArray.every((number, index, arr) => {
  // 위 경우 모든 요소가 0보다 크므로 true
  return number > 0;
}); // true

console.log(underFive, overZero);
