// =====================================================================
// 08_EX - 레이아웃 합성(Composition) 응용 연습 "문제" (단계별)
// ---------------------------------------------------------------------
// 아래 각 부분을 직접 채워서 완성하세요.
// 다루는 것:
//   단계 1) children prop      : 컴포넌트 사이(여는/닫는 태그)의 내용 받기
//   단계 2) 컴포넌트 합성        : 작은 컴포넌트를 모아 Layout 만들기
//   단계 3) 기본 prop값 + 조건부 : isShowAside=true 기본값, && 로 조건부 렌더
// =====================================================================

// ---------------------------------------------------------------------
// 레이아웃 조각들 (수정 불필요)
// ---------------------------------------------------------------------
function Header() {
  return (
    <header style={{ background: "#cfe2ff", padding: "8px" }}>
      <b>HEADER</b>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#e2e3e5", padding: "8px" }}>
      <b>FOOTER</b>
    </footer>
  );
}

function Aside() {
  return (
    <aside style={{ background: "#fff3cd", padding: "8px", width: "120px" }}>
      ASIDE
    </aside>
  );
}

// ---------------------------------------------------------------------
// [단계 1] children prop
//  props 에서 children 을 받아 <section> 안에 {children} 으로 그려주세요.
//         (Section 을 <Section>내용</Section> 처럼 쓰면 '내용' 이 children 으로 들어옵니다)
// ---------------------------------------------------------------------
function Section({ children }) {
  return (
    <section style={{ flex: 1, background: "#d1e7dd", padding: "8px" }}>
      {children}
    </section>
  );
}

// ---------------------------------------------------------------------
// [단계 2] 컴포넌트 합성 + [단계 3] 기본 prop값 / 조건부 렌더
//  1) children, isShowAside 를 props 로 받되 isShowAside 의 기본값을 true 로 주세요.
//            ( function Layout({ children, isShowAside = true }) )
//  2) <Header /> 와 <Footer /> 사이의 <main> 안에
//            - isShowAside 가 true 일 때만 <Aside /> 를 렌더 ( && 사용 )
//            - <Section>{children}</Section> 로 본문을 합성
// ---------------------------------------------------------------------
function Layout({ children, isShowAside = true }) {
  return (
    <div style={{ border: "1px solid #999", marginBottom: "12px" }}>
      {/* Header / main(조건부 Aside + Section) / Footer 합성 */}
      <Header />
      <main style={{ display: "flex" }}>
        {isShowAside&&<Aside />}
        <Section>
          {children}
        </Section>
      </main>
      <Footer/>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 4] 슬롯(slot) 합성 - children 외에 title/footer 도 props 로 받기
//  title, footer, children 세 가지를 props 로 받아
//         - 윗칸에 {title}, 가운데에 {children}, 아랫칸에 {footer} 를 끼워 넣으세요.
//         (children 한 곳뿐 아니라 여러 영역을 props 로 받는 '슬롯' 패턴)
// ---------------------------------------------------------------------
export function Card({ title, footer, children }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "6px", marginBottom: "8px" }}>
      <div style={{ background: "#f1f3f5", padding: "6px", fontWeight: "bold" }}>
        {title}
      </div>
      <div style={{ padding: "8px" }}>{children}</div>
      <div style={{ background: "#f8f9fa", padding: "6px", fontSize: "12px", color: "#666" }}>
        {footer}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 5] 재사용 합성 - 배열을 받아 반복 레이아웃 만들기
//  items 배열을 map 으로 돌려, 각 항목을 칸(div)으로 반복 출력하세요. (key 는 index)
// ---------------------------------------------------------------------
export function Grid({ items }) {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
     {items.map((item, idx) => (
      <div key={idx}>
        {item}
      </div>
     )) } 

    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 6] 합성 + 조건부 variant - type 에 따라 색이 바뀌는 알림
//  1) type 의 기본값을 "info" 로 주세요.
//  2) colors 객체에서 type 에 맞는 색을 고르세요. (없으면 info 색)
//            const colors = { success: "#2f9e44", danger: "#e03131", info: "#1971c2" };
//  3) 고른 색을 borderLeft 와 글자색(color)에 적용하고 children 을 출력하세요.
// ---------------------------------------------------------------------
export function Alert({ type = "info", children }) {
  // colors 룩업으로 color 결정
  return (
    <div style={{ background: "#f8f9fa", padding: "8px", marginBottom: "6px" }}>
      {/* borderLeft / color 적용 + children */}
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------
// 전체 단계를 한 번에 보여주는 메인 컴포넌트 (수정하지 않아도 됩니다)
// ---------------------------------------------------------------------
function EX_08() {
  return (
    <div style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
      <h3>ABOUT 페이지 (Aside 있음 - 기본값)</h3>
      <Layout>
        <h2>ABOUT</h2>
        <p>Aside 가 함께 보이는 레이아웃입니다.</p>
      </Layout>

      <h3>HOME 페이지 (Aside 없음 - isShowAside={"{false}"})</h3>
      <Layout isShowAside={false}>
        <h2>HOME</h2>
        <p>Aside 없이 본문만 넓게 쓰는 레이아웃입니다.</p>
      </Layout>

      <h3>[단계 4] 슬롯(slot) 합성 - Card</h3>
      <Card title="공지사항" footer="2026-06-29 작성">
        <p>카드 본문(children)입니다. 제목/푸터는 props 로 받았습니다.</p>
      </Card>

      <h3>[단계 5] 재사용 합성 - Grid</h3>
      <Grid items={["A", "B", "C", "D", "E"]} />

      <h3 style={{ marginTop: "12px" }}>[단계 6] 합성 + 조건부 variant - Alert</h3>
      <Alert type="success">성공 메시지입니다.</Alert>
      <Alert type="danger">에러 메시지입니다.</Alert>
      <Alert type="info">정보 메시지입니다.</Alert>
    </div>
  );
}

export default EX_08;
