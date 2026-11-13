// =======================================
// onChange
// 입력창, 체크박스, 라디오 버튼의 값이 바뀔 때 값을 읽어 state 에 저장
// =======================================

import {useState, useEffect} from "react"

const EventComponent_04 = () => {
    const [state, setState] = useState("")

    // onChange : 값이 바뀔 때마다 발생함. e.target 에서 name, value, type, checked 를 구조분해로 꺼냄
    // 체크박스는 value 대신 checked(true, false)를 읽어야 함
    const handleChange = (e) => {
        console.log('onChange...',e);
        const {name, value, type, checked} = e.target;
        console.log(name, value, type, checked)
        setState(value);
    }

    return (
        <div>
            <hr/>
            {state}
            <hr/>
            {/* <input type="text" onChange={handleChange} /> <br/> */}
            <input type="checkbox" onChange={handleChange} />체크박스<br/>
            {/* 라디오 버튼은 name 이 같아야 하나만 선택됨 */}
            <input type="radio" name="radio" value="r1" onChange={handleChange} />선택1<br/>
            <input type="radio" name="radio" value="r2" onChange={handleChange} />선택2<br/>
        </div>
    )
}

export default EventComponent_04;
