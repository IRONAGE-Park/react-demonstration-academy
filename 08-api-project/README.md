# 08 - 외부 `API`를 호출하여 `React.js`로 보여주기

> 2022.01.20(목)

## `Material UI` 라이브러리 `@mui/material` 설치

- 간단하게 `Material UI`를 사용할 수 있게 해주는 라이브러리로, `@emotion`를 정식 지원함.
- `@mui/material`과 `@emotion`을 설치.

```shell
npm install @mui/material @emotion/react @emotion/styled
```

또는

```shell
yarn add @mui/material @emotion/react @emotion/styled
```

## 외부 `API` 요청을 위해 네이버 개발자 센터 등록 및 키 발급

- [네이버 개발자 센터](https://developers.naver.com/main/)
- [네이버 영화 검색 API 문서](https://developers.naver.com/docs/search/movie/)

## `API` 키를 저장하는 방법

- `/.env`

  - 프로젝트의 환경 변수 등 민감한 정보를 저장하는 파일
  - `REACT_APP_`으로 시작하는 변수를 사용할 수 있음
  - [/.gitignore](../.gitignore)과 같이 저장소에 업로드 되지 않는 방법을 사용하여 관리
  - `React`에서는 `process.env.REACT_APP_이름`으로 접근할 수 있음
  - 해당 파일에 다음 내용 작성

  ```
  REACT_APP_NAVER_CLIENT_ID="<Client ID>"
  REACT_APP_NAVER_CLIENT_SECRET="<Client Secret>"
  ```

  - `<Client ID>`와 `<Client Secret>`에 네이버 개발자 센터에서 발급받은 키 입력

## `CORS` 문제를 임시로 해결하기 위한 방안

- `http-proxy-middleware` 모듈을 사용하여 해결할 수 있음

```shell
npm install http-proxy-middleware --save-dev
```

또는

```shell
yarn add -D http-proxy-middleware
```

- 모듈 설치 후 [`/src/setupProxy.js`](./src/setupProxy.js) 파일 생성 후 코드 작성
- 개발 서버 재실행

## 배열을 상태로 관리할 때 응용하기 좋은 내장 함수

- [`/useArray.js`](./useArray.js)

  - 배열을 다루는 예시 코드

- 추가: `Array.prototype.concat`
- 변경: `Array.prototype.map`
- 삭제: `Array.prototype.filter`

- 그 외 추가 계산을 위한 함수
  - `Array.prototype.reduce`, `Array.prototype.every`, `Array.prototype.some` 등

## `React.js` 및 개발 참고 자료

- [IT 개발자와 일할 때 필요한 모든 개발 지식 A to Z](https://www.grabbing.me/IT-A-to-Z-By-1e1fbc981b7c4c03ac44943085ac8304)
- [`MDN` `JavaScript` 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [`MDN` `CSS` 문서](https://developer.mozilla.org/ko/docs/Web/CSS)
- [`SCSS` 완전 정복](https://heropy.blog/2018/01/31/sass/)
- [`Codesandbox`](https://codesandbox.io/s/elastic-wescoff-e9g0p)
- [`React` 공식 문서](https://ko.reactjs.org/docs/getting-started.html)
- [`Velopert.log`](https://velopert.com/)
- [`Webpack` 공식 문서](https://webpack.js.org/configuration/externals/)
- [`Material-UI` 공식 문서](https://mui.com/getting-started/installation/)
- [`Redux` 문서](https://ko.redux.js.org/introduction/getting-started/)
  - [`Redux Toolkit` 공식 문서](https://redux-toolkit.js.org/)
- [`RxJS` 공식 문서](https://rxjs.dev/guide/overview)
- [Korea `HTML`](https://www.koreahtml5.kr/front/devSupport/frame/IntroView.do)
- [`Naver D2`](https://d2.naver.com/home)
- [`Kakao` 기술 블로그](https://tech.kakao.com/)
- [IT 기획 연구소](https://yslab.kr/category/%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%20%ED%88%B4%20Axure)
- [노마드 코더 Youtube](https://www.youtube.com/c/%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94NomadCoders)
- [우아한 테크 코스 Youtube](https://www.youtube.com/c/%EC%9A%B0%EC%95%84%ED%95%9CTech)

## 당장 참고하기 좋은 프로젝트

- `Todo List` 만들기
- 검색창 구현 및 `UX/UI`, 웹 접근성
- `Text Editor` 만들기
- 디자인 시스템 구현
- 외주 및 서비스 개발
- 클론 코딩(따라서 개발)

## 추후 `FE`를 위해 공부하면 좋은 것들

- `JavaScript`
- `TypeScript`
- `Webpack`
- 웹 접근성
- 웹, 브라우저 동작 원리
- 다른 `JavaScript` 프레임워크
- `Test` 코드
- 디자인 패턴
- 객체지향 디자인
- 함수형 프로그래밍
- 네트워크 통신

## 폴더 구조

- [`/src/App.js`](./src/App.js)

  - 프로젝트의 루트 컴포넌트

- [`/src/containers/MovieContainer.jsx`](./src/containers/MovieContainer.jsx)

  - `mount` 시에 외부 `API`를 호출하며, 응답 받을 때까지 로딩 상태 출력
  - 응답 받은 데이터를 상태로 관리하여 [`Movies`](./src/components/Movie.jsx) 컴포넌트 렌더링
  - 데이터 추가 요청, 변경, 삭제 역할을 수행하는 함수를 작성
  - 전체 선택할 수 있는 [`Checkbox`](./src/components/Checkbox.jsx) 컴포넌트 렌더링

- [`/src/components/RequestTest.jsx`](./src/components/RequestTest.jsx)

  - `XMLHttpRequest` 방식으로 요청 테스트하는 로직
  - `fetch API` 방식으로 요청 테스트하는 로직

- [`/src/components/Movie.jsx`](./src/components/Movie.jsx)

  - 외부 `API`를 통해 응답 받은 데이터를 렌더링하는 컴포넌트를 선언
  - 렌더링 하는 컴포넌트를 리스트를 `props`로 받아 반복하여 렌더링하는 컴포넌트 선언
  - 해당 컴포넌트의 불필요한 재렌더를 방지하기 위해 `memo` 함수를 적용한 컴포넌트 선언

- [`/src/apis/fetch.js`](./src/apis/fetch.js)

  - `fetch API`를 통해 외부 `API`에 데이터 요청하는 함수
  - `async await`를 사용해 콜백 함수 형태를 제거함
  - `process.env.REACT_APP_이름`으로 환경 변수 사용
  - `qs` 모듈을 사용해 `URL`에 쿼리 첨부하여 요청
