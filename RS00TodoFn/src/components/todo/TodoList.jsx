import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchTodos, getTodo, divide } from "../../api/todoApi";

/*
 * ============================================================
 *  01_PARAM(GET) + 03_EXCEPTION
 * ============================================================
 */
const TodoList = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [todos, setTodos] = useState([]);

  // 에러를 /error 페이지로 보내는 공통 함수 
  const goError = (err) => {
    const data = err.response?.data || {};
    navigate("/error", {
      state: {
        status: data.status || err.response?.status,
        message: data.message || err.message,
      },
    });
  };

  const fetchList = async () => {
    try {
      // 3-1) 검색 결과를 상태에 저장
      const resp = await searchTodos(keyword);
      setTodos(resp.data);
    } catch (err) {
      goError(err);
    }
  };

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDetail = async (id) => {
    try {
      // 3-2) 상세보기 (없는 id 면 서버 404 → catch)
      const resp = await getTodo(id);
      alert("상세: #" + resp.data.id + " " + resp.data.title);
    } catch (err) {
      goError(err);
    }
  };

  const handleDivideZero = async () => {
    try {
      await divide(10, 0);
    } catch (err) {
      // 3-3) 예외 → 에러페이지로 이동
      goError(err);
    }
  };

  return (
    <div className="card">
      <h2>할 일 목록</h2>

      <div className="field">
        <input
          placeholder="제목 검색어"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={fetchList}>검색</button>
        <button onClick={handleDivideZero} style={{ marginLeft: 8, background: "#e84118" }}>
          예외 테스트(10/0)
        </button>
      </div>

      {todos.length === 0 && <p>데이터가 없습니다.</p>}
      {todos.map((t) => (
        <div className="todo-item" key={t.id}>
          <span>
            #{t.id} [{t.priority}] {t.title} - {t.writer} ({t.dueDate})
          </span>
          <button onClick={() => handleDetail(t.id)}>상세</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
