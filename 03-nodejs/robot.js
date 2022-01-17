/**
 * robotjs 모듈을 통해 sin 그래프를 따라 마우스 커서를 이동시키는 소스 코드
 */
const robot = require("robotjs");
// robotjs 모듈을 불러온다.
// 이름은 변수이기 때문에 꼭 robot이 아니어도 상관없다.
// (하지만 식별력, 가독성을 위해 모듈 이름과 동일하게 사용한다.)

robot.setMouseDelay(1);
// 마우스의 지연 시간을 설정한다.
// 이 설정으로 속도를 변경하는 효과를 낼 수 있다.

const twoPI = Math.PI * 2.0;
// Math 빌트인 객체에는 다양한 수학적 상수, 메서드들이 포함되어 있다.
// Math.PI는 파이 값을 가져온다.

const screenSize = robot.getScreenSize();
// 현재 모니터의 크기를 가져온다.

const width = screenSize.width;
const height = screenSize.height / 2 - 10;
// 현재 스크린의 넓이와 스크린 중간 높이를 구한다.

for (let x = 0; x < width; x++) {
  // 모니터의 넓이만큼 반복적으로 마우스를 이동시킨다.

  y = height * Math.sin((twoPI * x) / width) + height;
  // 현재 x 위치에 해당하는 sin 그래프의 y 값을 가져온다.

  robot.moveMouse(x, y);
  // robotjs 모듈의 moveMouse 함수는 인수로 넘어간 x, y 위치로 마우스를 이동시킨다.
}
