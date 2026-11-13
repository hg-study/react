// =======================================
// About 페이지
// 쿼리 스트링으로 전달된 값을 읽음
// =======================================

import {Link,useLocation} from "react-router-dom"

const About = () => {
    // useLocation : 현재 주소 정보(pathname, search 등)를 돌려주는 Hook
    const location = useLocation();
    // console.log(location);

    // location.search 는 "?name=timo&age=100" 문자열. URLSearchParams 로 이름별 값을 꺼냄
    const query = new URLSearchParams(location.search);
    console.log(query.get("name"), query.get("age"));

    return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
        <h1>ABOUT PAGE</h1>
        <div>
            PARAMS : {query.get("name")}, {query.get("age")}
        </div>
    </div>
    )
}

export default About;
