// =======================================
// onKeyUp, onKeyDown
// 키보드 입력 이벤트에서 입력창의 값을 state 로 저장
// =======================================

import {useState} from "react"

const EventComponent_03 = () =>{
    const[state, setState] = useState("")

    // keyDown 은 글자가 입력되기 전에, keyUp 은 키를 뗀 뒤에 발생함. 그래서 keyDown 에서는 e.target.value 가 방금 누른 글자를 포함하지 않음
    const handleKeyUp = (e) => {console.log('KeyUp... ', e.target.value); setState(e.target.value)}
    const handleKeyDown =(e) => {console.log('KeyDown... ', e.target.value); setState(e.target.value)}

    return (
        <div>
            <div>
                STATE : {state}
            </div>
            KEY UP : <input type="text" onKeyUp={handleKeyUp} className="keyUp"/> <br/>
            KEY DOWN : <input type="text" onKeyDown={handleKeyDown}/> <br/>
        </div>
    )
}

export default EventComponent_03;
