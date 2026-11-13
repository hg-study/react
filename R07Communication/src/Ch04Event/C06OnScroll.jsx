// =======================================
// onScroll
// 스크롤 영역에서 스크롤 위치를 읽음
// =======================================

const EventComponent_06 = () => {
    // e.target.scrollTop : 스크롤된 거리(px)
    const handleScroll = (e) => { console.log('scrollTop :>> ', e.target.scrollTop);}

    // 바깥 박스(높이 500, overflow: scroll)보다 안쪽 박스(높이 1500)가 커서 스크롤이 생김
    return (
        <div
            style={{height: "500px", backgroundColor: "lightgray", overflow: "scroll"}}
            onScroll={handleScroll}
        >
            <div style={{height: "1500px", backgroundColor: "orange"}}>
            </div>
        </div>
    )
}

export default EventComponent_06;
