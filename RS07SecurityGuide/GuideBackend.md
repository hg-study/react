# 🔐 07_SPRINGSECURITY — 백엔드(BN) 가이드

> 기준 소스: `07_SPRINGSECURITY/BN` (실제 작업본, 패키지 `Config / Controller / Domain` 대문자)
> `BN_REF` 은 참고본이며, 이 문서는 **BN 코드 그대로**를 설명합니다.

React(`localhost:3000`) + Spring Boot(`localhost:8080`) 구조에서
**JWT를 HttpOnly 쿠키로 주고받는 세션리스(STATELESS) 인증 서버**입니다.
로그인은 시큐리티 기본 `formLogin` 이 아니라 **REST 컨트롤러가 직접 처리**하고,
RefreshToken 은 **Redis** 에 저장하며, 소셜 로그인(Kakao/Naver/Google)은 **OAuth2 Client** 로 붙입니다.

---

## 1. 전체 아키텍처 한눈에

```
[React :3000]
   │  fetch(credentials:'include')  ← 쿠키 자동 동봉
   ▼
[Spring :8080]  CORS(localhost:3000, allowCredentials=true)
   │
   ├─ JWTAuthorizationFilter (LogoutFilter 앞)   ← 매 요청마다 쿠키의 access-token 검증
   │     ├ 유효  → Authentication 생성 → SecurityContextHolder 저장
   │     └ 만료  → Redis의 RefreshToken으로 access-token 재발급(쿠키 재설정)
   │
   ├─ FilterChain (STATELESS, csrf off)
   │
   └─ 인가 규칙:  /,/join,/login = permitAll
                 /user  = USER·ADMIN
                 /manager = MANAGER
                 /admin = ADMIN
```

**핵심 3원칙**
1. **STATELESS** — 서버는 세션을 만들지 않는다. 신분증명은 매 요청 쿠키 속 JWT 로만.
2. **HttpOnly 쿠키** — 토큰을 JS 가 못 읽게 쿠키에 담는다(XSS 탈취 방어). `Authorization: Bearer` 헤더 방식보다 안전.
3. **로그인 직접 처리** — `formLogin().disable()` 후 `POST /login` 을 `UserRestController` 가 직접 처리 → `AuthenticationManager` 로 인증 → 토큰 발급.

---

## 2. 의존성 (build.gradle)

| 묶음 | 라이브러리 | 역할 |
|------|-----------|------|
| WEB | `spring-boot-starter-web` | REST/MVC |
| SECURITY | `spring-boot-starter-security` | 인증·인가 필터체인 |
| OAUTH2 | `spring-boot-starter-oauth2-client` | 소셜 로그인 |
| JWT | `jjwt-api / -impl / -jackson 0.11.5` | 토큰 생성·검증 |
| REDIS | `spring-boot-starter-data-redis` | RefreshToken 저장소 |
| DB | `data-jpa`, `mysql-connector-j` | 사용자/서명키 영속화 |
| VIEW | `thymeleaf`, `thymeleaf-extras-springsecurity6` | 서버 템플릿(테스트용) |

Java 21 / Spring Boot 3.4.5.

---

## 3. Config 계층 — 인프라 수동 구성

이 프로젝트는 auto-config 에 맡기지 않고 **DataSource / JPA / Tx 를 직접 Bean 등록**합니다(멀티 DB 확장 대비 패턴).

### 3-1. `DataSourceConfig`
HikariCP 로 MySQL(`testdb`, root/1234) 직접 연결.

### 3-2. `JPAConfig`
```java
@EntityScan("com.example.demo.Domain.Common.Entity")
@EnableJpaRepositories(basePackages="...Repository",
                       transactionManagerRef="jpaTransactionManager")
```
- `hibernate.hbm2ddl.auto = update` → 엔티티 기준으로 테이블 자동 생성/수정
- `show_sql = true` → 콘솔에 실행 SQL 출력

### 3-3. `TxConfig`
`jpaTransactionManager` Bean 을 이름 지정으로 등록. 핸들러의 `@Transactional(transactionManager="jpaTransactionManager")` 와 짝.

### 3-4. `SecurityConfig` ★ 가장 중요

