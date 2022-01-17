# 03 - `Node.js`, `npm`, `yarn`의 기본

> 2022.01.12(수)

## 터미널, CMD 활용법

- 터미널, CMD에서의 명령어는 현재 위치(폴더)를 기준으로 실행됩니다.
- 터미널, CMD를 실행 시킨 당시의 위치(폴더)는 내 문서(사용자 폴더)입니다.
- `cd <폴더 경로>` 명령어는 해당 경로(폴더)로 현재 터미널, CMD의 위치를 이동시킵니다.
  > 여기서 경로는 절대 경로, 상대 경로 둘 다 가능합니다.
- 실행 시킨 당시의 위치(내 문서, 사용자 폴더)에서 `cd Desktop` 명령어를 입력하면 바탕화면이 현재 위치로 이동(변경)됩니다.
- `mkdir <폴더 이름>` 명령어는 현재 위치에서 입력한 이름의 폴더를 만드는 명령어입니다.
  > make directory.  
  > 여기서 경로는 절대 경로, 상대 경로 둘 다 가능합니다.

### 참고

- [절대 경로와 상대 경로](https://velog.io/@ryurbsgks5114/%EC%A0%88%EB%8C%80%EA%B2%BD%EB%A1%9C%EC%99%80-%EC%83%81%EB%8C%80%EA%B2%BD%EB%A1%9C)
- [`Windows` 기본 명령어](https://library1008.tistory.com/42)
- [유닉스(`macOS`, `linux`) 기본 명령어](https://cailisin.tistory.com/127)

## `node` 명령어

- `node <.js 파일 경로>` 명령어는 해당 `JavaScript` 파일을 실행(`Node.js` 프로세스 생성)시키는 명령어입니다.
  > 여기서 경로는 절대 경로, 상대 경로 둘 다 가능합니다.

## `npm` 명령어

- `npm init` 명령어는 현재 위치(폴더)를 `npm`으로 관리하는 프로젝트 폴더로 설정해줌.
- `npm install`, `npm uninstall` 명령어를 통해 `npm` 서버로부터 패키지를 받아오거나(현재 프로젝트에 등록) 삭제할 수 있음.
- 현재 `npm` 프로젝트의 정보는 `package.json`에 명시되어 있음.
- `npm run <커스텀 명령어>`를 사용해 `package.json`의 `scripts` 영역 안의 명령어를 실행할 수 있음.

> 현재 의존 중인 모듈인 [`robotjs`](http://robotjs.io/docs/building)는 설치 시 요구 사항이 존재합니다.  
> `robotjs`의 문서에 접속하시면 요구 사항을 확인하실 수 있습니다.
>
> - `Windows`
>   - `Visual Studio 2013` 이상
>   - `Python v2.7.3` 이상, `v3.x.x` 버전(3 버전 이상)은 미지원
> - `macOS`
>   - `Xcode Command Line Tools.`
> - `linux`
>   - `Python v2.7.3` 이상, `v3.x.x` 버전(3 버전 이상)은 미지원
>   - `gcc`와 같은 `C/C++` 컴파일러

## 프로젝트 설명

- 프로젝트를 다운 받으신 후에는 `/node_modules`가 포함되어 있지 않기 때문에 `npm install`을 입력하여 의존 중인 모듈을 다운로드 받습니다.
- `Node.js`의 실행 방법과 기본 객체 `process`, 기본 모듈(`fs`, `path`) 그리고 `npm` 모듈인 `robotjs`를 테스트하는 프로젝트입니다.

### 명령어

- `npm run start`(`npm start`) 명령어는 `process.js` 파일을 실행합니다.
- `npm run async` 명령어는 `async.js` 파일을 실행합니다.
- `npm run sync` 명령어는 `sync.js` 파일을 실행합니다.
- `npm run robot` 명령어는 `robot.js` 파일을 실행합니다.
- `npm run test` 명령어는 `"Error: no test specified"`를 출력합니다.

## 폴더 구조

- [`/process.js`](./process.js)

  - `Node.js`의 객체인 `process` 실습 코드

- [`/async.js`](./async.js)

  - `path` 모듈을 통해 경로를 생성하는 방법
  - `fs` 모듈을 사용하여 비동기적으로 파일 읽기, 쓰기 함수를 호출하고, 결과를 콜백 함수로 받는 소스 코드

- [`/sync.js`](./sync.js)

  - `path` 모듈을 통해 경로를 생성하는 방법
  - `fs` 모듈을 사용하여 동기적으로 파일 읽기, 쓰기 함수를 호출하고, 반환 값으로 결과를 받는 소스 코드

- [`/robotjs.js`](./async.js)

  - `robotjs` 외부 모듈을 이용해 `sin` 그래프를 따라서 마우스 커서를 이동시키는 소스 코드
  - `/node_modules` 폴더에 `robotjs` 모듈이 설치되어 있지 않으면 실행 불가
