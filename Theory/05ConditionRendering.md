# Condition Rendering

- [조건부 렌더링](#조건부-렌더링)
- [if 문](#if-문)
- [삼항 연산자](#삼항-연산자)
- [&& 연산자](#-연산자)
- [연습문제](#연습문제)

<br>

---

### 조건부 렌더링

> 값에 따라 보여 줄 화면을 다르게 하는 것이다. 컴포넌트는 함수이므로 조건에 따라 다른 JSX를 반환하면 된다. JSX 안(`{}`)에서는 문장인 `if`를 쓸 수 없고 표현식만 쓸 수 있어서 삼항 연산자나 `&&`를 쓴다.

---

### if 문

> 컴포넌트 함수 안에서 `if`로 분기하고 각각 `return`한다. 가장 읽기 쉽지만 반복되는 코드가 늘어난다.

<br>

- 예제 코드: [if 문](../R05ConditionRendering/src/Ch05ConditionRendering/Component01.jsx)

---

### 삼항 연산자

> `조건 ? 참일 때 : 거짓일 때` 형태이다. JSX 안에서도 쓸 수 있고, 뒤에 세미콜론을 붙이면 화면에 `;`가 출력되니 주의한다.

<br>

```jsx
return isAuth ? <h1>인증 완료 상태</h1> : <h1>로그인이 필요합니다.</h1>
```

<br>

- 예제 코드: [삼항 연산자](../R05ConditionRendering/src/Ch05ConditionRendering/Component02.jsx)

---

### && 연산자

> `조건 && JSX`는 조건이 참일 때만 JSX를 출력하고 거짓이면 아무것도 출력하지 않는다. 값이 없을 때 `items.map`을 호출하면 오류가 나므로 `items && items.map(...)`처럼 먼저 확인한다.

<br>

- 예제 코드: [&& 연산자](../R05ConditionRendering/src/Ch05ConditionRendering/Component03.jsx), [App.js](../R05ConditionRendering/src/App.js)

---

### 연습문제

> 로그인 여부, 권한, 목록 유무 같은 조건에 따라 화면을 다르게 출력하는 문제를 단계별로 풀었다.

<br>

- 예제 코드: [조건부 렌더링 연습문제](../R05ConditionRenderingEx/src/Ch05ConditionRenderingEx/C05Ex.jsx)
