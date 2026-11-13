// =======================================
// 앱
// 화면 구성과 라우팅
// =======================================

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from "./components/todo/TodoList";
import TodoAdd from "./components/todo/TodoAdd";
import ErrorPage from "./components/ErrorPage";

// 라우팅 설정: 주소별로 목록, 등록, 오류 화면을 연결
// 라우팅: 주소별로 컴포넌트를 연결
function App() {
  return (
    <Router>
      <div className="container">
        <h1> Todo 실습 (01_PARAM · 02_VALIDATION · 03_EXCEPTION)</h1>
        <nav>
          <Link to="/list">목록/검색</Link>
          <Link to="/add">할 일 등록</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/list" element={<TodoList />} />
          <Route path="/add" element={<TodoAdd />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
