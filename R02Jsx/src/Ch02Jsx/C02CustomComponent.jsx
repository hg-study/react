// =======================================
// 사용자 정의 컴포넌트
// 파일 하나에 컴포넌트 하나를 만들고 default export 하는 기본 형태
// =======================================

// 빈 태그(<></>, Fragment) : 화면에 태그를 남기지 않고 여러 요소를 묶음
const CustomComponent = ()=>{
    return (
        <>
            <h2>02_CUSTOM_COMPONENT</h2>
        </>
    )
}

// default export 는 파일당 하나이며, 가져오는 쪽에서 이름을 마음대로 정해 import 함
export default CustomComponent;
