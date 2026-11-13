// =======================================
// onSubmit
// 폼 전송 이벤트에서 기본 동작(페이지 이동)을 막고 직접 처리
// =======================================

const EventComponent_05 = () => {
    const handleSubmit = (e) => {
        // preventDefault : 브라우저의 기본 동작(폼을 서버로 보내며 페이지가 새로고침됨)을 막음. React 에서는 보통 막고 JavaScript 로 요청을 보냄
        e.preventDefault();
        console.log("onSubmit...",e);
        // e.target.submit();   // 기본 동작처럼 동기 방식으로 전송하려면 직접 호출
    }

    return (
        <div>
            <hr/>
            <form onSubmit={handleSubmit} action="/test.jsp">
                <input type="text" /><br/>
                <button type="submit">전송</button>
            </form>
        </div>
    )
}

export default EventComponent_05;
