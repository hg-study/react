import { useState } from "react";
import { addTodo } from "../../api/todoApi";

/*
 * ============================================================
 *  02_VALIDATION + 01_PARAM(POST)
 *  - POST /todo/add 로 등록
 *  - 서버 유효성 오류(417) → 필드별 메시지 표시
 * ============================================================
 */
const TodoAdd = () => {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [errors, setErrors] = useState({});
  const [okMsg, setOkMsg] = useState("");

  const handleSubmit = async () => {
    setOkMsg("");
    setErrors({});

    const todo = {
      title,
      writer,
      priority: priority === "" ? null : Number(priority),
      dueDate,
    };

    try {
      // 2-1) 등록 요청 후 성공 메시지
      const resp = await addTodo(todo);
      setOkMsg("등록 성공! id=" + resp.data.id);
    } catch (err) {
      // 2-2) 서버가 내려준 { 필드명: 메시지 } 를 그대로 errors 에 저장
      if (err.response && err.response.status === 417) {
        setErrors(err.response.data);
      } else {
        // 그 외 오류는 알림
        setOkMsg("요청 실패: " + (err.response?.data?.message || err.message));
      }
    }
  };

  return (
    <div className="card">
      <h2>할 일 등록</h2>
      {okMsg && <p style={{ color: "green" }}>{okMsg}</p>}

      <div className="field">
        <label>제목</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        {/* 2-3) 필드별 에러 표시 */}
        {errors.title && <p className="err">{errors.title}</p>}
      </div>

      <div className="field">
        <label>작성자</label>
        <input value={writer} onChange={(e) => setWriter(e.target.value)} />
        {errors.writer && <p className="err">{errors.writer}</p>}
      </div>

      <div className="field">
        <label>우선순위 (1~5)</label>
        <input
          type="number"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        {errors.priority && <p className="err">{errors.priority}</p>}
      </div>

      <div className="field">
        <label>마감일</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        {errors.dueDate && <p className="err">{errors.dueDate}</p>}
      </div>

      <button onClick={handleSubmit}>등록</button>
    </div>
  );
};

export default TodoAdd;
