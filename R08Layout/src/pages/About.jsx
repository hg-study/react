// =======================================
// About 페이지
// 사이드바가 있는 페이지
// =======================================

import Layout from "../layouts/Layout"

const About = () => {
    return (
        <Layout isShowAside={true}>
            <h1>ABOUT PAGE</h1>
            <p>
                ABOUT 페이지("/About") 영역입니다 -!
            </p>
        </Layout>
    );
}

export default About;
