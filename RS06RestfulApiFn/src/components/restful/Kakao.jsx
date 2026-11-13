// =======================================
// 카카오 연동 화면
// 서버를 거쳐 카카오 로그인, 프로필, 메시지 요청
// =======================================

import axios from "axios";
import {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";

// 카카오 로그인을 서버(Spring)에 맡기는 화면. 로그인과 로그아웃은 브라우저 주소가 카카오 화면으로 이동해야 해서 링크(a)로 요청하고(동기 방식),
// 프로필과 메시지는 화면이 그대로 있어야 해서 axios 로 요청함(비동기 방식)
const Kakao = () => {

    const [message, setMessage] = useState("")

    // 프로필 요청 (비동기): 서버가 저장한 토큰으로 카카오에 사용자 정보를 요청
    const handleProfile = () => {
        axios.get("http://localhost:8080/Kakao")
                .then(resp=>{console.log(resp)})
                .catch(err=>{console.log(err)}) 
    }

    // 나에게 카카오톡 메시지 보내기. async/await 로 요청 결과를 기다림
    const handleSendMessageMe = () => {
        
        const reqMessageMe = async () => {
            try{
                const response = await axios.get(`http://localhost:8080/Kakao/message/me/${message}`)
                console.log(response);
            }catch(error){
                console.log(error);
            }   
        }
        reqMessageMe();
    }
    return(
        <div>
            <h1>KAKAO</h1>
            <div>
                {/* 로그인 요청 - 동기방식 */}
                <a href="http://localhost:8080/Kakao/login">로그인 요청(동기방식)</a>
                <hr/>
                {/* 프로필 요청 - 비동기방식 */}
                <button onClick={handleProfile}>프로필 확인</button>
                {/* 메세지 권한 요청 - 동기방식 */}
                <a href="http://localhost:8080/Kakao/getMessageCode">메세지 권한 요청</a>
                <hr/>
                <input type="text" onChange={e=>{setMessage(e.target.value)}}/> <button onClick={handleSendMessageMe}>나에게 전송</button>
                {/* 로그아웃 요청 - 동기방식 */}
                <a href="http://localhost:8080/Kakao/logout3">로그아웃(동기방식)</a>


            </div>
        </div>
    )
}

export default Kakao;