// =======================================
// Context 제공자
// 전역 state 를 만들어 하위 컴포넌트 모두가 쓸 수 있게 제공
// =======================================

// 2. 제공(Provider)
// 전역에서 사용할 상태(globalState)를 만들고 Provider 의 value 로 전달하면,
// Provider 로 감싼 모든 하위 컴포넌트에서 useContext 로 globalState 와 setGlobalState 를 사용할 수 있음

import { useState } from "react";
import CustomContext from "./Context";

// children : 이 컴포넌트의 여는 태그와 닫는 태그 사이에 넣은 하위 요소들
const CustomProvider = ({children}) =>{
    // 전역에서 사용할 상태 생성
    const [globalState, setGlobalState] = useState("KOREA_GLOBAL");

    return (
        // value 로 전역 상태와 상태를 바꾸는 함수를 함께 제공
        <CustomContext.Provider value={{ globalState, setGlobalState }}>
            {children}    {/* Provider 로 감싼 하위 컴포넌트를 그대로 렌더링 */}
        </CustomContext.Provider>
    )
}

export default CustomProvider
