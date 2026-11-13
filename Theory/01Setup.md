# Setup

- [React란](#react란)
- [개발 환경](#개발-환경)
- [프로젝트 생성과 실행](#프로젝트-생성과-실행)
- [프로젝트 구조](#프로젝트-구조)

<br>

---

### React란

> React는 화면(UI)을 컴포넌트 단위로 나눠 만드는 자바스크립트 라이브러리이다. 데이터(state)가 바뀌면 바뀐 부분만 다시 그려 주고, 화면을 선언적으로 표현한다. 한 페이지에서 화면 조각만 갈아 끼우는 SPA(Single Page Application)를 만드는 데 쓰며, 서버와는 JSON으로 데이터를 주고받는다. 이 저장소의 프로젝트는 Create React App(CRA)으로 만들었고 React 19를 사용한다.

---

### 개발 환경

| 준비물 | 설명 |
| --- | --- |
| Node.js | 자바스크립트 실행 환경과 패키지 관리자(npm)를 제공 |
| VS Code | 코드 편집기 |
| 브라우저 개발자 도구 | 콘솔 로그와 컴포넌트 확인 |

---

### 프로젝트 생성과 실행

> `npx create-react-app 프로젝트이름`으로 프로젝트를 만들고 `npm start`로 개발 서버(기본 포트 3000)를 실행한다. 이미 받은 프로젝트는 `package.json`의 라이브러리를 `npm install`로 설치한 뒤 실행한다. `node_modules` 폴더는 용량이 커서 저장소에 올리지 않고 `.gitignore`로 제외한다.

<br>

```bash
npm install
npm start
```

---

### 프로젝트 구조

```
R01Setup
├─ public/index.html     하나뿐인 HTML. <div id="root"> 안에 React 가 화면을 그림
├─ src/index.js          앱 시작점. root 에 App 컴포넌트를 렌더링
├─ src/App.js            최상위 컴포넌트
├─ package.json          라이브러리 목록과 실행 스크립트
└─ README.md
```

<br>

- 예제 코드: [index.js](../R01Setup/src/index.js), [App.js](../R01Setup/src/App.js), [package.json](../R01Setup/package.json), [index.html](../R01Setup/public/index.html)
