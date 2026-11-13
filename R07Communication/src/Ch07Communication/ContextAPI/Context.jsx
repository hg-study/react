// =======================================
// Context 생성
// 컴포넌트 트리 전체에서 공유할 저장소를 만듦
// =======================================

import React from "react";

// 1. 생성 : createContext 가 만든 객체로 Provider(제공)와 useContext(소비)를 연결함
const AppContext = React.createContext()

export default AppContext
