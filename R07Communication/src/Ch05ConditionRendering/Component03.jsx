// =======================================
// 조건부 렌더링 3 : && 연산자
// 값이 있을 때만 출력
// =======================================

// 조건 && JSX : 조건이 참일 때만 JSX 를 출력하고 거짓이면 아무것도 출력하지 않음
// items 가 undefined 일 때 items.map 을 호출하면 오류가 나므로 items && 로 먼저 확인함
const Component03 = ({items}) => {
    console.log('items :>> ', items);

    // 01 중괄호와 return 을 쓴 방식
    // return (
    //     <ul>
    //         {items && items.map((item, idx)=>{
    //             return (<li key = {idx}>{item}</li>)
    //         })}
    //     </ul>
    // )

    // 02 화살표 함수의 값 반환 생략
    return (
        <ul>
            {items && items.map((item, idx)=><li key = {idx}>{item}</li>)}
        </ul>
    )
}

export default Component03;
