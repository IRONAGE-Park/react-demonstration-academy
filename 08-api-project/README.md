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

## `useState`의 동작 순서

- `useState`로 반환받은 `setter` 함수는 완전히 동기적으로(순차적으로) 동작하지 않습니다.
- `setState` 함수에 값을 매개변수로 넣어서 호출하면, 이는 `React`에 해당 값으로 변경하라는 동작을 요청하는 행위와 같습니다.

  - 따라서 `setState`가 연속해서 호출되면, `React`에서 첫 번째 동작 요청 행위와, 두 번째 동작 요청 행위가 모두 실행되지만 `setState`에 넘어간 값이 한 상태를 기준으로 동작하기 때문에, 두 번쨰 동작 요청 행위만 실행된 것으로 판단합니다.

- 이에 `setState` 함수에 콜백 함수를 매개변수로 넣어서 호출하는 방법이 있습니다.
  - 콜백 함수의 인수로는 이전 상태가 넘어오며, 이전 상태를 통해 다음 상태를 연산하는 로직을 여러 번 호출하여도 정상적으로 동작합니다.
  - 이를 `Functional Update`라고 합니다.

> 이는 상태를 유지해야 할 권리를 사용자가 아닌 `React`로 전환할 수 있게 만드는 기법입니다.

> 또한 `setState`에 값을 매개변수로 넣으면, `React`에서 기존 값과 비교하는 연산이 발생할 수 있기 때문에 성능적인 측면에서 콜백 함수를 매개변수로 넣는 것이 유리합니다.

### 참고

- [`React` `Hook` `setState`에 함수 전달](https://developer-talk.tistory.com/m/252)
- [`/src/infos/FunctionalUpdate.jsx`](./src/infos/FunctionalUpdate.jsx)
- [`/src/containers/MovieSetCallback.jsx`](./src/containers/MovieSetCallback.jsx)

## `input` 요소의 관리

- `input` 요소를 상태(`state`)로 관리하여 변화마다 리렌더링 할 경우, 항상 최선의 선택은 아닙니다.
- 꼭 실시간으로 변화를 감지해야 하는 경우가 아니라면, 값이 변경될 때마다 다른 컴포넌트의 리렌더 로직에도 영향을 끼치는 `input` 요소는 성능 저하로 작용하기 쉽습니다.
- 이런 경우 `form` 태그의 `onSubmit`를 요소를 사용한 후 넘어오는 이벤트 객체 `e`로부터 `input` 요소를 추출하여 값에 접근하는 방식이나, `useRef`를 사용하는 등의 다른 방식을 통해서 충분히 구현할 수 있습니다.

### 참고

- [`/src/infos/InputManager.jsx`](./src/infos/InputManager.jsx)

## `useCallback`, `useEffect`, `useMemo`의 효율성

- 불필요한 데이터, 함수의 생성과, 값의 변화를 감지하는 점에서 굉장히 용이하고 효율적으로 사용할 수 있는 장점이 있습니다.
- 하지만 이를 과다하게 사용할 경우 `React`에서 값을 비교, 체크해야할 요소가 늘어나 오히려 그 요소를 비교 연산하는데 시간과 비용을 더 많이 사용하게 되는 경우가 발생할 수 있습니다.

> 항상 적절히 사용해야 하며, 특히 값의 변화를 감지하고 새로운 로직을 작성하는 `useEffect`의 사용을 최소화 해야 합니다.

### 참고

- [`React`에서 `Hook`의 올바른 사용](https://sangcho.tistory.com/entry/React-useEffect-4Tip)
- [`Hook`이 실패한 설계인 이유?](<https://jong-hui.github.io/devlog/2021/01/08/(React)%ED%9B%85%EC%9D%B4-%EC%8B%A4%ED%8C%A8%ED%95%9C-%EC%84%A4%EA%B3%84%EC%9D%B8-%EC%9D%B4%EC%9C%A0-4%EA%B0%80%EC%A7%80/>)

## 폴더 구조

- [`/src/App.js`](./src/App.js)

  - 프로젝트의 루트 컴포넌트

- [`/src/containers/MovieContainer.jsx`](./src/containers/MovieContainer.jsx)

  - `mount` 시에 외부 `API`를 호출하며, 응답 받을 때까지 로딩 상태 출력
  - 응답 받은 데이터를 상태로 관리하여 [`Movies`](./src/components/Movie.jsx) 컴포넌트 렌더링
  - 데이터 추가 요청, 변경, 삭제 역할을 수행하는 함수를 작성
  - 전체 선택할 수 있는 [`Checkbox`](./src/components/Checkbox.jsx) 컴포넌트 렌더링

- [`/src/containers/MovieSetCallback.jsx`](./src/containers/MovieSetCallback.jsx)

  - [`MovieContainer`](./src/containers/MovieContainer.jsx) 컨테이너 컴포넌트에서, 상태를 관리하는 `setMovieList` 함수에 값이 아닌 콜백 함수를 매개변수로 넘기는 버전
  - 콜백 함수로 `setState`를 사용하는 방법과 효율성 참고

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

- [`/src/infos/MovieSetCallback.jsx`](./src/infos/MovieSetCallback.jsx)

  - [`MovieContainer`](./src/containers/MovieContainer.jsx) 컴포넌트 컨테이너의 `setMovieList`에 값을 매개변수로 넣는 방식이 아닌 콜백 함수를 매개변수로 넣는 방식을 채택한 코드
  - 용이성을 표현

- [`/src/infos/FunctionalUpdate.jsx`](./src/infos/FunctionalUpdate.jsx)

  - `setState`의 동작 방식과 값으로 `Update`하는 것과 `Functional Update`의 차이를 표현한 코드 작성

- [`/src/infos/InputManager.jsx`](./src/infos/InputManager.jsx)

  - `input` 요소를 상태로 관리하는 방식과, 개선할 수 있는 방안의 대략적 소개
