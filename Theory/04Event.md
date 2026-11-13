# Event

- [이벤트 종류](#이벤트-종류)
- [마우스와 키보드](#마우스와-키보드)
- [입력 값 읽기](#입력-값-읽기)
- [폼 전송](#폼-전송)
- [스크롤](#스크롤)
- [연습문제](#연습문제)

<br>

---

### 이벤트 종류

| 이벤트 | 발생 시점 |
| --- | --- |
| `onClick` | 클릭 |
| `onMouseEnter`, `onMouseLeave` | 마우스가 요소에 들어오고 나갈 때 |
| `onKeyDown`, `onKeyUp` | 키를 누를 때, 뗄 때 |
| `onChange` | 입력 값이 바뀔 때 |
| `onSubmit` | 폼 전송 |
| `onScroll` | 스크롤 |

---

### 마우스와 키보드

> 마우스 이벤트에서 state를 바꾸면 화면이 갱신된다. `keyDown`은 글자가 입력되기 전, `keyUp`은 키를 뗀 뒤에 발생해서 `keyDown`에서 읽은 `e.target.value`에는 방금 누른 글자가 아직 포함되지 않는다. `style`은 객체로 지정하고 속성은 camelCase로 쓴다(`border-radius`는 `borderRadius`).

<br>

- 예제 코드: [onClick](../R04Event/src/Ch04Event/C01OnClick.jsx), [마우스](../R04Event/src/Ch04Event/C02OnMouse.jsx), [키보드](../R04Event/src/Ch04Event/C03OnKey.jsx)

---

### 입력 값 읽기

> `onChange`는 값이 바뀔 때마다 발생한다. `const {name, value, type, checked} = e.target`으로 입력 요소의 정보를 꺼낸다. 체크박스는 `value`가 아니라 `checked`를 읽어야 한다. 라디오 버튼은 `name`이 같아야 하나만 선택된다.

<br>

- 예제 코드: [onChange](../R04Event/src/Ch04Event/C04OnChange.jsx)

---

### 폼 전송

> 폼의 `onSubmit`에서 `e.preventDefault()`를 호출하면 브라우저의 기본 동작(서버로 전송하며 페이지가 새로고침됨)을 막는다. React에서는 보통 기본 동작을 막고 JavaScript로 서버에 요청을 보낸다.

<br>

- 예제 코드: [onSubmit](../R04Event/src/Ch04Event/C05OnSubmit.jsx)

---

### 스크롤

> 스크롤 영역(`overflow: scroll`)에서 `onScroll`이 발생하며 `e.target.scrollTop`으로 스크롤된 거리를 읽는다. 무한 스크롤 같은 기능에 쓴다.

<br>

- 예제 코드: [onScroll](../R04Event/src/Ch04Event/C06OnScroll.jsx), [App.js](../R04Event/src/App.js)

---

### 연습문제

> 클릭, 입력, 체크, 키보드, 폼 이벤트를 state와 함께 단계별로 풀었다.

<br>

- 예제 코드: [이벤트 연습문제](../R04EventEx/src/Ch04EventEx/C04Ex.jsx)
