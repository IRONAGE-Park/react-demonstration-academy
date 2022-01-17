# 05 - `React.js`로 스타일링 하기

> 2022.01.17(월)

## `CSS`(`Cascading Style Sheets`)이란?

- `HTML`이나 `XML`, `SVG`로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어입니다.
- `HTML`과는 달리 문법에 엄격하여, 하나의 실수로 전체 `CSS` 파일 로드 불가할 수 있습니다.

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

## `React`의 네이밍

- `React`에서는 일반적인 `HTML`, `JavaScript`에서 사용하는 어트리뷰트, 프로퍼티의 이름을 사용하지 않고 카멜 케이스(`camelCase`)의 이름을 사용합니다.
- 컴포넌트의 이름의 경우 파스칼 케이스(`PascalCase`)를 사용합니다.
- 또한 `JavaScript` 예약어(`class`, `for` 등)의 경우, 이름을 그대로 사용하지 않고 변환된 이름을 사용합니다.

### 참고

- [이름 표기법](https://velog.io/@leyuri/%ED%91%9C%EA%B8%B0%EB%B2%95-%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC-%EC%BC%80%EC%9D%B4%EC%8A%A4-%ED%8C%8C%EC%8A%A4%EC%B9%BC-%EC%BC%80%EC%9D%B4%EC%8A%A4-%EC%B9%B4%EB%A9%9C-%EC%BC%80%EC%9D%B4%EC%8A%A4)

## `React`에서 스타일 작성법

### 스타일 어트리뷰트

- `HTML`에서 작성하는 것처럼 `style` 어트리뷰트를 사용하지만, 문자열이 아닌 `React`의 프로퍼티 네이밍 규칙을 준수하는 `JavaScript` 객체를 전달합니다.

### `CSS in JavaScript`

- `JavaScript`에서 `CSS` 코드 작성 사용하는 방법입니다.
- `styled-components`와 `@emotion`이 가장 유명한 라이브러리입니다.

#### `@emotion` 설치

```shell
npm install @emotion/react @emotion/styled
```

또는

```shell
yarn add @emotion/react @emotion/styled
```

- 설치 명령어(`install`, `add`)를 입력 후 모듈을 여러 개 나열하면 한 번에 모두 설치합니다.
- [`package.json`](./package.json)의 `dependencies`에 해당 모듈의 이름이 있는 경우 `npm install` 혹은 `yarn` 명령어만 입력하면 됩니다.

### `CSS, SCSS` 로드

- `import "<CSS 파일 경로>";`를 통해 `CSS` 파일을 불러올 수 있습니다.

  - 이는 `CRA` 환경에서 암묵적으로 `webpack`이라는 도구를 통해 `css-loader`를 사용하기 때문입니다.

- `import <스타일 변수> from "<CSS module 파일 경로>";`를 통해 `CSS Module` 파일을 불러올 수 있습니다.

  - `CSS`의 클래스 이름이 중첩되는 것을 방지하기 위해 중간에 임의의 이름을 추가해 줍니다.

- `SCSS`는 `node-sass` 모듈이 설치되어 있어야 불러올 수 있습니다.

  ```shell
  npm install node-sass
  ```

  또는

  ```shell
  yarn add node-sass
  ```

  - 그리고 위의 `CSS`, `CSS Module` 불러오는 것과 같이 `SCSS` 파일 불러올 수 있습니다.

## 프로젝트 설명

- `CRA` 프로젝트에서 인라인 스타일(스타일 어트리뷰트), `CSS/SCSS`와 `CSS/SCSS Module`, `CSS-in-JavaScript` 방법으로 스타일을 적용해보는 프로젝트입니다.
- `@emotion`과 `node-sass`를 사용합니다.
- [`/public`](./public) 폴더의 [`index.html`](./public/index.html)에서 `<link>` 태그로 [`expand_style.css`](./public/expand_style.css)를 불러오는 예제를 포함하였습니다.
- [`/src/index.js`](./src/index.js)에서 `getRenderApp` 함수에 `selector` 매개변수를 통해 어떠한 방식으로 스타일링된 컴포넌트를 렌더할지 결정합니다.

## 폴더 구조

- [`/public/index.html`](./public/index.html)

  - `React` 프로젝트 내에서 말고도 외부 스타일 태그를 통해 스타일 적용을 해보는 예시를 작성
  - `<link rel="stylesheet" href="%PUBLIC_URL%/expand_style.css" />`와 같이 정적 `CSS`를 로드할 수 있음
    - `%PUBLIC_URL%` 키워드를 통해 [`expand_style.css`](./public/expand_style.css)의 위치([`index.html`](./public/index.html)이 있는 폴더)를 잡아줌

- [`/public/expand_style.css`](./public/expand_style.css)

  - [`index.html`](./public/index.html)에 정적으로 적용할 `CSS` 파일

- [`/src/index.js`](./src/index.js)

  - `CRA` 프로젝트의 엔트리 포인트
  - [`index.css`](./src/index.css) 파일을 로드하여 스타일 적용
  - `getRenderApp` 함수와 `selector` 인자를 통해 4가지 방식의 `CSS`를 적용한 `App` 중 한 컴포넌트를 선택하여 렌더링

- [`/src/index.css`](./src/index.css)

  - 전역 `CSS` 코드

- [`/src/CSSApp.js`](./src/CSSApp.js)

  - `CSS` 로드 방식을 사용하는 컴포넌트
  - 인라인 스타일(스타일 어트리뷰트) 방식을 사용한 [`StyleAttributeComponent`](./src/components/StyleAttributeComponent.jsx)를 렌더
  - `@emotion` 객체를 통해 `CSS-in-JavaScript` 방식을 사용한 [`EmotionComponent`](./src/components/EmotionComponent.jsx)와 [`Circle`](./src/components/Circle.jsx)를 렌더

- [`/src/CSSApp.css`](./src/CSSApp.css)

  - `CSS` 로드 방식으로 적용할 스타일

- [`/src/CSSModuleApp.js`](./src/CSSModuleApp.js)

  - `CSS Module` 로드 방식을 사용하는 컴포넌트

- [`/src/CSSModuleApp.module.css`](./src/CSSModuleApp.module.css)

  - `CSS Module` 로드 방식으로 적용할 스타일

- [`/src/SCSSApp.js`](./src/SCSSApp.js)

  - `SCSS` 로드 방식을 사용하는 컴포넌트

- [`/src/SCSSApp.scss`](./src/SCSSApp.scss)

  - `SCSS` 로드 방식으로 적용할 스타일

- [`/src/SCSSModuleApp.js`](./src/SCSSModuleApp.js)

  - `SCSS Module` 로드 방식을 사용하는 컴포넌트

- [`/src/SCSSModuleApp.module.scss`](./src/SCSSModuleApp.module.scss)

  - `SCSS Module` 로드 방식으로 적용할 스타일

- [`/src/components/StyleAttributeComponent.jsx`](./src/components/StyleAttributeComponent.jsx)

  - 인라인 스타일(스타일 어트리뷰트) 방식으로 적용한 컴포넌트

- [`/src/components/EmotionComponent.jsx`](./src/components/EmotionComponent.jsx)

  - `@emotion` 모듈을 사용하여 `CSS-in-JavaScript` 방식으로 적용한 컴포넌트
  - `styled` 객체를 통해 스타일 된 `div`를 생성
  - `SCSS` 작성법으로 내부에 `::after` 가상 선택자로 텍스트 추가 렌더

- [`/src/components/Circle.jsx`](./src/components/Circle.jsx)

  - [`Circle.style.js`](./src/components/Circle.style.js)에서 `@emotion`을 사용하여 생성된 스타일 컴포넌트를 가져와 `props`를 넘기는 등의 방식으로 렌더하는 컴포넌트

- [`/src/components/Circle.style.js`](./src/components/Circle.style.js)

  - `@emotion`을 사용하여 스타일 컴포넌트를 생성
  - 스타일 컴포넌트에 `props`를 주입 받았을 때, 조건부 렌더링을 적용하는 방법을 작성
