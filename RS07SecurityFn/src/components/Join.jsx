// =======================================
// 회원가입 화면
// 아이디, 비밀번호를 서버에 전송
// =======================================

import { useEffect, useState } from "react"
import axios from "axios"
// 회원가입 화면. 입력 값을 JSON 으로 서버에 보냄
const Join = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleJoin = () => {
        axios.post('http://localhost:8080/join',
            { username, password },
            { headers: { 'Content-Type': 'application/json' } } )
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
    }
    return (

        <div>

            <h1>JOIN PAGE</h1>
            USERNAME : <input type="text" name="username" onChange={e => { setUsername(e.target.value) }} /><br />
            PASSWORD : <input type="password" name="password" onChange={e => { setPassword(e.target.value) }} /><br />
            <button onClick={handleJoin}>JOIN</button>


        </div>
    )
}

export default Join;