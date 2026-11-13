// =======================================
// Contact 페이지
// 주소 경로의 변수를 읽음
// =======================================

import {Link, useParams} from "react-router-dom"

const Contact = () => {
    // useParams : Route 의 path 에 정의한 경로 변수(:name, :age)를 객체로 돌려주는 Hook
    // console.log(useParams());
    const{name, age} = useParams();

    return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
        <h1>CONTACT PAGE</h1>
        <div>
            Params : {name}, {age}
        </div>
    </div>
    )
}

export default Contact;
