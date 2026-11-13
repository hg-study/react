// =======================================
// 앱 최상위 컴포넌트
// state 와 useEffect 를 쓰는 컴포넌트 확인
// =======================================

import MyComponent from "./Ch03Component/MyComponent";

function App() {
  return (
    <div className="App">
      <h1>COMPONENT TEST</h1>
      <hr/>
      <MyComponent/>
    </div>
  );
}

export default App;
