# 04 - `React.js`란?

> 2022.01.13(목)

## `npx`를 통한 `Create React App`(`CRA`) 구성

- 터미널, CMD에서 프로젝트 폴더를 생성할 위치(예시는 바탕화면)에서 다음 명령어를 실행합니다.

```shell
npx create-react-app <프로젝트 명>

npm init react-app <프로젝트 명>
yarn create react-app <프로젝트 명>
```

- 세 명령어 중 하나를 실행하면 현재 위치에서 <프로젝트 명>에 해당하는 폴더에 `CRA` 환경이 구성됩니다.

## `npm` 혹은 `yarn`을 통해 개발 서버 실행

- `cd <프로젝트 명>`을 통해 프로젝트 폴더로 이동한 후, `npm start` 혹은 `yarn start`를 입력하면 `localhost:3000`으로 브라우저가 열리면서 `CRA` 프로젝트의 개발 환경이 실행됩니다.
- 개발 환경은 `localhost:3000`에 개발 서버를 열고, `react-hot-loader`를 통해 프로젝트 `/src` 폴더 내의 파일이 수정되면 새로고침합니다.
- `localhost:3000`에서 응답 받는 `HTML` 파일은(브라우저로 접속하는 행위는 `GET` 방식으로 요청하는 행위와 같으므로) `/public` 폴더 내의 `index.html`에, `/src` 폴더 내의 있는 `index.js` 파일을 임시 빌드한 `JavaScript` 코드를 주입한 `HTML` 파일입니다.

> `Node.js`와 `npm` 그리고 `yarn`의 버전이 제각각인 경우 `yarn`과 제대로 호환되지 않을 수 있습니다.  
> 이 경우를 방지하기 위해, 가급적 최신 버전을 사용하시는 것이 좋습니다.

## 프로젝트 설명

- 프로젝트의 엔트리 포인트(`entry point`, 시작점)은 `index.js`입니다.

## 명령어

- `npm run start`(`npm start`, `yarn start`) 명령어는 현재 프로젝트의 `React` 개발 서버를 실행합니다.
- `npm run build`(`yarn build`) 명령어는 현재 프로젝트를 빌드하여 배포 가능한 파일을 생성합니다.
- `npm run test`(`yarn test`) 명령어는 현재 프로젝트에 테스트 코드(`src/App.test.js`)를 실행합니다.
- `npm run eject`(`yarn eject`) 명령어는 현재 프로젝트의 숨겨져 있는 구성 파일을 꺼냅니다.(취소하기 힘듭니다.)
