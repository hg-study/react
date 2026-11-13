// =====================================================================
// 09_EX_정답 - 스타일링 응용 연습 "정답"
// ---------------------------------------------------------------------
// 09_EX.jsx 문제의 모범 답안입니다. 직접 풀어본 뒤 비교용으로 보세요.
// 다루는 것:
//   단계 1) 인라인 style 응용   : props 로 받은 값으로 동적 style 만들기
//   단계 2) 조건부 className     : 상태에 따라 클래스 추가 (.tag / .tag-active)
//   단계 3) SCSS import         : 중첩 문법(.scss-box span)
//   단계 4) react-bootstrap 응용 : Card / Badge / Alert / Button 조합
//   단계 5) Layout + BS5 혼용    : Navbar + Container + Row/Col + Card 로 레이아웃 합성
// =====================================================================

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
//  색(color)과 크기(size)를 props 로 받아 style 객체를 즉석에서 만듭니다.
// ---------------------------------------------------------------------
export function DynamicBox({ color, size }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "8px",
      }}
    >
      {color}
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 2] 조건부 className - 상태(active)에 따라 클래스 추가
//  템플릿 문자열로 기본 클래스(.tag) + 조건부 클래스(.tag-active) 를 합칩니다.
// ---------------------------------------------------------------------
export function ToggleTag({ label, active }) {
  return <span className={`tag ${active ? "tag-active" : ""}`}>{label}</span>;
}

// ---------------------------------------------------------------------
// [단계 3] SCSS import + className (중첩)
// ---------------------------------------------------------------------
export function ScssBox() {
  return (
    <div className="scss-box">
      <span>scss-box</span>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 4] react-bootstrap 응용 - 여러 컴포넌트 조합
//  Card 안에 Title + Badge + Alert + Button 들을 함께 배치합니다.
// ---------------------------------------------------------------------
export function BootstrapKit() {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>
          react-bootstrap <Badge bg="secondary">NEW</Badge>
        </Card.Title>
        <Alert variant="info">알림: 저장되었습니다.</Alert>
        <Button variant="primary">확인</Button>{" "}
        <Button variant="outline-danger">취소</Button>
      </Card.Body>
    </Card>
  );
}

// ---------------------------------------------------------------------
// [단계 5] Layout + React BS5 혼용
//  08단원의 레이아웃 합성(Header / Aside / Section)을
//  react-bootstrap 의 Navbar + Container + Row/Col + Card 로 구성합니다.
//   - Navbar  : Header 역할 (상단 메뉴)
//   - Col md={4} : Aside 역할 (사이드)
//   - Col md={8} : Section 역할 (본문)
// ---------------------------------------------------------------------
export function BootstrapLayout() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">MyApp</Navbar.Brand>
          <Nav>
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-3">
        <Row>
          <Col md={4}>
            <Card body>ASIDE - 사이드 메뉴 영역</Card>
          </Col>
          <Col md={8}>
            <Card body>SECTION - 본문 콘텐츠 영역</Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// =====================================================================
// [단계 6] 08 layouts 구조 + React BS5 혼용
// ---------------------------------------------------------------------
//  08단원 layouts 의 합성 구조를 그대로 가져오되, 각 조각을 BS5 로 꾸밉니다.
//    TopHeader + Nav  -> Header (합성)
//    Layout = Header + (조건부 Aside + Section{children}) + Footer
//  BS5: Navbar / Container / Row / Col + 부트스트랩 유틸 클래스(bg-*, p-*, text-*)
// =====================================================================

// 08 의 TopHeader.jsx
function TopHeaderBS() {
  return <div className="bg-secondary text-white text-center py-1">TOP-HEADER</div>;
}

// 08 의 Nav.jsx -> BS Navbar 로
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

// 08 의 Header.jsx = TopHeader + Nav (합성)
function HeaderBS() {
  return (
    <header>
      <TopHeaderBS />
      <NavBS />
    </header>
  );
}

// 08 의 Aside.jsx -> BS Col
function AsideBS() {
  return (
    <Col md={3}>
      <div className="bg-light border p-3">ASIDE</div>
    </Col>
  );
}

// 08 의 Section.jsx -> BS Col + children
function SectionBS({ children }) {
  return (
    <Col>
      <div className="border p-3">{children}</div>
    </Col>
  );
}

// 08 의 Footer.jsx
function FooterBS() {
  return <footer className="bg-dark text-white text-center py-2 mt-2">FOOTER</footer>;
}

// 08 의 Layout.jsx = Header + (조건부 Aside + Section) + Footer
function LayoutBS({ children, isShowAside = true }) {
  return (
    <div className="border mb-3">
      <HeaderBS />
      <Container className="mt-2">
        <Row>
          {isShowAside && <AsideBS />}
          <SectionBS>{children}</SectionBS>
        </Row>
      </Container>
      <FooterBS />
    </div>
  );
}

// =====================================================================
// [단계 7] layouts 각 영역에 "적절한" React BS5 컴포넌트 매핑
// ---------------------------------------------------------------------
//  각 레이아웃 역할에 어울리는 BS5 컴포넌트를 골라 적용합니다.
//  (관련 공식 문서 링크는 각 컴포넌트 위에 적어 두었습니다)
//
//    Header  -> Navbar      https://react-bootstrap.netlify.app/docs/components/navbar
//    Nav     -> Nav         https://react-bootstrap.netlify.app/docs/components/navs
//    Aside   -> ListGroup   https://react-bootstrap.netlify.app/docs/components/list-group
//    Section -> Card        https://react-bootstrap.netlify.app/docs/components/cards
//    레이아웃 -> Grid(Row/Col) https://react-bootstrap.netlify.app/docs/layout/grid
// =====================================================================

// Header -> Navbar  (https://react-bootstrap.netlify.app/docs/components/navbar)
function Header7() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#">EXAM_ALL</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

// Nav -> Nav (pills)  (https://react-bootstrap.netlify.app/docs/components/navs)
function Nav7() {
  return (
    <Nav variant="pills" defaultActiveKey="home" className="my-2">
      <Nav.Item>
        <Nav.Link eventKey="home">HOME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="about">ABOUT</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="contact">CONTACT</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

// Aside -> ListGroup  (https://react-bootstrap.netlify.app/docs/components/list-group)
function Aside7() {
  return (
    <ListGroup>
      <ListGroup.Item action href="#menu1">메뉴 1</ListGroup.Item>
      <ListGroup.Item action href="#menu2">메뉴 2</ListGroup.Item>
      <ListGroup.Item action href="#menu3">메뉴 3</ListGroup.Item>
    </ListGroup>
  );
}

// Section -> Card  (https://react-bootstrap.netlify.app/docs/components/cards)
function Section7({ children }) {
  return (
    <Card>
      <Card.Header>SECTION</Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

// 레이아웃 합성 -> Grid(Row/Col)  (https://react-bootstrap.netlify.app/docs/layout/grid)
function Layout7({ children }) {
  return (
    <div className="border mb-3">
      <Header7 />
      <Container className="mt-2">
        <Nav7 />
        <Row>
          <Col md={4}>
            <Aside7 />
          </Col>
          <Col md={8}>
            <Section7>{children}</Section7>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// ---------------------------------------------------------------------
// 전체 단계를 한 번에 보여주는 메인 컴포넌트
// ---------------------------------------------------------------------
function EX_09_ANSWER() {
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
        <p>Header=Navbar, Nav=Nav(pills), Aside=ListGroup, Section=Card 로 구성했습니다.</p>
      </Layout7>
    </div>
  );
}

export default EX_09_ANSWER;
