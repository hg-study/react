// =====================================================================
// 07_EX - 컴포넌트 간 통신 응용 연습 "문제" (단계별)
// ---------------------------------------------------------------------
// 아래 각 부분을 직접 채워서 완성하세요.
// 다루는 것:
//   단계 1) props        : 부모 -> 자식 데이터 전달
//   단계 2) callback      : 자식 -> 부모 데이터 전달 (함수를 props 로 내려줌)
//   단계 3) Context API   : createContext -> Provider -> useContext (prop drilling 회피)
// =====================================================================

import { createContext, useState, useContext } from "react";

// ---------------------------------------------------------------------
// [단계 3] ① Context 생성
//  createContext() 로 ThemeContext 를 만드세요.
// ---------------------------------------------------------------------
const ThemeContext = createContext();

// ---------------------------------------------------------------------
// [단계 1] props - 부모 -> 자식
//  부모가 내려준 title 을 props 로 받아 "자식이 받은 title : ?" 로 출력하세요.
// ---------------------------------------------------------------------

function Child1({title}) {
  // title 출력
  
  return <p>자식이 받은 title : {title}</p>;
}

// ---------------------------------------------------------------------
// [단계 2] callback - 자식 -> 부모
//  1) input 의 입력값을 value 상태로 관리하세요. (제어 컴포넌트)
//  2) 버튼을 누르면 부모가 내려준 onSend(value) 를 호출하세요.
// ---------------------------------------------------------------------
function Child2({ onSend }) {
  // const [value, setValue] = useState("");

  return (
    <div>
      {/* value / onChange 연결 */}
      <input type="text" placeholder="부모에게 보낼 메시지" />
      {/* onClick 에서 onSend(value) 호출 */}
      <button>부모에게 전달</button>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 3] ② Provider - 전역 값을 제공
//  theme 상태(useState("light"))를 만들고,
//         <ThemeContext.Provider value={{ theme, setTheme }}> 로 children 을 감싸세요.
// ---------------------------------------------------------------------
function ThemeProvider({ children }) {
  // theme 상태 + Provider 로 children 감싸기
  return <>{children}</>;
}

// ---------------------------------------------------------------------
// [단계 3] ③ useContext - 깊은 자식이 props 없이 전역 값을 소비
//  useContext(ThemeContext) 로 { theme, setTheme } 를 꺼내고,
//         현재 theme 을 출력 + 버튼으로 light <-> dark 전환하세요.
// ---------------------------------------------------------------------
function DeepChild() {
  // const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      현재 테마 : <b>?</b> {/* theme 출력 + 전환 버튼 */}
      <button>테마 전환</button>
    </div>
  );
}

// ---------------------------------------------------------------------
// 전체 단계를 한 번에 보여주는 메인 컴포넌트 (수정하지 않아도 됩니다)
// ---------------------------------------------------------------------
function EX_07() {
  const [message, setMessage] = useState("(아직 없음)");

  return (
    <div style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
      <h3>[단계 1] props 부모 → 자식</h3>
      <Child1 title="부모가 전달한 제목" />
      <hr />

      <h3>[단계 2] callback 자식 → 부모</h3>
      <p>부모가 받은 메시지 : {message}</p>
      <Child2 onSend={setMessage} />
      <hr />

      <h3>[단계 3] Context API (Provider + useContext)</h3>
      <ThemeProvider>
        <DeepChild />
      </ThemeProvider>
    </div>
  );
}

export default EX_07;
