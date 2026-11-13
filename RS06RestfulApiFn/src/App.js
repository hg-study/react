// =======================================
// 앱
// 화면 구성과 라우팅
// =======================================

import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import MemoPost from "./components/memo/Post";
import MemoList from "./components/memo/List";
import Exception from "./components/Exception";
import FileUpload from "./components/updownload/Upload";
import FileList from "./components/updownload/List";
import OpenData from "./components/restful/OpenData";
import Kakao from "./components/restful/Kakao";

// 라우팅: 주소별로 컴포넌트를 연결
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/memo/post">MEMO POST</Link> <br/>
          <Link to="/memo/list">MEMO LIST(EXCEPTION TEST)</Link> <br/>
          <Link to="/file/upload">FILE UPLOAD</Link> <br/>
          <Link to="/file/list">FILE LIST</Link> <br/>
          <Link to="/restful/opendata">OPENDATA</Link> <br/>
          <Link to="/restful/kakao">KAKAO</Link> <br/>
          <hr />
        </div>
        <Routes>
          {/* Route 설정 */}
          <Route path="/memo/post" element={<MemoPost/>} />
          <Route path="/memo/list" element={<MemoList/>} />
          <Route path="/exception" element={<Exception/>} />
          <Route path="/file/upload" element={<FileUpload/>} />
          <Route path="/file/list" element={<FileList/>} />
          <Route path="/restful/opendata" element={<OpenData/>} />
          <Route path="/restful/kakao" element={<Kakao/>} />
        </Routes>       
      </Router>
    </div>
  );
}

export default App;
