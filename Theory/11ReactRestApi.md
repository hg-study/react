# React Rest Api

- [외부 API는 서버에서 호출](#외부-api는-서버에서-호출)
- [동기 요청과 비동기 요청](#동기-요청과-비동기-요청)
- [공공데이터](#공공데이터)
- [카카오 로그인](#카카오-로그인)

<br>

---

### 외부 API는 서버에서 호출

> 카카오, 공공데이터 같은 외부 API는 비밀 키가 필요하다. React 코드는 브라우저에 그대로 내려가 키가 노출되므로, 키가 필요한 호출은 Spring 서버가 하고 React는 그 서버를 호출한다. 서버가 `RestTemplate`으로 외부 API를 호출하는 방법은 Spring Boot 정리의 외부 API 연동 문서와 같다. 키는 설정 파일에서 읽고 이 저장소에는 `YOUR_...` 자리 표시자만 두었다.

---

### 동기 요청과 비동기 요청

> 카카오 로그인처럼 브라우저 주소가 카카오 화면으로 이동해야 하는 요청은 링크(`a href`)로 보내는 동기 방식이다. 화면이 그대로 있어야 하는 요청(프로필, 메시지, 날씨)은 axios로 보내는 비동기 방식이다. `async/await`로 결과를 기다리고 `try/catch`로 오류를 처리할 수 있다.

---

### 공공데이터

> 화면은 날씨와 버스 도착 정보를 서버 주소로 요청만 하고, 서버가 서비스 키를 붙여 공공데이터포털을 호출해 결과를 돌려준다.

<br>

- 예제 코드: [서버 공공데이터 컨트롤러](../RS06RestfulApiBn/src/main/java/com/example/demo/controller/OpenDataAPIController.java), [화면 공공데이터](../RS06RestfulApiFn/src/components/restful/OpenData.jsx)

---

### 카카오 로그인

> 서버가 카카오 로그인의 인가 코드 교환, 토큰 발급, 프로필 조회를 맡고, 화면은 링크와 버튼으로 각 단계를 요청한다. 토큰을 서버 필드에 저장하는 방식은 실습용이다.

<br>

- 예제 코드: [서버 카카오 컨트롤러](../RS06RestfulApiBn/src/main/java/com/example/demo/controller/KakaoRestfulAPIController.java), [화면 카카오](../RS06RestfulApiFn/src/components/restful/Kakao.jsx), [App.js](../RS06RestfulApiFn/src/App.js)
