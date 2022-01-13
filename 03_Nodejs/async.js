/**
 * fs, path 모듈을 이용하여 비동기적으로 경로를 설정하고, 파일을 읽고 쓰는 실습 코드
 */
const fs = require("fs");
const path = require("path");
// fs, path 모듈을 불러온다.
// 이름은 const로 선언한 변수이기 때문에 꼭 fs, path가 아니어도 상관없다.
// (하지만 식별력, 가독성을 위해 모듈 이름과 동일하게 사용한다.)

const file_path = path.join(__dirname, "test.txt");
// path에 있는 join 함수로 작성할 파일의 경로(파일 이름 포함)을 얻는다.

// 비동기적으로 위에서 얻은 경로에 파일을 생성하고 현재 시간을 한국식 문자열로 변경한 데이터를 작성한다.
// 그리고 에러 값을 받아올 콜백 함수를 마지막 인수로 넘겨준다.
fs.writeFile(file_path, new Date().toLocaleString(), (err) => {
  // writeFile 함수의 콜백 함수는 쓰기의 실행이 완료되었을 때 실행된다.
  // 인수로 넘어오는 err(변수 명이므로 이름 변경 가능)는 에러 발생 유무를 나타내며,
  // 에러가 발생하지 않았으면 null이 넘어온다.
  if (err !== null) {
    // null이 아니면 에러가 발생함.
    console.log("write Error", err);
  }

  const readCallback = function (err, data) {
    // readFile 함수의 콜백 함수는 읽기의 실행이 완료되었을 때 실행된다.
    // 인수로 넘어오는 err과 data(변수 명이므로 이름 변경 가능)는 각각 에러 발생 유무와 읽기 성공 시 읽은 데이터를 나타내며,
    // 에러가 발생하지 않았으면 null이 넘어온다.
    if (err) {
      // null이 아니면 에러가 발생함.
      console.log("read Error", err);
    } else {
      // 읽기 성공 시 읽어온 파일을 출력한다.
      console.log("read file:", data);
    }
  };
  // readFile 함수의 마지막 인수인 콜백 함수를 외부에서 선언했다.

  fs.readFile(
    file_path,
    {
      encoding: "utf8",
    },
    readCallback
  );
  // 비동기적으로 위에서 얻은 경로에 있는 파일을 읽어온 후 변수에 반환한다.(인코딩은 utf8로 한다.)
});
