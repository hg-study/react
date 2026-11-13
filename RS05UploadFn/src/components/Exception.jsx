// =======================================
// 예외 화면
// 서버 예외의 상태코드와 메시지를 표시
// =======================================

import { useLocation } from 'react-router-dom';

// 예외 정보 표시 화면. 다른 화면에서 navigate("/exception", { state })로 넘긴 값을 useLocation 으로 읽음
const Exception = () => {
    const location = useLocation();
    const { message, status } = location.state || {}; // 예외 정보 가져오기

    return (
        <div>
            <h1>EXCEPTION</h1>
            {status && <p>Status Code: {status}</p>}
            {message && <p>Message: {message}</p>}
        </div>
    )
}
export default Exception;

