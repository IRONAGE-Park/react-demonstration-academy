const numberArray = [1, 2, 3, 4, 5];
// 임의의 배열 선언

const addedArray = numberArray.concat(6);
// numberArray 배열에 6을 추가한 새로운 배열 반환

const twoAddedArray = numberArray.concat(7, 8);
// numberArray 배열에 7과 8을 추가한 새로운 배열 반환

console.log(numberArray); // [1, 2, 3, 4, 5]
console.log(addedArray); // [1, 2, 3, 4, 5, 6]
console.log(twoAddedArray); // [1, 2, 3, 4, 5, 7, 8]

const filterArray = numberArray.filter((number, index, arr) => number < 4);
// numberArray 배열에서 4보다 작은 값들을 새로운 배열로 생성하여 반환

const twoFilterArray = numberArray.filter((number) => number > 5);
// numberArray 배열에서 5보다 큰 값들을 새로운 배열로 생성하여 반환

console.log(numberArray); // [1, 2, 3, 4, 5]
console.log(filterArray); // [1, 2, 3]
console.log(twoFilterArray); // []