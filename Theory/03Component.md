# Component

- [state](#state)
- [useEffect](#useeffect)
- [렌더링 흐름](#렌더링-흐름)
- [연습문제](#연습문제)

<br>

---

### state

> state는 컴포넌트가 기억하는 값이다. `const [count, setCount] = useState(1)`처럼 `useState(초기값)`은 현재 값과 값을 바꾸는 함수를 돌려준다. `setCount`로 값을 바꾸면 컴포넌트가 다시 렌더링되어 화면이 갱신된다. 변수를 직접 바꾸면 화면이 바뀌지 않는다. `setState`는 비동기로 반영되어 바로 다음 줄에서 읽으면 이전 값이다.

<br>

```jsx
const [count, setCount] = useState(1);
const handleClick = () => setCount(count + 1);
```

<br>

- 예제 코드: [MyComponent](../R03Component/src/Ch03Component/MyComponent.jsx), [App.js](../R03Component/src/App.js)

---

### useEffect

> Hook은 함수형 컴포넌트에서 state, 생명주기 같은 기능을 쓰게 해 주는 함수이며 `use`로 시작하고 컴포넌트 최상단에서만 호출한다. `useEffect(함수, [의존성 배열])`는 렌더링이 끝난 뒤 실행된다. 의존성 배열이 `[]`이면 처음 한 번만(초기 설정, 데이터 요청), `[count]`이면 `count`가 바뀔 때마다, 배열을 생략하면 렌더링마다 실행된다.

<br>

| 의존성 배열 | 실행 시점 |
| --- | --- |
| 생략 | 렌더링할 때마다 |
| `[]` | 처음 한 번 |
| `[a, b]` | a 또는 b가 바뀔 때 |

---

### 렌더링 흐름

> 컴포넌트는 state 또는 props가 바뀔 때마다 함수가 다시 실행되어 새 JSX를 만들고, React가 이전 결과와 비교해 바뀐 부분만 실제 화면에 반영한다. 컴포넌트 안은 state 선언, 핸들러, JSX 반환 순서로 쓰는 것이 일반적이다.

---

### 연습문제

> state와 이벤트를 합쳐 카운터 같은 컴포넌트를 단계별로 풀었다.

<br>

- 예제 코드: [컴포넌트 연습문제](../R03ComponentEx/src/Ch03Component/C03Ex.jsx)
