// =======================================
// 기본 JSX 요소
// 함수형 컴포넌트를 만드는 여러 방법과 props, 반복 출력
// =======================================

// JSX : 자바스크립트 안에 HTML 같은 태그를 쓰는 문법. 컴포넌트는 JSX 를 반환하는 함수이고 이름은 대문자로 시작함

// 01 화살표 함수로 JSX 요소 만들기
export const Element1 = ()=>{return <h2>HELLO WORLD - 1</h2>}

// 02 function 키워드로 만들기
export function Element2(){
    return <h2>HELLO WORLD - 2</h2>
}

// 03 props : 부모가 넘겨 준 값을 담은 객체. 조건에 따라 다른 문구를 보여 줌
// 첫 번째 방식 (if 마다 return)
// export function Element3(props){
//     if(props.auth === "ROLE_ADMIN"){
//         return <h2>관리자님 환영합니다, NAME= {props.name}</h2>
//     }else if(props.auth === "ROLE_USER"){
//         return <h2>유저님 환영합니다, NAME= {props.name}</h2>
//     }
// }

// 03-1 변수에 값을 담아 return 을 한 번만 쓰도록 줄인 방식
export function Element3(props) {
    console.log('EL3 props :>> ', props);
    let authority;
    if (props.auth === "ROLE_ADMIN") {
        authority = "관리자";
    } else if (props.auth === "ROLE_USER") {
        authority = "유저";
    } else {
        authority = "게스트";
    }
    // {} 안에는 자바스크립트 표현식을 쓸 수 있음
    return (<h2>{authority}님 환영합니다, NAME= {props.name}</h2>);
}

// 04 구조분해할당 : props 객체에서 필요한 값만 꺼내 매개변수로 바로 받음
export function Element4({auth, name}){
    console.log('EL4 props :>> ', auth, name);
    if(auth === "ROLE_ADMIN"){
        return <h2>관리자님 환영합니다, NAME= {name}</h2>
    }else if(auth === "ROLE_USER"){
        return <h2>유저님 환영합니다, NAME= {name}</h2>
    }
}

// 05 반복문 : 배열의 map 으로 요소를 만들어 나열함
// key : 반복으로 만든 요소를 구별하는 값. React 가 바뀐 항목만 갱신하려고 사용하며 고유한 값(id)이 좋음
export const Element5 = props =>{
    console.log('EL5 props :>> ',props);
    const list = props.list; // ["aaa","bbb","ccc","ddd"]
    console.log('list :>> ', list);
    // 컴포넌트는 최상위 요소를 하나만 반환해야 하므로 여러 요소는 빈 태그(<></>)로 감쌈
    return(
        <ul>
            {list.map((item,idx)=>{
                return (
                    <li key={idx}>
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}

// 06 여러 컴포넌트를 객체로 묶어 default export. 사용할 때는 Basic_01.DefaultComponent1 처럼 접근함
const DefaultComponent1 = () =>{return <h2>DefaultComponent1</h2>}
const DefaultComponent2 = () =>{return <h2>DefaultComponent2</h2>}

export default{
    DefaultComponent1,
    DefaultComponent2
}