```java
http.csrf(c -> c.disable());                       // CSRF off (REST + 쿠키 로그아웃 POST 허용)

http.authorizeHttpRequests(auth -> {
    auth.requestMatchers("/favicon.ico").permitAll();
    auth.requestMatchers("/","/join","/login").permitAll();
    auth.requestMatchers("/user").hasAnyRole("USER","ADMIN");
    auth.requestMatchers("/manager").hasAnyRole("MANAGER");
    auth.requestMatchers("/admin").hasAnyRole("ADMIN");
    auth.anyRequest().authenticated();
});

http.formLogin(login -> login.disable());          // ★ 기본 폼로그인 끔 → REST가 직접 처리

http.logout(logout -> {
    logout.permitAll();
    logout.addLogoutHandler(customLogoutHandler);          // 쿠키·Redis 정리
    logout.logoutSuccessHandler(customLogoutSuccessHandler);
});

http.exceptionHandling(ex -> {
    ex.authenticationEntryPoint(customAuthenticationEntryPoint); // 미인증 접근
    ex.accessDeniedHandler(customAccessDeniedHandler);           // 권한부족
});

http.oauth2Login(o -> o.loginPage("/login"));      // 소셜 로그인

http.sessionManagement(s ->
    s.sessionCreationPolicy(SessionCreationPolicy.STATELESS));   // ★ 세션 안 씀

http.addFilterBefore(jwtAuthorizationFilter, LogoutFilter.class); // ★ JWT 필터 삽입
```

추가 Bean:
- `PasswordEncoder` → **BCrypt**
- `authenticationManager(AuthenticationConfiguration)` → 로그인 직접 처리에 필요
- `corsConfigurationSource` → `http://localhost:3000` 허용 + `allowCredentials(true)`(쿠키 주고받기 필수)

> **권한 표기 규칙**: `hasAnyRole("USER")` 는 내부적으로 `ROLE_USER` 를 요구합니다.
> DB 의 `role` 컬럼에는 `ROLE_USER` 처럼 **접두사 포함** 문자열을 저장해야 매칭됩니다.

---

## 4. 인증 흐름 (실전 시나리오)

### 4-1. 회원가입 — `POST /join`
```java
User user = User.builder()
    .username(dto.getUsername())
    .password(passwordEncoder.encode(dto.getPassword())) // BCrypt 해시
    .role("ROLE_USER")                                    // 기본 권한
    .build();
userRepository.save(user);      // → "success"
```
평문 비밀번호는 **절대 저장하지 않고** BCrypt 해시로만 저장.

### 4-2. 로그인 — `POST /login` (핵심)
```java
// ① ID/PW 인증 시도 — 내부에서 PrincipalDetailsService.loadUserByUsername 호출 후 BCrypt 대조
Authentication authentication = authenticationManager.authenticate(
    new UsernamePasswordAuthenticationToken(dto.getUsername(), dto.getPassword()));

// ② JWT 발급 (access + refresh)
TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);

// ③ RefreshToken 은 Redis 에 저장 (key = "RT:{username}")
redisUtil.save("RT:"+authentication.getName(), tokenInfo.getRefreshToken());

// ④ access-token 과 username 을 HttpOnly 쿠키로 응답
Cookie accessCookie = new Cookie("access-token", tokenInfo.getAccessToken());
accessCookie.setHttpOnly(true);   // JS 접근 차단
accessCookie.setPath("/");
resp.addCookie(accessCookie);
Cookie userCookie = new Cookie("username", authentication.getName());
...
```
- 인증 실패 시 `AuthenticationException` → `401 UNAUTHORIZED` + `{state:fail, message}`
- 성공 시 `200` + `{state:success}` 그리고 **응답 헤더의 Set-Cookie 로 토큰 전달**

> ⚠️ **알아둘 버그 포인트**: `login()` 에서는
> `accessCookie.setMaxAge(ACCESS_TOKEN_EXPIRATION_TIME)` 로 **밀리초 값을 초 자리에 그대로** 넣습니다.
> 핸들러(`CustomLoginSuccessHandler`)는 `.../1000` 으로 나눠 초로 맞춥니다.
> 실무에서는 `setMaxAge` 는 **초 단위**이므로 `/1000` 이 맞습니다.

### 4-3. 인증 상태 확인 — `GET /validate`, `GET /user`
- `/validate` : `SecurityContextHolder` 의 Authentication 이 인증됐고 `ROLE_ANONYMOUS` 가 아니면 `200`, 아니면 `401`. React 가 로그인 여부 판별용으로 호출.
- `/user` : 파라미터로 주입된 `Authentication` 의 이름으로 DB 조회 → `{username, role}` 반환.

---

## 5. JWT 엔진

