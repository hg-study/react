// =======================================
// 메모 입력
// 입력 값을 서버로 보내고 검증 오류를 화면에 표시
// =======================================

import {useState, useEffect} from 'react';
import axios from 'axios'

// 메모 입력 폼. 서버가 검증에 실패하면(417) 응답의 {필드: 메시지} 를 message 에 저장해 입력칸 옆에 보여 줌
const Memo = () => {
    const [id, setId] = useState()
    const [writer, setWriter] = useState()
    const [text, setText] = useState()
    const [regdate, setRegdate] = useState()
    // message : 서버 응답 객체(성공이면 빈 객체, 실패면 필드별 오류 메시지)
    const [message, setMessage] = useState(null)

    const handleSubmit = ()=>{
        console.log({"id": id, "writer":writer, "text":text, "regdate":regdate});
        //
        axios   .post(`http://localhost:8095/memo/add`,
                {"id":id, "writer":writer, "text":text, "regdate":regdate},
                {"Content-Type":"application/json"})
                .then(resp => {
                    console.log(resp)
                    setMessage(resp.data);
                })
                // 2xx 가 아닌 응답은 axios 가 예외로 던져 catch 로 들어옴. 오류 내용은 err.response.data
                .catch(err => {
                    console.log(err.response)
                    setMessage(err.response.data);
                })
    }

    return (
        <div>
            <h2>MEMO ADD</h2>
            <div>
                <label>ID : </label> <span></span> <br />
                <input name="id" onChange={(e)=>{setId(e.target.value);}}/>
            </div>
            <div>
                <label>WRITER : </label> <span></span> <br />
                <input name="writer" onChange={(e)=>{setWriter(e.target.value);}}/>
            </div>
            <div>
                <label>TEXT : </label> <span></span> <br />
                <input name="text" onChange={(e)=>{setText(e.target.value);}}/>
            </div>
            <div>
                <label>REGDATE : </label> <span></span> <br />
                <input type="datetime-local" name="regdate" onChange={(e)=>{setRegdate(e.target.value);}}/>
            </div>
            <div>
                <button onClick={handleSubmit}>전송</button>
            </div>

        </div>
    )
}

export default Memo;