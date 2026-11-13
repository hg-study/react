// =======================================
// 메뉴
// Link 로 페이지를 이동하는 메뉴
// =======================================

import { Link } from "react-router-dom"

const Nav = () =>{
    return (
        <nav>
            <Link to ="/">HOME</Link>&nbsp;|&nbsp;
            <Link to ="/About">ABOUT</Link>
        </nav>
    )
}

export default Nav