### 5-1. 서명키 관리 — `Signature` + `KeyGenerator` + `JWTTokenProvider.init()`
```java
@PostConstruct
public void init(){
    List<Signature> list = signatureRepository.findAll();
    if(list.isEmpty()){
        byte[] keyBytes = KeyGenerator.keyGen();          // 256bit 난수
        this.key = Keys.hmacShaKeyFor(keyBytes);
        signatureRepository.save(new Signature(keyBytes, LocalDate.now()));
    }else{
        this.key = Keys.hmacShaKeyFor(list.get(0).getKeyBytes()); // 기존 키 재사용
    }
}
```
서명키를 **DB(`Signature` 테이블)에 1개 저장**해 서버 재시작 후에도 동일 키를 유지 → 기존 토큰이 계속 유효.

### 5-2. 토큰 생성 — `generateToken(Authentication)`
- **AccessToken** : subject=username, claims=`username`,`auth`("ROLE_USER,ROLE_ADMIN"), 만료 `ACCESS_TOKEN_EXPIRATION_TIME`, HS256 서명
- **RefreshToken** : subject 고정 문자열, 만료만 담고 서명 → 재발급 용도
- 반환: `TokenInfo{grantType:"Bearer", accessToken, refreshToken}`

### 5-3. 토큰 → 인증객체 — `getAuthentication(token)`
클레임에서 `username`,`auth` 를 꺼내 `GrantedAuthority` 목록 복원 → `PrincipalDetails` → `UsernamePasswordAuthenticationToken` 반환.

### 5-4. 만료시간 — `JWTProperties`
```java
ACCESS_TOKEN_EXPIRATION_TIME  = 1000*60*1;  // 실제값 = 1분  (주석엔 5분)
REFRESH_TOKEN_EXPIRATION_TIME = 1000*60*2;  // 실제값 = 2분  (주석엔 10분)
ACCESS_TOKEN_COOKIE_NAME = "access-token";
```
> 주석과 실제 계산식이 다릅니다. **테스트 시 access 1분 / refresh 2분** 으로 동작합니다.

---

## 6. JWTAuthorizationFilter — 매 요청 관문

`OncePerRequestFilter` 상속, `LogoutFilter` 앞에 배치. 로직 요약:

```
쿠키에서 access-token, username 추출

if (access-token 존재)
    ├ validateToken() 성공 → getAuthentication → SecurityContextHolder 저장
    └ ExpiredJwtException(만료) →
          Redis("RT:username") 에서 RefreshToken 조회
          └ RefreshToken 유효 → 새 access-token 발급 → HttpOnly 쿠키 재설정 → 인증 저장
          └ RefreshToken 도 만료 → access/username 쿠키 제거(maxAge=0) + Redis 삭제
else (access-token 없음)
    └ username 으로 Redis RefreshToken 조회 → 위와 동일한 재발급 로직
```
- 재발급 access-token 은 `user.getRole()` 을 `auth` 클레임에 실어 다시 생성.
- **주석 처리된 MySQL(`JwtToken` 엔티티) 기반 refresh 로직**이 함께 남아 있습니다 → 현재 활성 경로는 **Redis 방식**입니다. (DB 방식으로 바꾸려면 주석 블록을 살리고 Redis 블록을 제거)

---

## 7. Domain 계층

| 요소 | 설명 |
|------|------|
| `User` (`@Entity`) | `@Id username`, `password`(BCrypt), `role`("ROLE_USER"…) |
| `UserDTO` | 계층 간 전달용 (username/password/role) |
| `Signature` (`@Entity`) | `@Id byte[] keyBytes`, `createAt` — JWT 서명키 1행 |
| `JwtToken` (`@Entity`) | access/refresh/username/auth/createAt — **DB refresh 방식용(현재 미사용)** |
| `UserRepository` | `JpaRepository<User,String>` + `findByUsername` |
| `SignatureRepository` | `JpaRepository<Signature, byte[]>` — ★ ID 타입 `byte[]` 로 맞춤 |

> `PrincipalDetails` 는 `UserDetails` + `OAuth2User` 를 **동시 구현** → 로컬 로그인과 소셜 로그인이 같은 principal 타입을 공유.
> `getAuthorities()` 는 `role` 을 `,` 로 분리해 `SimpleGrantedAuthority` 목록으로 변환.

---

## 8. Handler 4종 (+로그인 핸들러 2종)

| 핸들러 | 시점 | 동작 |
|--------|------|------|
| `CustomLogoutHandler` | 로그아웃 진입 | (세션 방식 코드 주석) — 토큰 방식은 SuccessHandler 에서 처리 |
| `CustomLogoutSuccessHandler` | 로그아웃 성공 | Redis `RT:{user}` 삭제 + access/username 쿠키 제거 → `/login?logout=...` |
| `CustomAuthenticationEntryPoint` | **미인증** 접근 | `/login?error=...` 리다이렉트 |
| `CustomAccessDeniedHandler` | 인증 후 **권한부족** | `/login?error=...` 리다이렉트 |
| `CustomLoginSuccessHandler` | (formLogin 성공) | 토큰 발급→쿠키, Redis refresh 저장, 권한별 `/admin·/manager·/user` 리다이렉트 |
| `CustomLoginFailureHandler` | (formLogin 실패) | `/login?error=...` |

