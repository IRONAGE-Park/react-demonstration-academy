# 06 - 컴포넌트 렌더링, 최적화 하기

> 2022.01.18(화)

## `Material UI` 라이브러리 `@mui/material` 설치

- 간단하게 `Material UI`를 사용할 수 있게 해주는 라이브러리로, `@emotion`를 정식 지원합니다.
- `@mui/material`과 `@emotion`을 설치합니다.

```shell
npm install @mui/material @emotion/react @emotion/styled
```

또는

```shell
yarn add @mui/material @emotion/react @emotion/styled
```

- [`@mui/material` 공식 웹사이트](https://mui.com/)
- [`@mui/material` 공식 문서](https://mui.com/getting-started/usage/)

## 재렌더와 실제 `DOM`에 리페인트 되는 것은 다름

- 재 렌더는 `Virtual DOM`에 가해지는 행위로 실제 `DOM`에 반영되지 않더라도 내부적으로 `React`가 렌더 함수를 호출합니다.
- 렌더 함수가 실행되어도 이전 `DOM`과 `Virtual DOM`이 다르지 않으면 리페인트 하지 않습니다.
- 따라서 리페인트가 안된다고 성능에 이슈가 발생하는 것이 아니므로 쓸데 없이 많은 렌더 함수를 호출하는 것 자체를 관리해야 합니다.

## `JavaScript`에서 `Array` 다루기

- [`/useArray.js`](./useArray.js)

  - 배열을 다루는 예시 코드

## `JavaScript`(`ES6`)의 `Spread` 연산자(전개 연산자)

- [MDN 문서 - 전개 구문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Velog - 전개 연산자](https://velog.io/@recordboy/%EC%A0%84%EA%B0%9C-%EC%97%B0%EC%82%B0%EC%9E%90Spread-Operator)

- `...` 연산을 사용하면 배열이나 객체의 요소를 펼칠 수 있습니다.
- 이를 사용하여 객체나 배열의 내용을 손 쉽게 복사할 수 있습니다.
- 이 프로젝트에서는 `FunctionCheckboxList`에서 하위 컴포넌트인 `FunctionCheckbox`로 이벤트 리스너 함수를 전달할 때, 배열의 값을 `map` 함수로 변경할 때 용이하게 사용하였습니다.

## `JavaScript`(`ES6`)의 `Destructuring` 연산자(구조 분해 할당, 비구조화 할당)

- [MDN 문서 - 구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Guidebook - 비구조화 할당](https://learnjs.vlpt.us/useful/06-destructuring.html)

- `const { }`, `const []` 연산을 사용하여 객체에서 특정 값만 가져올 수 있습니다.
- 이를 사용하여 객체나 배열의 내용 중 일부를 손 쉽게 가져올 수 있습니다.
- 객체의 경우 `const { property1, property2 }` 연산을 사용하면 전달받는 객체에 `property1`의 키를 가진 값과, `property2`의 키를 가진 값이 할당됩니다. 키의 이름이 객체에 존재하지 않으면 `undefined`가 할당됩니다.
- 배열의 경우 `const [name1, name2]` 연산을 사용하면 `name1`에 첫 번째 요소, `name2`에 두 번째 요소가 할당되며, 그 이상도 가능합니다.
- 이 프로젝트에서는 `FunctionCheckbox`에서 `props`를 가져올 때와, `useState` 함수에서 상태와 `setState` 함수를 가져올 때 사용합니다.

## 폴더 구조

- [`/src/index.js`](./src/index.js)

  - `CRA` 프로젝트의 엔트리 포인트
  - 프로젝트의 루트 컴포넌트인 [`App.js`](./src/App.js)를 렌더링하고, `GlobalStyle`을 적용

- [`/src/index.style.js`](./src/index.style.js)

  - 프로젝트의 애플리케이션에 전역으로 적용될 `CSS`를 `@emotion`을 통해 작성

- [`/src/App.js`](./src/App.js)

  - 프로젝트의 루트 컴포넌트
  - 클래스형 컴포넌트와 함수형 컴포넌트 예시를 선택적으로 렌더링
  - [`FunctionCheckboxList`](./src/components/FunctionCheckbox.jsx) 컴포넌트 렌더링
  - [`App`](./src/App.js) 좌측 상단에 [`LifeCycleCheck`](./src/components/LifeCycleCheck.jsx) 컴포넌트 렌더 유무를 클릭하여 변경할 수 있는 알림 텍스트를 렌더링
  - [`LifeCycleCheck`](./src/components/LifeCycleCheck.jsx) 컴포넌트 조건부 렌더링
  - [`LifeCycleCheck`](./src/components/LifeCycleCheck.jsx) 렌더 유무를 `useState`를 통해 상태로 저장
  - [`LifeCycleCheck`](./src/components/LifeCycleCheck.jsx) 렌더 유무를 변경하는 함수 `onRender` 선언

- [`/src/App.style.js`](./src/App.style.js)

  - 루트 컴포넌트에서 사용할 스타일 컴포넌트 정의
  - [`App`](./src/App.js)의 큰 레이아웃(중앙 정렬)과 배경색
  - 좌측 상단 알림 텍스트 스타일 정의

- [`/src/components/LifeCycleCheck.jsx`](./src/components/LifeCycleCheck.jsx)

  - `React`의 `Life Cycle`에 대해 탐구하는 컴포넌트
  - 렌더 함수의 간략한 실행 매커니즘과 `useState`, `useEffect`를 활용한 예시

- [`/src/components/ClassCheckbox.jsx`](./src/components/ClassCheckbox.jsx)

  - 클래스형 컴포넌트의 렌더 코드

- [`/src/components/FunctionCheckbox.jsx`](./src/components/FunctionCheckbox.jsx)

  - 함수형 컴포넌트의 렌더 코드
  - `props`와 렌더링의 관계, 전달 방법
  - `Array`로 상태를 선언하고, `Array`인 상태를 불변하게 변경하는 방법
  - `Array` 연산으로 전체 선택을 구현
  - `useState`, `useCallback`, `useMemo` 훅 메서드로 상태 관리하기
  - `Array` 데이터를 반복하여 컴포넌트 렌더링
  - `memo` 함수를 통해 `props` 의외의 변화에 재렌더 하지 않는 컴포넌트 작성

- [`/src/components/Checkbox.style.js`](./src/components/Checkbox.style.js)

  - `Checkbox` 컴포넌트에서 사용할 스타일 컴포넌트 정의
  - 리스트를 출력할 때 사용하기 좋은 `SCSS` 문법
