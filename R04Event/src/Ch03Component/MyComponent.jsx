// =======================================
// state 와 useEffect
// 값이 바뀌면 화면을 다시 그리는 state 와 렌더링 이후 처리하는 Hook
// =======================================

import { useState, useEffect } from "react";

// Hook : 함수형 컴포넌트에서 state, 생명주기 같은 기능을 쓰게 해 주는 함수. use 로 시작하고 컴포넌트 최상단에서만 호출해야 함
const MyComponent = () => {
    // State : 컴포넌트가 기억하는 값. useState(초기값)은 [현재 값, 값을 바꾸는 함수] 를 반환함
    // setCount 로 바꾸면 컴포넌트가 다시 렌더링되어 화면이 갱신됨. 변수를 직접 바꾸면 화면이 갱신되지 않음
    const [count, setCount] = useState(1);

    // Handler
    const handleClick = () =>{
        // setState 는 비동기로 반영되어 바로 아래 줄에서 count 를 읽으면 이전 값임
        setCount(count+1);
        // console.log("clicked...", count);
    }

    // useEffect(함수, [의존성 배열]) : 렌더링이 끝난 뒤 실행되는 Hook
    // 빈 배열 [] : 처음 렌더링된 뒤 한 번만 실행됨 (초기값 설정, 데이터 요청)
    useEffect(()=>{
        console.log("init setting...");
    },[])

    // [count] : count 가 바뀔 때마다 실행됨 (특정 값 추적)
    useEffect(()=>{
        console.log("count state changed..",count);
    },[count])

    // UI
    return (
        <>
            <h1>MY_COMPONENT</h1>
            <button onClick={handleClick}>BTN Count : {count}</button>
        </>
    )
}

export default MyComponent;