> `formLogin().disable()` 상태이므로 **Login Success/Failure 핸들러는 현재 호출되지 않습니다**(REST 로그인으로 대체).
> 서버 렌더링 폼로그인으로 되돌리려면 `SecurityConfig` 의 `formLogin` 블록 주석을 살리면 그대로 재사용됩니다.

---

## 9. OAuth2 소셜 로그인

`PrincipalDetailsOauth2Service extends DefaultOAuth2UserService` 가 `loadUser()` 를 오버라이드:

```
provider 판별(Kakao/Naver/Google)
 → 각 *UserInfo(OAuth2UserInfo 구현) 로 표준화
 → username = provider + "_" + providerId  (예: "Kakao_123456")
 → DB에 없으면 ROLE_USER 로 신규 저장(비번은 "1234" 해시), 있으면 기존 조회
 → PrincipalDetails(userDTO, attributes) 반환
```
- `OAuth2UserInfo` 인터페이스로 3사 응답 구조 차이를 흡수(어댑터 패턴).
- `application.properties` 의 registration/provider 설정에 **실제 client-id/secret 을 채워야** 동작(현재 `-` 플레이스홀더).

---

## 10. Redis (RefreshToken 저장소)

| 구성 | 내용 |
|------|------|
| `RedisConfig` | Lettuce 커넥션 + `RedisTemplate<String,String>`(String 직렬화) |
| `RedisProperties` | `spring.redis.host/port` 주입 (localhost:6379) |
| `RedisUtil` | `save / getRefreshToken / delete / setDataExpire(TTL) / hasKey …` |

- 로그인 성공 → `RT:{username}` = refreshToken 저장(핸들러는 TTL 부여).
- 로그아웃 → 해당 키 삭제.
- 필터에서 access 만료 시 이 키를 읽어 재발급.

---

## 11. 엔드포인트 요약

| 메서드 | 경로 | 처리 | 권한 |
|--------|------|------|------|
| POST | `/join` | 회원가입(BCrypt 저장) | permitAll |
| POST | `/login` | ID/PW 인증→JWT 쿠키 발급 | permitAll |
| GET | `/validate` | 로그인 상태 확인(200/401) | 인증필요 |
| GET | `/user` | 내 정보 `{username,role}` | USER·ADMIN |
| GET | `/`(index) | 홈(Thymeleaf) | permitAll |
| POST | `/logout` | 쿠키·Redis 정리 | permitAll |
| GET | `/oauth2/authorization/{kakao\|naver\|google}` | 소셜 로그인 시작 | permitAll |

---

## 12. 실행 전 준비물

1. **MySQL** `testdb` (root / 1234) — `localhost:3306`
2. **Redis** — `localhost:6379` 기동
3. (선택) 소셜 로그인 쓰려면 `application.properties` 의 kakao/naver/google `client-id`, `client-secret` 실제 값 입력
4. React 프론트는 `localhost:3000` 에서 `fetch(..., { credentials: "include" })` 로 호출해야 쿠키가 오간다.

```bash
cd 07_SPRINGSECURITY/BN
./gradlew bootRun     # 또는 IDE 에서 DemoApplication 실행
```

---

## 13. 실무 관점 체크리스트(개선 여지)

- ⏱ **토큰 만료**: 현재 access 1분/refresh 2분(학습용). 운영은 access 15~30분 / refresh 수일 권장.
- 🍪 **쿠키 maxAge 단위**: `UserRestController.login()` 은 밀리초를 초 자리에 넣음 → `/1000` 로 통일 필요.
- 🔒 **HTTPS**: 운영 시 `cookie.setSecure(true)` + `SameSite` 설정.
- 🗝 **DB 계정/비번 하드코딩**(`DataSourceConfig`): 운영은 `application-*.properties`/환경변수로 분리.
- 🧹 **미사용 코드**: `JwtToken` 엔티티/DB refresh 블록, LoginSuccess/Failure 핸들러는 현재 경로에서 비활성 — 방식 전환 시 스위치로 활용 가능.

---

다음으로 **프론트(FN) 가이드**가 필요하면 말씀해 주세요. 로그인 폼 → `credentials:'include'` → 쿠키 기반 라우팅 흐름으로 이어서 정리하겠습니다.
