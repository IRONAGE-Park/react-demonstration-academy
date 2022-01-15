/**
 * fs, path 모듈을 이용하여 동기적으로 경로를 설정하고, 파일을 읽고 쓰는 실습 코드
 */
const fs = require("fs");
const path = require("path");
// fs, path 모듈을 불러온다.
// 이름은 const로 선언한 변수이기 때문에 꼭 fs, path가 아니어도 상관없다.
// (하지만 식별력, 가독성을 위해 모듈 이름과 동일하게 사용한다.)

const sync_file_path = path.join(__dirname, "sync_test.txt");
// path에 있는 join 함수로 작성할 파일의 경로(파일 이름 포함)을 얻는다.

try {
  fs.writeFileSync(sync_file_path, new Date().toLocaleString());
  // 동기적으로 위에서 얻은 경로에 파일을 생성하고 현재 시간을 한국식 문자열로 변경한 데이터를 작성한다.
} catch (sync_err) {
  // 비동기와는 다르게 err 변수를 넘겨 받을 수가 없는데, 동기적 호출은 에러 발생 시 예외 처리가 안 되어 있다.
  // 때문에 try ... catch 를 사용하여 에러 처리를 해야 한다.
  console.log("write Error", sync_err);
}

try {
  const sync_data = fs.readFileSync(sync_file_path, {
    encoding: "utf8",
  });
  // 동기적으로 위에서 얻은 경로에 있는 파일을 읽어온 후 변수에 반환한다.(인코딩은 utf8로 한다.)

  console.log("sync read file:", sync_data);
  // 읽기 성공 시읽어온 파일을 출력한다.
} catch (sync_err) {
  // 마찬가지로 동기식이므로 에러 처리가 안 되어 있다.
  console.log("read Error", sync_err);
}
