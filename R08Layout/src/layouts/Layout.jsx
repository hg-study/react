// =======================================
// 레이아웃
// Header, Aside, Section, Footer 로 나눈 페이지 공통 틀
// =======================================

import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import Section from "./Section";
import "./css/Layout.css"

// children : Layout 태그 사이에 넣은 페이지 내용이 Section 안에 들어감. 모든 페이지가 같은 틀을 공유하고 내용만 바꿈
// isShowAside : 페이지마다 사이드바를 보일지 정하는 props (조건부 렌더링 &&)
const Layout = ({children, isShowAside}) =>{
    return (
        <div className="wrapper">
            <Header/>
            <main>
                {isShowAside&&<Aside />}
                <Section>
                    {children}
                </Section>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
