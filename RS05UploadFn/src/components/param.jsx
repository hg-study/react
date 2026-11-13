// =======================================
// 파라미터 전송
// axios 로 서버에 값을 보내는 세 가지 방식
// =======================================

import axios from 'axios'

// 서버로 값을 보내는 세 가지 방식. axios 는 HTTP 요청을 보내는 라이브러리이고 Promise 를 반환함
// then 은 성공했을 때, catch 는 실패했을 때 실행됨. 응답은 resp.data 에 있음
const Param = () => {

    // 01 쿼리 스트링: get 의 두 번째 인자 { params } 가 ?name=홍길동 으로 변환됨
    const handleParam1 = () => {
        axios.get(`http://localhost:8095/param/01`,
            {
                params: { name: '홍길동' },
                headers: { 'Content-Type': 'application/json' }
            })
            .then(resp => { console.log(resp); })
            .catch(err => { console.log(err); })
    }
    // 02 경로 변수: 주소 문자열에 값을 직접 끼워 넣음
    const handleParam2 = () => {
        axios.get(`http://localhost:8095/param/02/${'홍길동'}/${55}/${'대구'}`)
            .then(resp => { console.log(resp); })
            .catch(err => { console.log(err); })
    }
    // 03 JSON 본문: post(주소, 본문, 설정) 순서. 두 번째 인자가 본문, 세 번째가 설정(헤더)
    const handleParam3 = () => {
        axios.post(`http://localhost:8095/param/03`,
            { "name": "하하", "age": 56, "addr": "서울" },
            { "Content-Type": "application/json" })
            .then(resp => { console.log(resp); })
            .catch(err => { console.log(err); })
    }

    return (
        <>
            <button onClick={handleParam1}> GET /param/01?name=홍길동</button>
            <hr />
            <button onClick={handleParam2}> GET /param/02/홍길동/55/대구</button>
            <hr />
            <button onClick={handleParam3}> POST /param/03 (JSON 본문)</button>
            <hr />
        </>
    )
}


export default Param;