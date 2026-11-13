# Layout

- [레이아웃 컴포넌트](#레이아웃-컴포넌트)
- [children](#children)
- [페이지 구성](#페이지-구성)
- [CSS 배치](#css-배치)
- [연습문제](#연습문제)

<br>

---

### 레이아웃 컴포넌트

> 모든 페이지가 공유하는 틀(헤더, 푸터, 사이드바)을 `layouts` 폴더의 컴포넌트로 분리하고, 페이지 컴포넌트는 `pages` 폴더에 둔다. 페이지는 `Layout`으로 자신의 내용을 감싸기만 하면 되어, 공통 영역을 한 번만 고치면 모든 페이지에 반영된다.

---

### children

> 컴포넌트의 여는 태그와 닫는 태그 사이에 넣은 내용은 `children` props로 전달된다. `Layout`은 `children`을 `Section` 안에 넣어 보여 준다. `isShowAside` 같은 props로 페이지마다 사이드바를 보일지 정한다(조건부 렌더링 `&&`).

<br>

```jsx
const Layout = ({children, isShowAside}) => (
  <div className="wrapper">
    <Header />
    <main>{isShowAside && <Aside />}<Section>{children}</Section></main>
    <Footer />
  </div>
)
```

<br>

- 예제 코드: [레이아웃](../R08Layout/src/layouts/Layout.jsx), [헤더](../R08Layout/src/layouts/Header.jsx), [상단 헤더](../R08Layout/src/layouts/TopHeader.jsx), [메뉴](../R08Layout/src/layouts/Nav.jsx), [사이드바](../R08Layout/src/layouts/Aside.jsx), [본문 영역](../R08Layout/src/layouts/Section.jsx), [푸터](../R08Layout/src/layouts/Footer.jsx)

---

### 페이지 구성

> `App`에서 Router로 주소와 페이지를 연결하고, 각 페이지는 `Layout`을 사용한다. 메뉴는 `Link`로 이동한다.

<br>

- 예제 코드: [Home 페이지](../R08Layout/src/pages/Home.jsx), [About 페이지](../R08Layout/src/pages/About.jsx), [App.js](../R08Layout/src/App.js)

---

### CSS 배치

> 영역마다 최소 높이와 테두리를 지정하고, `main`을 `display: flex`로 만들어 사이드바와 본문을 가로로 나란히 둔다. `box-sizing: border-box`는 테두리와 안쪽 여백을 크기에 포함시킨다.

<br>

- 예제 코드: [레이아웃 CSS](../R08Layout/src/layouts/css/Layout.css)

---

### 연습문제

> 헤더, 사이드바, 본문, 푸터를 가진 레이아웃을 직접 구성하는 문제를 풀었다.

<br>

- 예제 코드: [레이아웃 연습문제](../R08LayoutEx/src/Ch08LayoutEx/C08Ex.jsx)
