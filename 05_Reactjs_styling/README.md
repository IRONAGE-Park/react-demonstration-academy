# 05 - `React.js`로 스타일링 하기

> 2022.01.17(월)

## `CSS`(`Cascading Style Sheets`)이란?

- `HTML`이나 `XML`, `SVG`로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어.
- `HTML`과는 달리 문법에 엄격하여, 하나의 실수로 전체 `CSS` 파일 로드 불가할 수 있음.

### 자주 쓰는 `CSS` 요소

- `display`
- `position`
  - `top`, `left`, `bottom`, `right`
- `width`, `height`
- `color`, `font-weight`, `font-size`
- `background-color`, `background-image`
- `padding`, `margin`
- `border`, `border-radius`, `box-shadow`
- `transform`
- `transition`

### 참고

- [CSS 선택자의 이해](https://www.nextree.co.kr/p8468/)
- [TCP SCHOOL CSS 강좌](http://www.tcpschool.com/css/intro)
- [생활코딩 CSS 강좌](https://opentutorials.org/course/2418)

## `React.js`의 네이밍

- `React.js`에서는 일반적인 `HTML`, `JavaScript`에서 사용하는 어트리뷰트, 프로퍼티의 이름을 사용하지 않고 카멜 케이스(`camelCase`)의 이름을 사용함.
- 컴포넌트의 이름의 경우 파스칼 케이스(`PascalCase`)를 사용함.
- 또한 `JavaScript` 예약어(`class`, `for` 등)의 경우, 이름을 그대로 사용하지 않음.

### 참고

- [이름 표기법](https://velog.io/@leyuri/%ED%91%9C%EA%B8%B0%EB%B2%95-%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC-%EC%BC%80%EC%9D%B4%EC%8A%A4-%ED%8C%8C%EC%8A%A4%EC%B9%BC-%EC%BC%80%EC%9D%B4%EC%8A%A4-%EC%B9%B4%EB%A9%9C-%EC%BC%80%EC%9D%B4%EC%8A%A4)

## `React.js`에서 스타일 작성법

### 스타일 어트리뷰트

- `HTML`에서 작성하는 것처럼 `style` 어트리뷰트를 사용하지만, 문자열이 아닌 `React.js`의 프로퍼티 네이밍 규칙을 준수하는 `JavaScript` 객체를 전달.

### `CSS in JavaScript`

- `JavaScript`에서 `CSS` 코드 작성 사용.
- `styled-components`와 `@emotion`이 가장 유명한 라이브러리.

#### `@emotion` 설치

```shell
npm install @emotion/react @emotion/styled
```

또는

```shell
yarn add @emotion/react @emotion/styled
```

- 설치 명령어(`install`, `add`)를 입력 후 모듈을 여러 개 나열하면 한 번에 모두 설치.
- `package.json`의 `dependencies`에 해당 모듈의 이름이 있는 경우 `npm innstall` 혹은 `yarn` 명령어만 입력.

### `CSS, SCSS` 로드

- `import "<CSS 파일 경로>";`를 통해 `CSS` 파일을 불러올 수 있음.

  - 이는 `CRA` 환경에서 암묵적으로 `webpack`이라는 도구를 통해 `css-loader`를 사용하기 때문.

- `import <스타일 변수> from "<CSS module 파일 경로>";`를 통해 `CSS Module` 파일을 불러올 수 있음.

  - `CSS`의 클래스 이름이 중첩되는 것을 방지하기 위해 중간에 임의의 이름을 추가해줌.

- `SCSS`는 `node-sass` 모듈이 설치되어 있어야 불러올 수 있음.

  ```shell
  yarn add node-sass
  ```

  - 그리고 위의 `CSS`, `CSS Module` 불러오는 것과 같이 `SCSS` 파일 불러올 수 있음.
