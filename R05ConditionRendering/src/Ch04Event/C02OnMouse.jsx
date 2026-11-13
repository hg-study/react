// =======================================
// onMouseEnter, onMouseLeave
// 마우스가 요소 위에 올라오거나 벗어날 때 state 를 바꿔 화면에 반영
// =======================================

import {useState, useEffect} from 'react';

const EventComponent_02 = () =>{
    const [str, setStr] = useState("INIT");

    // 마우스가 요소 안으로 들어올 때
    const handleMouseEnter = e => {
        console.log("mouse enter...",e);
        setStr("MOUSE ENTER")
    }

    // 마우스가 요소 밖으로 나갈 때
    const handleMouseLeave = e => {
        console.log("mouse leave...",e);
        setStr("MOUSE LEAVE")
    }

    // style : JSX 에서는 문자열이 아니라 객체로 지정하고, 속성 이름은 camelCase (border-radius -> borderRadius)
    return(
        <div
            className="box1"
                style={{width:"150px", height:"150px",border:"1px solid", borderRadius:"10px"}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
        >
            {str}
        </div>
    )
}

export default EventComponent_02
