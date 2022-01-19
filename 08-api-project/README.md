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

  - 배열 내장 함수 `concat`, `filter`을 다루는 예시 코드

- 추가: `Array.prototype.concat`
- 변경: `Array.prototype.map`
- 삭제: `Array.prototype.filter`

- 그 외 추가 계산을 위한 함수
  - `Array.prototype.reduce`, `Array.prototype.every`, `Array.prototype.some` 등

## 폴더 구조

- [`/src/App.js`](./src/App.js)

  - 프로젝트의 루트 컴포넌트

- [`/src/containers/MovieContainer.jsx`](./src/containers/MovieContainer.jsx)

  - `mount` 시에 외부 `API`를 호출하며, 응답 받을 때까지 로딩 상태 출력
  - 응답 받은 데이터를 상태로 관리하여 [`Movies`](./src/components/Movie.jsx) 컴포넌트 렌더링
  - 데이터 추가 요청, 변경, 삭제 역할을 수행하는 함수를 작성
  - 전체 선택할 수 있는 [`Checkbox`](./src/components/Checkbox.jsx) 컴포넌트 렌더링

- [`src/containers/MovieContainer.style.js`](./src/containers/MovieContainer.style.js)

  - [`MovieContainer`](./src/containers/MovieContainer.jsx)의 전체 선택 영역 스타일 컴포넌트를 선언

- [`/src/components/Movie.jsx`](./src/components/Movie.jsx)

  - 외부 `API`를 통해 응답 받은 데이터를 렌더링하는 컴포넌트를 선언
  - 렌더링 하는 컴포넌트의 리스트를 `props`로 받아 반복하여 렌더링하는 컴포넌트 선언
  - 해당 컴포넌트의 불필요한 재렌더를 방지하기 위해 `memo` 함수를 적용한 컴포넌트 선언
  - 상위에서 `checked`와 `checked`를 변경할 `onChange` 함수를 받아와 이를 표현하고 이벤트 리스너 등록하는 [`Checkbox`](./src/components/Checkbox.jsx) 컴포넌트를 렌더
  - `Movie` 데이터의 `title` 프로퍼티의 값 내부에 `<b></b>` 태그가 삽입되어 있는데, 그냥 렌더링하면 태그의 이름이 그대로 출력되므로, `HTML` 요소로 표현하기 위해 `dangerouslySetInnerHTML` `props`로 전달

- [`/src/components/Movie.style.js`](./src/components/Movie.style.js)

  - [`Movie`](./src/components/Movie.jsx)와 리스트를 감싸는 스타일을 지정하는 컴포넌트와, 그 내부에 [`Checkbox`](./src/components/Checkbox.jsx) 컴포넌트의 위치를 잡는 스타일 컴포넌트 선언

- [`/src/components/Checkbox.jsx`](./src/components/Checkbox.jsx)

  - 체크박스 역할을 하는 컴포넌트 선언

- [`/src/components/Checkbox.style.js`](./src/components/Checkbox.style.js)

  - 체크박스의 스타일을 지정하기 위해 `@mui/material`의 `Checkbox`에 스타일을 적용한 컴포넌트 선언

- [`/src/components/AppendButton.jsx`](./src/components/AppendButton.jsx)

  - 영화 목록 추가 요청하는 함수를 실행할 버튼 컴포넌트 선언

- [`/src/components/AppendButton.style.js`](./src/components/AppendButton.style.js)

  - 버튼의 스타일을 지정하기 위해 `@mui/material`의 `ButtonBase`에 스타일을 적용한 컴포넌트 선언

- [`/src/components/DeleteButton.jsx`](./src/components/DeleteButton.jsx)

  - checked 상태인 영화 목록 삭제하는 함수를 실행할 버튼 컴포넌트 선언

- [`/src/components/DeleteButton.style.js`](./src/components/DeleteButton.style.js)

  - 버튼의 스타일을 지정하기 위해 `@mui/material`의 `ButtonBase`에 스타일을 적용한 컴포넌트 선언

- [`/src/apis/fetch.js`](./src/apis/fetch.js)

  - `fetch API`를 통해 외부 `API`에 데이터 요청하는 함수
  - `async await`를 사용해 콜백 함수 형태를 제거함
  - `process.env.REACT_APP_이름`으로 환경 변수 사용
  - `qs` 모듈을 사용해 `URL`에 쿼리 첨부하여 요청
