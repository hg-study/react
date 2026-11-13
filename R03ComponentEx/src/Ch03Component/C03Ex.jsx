// =====================================================================
// 03_EX - Component & Hooks 응용 연습 "문제" (단계별)
// ---------------------------------------------------------------------
// 아래 각 컴포넌트의 부분을 직접 채워서 완성하세요.
// 주제: useState / useEffect (Hooks)
// =====================================================================
import { useState, useEffect } from "react";

// ---------------------------------------------------------------------
// [단계 1] useState 기본 - 카운터
//  1) count state 를 만들고 초기값 0
//  2) +1 / -1 / 초기화(0) 버튼 3개 만들기
//  3) 현재 count 값을 화면에 출력
// ---------------------------------------------------------------------
export function Counter() {
  // useState 로 count 선언
  const [count, setCount] = useState(0);
  
  const plus = () => {setCount(count+1)}
  const minus = () => {setCount(count-1)}
  const reset = () => {setCount(0)}

    useEffect(()=>{
        console.log("count :",count);
    },[count])

  return (
    <div>
      <h4>[단계 1] 카운터</h4>
      {/* 현재 count 출력 + 버튼 3개 (+1 / -1 / 초기화) */}
      <h5>{count}</h5>
      <button onClick={plus}>+1</button> &nbsp;&nbsp;
      <button onClick={minus}>-1</button> &nbsp;&nbsp;
      <button onClick={reset}>초기화</button>

    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 2] useState 로 입력값(input) 관리
//  1) text state (초기값 "")
//  2) <input> 의 value 와 onChange 를 연결 (제어 컴포넌트)
//  3) 입력한 값을 아래 <p> 에 실시간으로 출력
// ---------------------------------------------------------------------
export function NameInput() {
  // text state 선언 + onChange 핸들러

  // state
  const [text, setText] = useState("");
  // handler
  function onChange(e){setText(e.target.value)};

  // ui
  return (
    <div>
      <h4>[단계 2] 입력값 관리</h4>
      {/* input 과 출력 <p> */}
      <input value={text} onChange={onChange}/>
      <p>{text}</p>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 3] 토글 (boolean state + 조건부 렌더링)
//  1) on state (초기값 false)
//  2) 버튼을 누르면 on 값을 반대로 토글 (!on)
//  3) on 이 true 면 "켜짐 💡", false 면 "꺼짐 ⚫" 출력
// ---------------------------------------------------------------------
export function ToggleLamp() {
  // on state 선언 + 토글 핸들러
  return (
    <div>
      <h4>[단계 3] 토글 램프</h4>
      {/* 상태 출력 + 토글 버튼 */}
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 4] useEffect - 최초 1회 (마운트 시 1번만 실행)
//  1) message state (초기값 "로딩중...")
//  2) useEffect 의 의존성 배열을 [] 로 주어 마운트 시 1번만
//           message 를 "환영합니다!" 로 변경
// ---------------------------------------------------------------------
export function WelcomeBox() {
  const [message, setMessage] = useState("로딩중...");
  // useEffect( () => { ... }, [] )

  return (
    <div>
      <h4>[단계 4] 마운트 시 1회 실행</h4>
      <p>{message}</p>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 5] useEffect - 의존성 값이 바뀔 때마다 실행
//  1) count state (초기값 0), +1 버튼
//  2) useEffect 의 의존성 배열을 [count] 로 주어
//           count 가 바뀔 때마다 document.title 을 "클릭 n회" 로 변경
// ---------------------------------------------------------------------
export function TitleCounter() {
  const [count, setCount] = useState(0);
  // useEffect( () => { document.title = ... }, [count] )

  return (
    <div>
      <h4>[단계 5] 의존성 변경마다 실행 (탭 제목 확인)</h4>
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

// ---------------------------------------------------------------------
// 전체 단계를 한 번에 보여주는 메인 컴포넌트 (수정하지 않아도 됩니다)
// ---------------------------------------------------------------------
function EX_03() {
  return (
    <div style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
      <Counter />
      <hr />
      <NameInput />
      <hr />
      <ToggleLamp />
      <hr />
      <WelcomeBox />
      <hr />
      <TitleCounter />
    </div>
  );
}

export default EX_03;
