// =======================================
// 앱 최상위 컴포넌트
// JSX 기본, 사용자 정의 컴포넌트, 이벤트 핸들러를 한 화면에 모아 확인
// =======================================

import {Element1,Element2,Element3,Element4,Element5} from "./Ch02Jsx/C01Basic";
import Basic_01 from "./Ch02Jsx/C01Basic";
import CustomComponent_02 from "./Ch02Jsx/C02CustomComponent";
import {Component_Event_01,Component_Event_02,Component_Event_03} from "./Ch02Jsx/C03Event";

function App() {
  return (
    <div className="App">
      <section>
        <h1>02JSX 01_BASIC</h1>
        <hr/> 
        <Element1/>
        <Element2/>
        <Element3 auth={"ROLE_USER"} name={"홍길동"} />
        <Element3 auth={"ROLE_ADMIN"} name={"티모"} />
        <Element4 auth={"ROLE_ADMIN"} name={"모찌"} />
        <hr/> 
        <Element5 list={["aaa","bbb","ccc","ddd"]} />
        <hr/> 
        <Basic_01.DefaultComponent1/>
        <Basic_01.DefaultComponent2/>        
      </section>
      <hr/>
      <section>
        <h2>02_CUSTOM_COMPONENT</h2>
        <CustomComponent_02/>
      </section>
      <section>
        <h1>03_EVENT_HANDLER</h1>
        <Component_Event_01/>
        <Component_Event_02/>
        <Component_Event_03/>
        <br/>
      </section>
    </div>
  );
}

export default App;
