// =====================================================================
// 05_EX - 조건부 렌더링 응용 연습 "문제" (단계별)
// ---------------------------------------------------------------------
// 아래 각 컴포넌트의 부분을 직접 채워서 완성하세요.
//
// ★ 이번 연습의 포인트는 "return 의 형태" 입니다.
//   같은 결과라도 아래처럼 여러 형태로 쓸 수 있습니다. 지시된 형태로 작성해 보세요.
//     - JSX 를 <p> 등으로 감싸지 않고 삼항 결과를 "직접 return"
//     - if-else if 대신 "중첩 삼항"( a ? x : b ? y : z )
//     - && 단축평가 + 중괄호 없는 인라인 화살표 map
// =====================================================================

// ---------------------------------------------------------------------
// [단계 1] if / else - 로그인 메시지
//  isLogin 이 true 면 <p>로그인된 상태입니다.</p>,
//         false 면 <p>로그인이 필요합니다.</p> 를 return 하세요. (if / else 각각 return)
// ---------------------------------------------------------------------
export function LoginMessage({ isLogin }) {
  // if (isLogin) return ... ; else return ... ;
  if (isLogin) 
    return <p>로그인 된 상태입니다.</p>
  else 
    return <p>로그인이 필요합니다.</p>
}

// ---------------------------------------------------------------------
// [단계 2] 삼항 연산자 - JSX 를 "직접" 반환
//  <p> 같은 래퍼 없이, 삼항 연산자의 결과 JSX 를 그대로 return 하세요.
//         형태:  return isLogin ? <h4>...</h4> : <h4>...</h4>
//         - true  : "이름님 환영합니다."  (이름은 name prop)
//         - false : "게스트님 안녕하세요."
// ---------------------------------------------------------------------
export function Greeting({ isLogin, name }) {
  // return 조건 ? <h4>...</h4> : <h4>...</h4>;
  return isLogin ? <h4>{name}님 환영합니다.</h4> : <h4>{name}님 안녕하세요.</h4>
  
}

// ---------------------------------------------------------------------
// [단계 3] && 단축평가 - 인라인 화살표 map
//  <ul> 안에서 아래 두 가지를 모두 작성하세요.
//    1) items.length === 0 && <li>장바구니가 비어있습니다.</li>   (비었을 때 안내)
//    2) items && items.map((item, idx) => <li key={idx}>{item}</li>)
//       ※ 화살표 함수가 중괄호( { } )와 return 없이 JSX 를 바로 반환하도록
// ---------------------------------------------------------------------
export function CartList({ items }) {
  // <ul> { ...&&... } { items && items.map(...) } </ul>
  return (
  <ul>
    {items.length === 0 && <li>장바구니가 비어있습니다.</li>}
    
    {items && items.map((item, idx) => <li key={idx}>{item}</li>)}

  </ul>
  )
  
}

