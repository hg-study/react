// =======================================
// 앱
// 화면 구성과 라우팅
// =======================================

import MemoPost from "./components/memo/Post";
import MemoList from "./components/memo/List";
import Exception from "./components/Exception";

import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

// 라우팅: 주소별로 컴포넌트를 연결
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/memo/post">MEMO POST</Link> <br/>
          <Link to="/memo/list">MEMO LIST(EXCEPTION TEST)</Link> <br/>
        </div>
        <Routes>
          {/* Route 설정 */}
          <Route path="/memo/post" element={<MemoPost/>} />
          <Route path="/memo/list" element={<MemoList/>} />
          <Route path="/exception" element={<Exception/>} />
        </Routes>       
      </Router>
    </div>
  );
}

export default App;
