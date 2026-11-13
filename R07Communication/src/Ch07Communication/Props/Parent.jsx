// =======================================
// 부모 컴포넌트
// 자식에게 state 를 props 로 내려 주고, 자식이 호출할 함수를 넘김
// =======================================

import {useState, useEffect} from "react"
import Son from "./Son"
import { useContext } from "react"
import CustomContext from "../ContextAPI/Context"

// 컴포넌트 간 통신 규칙
// 부모 -> 자식 : props 로 값을 전달
// 자식 -> 부모 : 부모가 만든 콜백 함수를 props 로 내려 주고, 자식이 그 함수를 호출해 값을 올려 보냄
// React 의 데이터 흐름은 단방향(부모에서 자식)이라 자식이 부모 state 를 직접 바꿀 수 없음
const Parent = () =>{
    const [name, setName] = useState("홍길동")

    // 3. 소비(useContext) : Provider 가 제공한 전역 값을 props 없이 바로 꺼냄
    const {globalState, setGlobalState} = useContext(CustomContext);

    // 자식이 호출할 콜백 함수
    const handleChangeName = (name) => {
        setName(name);
    }

    return(
        <div>
            <h2>PARENT_01 COMPONENT</h2>
            부모 상태값 name : {name} <br />
            <hr/>
            ContextAPI PARENT에서 전역변수 확인 : {globalState}
            <hr/>
            <Son
                user ={name}
                handleChangeParentName={handleChangeName}
            />
        </div>
    )
}

export default Parent;
