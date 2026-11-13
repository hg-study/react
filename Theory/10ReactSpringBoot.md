# React Spring Boot

- [화면과 서버 분리 구조](#화면과-서버-분리-구조)
- [CORS](#cors)
- [axios 파라미터 전송](#axios-파라미터-전송)
- [검증 오류 표시](#검증-오류-표시)
- [예외 처리와 화면 이동](#예외-처리와-화면-이동)
- [JPA 저장](#jpa-저장)
- [파일 업로드와 다운로드](#파일-업로드와-다운로드)
- [연습문제 Todo](#연습문제-todo)

<br>

---

### 화면과 서버 분리 구조

> React 화면(FN, Front-end, 포트 3000)과 Spring Boot 서버(BN, Back-end)를 따로 실행하고, 화면은 axios로 서버의 REST API를 호출해 JSON을 주고받는다. 서버는 `@RestController`로 HTML이 아니라 데이터만 돌려주고 화면 그리기는 React가 한다. 이 저장소의 단계별 폴더는 `RS번호이름Bn`(서버)과 `RS번호이름Fn`(화면) 한 쌍이며, 서버는 `./gradlew bootRun`, 화면은 `npm install` 후 `npm start`로 실행한다.

---

### CORS

> 브라우저는 화면의 출처(주소와 포트)와 다른 서버의 응답을 막는다. React(3000)가 Spring(8080/8085/8095)을 호출하면 출처가 달라 막히므로, 서버 컨트롤러에 `@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})`로 허용할 출처를 알려 준다. 서버 주소와 포트는 화면의 axios 주소와 정확히 같아야 한다.

---

### axios 파라미터 전송

| 방식 | axios | 서버 |
| --- | --- | --- |
| 쿼리 스트링 | `get(url, { params: { name } })` | `@RequestParam` |
| 경로 변수 | ``get(`url/${id}`)`` | `@PathVariable` |
| JSON 본문 | `post(url, data, config)` | `@RequestBody` |

<br>

> `post(url, data, config)`는 두 번째 인자가 본문, 세 번째가 설정(헤더)이다. 본문을 `get`의 두 번째 인자에 넣으면 설정으로 해석되어 서버에 전달되지 않는다. 결과는 `.then(resp => ...)`로 받고 실패는 `.catch(err => ...)`로 받으며, 실패 응답은 `err.response.data`에 있다.

<br>

- 예제 코드: [서버 파라미터 컨트롤러](../RS01ParamBn/src/main/java/com/example/app/controller/ParamController.java), [화면 파라미터 전송](../RS01ParamFn/src/components/param.jsx), [App.js](../RS01ParamFn/src/App.js)

---

### 검증 오류 표시

> 서버가 `@Valid`와 `BindingResult`로 검증하고 실패하면 `{필드: 메시지}` JSON을 417 상태코드로 돌려준다. 화면은 `catch`에서 `err.response.data`를 state에 저장하고 각 입력칸 옆에 `{message && message.id}`처럼 출력한다. 서버 응답의 키가 곧 입력 필드 이름이라 응답 객체를 그대로 state에 넣으면 된다. 검증은 서버가 책임지고 화면은 결과를 보여 주는 역할이다.

<br>

- 예제 코드: [서버 메모 컨트롤러](../RS02ValidationBn/src/main/java/com/example/app/controller/MemoController.java), [서버 메모 DTO](../RS02ValidationBn/src/main/java/com/example/app/domain/dto/MemoDto.java), [화면 메모 입력](../RS02ValidationFn/src/components/Memo.jsx)

---

### 예외 처리와 화면 이동

> 서버는 `@ExceptionHandler`로 예외를 JSON(상태코드와 메시지)으로 응답한다. 화면은 `catch`에서 `useNavigate`로 오류 화면(`/exception`)으로 이동하며 `state`로 상태코드와 메시지를 넘기고, 오류 화면은 `useLocation().state`로 읽어 보여 준다.

<br>

```jsx
.catch(err => navigate('/exception', { state: { message: err.response.data.message, status: err.response?.status } }))
```

<br>

- 예제 코드: [서버 메모 컨트롤러](../RS03ExceptionBn/src/main/java/com/example/demo/controller/MemoController.java), [화면 오류 화면](../RS03ExceptionFn/src/components/Exception.jsx), [화면 목록](../RS03ExceptionFn/src/components/memo/List.jsx), [화면 입력](../RS03ExceptionFn/src/components/memo/Post.jsx), [App.js](../RS03ExceptionFn/src/App.js)

---

### JPA 저장

> 검증을 통과한 DTO를 서비스에서 엔티티로 바꿔 JPA Repository로 저장한다. 서비스 메서드에 `@Transactional`을 붙여 저장 중 예외가 나면 rollback한다. DB 연결은 `DataSource` Bean(HikariCP), 트랜잭션은 `JpaTransactionManager` Bean으로 등록한다. DB 비밀번호는 `YOUR_PASSWORD`로 가려 두었으므로 본인 값으로 바꿔 쓴다.

<br>

- 예제 코드: [서비스](../RS04JpaBn/src/main/java/com/example/demo/domain/service/MemoServiceImpl.java), [엔티티](../RS04JpaBn/src/main/java/com/example/demo/domain/entity/Memo.java), [Repository](../RS04JpaBn/src/main/java/com/example/demo/domain/repository/MemoRepository.java), [DataSource 설정](../RS04JpaBn/src/main/java/com/example/demo/config/DataSourceConfig.java), [JPA 설정](../RS04JpaBn/src/main/java/com/example/demo/config/JpaConfig.java), [트랜잭션 설정](../RS04JpaBn/src/main/java/com/example/demo/config/TxConfig.java), [화면 입력](../RS04JpaFn/src/components/memo/Post.jsx)

---

### 파일 업로드와 다운로드

> 화면은 `FormData`에 `append("files", file)`로 파일을 담아 `multipart/form-data`로 보낸다. 서버는 `MultipartFile[]`로 받아 업로드 폴더에 저장한다. 다운로드는 `responseType: "blob"`으로 데이터를 받고 `URL.createObjectURL`로 임시 주소를 만든 a 태그를 눌러 브라우저가 저장하게 한다. 서버는 파일 이름에서 경로를 걸러내고, 다운로드 경로가 업로드 폴더 안인지 검사해 경로 조작을 막았다.

<br>

- 예제 코드: [서버 업로드 컨트롤러](../RS05UploadBn/src/main/java/com/example/demo/controller/UpDownloadController.java), [서버 멀티파트 설정](../RS05UploadBn/src/main/java/com/example/demo/config/MultipartConfig.java), [서버 웹 MVC 설정](../RS05UploadBn/src/main/java/com/example/demo/config/WebMvcConfig.java), [화면 업로드](../RS05UploadFn/src/components/updownload/Upload.jsx), [화면 목록과 다운로드](../RS05UploadFn/src/components/updownload/List.jsx), [App.js](../RS05UploadFn/src/App.js)

---

### 연습문제 Todo

> 파라미터(01), 검증(02), 예외(03)를 묶은 Todo 문제이다. 서버는 완성되어 있고 화면의 axios 호출 세 가지(검색, 상세, 등록)와 검증 오류 표시, 예외 시 오류 화면 이동을 채우는 문제이다. 검색은 `params`, 상세는 경로 변수, 등록은 JSON 본문, 검증 실패는 417 응답을 `errors` state에 저장한다.

<br>

- 예제 코드: [서버 컨트롤러](../RS00TodoBn/src/main/java/com/example/demo/controller/TodoController.java), [서버 DTO](../RS00TodoBn/src/main/java/com/example/demo/domain/dto/TodoDto.java), [화면 API](../RS00TodoFn/src/api/todoApi.js), [화면 등록](../RS00TodoFn/src/components/todo/TodoAdd.jsx), [화면 목록](../RS00TodoFn/src/components/todo/TodoList.jsx), [화면 오류](../RS00TodoFn/src/components/ErrorPage.jsx), [App.js](../RS00TodoFn/src/App.js)
