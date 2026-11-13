// =======================================
// Home 페이지
// 사이드바가 없는 기본 페이지
// =======================================

import Layout from "../layouts/Layout"

// 페이지 컴포넌트는 Layout 으로 내용을 감싸기만 하면 됨
const Home = () => {
    return (
        <Layout isShowAside={false}>
            <h1>HOME PAGE</h1>
            <p>
                기본 페이지("/") 영역입니다 -!
            </p>
        </Layout>
    );
}

export default Home;
