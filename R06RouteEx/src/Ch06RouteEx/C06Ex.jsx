// =====================================================================
// 06_EX - React Router 응용 연습 "문제" (단계별)
// ---------------------------------------------------------------------
// 아래 각 부분을 직접 채워서 완성하세요.
// 다루는 것: Routes/Route / Link / useParams / useLocation+쿼리 / useNavigate / * (NotFound)
//
// 힌트: react-router-dom 에서 필요한 것들을 import 했습니다.
// =====================================================================

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

// ---------------------------------------------------------------------
// 공통 네비게이션 (수정하지 않아도 됩니다)
// ---------------------------------------------------------------------
function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/user/7">USER (params)</Link></li>
        <li><Link to="/search?keyword=react">SEARCH (query)</Link></li>
        <li><Link to="/none">NOT FOUND</Link></li>
      </ul>
    </nav>
  );
}

// ---------------------------------------------------------------------
// [단계 1] Link / Route - 홈 페이지
//  (이 컴포넌트는 그대로 두고, 아래 Routes 에 라우트로 연결되는지 확인하세요.)
// ---------------------------------------------------------------------
function Home() {
  return <h2>[단계 1] HOME 페이지 - 위 메뉴로 이동해 보세요.</h2>;
}

// ---------------------------------------------------------------------
// [단계 2] useParams - 경로 파라미터(/user/:id)
//  useParams() 로 id 를 꺼내서 "파라미터 id : ?" 처럼 출력하세요.
// ---------------------------------------------------------------------
function User() {
  // const { id } = useParams();
  const {id} = useParams();
  return (<h2>[단계 2] USER 페이지 - 파라미터 id : {id}</h2>);
}

// ---------------------------------------------------------------------
// [단계 3] useLocation + URLSearchParams - 쿼리스트링(?keyword=)
//  useLocation().search 를 URLSearchParams 로 파싱해 keyword 를 꺼내세요.
//         const query = new URLSearchParams(location.search);
//         query.get("keyword")
// ---------------------------------------------------------------------
function Search() {
  // location -> URLSearchParams -> keyword
  const location = useLocation();
  console.log(location.search);
  const query = new URLSearchParams(location.search);
  return <h2>[단계 3] SEARCH 페이지 - 검색어 keyword : {query.get("keyword")}</h2>;
}

// ---------------------------------------------------------------------
// [단계 4] useNavigate - 버튼으로 이동(프로그래매틱)
//  useNavigate() 로 navigate 함수를 얻어
//         - 첫 버튼: navigate("/user/99")
//         - 둘째 버튼: navigate(-1)  (뒤로 가기)
// ---------------------------------------------------------------------
function Move() {
  // const navigate = useNavigate();
  const navigate = useNavigate();

  return (
    <div>
      <h2>[단계 4] 버튼으로 이동</h2>
      {/* onClick 에 navigate 연결 */}
      <button onClick={()=>navigate("/user/99")}>USER 99 로 이동</button>
      <button onClick={()=>navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 5] * 경로 - 일치하는 라우트가 없을 때 (NotFound)
// ---------------------------------------------------------------------
function NotFound() {
  return <h2>[단계 5] 404 - 페이지를 찾을 수 없습니다.</h2>;
}

// ---------------------------------------------------------------------
// Router 설정
//  <Routes> 안에 각 경로를 <Route> 로 연결하세요.
//         - "/"            -> <Home />
//         - "/user/:id"    -> <User />     (:id 파라미터 주의)
//         - "/search"      -> <Search />
//         - "/move"        -> <Move />
//         - "*"            -> <NotFound />  (그 외 모든 경로)
// ---------------------------------------------------------------------
function EX_06() {
  return (
    <Router>
      <div style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
        <Nav />
        <Link to="/move">[단계 4] 이동 페이지</Link>
        <hr />
        <Routes>
          {/* 위 안내대로 Route 들을 작성하세요. */}
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/search" element={<Search />} />
          <Route path="/move" element={<Move />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default EX_06;
