// =======================================
// 로그인 화면
// 아이디, 비밀번호로 로그인하고 토큰은 쿠키로 받음
// =======================================

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 로그인 화면. 서버가 성공하면 토큰을 HttpOnly 쿠키로 내려 주므로 React 는 토큰을 직접 다루지 않음
// withCredentials: 쿠키를 요청과 응답에 포함시키는 설정 (서버의 allowCredentials(true)와 짝)
const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate();

    useEffect(() => {
      
            const validateToken = async () => {
                try{
                    const resp = await axios.get("http://localhost:8080/validate",{withCredentials: true});
                    console.log("토큰 검증 성공!",resp);
                    navigate("/")
                }catch(error){
                        if(error.response?.status === 401){
                        return console.log("비로그인 상태");
                        }
                        console.log("토큰 검증 실패..",error);
                }
            }
        validateToken();
    }, [navigate])

    const handleLogin = async () => {
        try{
            const resp = await axios.post(
                "http://localhost:8080/login",
                { username, password },
                { headers: { "Content-Type": "application/json" }, withCredentials: true } ,
            );
            alert("로그인 성공: ", resp.data);
            console.log(resp.data);
            navigate("/"); // 성공 시 / 경로로 이동
        } catch(error) {
            console.error("로그인 실패: ", error.response ? error.response.data : error);
            alert("로그인 실패! 다시 시도해주세요."); // 실패 시 메시지 표시
        }
        
    }

    return (
        <div>
            <h1>LOGIN PAGE</h1>
            USERNAME : <input type="text" onChange={(e)=> setUsername(e.target.value)} /><br/>
            PASSWORD : <input type="password" onChange={(e)=> setPassword(e.target.value)} /><br/>
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    )
}

export default Login;