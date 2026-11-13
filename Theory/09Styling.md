# Styling

- [스타일을 적용하는 방법](#스타일을-적용하는-방법)
- [인라인과 CSS 파일](#인라인과-css-파일)
- [SCSS](#scss)
- [React Bootstrap](#react-bootstrap)
- [연습문제](#연습문제)

<br>

---

### 스타일을 적용하는 방법

| 방법 | 설명 |
| --- | --- |
| 인라인 `style` | 객체로 지정, 속성은 camelCase |
| CSS 파일 import | `import "./Basic.css"` 후 `className`으로 사용. 전체 앱에 적용되므로 부모 클래스로 범위를 좁힘 |
| SCSS | 선택자 중첩이 가능한 CSS 확장 문법. `sass` 설치 필요 |
| Bootstrap | 클래스 이름 또는 React Bootstrap 컴포넌트 |

---

### 인라인과 CSS 파일

> JSX에서는 `class` 대신 `className`, `tabindex` 대신 `tabIndex`처럼 camelCase 속성을 쓴다. 바닐라 부트스트랩의 모달은 `data-bs-*` 속성으로 열고 닫으며 부트스트랩 JS가 로드되어 있어야 동작한다.

<br>

- 예제 코드: [기본 스타일링](../R09Styling/src/Ch09Styling/Basic.jsx), [CSS](../R09Styling/src/Ch09Styling/Basic.css), [App.js](../R09Styling/src/App.js)

---

### SCSS

> SCSS는 선택자를 안에 중첩해서 쓸 수 있어 반복이 줄어든다. `npm install sass`로 설치하면 `.scss` 파일을 import할 때 CSS로 변환된다.

<br>

```scss
.scss-component {
  h1 { background-color: orange; color: white; }
  ul { li { min-height: 50px; color: red; } }
}
```

<br>

- 예제 코드: [SCSS 컴포넌트](../R09Styling/src/Ch09Styling/ScssTest.jsx), [SCSS](../R09Styling/src/Ch09Styling/ScssTest.scss)

---

### React Bootstrap

> 부트스트랩을 클래스 이름 대신 컴포넌트로 쓰게 해 주는 라이브러리이다. `npm install bootstrap react-bootstrap`으로 설치하고 `<Button variant="primary">`처럼 색상을 `variant`로 지정한다. 부트스트랩 스타일은 SCSS에서 `@import '~bootstrap/scss/bootstrap'`으로 가져온다.

<br>

- 예제 코드: [React Bootstrap](../R09Styling/src/Ch09Styling/ReactBsComponent.jsx), [SCSS](../R09Styling/src/Ch09Styling/ReactBsComponent.scss)

---

### 연습문제

> CSS, SCSS, 인라인 스타일, React Bootstrap을 섞어 카드와 목록 화면을 꾸미는 문제이다. 풀이 파일(`C09Ex답.jsx`)을 함께 두었다.

<br>

- 예제 코드: [스타일링 연습문제](../R09StylingEx/src/Ch09Styling/C09Ex.jsx), [연습문제 CSS](../R09StylingEx/src/Ch09Styling/C09Ex.css), [연습문제 SCSS](../R09StylingEx/src/Ch09Styling/C09Ex.scss), [풀이](../R09StylingEx/src/Ch09Styling/C09Ex답.jsx)
