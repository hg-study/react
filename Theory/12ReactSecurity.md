# React Security

- [토큰 쿠키 방식](#토큰-쿠키-방식)
- [withCredentials](#withcredentials)
- [axios 인터셉터](#axios-인터셉터)
- [로그인과 로그아웃](#로그인과-로그아웃)
- [서버 보안 설정](#서버-보안-설정)
- [참고 문서](#참고-문서)

<br>

---

### 토큰 쿠키 방식

> 서버가 로그인에 성공하면 JWT access-token을 HttpOnly 쿠키로 내려 준다. HttpOnly 쿠키는 JavaScript가 읽을 수 없어서 XSS로 토큰을 훔치기 어렵고, 브라우저가 이후 요청에 자동으로 실어 보낸다. 그래서 React는 토큰을 직접 저장하거나 헤더에 넣지 않는다. refresh-token은 서버가 Redis에 보관하고 access-token이 만료되면 서버 필터가 재발급한다.

---

### withCredentials

> 다른 출처의 서버와 쿠키를 주고받으려면 axios에 `withCredentials: true`를 주고, 서버 CORS 설정에서도 `allowCredentials(true)`와 구체적인 출처를 지정해야 한다(출처를 `*`로 두면 쿠키를 쓸 수 없다). 두 설정이 짝이다.

---

### axios 인터셉터

> `axios.create`로 공통 설정(`baseURL`, `withCredentials`)을 가진 인스턴스를 만들고, 인터셉터로 반복되는 처리를 모은다. 요청 인터셉터는 보호된 API를 호출하기 전에 `/validate`로 로그인 상태를 확인해 로그인하지 않았으면 로그인 화면으로 보낸다. 응답 인터셉터는 401(미인증) 응답을 받으면 로그인 화면으로 이동시킨다.

<br>

- 예제 코드: [axios 설정](../RS07SecurityFn/src/api/axiosConfig.js)

---

### 로그인과 로그아웃

> 로그인 화면은 아이디와 비밀번호를 JSON으로 서버에 보내고, 처음 열릴 때 이미 로그인된 상태인지 서버에 확인한다. 로그아웃 화면은 열리면 서버의 로그아웃 API를 호출해 Redis의 refresh-token과 쿠키를 지운 뒤 로그인 화면으로 이동한다. 보호 화면(사용자 정보)은 쿠키의 JWT로 서버에서 사용자 정보를 받아 보여 준다.

<br>

- 예제 코드: [로그인](../RS07SecurityFn/src/components/Login.jsx), [회원가입](../RS07SecurityFn/src/components/Join.jsx), [로그아웃](../RS07SecurityFn/src/components/Logout.jsx), [메인](../RS07SecurityFn/src/components/Main.jsx), [사용자](../RS07SecurityFn/src/components/User.jsx), [App.js](../RS07SecurityFn/src/App.js)

---

### 서버 보안 설정

> 서버는 세션을 쓰지 않는 무상태 설정, JWT 인증 필터, 로그인과 로그아웃 핸들러, REST 방식 예외 응답(401, 403 JSON)을 구성한다. 개념은 Spring Boot 정리의 Security 문서(기본, OAuth2, JWT, Redis)와 같다. 연습 폴더(`RS07Practice...`)는 직접 실습한 버전이고 `Ref` 폴더는 참고용 원본이다.

<br>

- 예제 코드: [보안 설정](../RS07SecurityBn/src/main/java/com/example/demo/config/SecurityConfig.java), [토큰 제공자](../RS07SecurityBn/src/main/java/com/example/demo/config/auth/jwt/JWTTokenProvider.java), [토큰 인증 필터](../RS07SecurityBn/src/main/java/com/example/demo/config/auth/jwt/JWTAuthorizationFilter.java), [로그인 성공](../RS07SecurityBn/src/main/java/com/example/demo/config/auth/handler/CustomLoginSuccessHandler.java), [전역 예외 처리](../RS07SecurityBn/src/main/java/com/example/demo/config/auth/exception/GlobalExceptionHandler.java), [REST 컨트롤러](../RS07SecurityBn/src/main/java/com/example/demo/controller/UserRestController.java), [Redis 설정](../RS07SecurityBn/src/main/java/com/example/demo/config/auth/redis/RedisConfig.java)

---

### 참고 문서

> 서버 구성 설명(`GuideBackend.md`)과 화면 제작 안내(`GuideFrontend.html`)를 함께 두었다.

<br>

- 예제 코드: [백엔드 가이드](../RS07SecurityGuide/GuideBackend.md), [프론트엔드 가이드](../RS07SecurityGuide/GuideFrontend.html)
