// =======================================
// 앱 최상위 컴포넌트
// React Router 로 페이지 이동 확인
// =======================================

import Home from "./Ch06Route/Home";
import About from "./Ch06Route/About";
import Contact from "./Ch06Route/Contact";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <h1>ROUTE</h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact/:name?/:age?" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
