// =======================================
// Home 페이지
// 쿼리 스트링과 경로 변수를 붙인 링크로 다른 페이지에 이동
// =======================================

import {Link} from "react-router-dom"

// Link : 페이지를 새로 불러오지 않고 주소만 바꿔 컴포넌트를 교체하는 링크. <a href> 는 서버에 다시 요청해 화면이 새로고침됨
const Home = () => {
    return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                {/* 쿼리 스트링(?name=timo&age=100)으로 값 전달 */}
                <li><Link to="/About?name=timo&age=100">About</Link></li>
                {/* 경로 변수(/hong/40)로 값 전달 */}
                <li><Link to="/Contact/hong/40">Contact</Link></li>
            </ul>
        </nav>
        <h1>HOME PAGE</h1>
    </div>
    )
}

export default Home;
