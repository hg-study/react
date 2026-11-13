// =======================================
// 앱 최상위 컴포넌트
// 컴포넌트 간 통신(props, 콜백, Context)을 확인
// =======================================

import Parent_01 from "./Ch07Communication/Props/Parent";
import CustomProvider from "./Ch07Communication/ContextAPI/Provider";
/*
  React Context API는 props를 여러 단계로 내려보내는 "prop drilling"을 피하고,
  전역적으로 공유할 데이터 (테마, 로그인 정보, 언어설정 등)를 컴포넌트 트리 어디서든 꺼내 쓰게 해주는 기능

  1 생성(Context생성) -> 2 제공(Provider) -> 3 소비(useContext)

  ------
  React Context API 
  요약 : 공용 저장소를 만들고(생성) → 데이터 넣고(Provider) → 필요한 곳에서 꺼내 쓴다(useContext)
  부모 → 자식 → 손자처럼 props를 계속 전달하지 않고,
  필요한 컴포넌트가 데이터를 직접 꺼내 쓸 수 있게 해주는 기능

  즉, 공용 저장소를 만들어 필요한 곳에서 바로 사용하는 방식

  사용 순서
  1. Context 생성(createContext) : 저장소 만들기
  2. Provider : 저장소에 데이터 넣기
  3. useContext : 필요한 곳에서 데이터 꺼내 쓰기

*/
function App() {
  return (
    <CustomProvider>
    <div className="App">
      <h1>컴포넌트 간 통신</h1>
      <Parent_01 />
    </div>
    
    </CustomProvider>
  );
}

export default App;
