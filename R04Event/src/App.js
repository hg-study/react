// =======================================
// 앱 최상위 컴포넌트
// 여러 이벤트 핸들러 확인
// =======================================

import EventComponent_01 from "./Ch04Event/C01OnClick";
import EventComponent_02 from "./Ch04Event/C02OnMouse";
import EventComponent_03 from "./Ch04Event/C03OnKey";
import EventComponent_04 from "./Ch04Event/C04OnChange";
import EventComponent_05 from "./Ch04Event/C05OnSubmit";
import EventComponent_06 from "./Ch04Event/C06OnScroll";
function App() {
  return (
    <div className="App">
      <h1>EVENT HANDLING</h1>
      <hr/>
      {/*01 onClick*/}
      <EventComponent_01 />
      <hr/>
      {/* 02 onMouse */}
      <EventComponent_02 />
      <hr/>
      {/* 02 onKey */}
      <EventComponent_03 />
      <hr/>
      {/* 04 OnChange */}
      <EventComponent_04 />
      <hr/>
      {/* 05 OnSubmit */}
      <EventComponent_05 />
      <hr/>
      {/* 05 OnScroll */}
      <EventComponent_06 />
    </div>
  );
}

export default App;
