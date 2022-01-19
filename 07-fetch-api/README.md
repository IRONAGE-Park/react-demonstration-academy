# 07 - `fetch API`를 통해 외부 `API` 호출하기

> 2022.01.19(수)

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

## `Promise`와 `async` / `await`

- `Promise`는 최신 문법으로 비동기를 사용하기 위해 정한 비동기 작성법
- `async` / `await`는 `Promise` 사용 시 발생하는 콜백 지옥(중첩) 코드를 해결하기 위해 동기 코드인 것처럼 보이게 하는 키워드
- `async` 함수는 `Promise`를 반환하는 함수로 바뀌게 됨

### 참고

- [`MDN` - `Promise`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`MDN` - `async`와 `await`](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Async_await)
- [`Promise`와 `async`, `await` 차이](https://velog.io/@pilyeooong/Promise%EC%99%80-asyncawait-%EC%B0%A8%EC%9D%B4%EC%A0%90)
- [`async`와 `await`](https://ko.javascript.info/async-await)

## 폴더 구조

- [`/src/App.js`](./src/App.js)

  - 프로젝트의 루트 컴포넌트
  - `process.env`의 값 확인
  - [`RequestTest`](./src/components/RequestTest.jsx) 컴포넌트 렌더링
  - [`MovieContainer`](./src/containers/MovieContainer.jsx) 컴포넌트 렌더링

- [`/src/App.style.js`](./src/App.style.js)

  - 루트 컴포넌트에서 사용할 스타일 컴포넌트 정의
  - [`App`](./src/App.js)의 큰 레이아웃(중앙 정렬)과 배경색

- [`/src/containers/MovieContainer.jsx`](./src/containers/MovieContainer.jsx)

  - `mount` 시에 외부 `API`를 호출하며, 응답 받을 때까지 로딩 상태 출력
  - 응답 받은 데이터를 상태로 관리하여 [`Movies`](./src/components/Movie.jsx) 컴포넌트 렌더링

- [`/src/components/RequestTest.jsx`](./src/components/RequestTest.jsx)

  - `XMLHttpRequest` 방식으로 요청 테스트하는 로직
  - `fetch API` 방식으로 요청 테스트하는 로직

- [`/src/components/Movie.jsx`](./src/components/Movie.jsx)

  - 외부 `API`를 통해 응답 받은 데이터를 렌더링하는 컴포넌트를 선언
  - 렌더링 하는 컴포넌트를 리스트를 `props`로 받아 반복하여 렌더링하는 컴포넌트 선언
  - 해당 컴포넌트의 불필요한 재렌더를 방지하기 위해 `memo` 함수를 적용한 컴포넌트 선언

- [`/src/components/Loading.jsx`](./src/components/Loading.jsx)

  - `@mui/material`의 컴포넌트를 활용하여 로딩 상태를 렌더링하는 컴포넌트 선언
  - 컴포넌트의 `props`로 `isLoading`을 전달하여 로딩 상태의 렌더링 유무를 결정

- [`/src/apis/fetch.js`](./src/apis/fetch.js)

  - `fetch API`를 통해 외부 `API`에 데이터 요청하는 함수
  - `async await`를 사용해 콜백 함수 형태를 제거함
  - `process.env.REACT_APP_이름`으로 환경 변수 사용
  - `Promise`와 `async` / `await`를 비교한 소스 코드 작성
