// =======================================
// 로그아웃 화면
// 서버에 로그아웃을 요청하고 로그인 화면으로 이동
// =======================================

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {

        const performLogout = async () => {
            try {
                await axios.post( "http://localhost:8080/logout", {}, { withCredentials: true } );
            } catch (error) {
                console.error("로그아웃 실패", error);
            } finally {
                navigate("/login");
            }
        };

        performLogout();

    }, [navigate]);

    return (
        <div>
            <h1>LOGOUT PAGE</h1>
            <p>로그아웃 처리 중...</p>
        </div>
    );
};

export default Logout;