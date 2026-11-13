// =======================================
// 앱 최상위 컴포넌트
// 스타일링 방법 확인
// =======================================

import Basic from "./Ch09Styling/Basic"
import ReactBsComponent from "./Ch09Styling/ReactBsComponent";
import ScssTest from "./Ch09Styling/ScssTest";

function App() {
  return (
    <div className="App">
      <h1>09 스타일링</h1>
      {/*  */}
      <Basic/>
      <hr/>
      {/*  */}
      <ScssTest/>
      <hr/>   
      <ReactBsComponent/>
    </div>

  );
}

export default App;
