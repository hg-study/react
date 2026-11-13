// =======================================
// 이벤트 핸들러 기초
// 클릭, 키보드 이벤트에 함수를 연결
// =======================================

// 이벤트 핸들러 : 이벤트가 일어났을 때 실행되는 함수. JSX 에서는 onClick 처럼 camelCase 속성에 함수 자체를 넘김
// 주의: onClick={handleClick()} 처럼 괄호를 붙이면 렌더링할 때 바로 실행되므로 함수 이름만 넘겨야 함

// 01 컴포넌트 밖에 핸들러를 정의
function handleClick_01(){
    console.log("clicked_01...");
}

export function Component_Event_01(){
    return (
        <div>
            <h2>Component_Event_01...</h2>
            <button onClick={handleClick_01}>CLICK_ME</button>
        </div>
    )
}

// 02 컴포넌트 안에 핸들러를 정의 (state, handler, jsx 순서로 쓰는 것이 일반적)
export function Component_Event_02(){
    // state

    // handler
    function handleClick_02(){
        console.log("clicked_02...");
    }

    // jsx
    return (
        <div>
            <h2>Component_Event_02...</h2>
            <button onClick={handleClick_02}>CLICK_ME</button>
        </div>
    )
}

// 03 이벤트 객체 : 핸들러의 첫 번째 매개변수 e 로 받음. e.target 은 이벤트가 일어난 요소
export function Component_Event_03(){
    // state

    // handler
    function handleKeyDown(e){
        console.log('keyDown... :>> ', e.target.value);
    }

    // ui
    return (
        <div>
            <h2>Component_Event_03...</h2>
            <input onKeyDown={handleKeyDown}/>
        </div>
    )
}
