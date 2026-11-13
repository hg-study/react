// =======================================
// 앱 최상위 컴포넌트
// 공통 레이아웃과 페이지를 Router 로 연결
// =======================================

import Home from "./pages/Home";
import About from "./pages/About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
