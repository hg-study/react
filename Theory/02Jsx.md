# Jsx

- [JSX](#jsx)
- [컴포넌트 만들기](#컴포넌트-만들기)
- [props](#props)
- [반복 출력과 key](#반복-출력과-key)
- [export 방식](#export-방식)
- [이벤트 핸들러 기초](#이벤트-핸들러-기초)
- [연습문제](#연습문제)

<br>

---

### JSX

> JSX는 자바스크립트 안에 HTML 같은 태그를 쓰는 문법이다. 컴포넌트는 JSX를 반환하는 함수이고 이름은 대문자로 시작한다. 중괄호 `{}` 안에는 자바스크립트 표현식을 쓸 수 있다. 반환하는 최상위 요소는 하나여야 하므로 여러 요소는 빈 태그 `<></>`(Fragment)로 감싼다. HTML과 다른 점은 `class` 대신 `className`, `for` 대신 `htmlFor`, 속성은 camelCase라는 것이다.

---

### 컴포넌트 만들기

> 함수형 컴포넌트는 화살표 함수나 `function` 키워드로 만든다. 다른 파일에서 쓰려면 `export`하고 가져오는 쪽에서 `import`한다. 사용할 때는 HTML 태그처럼 `<Element1 />` 형태로 쓴다.

<br>

```jsx
export const Element1 = () => { return <h2>HELLO WORLD - 1</h2> }
export function Element2() { return <h2>HELLO WORLD - 2</h2> }
```

<br>

- 예제 코드: [기본 JSX](../R02Jsx/src/Ch02Jsx/C01Basic.jsx), [사용자 정의 컴포넌트](../R02Jsx/src/Ch02Jsx/C02CustomComponent.jsx), [App.js](../R02Jsx/src/App.js)

---

### props

> props는 부모 컴포넌트가 자식에게 넘기는 값이다. `<Element3 auth="ROLE_USER" name="홍길동" />`처럼 속성으로 넘기면 자식은 객체로 받는다. 구조분해할당 `({auth, name})`으로 필요한 값만 바로 꺼낼 수 있다. props는 읽기 전용이라 자식이 직접 바꾸면 안 된다.

---

### 반복 출력과 key

> 배열의 `map`으로 요소를 만들어 나열한다. 반복으로 만든 요소에는 `key` 속성이 필요하며, React가 바뀐 항목만 갱신하려고 구별하는 값이다. 순서가 바뀔 수 있는 목록에는 인덱스 대신 고유한 id를 쓰는 것이 좋다.

---

### export 방식

| 방식 | 선언 | 가져오기 |
| --- | --- | --- |
| 이름 있는 export | `export const A = ...` | `import {A} from "./파일"` (이름이 같아야 함) |
| default export | `export default A` | `import 마음대로 from "./파일"` (파일당 하나) |

---

### 이벤트 핸들러 기초

> 이벤트는 `onClick`, `onKeyDown`처럼 camelCase 속성에 함수를 넘겨 연결한다. 함수 이름만 넘겨야 하며 `onClick={handleClick()}`처럼 괄호를 붙이면 렌더링 때 바로 실행된다. 핸들러의 첫 번째 매개변수는 이벤트 객체이고 `e.target`은 이벤트가 일어난 요소이다.

<br>

- 예제 코드: [이벤트 기초](../R02Jsx/src/Ch02Jsx/C03Event.jsx)

---

### 연습문제

> 쇼핑몰 상품을 주제로 JSX 요소, props, 구조분해와 할인가 계산, 재고에 따른 조건 출력, 객체 배열 반복과 합계(`reduce`)를 단계별로 풀었다.

<br>

- 예제 코드: [JSX 연습문제](../R02JsxEx/src/Ch02Jsx/C02Ex.jsx), [App.js](../R02JsxEx/src/App.js)
