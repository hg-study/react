// =====================================================================
// 09_EX - 스타일링 응용 연습 "문제" (단계별)
// ---------------------------------------------------------------------
// 아래 각 부분을 직접 채워서 완성하세요.
// 다루는 것:
//   단계 1) 인라인 style 응용   : props 로 받은 값으로 동적 style 만들기
//   단계 2) 조건부 className     : 상태에 따라 클래스 추가 (.tag / .tag-active)
//   단계 3) SCSS import         : 중첩 문법(.scss-box span)
//   단계 4) react-bootstrap 응용 : Card / Badge / Alert / Button 조합
//   단계 5) Layout + BS5 혼용    : Navbar + Container + Row/Col + Card 로 레이아웃 합성
//
// 힌트: 필요한 import (react-bootstrap 컴포넌트, css, scss) 는 이미 되어 있습니다.
// ---------------------------------------------------------------------

import {
  Button,
  Badge,
  Alert,
  Card,
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import "./09_EX.css";
import "./09_EX.scss";

// ---------------------------------------------------------------------
// [단계 1] 인라인 style 응용 - props 로 받은 값으로 동적 style
//  color, size 를 props 로 받아 div 의 style 을 즉석에서 만드세요.
//         width/height = size, backgroundColor = color, 글자색 white
//         (고정값이 아니라 props 값으로 style 객체를 구성하는 것이 포인트)
// ---------------------------------------------------------------------
export function DynamicBox({ color, size }) {
  // style={{ width: size, height: size, backgroundColor: color, ... }}
  return <div style={{ width: size, height: size, backgroundColor: color, display: "inline-flex", marginRight: "8px" }}>{color}</div>;
}

// ---------------------------------------------------------------------
// [단계 2] 조건부 className - 상태(active)에 따라 클래스 추가
//  템플릿 문자열로 기본 클래스 "tag" 에,
//         active 가 true 면 "tag-active" 를 추가하세요.
//         형태:  className={`tag ${active ? "tag-active" : ""}`}
// ---------------------------------------------------------------------
export function ToggleTag({ label, active }) {
  // className 을 조건부로 구성
  return <span className={`tag ${active ? "tag-active" : ""}`}>{label}</span>;
}

// ---------------------------------------------------------------------
// [단계 3] SCSS import + className (중첩)
//  div 에 className="scss-box" 를 주고 안에 <span>scss-box</span> 를 넣으세요.
// ---------------------------------------------------------------------
export function ScssBox() {
  // className 과 <span>
  return  <div className="scss-box">
            <span>scss-box</span>
          </div>;
}

// ---------------------------------------------------------------------
// [단계 4] react-bootstrap 응용 - 여러 컴포넌트 조합
//  <Card> 안에 아래 요소들을 함께 배치하세요.
//         - Card.Title 에 텍스트 + <Badge bg="secondary">NEW</Badge>
//         - <Alert variant="info">알림 메시지</Alert>
//         - <Button variant="primary"> 와 <Button variant="outline-danger">
// ---------------------------------------------------------------------
export function BootstrapKit() {
  // Card / Card.Body / Card.Title / Badge / Alert / Button 조합
  return  <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>
                <Badge bg="secondary">NEW</Badge>
              </Card.Title>
                <Alert variant="info">알림 메시지</Alert>
                <Button variant="primary" className="me-2">확인</Button>
                <Button variant="outline-danger">닫기</Button>
              
            </Card.Body>
          </Card>;
}

// ---------------------------------------------------------------------
// [단계 5] Layout + React BS5 혼용
//  08단원의 레이아웃 합성(Header / Aside / Section)을
//  react-bootstrap 의 Navbar + Container + Row/Col + Card 로 구성하세요.
//  1) 상단에 <Navbar bg="dark" variant="dark"> 로 헤더(Brand + Nav.Link 2개)
//  2) <Container> 안에 <Row> 를 두고
//            - <Col md={4}> : Aside 역할 (Card body 로 "사이드 메뉴")
//            - <Col md={8}> : Section 역할 (Card body 로 "본문 콘텐츠")
// ---------------------------------------------------------------------
export function BootstrapLayout() {
  // Navbar(헤더) + Container > Row > Col(4)/Col(8) 합성
  
  return (
    <div>
      {/* 위 안내대로 Navbar 와 Container/Row/Col 을 작성하세요. */}
    </div>
  );
}

// =====================================================================
// [단계 6] 08 layouts 구조 + React BS5 혼용
// ---------------------------------------------------------------------
//  08단원 layouts 의 합성 구조를 그대로 만들되, 각 조각을 BS5 로 꾸밉니다.
//    TopHeader + Nav  -> Header (합성)
//    Layout = Header + (조건부 Aside + Section{children}) + Footer
//  ※ 잎(작은) 컴포넌트는 완성되어 있습니다. "합성" 부분만 채우면 됩니다.
// =====================================================================

// 08 의 TopHeader.jsx (완성)
function TopHeaderBS() {
  return <div className="bg-secondary text-white text-center py-1">TOP-HEADER</div>;
}

// 08 의 Nav.jsx -> BS Navbar (완성)
function NavBS() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">HOME</Nav.Link>
          <Nav.Link href="#">ABOUT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

// 08 의 Header.jsx = TopHeader + Nav
//  <header> 안에 <TopHeaderBS /> 와 <NavBS /> 를 합성하세요.
function HeaderBS() {
  // TopHeaderBS + NavBS 합성
  return <header></header>;
}

// 08 의 Aside.jsx -> BS Col (완성)
function AsideBS() {
  return (
    <Col md={3}>
      <div className="bg-light border p-3">ASIDE</div>
    </Col>
  );
}

// 08 의 Section.jsx -> BS Col + children
//  props 의 children 을 <Col> 안 div 에 출력하세요.
function SectionBS({ children }) {
  return (
    <Col>
      <div className="border p-3">{/* children */}</div>
    </Col>
  );
}

// 08 의 Footer.jsx (완성)
function FooterBS() {
  return <footer className="bg-dark text-white text-center py-2 mt-2">FOOTER</footer>;
}

// 08 의 Layout.jsx = Header + (조건부 Aside + Section) + Footer
//  1) children, isShowAside(기본값 true) 를 props 로 받으세요.
//  2) <HeaderBS /> 를 맨 위에 두세요.
//  3) <Container><Row> 안에
//            - isShowAside 가 true 일 때만 <AsideBS /> ( && 사용 )
//            - <SectionBS>{children}</SectionBS>
//  4) 맨 아래 <FooterBS /> 를 두세요.
function LayoutBS({ children }) {
  return (
    <div className="border mb-3">
      {/* HeaderBS + Container(Row: 조건부 AsideBS + SectionBS) + FooterBS 합성 */}
    </div>
  );
}

// =====================================================================
// [단계 7] layouts 각 영역에 "적절한" React BS5 컴포넌트 매핑
// ---------------------------------------------------------------------
//  각 레이아웃 역할에 맞는 BS5 컴포넌트를 직접 골라 적용하세요.
//  (아래 각 함수 위에 써둔 공식 문서 링크를 참고해서 작성하면 됩니다)
//
//    Header  -> Navbar      https://react-bootstrap.netlify.app/docs/components/navbar
//    Nav     -> Nav         https://react-bootstrap.netlify.app/docs/components/navs
//    Aside   -> ListGroup   https://react-bootstrap.netlify.app/docs/components/list-group
//    Section -> Card        https://react-bootstrap.netlify.app/docs/components/cards
//    레이아웃 -> Grid(Row/Col) https://react-bootstrap.netlify.app/docs/layout/grid
// =====================================================================

// Header -> Navbar
//  문서: https://react-bootstrap.netlify.app/docs/components/navbar
//  <Navbar bg="primary" variant="dark"> 안에 <Container><Navbar.Brand>EXAM_ALL</Navbar.Brand></Container>
function Header7() {
  // Navbar 로 헤더 만들기
  return <header></header>;
}

// Nav -> Nav (pills)
//  문서: https://react-bootstrap.netlify.app/docs/components/navs
//  <Nav variant="pills"> 안에 <Nav.Item><Nav.Link>HOME/ABOUT/CONTACT</Nav.Link></Nav.Item> 3개
function Nav7() {
  // Nav(pills) 메뉴 만들기
  return null;
}

// Aside -> ListGroup
//  문서: https://react-bootstrap.netlify.app/docs/components/list-group
//  <ListGroup> 안에 <ListGroup.Item action> 메뉴 항목 3개
function Aside7() {
  // ListGroup 으로 사이드 메뉴 만들기
  return null;
}

// Section -> Card
//  문서: https://react-bootstrap.netlify.app/docs/components/cards
//  <Card><Card.Header>SECTION</Card.Header><Card.Body>{children}</Card.Body></Card>
function Section7({ children }) {
  // Card 로 본문 영역 만들기 (children 출력)
  return <div>{children}</div>;
}

// 레이아웃 합성 -> Grid(Row/Col)
//  문서: https://react-bootstrap.netlify.app/docs/layout/grid
//  Header7 + Container( Nav7 + Row( Col md4: Aside7 / Col md8: Section7{children} ) ) 합성
function Layout7({ children }) {
  return (
    <div className="border mb-3">
      {/* 위 안내대로 각 영역 컴포넌트를 합성하세요. */}
    </div>
  );
}

// ---------------------------------------------------------------------
// 전체 단계를 한 번에 보여주는 메인 컴포넌트 (수정하지 않아도 됩니다)
// ---------------------------------------------------------------------
function EX_09() {
  return (
    <div style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
      <h3>[단계 1] 인라인 style 응용 (동적)</h3>
      <DynamicBox color="tomato" size="80px" />
      <DynamicBox color="teal" size="100px" />
      <hr />

      <h3>[단계 2] 조건부 className</h3>
      <ToggleTag label="React" active={true} />
      <ToggleTag label="Vue" active={false} />
      <ToggleTag label="Angular" active={false} />
      <hr />

      <h3>[단계 3] SCSS import</h3>
      <ScssBox />
      <hr />

      <h3>[단계 4] react-bootstrap 응용</h3>
      <BootstrapKit />
      <hr />

      <h3>[단계 5] Layout + React BS5 혼용</h3>
      <BootstrapLayout />
      <hr />

      <h3>[단계 6] 08 layouts 구조 + React BS5 혼용</h3>
      <LayoutBS isShowAside={true}>
        <h4>ABOUT</h4>
        <p>Aside 가 함께 보이는 BS5 레이아웃입니다.</p>
      </LayoutBS>
      <LayoutBS isShowAside={false}>
        <h4>HOME</h4>
        <p>Aside 없이 본문만 넓게 쓰는 BS5 레이아웃입니다.</p>
      </LayoutBS>
      <hr />

      <h3>[단계 7] 각 영역에 적절한 BS5 컴포넌트 매핑</h3>
      <Layout7>
        <p>Header=Navbar, Nav=Nav(pills), Aside=ListGroup, Section=Card 로 구성하세요.</p>
      </Layout7>
    </div>
  );
}

export default EX_09;
