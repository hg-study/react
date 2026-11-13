# Communication

- [데이터 흐름](#데이터-흐름)
- [부모에서 자식으로](#부모에서-자식으로)
- [자식에서 부모로](#자식에서-부모로)
- [Context API](#context-api)
- [연습문제](#연습문제)

<br>

---

### 데이터 흐름

> React의 데이터는 부모에서 자식으로만 흐른다(단방향). 자식은 받은 props를 바꿀 수 없다. 자식이 부모의 값을 바꾸려면 부모가 만든 함수를 props로 받아 호출하는 방법을 쓴다. 여러 단계 아래로 값을 내려 주는 일(prop drilling)이 번거로우면 Context를 쓴다.

---

### 부모에서 자식으로

> 부모가 `<Son user={name} />`처럼 props로 값을 내려 준다. 자식은 props를 읽기만 한다. props를 `useState`의 초기값으로 쓰면 이후 부모 값이 바뀌어도 자동으로 따라가지 않는다는 점에 주의한다.

---

### 자식에서 부모로

> 부모가 state를 바꾸는 함수(콜백)를 만들어 props로 내려 주고, 자식이 이벤트가 일어났을 때 그 함수를 호출하며 값을 인자로 넘긴다.

<br>

```jsx
// 부모
<Son user={name} handleChangeParentName={handleChangeName} />
// 자식
const handleClick = () => handleChangeParentName(name);
```

<br>

- 예제 코드: [부모](../R07Communication/src/Ch07Communication/Props/Parent.jsx), [자식](../R07Communication/src/Ch07Communication/Props/Son.jsx)

---

### Context API

> Context API는 props 없이 컴포넌트 트리 어디서나 공용 데이터(테마, 로그인 정보, 언어 설정)를 꺼내 쓰게 한다. 세 단계로 쓴다. 1) `createContext()`로 저장소를 만든다 2) `Provider`의 `value`에 데이터를 넣고 하위 컴포넌트를 `children`으로 감싼다 3) 필요한 곳에서 `useContext(Context)`로 꺼낸다. 값이 바뀌면 그것을 쓰는 모든 컴포넌트가 다시 렌더링된다.

<br>

- 예제 코드: [Context 생성](../R07Communication/src/Ch07Communication/ContextAPI/Context.jsx), [Provider](../R07Communication/src/Ch07Communication/ContextAPI/Provider.jsx), [App.js](../R07Communication/src/App.js)

---

### 연습문제

> 부모와 자식 사이 값 전달, 콜백, Context를 이용한 전역 값 공유 문제를 풀었다.

<br>

- 예제 코드: [통신 연습문제](../R07CommunicationEx/src/Ch07CommunicationEx/C07Ex.jsx)