// ---------------------------------------------------------------------
// [단계 4] 중첩 삼항 연산자 + && 보너스
//  if-else if 를 쓰지 말고, "중첩 삼항" 한 줄로 등급을 표현하세요.
//         형태:  score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F"
//  "점수 n점 - 등급 X" 를 출력하고,
//         score 가 100 이면 뒤에 <b>(만점!)</b> 을 && 로 덧붙이세요.
// ---------------------------------------------------------------------
export function Grade({ score }) {
  // return ( <p> ... 중첩삼항 ... { score === 100 && <b>(만점!)</b> } </p> )
  return (
    <p>
      {score>= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F"}{score === 100 && <b> 만점!</b>}
    </p>
  )
}

// ---------------------------------------------------------------------
// [단계 5] 즉시실행함수(IIFE) 로 JSX 안에서 분기
//  JSX 중괄호 안에서는 if 를 바로 못 쓰므로, 즉시실행함수로 분기하세요.
//         형태:  {(() => { if (...) return "..."; ... return "..."; })()}
//         - status === "ready"    : "준비중"
//         - status === "shipping" : "배송중"
//         - 그 외                  : "배송완료"
// ---------------------------------------------------------------------
export function StatusBadge({ status }) {
  // return ( <p>주문 상태 : { (() => { ... })() }</p> )
  
  return ( 
  <p>주문 상태 : { (() => {
    if(status === "ready") return "준비중";
    else if(status === "shipping") return "배송중";
    else return "배송완료";
  })() }</p> 
)
}

// ---------------------------------------------------------------------
// [단계 6] || 기본값 + && 조건부 텍스트
//  1) name 이 비어있으면(false) "익명 사용자" 를 보여주세요. ( name || "익명 사용자" )
//  2) isAdmin 이 true 면 뒤에 " (관리자)" 를 덧붙이세요. ( isAdmin && " (관리자)" )
// ---------------------------------------------------------------------
export function UserName({ name, isAdmin }) {
  // return ( <p>{ name || ... }{ isAdmin && ... }</p> )
  return (
  <p>{ name || "익명 사용자" }{ isAdmin && "(관리자)" }</p> 
)
}

// ---------------------------------------------------------------------
// [단계 7] 조건 미충족 시 아무것도 렌더하지 않기 (return null)
//  isOpen 이 false 면 null 을 return 해서 화면에 아무것도 그리지 마세요.
//         isOpen 이 true 면 <div>비밀 내용이 공개되었습니다.</div> 를 return 하세요.
// ---------------------------------------------------------------------
export function SecretBox({ isOpen }) {
  // if (!isOpen) return null;  그 다음 정상 JSX return
  return (
    (() => {
    if(!isOpen) return null;
    else if(isOpen) return <div>비밀 내용이 공개되었습니다.</div>

  })() 
)
}

//   return ( 
//   <p>주문 상태 : { (() => {
//     if(status === "ready") return "준비중";
//     else if(status === "shipping") return "배송중";
//     else return "배송완료";
//   })() }</p> 
// )


// ---------------------------------------------------------------------
// [단계 8] 객체 룩업(lookup) 으로 분기
//  if/switch 대신, 상태별 라벨을 담은 객체를 만들고 [status] 로 꺼내세요.
//         형태:  const labels = { ready: "준비중", shipping: "배송중", done: "배송완료" };
//                return <p>주문 상태 : { labels[status] || "알수없음" }</p>
//         (매칭 안 되면 || 로 "알수없음")
// ---------------------------------------------------------------------
export function StatusLabel({ status }) {
  // labels 객체 + labels[status] || "알수없음"
  return null;
}

// ---------------------------------------------------------------------
// [단계 9] switch 문으로 분기 (case 마다 return)
//  color 값에 따라 switch 로 분기하고 case 마다 다른 JSX 를 return 하세요.
//         - "red"    : <p>정지</p>
//         - "green"  : <p>출발</p>
//         - "yellow" : <p>주의</p>
//         - default  : <p>신호 없음</p>
// ---------------------------------------------------------------------
export function TrafficLight({ color }) {
  // switch (color) { case ...: return ...; default: return ...; }
  return null;
}

// ---------------------------------------------------------------------
// [단계 10] 옵셔널 체이닝(?.) + ?? 기본값
//  user 가 없거나 user.name 이 없을 수 있습니다.
//         user?.name 으로 안전하게 접근하고, 없으면 ?? 로 "이름 없음" 을 보여주세요.
//         형태:  return <p>이름 : { user?.name ?? "이름 없음" }</p>
// ---------------------------------------------------------------------
export function Profile({ user }) {
  // user?.name ?? "이름 없음"
  return null;
}

// ---------------------------------------------------------------------
// 전체 단계를 한 번에 보여주는 메인 컴포넌트 (수정하지 않아도 됩니다)
// ---------------------------------------------------------------------
function EX_05() {
  return (
    <div style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
      <h3>[단계 1] if / else</h3>
      <LoginMessage isLogin={true} />
      <LoginMessage isLogin={false} />
      <hr />

      <h3>[단계 2] 삼항 연산자 (JSX 직접 반환)</h3>
      <Greeting isLogin={true} name="홍길동" />
      <Greeting isLogin={false} name="홍길동" />
      <hr />

      <h3>[단계 3] && 단축평가 (인라인 map)</h3>
      <CartList items={["사과", "우유", "빵"]} />
      <CartList items={[]} />
      <hr />

      <h3>[단계 4] 중첩 삼항 + 보너스</h3>
      <Grade score={100} />
      <Grade score={85} />
      <Grade score={72} />
      <Grade score={50} />
      <hr />

      <h3>[단계 5] 즉시실행함수(IIFE) 분기</h3>
      <StatusBadge status="ready" />
      <StatusBadge status="shipping" />
      <StatusBadge status="done" />
      <hr />

      <h3>[단계 6] || 기본값 + &&</h3>
      <UserName name="" isAdmin={false} />
      <UserName name="홍길동" isAdmin={true} />
      <hr />

      <h3>[단계 7] 조건 미충족 시 렌더 안 함 (return null)</h3>
      <SecretBox isOpen={true} />
      <SecretBox isOpen={false} />
      <hr />

      <h3>[단계 8] 객체 룩업 분기</h3>
      <StatusLabel status="ready" />
      <StatusLabel status="done" />
      <StatusLabel status="xxx" />
      <hr />

      <h3>[단계 9] switch 문 분기</h3>
      <TrafficLight color="red" />
      <TrafficLight color="green" />
      <TrafficLight color="purple" />
      <hr />

      <h3>[단계 10] 옵셔널 체이닝 + ?? 기본값</h3>
      <Profile user={{ name: "홍길동" }} />
      <Profile user={{}} />
      <Profile user={null} />
    </div>
  );
}

export default EX_05;
