// =======================================
// 앱
// 화면 구성과 라우팅
// =======================================

import Memo from "./components/Memo";

// 라우팅: 주소별로 컴포넌트를 연결
function App() {
  return (
    <div className="App">
      <Memo/>
    </div>
  );
}

export default App;
