const numberArray = [1, 2, 3, 4, 5];
// 임의의 배열 선언

const addedArray = numberArray.concat(6);
// numberArray 배열에 6을 추가한 새로운 배열 반환

const twoAddedArray = numberArray.concat(7, 8);
// numberArray 배열에 7과 8을 추가한 새로운 배열 반환

console.log(numberArray); // [1, 2, 3, 4, 5]
console.log(addedArray); // [1, 2, 3, 4, 5, 6]
console.log(twoAddedArray); // [1, 2, 3, 4, 5, 7, 8]
