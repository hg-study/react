// =====================================================================
// 04_EX - 이벤트 핸들링 응용 연습 "문제" (단계별)
// ---------------------------------------------------------------------
// 아래 각 컴포넌트의 부분을 직접 채워서 완성하세요.
// 다루는 이벤트: onClick / onMouse / onChange / onKey / onSubmit / onScroll
//
// 힌트: 화면이 바뀌어야 하는 값은 useState 로 관리합니다.
// =====================================================================

import { useCallback, useState } from "react";

// ---------------------------------------------------------------------
// [단계 1] onClick - 클릭 카운터
//  1) useState(0) 로 count 상태를 만드세요.
//  2) 버튼 onClick 으로 count 를 1씩 증가시키세요.
//  3) "버튼을 n번 눌렀습니다." 를 출력하세요.
// ---------------------------------------------------------------------
export function ClickCounter() {
  // count 상태 + handleClick
  const [count, setcount] = useState(0);
  const handleClick = () => {setcount(count+1)}
  return (
    <div>
      <h3>[단계 1] onClick - 클릭 카운터</h3>
      {/* onClick 연결 */}
      <button onClick={handleClick}>클릭</button>
      <p>버튼을 {count}번 눌렀습니다.</p>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 2] onMouseEnter / onMouseLeave - 마우스 오버 박스
//  1) useState(false) 로 hover 상태를 만드세요.
//  2) onMouseEnter -> true, onMouseLeave -> false
//  3) hover 면 배경 orange / 글자 "마우스 들어옴",
//            아니면 배경 lightgray / 글자 "마우스 나감"
// ---------------------------------------------------------------------
export function HoverBox() {
  // hover 상태
  const [str, setstr] = useState("-");
  const [hover, setnothover] = useState(false);

  const onMouseEnter = e => {
    setstr("마우스 들어옴");
    setnothover(true);
  }

    const onMouseLeave = e => {
    setstr("마우스 나감");
    setnothover(false);
  }

  return (
    <div>
      <h3>[단계 2] onMouse - 마우스 오버 박스</h3>
      {/* onMouseEnter / onMouseLeave 연결, style 의 backgroundColor 를 조건부로 */}
      <div
        style={{
          width: "150px",
          height: "80px",
          border: "1px solid",
          backgroundColor: hover ? "orange":"lightgray",
          lineHeight: "80px",
          textAlign: "center",
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        
      >
        {str}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 3] onChange - 실시간 입력 + 글자 수
//  1) useState("") 로 text 상태를 만드세요.
//  2) input 을 value={text} + onChange 로 '제어 컴포넌트' 로 만드세요.
//  3) "입력한 값 : text (n자)" 형태로 출력하세요. (글자수 = text.length)
// ---------------------------------------------------------------------
export function LiveInput() {
  // text 상태 + handleChange
  const [text, settext] = useState("");

  function onChange(e){settext(e.target.value)};

  return (
    <div>
      <h3>[단계 3] onChange - 실시간 입력</h3>
      {/* value 와 onChange 연결 */}
      <input type="text" placeholder="입력하세요" onChange={onChange} />
      <p>입력한 값 : ({text.length}자)</p>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 4] onKeyUp - Enter 키 감지
//  1) useState 로 message 상태를 만드세요. (초기값 "Enter 키를 눌러보세요.")
//  2) onKeyUp 에서 e.key 가 "Enter" 일 때만
//            message 를 "Enter 입력됨: 입력값" 으로 바꾸세요. (입력값 = e.target.value)
// ---------------------------------------------------------------------
export function EnterInput() {
  // message 상태 + handleKeyUp (e.key === "Enter" 체크)

  return (
    <div>
      <h3>[단계 4] onKeyUp - Enter 키 감지</h3>
      {/* onKeyUp 연결 */}
      <input type="text" placeholder="입력 후 Enter" />
      <p>Enter 키를 눌러보세요.</p>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 5] onSubmit - 폼 제출(목록 추가) + preventDefault
//  1) value(입력값), list(배열) 두 상태를 만드세요.
//  2) onSubmit 에서 e.preventDefault() 로 새로고침을 막으세요.
//  3) 입력값을 list 에 추가하고([...list, value]) 입력칸을 비우세요.
//  4) list 를 map 으로 <li> 목록 출력 (key 는 index)
// ---------------------------------------------------------------------
export function AddForm() {
  // value, list 상태 + handleSubmit

  return (
    <div>
      <h3>[단계 5] onSubmit - 할 일 추가</h3>
      {/* form onSubmit, input 은 제어 컴포넌트로 */}
      <form>
        <input type="text" placeholder="할 일 입력" />
        <button type="submit">추가</button>
      </form>
      <ul>{/* list.map 출력 */}</ul>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 6] onScroll - 스크롤 위치 표시
//  1) useState(0) 로 top 상태를 만드세요.
//  2) 스크롤 영역에 onScroll 을 달고 e.target.scrollTop 으로 top 을 갱신하세요.
//  3) "scrollTop : n px" 를 출력하세요.
// ---------------------------------------------------------------------
export function ScrollTracker() {
  // top 상태 + handleScroll

  return (
    <div>
      <h3>[단계 6] onScroll - 스크롤 위치</h3>
      <p>scrollTop : 0px</p>
      {/* onScroll 연결 */}
      <div style={{ height: "120px", overflow: "scroll", border: "1px solid" }}>
        <div style={{ height: "600px", backgroundColor: "skyblue" }}>
          박스 안에서 스크롤하세요.
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// 전체 단계를 한 번에 보여주는 메인 컴포넌트 (수정하지 않아도 됩니다)
// ---------------------------------------------------------------------
function EX_04() {
  return (
    <div style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
      <ClickCounter />
      <hr />
      <HoverBox />
      <hr />
      <LiveInput />
      <hr />
      <EnterInput />
      <hr />
      <AddForm />
      <hr />
      <ScrollTracker />
    </div>
  );
}

export default EX_04;
