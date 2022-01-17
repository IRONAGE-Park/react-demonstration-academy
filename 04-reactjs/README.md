# 04 - `React.js`란?

> 2022.01.13(목)

## `npx`를 통한 `Create React App`(`CRA`) 구성

- 터미널, CMD에서 프로젝트 폴더를 생성할 위치(예시는 바탕화면)에서 다음 명령어를 실행합니다.

```shell
npx create-react-app <프로젝트 명>
```

또는

```shell
npm init react-app <프로젝트 명>
```

또는

```shell
yarn create react-app <프로젝트 명>
```

- 세 명령어 중 하나를 실행하면 현재 위치에서 <프로젝트 명>에 해당하는 폴더에 `CRA` 환경이 구성됩니다.

## `npm` 혹은 `yarn`을 통해 개발 서버 실행

- `cd <프로젝트 명>`을 통해 프로젝트 폴더로 이동한 후, `npm start` 혹은 `yarn start`를 입력하면 `localhost:3000`으로 브라우저가 열리면서 `CRA` 프로젝트의 개발 환경이 실행됩니다.
- 개발 환경은 `localhost:3000`에 개발 서버를 열고, `react-hot-loader`를 통해 프로젝트 [`/src`](./src) 폴더 내의 파일이 수정되면 새로고침합니다.
- `localhost:3000`에서 응답 받는 `HTML` 파일은(브라우저로 접속하는 행위는 `GET` 방식으로 요청하는 행위와 같으므로) [`/public`](./public) 폴더 내의 [`index.html`](./public/index.html)에, [`/src`](./src) 폴더 내의 있는 [`index.js`](./src/index.js) 파일을 임시 빌드한 `JavaScript` 코드를 주입한 `HTML` 파일입니다.

> `Node.js`와 `npm` 그리고 `yarn`의 버전이 제각각인 경우 `yarn`과 제대로 호환되지 않을 수 있습니다.  
> 이 경우를 방지하기 위해, 가급적 최신 버전을 사용하시는 것이 좋습니다.

## 프로젝트 설명

- `CRA` 프로젝트를 설치해보고, 기본적인 `JSX` 문법과 컴포넌트 렌더링, 조건부 렌더링 방법을 작성하여 보는 프로젝트입니다.
- 프로젝트의 엔트리 포인트(`entry point`, 시작점)은 [`/src/index.js`](./src/index.js)입니다.
- [`/public`](./public) 폴더에는 프로젝트의 정적 파일(`HTML`, `CSS`, `JavaScript`)가 포함되는 폴더입니다.
  - `React.js`와 관련이 없는 추가 정적 파일은 여기에 추가하여 사용하면 됩니다.
- [`/src`](./src) 폴더에는 프로젝트의 개발 소스 코드(`JavaScript`)가 포함되는 폴더입니다.
  - 개발 서버가 실행되면 해당 파일의 변화를 감지하여 새로고침하며, 후에 빌드/배포될 때 내부 파일이 하나의 파일로 묶여(번들링) [`index.html`](./public/index.html)에 주입하게 됩니다.

### 명령어

- `npm run start`(`npm start`, `yarn start`) 명령어는 현재 프로젝트의 `React` 개발 서버를 실행합니다.
- `npm run build`(`yarn build`) 명령어는 현재 프로젝트를 빌드하여 배포 가능한 파일을 생성합니다.
- `npm run test`(`yarn test`) 명령어는 현재 프로젝트에 테스트 코드([`/src/App.test.js`](./src/App.test.js))를 실행합니다.
- `npm run eject`(`yarn eject`) 명령어는 현재 프로젝트의 숨겨져 있는 구성 파일을 꺼냅니다.(취소하기 힘듭니다.)

## 폴더 구조

- [`/src/index.js`](./src/index.js)

  - `CRA` 프로젝트의 엔트리 포인트
  - [`index.css`](./src/index.css) 파일을 로드하여 스타일 적용
  - 프로젝트의 루트 컴포넌트인 [`App.js`](./src/App.js)를 렌더링

- [`/src/index.css`](./src/index.css)

  - 전역 `CSS` 코드

- [`/src/App.js`](./src/App.js)

  - 프로젝트의 루트 컴포넌트
  - [`App.css`](./src/App.css) 파일을 로드하여 스타일 적용
  - `JSX` 문법을 사용해보고, 여러 가지 방법으로 렌더링
  - [`InputComponent`](./src/InputComponent.jsx) 컴포넌트를 닫힌 태그 기법으로, [`ConditionRender`](./src/ConditionRender.jsx)를 열린 태그 기법으로 작성
  - [`logo.svg`](./src/logo.svg) 파일을 불러옴(불러온 로고는 경로를 나타내는 문자열로 치환)

- [`/src/App.css`](./src/App.css)

  - [`App`](./src/App.js) 컴포넌트에 적용할 `CSS` 코드

- [`/src/InputComponent.js`](./src/InputComponent.jsx)

  - `input` 요소를 다루고, `onChange` 이벤트를 통해 `value`가 어떻게 변하는지 확인하는 컴포넌트

- [`/src/ConditionRender.js`](./src/ConditionRender.jsx)

  - 삼항 연산자, `&&` 연산자, `||` 연산자를 활용하여 조건부 렌더링하는 컴포넌트
