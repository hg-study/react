# Route

- [라우팅](#라우팅)
- [설정](#설정)
- [Link](#link)
- [값 전달](#값-전달)
- [연습문제](#연습문제)

<br>

---

### 라우팅

> 라우팅은 주소에 따라 보여 줄 컴포넌트를 바꾸는 기능이다. React는 HTML 한 장으로 동작하므로 `react-router-dom`이 주소 변화를 감지해 컴포넌트를 교체해 서버 요청 없이 화면을 전환한다. `npm install react-router-dom`으로 설치한다.

---

### 설정

> `BrowserRouter`로 앱을 감싸고 `Routes` 안에 `Route`를 주소별로 나열한다. `path`는 주소, `element`는 보여 줄 컴포넌트이다. 경로 변수는 `:이름`으로 쓰고 끝에 `?`를 붙이면 생략할 수 있다.

<br>

```jsx
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact/:name?/:age?" element={<Contact />} />
  </Routes>
</Router>
```

<br>

- 예제 코드: [App.js](../R06Route/src/App.js), [Home](../R06Route/src/Ch06Route/Home.jsx)

---

### Link

> `<Link to="/About">`는 페이지를 새로 불러오지 않고 주소만 바꿔 컴포넌트를 교체한다. `<a href>`는 서버에 다시 요청해 화면이 새로고침되므로 내부 이동에는 `Link`를 쓴다.

---

### 값 전달

> 값을 주소에 담아 전달하는 방법은 두 가지이다. 쿼리 스트링(`/About?name=timo&age=100`)은 `useLocation().search`를 `URLSearchParams`로 해석해 `query.get("name")`으로 읽는다. 경로 변수(`/Contact/hong/40`)는 `useParams()`로 읽는다.

<br>

- 예제 코드: [쿼리 스트링](../R06Route/src/Ch06Route/About.jsx), [경로 변수](../R06Route/src/Ch06Route/Contact.jsx)

---

### 연습문제

> 여러 페이지와 메뉴를 만들고 쿼리 스트링과 경로 변수로 값을 전달하는 문제를 풀었다.

<br>

- 예제 코드: [라우트 연습문제](../R06RouteEx/src/Ch06RouteEx/C06Ex.jsx)
