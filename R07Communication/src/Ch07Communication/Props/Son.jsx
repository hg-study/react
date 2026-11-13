// =======================================
// 자식 컴포넌트
// 부모가 준 props 를 받고, 콜백 함수로 부모의 값을 바꿈
// =======================================

import {useState, useEffect} from "react"
import { useContext } from "react"
import CustomContext from "../ContextAPI/Context"

const Son = ({user, handleChangeParentName}) =>{
    // props 로 받은 값을 초기값으로 쓰는 자식 자신의 state (이후 부모 값이 바뀌어도 자동으로 따라가지는 않음)
    const [name, setName] = useState(user);

    // 전역 값 소비
    const {globalState, setGlobalState} = useContext(CustomContext);

    // 입력할 때마다 자식의 state 만 변경
    const handleChangeName = (e) => {
        setName(e.target.value);
        // handleChangeParentName(e.target.value); // 이렇게 하면 입력할 때마다 부모 값도 바뀜
    }

    // 버튼을 누르면 부모가 내려 준 콜백을 호출해 부모의 state 를 변경
    const handleClick = () =>{
        handleChangeParentName(name);
    }

    return(
        <div>
            <h2>SON_01 COMPONENT</h2>
            부모로부터 받은 상태값 name : {name}<br/>
            ContextAPI SON에서 전역변수 확인 : {globalState} <br/>
            <input onChange={handleChangeName} /><br/>
            <button onClick={handleClick}>Parent name 변경 버튼</button>
            <hr/>
        </div>
    )
}

export default Son;
