// =======================================
// 헤더
// 상단 영역과 메뉴를 묶은 헤더
// =======================================

import TopHeader from "./TopHeader"
import Nav from "./Nav"

const Header = () =>{
    return (
        <header>
            <TopHeader/>
            <Nav />
        </header>
    )
}

export default Header
