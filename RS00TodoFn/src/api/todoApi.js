import axios from "axios";

/*
 * ============================================================
 *  01_PARAM : axios 파라미터 전송 3가지 방식
 *  백엔드 주소: http://localhost:8085
 * ============================================================
 */

const BASE = "http://localhost:8085";

// -------- 1-1) @RequestParam : 쿼리스트링으로 검색 --------
// GET /todo/list?keyword=검색어
// 핵심: 두 번째 인자 { params: {...} } 가 ?key=value 로 변환된다.
export const searchTodos = (keyword) => {
  return axios.get(`${BASE}/todo/list`, {
    params: { keyword },
    headers: { "Content-Type": "application/json" },
  });
};

// -------- 1-2) 경로변수(@PathVariable) : 상세보기 --------
// GET /todo/detail/{id}
// 핵심: 값을 "URL 경로 자체"에 템플릿 리터럴로 끼워 넣는다.
export const getTodo = (id) => {
  return axios.get(`${BASE}/todo/detail/${id}`);
};

// -------- 1-3) @RequestBody : JSON 바디로 등록 --------
// POST /todo/add
// 핵심: post(url, data, config) — 두 번째 인자(data)가 요청 바디(JSON)다.
export const addTodo = (todo) => {
  return axios.post(`${BASE}/todo/add`, todo, {
    headers: { "Content-Type": "application/json" },
  });
};

// -------- 03_EXCEPTION 테스트용 나눗셈 호출  --------
export const divide = (n1, n2) => {
  return axios.get(`${BASE}/todo/divide/${n1}/${n2}`);
};
