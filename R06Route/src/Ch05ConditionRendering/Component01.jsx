// =======================================
// 조건부 렌더링 1 : if 문
// 조건에 따라 서로 다른 JSX 를 반환
// =======================================

// 조건부 렌더링 : 값에 따라 보여 줄 화면을 다르게 하는 것. 컴포넌트는 함수이므로 if 로 다른 JSX 를 return 할 수 있음
const Component01 = ({isAuth})=>{
    if(isAuth){
        return(
            <div>
                <h1>인증 완료 상태</h1>
            </div>
        )
    }else{
        return(
            <div>
                <h1>로그인이 필요합니다.</h1>
            </div>
        )
    }
}

export default Component01;
